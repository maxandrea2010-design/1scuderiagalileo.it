import React from 'react';

interface ScuderiaLogoProps {
  className?: string;
  showWordmark?: boolean;
}

export const ScuderiaLogo: React.FC<ScuderiaLogoProps> = ({ className = 'h-12', showWordmark = false }) => {
  return (
    <div className={`group flex items-center gap-3 ${className}`}>
      <img
        src={`${import.meta.env.BASE_URL}brand/logo-scuderia.png`}
        alt="Logo Scuderia Galileo Galilei"
        className="h-full w-auto rounded-lg bg-white p-1 ring-1 ring-cyan-300/40 object-contain transition-transform duration-300 group-hover:scale-105 group-hover:-rotate-1"
        draggable={false}
      />
      {showWordmark && (
        <span className="hidden sm:block leading-tight">
          <span className="block text-[11px] uppercase tracking-[0.28em] text-cyan-300 font-semibold">STEM Racing ITA</span>
          <span className="block text-sm font-bold tracking-wide text-white">Scuderia Galileo</span>
        </span>
      )}
    </div>
  );
};
