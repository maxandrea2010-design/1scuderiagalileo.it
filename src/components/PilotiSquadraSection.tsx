import React, { useRef } from 'react';
import { Users, Crown, Zap, Activity, Wind, Heart } from 'lucide-react';
import { motion, useInView } from 'motion/react';

export const PilotiSquadraSection: React.FC = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, margin: '-60px' });
  const gridInView = useInView(gridRef, { once: true, margin: '-60px' });

  const pilotiPuntiForza = [
    {
      icon: Users,
      badge: 'Leclerc #16 & Hamilton #44',
      title: 'Line-up Storica 2025',
      description:
        `L’incontro generazionale più atteso della Formula 1 moderna: il talento puro di Charles Leclerc affiancato alla leggenda e all’esperienza vincente del 7 volte campione del mondo Lewis Hamilton.`,
    },
    {
      icon: Crown,
      badge: 'Dal 1950 a Maranello',
      title: 'Eredità di Maranello',
      description:
        `L’unica scuderia sempre presente in ogni singola stagione del Campionato del Mondo F1. Un’eredità forgiata dal mito di Enzo Ferrari che vive in ogni componente della SF-25.`,
    },
    {
      icon: Zap,
      badge: '066/12 V6 Turbo Ibrido',
      title: 'Power Unit ad Efficienza Estrema',
      description:
        `Oltre 1.050 cavalli scaturiti dalla perfetta sincronizzazione tra combustione termica 1.6L e doppio rotore elettrico ERS (MGU-K e MGU-H) con risposta all’acceleratore istantanea.`,
    },
    {
      icon: Activity,
      badge: '1.5 GB di Dati al Giro',
      title: 'Muretto & Remote Garage',
      description:
        'Collegamento bidirezionale via satellite crittografato tra il muretto box nei Gran Premi e la sala operativa a Maranello. Oltre 300 sensori analizzano usura gomme e strategie in tempo reale.',
    },
    {
      icon: Wind,
      badge: 'Effetto Suolo Venturi 3D',
      title: 'Aerodinamica Chirurgica',
      description:
        'Fondo rastremato con canali Venturi a geometria progressiva per generare fino a 1.800 kg di carico verticale in curva rapida, eliminando il fenomeno del porpoising.',
    },
    {
      icon: Heart,
      badge: 'Marea Rossa Globale',
      title: 'Il Cuore dei Tifosi',
      description:
        'Una passione viscerale che non ha eguali nello sport mondiale. Da Monza a Suzuka, da Silverstone a San Paolo, il popolo ferrarista è il dodicesimo uomo in ogni curva del mondiale.',
    },
  ];

  return (
    <section id="piloti" className="w-full bg-transparent text-white py-24 px-6 sm:px-10 lg:px-16 border-t border-white/10">
      <div className="max-w-[1700px] mx-auto">
        {/* Section Header */}
        <div
          ref={headerRef}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-white/15"
        >
          <div>
            <motion.span
              className="text-xs uppercase tracking-[0.25em] text-[#E10600] font-bold block mb-2"
              initial={{ opacity: 0, x: -24 }}
              animate={headerInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.05 }}
            >
              Squadra Corse & Piloti
            </motion.span>
            <motion.h2
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white"
              initial={{ opacity: 0, y: 36, filter: 'blur(6px)' }}
              animate={headerInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              Privilegi di distinzione e velocità
            </motion.h2>
          </div>
          <motion.p
            className="text-sm text-white/70 max-w-md mt-4 md:mt-0 font-normal leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            La Scuderia Ferrari affronta il Campionato Mondiale 2025 con una determinazione assoluta. Uomini, macchine e leggenda uniti per vincere.
          </motion.p>
        </div>

        {/* 3x2 Grid */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pilotiPuntiForza.map((item, idx) => {
            const Icon = item.icon;
            const row = Math.floor(idx / 3);
            const col = idx % 3;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 48, scale: 0.94 }}
                animate={gridInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{
                  duration: 0.65,
                  delay: 0.1 + row * 0.15 + col * 0.08,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                whileHover={{ y: -6, boxShadow: '0 0 32px rgba(225,6,0,0.35)' }}
                className="p-8 rounded-2xl bg-black/40 backdrop-blur-md border border-white/20 hover:border-[#E10600]/80 transition-colors group relative overflow-hidden shadow-2xl cursor-default"
              >
                {/* Red glow accent on hover */}
                <motion.div
                  className="absolute inset-0 rounded-2xl pointer-events-none"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  style={{ background: 'radial-gradient(circle at 50% 0%, rgba(225,6,0,0.12) 0%, transparent 70%)' }}
                />

                <div className="flex items-center justify-between mb-6">
                  <motion.div
                    className="w-12 h-12 rounded-full bg-white/5 border border-white/15 flex items-center justify-center text-white group-hover:bg-[#E10600] group-hover:text-white transition-colors duration-300 shadow-md"
                    whileHover={{ rotate: 15, scale: 1.15 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#E10600] bg-[#E10600]/10 px-2.5 py-1 rounded-full border border-[#E10600]/30 font-semibold">
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 tracking-tight">{item.title}</h3>
                <p className="text-sm text-white/70 leading-relaxed font-normal">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
