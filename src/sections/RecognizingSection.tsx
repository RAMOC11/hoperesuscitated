import { AlertTriangle, Phone, Shield, Heart } from 'lucide-react';

const RecognizingSection = () => {
  return (
    <section id="learn" className="py-16 sm:py-24 bg-[#0D0221]">
      <div className="section-padding max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-on-scroll">
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-white tracking-wider mb-4">
            RECOGNIZING AN OVERDOSE:
          </h2>
          <p className="text-[#C77DFF] text-sm sm:text-base max-w-2xl mx-auto">
            Learn the common signs of an opioid overdose, such as slowed breathing, unresponsiveness, and blue lips or nails.
          </p>
        </div>

        {/* Three Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Recognizing an Overdose */}
          <div className="animate-on-scroll">
            <div className="card-dark p-8 h-full flex flex-col">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-[#9D4EDD]/20 flex items-center justify-center">
                  <AlertTriangle size={32} className="text-[#E0AAFF]" />
                </div>
              </div>
              <h3 className="font-display font-bold text-xl text-white text-center mb-4">
                Recognizing an Overdose
              </h3>
              <p className="text-white/70 text-sm leading-relaxed text-center flex-1">
                Learn the common signs of an opioid overdose, such as slowed breathing, unresponsiveness, and blue lips or nails.
              </p>
            </div>
          </div>

          {/* How to Respond */}
          <div className="animate-on-scroll" style={{ animationDelay: '0.1s' }}>
            <div className="card-dark p-8 h-full flex flex-col">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-[#9D4EDD]/20 flex items-center justify-center">
                  <Phone size={32} className="text-[#E0AAFF]" />
                </div>
              </div>
              <h3 className="font-display font-bold text-xl text-white text-center mb-4">
                How to Respond
              </h3>
              <p className="text-white/70 text-sm leading-relaxed text-center flex-1">
                Discover what to do if you suspect someone is overdosing, including calling 911, administering Narcan, and performing rescue breathing if trained.
              </p>
            </div>
          </div>

          {/* Preventing Overdoses */}
          <div className="animate-on-scroll" style={{ animationDelay: '0.2s' }}>
            <div className="card-dark p-8 h-full flex flex-col">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-[#9D4EDD]/20 flex items-center justify-center">
                  <Shield size={32} className="text-[#E0AAFF]" />
                </div>
              </div>
              <h3 className="font-display font-bold text-xl text-white text-center mb-4">
                Preventing Overdoses
              </h3>
              <p className="text-white/70 text-sm leading-relaxed text-center flex-1">
                Educate yourself and others on reducing the risk of overdose through safe use practices, proper storage of medications, and carrying Narcan.
              </p>
            </div>
          </div>
        </div>

        {/* Donate Banner */}
        <div className="mt-16 animate-on-scroll">
          <div className="bg-gradient-banner rounded-[18px] p-8 text-center">
            <Heart size={48} className="text-white mx-auto mb-4" />
            <h3 className="font-display font-bold text-2xl text-white mb-4">
              Support Our Mission
            </h3>
            <p className="text-white/80 text-sm mb-6 max-w-xl mx-auto">
              Your donation helps us distribute more Narcan, reach more communities, and save more lives.
            </p>
            <a
              href="https://www.paypal.com/donate/?hosted_button_id=LX6PEZPSG5G2Y"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-[#9D4EDD] px-8 py-4 rounded-full font-display font-bold text-sm uppercase tracking-wider hover:bg-white/90 transition-colors"
            >
              Donate Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecognizingSection;
