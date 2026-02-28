import { Phone, Globe, Mail, Quote } from 'lucide-react';

const FounderSection = () => {
  return (
    <section id="founder" className="py-16 sm:py-24 bg-gradient-to-b from-[#0D0221] to-[#2D0A4E]">
      <div className="section-padding max-w-6xl mx-auto">
        {/* Quote */}
        <div className="text-center mb-12 animate-on-scroll">
          <Quote size={48} className="text-[#9D4EDD] mx-auto mb-4" />
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-white italic">
            "Why Me? Why Now?"
          </h2>
        </div>

        {/* Draiven Memorial */}
        <div className="mb-12 animate-on-scroll">
          <div className="card-dark p-8 max-w-md mx-auto text-center">
            <img
              src="/images/draiven.jpg"
              alt="Draiven - In loving memory"
              className="w-48 h-48 rounded-full mx-auto mb-6 object-cover border-4 border-[#9D4EDD]/30"
            />
            <h3 className="font-display font-bold text-xl text-white mb-2">
              In Loving Memory of Draiven
            </h3>
            <p className="text-[#C77DFF] text-sm">
              2004 - 2023
            </p>
            <p className="text-white/60 text-sm mt-4 italic">
              "You are the reason we fight."
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Story */}
          <div className="animate-on-scroll">
            <div className="card-dark p-8">
              <p className="text-white/80 text-base leading-relaxed mb-6">
                I never imagined leading a cause like this, but after losing my 19-year-old cousin{' '}
                <span className="text-[#E0AAFF] font-semibold">Draiven</span> to a drug overdose in October 2023—and having already lost other family members to opioids—I found myself asking,
              </p>

              <p className="font-display font-bold text-xl text-[#E0AAFF] italic text-center my-8 px-4">
                "Why me? Why now?"
              </p>

              <p className="text-white/80 text-base leading-relaxed mb-6">
                Instead of being paralyzed by those questions, I decided to take action. It's staggering that{' '}
                <span className="text-white font-semibold">two-thirds of overdose deaths happen with bystanders nearby</span>—people who could save a life if they only knew how.
              </p>

              <p className="text-white/80 text-base leading-relaxed mb-6">
                That's why I founded <span className="text-[#E0AAFF] font-semibold">"Hope Resuscitated"</span>—to ensure teens and young adults have access to Naloxone and the knowledge to use it.
              </p>

              <p className="text-white/80 text-base leading-relaxed">
                We can't save everyone, but if we can save even one life, it's worth it.
              </p>
            </div>
          </div>

          {/* Memorial Collage - ACTUAL */}
          <div className="animate-on-scroll" style={{ animationDelay: '0.1s' }}>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#9D4EDD]/20 to-[#E0AAFF]/10 rounded-[24px] blur-xl" />
              <img
                src="/images/memorial_collage.jpg"
                alt="Memorial collage of loved ones lost to overdose"
                className="relative w-full rounded-[18px] shadow-2xl"
              />
              <p className="text-center text-white/50 text-sm mt-4">
                In memory of those we've lost
              </p>
            </div>
          </div>
        </div>

        {/* Founder Card */}
        <div className="mt-16 animate-on-scroll" style={{ animationDelay: '0.2s' }}>
          <div className="card-dark p-8 max-w-2xl mx-auto">
            <div className="flex flex-col sm:flex-row items-center gap-6">
              {/* Photo - ACTUAL HEADSHOT */}
              <div className="relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-[#9D4EDD] to-[#E0AAFF] rounded-full opacity-50 blur-md" />
                <img
                  src="/images/leila_headshot.png"
                  alt="Leila Ramos"
                  className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover border-4 border-[#9D4EDD]/30"
                />
              </div>

              {/* Info */}
              <div className="text-center sm:text-left flex-1">
                <h3 className="font-display font-bold text-2xl text-white mb-1">
                  Leila Ramos
                </h3>
                <p className="text-[#C77DFF] text-sm mb-4">Founder</p>

                <div className="space-y-2">
                  <a
                    href="tel:225-286-1608"
                    className="flex items-center justify-center sm:justify-start gap-2 text-white/70 hover:text-white transition-colors text-sm"
                  >
                    <Phone size={16} className="text-[#9D4EDD]" />
                    225-286-1608
                  </a>
                  <a
                    href="mailto:Hoperesuscitatedteam@gmail.com"
                    className="flex items-center justify-center sm:justify-start gap-2 text-white/70 hover:text-white transition-colors text-sm"
                  >
                    <Mail size={16} className="text-[#9D4EDD]" />
                    Hoperesuscitatedteam@gmail.com
                  </a>
                  <a
                    href="https://www.hope-resuscitated.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center sm:justify-start gap-2 text-white/70 hover:text-white transition-colors text-sm"
                  >
                    <Globe size={16} className="text-[#9D4EDD]" />
                    www.hoperesuscitated.org
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
