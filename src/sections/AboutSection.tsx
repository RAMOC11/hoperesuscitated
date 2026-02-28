import { CheckCircle } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-16 sm:py-24 bg-gradient-to-b from-[#2D0A4E] to-[#0D0221]">
      <div className="section-padding max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-on-scroll">
            <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-white mb-8">
              About <span className="text-gradient">Us</span>
            </h2>

            <div className="space-y-6">
              {/* Who We Are */}
              <div className="card-dark p-6">
                <h3 className="font-display font-bold text-lg text-[#E0AAFF] mb-3">
                  Who We Are
                </h3>
                <p className="text-white/80 text-sm leading-relaxed">
                  <span className="text-[#9D4EDD] font-semibold">Hope Resuscitated</span> is a nonprofit organization dedicated to preventing overdose deaths by expanding access to Narcan, offering life-saving education, and dismantling the stigma around addiction. We focus on reaching teens, young adults, and underserved rural communities—populations often left out of traditional harm reduction efforts.
                </p>
              </div>

              {/* Our Story */}
              <div className="card-dark p-6">
                <h3 className="font-display font-bold text-lg text-[#E0AAFF] mb-3">
                  Our Story
                </h3>
                <p className="text-white/80 text-sm leading-relaxed">
                  Founded by Leila Ramos, a high school senior and future pre-med student, Hope Resuscitated was created from a place of personal purpose and a commitment to public health. What started as one student's drive has quickly grown into a statewide initiative built on compassion, urgency, and impact.
                </p>
              </div>

              {/* What We Do */}
              <div className="card-dark p-6">
                <h3 className="font-display font-bold text-lg text-[#E0AAFF] mb-3">
                  What We Do
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3 text-white/80 text-sm">
                    <CheckCircle size={18} className="text-[#9D4EDD] mt-0.5 flex-shrink-0" />
                    <span><span className="text-white font-semibold">Distribute Free Narcan</span> via libraries, schools, fire stations, and direct website requests</span>
                  </li>
                  <li className="flex items-start gap-3 text-white/80 text-sm">
                    <CheckCircle size={18} className="text-[#9D4EDD] mt-0.5 flex-shrink-0" />
                    <span><span className="text-white font-semibold">Host Educational Events</span> with overdose response training and stigma-free conversations</span>
                  </li>
                  <li className="flex items-start gap-3 text-white/80 text-sm">
                    <CheckCircle size={18} className="text-[#9D4EDD] mt-0.5 flex-shrink-0" />
                    <span><span className="text-white font-semibold">Partner Locally</span> with public institutions, community orgs, and harm reduction allies</span>
                  </li>
                </ul>
              </div>

              {/* How We're Different */}
              <div className="card-dark p-6">
                <h3 className="font-display font-bold text-lg text-[#E0AAFF] mb-3">
                  How We're Different
                </h3>
                <p className="text-white/80 text-sm leading-relaxed">
                  We remove barriers—<span className="text-white font-semibold">no age limits, no cost, no judgment.</span> Unlike traditional programs, our focus is tailored for young people and communities that others overlook.
                </p>
              </div>

              {/* Powered by Passion */}
              <div className="card-dark p-6">
                <h3 className="font-display font-bold text-lg text-[#E0AAFF] mb-3">
                  Powered by Passion
                </h3>
                <p className="text-white/80 text-sm leading-relaxed">
                  Run entirely by volunteers and supported by educators, public health professionals, and local leaders, our team is committed to saving lives and creating lasting change.
                </p>
              </div>
            </div>
          </div>

          {/* Image - Leila with Narcan Box */}
          <div className="animate-on-scroll flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#9D4EDD] to-[#E0AAFF] rounded-[24px] opacity-30 blur-xl" />
              <img
                src="/images/leila_narcan.jpg"
                alt="Leila Ramos with Narcan distribution box"
                className="relative w-full max-w-md rounded-[18px] shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
