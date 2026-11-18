import React, { useState } from 'react';
import { motion } from 'motion/react';
import { PageHero } from '../components/ui/PageHero';
import { FadeIn } from '../components/FadeIn';
import { TeamCard } from '../components/team/TeamCard';
import { brand, officialTeam, extendedTeam, faculty } from '../data/site';
import { Mail, GraduationCap } from 'lucide-react';

export const Contatti: React.FC = () => {
  const [sent, setSent] = useState(false);

  return (
    <>
      <PageHero
        kicker="Scrivici"
        title="Contatti"
        subtitle="Email ufficiale, scuola, roster completo. Per sponsor, donazioni o interviste usa l’indirizzo della scuderia."
      />
      <section className="px-6 sm:px-10 lg:px-16 pb-10">
        <div className="max-w-[1100px] mx-auto grid lg:grid-cols-2 gap-8">
          <FadeIn direction="left" className="h-full">
            <div className="h-full rounded-2xl border border-white/10 bg-black/30 p-6 space-y-4 transition-colors duration-300 hover:border-cyan-400/30">
            <p className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-cyan-400" />
              <a className="text-cyan-300 break-all transition-colors hover:text-cyan-200 hover:underline" href={`mailto:${brand.email}`}>
                {brand.email}
              </a>
            </p>
            <p className="text-sm text-white/70 leading-relaxed">
              Scrivici per qualsiasi informazione su sponsorizzazioni, partnership, donazioni o sul progetto: la casella della scuderia è sempre aperta.
            </p>
            <p className="flex items-start gap-3 text-white/80">
              <GraduationCap className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
              {brand.school}
            </p>
            {sent ? (
              <p className="text-sm text-cyan-200">Messaggio registrato in locale. Per inviarlo davvero usa la mail ufficiale.</p>
            ) : (
              <form
                className="space-y-3 pt-2"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
              >
                <input
                  required
                  placeholder="Nome"
                  className="w-full rounded-xl bg-white/5 border border-white/15 px-4 py-2.5 transition-all duration-200 focus:border-cyan-400/60 focus:outline-none focus:ring-2 focus:ring-cyan-400/20"
                />
                <input
                  required
                  type="email"
                  placeholder="Email"
                  className="w-full rounded-xl bg-white/5 border border-white/15 px-4 py-2.5 transition-all duration-200 focus:border-cyan-400/60 focus:outline-none focus:ring-2 focus:ring-cyan-400/20"
                />
                <textarea
                  required
                  rows={4}
                  placeholder="Messaggio"
                  className="w-full rounded-xl bg-white/5 border border-white/15 px-4 py-2.5 transition-all duration-200 focus:border-cyan-400/60 focus:outline-none focus:ring-2 focus:ring-cyan-400/20"
                />
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-full bg-cyan-400 text-[#06111f] font-semibold text-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-cyan-300 hover:shadow-[0_0_24px_rgba(34,211,238,0.35)] active:scale-95"
                >
                  Invia
                </button>
              </form>
            )}
            </div>
          </FadeIn>
          <FadeIn direction="right" delay={120} className="h-full">
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="group relative flex h-full min-h-[280px] items-center justify-center overflow-hidden rounded-2xl border border-cyan-400/25 bg-white p-8 shadow-[0_0_40px_rgba(37,99,235,0.15)] transition-shadow duration-500 hover:shadow-[0_0_60px_rgba(34,211,238,0.35)]"
            >
              <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-cyan-300/30 opacity-60 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
              <img
                src={`${import.meta.env.BASE_URL}brand/logo-scuderia.png`}
                alt="Nuovo logo ufficiale della Scuderia Galileo Galilei"
                className="relative w-full max-w-xs object-contain transition-transform duration-500 group-hover:scale-105"
                draggable={false}
              />
            </motion.div>
          </FadeIn>
        </div>
      </section>

      <section className="px-6 sm:px-10 lg:px-16 pb-10">
        <div className="max-w-[1100px] mx-auto">
          <FadeIn className="mb-4">
            <h2 className="text-2xl font-bold">Team ufficiale (6)</h2>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {officialTeam.map((m) => (
              <TeamCard key={m.name} member={m} featured={!m.placeholder} />
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 sm:px-10 lg:px-16 pb-10">
        <div className="max-w-[1100px] mx-auto">
          <FadeIn className="mb-4">
            <h2 className="text-2xl font-bold">Docenti tutor</h2>
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-4">
            {faculty.map((f) => (
              <TeamCard key={f.name} member={{ ...f, official: false }} />
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 sm:px-10 lg:px-16 pb-20">
        <div className="max-w-[1100px] mx-auto">
          <FadeIn className="mb-4">
            <h2 className="text-2xl font-bold">Chi ha partecipato al progetto</h2>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {extendedTeam.map((m) => (
              <TeamCard key={m.name} member={m} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
