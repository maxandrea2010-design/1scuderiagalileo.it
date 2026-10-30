import React, { useState } from 'react';
import { X, Flag, Calendar, Users, ShieldCheck, CheckCircle2, MapPin, Mail } from 'lucide-react';

interface PaddockClubModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedGp?: string;
}

export const PaddockClubModal: React.FC<PaddockClubModalProps> = ({
  isOpen,
  onClose,
  preselectedGp,
}) => {
  const [selectedGp, setSelectedGp] = useState(preselectedGp || 'Gran Premio d’Italia (Monza)');
  const [passType, setPassType] = useState('Ferrari Formula 1 Club VIP Experience');
  const [guests, setGuests] = useState(2);
  const [submitted, setSubmitted] = useState(false);
  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [clientPhone, setClientPhone] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-transparent/90 backdrop-blur-md overflow-y-auto">
      <div
        className="relative w-full max-w-2xl bg-transparent border border-[#E10600]/40 rounded-2xl p-6 sm:p-8 text-white shadow-[0_0_50px_rgba(225,6,0,0.25)] my-8 transition-all"
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          aria-label="Chiudi finestra"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-10 text-center space-y-5">
            <div className="w-16 h-16 rounded-full bg-[#E10600] text-white flex items-center justify-center mx-auto mb-4 shadow-[0_0_25px_rgba(225,6,0,0.6)]">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Richiesta Ricevuta con Successo
            </h3>
            <p className="text-sm text-white/80 max-w-md mx-auto leading-relaxed">
              Grazie, {clientName || 'appassionato ferrarista'}. Il team Hospitality & Paddock Club della Scuderia Ferrari ti contatterà con il programma esclusivo e le opzioni accredito box.
            </p>
            <div className="bg-white/5 border border-white/10 rounded-xl p-4 max-w-sm mx-auto text-left text-xs space-y-2 mt-4">
              <div className="flex justify-between">
                <span className="text-white/60">Gran Premio:</span>
                <span className="text-white font-medium">{selectedGp}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/60">Esperienza:</span>
                <span className="text-white font-medium">{passType}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/60">Ospiti:</span>
                <span className="text-white font-medium">{guests} Pass VIP</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/60">Codice Accredito:</span>
                <span className="text-[#E10600] font-mono font-bold">SF25-{Math.floor(100000 + Math.random() * 900000)}</span>
              </div>
            </div>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="mt-6 px-6 py-2.5 bg-[#E10600] hover:bg-[#c20500] text-white font-semibold rounded-full text-xs uppercase tracking-wider transition-colors shadow-lg"
            >
              Chiudi
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <span className="text-xs uppercase tracking-[0.25em] text-[#E10600] font-bold block mb-1">
                Scuderia Ferrari · Hospitality
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                Richiedi Accesso Paddock Club 2025
              </h3>
              <p className="text-xs text-white/70 mt-1">
                Vivi il Gran Premio a fianco del team: accesso al garage Ferrari, pit lane walk riservata e incontro piloti.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Grand Prix Selection */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-white/70 mb-1">
                  Seleziona il Gran Premio
                </label>
                <select
                  value={selectedGp}
                  onChange={(e) => setSelectedGp(e.target.value)}
                  className="w-full bg-transparent border border-white/20 rounded-lg px-3.5 py-2 text-sm text-white focus:outline-none focus:border-[#E10600] transition-colors"
                >
                  <option value="Gran Premio d’Italia (Monza)">Gran Premio d’Italia · Autodromo Nazionale Monza (Settembre 2025)</option>
                  <option value="Grand Prix de Monaco (Monte Carlo)">Grand Prix de Monaco · Circuit de Monaco (Maggio 2025)</option>
                  <option value="British Grand Prix (Silverstone)">British Grand Prix · Silverstone Circuit (Luglio 2025)</option>
                  <option value="Belgian Grand Prix (Spa-Francorchamps)">Belgian Grand Prix · Circuit de Spa (Luglio 2025)</option>
                  <option value="Australian Grand Prix (Melbourne)">Australian Grand Prix · Albert Park (Marzo 2025)</option>
                  <option value="Japanese Grand Prix (Suzuka)">Japanese Grand Prix · Suzuka Circuit (Aprile 2025)</option>
                  <option value="Abu Dhabi Grand Prix (Yas Marina)">Abu Dhabi Grand Prix · Yas Marina (Dicembre 2025)</option>
                </select>
              </div>

              {/* Pass Category & Guests */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-white/70 mb-1">
                    Tipo di Esperienza
                  </label>
                  <select
                    value={passType}
                    onChange={(e) => setPassType(e.target.value)}
                    className="w-full bg-transparent border border-white/20 rounded-lg px-3.5 py-2 text-sm text-white focus:outline-none focus:border-[#E10600] transition-colors"
                  >
                    <option value="Ferrari Formula 1 Club VIP Experience">Ferrari F1 Club VIP (Accesso Box & Garage)</option>
                    <option value="Paddock Club Lounge & Catering">Paddock Club Suite & Terrazza Panoramica</option>
                    <option value="Pit-Lane Walk & Technical Briefing">Pit-Lane Walk & Briefing con Ingegneri</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-white/70 mb-1">
                    Numero di Ospiti
                  </label>
                  <select
                    value={guests}
                    onChange={(e) => setGuests(Number(e.target.value))}
                    className="w-full bg-transparent border border-white/20 rounded-lg px-3.5 py-2 text-sm text-white focus:outline-none focus:border-[#E10600] transition-colors"
                  >
                    {[1, 2, 4, 6, 8, 10].map((n) => (
                      <option key={n} value={n} className="bg-transparent text-white">
                        {n} {n === 1 ? 'Pass VIP' : 'Pass VIP'}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Contact Details */}
              <div className="pt-2 border-t border-white/10 space-y-3">
                <span className="text-xs uppercase tracking-wider text-white/60 block">
                  Dati di Contatto del Referente
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <input
                      type="text"
                      required
                      placeholder="Nome e Cognome"
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      className="w-full bg-white/5 border border-white/20 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-[#E10600]"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      required
                      placeholder="Email Personale"
                      value={clientEmail}
                      onChange={(e) => setClientEmail(e.target.value)}
                      className="w-full bg-white/5 border border-white/20 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-[#E10600]"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      required
                      placeholder="Telefono / WhatsApp"
                      value={clientPhone}
                      onChange={(e) => setClientPhone(e.target.value)}
                      className="w-full bg-white/5 border border-white/20 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-[#E10600]"
                    />
                  </div>
                </div>
              </div>

              {/* Perks Included */}
              <div className="p-3 rounded-lg bg-white/5 border border-white/10 text-xs text-white/80 space-y-1">
                <div className="flex items-center gap-1.5 text-white font-medium">
                  <Flag className="w-3.5 h-3.5 text-[#E10600]" />
                  <span>Incluso nell'Accredito Ferrari:</span>
                </div>
                <p className="text-[11px] text-white/70">
                  Accesso ai box durante le prove, cuffie interfono per ascoltare i team radio di Hamilton e Leclerc, gourmet catering italiano e kit merchandising ufficiale 2025.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex items-center justify-between">
                <div className="text-xs text-white/60 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#E10600]" />
                  <span>Accredito Ufficiale Scuderia Ferrari</span>
                </div>
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-[#E10600] hover:bg-[#c20500] text-white font-semibold rounded-full text-xs uppercase tracking-wider transition-all cursor-pointer flex items-center gap-2 shadow-[0_0_20px_rgba(225,6,0,0.5)] hover:scale-102"
                >
                  <span>Invia Richiesta Pass</span>
                  <Flag className="w-3.5 h-3.5 fill-white" />
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
