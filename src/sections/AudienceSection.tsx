import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Users, Home, GraduationCap, HeartHandshake } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface AudienceSectionProps {
  className?: string;
}

const AudienceSection = ({ className = '' }: AudienceSectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const paperRef = useRef<HTMLDivElement>(null);
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
        headlineRef.current,
        { x: '-40vw', opacity: 0 },
        { x: 0, opacity: 1, ease: 'power2.out' },
        0
      );

      scrollTl.fromTo(
        paperRef.current,
        { x: '60vw', rotateZ: 2, opacity: 0 },
        { x: 0, rotateZ: 0, opacity: 1, ease: 'power2.out' },
        0.08
      );

      scrollTl.fromTo(
        contentRefs.current,
        { y: 22, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.04, ease: 'power2.out' },
        0.18
      );

      // EXIT (70% - 100%)
      scrollTl.fromTo(
        headlineRef.current,
        { x: 0, opacity: 1 },
        { x: '-10vw', opacity: 0, ease: 'power2.in' },
        0.7
      );

      scrollTl.fromTo(
        paperRef.current,
        { x: 0, rotateZ: 0, opacity: 1 },
        { x: '16vw', rotateZ: 3, opacity: 0, ease: 'power2.in' },
        0.7
      );

      scrollTl.fromTo(
        bgRef.current,
        { scale: 1, opacity: 1 },
        { scale: 1.07, opacity: 0.6, ease: 'power2.in' },
        0.7
      );
    }, section);

    return () => ctx.revert();
  }, []);

  const audienceItems = [
    {
      icon: Users,
      text: 'Teens navigating peer pressure and crisis situations.',
    },
    {
      icon: Home,
      text: 'Families in rural areas with limited healthcare access.',
    },
    {
      icon: GraduationCap,
      text: 'Educators and community leaders ready to be equipped and empowered.',
    },
    {
      icon: HeartHandshake,
      text: 'Anyone who believes in harm reduction as a path to healing.',
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="audience"
      className={`section-pinned ${className}`}
    >
      {/* Background Image */}
      <div
        ref={bgRef}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="/images/audience_bg.jpg"
          alt="Who We're Reaching"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-[#0B0C0F]/80 via-[#0B0C0F]/40 to-transparent" />
      </div>

      {/* Left Headline */}
      <div
        ref={headlineRef}
        className="absolute left-[8vw] top-[20vh] w-[34vw] hidden md:block"
        style={{ opacity: 0 }}
      >
        <h2 className="font-display font-black text-[#F5F7FA] uppercase headline-section leading-[0.95]">
          Our Mission
          <br />
          <span className="text-[#B8FF3D]">in Action:</span>
        </h2>
      </div>

      {/* Right Paper Card */}
      <div
        ref={paperRef}
        className="paper-card absolute right-[6vw] top-[12vh] w-[88vw] md:w-[46vw] h-[76vh] p-8 md:p-10"
        style={{ opacity: 0 }}
      >
        <div
          ref={(el) => { if (el) contentRefs.current[0] = el; }}
          className="mb-8"
        >
          <h2 className="font-display font-black text-[#0B0C0F] uppercase text-3xl md:text-4xl leading-tight">
            Who We're
            <br />
            <span className="text-[#B8FF3D]" style={{ textShadow: '0 2px 10px rgba(184,255,61,0.3)' }}>
              Reaching
            </span>
          </h2>
        </div>

        <div className="space-y-5">
          {audienceItems.map((item, index) => (
            <div
              key={index}
              ref={(el) => { if (el) contentRefs.current[index + 1] = el; }}
              className="flex gap-4 items-start group"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#B8FF3D] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <item.icon size={18} className="text-[#0B0C0F]" />
              </div>
              <p className="text-[#0B0C0F]/80 text-sm leading-relaxed pt-2">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* Decorative element */}
        <div
          ref={(el) => { if (el) contentRefs.current[5] = el; }}
          className="mt-8 pt-6 border-t border-[#0B0C0F]/10"
        >
          <p className="text-[#0B0C0F]/60 text-xs italic">
            "If we can save even one life, it's worth it."
          </p>
        </div>
      </div>
    </section>
  );
};

export default AudienceSection;
