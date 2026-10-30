import React from 'react';
import { ChevronDown } from 'lucide-react';
import { Navbar } from './Navbar';
import { FadeIn } from './FadeIn';

interface HeroBannerProps {
  onDiscoverClick: () => void;
  onScrollDown: () => void;
  onNavClick: (sectionId: string) => void;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({
  onDiscoverClick,
  onScrollDown,
  onNavClick,
}) => {
  return (
    <section className="relative min-h-screen w-full bg-transparent text-white flex flex-col justify-between overflow-hidden selection:bg-[#E10600] selection:text-white">
      {/* Top Navbar */}
      <Navbar onNavClick={onNavClick} onPaddockClick={onDiscoverClick} />

      {/* Main Banner Visual Grid - Pure minimalist composition with balanced empty central space */}
      <div className="relative flex-1 w-full max-w-[1700px] mx-auto px-6 sm:px-10 lg:px-16 flex flex-col justify-center py-6 sm:py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-12 lg:gap-8 my-auto">
          {/* Left Column (Span 5): "Siamo velocità" & "La ricerca dell'eccellenza assoluta" */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-12 lg:space-y-28 z-20">
            {/* Top Left Headline */}
            <FadeIn delay={100} direction="left">
              <div className="space-y-2 mt-2 lg:mt-4 bg-black/30 backdrop-blur-sm border border-white/10 rounded-xl p-6 w-fit shadow-xl">
                <span className="text-xs uppercase tracking-[0.3em] text-[#E10600] font-bold block mb-1 drop-shadow-md">
                  Scuderia Ferrari · Campionato Mondiale 2025
                </span>
                <h1
                  className="text-5xl sm:text-6xl md:text-7xl lg:text-[76px] xl:text-[92px] font-bold text-white tracking-[-0.03em] leading-[0.96] drop-shadow-lg"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  <span className="block">Siamo</span>
                  <span className="block text-white">velocità</span>
                </h1>
              </div>
            </FadeIn>

            {/* Lower Left Paragraph & Subheading */}
            <FadeIn delay={300} direction="up">
              <div className="space-y-3 max-w-md mt-4 lg:mt-8 bg-black/40 backdrop-blur-md border border-white/10 rounded-xl p-6 shadow-2xl">
                <h2
                  className="text-xl sm:text-2xl font-medium text-white tracking-tight leading-snug drop-shadow-md"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  La ricerca dell'eccellenza<br />assoluta
                </h2>

                {/* Thin White Divider Line with Red Accent */}
                <div className="flex items-center gap-1.5 my-3">
                  <div className="w-12 h-[2px] bg-[#E10600] shadow-[0_0_8px_#E10600]" />
                  <div className="w-4 h-[2px] bg-white/60" />
                </div>

                <p
                  className="text-white text-xs sm:text-sm leading-relaxed font-medium max-w-sm drop-shadow-md"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  Ogni millesimo di secondo è scolpito attorno alla precisione, al coraggio e alla nostra storia — mentre noi portiamo il Cavallino Rampante verso la gloria del Mondiale 2025.
                </p>
              </div>
            </FadeIn>
          </div>

          {/* Central Negative Space (Span 2): Pure, elegant empty space without any widget or elements */}
          <div className="hidden lg:block lg:col-span-2 pointer-events-none" aria-hidden="true" />

          {/* Right Column (Span 5): "Siamo distinzione" & Scroll Down bar */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-16 lg:space-y-36 z-20 lg:pl-4">
            {/* Right Headline: Positioned lower down than the left headline */}
            <FadeIn delay={500} direction="right">
              <div className="mt-8 lg:mt-52 bg-black/30 backdrop-blur-sm border border-white/10 rounded-xl p-6 w-fit shadow-xl">
                <span className="text-xs uppercase tracking-[0.3em] text-[#E10600] font-bold block mb-1 drop-shadow-md">
                  Leclerc #16 · Hamilton #44
                </span>
                <h2
                  className="text-5xl sm:text-6xl md:text-7xl lg:text-[76px] xl:text-[92px] font-bold text-white tracking-[-0.03em] leading-[0.96] drop-shadow-lg"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  <span className="block">Siamo</span>
                  <span className="block">distinzione</span>
                </h2>
              </div>
            </FadeIn>

            {/* Bottom Right Scroll Down Indicator */}
            <div className="pt-8">
              {/* Thin horizontal line spanning across with red accent */}
              <div className="w-full h-[1px] bg-gradient-to-r from-[#E10600] via-white/40 to-white/10 mb-3" />

              <div
                onClick={onScrollDown}
                className="flex items-center justify-between text-white text-[11px] sm:text-xs tracking-[0.2em] uppercase font-medium cursor-pointer hover:text-[#E10600] transition-colors select-none"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                <div className="flex items-center gap-1.5">
                  <ChevronDown className="w-3.5 h-3.5 text-[#E10600] animate-bounce" />
                  <span>Scorri in Basso</span>
                </div>
                <span>Per Vivere La Stagione 2025</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="h-6 w-full" />
    </section>
  );
};
