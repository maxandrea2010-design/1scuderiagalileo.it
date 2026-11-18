import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, ArrowUp, GraduationCap } from 'lucide-react';
import { brand, navLinks } from '../../data/site';
import { ScuderiaLogo } from '../brand/ScuderiaLogo';
import { FadeIn } from '../FadeIn';

export const Footer: React.FC = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative w-full border-t border-white/10 pt-16 pb-12 px-6 sm:px-10 lg:px-16 bg-[#06111f]/90">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />
      <div className="max-w-[1700px] mx-auto">
        <FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          <div className="md:col-span-5 space-y-4">
            <ScuderiaLogo className="h-14" showWordmark />
            <p className="text-sm text-white/70 max-w-sm leading-relaxed">{brand.manifesto}</p>
            <Link
              to="/donazioni"
              className="inline-flex px-6 py-2.5 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-full text-xs uppercase tracking-wider transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_28px_rgba(34,211,238,0.35)] active:scale-95"
            >
              Sostieni la scuderia
            </Link>
          </div>

          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-[0.25em] text-cyan-300 font-bold">Pagine</h4>
            <ul className="space-y-2 text-sm text-white/80">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="inline-block transition-all duration-300 hover:translate-x-1 hover:text-cyan-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs uppercase tracking-[0.25em] text-cyan-300 font-bold">Scuola e contatti</h4>
            <div className="space-y-2 text-sm text-white/90">
              <p className="flex items-start gap-3">
                <GraduationCap className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                <span>{brand.school} — scuola che finanzia e ospita il progetto STEM Racing ITA.</span>
              </p>
              <a href={`mailto:${brand.email}`} className="flex items-center gap-3 transition-colors duration-300 hover:text-cyan-300">
                <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                {brand.email}
              </a>
            </div>
          </div>
        </div>
        </FadeIn>

        <FadeIn delay={120}>
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-white/50 gap-4">
          <p>
            © {new Date().getFullYear()} {brand.name}. Progetto studentesco STEM Racing ITA.
          </p>
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-1.5 text-white/80 transition-colors duration-300 hover:text-cyan-300"
          >
            Torna in cima
            <ArrowUp className="w-3.5 h-3.5 transition-transform duration-300 group-hover:-translate-y-0.5" />
          </button>
        </div>
        </FadeIn>
      </div>
    </footer>
  );
};
