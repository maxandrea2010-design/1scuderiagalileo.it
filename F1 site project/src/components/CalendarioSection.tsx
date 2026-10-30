import React, { useState, useRef } from 'react';
import { ArrowUpRight, Trophy, MapPin, Flag, Calendar, Compass } from 'lucide-react';
import { motion, useInView, AnimatePresence } from 'motion/react';

interface CalendarioSectionProps {
  onBookGp: (gpName: string) => void;
}

export const CalendarioSection: React.FC<CalendarioSectionProps> = ({ onBookGp }) => {
  const [selectedCircuit, setSelectedCircuit] = useState<string>('Monza');
  const headerRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const detailRef = useRef<HTMLDivElement>(null);
  const featuredRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, margin: '-60px' });
  const listInView = useInView(listRef, { once: true, margin: '-60px' });
  const detailInView = useInView(detailRef, { once: true, margin: '-60px' });
  const featuredInView = useInView(featuredRef, { once: true, margin: '-60px' });

  const grandPrixList = [
    {
      name: 'Monza',
      officialName: `Gran Premio d’Italia`,
      circuit: 'Autodromo Nazionale Monza · Il Tempio della Velocità',
      date: '5 - 7 Settembre 2025',
      length: '5.793 km · 53 Giri',
      record: '1:21.046 (Rubens Barrichello, Ferrari)',
      coordinates: '45.6190° N, 9.2811° E',
      highlight: 'La gara di casa della Scuderia Ferrari, dove la marea rossa invade i rettilinei.',
    },
    {
      name: 'Monaco',
      officialName: 'Grand Prix de Monaco',
      circuit: 'Circuit de Monaco · Monte Carlo',
      date: '23 - 25 Maggio 2025',
      length: '3.337 km · 78 Giri',
      record: '1:12.909 (Lewis Hamilton)',
      coordinates: '43.7347° N, 7.4206° E',
      highlight: 'La gara di casa di Charles Leclerc tra i muretti leggendari e il porto del Principato.',
    },
    {
      name: 'Silverstone',
      officialName: 'British Grand Prix',
      circuit: 'Silverstone Circuit · Northamptonshire',
      date: '4 - 6 Luglio 2025',
      length: '5.891 km · 52 Giri',
      record: '1:27.097 (Max Verstappen)',
      coordinates: '52.0786° N, 1.0169° W',
      highlight: 'La culla della F1 dove Lewis Hamilton detiene il record di vittorie storiche.',
    },
    {
      name: 'Spa-Francorchamps',
      officialName: 'Belgian Grand Prix',
      circuit: 'Circuit de Spa-Francorchamps · Ardenne',
      date: '25 - 27 Luglio 2025',
      length: '7.004 km · 44 Giri',
      record: '1:46.286 (Valtteri Bottas)',
      coordinates: '50.4372° N, 5.9714° E',
      highlight: `L’Eau Rouge-Raidillon e la complessità meteorologica delle foreste belghe.`,
    },
    {
      name: 'Melbourne',
      officialName: 'Australian Grand Prix',
      circuit: 'Albert Park Circuit · Melbourne',
      date: '14 - 16 Marzo 2025',
      length: '5.278 km · 58 Giri',
      record: '1:19.813 (Charles Leclerc, Ferrari)',
      coordinates: '37.8497° S, 144.9680° E',
      highlight: 'Il via ufficiale della stagione 2025 e il debutto in rosso di Lewis Hamilton.',
    },
    {
      name: 'Suzuka',
      officialName: 'Japanese Grand Prix',
      circuit: 'Suzuka International Racing Course',
      date: '4 - 6 Aprile 2025',
      length: '5.807 km · 53 Giri',
      record: '1:30.983 (Lewis Hamilton)',
      coordinates: '34.8431° N, 136.5410° E',
      highlight: 'Il mitico tracciato a "otto" con le insidiose curve Esse e la velocissima 130R.',
    },
    {
      name: 'Abu Dhabi',
      officialName: 'Abu Dhabi Grand Prix',
      circuit: 'Yas Marina Circuit · Gran Finale',
      date: '5 - 7 Dicembre 2025',
      length: '5.281 km · 58 Giri',
      record: '1:26.103 (Max Verstappen)',
      coordinates: '24.4672° N, 54.6031° E',
      highlight: 'La spettacolare corsa notturna sotto i riflettori dove si assegnerà il titolo 2025.',
    },
  ];

  const featuredGps = [
    {
      gp: `Gran Premio d’Italia (Monza)`,
      date: '5 - 7 Settembre 2025',
      circuit: 'Autodromo Nazionale Monza',
      target: 'Doppietta Ferrari & Marea Rossa',
      badge: 'Gara di Casa',
    },
    {
      gp: 'Grand Prix de Monaco (Monte Carlo)',
      date: '23 - 25 Maggio 2025',
      circuit: 'Circuit de Monaco',
      target: 'Pole Position & Precisione Stradale',
      badge: 'Icona Glamour',
    },
    {
      gp: 'British Grand Prix (Silverstone)',
      date: '4 - 6 Luglio 2025',
      circuit: 'Silverstone Circuit',
      target: 'Efficienza Aerodinamica Maggots-Becketts',
      badge: 'Culla della F1',
    },
  ];

  const currentGp = grandPrixList.find((g) => g.name === selectedCircuit) || grandPrixList[0];

  return (
    <section id="calendario" className="w-full bg-transparent text-white py-24 px-6 sm:px-10 lg:px-16 border-t border-white/10">
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
              Stagione Mondiale 2025
            </motion.span>
            <motion.h2
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white"
              initial={{ opacity: 0, y: 36, filter: 'blur(6px)' }}
              animate={headerInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              Il Calendario dei Gran Premi 2025
            </motion.h2>
          </div>
          <motion.p
            className="text-sm text-white/70 max-w-md mt-4 md:mt-0 font-normal leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            24 circuiti mondiali, 6 continenti e un solo obiettivo per Charles Leclerc e Lewis Hamilton: riportare il titolo mondiale a Maranello.
          </motion.p>
        </div>

        {/* Circuit Selector & Interactive Circuit Telemetry Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          {/* Key GP List */}
          <div ref={listRef} className="lg:col-span-5 space-y-3">
            <motion.h3
              className="text-xs uppercase tracking-[0.25em] text-[#E10600] font-bold mb-4 block"
              initial={{ opacity: 0, x: -20 }}
              animate={listInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.05 }}
            >
              Tappe Chiave della Stagione
            </motion.h3>
            {grandPrixList.map((gp, idx) => (
              <motion.div
                key={gp.name}
                onClick={() => setSelectedCircuit(gp.name)}
                initial={{ opacity: 0, x: -36 }}
                animate={listInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + idx * 0.07, ease: [0.25, 0.46, 0.45, 0.94] }}
                whileHover={{ x: 4 }}
                className={`p-4 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                  selectedCircuit === gp.name
                    ? 'bg-[#E10600]/15 border-[#E10600] text-white shadow-[0_0_20px_rgba(225,6,0,0.3)]'
                    : 'bg-white/[0.02] border-white/10 text-white/70 hover:border-white/30 hover:text-white'
                }`}
              >
                <div>
                  <div className="flex items-center gap-2">
                    <MapPin className={`w-4 h-4 ${selectedCircuit === gp.name ? 'text-[#E10600]' : 'text-white/60'}`} />
                    <span className="text-base font-bold text-white">{gp.name}</span>
                    <span className="text-xs text-white/50 font-mono">({gp.date.split('·')[0]})</span>
                  </div>
                  <div className="text-xs text-white/70 mt-1 pl-6">{gp.officialName}</div>
                </div>
                <span className="text-xs font-mono text-white/40">{gp.coordinates}</span>
              </motion.div>
            ))}
          </div>

          {/* Interactive Circuit Telemetry View */}
          <motion.div
            ref={detailRef}
            className="lg:col-span-7 bg-black/40 backdrop-blur-md border border-white/20 rounded-2xl p-8 flex flex-col justify-between relative overflow-hidden shadow-2xl"
            initial={{ opacity: 0, x: 48, filter: 'blur(8px)' }}
            animate={detailInView ? { opacity: 1, x: 0, filter: 'blur(0px)' } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-2">
                <Compass className="w-4 h-4 text-[#E10600] animate-spin" style={{ animationDuration: '25s' }} />
                <AnimatePresence mode="wait">
                  <motion.span
                    key={selectedCircuit}
                    className="text-xs uppercase tracking-[0.2em] text-white font-mono"
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.25 }}
                  >
                    Circuito Selezionato: {currentGp.name} · {currentGp.officialName}
                  </motion.span>
                </AnimatePresence>
              </div>
              <span className="text-xs text-[#E10600] font-mono font-bold">Ferrari Telemetry Link</span>
            </div>

            {/* Stylized Track Vector Visual */}
            <div className="py-10 flex flex-col items-center justify-center relative">
              <div className="absolute inset-0 bg-[radial-gradient(#E10600_1px,transparent_1px)] [background-size:20px_20px] opacity-10" />

              <svg className="w-full max-w-lg h-56 text-white drop-shadow-[0_0_20px_rgba(225,6,0,0.5)]" viewBox="0 0 500 240" fill="none">
                <path
                  d="M 80 180 L 320 180 Q 440 180 440 120 Q 440 60 360 60 L 220 60 Q 160 60 140 100 Q 120 140 80 180 Z"
                  stroke="#E10600"
                  strokeWidth="8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
                <path
                  d="M 80 180 L 320 180 Q 440 180 440 120 Q 440 60 360 60 L 220 60 Q 160 60 140 100 Q 120 140 80 180 Z"
                  stroke="#ffffff"
                  strokeWidth="2"
                  strokeDasharray="8 6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
                <circle cx="200" cy="180" r="6" fill="#00ff66" />
                <text x="210" y="175" fill="#00ff66" fontSize="10" fontFamily="'DM Sans', sans-serif">DRS 1 ZONE</text>
                <circle cx="300" cy="60" r="6" fill="#00ff66" />
                <text x="310" y="55" fill="#00ff66" fontSize="10" fontFamily="'DM Sans', sans-serif">DRS 2 ZONE</text>
                <line x1="120" y1="170" x2="120" y2="190" stroke="#ffffff" strokeWidth="4" />
                <text x="100" y="208" fill="#ffffff" fontSize="11" fontFamily="'DM Sans', sans-serif" fontWeight="bold">START / FINISH</text>
              </svg>

              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedCircuit}
                  className="text-center mt-2 max-w-md"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-xs text-white/80 leading-relaxed font-normal">{currentGp.highlight}</p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Circuit Metrics */}
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedCircuit + '-metrics'}
                className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs border-t border-white/10 pt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
              >
                <div>
                  <span className="text-white/50 block">Lunghezza & Giri</span>
                  <span className="text-white font-medium">{currentGp.length}</span>
                </div>
                <div>
                  <span className="text-white/50 block">Record Ufficiale</span>
                  <span className="text-white font-medium">{currentGp.record}</span>
                </div>
                <div>
                  <span className="text-white/50 block">Data Ufficiale</span>
                  <span className="text-white font-medium">{currentGp.date}</span>
                </div>
                <div>
                  <button
                    onClick={() => onBookGp(currentGp.name)}
                    className="w-full py-1.5 bg-[#E10600] hover:bg-[#c20500] text-white rounded-md text-[11px] font-semibold tracking-wider uppercase transition-colors"
                  >
                    Richiedi Pass
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Featured GP Cards */}
        <div ref={featuredRef}>
          <div className="flex items-center justify-between mb-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={featuredInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.05 }}
            >
              <span className="text-xs uppercase tracking-[0.2em] text-[#E10600] font-bold block">
                Accesso Esclusivo Paddock
              </span>
              <h3 className="text-2xl font-bold text-white">
                Gran Premi in Evidenza & Hospitality 2025
              </h3>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredGps.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 48, scale: 0.95 }}
                animate={featuredInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.15 + idx * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
                whileHover={{ y: -6, boxShadow: '0 0 28px rgba(225,6,0,0.3)' }}
                className="p-6 rounded-2xl bg-black/40 backdrop-blur-sm border border-white/20 hover:border-[#E10600]/80 shadow-lg transition-colors flex flex-col justify-between space-y-4"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-white/60 mb-2">
                    <span>{item.date}</span>
                    <span className="text-[#E10600] font-bold">{item.badge}</span>
                  </div>
                  <div className="text-lg font-bold text-white mb-1">{item.gp}</div>
                  <div className="text-xs text-white/70 mb-2">{item.circuit}</div>
                  <div className="text-xs text-white/60 bg-white/5 p-2.5 rounded-lg border border-white/5">
                    Target: <span className="text-white font-medium">{item.target}</span>
                  </div>
                </div>

                <motion.button
                  onClick={() => onBookGp(item.gp)}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full py-2.5 bg-white hover:bg-white/90 text-black font-semibold rounded-full text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-md"
                >
                  <span>Richiedi Paddock Club</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
