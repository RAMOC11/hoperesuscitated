import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Package, MapPin, Users, Truck } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface ImpactSectionProps {
  className?: string;
}

const ImpactSection = ({ className = '' }: ImpactSectionProps) => {
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
        bgRef.current,
        { scale: 1.08, opacity: 0.8 },
        { scale: 1, opacity: 1, ease: 'none' },
        0
      );

      scrollTl.fromTo(
        headlineRef.current,
        { x: '-50vw', opacity: 0 },
        { x: 0, opacity: 1, ease: 'power2.out' },
        0
      );

      scrollTl.fromTo(
        paperRef.current,
        { x: '60vw', rotateZ: 2, opacity: 0 },
        { x: 0, rotateZ: 0, opacity: 1, ease: 'power2.out' },
        0.06
      );

      scrollTl.fromTo(
        contentRefs.current,
        { y: 24, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.03, ease: 'power2.out' },
        0.18
      );

      // EXIT (70% - 100%)
      scrollTl.fromTo(
        headlineRef.current,
        { x: 0, opacity: 1 },
        { x: '-12vw', opacity: 0, ease: 'power2.in' },
        0.7
      );

      scrollTl.fromTo(
        paperRef.current,
        { x: 0, y: 0, rotateZ: 0, opacity: 1 },
        { x: '18vw', y: '8vh', rotateZ: 3, opacity: 0, ease: 'power2.in' },
        0.7
      );

      scrollTl.fromTo(
        bgRef.current,
        { scale: 1 },
        { scale: 1.06, ease: 'power2.in' },
        0.7
      );
    }, section);

    return () => ctx.revert();
  }, []);

  const impactItems = [
    {
      icon: Package,
      text: '40+ Narcan doses distributed in our first week at the West Feliciana Parish Library—our first distribution site and a powerful start.',
    },
    {
      icon: MapPin,
      text: 'More library locations coming soon as we expand access across Louisiana.',
    },
    {
      icon: Users,
      text: 'On-site outreach at high schools, health fairs, and local events.',
    },
    {
      icon: Truck,
      text: 'Website requests fulfilled across the region—shipped directly with no barriers and no cost.',
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="impact"
      className={`section-pinned ${className}`}
    >
      {/* Background Image */}
      <div
        ref={bgRef}
        className="absolute inset-0 w-full h-full"
        style={{ opacity: 0.8 }}
      >
        <img
          src="/images/impact_bg.jpg"
          alt="Making an Impact"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0C0F]/80 via-[#0B0C0F]/40 to-transparent" />
      </div>

      {/* Left Headline */}
      <div
        ref={headlineRef}
        className="absolute left-[8vw] top-[18vh] w-[40vw]"
        style={{ opacity: 0 }}
      >
        <h2 className="font-display font-black text-[#F5F7FA] uppercase headline-section leading-[0.95]">
          Where We're
          <br />
          Making an
          <br />
          <span className="text-[#B8FF3D]">Impact</span>
        </h2>
      </div>

      {/* Right Paper Card */}
      <div
        ref={paperRef}
        className="paper-card absolute right-[6vw] top-[12vh] w-[88vw] md:w-[44vw] h-[76vh] p-8 md:p-10 overflow-y-auto"
        style={{ opacity: 0 }}
      >
        <div
          ref={(el) => { if (el) contentRefs.current[0] = el; }}
          className="mb-6"
        >
          <span className="micro-label text-[#0B0C0F]/60 block mb-2">
            Our Mission in Action:
          </span>
          <h3 className="font-display font-bold text-2xl md:text-3xl text-[#0B0C0F]">
            Building a Network of Hope
          </h3>
        </div>

        <div className="space-y-5">
          {impactItems.map((item, index) => (
            <div
              key={index}
              ref={(el) => { if (el) contentRefs.current[index + 1] = el; }}
              className="flex gap-4 items-start"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#B8FF3D]/20 flex items-center justify-center">
                <item.icon size={20} className="text-[#0B0C0F]" />
              </div>
              <p className="text-[#0B0C0F]/80 text-sm leading-relaxed pt-2">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div
          ref={(el) => { if (el) contentRefs.current[5] = el; }}
          className="mt-8 pt-6 border-t border-[#0B0C0F]/10 grid grid-cols-2 gap-4"
        >
          <div>
            <div className="font-display font-black text-4xl text-[#B8FF3D]">
              40+
            </div>
            <div className="text-xs text-[#0B0C0F]/60 uppercase tracking-wider mt-1">
              Doses Distributed
            </div>
          </div>
          <div>
            <div className="font-display font-black text-4xl text-[#0B0C0F]">
              6+
            </div>
            <div className="text-xs text-[#0B0C0F]/60 uppercase tracking-wider mt-1">
              Parishes Served
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
