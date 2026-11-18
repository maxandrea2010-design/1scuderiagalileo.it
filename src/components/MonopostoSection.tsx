import React, { useState, useRef } from 'react';
import { ArrowUpRight, Zap, Gauge, Shield, Cpu, Wind, Scale, Activity } from 'lucide-react';
import { motion, useInView, AnimatePresence } from 'motion/react';

interface MonopostoSectionProps {
  onPaddockClick: () => void;
}

interface ComponentSpec {
  id: string;
  name: string;
  category: string;
  power: string;
  topSpeed: string;
  weight: string;
  aerodynamics: string;
  description: string;
  specs: { label: string; value: string }[];
}

export const MonopostoSection: React.FC<MonopostoSectionProps> = ({ onPaddockClick }) => {
  const [selectedComponent, setSelectedComponent] = useState<string>('sf25');
  const headerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, margin: '-60px' });
  const cardInView = useInView(cardRef, { once: true, margin: '-60px' });

  const components: ComponentSpec[] = [
    {
      id: 'sf25',
      name: 'Ferrari SF-25',
      category: 'Monoposto Formula 1 2025',
      power: '1.050+ CV (Ibrido)',
      topSpeed: '>355 km/h',
      weight: '798 kg (Minimo FIA)',
      aerodynamics: 'Effetto Suolo Venturi 3D',
      description:
        `La SF-25 rappresenta l’apice dell’ingegneria di Maranello. Riprogettata da zero nella cinematica delle sospensioni, nei canali Venturi del sottoscocca e nell’efficienza del raffreddamento per garantire a Charles Leclerc e Lewis Hamilton una finestra operativa ideale su qualsiasi asfalto del mondiale.`,
      specs: [
        { label: 'Telaio', value: 'Monoscocca in carbonio e zylon' },
        { label: 'Accelerazione 0-100 km/h', value: '2.1 secondi' },
        { label: 'Accelerazione 0-200 km/h', value: '4.4 secondi' },
        { label: 'Forza Frenante Max', value: 'Fino a 5.5 G' },
      ],
    },
    {
      id: 'powerunit',
      name: 'Power Unit 066/12',
      category: '1.6L V6 Turbo Ibrido',
      power: '1.050+ CV Totali',
      topSpeed: '15.000 Giri/min (Limite FIA)',
      weight: '150 kg (Peso minimo PU)',
      aerodynamics: 'Packaging Ultra-Compatto',
      description:
        'Motore termico 1.6 V6 a 90° abbinato al turbocompressore singolo e al doppio motore elettrico: MGU-K (120 kW / 163 CV direttamente alle ruote) e MGU-H per il recupero dei gas di scarico. Efficienza termica superiore al 52%.',
      specs: [
        { label: 'Cilindrata & Valvole', value: '1.600 cc · 4 per cilindro' },
        { label: 'Iniezione Diretta', value: '500 bar ad alta pressione' },
        { label: 'Capacità Batteria ERS', value: '4 MJ per giro (Limite)' },
        { label: 'Carburante Sostenibile', value: 'E10 con biosostenibilità avanzata' },
      ],
    },
    {
      id: 'aerodinamica',
      name: 'Fondo & Canali Venturi',
      category: 'Aero Dynamism 2025',
      power: 'Carico > 1.800 kg @ 250 km/h',
      topSpeed: 'DRS Efficienza +22 km/h',
      weight: 'Ingegneria composita ultra-light',
      aerodynamics: 'Canali Venturi Ottimizzati',
      description:
        'Il pacchetto aerodinamico della SF-25 massimizza la depressione del fondo vettura minimizzando il porpoising. I sidepods sagomati convogliano i flussi verso la zona a bottiglia di coca-cola, massimizzando il rendimento del diffusore posteriore in curva veloce.',
      specs: [
        { label: 'Ala Posteriore DRS', value: 'Attuatore idraulico rapido' },
        { label: 'Deflettori Sottoscocca', value: 'Fibra di carbonio ad alto modulo' },
        { label: 'Stabilità Frenata', value: 'Centro di pressione costante' },
        { label: 'Raffreddamento Radiatori', value: `Prese d’aria a sezione ridotta` },
      ],
    },
    {
      id: 'cockpit',
      name: 'Cockpit & Volante Elettronico',
      category: 'Interfaccia Uomo-Macchina',
      power: 'Display OLED 4.3" alta luminosità',
      topSpeed: 'Cambio marcia in < 0.005s',
      weight: 'Volante: 1.3 kg',
      aerodynamics: 'Protezione Halo in Titanio',
      description:
        `L’Halo in titanio grado 5 resiste a carichi d’impatto superiori a 12 tonnellate. Il volante in carbonio integra 25 manettini, pulsanti tattili a risposta istantanea e palette della frizione personalizzate sui polpastrelli di Hamilton e Leclerc.`,
      specs: [
        { label: 'Protezione Halo', value: 'Resistenza 125 kN' },
        { label: 'Sensori Telemetria', value: 'Oltre 300 canali real-time' },
        { label: 'Sedile Pilota', value: 'Scansione 3D personalizzata' },
        { label: 'Cinture di Sicurezza', value: '6 punti con sgancio rapido' },
      ],
    },
  ];

  const current = components.find((c) => c.id === selectedComponent) || components[0];

  return (
    <section id="monoposto" className="w-full bg-transparent text-white py-24 px-6 sm:px-10 lg:px-16 border-t border-white/10">
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
              Ingegneria di Maranello
            </motion.span>
            <motion.h2
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white"
              initial={{ opacity: 0, y: 36, filter: 'blur(6px)' }}
              animate={headerInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              Ingegnerizzata per dominare ogni rettilineo
            </motion.h2>
          </div>
          <motion.p
            className="text-sm text-white/70 max-w-md mt-4 md:mt-0 font-normal leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            La SF-25 fonde l'eredità leggendaria del Cavallino Rampante con le più sofisticate simulazioni di dinamica del veicolo e galleria del vento al 60%.
          </motion.p>
        </div>

        {/* Component Selector Tabs */}
        <motion.div
          className="flex overflow-x-auto gap-3 pb-4 mb-10 no-scrollbar"
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {components.map((c, idx) => (
            <motion.button
              key={c.id}
              onClick={() => setSelectedComponent(c.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              initial={{ opacity: 0, y: 16 }}
              animate={headerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.45 + idx * 0.07 }}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap transition-all cursor-pointer ${
                selectedComponent === c.id
                  ? 'bg-[#E10600] text-white font-semibold shadow-[0_0_20px_rgba(225,6,0,0.4)]'
                  : 'bg-white/5 text-white/80 hover:bg-white/10 hover:text-white border border-white/10'
              }`}
            >
              {c.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Selected Component Showcase Card */}
        <motion.div
          ref={cardRef}
          className="bg-black/40 backdrop-blur-md border border-white/20 rounded-3xl p-8 lg:p-12 relative overflow-hidden shadow-2xl"
          initial={{ opacity: 0, y: 48, filter: 'blur(8px)' }}
          animate={cardInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#E10600]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Specs Summary */}
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedComponent}
                className="lg:col-span-6 space-y-6"
                initial={{ opacity: 0, x: -24, filter: 'blur(4px)' }}
                animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, x: 24, filter: 'blur(4px)' }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
              >
                <div>
                  <span className="text-xs uppercase tracking-[0.2em] text-[#E10600] font-bold">
                    {current.category}
                  </span>
                  <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-1">
                    {current.name}
                  </h3>
                </div>

                <p className="text-sm sm:text-base text-white/80 leading-relaxed font-normal">
                  {current.description}
                </p>

                {/* Quick Metrics Bar */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-4 border-y border-white/10">
                  <div className="space-y-1">
                    <div className="flex items-center gap-1.5 text-white/60 text-xs">
                      <Zap className="w-3.5 h-3.5 text-[#E10600]" />
                      <span>Potenza</span>
                    </div>
                    <div className="text-sm font-bold text-white">{current.power}</div>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-1.5 text-white/60 text-xs">
                      <Gauge className="w-3.5 h-3.5 text-[#E10600]" />
                      <span>Top Speed</span>
                    </div>
                    <div className="text-sm font-bold text-white">{current.topSpeed}</div>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-1.5 text-white/60 text-xs">
                      <Scale className="w-3.5 h-3.5 text-[#E10600]" />
                      <span>Peso</span>
                    </div>
                    <div className="text-sm font-bold text-white">{current.weight}</div>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-1.5 text-white/60 text-xs">
                      <Wind className="w-3.5 h-3.5 text-[#E10600]" />
                      <span>Aerodinamica</span>
                    </div>
                    <div className="text-sm font-bold text-white">{current.aerodynamics.split(' ')[0]}</div>
                  </div>
                </div>

                {/* Extended Specs List */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {current.specs.map((s, idx) => (
                    <motion.div
                      key={idx}
                      className="flex justify-between items-center text-xs py-2 px-3 bg-white/5 rounded-lg border border-white/5"
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.06, duration: 0.3 }}
                    >
                      <span className="text-white/60">{s.label}:</span>
                      <span className="text-white font-medium">{s.value}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Action Button */}
                <div className="pt-4 flex items-center gap-4">
                  <motion.button
                    onClick={onPaddockClick}
                    whileHover={{ scale: 1.05, boxShadow: '0 0 32px rgba(225,6,0,0.7)' }}
                    whileTap={{ scale: 0.97 }}
                    className="px-6 py-3 bg-[#E10600] hover:bg-[#c20500] text-white font-semibold rounded-full text-xs uppercase tracking-wider transition-colors flex items-center gap-2 cursor-pointer shadow-[0_0_20px_rgba(225,6,0,0.5)]"
                  >
                    <span>Esplora nel Paddock Club</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </motion.button>
                  <span className="text-xs text-white/50 font-mono">Homologated FIA 2025</span>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Right F1 Monoposto Blueprint */}
            <motion.div
              className="lg:col-span-6 flex flex-col items-center justify-center p-6 bg-gradient-to-b from-white/5 via-black to-[#E10600]/10 rounded-2xl border border-white/10 relative overflow-hidden min-h-[360px]"
              initial={{ opacity: 0, x: 48 }}
              animate={cardInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] opacity-10" />

              <div className="relative z-10 w-full flex flex-col items-center text-center space-y-6">
                <motion.svg
                  className="w-full max-w-lg h-48 text-white drop-shadow-[0_10px_30px_rgba(225,6,0,0.25)]"
                  viewBox="0 0 600 220"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={cardInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.9, delay: 0.5, ease: 'backOut' }}
                >
                  {/* Front Wing */}
                  <path d="M 40 160 L 110 160 L 95 140 L 40 145 Z" fill="rgba(225,6,0,0.4)" stroke="#E10600" />
                  <path d="M 40 145 L 30 165" stroke="#ffffff" strokeWidth="2" />
                  {/* Front Wheel */}
                  <circle cx="150" cy="155" r="35" fill="#0d0d12" stroke="#ffffff" strokeWidth="3" />
                  <circle cx="150" cy="155" r="16" fill="#E10600" stroke="#ffffff" strokeWidth="1.5" />
                  {/* Nosecone & Chassis */}
                  <path
                    d="M 80 150 Q 180 130 260 115 L 310 85 L 340 85 L 380 95 L 470 120 L 530 130 L 530 160 L 220 160 Z"
                    fill="rgba(225,6,0,0.15)"
                    stroke="#E10600"
                    strokeWidth="2"
                  />
                  {/* Halo */}
                  <path d="M 290 100 Q 320 65 360 85" stroke="#ffffff" strokeWidth="3" fill="none" />
                  {/* Driver Helmet */}
                  <circle cx="325" cy="80" r="11" fill="#E10600" stroke="#ffffff" />
                  {/* Sidepod & Venturi Floor */}
                  <path d="M 260 125 L 370 125 L 430 145 L 240 145 Z" fill="rgba(255,255,255,0.1)" stroke="#ffffff" />
                  <path d="M 190 162 L 480 162" stroke="#E10600" strokeWidth="4" />
                  {/* Rear Wheel */}
                  <circle cx="490" cy="155" r="36" fill="#0d0d12" stroke="#ffffff" strokeWidth="3" />
                  <circle cx="490" cy="155" r="16" fill="#E10600" stroke="#ffffff" strokeWidth="1.5" />
                  {/* Rear Wing */}
                  <path d="M 525 80 L 565 80 L 560 150 L 525 150 Z" fill="rgba(225,6,0,0.4)" stroke="#E10600" />
                  <path d="M 515 90 L 560 90" stroke="#ffffff" strokeWidth="2.5" />
                  <path d="M 515 102 L 560 102" stroke="#ffffff" strokeWidth="2" />
                  {/* Dimension Lines */}
                  <line x1="40" y1="195" x2="565" y2="195" stroke="rgba(255,255,255,0.4)" strokeDasharray="3 3" />
                  <text x="250" y="210" fill="#ffffff" fontSize="11" fontFamily="'DM Sans', sans-serif">Passo: 3.600 mm · Peso: 798 kg</text>
                </motion.svg>

                <div className="space-y-1">
                  <span className="text-[11px] uppercase tracking-[0.25em] text-[#E10600] font-mono font-bold">
                    Scheda Tecnica Ufficiale · SF-25
                  </span>
                  <div className="text-xs text-white/80 max-w-sm">
                    Vernice Rosso Corsa Opaco ad attrito laminare ridotto (-450 grammi) con livrea in fibra di carbonio a vista.
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
