import React, { useState } from 'react';
import { Menu, X, MapPin, Mail, Trophy } from 'lucide-react';

interface NavbarProps {
  onNavClick: (sectionId: string) => void;
  onPaddockClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavClick, onPaddockClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Chi Siamo', id: 'chisiamo' },
    { name: 'La SF-25', id: 'monoposto' },
    { name: 'I Piloti', id: 'piloti' },
    { name: 'Calendario GP', id: 'calendario' },
  ];

  return (
    <header className="w-full relative z-40 px-6 sm:px-10 lg:px-16 pt-8 pb-4 text-white">
      <div className="max-w-[1700px] mx-auto flex items-center justify-between">
        {/* Left Navigation: Chi Siamo, La SF-25, I Piloti, Calendario GP */}
        <nav className="hidden md:flex items-center space-x-10 lg:space-x-12">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => onNavClick(link.id)}
              className="text-white text-[15px] lg:text-[16px] font-normal tracking-wide hover:text-[#E10600] transition-colors cursor-pointer focus:outline-none flex items-center gap-1.5"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              <span>{link.name}</span>
            </button>
          ))}
        </nav>

        {/* Mobile Brand / Center Logo */}
        <div className="md:hidden flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#E10600]" />
          <span
            className="text-white font-medium text-lg tracking-[0.2em] uppercase"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Ferrari F1 2025
          </span>
        </div>

        {/* Right Contacts: Maranello (MO), Italia and scuderia@ferrari.com */}
        <div className="hidden md:flex items-center space-x-8 lg:space-x-12 text-white">
          <span
            className="text-white text-[15px] lg:text-[16px] font-normal tracking-wide flex items-center gap-2 hover:opacity-85"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            <MapPin className="w-4 h-4 text-[#E10600]" />
            Maranello (MO), Italia
          </span>
          <a
            href="mailto:scuderia@ferrari.com"
            className="text-white text-[15px] lg:text-[16px] font-normal tracking-wide hover:text-[#E10600] transition-colors flex items-center gap-2"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            <Mail className="w-4 h-4 text-[#E10600]" />
            scuderia@ferrari.com
          </a>
          <button
            onClick={onPaddockClick}
            className="bg-[#E10600] hover:bg-[#c20500] text-white text-xs font-semibold px-4 py-2 rounded-full tracking-wider uppercase transition-all shadow-[0_0_15px_rgba(225,6,0,0.4)]"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Paddock Club
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden flex items-center space-x-3">
          <button
            onClick={onPaddockClick}
            className="text-xs bg-[#E10600] text-white px-3.5 py-1.5 rounded-full font-medium"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Paddock
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-white hover:text-white/80 transition-colors focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[72px] bg-transparent/95 border-b border-white/10 p-6 backdrop-blur-xl z-50 flex flex-col space-y-5 animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  onNavClick(link.id);
                  setMobileMenuOpen(false);
                }}
                className="text-left text-white text-lg font-medium tracking-wide py-1 hover:text-[#E10600]"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                {link.name}
              </button>
            ))}
          </div>

          <div className="pt-4 border-t border-white/15 flex flex-col space-y-3">
            <span
              className="text-white text-base flex items-center gap-3 py-1"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              <MapPin className="w-4 h-4 text-[#E10600]" />
              <span>Maranello (MO), Italia</span>
            </span>
            <a
              href="mailto:scuderia@ferrari.com"
              className="text-white text-base flex items-center gap-3 py-1"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              <Mail className="w-4 h-4 text-[#E10600]" />
              <span>scuderia@ferrari.com</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
