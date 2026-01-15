import { useState, useEffect, useRef } from 'react';
import { ArrowDown, Cpu, Users, Building2, Shield } from 'lucide-react';

type SegmentId = 'culture' | 'competences' | 'conduct' | 'strategy';

type SegmentConfig = {
  id: SegmentId;
  title: string;
  titleLines?: string[];
  subtitle: string;
  sloganLines: [string, string];
  positionClass: string;
  bgClass: string;
  roundedClass: string;
  originClass: string;
  subtitleClass?: string;
};

const SEGMENTS: SegmentConfig[] = [
  {
    id: 'culture',
    title: 'Culture',
    subtitle: 'Kultur',
    sloganLines: ['Kultur legt die Basis', 'und prägt Verhalten.'],
    positionClass: 'top-0 left-0',
    bgClass: 'bg-gradient-to-br from-teal-400 to-teal-500',
    roundedClass: 'rounded-tl-full',
    originClass: 'origin-bottom-right',
  },
  {
    id: 'competences',
    title: 'Competences',
    subtitle: 'Kompetenzen',
    sloganLines: ['Kompetenzen machen Können', 'wirksam und messbar.'],
    positionClass: 'top-0 right-0',
    bgClass: 'bg-gradient-to-bl from-cyan-400 to-teal-400',
    roundedClass: 'rounded-tr-full',
    originClass: 'origin-bottom-left',
  },
  {
    id: 'conduct',
    title: 'Code of Conduct',
    titleLines: ['Code of', 'Conduct'],
    subtitle: 'Verhaltensgrundsätze',
    sloganLines: ['Grundsätze schaffen Klarheit', 'und schützen Vertrauen.'],
    positionClass: 'bottom-0 left-0',
    bgClass: 'bg-gradient-to-tr from-rose-500 to-pink-400',
    roundedClass: 'rounded-bl-full',
    originClass: 'origin-top-right',
    subtitleClass: 'break-words hyphens-auto',
  },
  {
    id: 'strategy',
    title: 'Corporate Strategy',
    titleLines: ['Corporate', 'Strategy'],
    subtitle: 'Unternehmensstrategie',
    sloganLines: ['Strategie gibt Richtung', 'und fokussiert Ressourcen.'],
    positionClass: 'bottom-0 right-0',
    bgClass: 'bg-gradient-to-tl from-amber-400 to-amber-300',
    roundedClass: 'rounded-br-full',
    originClass: 'origin-top-left',
    subtitleClass: 'break-words hyphens-auto',
  },
];

export default function HeroSection() {
  const [active, setActive] = useState<SegmentId | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const diagramRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!diagramRef.current) return;

      const rect = diagramRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const elementTop = rect.top;
      const elementHeight = rect.height;

      const startTrigger = windowHeight * 0.8;
      const endTrigger = windowHeight * 0.4;

      if (elementTop < startTrigger && elementTop + elementHeight > 0) {
        const progress = Math.min(Math.max((startTrigger - elementTop) / (startTrigger - endTrigger), 0), 1);
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getSegmentTransform = (segmentId: SegmentId) => {
    const maxDistance = 200;
    const distance = maxDistance * (1 - scrollProgress);
    const rotation = 45 * (1 - scrollProgress);

    const offsets = {
      culture: { x: -1, y: -1, rotate: -1 },
      competences: { x: 1, y: -1, rotate: 1 },
      conduct: { x: -1, y: 1, rotate: 1 },
      strategy: { x: 1, y: 1, rotate: -1 },
    };

    const offset = offsets[segmentId];
    const x = offset.x * distance;
    const y = offset.y * distance;
    const rotate = offset.rotate * rotation;

    return `translate(${x}px, ${y}px) rotate(${rotate}deg)`;
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 via-white to-teal-50/30 pt-32 overflow-x-hidden relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(20,184,166,0.1),transparent_50%)] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(6,182,212,0.08),transparent_50%)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6 animate-fade-in-up">
            Zukunftsfähigkeit ist kein Zufall.
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600 mt-2">Sie ist das Ergebnis eines Systems.</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-100">
            Das 4C-Modell ist unser Framework, um die vier entscheidenden Dimensionen Ihres
            Unternehmenserfolgs systematisch zu verbinden: Kompetenzen, Kultur,
            Verhaltensprinzipien und Strategie.
          </p>

          <div className="mb-32">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
              Der größte Treiber des Fortschritts ist die Disruption.
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              <div className="p-6 rounded-xl bg-gradient-to-br from-teal-50 to-teal-100 border border-teal-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-fade-in-up delay-200">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-teal-600 to-teal-700 rounded-lg shadow-md group-hover:scale-110 transition-transform">
                    <Cpu className="text-white" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-teal-900 text-lg mb-2">Digitale Disruption & KI</h3>
                    <p className="text-teal-700 text-sm leading-relaxed">
                      KI ändert alles - wie stellen Sie sicher, dass Ihr Geschäftsmodell zukunftsfähig
                      bleibt?
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-xl bg-gradient-to-br from-cyan-50 to-cyan-100 border border-cyan-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-fade-in-up delay-300">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-cyan-600 to-cyan-700 rounded-lg shadow-md">
                    <Users className="text-white" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-cyan-900 text-lg mb-2">
                      Future Skills & Fachkräftemangel
                    </h3>
                    <p className="text-cyan-700 text-sm leading-relaxed">
                      Die benötigten Kernkompetenzen verändern sich rasant. Wie bauen Sie die
                      Fähigkeiten von morgen auf, statt einen leergefegten Markt abzusuchen?
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-xl bg-gradient-to-br from-rose-50 to-pink-100 border border-rose-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-fade-in-up delay-400">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-rose-600 to-pink-600 rounded-lg shadow-md">
                    <Building2 className="text-white" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-rose-900 text-lg mb-2">
                      Kulturwandel & New Work
                    </h3>
                    <p className="text-rose-700 text-sm leading-relaxed">
                      Flexibilität und Selbstbestimmung dominieren die neue Arbeitswelt. Wie schaffen
                      Sie eine Kultur, die Top-Talente anzieht, bindet und in hybriden Arbeitswelten
                      leistungsfähig bleibt?
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-xl bg-gradient-to-br from-amber-50 to-amber-100 border border-amber-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-fade-in-up delay-500">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-amber-600 to-amber-700 rounded-lg shadow-md">
                    <Shield className="text-white" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-amber-900 text-lg mb-2">
                      Krisenfestigkeit & tiefgreifender Wandel
                    </h3>
                    <p className="text-amber-700 text-sm leading-relaxed">
                      Wie führen Sie Ihr Unternehmen sicher durch unruhige Zeiten?
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center mb-16">
            <div ref={diagramRef} className="relative w-80 h-80 md:w-[448px] md:h-[448px] lg:w-[560px] lg:h-[560px]">
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className="absolute inset-0 w-full h-full rounded-full bg-white shadow-2xl ring-1 ring-gray-100 transition-opacity duration-700"
                  style={{ opacity: scrollProgress * 0.5 + 0.5 }}
                  aria-hidden="true"
                />

                <div className="w-full h-full relative isolate" onMouseLeave={() => setActive(null)}>
                  {SEGMENTS.map((seg) => {
                    const isActive = active === seg.id;
                    const isDimmed = active !== null && active !== seg.id;

                    return (
                      <button
                        key={seg.id}
                        type="button"
                        aria-label={`${seg.title} – ${seg.subtitle}`}
                        onMouseEnter={() => setActive(seg.id)}
                        onMouseLeave={() => setActive(null)}
                        onFocus={() => setActive(seg.id)}
                        onBlur={() => setActive(null)}
                        style={{
                          transform: getSegmentTransform(seg.id),
                          opacity: 0.3 + (scrollProgress * 0.7),
                        }}
                        className={
                          [
                            'absolute',
                            seg.positionClass,
                            'w-1/2 h-1/2',
                            seg.bgClass,
                            seg.roundedClass,
                            'transform-gpu',
                            seg.originClass,
                            'flex items-center justify-center',
                            'cursor-pointer',
                            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60',
                            'transition-all duration-700 ease-out',
                            'motion-reduce:transition-none motion-reduce:transform-none',
                            isActive
                              ? 'z-20 brightness-110 saturate-110'
                              : isDimmed
                                ? 'z-10 opacity-60'
                                : 'z-10',
                          ].join(' ')
                        }
                      >
                        {/* Gegenläufig skalieren: Segment wächst, Text bleibt gleich groß */}
                        <div
                          className={
                            [
                              'text-center text-white drop-shadow-md',
                              'transition-transform duration-200 ease-out',
                              isActive ? 'scale-[0.77] md:scale-[0.71] lg:scale-[0.69]' : 'scale-100',
                            ].join(' ')
                          }
                        >
                          <div className="w-[82%] max-w-[9.5rem] md:max-w-[12rem] lg:max-w-[14rem] mx-auto px-2 md:px-3">
                            <div className="font-semibold text-xs md:text-sm lg:text-base leading-tight">
                              {seg.titleLines ? (
                                seg.titleLines.map((line) => (
                                  <span key={line} className="block">
                                    {line}
                                  </span>
                                ))
                              ) : (
                                seg.title
                              )}
                            </div>

                            <div
                              className={[
                                'text-white/90 text-[10px] md:text-xs mt-0.5 leading-tight',
                                seg.subtitleClass ?? 'break-words',
                              ].join(' ')}
                            >
                              {seg.subtitle}
                            </div>

                            <div
                              className={
                                [
                                  'mt-2',
                                  'text-[11px] md:text-xs lg:text-sm',
                                  'leading-snug',
                                  'text-white/95',
                                  'transition-all duration-200 ease-out',
                                  isActive
                                    ? 'opacity-100 translate-y-0 max-h-24'
                                    : 'opacity-0 translate-y-1 max-h-0 overflow-hidden',
                                ].join(' ')
                              }
                            >
                              <span className="block">{seg.sloganLines[0]}</span>
                              <span className="block">{seg.sloganLines[1]}</span>
                            </div>
                          </div>
                        </div>
                      </button>
                    );
                  })}

                  <div
                    className="absolute inset-0 flex items-center justify-center pointer-events-none z-30 transition-all duration-700"
                    style={{
                      opacity: scrollProgress,
                      transform: `scale(${0.5 + (scrollProgress * 0.5)}) rotate(${360 * scrollProgress}deg)`,
                    }}
                  >
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-white rounded-full shadow-lg flex items-center justify-center">
                      <span className="text-gray-800 font-bold text-base md:text-xl">4C</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <a
            href="#modell"
            className="inline-flex items-center gap-2 mt-12 text-gray-500 hover:text-teal-600 transition-all duration-300 group animate-fade-in"
          >
            <span className="font-medium">Mehr erfahren</span>
            <ArrowDown size={20} className="animate-bounce group-hover:translate-y-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
