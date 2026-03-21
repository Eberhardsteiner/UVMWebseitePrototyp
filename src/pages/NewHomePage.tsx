import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Zap, Target, Users, Shield } from 'lucide-react';
import { ROUTES } from '../constants/paths';

function NewHomePage() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    document.querySelectorAll('.fade-in').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-dark shadow-[0_1px_0_rgba(13,148,136,0.15)] ${
          scrolled ? 'py-3' : 'py-4'
        }`}
      >
        <div className="max-w-container mx-auto px-md flex items-center justify-between">
          <Link to={ROUTES.HOME} className="flex items-center gap-3">
            <span className="font-sans text-xs font-bold text-accent border-2 border-accent px-2.5 py-1 tracking-[0.15em]">
              UVM
            </span>
            <span className="text-sm font-medium text-white tracking-wide">Consulting Group</span>
          </Link>

          <div className="hidden md:flex items-center gap-lg">
            <div
              className="relative"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button className="text-xs font-medium text-white/60 tracking-[0.1em] uppercase transition-colors hover:text-white flex items-center gap-1">
                Unternehmen
                <ChevronDown className="w-3 h-3" />
              </button>
              {dropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-dark border border-accent/20 shadow-xl">
                  <Link
                    to={ROUTES.UNTERNEHMEN}
                    className="block px-4 py-3 text-xs text-white/70 hover:bg-accent/10 hover:text-white transition-colors border-b border-white/5"
                  >
                    UVM Consulting Group
                  </Link>
                  <a
                    href={`${ROUTES.UNTERNEHMEN}#geschaeftsfuehrung`}
                    className="block px-4 py-3 text-xs text-white/70 hover:bg-accent/10 hover:text-white transition-colors border-b border-white/5"
                  >
                    Geschäftsführung
                  </a>
                  <a
                    href={`${ROUTES.UNTERNEHMEN}#werte`}
                    className="block px-4 py-3 text-xs text-white/70 hover:bg-accent/10 hover:text-white transition-colors border-b border-white/5"
                  >
                    Werte und Beratungsansatz
                  </a>
                  <a
                    href={`${ROUTES.UNTERNEHMEN}#netzwerkpartner`}
                    className="block px-4 py-3 text-xs text-white/70 hover:bg-accent/10 hover:text-white transition-colors border-b border-white/5"
                  >
                    Netzwerkpartner
                  </a>
                  <a
                    href={`${ROUTES.UNTERNEHMEN}#referenzen`}
                    className="block px-4 py-3 text-xs text-white/70 hover:bg-accent/10 hover:text-white transition-colors border-b border-white/5"
                  >
                    Referenzen
                  </a>
                  <a
                    href={`${ROUTES.UNTERNEHMEN}#publikationen`}
                    className="block px-4 py-3 text-xs text-white/70 hover:bg-accent/10 hover:text-white transition-colors"
                  >
                    Publikationen
                  </a>
                </div>
              )}
            </div>
            <a
              href="#ansatz"
              className="text-xs font-medium text-white/60 tracking-[0.1em] uppercase transition-colors hover:text-white"
            >
              4C-Modell
            </a>
            <a
              href="https://uvm-akademie.de/web2026/#leistungen"
              className="text-xs font-medium text-white/60 tracking-[0.1em] uppercase transition-colors hover:text-white"
            >
              Leistungen
            </a>
            <a
              href="#kontakt"
              className="bg-accent text-white px-5 py-2.5 text-xs font-semibold tracking-[0.08em] uppercase transition-all hover:bg-accent-light"
            >
              Kontakt
            </a>
          </div>

          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className="block w-6 h-0.5 bg-white transition-all"></span>
            <span className="block w-6 h-0.5 bg-white transition-all"></span>
            <span className="block w-6 h-0.5 bg-white transition-all"></span>
          </button>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-dark flex items-center justify-center">
          <div className="text-center">
            <div className="flex flex-col gap-lg">
              <div className="flex flex-col gap-3">
                <span className="text-sm text-accent uppercase tracking-[0.15em] font-semibold">
                  Unternehmen
                </span>
                <Link
                  to={ROUTES.UNTERNEHMEN}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base text-white/70 tracking-[0.08em] font-light"
                >
                  UVM Consulting Group
                </Link>
                <a
                  href={`${ROUTES.UNTERNEHMEN}#geschaeftsfuehrung`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base text-white/70 tracking-[0.08em] font-light"
                >
                  Geschäftsführung
                </a>
                <a
                  href={`${ROUTES.UNTERNEHMEN}#werte`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base text-white/70 tracking-[0.08em] font-light"
                >
                  Werte und Beratungsansatz
                </a>
                <a
                  href={`${ROUTES.UNTERNEHMEN}#netzwerkpartner`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base text-white/70 tracking-[0.08em] font-light"
                >
                  Netzwerkpartner
                </a>
                <a
                  href={`${ROUTES.UNTERNEHMEN}#referenzen`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base text-white/70 tracking-[0.08em] font-light"
                >
                  Referenzen
                </a>
                <a
                  href={`${ROUTES.UNTERNEHMEN}#publikationen`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base text-white/70 tracking-[0.08em] font-light"
                >
                  Publikationen
                </a>
              </div>
              <a
                href="#ansatz"
                onClick={() => setMobileMenuOpen(false)}
                className="text-xl text-white uppercase tracking-[0.1em] font-light"
              >
                4C-Modell
              </a>
              <a
                href="https://uvm-akademie.de/web2026/#leistungen"
                onClick={() => setMobileMenuOpen(false)}
                className="text-xl text-white uppercase tracking-[0.1em] font-light"
              >
                Leistungen
              </a>
              <a
                href="#kontakt"
                onClick={() => setMobileMenuOpen(false)}
                className="text-xl text-white uppercase tracking-[0.1em] font-light"
              >
                Kontakt
              </a>
            </div>
          </div>
        </div>
      )}

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0f1a] via-[#0f172a] to-[#132030]">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_25%_75%,rgba(13,148,136,0.1)_0%,transparent_55%),radial-gradient(ellipse_at_75%_25%,rgba(217,119,6,0.06)_0%,transparent_50%)]"></div>
        </div>

        <div className="relative z-10 max-w-3xl px-md py-3xl text-center">
          <div className="text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-accent mb-md">
            UVM Consulting Group
          </div>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal leading-tight text-white mb-lg">
            Zukunftsfähigkeit ist kein Zufall.{' '}
            <span className="text-accent italic">
              Sie ist der Mut, funktionierende Systeme zu hinterfragen
            </span>{' '}
            – bevor es der Markt tut.
          </h1>
          <p className="text-lg font-light leading-relaxed text-white/60 max-w-2xl mx-auto mb-xl">
            Hier Texte einfügen wie bei Schäuble?
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="#ansatz"
              className="inline-block px-8 py-3.5 bg-accent text-white text-[0.85rem] font-semibold uppercase tracking-[0.08em] transition-all hover:bg-accent-light hover:-translate-y-0.5"
            >
              Unser Ansatz
            </a>
            <a
              href="#kontakt"
              className="inline-block px-8 py-3.5 bg-transparent text-white border border-white/25 text-[0.85rem] font-semibold uppercase tracking-[0.08em] transition-all hover:border-white hover:bg-white/5"
            >
              Kontakt aufnehmen
            </a>
          </div>
        </div>

        <div className="absolute bottom-lg left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3">
          <span className="text-[0.6rem] uppercase tracking-[0.2em] text-white/25">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-accent to-transparent animate-pulse"></div>
        </div>
      </section>

      <section className="py-3xl bg-dark-blue">
        <div className="max-w-container mx-auto px-md">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-md">
            {[
              {
                icon: Zap,
                title: 'KI verändert jede Branche',
                text: 'Wer KI nicht als strategischen Hebel begreift, verliert den Anschluss. Nicht morgen – jetzt.',
              },
              {
                icon: Target,
                title: 'Skills von heute sind morgen obsolet',
                text: 'Die Hälfte Ihrer Mitarbeiterkompetenzen muss neu gedacht werden. Die Frage ist: Haben Sie einen Plan?',
              },
              {
                icon: Users,
                title: 'Kultur entscheidet über Überleben',
                text: 'Transformation scheitert nie an der Technik. Sie scheitert an Menschen, die nicht mitgenommen werden.',
              },
              {
                icon: Shield,
                title: 'Krisen kommen schneller als geplant',
                text: 'Restrukturierung, Nachfolge, Marktumbruch – wer nicht vorbereitet ist, reagiert. Wer vorbereitet ist, gestaltet.',
              },
            ].map((card, i) => (
              <div
                key={i}
                className="fade-in p-lg bg-white/[0.03] border border-white/[0.06] text-center transition-all hover:border-accent hover:bg-accent/5 hover:-translate-y-1"
              >
                <card.icon className="w-10 h-10 text-accent mx-auto mb-md" />
                <h3 className="font-serif text-lg font-medium text-white mb-sm leading-snug">
                  {card.title}
                </h3>
                <p className="text-sm font-light leading-relaxed text-white/45">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="ansatz" className="py-3xl bg-white">
        <div className="max-w-container mx-auto px-md">
          <div className="text-center mb-2xl max-w-3xl mx-auto">
            <span className="inline-block text-[0.65rem] font-bold uppercase tracking-[0.2em] text-accent mb-sm px-3.5 py-1.5 border border-accent/30">
              Unser Ansatz
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-normal text-gray-900 mt-sm leading-tight">
              Ein System statt Einzelmaßnahmen.
            </h2>
            <p className="text-lg font-light leading-relaxed text-slate-muted mt-md">
              Isolierte Workshops und Strategiepapiere ändern nichts. Echte Zukunftsfähigkeit
              entsteht nur, wenn Strategie, Kultur, Kompetenzen und Verhaltensgrundsätze
              zusammenwirken. Dafür haben wir das 4C-Modell entwickelt.
            </p>
          </div>

          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0.5 bg-light mb-xl">
              {[
                {
                  id: 'strategy',
                  label: 'C1',
                  title: 'Corporate Strategy',
                  text: 'Digitalisierungsstrategie · KI-Integration · People Analytics · Prozessoptimierung',
                  color: 'strategy',
                },
                {
                  id: 'culture',
                  label: 'C2',
                  title: 'Culture & Change',
                  text: 'Digitale Kultur · Behavioral Design · KI Change Readiness · Arbeitgeber-Zertifizierung',
                  color: 'culture',
                },
                {
                  id: 'conduct',
                  label: 'C3',
                  title: 'Code of Conduct',
                  text: 'Leadership Principles · Core Values · KI-Governance · Green Culture & Nachhaltigkeit',
                  color: 'conduct',
                },
                {
                  id: 'competence',
                  label: 'C4',
                  title: 'Competences',
                  text: 'Future Skills · Führungskräftequalifizierung · Business Gaming · KI-Ready Leadership',
                  color: 'competence',
                },
              ].map((card) => (
                <div
                  key={card.id}
                  className={`fade-in p-xl bg-white relative overflow-hidden transition-all hover:-translate-y-0.5 hover:shadow-xl before:absolute before:top-0 before:left-0 before:w-1 before:h-full before:bg-${card.color} hover:bg-${card.color}-light`}
                >
                  <span
                    className={`text-[0.65rem] font-bold uppercase tracking-[0.15em] text-${card.color} block mb-2`}
                  >
                    {card.label}
                  </span>
                  <h3 className="font-serif text-xl font-medium text-gray-900 mb-sm">
                    {card.title}
                  </h3>
                  <p className="text-sm font-normal leading-relaxed text-slate-muted">{card.text}</p>
                </div>
              ))}
            </div>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-dark rounded-full flex items-center justify-center shadow-[0_0_0_6px_white,0_4px_20px_rgba(0,0,0,0.15)] hidden md:flex">
              <span className="font-sans text-lg font-bold text-accent tracking-wider">4C</span>
            </div>

            <div className="text-center pt-sm">
              <p className="text-base font-normal text-slate mb-md">
                16 konkrete Produkte. Ein integriertes System. Vom QuickScan bis zur zertifizierten
                Umsetzung.
              </p>
              <a
                href="https://uvm-akademie.de/web2026/#leistungen"
                className="inline-block px-8 py-3.5 bg-transparent text-accent border-2 border-accent text-[0.85rem] font-semibold uppercase tracking-[0.08em] transition-all hover:bg-accent-subtle hover:-translate-y-0.5"
              >
                Alle Leistungen im Detail entdecken
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="prozess" className="py-3xl bg-dark-blue">
        <div className="max-w-container mx-auto px-md">
          <div className="text-center mb-2xl max-w-3xl mx-auto">
            <span className="inline-block text-[0.65rem] font-bold uppercase tracking-[0.2em] text-accent-light mb-sm px-3.5 py-1.5 border border-accent/30">
              Wie wir arbeiten
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-normal text-white mt-sm leading-tight">
              Nicht beraten. Gemeinsam umsetzen.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-md">
            {[
              {
                number: '01',
                title: 'Verstehen',
                text: 'Unverbindliches Erstgespräch. Wir hören zu, stellen die richtigen Fragen und verstehen Ihre Situation.',
              },
              {
                number: '02',
                title: 'Analysieren',
                text: 'Unser 4C QuickScan gibt Ihnen in zwei Wochen Klarheit über Ihre Zukunftsfähigkeit – datenbasiert, nicht aus dem Bauch.',
              },
              {
                number: '03',
                title: 'Umsetzen',
                text: 'Maßgeschneiderte Roadmap. Workshops, Trainings, Coaching – alles aus einer Hand, bis die Veränderung sitzt.',
              },
              {
                number: '04',
                title: 'Verankern',
                text: 'Regelmäßige Reviews, Erfolgsmessung und Nachjustierung. Damit Transformation keine Eintagsfliege bleibt.',
              },
            ].map((step, i) => (
              <div key={i} className="fade-in text-center p-lg">
                <span className="font-serif text-5xl font-semibold text-accent/20 leading-none block mb-sm">
                  {step.number}
                </span>
                <h3 className="font-serif text-lg font-medium text-white mb-sm">{step.title}</h3>
                <p className="text-sm font-light leading-relaxed text-white/50">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-xl bg-light-white border-t border-b border-light">
        <div className="max-w-container mx-auto px-md">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-xl text-center">
            {[
              {
                title: 'Wissenschaftlich fundiert',
                text: 'Data Science trifft Psychologie – wir sehen den Menschen hinter den Daten.',
              },
              {
                title: 'Systematisch & Messbar',
                text: 'Was man misst, kann man managen. Unser 4C-Modell macht Fortschritt sichtbar.',
              },
              {
                title: 'Praktisch & Umsetzbar',
                text: 'Keine Strategiepapiere für die Schublade. Praxiserprobte Lösungen, die wirken.',
              },
            ].map((value, i) => (
              <div key={i} className="fade-in">
                <h3 className="font-serif text-lg font-medium text-gray-900 mb-2">{value.title}</h3>
                <p className="text-sm text-slate-muted leading-relaxed">{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-3xl bg-white">
        <div className="max-w-container mx-auto px-md">
          <div className="text-center mb-2xl max-w-3xl mx-auto">
            <span className="inline-block text-[0.65rem] font-bold uppercase tracking-[0.2em] text-accent mb-sm px-3.5 py-1.5 border border-accent/30">
              Die Köpfe dahinter
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-normal text-gray-900 mt-sm leading-tight">
              Zwei Professuren. Eine Mission.
            </h2>
            <p className="text-lg font-light leading-relaxed text-slate-muted mt-md">
              Wir sind keine externen Berater, die Folien produzieren und wieder gehen. Wir
              verbinden neueste Forschung mit der Realität des Mittelstands.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-xl">
            {[
              {
                initial: 'S',
                name: 'Prof. Dr. Eberhard Steiner',
                role: 'Geschäftsführender Gesellschafter UVM\nProfessor, Privatuni Schloss Seeburg',
                claim: '"Leading with Trust in the Age of AI"',
                fields: ['Strategie in der Disruption', 'Digitalisierung mit KI'],
                bio: 'Wenn sich ganze Branchen in Monaten neu ordnen, braucht es Strategen, die Technologie verstehen und Vertrauen schaffen können. Prof. Dr. Steiner verbindet KI-Kompetenz mit jahrelanger Beratungserfahrung – damit digitale Transformation nicht nur funktioniert, sondern von allen getragen wird.',
                highlights: [
                  'Digitale Transformationsstrategie & KI-Integration',
                  'Strategische Neuausrichtung in disruptiven Märkten',
                  'Kunden: Flughafen München, Hexal, Volkswagen u.a.',
                ],
              },
              {
                initial: 'L',
                name: 'Prof. Dr. Miriam Landes',
                role: 'Diplom-Psychologin & Humanbiologin\nProfessorin, FH für angewandtes Management',
                claim: '"Führung neu denken – mutig, verantwortungsvoll, wirksam"',
                fields: ['Female Leadership', 'Responsible Leadership'],
                bio: 'Nachhaltige Unternehmenserfolge entstehen durch Führung, die Diversität als Stärke nutzt und Verantwortung als Prinzip versteht. Prof. Dr. Landes bringt die Perspektive der Psychologie in die Unternehmensberatung – für eine Führungskultur, die Menschen wirklich mitnimmt.',
                highlights: [
                  'Führungskräfteentwicklung & Organisationsentwicklung',
                  'Change Management & Teamentwicklung',
                  'Autorin: Springer-Verlag, zahlreiche Fachpublikationen',
                ],
              },
            ].map((expert, i) => (
              <div
                key={i}
                className="fade-in bg-light-white border border-light p-xl transition-all hover:border-accent hover:shadow-xl"
              >
                <div className="flex items-center gap-md mb-md">
                  <div className="w-18 h-18 flex-shrink-0">
                    <div className="w-full h-full bg-dark rounded-full flex items-center justify-center font-serif text-2xl text-accent">
                      {expert.initial}
                    </div>
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <h3 className="font-serif text-xl font-medium text-gray-900">
                      {expert.name}
                    </h3>
                    <p className="text-xs text-slate-muted leading-snug whitespace-pre-line">
                      {expert.role}
                    </p>
                  </div>
                </div>
                <p className="font-serif italic text-base text-accent mb-md py-sm border-t border-b border-light leading-relaxed">
                  {expert.claim}
                </p>
                <div className="flex flex-wrap gap-2 mb-md">
                  {expert.fields.map((field, j) => (
                    <span
                      key={j}
                      className="text-[0.65rem] font-bold uppercase tracking-wider text-accent bg-accent-subtle px-2.5 py-1 border border-accent/15"
                    >
                      {field}
                    </span>
                  ))}
                </div>
                <p className="text-sm font-light leading-relaxed text-slate-muted mb-md">
                  {expert.bio}
                </p>
                <ul className="flex flex-col gap-1.5">
                  {expert.highlights.map((highlight, j) => (
                    <li key={j} className="text-xs text-slate pl-4 relative">
                      <span className="absolute left-0 top-2 w-1.5 h-px bg-accent"></span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="kontakt" className="py-3xl bg-dark">
        <div className="max-w-container mx-auto px-md">
          <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_0.7fr] gap-3xl items-center">
            <div className="fade-in">
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-normal text-white mb-md leading-tight">
                In 2 Wochen wissen, wo Sie stehen.
              </h2>
              <p className="text-base font-light leading-relaxed text-white/60 mb-sm">
                Unser <strong className="text-accent-light font-semibold">4C Navigator QuickScan</strong>{' '}
                analysiert die Zukunftsfähigkeit Ihres Unternehmens – mit Self-Assessments,
                Interviews und einem detaillierten Report mit konkreten Handlungsempfehlungen.
              </p>
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-accent mb-lg">
                Kostenlos. Vertraulich. Unverbindlich.
              </p>
              <div className="flex items-center gap-lg flex-wrap">
                <a
                  href="mailto:info@uvm-cg.de"
                  className="inline-block px-8 py-3.5 bg-accent text-white text-[0.85rem] font-semibold uppercase tracking-[0.08em] transition-all hover:bg-accent-light"
                >
                  Jetzt QuickScan anfragen
                </a>
                <a
                  href="tel:+498915900075"
                  className="font-serif text-lg text-white/60 transition-colors hover:text-white"
                >
                  +49 89 15 9000 75
                </a>
              </div>
            </div>

            <div className="fade-in bg-accent/[0.08] border border-accent/20 p-xl">
              <h3 className="font-serif text-lg font-medium text-white mb-md">So starten wir:</h3>
              <ul className="flex flex-col gap-md">
                {[
                  { title: 'Erstgespräch', desc: '30 Min. – Ihre Herausforderung verstehen' },
                  { title: 'QuickScan', desc: '2 Wochen – Analyse & Report' },
                  { title: 'Roadmap', desc: 'Maßgeschneiderter Plan für Ihre Transformation' },
                ].map((step, i) => (
                  <li key={i} className="flex flex-col gap-0.5 pl-lg relative">
                    <span className="absolute left-0 top-0 font-serif text-xl font-semibold text-accent leading-none">
                      {i + 1}
                    </span>
                    <strong className="text-[0.95rem] font-semibold text-white">
                      {step.title}
                    </strong>
                    <span className="text-xs text-white/45">{step.desc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-dark py-xl border-t border-accent/15">
        <div className="max-w-container mx-auto px-md">
          <div className="flex flex-wrap justify-between items-start gap-xl pb-lg border-b border-white/[0.06]">
            <div>
              <span className="font-sans text-[0.95rem] font-semibold text-white block mb-1">
                UVM Consulting Group
              </span>
              <p className="text-xs text-white/35 leading-relaxed">
                Wissenschaftlich fundierte Beratung für zukunftsfähige Organisationen
              </p>
            </div>
            <div className="flex flex-col gap-1.5">
              <a
                href="mailto:info@uvm-cg.de"
                className="text-xs text-white/50 transition-colors hover:text-white"
              >
                info@uvm-cg.de
              </a>
              <a
                href="tel:+498915900075"
                className="text-xs text-white/50 transition-colors hover:text-white"
              >
                +49 89 15 9000 75
              </a>
            </div>
            <div className="flex gap-lg">
              <Link
                to={ROUTES.IMPRESSUM}
                className="text-xs text-white/35 uppercase tracking-[0.1em] transition-colors hover:text-white"
              >
                Impressum
              </Link>
              <Link
                to={ROUTES.DATENSCHUTZ}
                className="text-xs text-white/35 uppercase tracking-[0.1em] transition-colors hover:text-white"
              >
                Datenschutz
              </Link>
            </div>
          </div>
          <div className="pt-md">
            <p className="text-[0.7rem] text-white/20 text-center">
              © 2026 UVM Consulting Group. Alle Rechte vorbehalten.
            </p>
          </div>
        </div>
      </footer>

      <style>{`
        .fade-in {
          opacity: 0;
          transform: translateY(25px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .fade-in-visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </div>
  );
}

export default NewHomePage;
