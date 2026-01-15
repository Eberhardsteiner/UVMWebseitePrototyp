import { Mail, Phone, Linkedin, MessageCircle, Calendar, CheckCircle, ArrowRight } from 'lucide-react';

const steps = [
  {
    number: 1,
    title: 'Unverbindliches Erstgespräch',
    description: 'Wir diskutieren Ihre aktuellen Herausforderungen und Ziele.',
  },
  {
    number: 2,
    title: 'Konkreter Vorschlag',
    description: 'Sie erhalten ein maßgeschneidertes Angebot, oft beginnend mit dem 4C QuickScan.',
  },
  {
    number: 3,
    title: 'Start der Transformation',
    description: 'Wir beginnen die gemeinsame Reise zu Ihrer zukunftsfähigen Organisation.',
  },
];

export default function ContactSection() {
  return (
    <section id="kontakt" className="py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(20,184,166,0.08),transparent_60%)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-16 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-2xl p-8 md:p-12 text-white shadow-xl hover:shadow-2xl hover-lift transition-all duration-500 animate-fade-in-up">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-sm font-medium mb-4 animate-pulse">
                Einstiegsprodukt
              </span>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">4C Navigator QuickScan</h3>
              <p className="text-teal-100 mb-6">
                In 2 Wochen zu Klarheit über Ihre Zukunftsfähigkeit. Eine kompakte, datengestützte
                Analyse Ihres Unternehmens über alle vier Dimensionen des 4C-Modells.
              </p>
              <a
                href="#kontakt"
                className="inline-flex items-center gap-2 bg-white text-teal-600 px-6 py-3 rounded-lg font-medium hover:bg-teal-50 hover:scale-105 hover:shadow-lg transition-all duration-300 group"
              >
                QuickScan anfragen
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
            <div className="space-y-3">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <p className="font-medium">Online-Self-Assessment für Führungskräfte</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <p className="font-medium">Strukturierte Kurzinterviews mit Schlüsselpersonen</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <p className="font-medium">10-seitiger Score-Report mit Benchmark-Vergleich</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <p className="font-medium">90-minütiger Ergebnis-Call zur Einordnung</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Beginnen wir das Gespräch.
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Lassen Sie uns gemeinsam herausfinden, wie das 4C-Modell den Weg für Ihre
            zukunftsfähige Organisation ebnen kann.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8 animate-fade-in-up delay-100">
            <div className="space-y-6">
              {steps.map((step, index) => (
                <div key={step.number} className="flex gap-4 group animate-slide-in-left" style={{ animationDelay: `${100 + index * 100}ms` }}>
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-teal-100 to-cyan-100 text-teal-600 flex items-center justify-center font-bold shadow-md group-hover:scale-110 group-hover:shadow-lg transition-all duration-300">
                    {step.number}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1 group-hover:text-teal-600 transition-colors">{step.title}</h4>
                    <p className="text-gray-600 text-sm">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 hover-lift">
              <h4 className="font-bold text-gray-900 mb-4">Kontaktdaten</h4>
              <div className="space-y-3">
                <a href="mailto:kontakt@uvm-consulting.de" className="flex items-center gap-3 text-gray-600 hover:text-teal-600 transition-all duration-200 group">
                  <Mail size={18} className="group-hover:scale-110 transition-transform" />
                  info@uvm-cg.de
                </a>
                <a href="tel:+491234567890" className="flex items-center gap-3 text-gray-600 hover:text-teal-600 transition-all duration-200 group">
                  <Phone size={18} className="group-hover:scale-110 transition-transform" />
                  +49 89 15 9000 75
                </a>
                <a href="#" className="flex items-center gap-3 text-gray-600 hover:text-teal-600 transition-all duration-200 group">
                  <Linkedin size={18} className="group-hover:scale-110 transition-transform" />
                  linkedin.com/company/uvm-consulting
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 animate-fade-in-up delay-200">
            <div className="flex items-center gap-2 mb-6">
              <MessageCircle className="text-teal-600" size={24} />
              <h3 className="text-xl font-bold text-gray-900">Nachricht senden</h3>
            </div>

            <form className="space-y-5">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                    Vorname
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all hover:border-gray-300"
                    placeholder="Max"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                    Nachname
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all hover:border-gray-300"
                    placeholder="Mustermann"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  E-Mail
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all hover:border-gray-300"
                  placeholder="max.mustermann@unternehmen.de"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                  Unternehmen
                </label>
                <input
                  type="text"
                  id="company"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all hover:border-gray-300"
                  placeholder="Ihr Unternehmen"
                />
              </div>

              <div>
                <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-2">
                  Interesse an
                </label>
                <select
                  id="interest"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all bg-white hover:border-gray-300"
                >
                  <option value="">Bitte wählen...</option>
                  <option value="quickscan">4C QuickScan</option>
                  <option value="competences">Kompetenzentwicklung</option>
                  <option value="culture">Kulturentwicklung</option>
                  <option value="ai">KI & Führung</option>
                  <option value="other">Sonstiges</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Nachricht
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all resize-none hover:border-gray-300"
                  placeholder="Wie können wir Ihnen helfen?"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-teal-600 to-cyan-600 text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 group relative overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-teal-700 to-cyan-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <Calendar size={18} className="relative z-10" />
                <span className="relative z-10">Gespräch vereinbaren</span>
              </button>

              <p className="text-xs text-gray-500 text-center">
                Mit dem Absenden erklären Sie sich mit unserer Datenschutzerklärung einverstanden.
              </p>
            </form>
          </div>
        </div>

       
     
      </div>
    </section>
  );
}
