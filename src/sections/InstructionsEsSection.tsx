import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Search, UserRound, Droplets, Phone } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface InstructionsEsSectionProps {
  className?: string;
}

const InstructionsEsSection = ({ className = '' }: InstructionsEsSectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const paperRef = useRef<HTMLDivElement>(null);
  const stripRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const contentRefs = useRef<HTMLDivElement[]>([]);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '+=130%',
          pin: true,
          scrub: 0.6,
        },
      });

      // ENTRANCE (0% - 30%)
      scrollTl.fromTo(
        paperRef.current,
        { x: '70vw', rotateZ: 2, opacity: 0 },
        { x: 0, rotateZ: 0, opacity: 1, ease: 'power2.out' },
        0
      );

      scrollTl.fromTo(
        contentRefs.current.slice(0, 5),
        { x: 30, opacity: 0 },
        { x: 0, opacity: 1, stagger: 0.07, ease: 'power2.out' },
        0.14
      );

      scrollTl.fromTo(
        stripRef.current,
        { x: '-40vw', opacity: 0 },
        { x: 0, opacity: 1, ease: 'power2.out' },
        0.12
      );

      // EXIT (70% - 100%)
      scrollTl.fromTo(
        paperRef.current,
        { x: 0, y: 0, rotateZ: 0, opacity: 1 },
        { x: '18vw', y: '10vh', rotateZ: 3, opacity: 0, ease: 'power2.in' },
        0.7
      );

      scrollTl.fromTo(
        stripRef.current,
        { x: 0, opacity: 1 },
        { x: '-18vw', opacity: 0, ease: 'power2.in' },
        0.7
      );

      scrollTl.fromTo(
        bgRef.current,
        { scale: 1, opacity: 1 },
        { scale: 1.06, opacity: 0.6, ease: 'power2.in' },
        0.7
      );
    }, section);

    return () => ctx.revert();
  }, []);

  const steps = [
    {
      number: '1',
      label: 'COMPROBAR',
      icon: Search,
      text: 'Verifique si hay respiración lenta o falta de respuesta.',
    },
    {
      number: '2',
      label: 'RECOSTAR',
      icon: UserRound,
      text: 'Acueste a la persona e inclínele la cabeza hacia arriba.',
    },
    {
      number: '3',
      label: 'ATOMIZAR',
      icon: Droplets,
      text: 'Inserte el dispositivo en cualquiera de las fosas nasales y presione el émbolo con firmeza.',
    },
    {
      number: '4',
      label: 'PERMANECER',
      icon: Phone,
      text: 'Llame al 911 de inmediato y continúe administrando las dosis según sea necesario.',
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="instructions-es"
      className={`section-pinned ${className}`}
    >
      {/* Background Image */}
      <div
        ref={bgRef}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="/images/instructions_es_bg.jpg"
          alt="Cómo Usar Narcan"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-[#0B0C0F]/70 via-transparent to-[#0B0C0F]/60" />
      </div>

      {/* Left Portrait Strip - Hidden on mobile */}
      <div
        ref={stripRef}
        className="hidden md:block absolute left-[6vw] top-[10vh] w-[26vw] h-[80vh] overflow-hidden rounded-[18px]"
        style={{ opacity: 0 }}
      >
        <img
          src="/images/instructions_es_bg.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C0F]/40 to-transparent" />
        
        {/* Emergency call overlay */}
        <div className="absolute bottom-8 left-8 right-8">
          <a
            href="tel:911"
            className="flex items-center justify-center gap-2 bg-[#B8FF3D] text-[#0B0C0F] px-6 py-4 rounded-full font-display font-bold text-xl hover:bg-[#a8ef2d] transition-colors"
          >
            <Phone size={24} />
            Llamar 911
          </a>
        </div>
      </div>

      {/* Right Paper Card */}
      <div
        ref={paperRef}
        className="paper-card absolute right-[6vw] top-[10vh] w-[88vw] md:w-[56vw] h-[80vh] p-8 md:p-10 overflow-y-auto"
        style={{ opacity: 0 }}
      >
        <div
          ref={(el) => { if (el) contentRefs.current[0] = el; }}
          className="mb-8"
        >
          <span className="micro-label text-[#0B0C0F]/60 block mb-2">
            Instrucciones de Emergencia
          </span>
          <h2 className="font-display font-black text-[#0B0C0F] uppercase text-xl md:text-2xl lg:text-3xl leading-tight">
            Qué Hacer en Caso de una Presunta Emergencia por Opioides
          </h2>
        </div>

        <div className="space-y-4">
          {steps.map((step, index) => (
            <div
              key={index}
              ref={(el) => { if (el) contentRefs.current[index + 1] = el; }}
              className="flex gap-4 items-start p-4 rounded-xl bg-[#0B0C0F]/5 hover:bg-[#B8FF3D]/10 transition-colors duration-300"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#B8FF3D] flex items-center justify-center">
                <step.icon size={22} className="text-[#0B0C0F]" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-display font-black text-lg text-[#B8FF3D]">
                    {step.number}.
                  </span>
                  <span className="font-display font-bold text-lg text-[#0B0C0F] uppercase">
                    {step.label}
                  </span>
                </div>
                <p className="text-[#0B0C0F]/80 text-sm leading-relaxed">
                  {step.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <div
          ref={(el) => { if (el) contentRefs.current[5] = el; }}
          className="mt-6 pt-4 border-t border-[#0B0C0F]/10"
        >
          <p className="text-[#0B0C0F]/50 text-xs leading-relaxed">
            Úselo según lo indicado. Consulte la etiqueta completa de Datos sobre el medicamento. 
            1 dispositivo de atomización nasal contiene 1 dosis. Es seguro seguir administrando 
            las dosis según sea necesario. © 2023 Emergent Devices Inc.
          </p>
        </div>
      </div>
    </section>
  );
};

export default InstructionsEsSection;
