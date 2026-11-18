import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { BookOpen, ChevronDown, GraduationCap, MapPin, Telescope } from 'lucide-react';
import { FadeIn } from '../components/FadeIn';
import { CarMaterialize } from '../components/interactive/CarMaterialize';
import { GearShiftSprint } from '../components/interactive/GearShiftSprint';
import { PitStopChallenge } from '../components/interactive/PitStopChallenge';
import { TeamCard } from '../components/team/TeamCard';
import { brand, officialTeam, faculty } from '../data/site';

export const Home: React.FC = () => (
  <>
    <section className="relative min-h-[88vh] px-6 sm:px-10 lg:px-16 flex flex-col justify-center py-12">
      <div className="max-w-[1700px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-6 space-y-6">
          <FadeIn direction="left">
            <span className="text-xs uppercase tracking-[0.3em] text-cyan-300 font-bold">
              {brand.program} · {brand.school}
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-[-0.03em] leading-[0.95] mt-3">
              Siamo la scuderia
              <span className="block animate-gradient-text bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent">Galileo Galilei</span>
            </h1>
          </FadeIn>
          <FadeIn delay={150}>
            <p className="text-white/80 max-w-lg leading-relaxed">{brand.manifesto}</p>
            <div className="flex flex-wrap gap-3 mt-6">
              <Link
                to="/macchina"
                className="px-5 py-2.5 rounded-full bg-cyan-400 text-[#06111f] font-semibold text-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-cyan-300 hover:shadow-[0_0_28px_rgba(34,211,238,0.35)] active:scale-95"
              >
                La macchina
              </Link>
              <Link
                to="/contatti"
                className="px-5 py-2.5 rounded-full border border-white/20 text-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-300/50 hover:bg-white/5 hover:text-cyan-200 active:scale-95"
              >
                Contatti
              </Link>
            </div>
          </FadeIn>
        </div>
        <div className="lg:col-span-6">
          <FadeIn direction="right" delay={200}>
            <div className="relative">
              <motion.div
                className="pointer-events-none absolute inset-8 rounded-full bg-cyan-400/20 blur-3xl"
                animate={{ opacity: [0.45, 0.8, 0.45], scale: [0.95, 1.08, 0.95] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              />
              <motion.div
                animate={{ y: [0, -10, 0], rotate: [0, 0.5, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="group relative mx-auto max-w-md overflow-hidden rounded-3xl border border-cyan-400/30 bg-white p-6 shadow-[0_0_50px_rgba(37,99,235,0.4)] transition-all duration-500 hover:scale-[1.025] hover:shadow-[0_0_70px_rgba(34,211,238,0.5)]">
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-blue-600 via-cyan-400 to-blue-600" />
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.14),_transparent_45%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <img
                    src={`${import.meta.env.BASE_URL}brand/logo-scuderia.png`}
                    alt="Nuovo logo ufficiale della Scuderia Galileo Galilei"
                    className="relative mx-auto w-full max-w-sm object-contain transition-transform duration-500 group-hover:scale-[1.04]"
                    draggable={false}
                  />
                </div>
              </motion.div>
              <p className="text-center text-xs uppercase tracking-[0.25em] text-white/60 mt-3">Il nuovo logo ufficiale della scuderia</p>
            </div>
          </FadeIn>
        </div>
      </div>
      <FadeIn delay={350} direction="none">
        <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-[0.2em] text-white/60 mt-16">
          <ChevronDown className="w-4 h-4 text-cyan-400 animate-bounce" />
          Scorri — macchina, squadra, minigame
        </div>
      </FadeIn>
    </section>

    <section className="px-6 sm:px-10 lg:px-16 py-16">
      <div className="max-w-[1700px] mx-auto">
        <CarMaterialize />
      </div>
    </section>

    <section className="px-6 sm:px-10 lg:px-16 py-16 border-t border-white/10">
      <div className="max-w-[1700px] mx-auto">
        <FadeIn>
          <p className="text-xs uppercase tracking-[0.25em] text-cyan-300 font-bold">Team ufficiale</p>
          <h2 className="text-4xl font-bold mt-2">Sei posti in scuderia</h2>
          <p className="text-white/70 mt-3 max-w-2xl">
            Per ora presentiamo tre membri ufficiali — Marco, Matteo e Lorenzo. Le altre tre schede si riempiranno appena il roster è completo.
          </p>
        </FadeIn>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
          {officialTeam.map((m) => (
            <TeamCard key={m.name} member={m} featured={!m.placeholder} />
          ))}
        </div>
        <div className="grid md:grid-cols-2 gap-4 mt-6">
          {faculty.map((f) => (
            <TeamCard key={f.name} member={{ ...f, official: false }} />
          ))}
        </div>
        <Link
          to="/contatti"
          className="mt-8 inline-flex items-center gap-1 text-cyan-300 text-sm transition-all duration-300 hover:gap-2 hover:text-cyan-200"
        >
          Vedi tutti i collaboratori e i docenti tutor →
        </Link>
      </div>
    </section>

    <section className="px-6 sm:px-10 lg:px-16 py-16 border-t border-white/10">
      <div className="max-w-[1700px] mx-auto grid lg:grid-cols-2 gap-6">
        <FadeIn className="h-full">
          <PitStopChallenge />
        </FadeIn>
        <FadeIn delay={120} className="h-full">
          <GearShiftSprint />
        </FadeIn>
      </div>
    </section>

    <section className="px-6 sm:px-10 lg:px-16 py-16 border-t border-white/10">
      <FadeIn>
        <div className="max-w-[1200px] mx-auto overflow-hidden rounded-3xl border border-blue-400/30 bg-[radial-gradient(circle_at_top_left,_rgba(37,99,235,0.28),_transparent_45%),radial-gradient(circle_at_bottom_right,_rgba(6,182,212,0.16),_transparent_45%)] bg-blue-950/30 p-8 sm:p-12">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-cyan-300 font-bold">La scuola</p>
              <h2 className="text-3xl sm:text-4xl font-bold mt-2">Liceo Scientifico “Galileo Galilei”</h2>
              <p className="mt-2 flex items-center gap-2 text-sm text-cyan-200/80">
                <MapPin className="w-4 h-4 text-cyan-300" /> Siena, Toscana · dal 1940
              </p>
              <p className="text-white/75 mt-5 leading-relaxed">
                Il liceo non è solo lo sfondo: è chi finanzia e rende possibile la scuderia. Aule, laboratori, docenti tutor e fiducia negli studenti che vogliono fare ingegneria sul serio, in scala, con una monoposto STEM Racing.
              </p>
              <p className="text-white/75 mt-4 leading-relaxed">
                Nato come Regio Liceo Scientifico di Siena, il “Galilei” è oggi una comunità di quasi mille studenti: una scuola che unisce la tradizione scientifica senese ai laboratori, alle lingue e allo sport.
              </p>

              <div className="mt-6 grid grid-cols-3 gap-3">
                <div className="rounded-xl border border-white/10 bg-white/[0.04] p-3 text-center transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-white/[0.07]">
                  <p className="text-2xl font-black text-cyan-300">1940</p>
                  <p className="text-[10px] uppercase tracking-wider text-white/50 mt-1">Fondazione</p>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/[0.04] p-3 text-center transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-white/[0.07]">
                  <p className="text-2xl font-black text-cyan-300">3</p>
                  <p className="text-[10px] uppercase tracking-wider text-white/50 mt-1">Percorsi</p>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/[0.04] p-3 text-center transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-white/[0.07]">
                  <p className="text-2xl font-black text-cyan-300">Siena</p>
                  <p className="text-[10px] uppercase tracking-wider text-white/50 mt-1">UNESCO</p>
                </div>
              </div>

              <a
                href="https://galilei.edu.it/"
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-cyan-300 transition-all duration-300 hover:gap-2 hover:text-cyan-200"
              >
                Scopri il liceo sul sito ufficiale →
              </a>
            </div>

            <div className="space-y-3">
              <article className="rounded-2xl border border-white/10 bg-black/25 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-black/40">
                <h3 className="flex items-center gap-2 font-semibold text-cyan-200">
                  <GraduationCap className="w-4 h-4" /> Indirizzi di studio
                </h3>
                <p className="text-sm text-white/70 mt-2 leading-relaxed">
                  Liceo Scientifico ordinamentale, potenziamento Cambridge con certificazioni IGCSE e docenti madrelingua, laboratori di matematica, scienze e fisica, e Liceo Scientifico Sportivo con cinque ore settimanali dedicate allo sport.
                </p>
              </article>
              <article className="rounded-2xl border border-white/10 bg-black/25 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-black/40">
                <h3 className="flex items-center gap-2 font-semibold text-cyan-200">
                  <BookOpen className="w-4 h-4" /> Storia e identità
                </h3>
                <p className="text-sm text-white/70 mt-2 leading-relaxed">
                  Il decreto istitutivo è del 13 agosto 1940; dal 1945 la scuola porta il nome di Galileo Galilei e dal 1967 ha sede in via Cesare Battisti, a pochi passi dal centro storico di Siena.
                </p>
              </article>
              <article className="rounded-2xl border border-white/10 bg-black/25 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-black/40">
                <h3 className="flex items-center gap-2 font-semibold text-cyan-200">
                  <Telescope className="w-4 h-4" /> Il legame con Galileo
                </h3>
                <p className="text-sm text-white/70 mt-2 leading-relaxed">
                  Esiliato a Siena nel 1633, Galileo fu ospitato a Palazzo delle Papesse dall’arcivescovo Ascanio Piccolomini. Dalla loggia del palazzo osservò la Luna con il telescopio: lo stesso strumento ispira il logo della scuderia.
                </p>
              </article>
            </div>
          </div>

          <div className="mt-8 flex items-start gap-4 rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-5 transition-colors duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/10">
            <MapPin className="w-5 h-5 text-cyan-300 shrink-0 mt-0.5" />
            <p className="text-sm text-white/75 leading-relaxed">
              <strong className="text-white">Siena e il territorio senese.</strong> Piazza del Campo, le contrade, l’Università e i paesaggi delle Crete Senesi e della Val d’Orcia: la scuderia cresce in una città UNESCO dove storia, scienza e paesaggio convivono.
            </p>
          </div>
        </div>
      </FadeIn>
    </section>
  </>
);
