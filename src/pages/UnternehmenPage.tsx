import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AccordionItem from '../components/AccordionItem';
import CompetenceAccordion from '../components/CompetenceAccordion';
import NetworkPartnersSection from '../components/NetworkPartnersSection';
import ReferencesSection from '../components/ReferencesSection';
import BooksSection from '../components/BooksSection';
import { Building2, Target, UserCircle } from 'lucide-react';

const groupCompanies = [
  {
    name: 'UVM-Institut',
    logoSrc: 'https://uvminstitut.de/img/custom/logo.png',
    focus:
      'Das UVM-Institut verbindet Ökonomie und Psychologie und unterstützt Unternehmen dabei, wirtschaftliche Ziele mit Blick auf menschliches Verhalten umzusetzen. Im Mittelpunkt stehen Strategie- und Veränderungsmanagement, Kompetenz- und Führungskräfteentwicklung sowie Controlling- und Management-Themen. Das Angebot reicht von Beratung und Coachings über Workshops und Schulungen bis zu unternehmensweiten Projekten.',
    website: 'https://www.uvm-institut.de',
    websiteLabel: 'uvm-institut.de'
  },
  {
    name: 'UVM Coaching',
    logoSrc:
      'https://uvm-akademie.de/web2026/UVMcoaching.png',
    focus:
      'UVM Coaching arbeitet nach dem Ansatz des Systemischen Management Coachings (SMC) und begleitet Führungskräfte dabei, eigene Lösungen zu entwickeln. Für Unternehmen werden individuelle Coachingmaßnahmen angeboten, von Top-Executive Coaching bis Teamcoaching und E-Coaching. Privatpersonen unterstützt UVM Coaching bei beruflicher Neuorientierung und beim Stärken persönlicher Ressourcen und Kompetenzen.',
    website: 'https://www.uvm-coaching.de',
    websiteLabel: 'uvm-coaching.de'
  },
  {
    name: 'UVM Active',
    logoSrc:
      'https://le-cdn.website-editor.net/s/5e71a294f5c646de848a430ee784b307/dms3rep/multi/opt/b63f2ced-8cdc-4b28-9c59-1a7f25e372c4-1920w.jpg?Expires=1770440562&Key-Pair-Id=K2NXBXLF010TJW&Signature=bF8Sim0pOjx7icx04v-Z0OpnIt4ZOFmMo9WZNmFE7AaoL0MbkihHeKCpTD65jqGQFpdGkwsnvfZpd8wwGHABL4uZkukWkgu9aUBG7QKRpV3BKO9EhIIwI6hn0p-1Ydok5ZbKYDoU0DQpuFOJIn~bUUoXfD80JaARbXW944mxp0hX-3nthplPvbkA9fzX9uKRqOMbddJVsgmCjyUEztczY0K40ZHVl96aPuX6xNpVJChPdQ0DUgXomN9O9Udszt1-mjJ47s8deexRq3DUmSCVV5G0Zh96QOSP6cy-SvJ0tYDQWrE--e7Kdsv9KsIINYZbTmLF8UgKn4Oo5w7fsw48pA__',
    focus:
      'UVM Active bietet erlebnisorientierte Entwicklungsformate, bei denen Teams und Führungskräfte in herausfordernden Übungen gemeinsam lernen. Schwerpunkte sind Team Building und Leadership Development, ergänzt durch Outdoor-Trainings, die Lernen emotional verankern. Alle Übungen werden auf den konkreten Arbeitskontext der Teilnehmenden übertragen, damit der Transfer in den Alltag gelingt.',
    website: 'https://uvm-active.de',
    websiteLabel: 'uvm-active.de'
  },
  {
    name: 'Empfehlenswerter Arbeitgeber',
    logoSrc:
      'https://empfehlenswerter-arbeitgeber.de/wp-content/uploads/2024/03/Logo-%E2%80%A2-Primaer-%E2%80%A2-Normal.png',
    focus:
      '„Empfehlenswerter Arbeitgeber“ ist eine Zertifizierung, die die Arbeitgeberattraktivität eines Unternehmens objektiv, standardisiert und unabhängig bewertet. Dazu wird ein Kriterienkatalog genutzt, der unter anderem Unternehmenskultur, Kommunikation, Nachhaltigkeit, Innovationsfähigkeit und Work-Life-Balance betrachtet. Auf Basis der Ergebnisse erhalten Unternehmen ein Zertifikat sowie konkrete Empfehlungen zur Weiterentwicklung ihrer Arbeitgeberqualität.',
    website: 'https://www.empfehlenswerter-arbeitgeber.de',
    websiteLabel: 'empfehlenswerter-arbeitgeber.de'
  },
   {
    name: 'UVM-Akademie',
    logoSrc:
      'https://uvm-akademie.de/web2026/UVMAkademie.png',
    focus:
      'In der UVM-Akademie bündeln wir unsere Fort- und Weiterbildungsangebote sowie den Bereich der Führungskräfteentwicklung. Ebenso haben wir hier die gesamte E-Learning-Aktivitäten und Business Games (z.B. Crisis Manager) fokussiert"',
    
  },
   {
    name: 'UVM-Innovationlab',
    logoSrc:
      'https://uvm-akademie.de/web2026/UVMInno.png',
    focus:
      'Das UVM Innovation Lab bietet Beratung und individuell konzipierte Workshops für Unternehmen an, um Kreativität und Innovation systematisch zu stärken. Dabei kommen agile Methoden wie Design Thinking und die Ideenstrom-Methode zum Einsatz. Der Ansatz ist interdisziplinär und verbindet Wirtschaftswissenschaften und Wirtschaftspsychologie auf Basis wissenschaftlicher Erkenntnisse. Innovation wird dabei nicht nur als kreativer Prozess verstanden, sondern auch in ihren psychologischen und organisatorischen Auswirkungen betrachtet, etwa mit Blick auf Motivation, Neurobiologie und Change Management.',
    
  }
];

export default function UnternehmenPage() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-16 md:pt-20">
        <section id="uvm-consulting" className="py-20 bg-gradient-to-br from-teal-50 to-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-teal-600 rounded-lg">
                <Building2 size={32} className="text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">UVM Consulting Group</h1>
            </div>
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                Die UVM Consulting Group ist Ihr strategischer Partner für nachhaltige Unternehmensentwicklung.
                Mit unserem ganzheitlichen 4C-Ansatz begleiten wir Organisationen auf ihrem Weg zu mehr Erfolg,
                Effizienz und zukunftsorientierter Ausrichtung.
              </p>
              <p className="text-xl text-gray-600 leading-relaxed">
                Unsere Expertise verbindet bewährte Beratungsmethoden mit innovativen Lösungen. Wir verstehen
                uns als Partner auf Augenhöhe, der Ihre individuellen Herausforderungen analysiert und gemeinsam
                mit Ihnen maßgeschneiderte Strategien entwickelt.
              </p>

              <p className="text-xl text-gray-600 leading-relaxed">
                Die UVM-Consulting Group besteht aus einer Reihe von spezialisierten Unternehmen:
              </p>

              <div className="not-prose mt-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {groupCompanies.map((company) => (
                    <div
                      key={company.name}
                      className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-24 h-16 bg-gray-50 rounded-lg flex items-center justify-center p-3">
                          <img
                            src={company.logoSrc}
                            alt={`${company.name} Logo`}
                            className="max-h-full max-w-full object-contain"
                            loading="lazy"
                          />
                        </div>

                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-gray-900 mb-2">{company.name}</h3>
                          <p className="text-gray-700 text-sm leading-relaxed mb-3">{company.focus}</p>
                          <a
                            href={company.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-teal-700 font-semibold hover:text-teal-800"
                          >
                            {company.websiteLabel}
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="geschaeftsfuehrung" className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-4 mb-12">
              <div className="p-3 bg-teal-600 rounded-lg">
                <UserCircle size={32} className="text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Geschäftsführung</h2>
            </div>

            <div className="space-y-6">
              <AccordionItem
                title="Prof. Dr. Miriam Landes"
                subtitle="Diplom-Psychologin, Humanbiologin und promovierte Expertin im Bereich Motivation und Persönlichkeit (LMU München)"
              >
                <div className="space-y-6 text-gray-700">
                  <p className="text-lg leading-relaxed">
                    Prof. Dr. Miriam Landes steht für wissenschaftlich fundierte, praxisorientierte Führungskräfteentwicklung.
                    Ihre Arbeit verbindet aktuelle Forschung mit den konkreten Herausforderungen moderner Organisationen –
                    von Change- und Innovationsprozessen über agiles Management bis hin zur digitalen Transformation mit
                    Fokus auf Mensch-Maschine-Schnittstellen und Künstliche Intelligenz.
                  </p>

                  <p className="text-lg leading-relaxed">
                    Als Mitglied des wissenschaftlichen Beirats des Deutschen Bundesverbands Coaching (DBVC) und durch ihre
                    vielfältigen Qualifikationen – darunter Systemisches Management- und Teamcoaching (SMC) sowie Design Thinking,
                    MotivationsPotenzialAnalyse (MPA) und LINC Personality Profiler – gewährleistet Prof. Dr. Landes höchste
                    Professionalität und Qualität in Beratung, Training und Coaching.
                  </p>

                  <p className="text-lg leading-relaxed">
                    Mit ihrer Expertise gestaltet sie Kultur im Wandel: modern, nachhaltig und wirkungsvoll. Als Spezialistin
                    für Modern Leadership, New Work und organisationalen Wandel verbindet sie bewährte wissenschaftliche
                    Erkenntnisse mit langjähriger praktischer Erfahrung – und schafft so echten Mehrwert für Menschen und
                    Organisationen. Sie verfügt über umfassende Führungserfahrung in der Wirtschaft und war mehrere Jahre
                    Dekanin einer Fakultät für Wirtschaftspsychologie.
                  </p>

                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <h4 className="text-xl font-bold text-gray-900 mb-6">Kompetenzen</h4>

                    <div className="space-y-4">
                      <CompetenceAccordion title="Motivation, Persönlichkeit & Führung">
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2">
                            <span className="text-teal-600 mt-1">•</span>
                            <span>
                              <strong>Motivation & Persönlichkeitsentwicklung:</strong> Förderung individueller Potenziale und
                              intrinsischer Motivation.
                            </span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-teal-600 mt-1">•</span>
                            <span>
                              <strong>Führung & Selbstführung:</strong> Entwicklung authentischer, reflektierter und resilienter
                              Führungspersönlichkeiten.
                            </span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-teal-600 mt-1">•</span>
                            <span>
                              <strong>Psychologie der Veränderung:</strong> Begleitung individueller und organisationaler
                              Transformationsprozesse mit psychologischem Tiefgang.
                            </span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-teal-600 mt-1">•</span>
                            <span>
                              <strong>Emotionale Intelligenz & Kommunikation:</strong> Aufbau wirksamer Beziehungs- und
                              Kommunikationskompetenzen in Führung und Team.
                            </span>
                          </li>
                        </ul>
                      </CompetenceAccordion>

                      <CompetenceAccordion title="Change, Innovation & Transformation" bgClass="bg-gray-50">
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2">
                            <span className="text-teal-600 mt-1">•</span>
                            <span>
                              <strong>Change Management:</strong> Gestaltung nachhaltiger Veränderungsprozesse unter
                              Berücksichtigung psychologischer Dynamiken.
                            </span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-teal-600 mt-1">•</span>
                            <span>
                              <strong>Innovationskultur & Kreativität:</strong> Förderung von Neugier, Experimentierfreude und
                              kreativer Teamprozesse.
                            </span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-teal-600 mt-1">•</span>
                            <span>
                              <strong>Agiles Management & New Work:</strong> Einführung agiler Prinzipien für mehr
                              Flexibilität, Sinnorientierung und Selbstorganisation.
                            </span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-teal-600 mt-1">•</span>
                            <span>
                              <strong>Digitale Transformation & KI:</strong> Entwicklung menschenzentrierter Ansätze an der
                              Schnittstelle von Technologie, Kultur und Führung.
                            </span>
                          </li>
                        </ul>
                      </CompetenceAccordion>

                      <CompetenceAccordion title="Coaching, Kultur & Organisationsentwicklung">
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2">
                            <span className="text-teal-600 mt-1">•</span>
                            <span>
                              <strong>Systemisches Coaching & Teamentwicklung:</strong> Stärkung von Zusammenarbeit, Vertrauen
                              und psychologischer Sicherheit.
                            </span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-teal-600 mt-1">•</span>
                            <span>
                              <strong>Organisationskultur & Wertearbeit:</strong> Aufbau zukunftsfähiger Unternehmenskulturen
                              mit Fokus auf Sinn, Haltung und Verantwortung.
                            </span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-teal-600 mt-1">•</span>
                            <span>
                              <strong>Leadership Development & Learning Journeys:</strong> Gestaltung nachhaltiger
                              Lernarchitekturen für Führungskräfte und Teams.
                            </span>
                          </li>
                        </ul>
                      </CompetenceAccordion>
                    </div>

                    <p className="mt-6 text-lg leading-relaxed italic"></p>
                  </div>
                </div>
              </AccordionItem>

              <AccordionItem
                title="Prof. Dr. Eberhard Steiner"
                subtitle="Wirtschaftswissenschaftler, Dr. rer. pol. (TU Freiberg), Dipl.-Kfm. (Univ.), Dipl.-Betriebswirt (FH), Experte für Strategie, Digitalisierung und Innovation"
              >
                <div className="space-y-6 text-gray-700">
                  <p className="text-lg leading-relaxed">
                    Unternehmen sind heute besonders gefordert, Innovationskraft, agile Strukturen und eine zukunftsweisende
                    Strategie zu entwickeln. Prof. Dr. Eberhard Steiner vereint tiefgreifendes Wissen in den Bereichen
                    Management und Strategie mit umfassender Erfahrung im Innovationsmanagement und der Anwendung künstlicher
                    Intelligenz, um Ihr Unternehmen erfolgreich durch den Wandel zu führen.
                  </p>

                  <p className="text-lg leading-relaxed">
                    Mit seinem fundierten akademischen Hintergrund – Dr. rer. pol. (Motivations- & Anreizsysteme) der TU Freiberg,
                    Dipl.-Kfm. (Univ.) mit Nebenfach Wirtschaftspsychologie der LMU München und Dipl.-Betriebswirt (FH) der
                    Hochschule München – bietet Prof. Dr. Eberhard Steiner eine Expertise, die wissenschaftliche Erkenntnisse
                    mit praktischer Anwendbarkeit verbindet.
                  </p>

                  <p className="text-lg leading-relaxed">
                    Dr. Eberhard Steiner verfügt über langjährige Führungserfahrung, unter anderem als Vizepräsident für
                    Lehre der Hochschule für angewandtes Management (2007–2010) und seit 2010 als Geschäftsführer im UVM-Institut.
                    Dies unterstreicht seine Kompetenz in der Gestaltung und Steuerung komplexer Organisationen.
                  </p>

                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Kompetenzen:</h4>

                    <div className="space-y-4 mt-6">
                      <CompetenceAccordion title="KI & Kreativität, Management & Strategie">
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2">
                            <span className="text-teal-600 mt-1">•</span>
                            <span>
                              <strong>Change Management:</strong> Begleitung und Gestaltung erfolgreicher Transformationsprozesse.
                            </span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-teal-600 mt-1">•</span>
                            <span>
                              <strong>Innovationsmanagement:</strong> Entwicklung und Implementierung zukunftsweisender Innovationsstrategien.
                            </span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-teal-600 mt-1">•</span>
                            <span>
                              <strong>Agiles Management:</strong> Einführung agiler Methoden für mehr Flexibilität und Effizienz.
                            </span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-teal-600 mt-1">•</span>
                            <span>
                              <strong>Digitalisierung & Strategieentwicklung:</strong> Maßgeschneiderte Strategien für die digitale Transformation und den Einsatz von KI.
                            </span>
                          </li>
                        </ul>
                      </CompetenceAccordion>

                      <CompetenceAccordion title="Führung & Organisation" bgClass="bg-gray-50">
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2">
                            <span className="text-teal-600 mt-1">•</span>
                            <span>
                              <strong>Führung:</strong> Entwicklung starker Führungspersönlichkeiten und effektiver Führungsstrukturen.
                            </span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-teal-600 mt-1">•</span>
                            <span>
                              <strong>Teamentwicklung & Organizational Behaviour:</strong> Stärkung der Teamdynamik und Optimierung des organisationalen Verhaltens.
                            </span>
                          </li>
                        </ul>
                      </CompetenceAccordion>

                      <CompetenceAccordion title="Betriebswirtschaftliche Steuerung">
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2">
                            <span className="text-teal-600 mt-1">•</span>
                            <span>
                              <strong>Controlling, Finanzmanagement, Rechnungswesen:</strong> Fundiertes Wissen für eine solide betriebswirtschaftliche Steuerung.
                            </span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-teal-600 mt-1">•</span>
                            <span>
                              <strong>BWL für Nicht-BWLer/innen:</strong> Vermittlung komplexer betriebswirtschaftlicher Zusammenhänge verständlich und praxisnah.
                            </span>
                          </li>
                        </ul>
                      </CompetenceAccordion>
                    </div>
                  </div>
                </div>
              </AccordionItem>
            </div>
          </div>
        </section>

        <section id="werte" className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-4 mb-12">
              <div className="p-3 bg-teal-600 rounded-lg">
                <Target size={32} className="text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Werte und Beratungsansatz</h2>
            </div>

            <div className="space-y-8">
              <div className="bg-gradient-to-r from-teal-50 to-white p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Unsere Werte</h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Wir arbeiten praxisnah und wissenschaftlich fundiert. Darüber hinaus leiten uns Werte, die in
                  Veränderungsphasen Orientierung geben und Zusammenarbeit verlässlich machen.
                </p>
                <ul className="space-y-6 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-teal-600 font-bold mt-1 text-xl">1)</span>
                    <div>
                      <h4 className="font-bold text-lg mb-2">Integrität und Verantwortung</h4>
                      <p className="leading-relaxed">
                        Wir sagen klar, was wir wissen, was wir annehmen und wo Grenzen liegen. Entscheidungen sollen
                        nachvollziehbar, fair und verantwortungsbewusst sein.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-teal-600 font-bold mt-1 text-xl">2)</span>
                    <div>
                      <h4 className="font-bold text-lg mb-2">Klarheit statt Aktionismus</h4>
                      <p className="leading-relaxed">
                        Disruption erzeugt Druck. Wir schaffen zuerst Orientierung: Was ist wirklich das Problem,
                        was ist Priorität, was ist „nice to have".
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-teal-600 font-bold mt-1 text-xl">3)</span>
                    <div>
                      <h4 className="font-bold text-lg mb-2">Praxisbezug und wissenschaftliche Fundierung</h4>
                      <p className="leading-relaxed">
                        Wir bieten praxiserprobte Konzepte und Methoden und vermitteln Handlungskompetenz - immer auf
                        der Basis seriöser wissenschaftlicher Methoden.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-teal-600 font-bold mt-1 text-xl">4)</span>
                    <div>
                      <h4 className="font-bold text-lg mb-2">Partnerschaft auf Augenhöhe</h4>
                      <p className="leading-relaxed">
                        Wir arbeiten nicht „am Unternehmen vorbei", sondern mit den relevanten Rollen gemeinsam.
                        Gute Lösungen müssen in den Alltag passen, sonst bleiben sie Papier.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-teal-600 font-bold mt-1 text-xl">5)</span>
                    <div>
                      <h4 className="font-bold text-lg mb-2">Respekt und psychologische Sicherheit</h4>
                      <p className="leading-relaxed">
                        Leistung entsteht dort, wo Menschen offen sprechen können, Fehler adressiert werden dürfen und
                        Führung Orientierung gibt. Das ist eine Kulturfrage, keine Rhetorik.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Unser Beratungsansatz</h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Disruption wirkt selten nur an einer Stelle. Neue Technologien, Fachkräftemangel, Kulturwandel oder
                  Nachhaltigkeitsanforderungen verändern Kompetenzen, Zusammenarbeit und Entscheidungen gleichzeitig.
                  Deshalb betrachten wir Organisationen als integriertes System, nicht als Sammlung einzelner Initiativen.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Unser Ansatz verbindet vier Dimensionen zu einem synchronisierten Ganzen: Kompetenzen, Kultur,
                  Verhaltensgrundsätze und Unternehmensstrategie. Damit werden Maßnahmen anschlussfähig: Strategie wird
                  umsetzbar, Führung wird konsistent, Lernen wird zielgerichtet und Kultur wird gestaltbar.
                </p>
              </div>
            </div>
          </div>
        </section>

        <NetworkPartnersSection />

        <ReferencesSection />

        <BooksSection />
      </main>
      <Footer />
    </div>
  );
}
