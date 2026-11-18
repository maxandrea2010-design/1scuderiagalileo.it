import React, { useEffect, useRef, useState } from 'react';
import { Flag, Gauge, RefreshCw, Zap } from 'lucide-react';

type Phase = 'idle' | 'running' | 'done';
type Tone = 'perfect' | 'early' | 'late' | 'auto' | null;

const GEARS = 5;
const PERFECT_MIN = 76;
const PERFECT_MAX = 90;
const BASE_TIME = 9.6;
const PERFECT_BONUS = 0.45;
const EARLY_PENALTY = 0.3;
const LATE_PENALTY = 0.55;
const AUTO_PENALTY = 0.9;

type Runtime = {
  phase: Phase;
  gear: number;
  rpm: number;
  bonus: number;
  penalty: number;
};

const initialRuntime = (): Runtime => ({ phase: 'idle', gear: 1, rpm: 0, bonus: 0, penalty: 0 });

const formatTime = (seconds: number) => `${seconds.toFixed(2).replace('.', ',')} s`;

const resultRating = (seconds: number) => {
  if (seconds < 8) return { title: 'Lancio da pole', text: 'Cambi puliti e cattivi: la monoposto è scattata come un fulmine.' };
  if (seconds < 9) return { title: 'Ottimo tempismo', text: 'Sei entrato quasi sempre nella zona verde. Il muretto approva.' };
  if (seconds < 10) return { title: 'Buon giro di lancio', text: 'La base c’è: affina il piede destro e il tempo scenderà.' };
  return { title: 'Motore in attesa', text: 'Fuorigiri e cambi fuori finestra: riprova con più calma.' };
};

export const GearShiftSprint: React.FC = () => {
  const [phase, setPhase] = useState<Phase>('idle');
  const [gear, setGear] = useState(1);
  const [rpm, setRpm] = useState(0);
  const [bonus, setBonus] = useState(0);
  const [penalty, setPenalty] = useState(0);
  const [tone, setTone] = useState<Tone>(null);
  const [message, setMessage] = useState('Attendi il via: poi cambia marcia nella zona verde.');
  const [result, setResult] = useState<number | null>(null);
  const runtime = useRef<Runtime>(initialRuntime());

  const finish = () => {
    const state = runtime.current;
    state.phase = 'done';
    const total = Math.max(0, BASE_TIME - state.bonus + state.penalty);
    setResult(total);
    setRpm(100);
    setPhase('done');
  };

  const shift = (auto = false) => {
    const state = runtime.current;
    if (state.phase !== 'running') return;

    if (auto) {
      state.penalty += AUTO_PENALTY;
      setTone('auto');
      setMessage(`Fuorigiri: cambio automatico (+${AUTO_PENALTY.toFixed(2).replace('.', ',')} s)`);
    } else if (state.rpm >= PERFECT_MIN && state.rpm <= PERFECT_MAX) {
      state.bonus += PERFECT_BONUS;
      setTone('perfect');
      setMessage(`Cambio perfetto: −${PERFECT_BONUS.toFixed(2).replace('.', ',')} s`);
    } else if (state.rpm < PERFECT_MIN) {
      state.penalty += EARLY_PENALTY;
      setTone('early');
      setMessage(`Troppo presto: +${EARLY_PENALTY.toFixed(2).replace('.', ',')} s`);
    } else {
      state.penalty += LATE_PENALTY;
      setTone('late');
      setMessage(`Troppo tardi: +${LATE_PENALTY.toFixed(2).replace('.', ',')} s`);
    }

    setBonus(state.bonus);
    setPenalty(state.penalty);

    if (state.gear >= GEARS) {
      finish();
      return;
    }

    state.gear += 1;
    state.rpm = 24;
    setGear(state.gear);
    setRpm(state.rpm);
  };

  useEffect(() => {
    if (phase !== 'running') return;
    let frame = 0;
    let last = performance.now();

    const tick = (now: number) => {
      const state = runtime.current;
      if (state.phase !== 'running') return;

      const delta = Math.min(0.05, (now - last) / 1000);
      last = now;
      state.rpm = Math.min(100, state.rpm + (52 + state.gear * 8) * delta);
      setRpm(state.rpm);

      if (state.rpm >= 100) {
        shift(true);
        if (runtime.current.phase === 'running') {
          last = performance.now();
          frame = requestAnimationFrame(tick);
        }
        return;
      }

      frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [phase]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (runtime.current.phase === 'running' && (event.code === 'Space' || event.code === 'ArrowUp')) {
        event.preventDefault();
        shift(false);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  const start = () => {
    runtime.current = { phase: 'running', gear: 1, rpm: 0, bonus: 0, penalty: 0 };
    setPhase('running');
    setGear(1);
    setRpm(0);
    setBonus(0);
    setPenalty(0);
    setTone(null);
    setResult(null);
    setMessage('Prima marcia: cambia quando la lancetta entra nella zona verde.');
  };

  const inZone = rpm >= PERFECT_MIN && rpm <= PERFECT_MAX;
  const projected = Math.max(0, BASE_TIME - bonus + penalty);
  const verdict = result !== null ? resultRating(result) : null;
  const progress = phase === 'done' ? 100 : Math.min(100, ((gear - 1 + rpm / 100) / GEARS) * 100);
  const messageTone =
    tone === 'perfect' ? 'text-emerald-300' : tone === 'auto' ? 'text-red-300' : tone === 'early' || tone === 'late' ? 'text-amber-300' : 'text-white/60';

  return (
    <div className="relative h-full overflow-hidden rounded-2xl border border-blue-400/25 bg-[radial-gradient(circle_at_top_right,_rgba(29,78,216,0.3),_transparent_55%)] bg-black/40 p-6">
      <div className="relative z-10 flex items-start justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.28em] text-cyan-300 font-bold">Minigame · Drag race</p>
          <h3 className="text-xl font-bold mt-1">Cambio perfetto</h3>
          <p className="text-sm text-white/70 mt-1 max-w-sm">
            Fai salire il motore e cambia marcia nella zona verde. Cinque cambi per una partenza da record.
          </p>
        </div>
        <span className="hidden sm:flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-cyan-400/30 bg-cyan-400/10 text-cyan-300">
          <Gauge className="h-5 w-5" />
        </span>
      </div>

      <div className="relative z-10 mt-5 flex flex-wrap items-center gap-3 text-sm">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 font-mono tabular-nums text-white/90">
          <Flag className="h-4 w-4 text-cyan-300" />
          {formatTime(phase === 'done' && result !== null ? result : projected)}
        </span>
        <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/60">
          Marcia <strong className="text-cyan-300">{gear}/{GEARS}</strong>
        </span>
        <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/60">
          Bonus <strong className="text-emerald-300">−{bonus.toFixed(2).replace('.', ',')} s</strong>
        </span>
      </div>

      <div className="relative z-10 mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
        <div className="flex items-end justify-between gap-3">
          <div className="flex items-end gap-3">
            <span className={`text-5xl font-black leading-none tabular-nums ${inZone ? 'text-emerald-300' : rpm > 94 ? 'text-red-300' : 'text-cyan-200'}`}>
              {gear}
            </span>
            <span className="pb-1 text-xs uppercase tracking-[0.25em] text-white/45">marcia</span>
          </div>
          <p className="text-right text-[11px] uppercase tracking-[0.2em] text-white/45">
            Limite <span className="text-red-300">100</span>
          </p>
        </div>

        <div className="relative mt-4 h-4 overflow-hidden rounded-full border border-white/10 bg-[#0b1220]">
          <div
            className={`h-full rounded-full transition-[width] duration-75 ${
              inZone ? 'bg-gradient-to-r from-emerald-500 to-emerald-300' : rpm > 94 ? 'bg-gradient-to-r from-amber-500 to-red-500' : 'bg-gradient-to-r from-blue-600 to-cyan-400'
            }`}
            style={{ width: `${rpm}%` }}
          />
          <div
            className="absolute inset-y-0 bg-emerald-300/25"
            style={{ left: `${PERFECT_MIN}%`, width: `${PERFECT_MAX - PERFECT_MIN}%` }}
          />
          <div className="absolute inset-y-0 left-[76%] border-l border-emerald-200/50" />
          <div className="absolute inset-y-0 left-[90%] border-l border-emerald-200/50" />
          <div className="absolute -top-1 -bottom-1 w-0.5 bg-white shadow-[0_0_12px_rgba(255,255,255,0.8)]" style={{ left: `${rpm}%` }} />
        </div>
        <div className="mt-2 flex justify-between text-[10px] uppercase tracking-widest text-white/35">
          <span>0</span>
          <span className="text-emerald-300/80">zona verde {PERFECT_MIN}–{PERFECT_MAX}</span>
          <span>100</span>
        </div>
      </div>

      <div className="relative z-10 mt-5">
        <div className="relative h-8 overflow-hidden rounded-full border border-white/10 bg-white/[0.03]">
          <div className="absolute inset-y-0 left-0 bg-gradient-to-r from-blue-700/40 via-cyan-500/20 to-transparent" style={{ width: `${progress}%` }} />
          <div className="absolute inset-y-0 flex items-center" style={{ left: `calc(${progress}% - 10px)` }}>
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-cyan-300 text-[#06111f] shadow-[0_0_16px_rgba(34,211,238,0.7)]">
              <Zap className="h-3 w-3" />
            </span>
          </div>
          <div className="absolute inset-y-0 right-2 flex items-center text-white/30">
            <Flag className="h-3.5 w-3.5" />
          </div>
        </div>
      </div>

      <div className="relative z-10 mt-4 min-h-[52px]">
        {phase === 'done' && result !== null && verdict ? (
          <div className="rounded-xl border border-cyan-400/30 bg-cyan-400/10 p-4">
            <p className="flex items-center gap-2 font-semibold text-cyan-200">
              <Flag className="h-4 w-4" /> {verdict.title} · {formatTime(result)}
            </p>
            <p className="text-xs text-white/65 mt-1">{verdict.text}</p>
          </div>
        ) : (
          <p className={`text-sm ${messageTone}`}>{message}</p>
        )}
      </div>

      <div className="relative z-10 mt-4 flex items-center gap-3">
        <button
          type="button"
          onClick={() => (phase === 'running' ? shift(false) : start())}
          className="rounded-full bg-cyan-400 px-5 py-2.5 text-sm font-bold text-[#06111f] transition hover:bg-cyan-300"
        >
          {phase === 'running' ? 'Cambia marcia' : phase === 'done' ? 'Riprova il lancio' : 'Accendi il motore'}
        </button>
        {phase === 'running' ? (
          <span className="text-xs text-white/45">
            oppure premi <kbd className="rounded border border-white/15 bg-white/5 px-1.5 py-0.5 text-white/70">Spazio</kbd>
          </span>
        ) : (
          <button
            type="button"
            onClick={start}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-xs font-semibold text-white/80 transition hover:border-cyan-300/60 hover:text-cyan-200"
          >
            <RefreshCw className="h-3.5 w-3.5" /> Reset
          </button>
        )}
      </div>
    </div>
  );
};
