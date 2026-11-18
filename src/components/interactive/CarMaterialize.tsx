import React, { useState } from 'react';
import { motion } from 'motion/react';

export const CarMaterialize: React.FC = () => {
  const [key, setKey] = useState(0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="group relative overflow-hidden rounded-2xl border border-blue-400/25 bg-blue-950/30 p-6 sm:p-10"
    >
      <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-cyan-400/10 opacity-70 blur-3xl transition-opacity duration-700 group-hover:opacity-100" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/50 to-transparent" />

      <div className="relative flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <p className="text-xs uppercase tracking-[0.28em] text-cyan-300 font-bold">Macchina</p>
          <h3 className="text-2xl font-bold mt-1">Questa è la nostra macchina</h3>
          <p className="text-sm text-white/70 mt-2 max-w-xl leading-relaxed">
            Un modellino dimostrativo di monoposto F1 STEM Racing: telaio leggero, carrozzeria aerodinamica, ruote a basso
            attrito e alloggiamento per la cartuccia di spinta. La versione definitiva arriverà dopo i test; per ora questa
            è la nostra idea di velocità.
          </p>
        </div>
        <button
          onClick={() => setKey((k) => k + 1)}
          className="shrink-0 px-5 py-2.5 rounded-full border border-cyan-400/50 text-cyan-200 text-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-cyan-400/15 hover:shadow-[0_0_24px_rgba(34,211,238,0.18)] active:scale-95"
        >
          Rigenera la macchina
        </button>
      </div>

      <div key={key} className="relative h-56 sm:h-64 flex items-center justify-center">
        <motion.div
          className="pointer-events-none absolute h-32 w-80 rounded-full bg-cyan-400/15 blur-3xl"
          animate={{ opacity: [0.35, 0.75, 0.35], scale: [0.9, 1.12, 0.9] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
        />

        {Array.from({ length: 18 }).map((_, i) => (
          <motion.span
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full bg-cyan-300 shadow-[0_0_8px_#22d3ee]"
            initial={{
              opacity: 0,
              x: (i % 2 === 0 ? -1 : 1) * (80 + i * 12),
              y: (i % 3 === 0 ? -1 : 1) * (40 + i * 6),
            }}
            animate={{ opacity: [0, 1, 0], x: 0, y: 0 }}
            transition={{ duration: 1.2, delay: i * 0.04, ease: 'easeOut' }}
          />
        ))}

        <motion.div
          className="relative z-10 w-full max-w-xl"
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        >
          <svg viewBox="0 0 420 140" className="w-full" fill="none" style={{ filter: 'drop-shadow(0 0 16px rgba(34,211,238,0.25))' }}>
            <motion.ellipse
              cx="215"
              cy="124"
              rx="132"
              ry="8"
              fill="#22d3ee"
              animate={{ opacity: [0.05, 0.12, 0.05] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.line
              x1="24"
              y1="126"
              x2="396"
              y2="126"
              stroke="#22d3ee"
              strokeOpacity="0.3"
              strokeWidth="1.5"
              strokeDasharray="10 16"
              animate={{ strokeDashoffset: [26, 0] }}
              transition={{ duration: 0.9, repeat: Infinity, ease: 'linear' }}
            />
            <motion.path
              d="M40 95 L90 95 L110 70 L170 70 L200 42 L310 42 L350 70 L390 70 L390 95 L360 95 C350 112 330 112 320 95 L140 95 C130 112 110 112 100 95 L40 95 Z"
              stroke="#67e8f9"
              strokeWidth="2"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.4, ease: 'easeInOut' }}
            />
            <motion.path
              d="M200 42 L215 28 L265 28 L290 42"
              stroke="#3b82f6"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.1, delay: 0.35 }}
            />
            <motion.circle
              cx="115"
              cy="98"
              r="16"
              stroke="#e0f2fe"
              strokeWidth="2"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.9 }}
            />
            <motion.circle
              cx="335"
              cy="98"
              r="16"
              stroke="#e0f2fe"
              strokeWidth="2"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1 }}
            />
            <motion.path
              d="M40 95 L90 95 L110 70 L170 70 L200 42 L310 42 L350 70 L390 70 L390 95 L360 95 C350 112 330 112 320 95 L140 95 C130 112 110 112 100 95 L40 95 Z"
              fill="url(#sgFill)"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.85 }}
              transition={{ delay: 1.15, duration: 0.7 }}
            />
            <defs>
              <linearGradient id="sgFill" x1="40" y1="28" x2="390" y2="112">
                <stop offset="0%" stopColor="#1d4ed8" />
                <stop offset="100%" stopColor="#22d3ee" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>
      </div>
    </motion.div>
  );
};
