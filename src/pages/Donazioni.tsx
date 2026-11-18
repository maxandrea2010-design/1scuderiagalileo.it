import React, { useState } from 'react';
import { PageHero } from '../components/ui/PageHero';
import { FadeIn } from '../components/FadeIn';
import { brand } from '../data/site';

export const Donazioni: React.FC = () => {
  const [amount, setAmount] = useState(25);
  const [sent, setSent] = useState(false);
  const presets = [10, 25, 50, 100];

  return (
    <>
      <PageHero
        kicker="Sostieni il progetto"
        title="Donazioni"
        subtitle="Ogni contributo va in materiali, stampe, gare e comunicazione della Scuderia Galileo. Non è un ente commerciale: è un team scolastico."
      />
      <section className="px-6 sm:px-10 lg:px-16 pb-20">
        <FadeIn>
        <div className="max-w-[720px] mx-auto rounded-2xl border border-white/10 bg-black/35 p-8">
          {sent ? (
            <p className="text-white/80 leading-relaxed">
              Grazie. Per finalizzare la donazione scrivi a{' '}
              <a className="text-cyan-300 transition-colors hover:text-cyan-200 hover:underline" href={`mailto:${brand.email}`}>
                {brand.email}
              </a>{' '}
              indicando l’importo di {amount} €. Ti risponderemo con le istruzioni (bonifico / canale indicato dalla scuola).
            </p>
          ) : (
            <form
              className="space-y-6"
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
            >
              <p className="text-sm text-white/70">Scegli un importo indicativo (demo sul sito — il pagamento reale passa dalla mail ufficiale).</p>
              <div className="flex flex-wrap gap-2">
                {presets.map((n) => (
                  <button
                    type="button"
                    key={n}
                    onClick={() => setAmount(n)}
                    className={`rounded-full px-4 py-2 text-sm transition-all duration-300 hover:-translate-y-0.5 ${
                      amount === n
                        ? 'bg-cyan-400 text-[#06111f] shadow-[0_0_20px_rgba(34,211,238,0.3)]'
                        : 'border border-white/15 hover:border-cyan-400/40 hover:bg-white/5'
                    }`}
                  >
                    {n} €
                  </button>
                ))}
              </div>
              <label className="block text-sm">
                Altro importo (€)
                <input
                  type="number"
                  min={1}
                  value={amount}
                  onChange={(e) => setAmount(Number(e.target.value))}
                  className="mt-2 w-full rounded-xl bg-white/5 border border-white/15 px-4 py-2.5 transition-all duration-200 focus:border-cyan-400/60 focus:outline-none focus:ring-2 focus:ring-cyan-400/20"
                />
              </label>
              <button
                type="submit"
                className="w-full rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 py-3 font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_28px_rgba(34,211,238,0.35)] active:scale-[0.99]"
              >
                Prosegui — {amount} €
              </button>
            </form>
          )}
        </div>
        </FadeIn>
      </section>
    </>
  );
};
