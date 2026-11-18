import React, { useEffect, useRef, useState } from 'react';
import { Flag, RefreshCw, Timer, Trophy, Wrench } from 'lucide-react';

type WheelId = 'fl' | 'fr' | 'rl' | 'rr';
type Phase = 'idle' | 'playing' | 'done';
type Flash = { wheel: WheelId; tone: 'good' | 'bad' } | null;

const WHEELS: { id: WheelId; short: string; label: string; position: string }[] = [
  { id: 'fl', short: 'AS', label: 'anteriore sinistro', position: 'left-[13%] top-[22%]' },
  { id: 'fr', short: 'AD', label: 'anteriore destro', position: 'left-[87%] top-[22%]' },
  { id: 'rl', short: 'PS', label: 'posteriore sinistro', position: 'left-[13%] bottom-[22%]' },
  { id: 'rr', short: 'PD', label: 'posteriore destro', position: 'left-[87%] bottom-[22%]' },
];

const TOTAL_JOBS = 8;
const WRONG_PENALTY = 1000;

const buildSequence = () => {
  const sequence: WheelId[] = [];
  while (sequence.length < TOTAL_JOBS) {
    const candidate = WHEELS[Math.floor(Math.random() * WHEELS.length)].id;
    if (sequence[sequence.length - 1] !== candidate) sequence.push(candidate);
  }
  return sequence;
};

const formatTime = (ms: number) => `${(ms / 1000).toFixed(3).replace('.', ',')} s`;

const rating = (ms: number) => {
  if (ms < 5500) return { title: 'Pit stop da record', text: 'La macchina è già in pista: mani veloci e nessun errore.' };
  if (ms < 7000) return { title: 'Crew da podio', text: 'Ottimo ritmo ai box. Ancora un po’ di allenamento e si vola.' };
  if (ms < 9000) return { title: 'Pit stop solido', text: 'Lavoro pulito, ma il cronometro dice che si può limare.' };
  return { title: 'Gomme ancora fredde', text: 'Troppe esitazioni: riprova e fai cantare le pistole pneumatiche.' };
};

export const PitStopChallenge: React.FC = () => {
  const [phase, setPhase] = useState<Phase>('idle');
  const [sequence, setSequence] = useState<WheelId[]>([]);
  const [step, setStep] = useState(0);
  const [elapsed, setElapsed] = useState(0);
  const [penalty, setPenalty] = useState(0);
  const [result, setResult] = useState<number | null>(null);
  const [flash, setFlash] = useState<Flash>(null);
  const startRef = useRef(0);
  const flashTimer = useRef<number | null>(null);

  useEffect(() => {
    if (phase !== 'playing') return;
    const id = window.setInterval(() => setElapsed(performance.now() - startRef.current), 40);
    return () => window.clearInterval(id);
  }, [phase]);

  useEffect(
    () => () => {
      if (flashTimer.current) window.clearTimeout(flashTimer.current);
    },
    [],
  );

  const triggerFlash = (wheel: WheelId, tone: 'good' | 'bad') => {
    if (flashTimer.current) window.clearTimeout(flashTimer.current);
    setFlash({ wheel, tone });
    flashTimer.current = window.setTimeout(() => setFlash(null), 240);
  };

  const start = () => {
    setSequence(buildSequence());
    setStep(0);
    setElapsed(0);
    setPenalty(0);
    setResult(null);
    setFlash(null);
    startRef.current = performance.now();
    setPhase('playing');
  };

  const tapWheel = (wheel: WheelId) => {
    if (phase !== 'playing') return;

    if (sequence[step] === wheel) {
      triggerFlash(wheel, 'good');
      const next = step + 1;
      setStep(next);
      if (next >= sequence.length) {
        const total = performance.now() - startRef.current + penalty;
        setResult(total);
        setPhase('done');
      }
      return;
    }

    triggerFlash(wheel, 'bad');
    setPenalty((value) => value + WRONG_PENALTY);
  };

  const activeWheel = phase === 'playing' ? WHEELS.find((wheel) => wheel.id === sequence[step]) : undefined;
  const verdict = result !== null ? rating(result) : null;

  return (
    <div className="relative h-full overflow-hidden rounded-2xl border border-cyan-400/25 bg-[radial-gradient(circle_at_top,_rgba(37,99,235,0.28),_transparent_60%)] bg-black/40 p-6">
      <div className="relative z-10 flex items-start justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.28em] text-cyan-300 font-bold">Minigame · Box</p>
          <h3 className="text-xl font-bold mt-1">Pit Stop Challenge</h3>
          <p className="text-sm text-white/70 mt-1 max-w-sm">
            Otto pneumatici da cambiare il più in fretta possibile. Tocca solo la gomma illuminata: ogni errore costa un secondo.
          </p>
        </div>
        <span className="hidden sm:flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-cyan-400/30 bg-cyan-400/10 text-cyan-300">
          <Wrench className="h-5 w-5" />
        </span>
      </div>

      <div className="relative z-10 mt-5 flex flex-wrap items-center gap-3 text-sm">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 font-mono tabular-nums text-white/90">
          <Timer className="h-4 w-4 text-cyan-300" />
          {formatTime(phase === 'done' && result !== null ? result : elapsed)}
        </span>
        <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/60">
          Penalità <strong className="text-amber-300">+{(penalty / 1000).toFixed(1)} s</strong>
        </span>
        <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/60">
          Gomme <strong className="text-cyan-300">{Math.min(step, TOTAL_JOBS)}/{TOTAL_JOBS}</strong>
        </span>
      </div>

      <div className="relative mt-4 h-[310px] sm:h-[340px]">
        <svg
          viewBox="0 0 180 300"
          className="pointer-events-none absolute left-1/2 top-1/2 h-[82%] w-auto -translate-x-1/2 -translate-y-1/2 drop-shadow-[0_0_28px_rgba(34,211,238,0.22)]"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="pitCarBody" x1="90" y1="20" x2="90" y2="290" gradientUnits="userSpaceOnUse">
              <stop stopColor="#67e8f9" />
              <stop offset="0.45" stopColor="#1d4ed8" />
              <stop offset="1" stopColor="#0f172a" />
            </linearGradient>
          </defs>
          <path
            d="M90 14c8 0 12 12 14 32l5 34 15 32v64l-15 34-6 44-13 44-13-44-6-44-15-34v-64l15-32 5-34c2-20 6-32 14-32Z"
            fill="url(#pitCarBody)"
            stroke="rgba(165,243,252,0.65)"
            strokeWidth="2"
          />
          <path d="M64 96h52l-8-26H72l-8 26Z" fill="#0e7490" opacity="0.8" />
          <ellipse cx="90" cy="142" rx="17" ry="25" fill="#020617" stroke="#22d3ee" strokeWidth="1.5" />
          <path d="M60 212h60M66 232h48" stroke="#67e8f9" strokeWidth="3" strokeLinecap="round" opacity="0.65" />
          <path d="M52 142h76" stroke="#38bdf8" strokeWidth="2" opacity="0.5" />
        </svg>

        {WHEELS.map((wheel) => {
          const active = activeWheel?.id === wheel.id;
          const good = flash?.wheel === wheel.id && flash.tone === 'good';
          const bad = flash?.wheel === wheel.id && flash.tone === 'bad';
          return (
            <button
              key={wheel.id}
              type="button"
              onClick={() => tapWheel(wheel.id)}
              disabled={phase !== 'playing'}
              title={`Gomma ${wheel.label}`}
              aria-label={`Cambia la gomma ${wheel.label}`}
              className={`absolute ${wheel.position} z-20 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-[6px] text-[10px] font-black uppercase tracking-widest transition-all duration-150 ${
                good
                  ? 'scale-110 border-emerald-300 bg-emerald-400/35 text-emerald-100 shadow-[0_0_30px_rgba(52,211,153,0.75)]'
                  : bad
                    ? 'scale-110 border-red-400 bg-red-500/30 text-red-100 shadow-[0_0_30px_rgba(248,113,113,0.75)]'
                    : active
                      ? 'scale-110 border-cyan-300 bg-cyan-400/25 text-cyan-50 shadow-[0_0_32px_rgba(34,211,238,0.75)]'
                      : 'border-white/20 bg-white/[0.04] text-white/45 hover:border-cyan-400/60 hover:text-cyan-100 disabled:cursor-default'
              }`}
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-black/25">{wheel.short}</span>
            </button>
          );
        })}

        {phase === 'idle' && (
          <div className="absolute inset-0 z-30 flex items-center justify-center bg-[#050b16]/55 backdrop-blur-[2px]">
            <button
              type="button"
              onClick={start}
              className="rounded-full bg-cyan-400 px-6 py-3 text-sm font-bold text-[#06111f] shadow-[0_0_30px_rgba(34,211,238,0.4)] transition hover:bg-cyan-300"
            >
              Accendi i motori
            </button>
          </div>
        )}
      </div>

      <div className="relative z-10 mt-3 min-h-[54px]">
        {phase === 'playing' && activeWheel && (
          <p className="text-sm text-white/80">
            Tocca la gomma <strong className="text-cyan-300">{activeWheel.label}</strong>.
          </p>
        )}
        {phase === 'done' && result !== null && verdict && (
          <div className="rounded-xl border border-cyan-400/30 bg-cyan-400/10 p-4">
            <p className="flex items-center gap-2 font-semibold text-cyan-200">
              <Trophy className="h-4 w-4" /> {verdict.title} · {formatTime(result)}
            </p>
            <p className="text-xs text-white/65 mt-1">{verdict.text}</p>
          </div>
        )}
        {phase === 'idle' && (
          <p className="flex items-center gap-2 text-xs text-white/50">
            <Flag className="h-4 w-4 text-cyan-400" /> Obiettivo: chiudere il pit stop sotto i 7 secondi.
          </p>
        )}
      </div>

      <div className="relative z-10 mt-3 flex items-center justify-between gap-3">
        <div className="flex gap-1.5">
          {Array.from({ length: TOTAL_JOBS }).map((_, index) => (
            <span
              key={index}
              className={`h-1.5 w-5 rounded-full transition-colors ${
                index < step ? 'bg-cyan-400' : index === step && phase === 'playing' ? 'bg-cyan-200' : 'bg-white/10'
              }`}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={start}
          className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-xs font-semibold text-white/80 transition hover:border-cyan-300/60 hover:text-cyan-200"
        >
          <RefreshCw className="h-3.5 w-3.5" /> {phase === 'idle' ? 'Prepara il box' : 'Riprova'}
        </button>
      </div>
    </div>
  );
};
