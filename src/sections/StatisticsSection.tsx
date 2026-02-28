import { useEffect, useRef, useState } from 'react';
import { TrendingUp, Users, Globe, Heart } from 'lucide-react';

const StatisticsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    {
      icon: TrendingUp,
      number: 289,
      suffix: '+',
      label: 'Overdose deaths in East Baton Rouge (2023)',
    },
    {
      icon: Users,
      number: 2,
      suffix: ' out of 3',
      label: 'Overdoses happen with a bystander present',
    },
    {
      icon: Globe,
      number: 100000,
      suffix: '+',
      label: 'Annual U.S. overdose deaths',
    },
  ];

  return (
    <section ref={sectionRef} className="py-16 sm:py-24 bg-white">
      <div className="section-padding max-w-6xl mx-auto">
        {/* Statistics */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`text-center transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 0.15}s` }}
            >
              <div className="flex justify-center mb-4">
                <stat.icon size={40} className="text-[#9D4EDD]" />
              </div>
              <div className="font-display font-black text-4xl sm:text-5xl text-[#0D0221] mb-2">
                {stat.number.toLocaleString()}{stat.suffix}
              </div>
              <p className="text-[#0D0221]/60 text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Quote Banner */}
        <div
          className={`bg-gradient-banner rounded-[18px] p-8 sm:p-12 text-center transition-all duration-700 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <Heart size={48} className="text-white mx-auto mb-6" />
          <h3 className="font-display font-black text-3xl sm:text-4xl text-white mb-4">
            YOU can be the difference.
          </h3>
          <p className="text-white/80 text-base sm:text-lg max-w-2xl mx-auto">
            You don't need to be a doctor to save a life. With Narcan, you have the power to respond, reverse an overdose, and give someone another chance.
          </p>
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
