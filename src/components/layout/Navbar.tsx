import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Menu, X, Mail } from 'lucide-react';
import { NavLink, Link } from 'react-router-dom';
import { ScuderiaLogo } from '../brand/ScuderiaLogo';
import { brand, navLinks } from '../../data/site';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `relative w-fit text-[15px] tracking-wide transition-colors cursor-pointer after:absolute after:-bottom-1.5 after:left-0 after:h-[2px] after:w-full after:origin-left after:rounded-full after:bg-gradient-to-r after:from-blue-400 after:to-cyan-300 after:transition-transform after:duration-300 hover:after:scale-x-100 ${
      isActive ? 'text-cyan-300 after:scale-x-100' : 'text-white/90 hover:text-cyan-300 after:scale-x-0'
    }`;

  return (
    <header
      className={`sticky top-0 z-50 px-6 sm:px-10 lg:px-16 text-white backdrop-blur-xl border-b border-white/10 transition-all duration-300 ${
        scrolled ? 'py-2.5 bg-[#06111f]/95 shadow-[0_12px_40px_rgba(2,6,23,0.45)]' : 'py-4 bg-[#06111f]/80'
      }`}
    >
      <div className="max-w-[1700px] mx-auto flex items-center justify-between gap-4">
        <Link to="/" className="shrink-0" onClick={() => setMobileMenuOpen(false)}>
          <ScuderiaLogo className="h-12" showWordmark />
        </Link>

        <nav className="hidden lg:flex items-center space-x-7">
          {navLinks.map((link) => (
            <NavLink key={link.to} to={link.to} end={link.to === '/'} className={linkClass}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <a
            href={`mailto:${brand.email}`}
            className="text-xs text-white/80 hover:text-cyan-300 flex items-center gap-2 max-w-[220px] truncate transition-colors duration-300"
          >
            <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
            <span className="truncate">{brand.email}</span>
          </a>
          <Link
            to="/donazioni"
            className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white text-xs font-semibold px-4 py-2 rounded-full tracking-wider uppercase shadow-[0_0_18px_rgba(34,211,238,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_28px_rgba(34,211,238,0.5)] active:scale-95"
          >
            Sostienici
          </Link>
        </div>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden rounded-full p-2 text-white transition-colors duration-200 hover:bg-white/10"
          aria-label="Apri menu"
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence initial={false}>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden mt-4 overflow-hidden"
          >
            <div className="flex flex-col gap-4 pb-3 pt-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === '/'}
                  onClick={() => setMobileMenuOpen(false)}
                  className={linkClass}
                >
                  {link.label}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
