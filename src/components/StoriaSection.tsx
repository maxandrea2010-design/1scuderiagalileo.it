import React from 'react';
import { Trophy, Award, Shield, Flag, Compass, Flame } from 'lucide-react';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

const CountUp: React.FC<{ target: number; suffix?: string; duration?: number }> = ({
  target,
  suffix = '',
  duration = 1.8,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const steps = 60;
    const increment = target / steps;
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, (duration * 1000) / steps);
    return () => clearInterval(timer);
  }, [isInView, target, duration]);

  return (
    <div ref={ref} className="text-2xl sm:text-3xl font-bold text-[#E10600]">
      {count}{suffix}
    </div>
  );
};

export const StoriaSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });

  const statItems = [
    { target: 16, suffix: '', label: 'Mondiali Costruttori' },
    { target: 243, suffix: '+', label: 'Vittorie GP' },
    { target: 800, suffix: '+', label: 'Podi Conquistati' },
  ];

  const achievementItems = [
    {
      icon: Trophy,
      title: '16 Titoli Mondiali Costruttori FIA',
      desc: 'Record assoluto della Formula 1 dal 1950 ad oggi, un traguardo ineguagliato da qualsiasi altro costruttore mondiale.',
    },
    {
      icon: Award,
      title: '15 Titoli Mondiali Piloti',
      desc: 'Da Alberto Ascari a Juan Manuel Fangio, Niki Lauda, Michael Schumacher e Kimi Räikkönen, incisi nella leggenda eterna.',
    },
    {
      icon: Flag,
      title: 'Maranello Remote Operations Command',
      desc: 'Oltre 60 ingegneri di supporto collegati in tempo reale durante ogni sessione di prove libere, qualifiche e gara.',
    },
  ];

  const coreValues = [
    {
      icon: Flame,
      title: 'Passione Viscerale',
      desc: 'L\'energia inconfondibile di oltre 1.500 ingegneri, tecnici e meccanici a Maranello.',
    },
    {
      icon: Shield,
      title: 'Ingegneria di Frontiera',
      desc: 'Simulatore dinamico DIL di ultima generazione e galleria del vento all\'avanguardia.',
    },
  ];

  return (
    <section ref={sectionRef} id="chisiamo" className="w-full bg-transparent text-white py-24 px-6 sm:px-10 lg:px-16 border-t border-white/10">
      <div className="max-w-[1700px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column */}
          <div className="lg:col-span-6 space-y-6">
            <motion.span
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xs uppercase tracking-[0.25em] text-[#E10600] font-bold block"
            >
              Chi Siamo · Scuderia Ferrari
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 40, filter: 'blur(6px)' }}
              animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.05]"
            >
              Siamo velocità.<br />Siamo distinzione.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="text-base text-white/80 leading-relaxed font-normal pt-2"
            >
              Fondata nel 1929 da Enzo Ferrari, la Scuderia Ferrari è la squadra corse più vincente, longeva e iconica nella storia dell'automobilismo sportivo. Per la stagione Formula 1 2025, Maranello inaugura un capitolo senza precedenti, unendo al volante il talento innato di Charles Leclerc e l'esperienza ineguagliabile del 7 volte iridato Lewis Hamilton.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="text-sm text-white/70 leading-relaxed font-normal"
            >
              Non corriamo semplicemente per partecipare: ogni millesimo di secondo, ogni grammo di fibra di carbonio della SF-25 e ogni battito della nostra gente a Maranello è votato all'unico scopo degno del Cavallino Rampante: vincere il Campionato del Mondo.
            </motion.p>

            {/* Core Values 2x2 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
              {coreValues.map((val, idx) => {
                const Icon = val.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 32, scale: 0.95 }}
                    animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.5 + idx * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="p-4 rounded-xl bg-black/40 backdrop-blur-sm border border-white/20 shadow-lg hover:border-[#E10600]/50 transition-colors duration-300"
                  >
                    <Icon className="w-5 h-5 text-[#E10600] mb-2" />
                    <h4 className="text-sm font-bold text-white mb-1">{val.title}</h4>
                    <p className="text-xs text-white/70">{val.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right Column */}
          <motion.div
            className="lg:col-span-6 space-y-6"
            initial={{ opacity: 0, x: 60, filter: 'blur(8px)' }}
            animate={isInView ? { opacity: 1, x: 0, filter: 'blur(0px)' } : {}}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="p-8 sm:p-10 rounded-3xl bg-black/40 backdrop-blur-md border border-white/20 shadow-2xl space-y-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#E10600]/10 rounded-full blur-3xl pointer-events-none" />

              <h3 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
                <Trophy className="w-5 h-5 text-[#E10600]" />
                <span>I nostri traguardi nella Storia di F1</span>
              </h3>

              <div className="space-y-4">
                {achievementItems.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={idx}
                      className="flex items-start gap-4"
                      initial={{ opacity: 0, x: 30 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.55 + idx * 0.15 }}
                    >
                      <div className="w-10 h-10 rounded-full bg-[#E10600]/15 border border-[#E10600]/30 flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5 text-[#E10600]" />
                      </div>
                      <div>
                        <h5 className="text-sm font-bold text-white">{item.title}</h5>
                        <p className="text-xs text-white/70 mt-0.5">{item.desc}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Animated Numerical Metrics */}
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/10 text-center">
                {statItems.map((stat, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.9 + idx * 0.12 }}
                  >
                    <CountUp target={stat.target} suffix={stat.suffix} />
                    <div className="text-[11px] uppercase tracking-wider text-white/70 mt-1">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
