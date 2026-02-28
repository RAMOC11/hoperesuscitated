import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const HeroSection = () => {
  const logoRef = useRef<HTMLDivElement>(null);
  const taglineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Gentle floating animation for logo
    if (logoRef.current) {
      gsap.to(logoRef.current, {
        y: -10,
        duration: 3,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1,
      });
    }

    // Staggered tagline animation
    if (taglineRef.current) {
      const words = taglineRef.current.querySelectorAll('.tagline-word');
      gsap.fromTo(
        words,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          delay: 0.5,
        }
      );
    }
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden"
      style={{
        background: 'radial-gradient(ellipse at center, #2D0A4E 0%, #0D0221 50%, #050110 100%)',
      }}
    >
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Purple glow behind logo */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(157,78,221,0.4) 0%, rgba(157,78,221,0.1) 40%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      <div className="relative z-10 text-center px-6">
        {/* Logo */}
        <div ref={logoRef} className="mb-6">
          <div className="relative inline-block">
            {/* Outer glow ring */}
            <div 
              className="absolute inset-0 rounded-full"
              style={{
                background: 'radial-gradient(circle, rgba(157,78,221,0.6) 0%, transparent 70%)',
                transform: 'scale(1.3)',
                filter: 'blur(20px)',
              }}
            />
            <img
              src="/images/logo_clean.jpg"
              alt="Hope Resuscitated Logo"
              className="relative w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 rounded-full object-cover"
              style={{
                boxShadow: '0 0 60px rgba(157, 78, 221, 0.5), 0 0 100px rgba(224, 170, 255, 0.3)',
              }}
            />
          </div>
        </div>

        {/* Title */}
        <h1 className="font-display font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-wider mb-6">
          <span className="text-white">HOPE</span>
          <br />
          <span 
            className="font-display font-black"
            style={{
              background: 'linear-gradient(90deg, #9D4EDD 0%, #E0AAFF 50%, #C77DFF 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            RESUSCITATED
          </span>
        </h1>

        {/* Animated Tagline */}
        <div ref={taglineRef} className="flex flex-col items-center gap-1">
          <div className="flex items-center gap-2 sm:gap-4 flex-wrap justify-center">
            <span className="tagline-word font-display font-black text-xl sm:text-2xl md:text-3xl text-white tracking-wide">
              NO STIGMA
            </span>
            <span className="tagline-word text-[#9D4EDD] text-xl sm:text-2xl md:text-3xl">•</span>
            <span className="tagline-word font-display font-black text-xl sm:text-2xl md:text-3xl text-white tracking-wide">
              NO BARRIERS
            </span>
          </div>
          <span 
            className="tagline-word font-display font-black text-2xl sm:text-3xl md:text-4xl tracking-wide mt-1"
            style={{
              background: 'linear-gradient(90deg, #9D4EDD 0%, #E0AAFF 50%, #C77DFF 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            JUST HOPE
          </span>
        </div>
      </div>

      {/* CSS animations */}
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
            opacity: 0.4;
          }
          50% {
            transform: translateY(-20px) translateX(10px);
            opacity: 0.8;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
