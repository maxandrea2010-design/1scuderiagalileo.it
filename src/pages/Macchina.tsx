import React from 'react';
import { PageHero } from '../components/ui/PageHero';
import { CarMaterialize } from '../components/interactive/CarMaterialize';
import { FadeIn } from '../components/FadeIn';
import { carBuildSteps } from '../data/site';

export const Macchina: React.FC = () => (
  <>
    <PageHero
      kicker="Progetto tecnico"
      title="Come nasce la macchina"
      subtitle="Dall’idea al rettilineo: design, iterazioni e costruzione della monoposto STEM Racing della Scuderia Galileo."
    />
    <section className="px-6 sm:px-10 lg:px-16 pb-20">
      <div className="max-w-[1100px] mx-auto space-y-10">
        <CarMaterialize />
        <div className="space-y-5">
          {carBuildSteps.map((step, i) => (
            <FadeIn key={step.title} delay={i * 80}>
              <article className="group flex gap-5 rounded-2xl border border-white/10 bg-black/30 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-black/40">
                <span className="w-10 shrink-0 text-2xl font-bold text-cyan-300 transition-colors duration-300 group-hover:text-cyan-200">0{i + 1}</span>
                <div>
                  <h2 className="text-xl font-bold">{step.title}</h2>
                  <p className="text-white/70 mt-2 leading-relaxed">{step.text}</p>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
        <FadeIn>
          <p className="text-sm text-white/55">
            Le specifiche numeriche definitive (peso, tempi, setup) verranno pubblicate dopo i test ufficiali di stagione.
          </p>
        </FadeIn>
      </div>
    </section>
  </>
);
