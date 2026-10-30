import React, { useRef } from 'react';
import { MapPin, Mail, ArrowUp, Flag, Trophy } from 'lucide-react';
import { motion, useInView } from 'motion/react';

interface FooterProps {
  onNavClick: (id: string) => void;
  onPaddockClick: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavClick, onPaddockClick }) => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Chi Siamo & Storia', id: 'chisiamo' },
    { label: 'La Monoposto SF-25', id: 'monoposto' },
    { label: 'I Piloti & La Squadra', id: 'piloti' },
    { label: 'Calendario Gran Premi', id: 'calendario' },
  ];

  return (
    <footer ref={ref} className="w-full bg-transparent text-white border-t border-white/10 pt-16 pb-12 px-6 sm:px-10 lg:px-16">
      <div className="max-w-[1700px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand & Manifesto */}
          <motion.div
            className="md:col-span-5 space-y-4"
            initial={{ opacity: 0, y: 32 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="flex items-center gap-2">
              <motion.div
                className="w-4 h-4 rounded-full bg-[#E10600]"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
              />
              <span
                className="text-2xl font-bold tracking-[0.2em] uppercase text-white"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Scuderia Ferrari
              </span>
            </div>
            <p className="text-sm text-white/70 max-w-sm leading-relaxed">
              Siamo velocità. Siamo distinzione. La stagione Formula 1 2025 del Cavallino Rampante con Charles Leclerc (#16) e Lewis Hamilton (#44).
            </p>
            <div className="pt-2">
              <motion.button
                onClick={onPaddockClick}
                whileHover={{ scale: 1.05, boxShadow: '0 0 28px rgba(225,6,0,0.6)' }}
                whileTap={{ scale: 0.97 }}
                className="px-6 py-2.5 bg-[#E10600] hover:bg-[#c20500] text-white font-semibold rounded-full text-xs uppercase tracking-wider transition-colors cursor-pointer shadow-[0_0_20px_rgba(225,6,0,0.4)]"
              >
                Accedi al Paddock Club 2025
              </motion.button>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            className="md:col-span-3 space-y-3"
            initial={{ opacity: 0, y: 32 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h4 className="text-xs uppercase tracking-[0.25em] text-[#E10600] font-bold">
              Esplora la Stagione
            </h4>
            <ul className="space-y-2 text-sm text-white/80">
              {navLinks.map((link, idx) => (
                <motion.li
                  key={link.id}
                  initial={{ opacity: 0, x: -16 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + idx * 0.07 }}
                >
                  <button
                    onClick={() => onNavClick(link.id)}
                    className="hover:text-[#E10600] transition-colors cursor-pointer"
                  >
                    {link.label}
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            className="md:col-span-4 space-y-3"
            initial={{ opacity: 0, y: 32 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <h4 className="text-xs uppercase tracking-[0.25em] text-[#E10600] font-bold">
              Quartier Generale Maranello
            </h4>
            <div className="space-y-2 text-sm text-white/90">
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-[#E10600]" />
                <span>Via Enzo Ferrari 27, 41053 Maranello (MO), Italia</span>
              </div>
              <a
                href="mailto:scuderia@ferrari.com"
                className="flex items-center gap-3 hover:text-[#E10600] transition-colors"
              >
                <Mail className="w-4 h-4 text-[#E10600]" />
                <span>scuderia@ferrari.com</span>
              </a>
              <p className="text-xs text-white/60 pt-2">
                Scuderia Ferrari SpA · Campionato Mondiale di Formula 1 FIA 2025.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-white/50 gap-4"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.55 }}
        >
          <p>© {new Date().getFullYear()} Scuderia Ferrari. Tutti i diritti riservati.</p>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1 text-white/70">
              <Trophy className="w-3.5 h-3.5 text-[#E10600]" /> 16x Campioni del Mondo Costruttori
            </span>
            <span>·</span>
            <span className="text-white/70">Charles Leclerc #16</span>
            <span>·</span>
            <span className="text-white/70">Lewis Hamilton #44</span>
            <span>·</span>
            <motion.button
              onClick={scrollToTop}
              whileHover={{ y: -3, color: '#E10600' }}
              className="flex items-center gap-1.5 text-white transition-colors cursor-pointer ml-4"
            >
              <span>Torna in Cima</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};
