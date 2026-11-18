import React from 'react';
import { PageHero } from '../components/ui/PageHero';
import { competitions } from '../data/site';
import { GearShiftSprint } from '../components/interactive/GearShiftSprint';
import { FadeIn } from '../components/FadeIn';

export const Competizioni: React.FC = () => (
  <>
    <PageHero
      kicker="Calendario e obiettivi"
      title="Competizioni"
      subtitle="STEM Racing ITA è il nostro campionato. Prepariamo macchina, pitch e identità di scuderia per le selezioni e — obiettivo — la nazionale."
    />
    <section className="px-6 sm:px-10 lg:px-16 pb-20">
      <div className="max-w-[1100px] mx-auto space-y-5">
        {competitions.map((c, i) => (
          <FadeIn key={c.name} delay={i * 80}>
            <article className="group rounded-2xl border border-white/10 bg-black/30 p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-black/40 hover:shadow-[0_20px_50px_-30px_rgba(34,211,238,0.4)]">
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-[11px] uppercase tracking-wider px-3 py-1 rounded-full bg-blue-600/40 text-cyan-100 transition-colors duration-300 group-hover:bg-blue-600/60">
                  {c.status}
                </span>
                <span className="text-sm text-white/55">{c.when}</span>
              </div>
              <h2 className="text-2xl font-bold mt-3">{c.name}</h2>
              <p className="text-sm text-cyan-300 mt-1">{c.where}</p>
              <p className="text-white/70 mt-3 leading-relaxed">{c.detail}</p>
            </article>
          </FadeIn>
        ))}
        <FadeIn className="pt-6">
          <GearShiftSprint />
        </FadeIn>
      </div>
    </section>
  </>
);
