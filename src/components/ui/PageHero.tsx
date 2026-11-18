import React from 'react';
import { motion } from 'motion/react';
import { FadeIn } from '../FadeIn';

interface PageHeroProps {
  kicker: string;
  title: string;
  subtitle: string;
}

export const PageHero: React.FC<PageHeroProps> = ({ kicker, title, subtitle }) => (
  <section className="px-6 sm:px-10 lg:px-16 pt-16 pb-10">
    <div className="max-w-[1100px] mx-auto">
      <FadeIn>
        <span className="text-xs uppercase tracking-[0.3em] text-cyan-300 font-bold">{kicker}</span>
        <h1 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">{title}</h1>
        <p className="mt-4 text-white/75 max-w-2xl leading-relaxed">{subtitle}</p>
        <div className="flex items-center gap-1.5 mt-5">
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.3, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="w-12 h-[2px] origin-left bg-cyan-400 shadow-[0_0_8px_#22d3ee]"
          />
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.45, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="w-4 h-[2px] origin-left bg-blue-500"
          />
        </div>
      </FadeIn>
    </div>
  </section>
);
