import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { PageHero } from '../components/ui/PageHero';
import { brand, extendedTeam } from '../data/site';
import { FadeIn } from '../components/FadeIn';

export const Sponsor: React.FC = () => {
  const sponsorCrew = extendedTeam.filter((m) => m.role === 'Sponsor');

  return (
    <>
      <PageHero
        kicker="Partnership"
        title="Chi rende possibile la scuderia"
        subtitle={`${brand.school} finanzia il progetto. Accanto alla scuola lavoriamo con partner e con un gruppo interno dedicato agli sponsor.`}
      />
      <section className="px-6 sm:px-10 lg:px-16 pb-20">
        <div className="max-w-[1100px] mx-auto space-y-10">
          <FadeIn>
            <motion.article
              whileHover={{ y: -4 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="group relative overflow-hidden rounded-2xl border border-cyan-400/30 bg-gradient-to-br from-blue-700/25 to-transparent p-8 transition-colors duration-300 hover:border-cyan-300/50 hover:shadow-[0_20px_50px_-30px_rgba(34,211,238,0.5)]"
            >
              <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-cyan-400/10 opacity-60 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
              <p className="relative text-xs uppercase tracking-[0.25em] text-cyan-300 font-bold">Main partner</p>
              <h2 className="relative text-3xl font-bold mt-2">{brand.school}</h2>
              <p className="relative text-white/75 mt-4 leading-relaxed">
                La scuola sostiene economicamente e logisticamente la scuderia: spazi, materiali, docenti e visibilità. Senza il liceo non esisterebbe né la macchina né il team STEM Racing ITA.
              </p>
            </motion.article>
          </FadeIn>

          <div>
            <FadeIn className="mb-4">
              <h2 className="text-2xl font-bold">Team sponsor interno</h2>
            </FadeIn>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {sponsorCrew.map((m) => (
                <motion.div
                  key={m.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="group relative overflow-hidden rounded-xl border border-white/10 bg-black/30 p-4 transition-colors duration-300 hover:border-cyan-400/40"
                >
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <p className="relative font-semibold">{m.name}</p>
                  <p className="relative text-xs text-cyan-300 mt-1">{m.role}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <FadeIn>
            <div className="group rounded-2xl border border-white/10 p-8 transition-all duration-300 hover:border-cyan-400/30 hover:bg-white/[0.03]">
              <h2 className="text-2xl font-bold">Diventa sponsor</h2>
              <p className="text-white/70 mt-3 max-w-xl">
                Logo sulla maglia, visibilità in gara e sul sito, collaborazione educativa. Scrivici per un piano su misura.
              </p>
              <Link
                to="/contatti"
                className="mt-5 inline-flex px-5 py-2.5 rounded-full bg-cyan-400 text-[#06111f] font-semibold text-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-cyan-300 hover:shadow-[0_0_24px_rgba(34,211,238,0.35)] active:scale-95"
              >
                Contatta la scuderia
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
};
