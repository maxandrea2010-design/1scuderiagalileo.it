import React, { useState } from 'react';
import { HeroBanner } from './components/HeroBanner';
import { MonopostoSection } from './components/MonopostoSection';
import { PilotiSquadraSection } from './components/PilotiSquadraSection';
import { CalendarioSection } from './components/CalendarioSection';
import { StoriaSection } from './components/StoriaSection';
import { Footer } from './components/Footer';
import { PaddockClubModal } from './components/PaddockClubModal';

export default function App() {
  const [isPaddockModalOpen, setIsPaddockModalOpen] = useState(false);
  const [selectedGpForModal, setSelectedGpForModal] = useState<string | undefined>(undefined);

  const handleOpenPaddock = (gpName?: string) => {
    if (gpName) {
      setSelectedGpForModal(gpName);
    } else {
      setSelectedGpForModal(undefined);
    }
    setIsPaddockModalOpen(true);
  };

  const handleScrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleScrollDownFromHero = () => {
    const monopostoEl = document.getElementById('monoposto');
    if (monopostoEl) {
      monopostoEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-black/30 text-white selection:bg-[#E10600] selection:text-white relative">
      {/* Static hero background image (replaces scroll frame animation) */}
      <img
        src={`${import.meta.env.BASE_URL}f1-hero-bg.jpg`}
        alt="Ferrari SF-25 F1 car"
        className="fixed top-0 left-0 w-full h-full object-cover z-0 pointer-events-none"
      />

      <div className="relative z-10">
        {/* 
          Hero Banner: Scuderia Ferrari F1 2025
          - Dark minimal luxury styling
          - DM Sans typography in pure white with Rosso Corsa accents
          - "Siamo velocità", "La ricerca dell'eccellenza assoluta"
          - F1 Cockpit & Visor with real-time HUD and "Scopri la SF-25"
          - "Siamo distinzione" & "Scorri in Basso per Vivere la Stagione 2025"
        */}
        <HeroBanner
          onDiscoverClick={() => handleOpenPaddock()}
          onScrollDown={handleScrollDownFromHero}
          onNavClick={handleScrollToSection}
        />

        {/* 2. La Monoposto SF-25 */}
        <MonopostoSection onPaddockClick={() => handleOpenPaddock()} />

        {/* 3. I Piloti & La Squadra (6 Box iconici: Leclerc, Hamilton, Maranello, Power Unit, Telemetria, Tifosi) */}
        <PilotiSquadraSection />

        {/* 4. Il Calendario Mondiale F1 2025 (Monza, Monaco, Silverstone, Spa, Melbourne...) */}
        <CalendarioSection onBookGp={(gp) => handleOpenPaddock(gp)} />

        {/* 5. Chi Siamo & La Storia (16 Titoli Costruttori, 15 Piloti, Mito Enzo Ferrari) */}
        <StoriaSection />

        {/* Footer */}
        <Footer
          onNavClick={handleScrollToSection}
          onPaddockClick={() => handleOpenPaddock()}
        />

        {/* Interactive Paddock Club & Hospitality Modal */}
        <PaddockClubModal
          isOpen={isPaddockModalOpen}
          onClose={() => setIsPaddockModalOpen(false)}
          preselectedGp={selectedGpForModal}
        />
      </div>
    </div>
  );
}
