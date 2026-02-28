import { useState } from 'react';
import { Mail, MapPin, ExternalLink } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';

const GetNarcanSection = () => {
  const [showDialog, setShowDialog] = useState(false);

  const locations = [
    { address: '5114 Burnett Rd, St. Francisville, LA', url: 'https://maps.app.goo.gl/C2BdhzCkXQQsg1CG6' },
    { address: '1900 Church St, Zachary, LA 70791', url: 'https://maps.app.goo.gl/Dq3AhVgGbo1acSZp7' },
    { address: '5151 Plank Rd, Baton Rouge, LA 70805', url: 'https://maps.app.goo.gl/r8AqEQbc1BYbRuUY8' },
    { address: '830 N Alexander Ave, Port Allen, LA 70767', url: 'https://maps.app.goo.gl/XH8vdZ6dX8MJYrzn6' },
    { address: '6311 LA-1, Brusly, LA 70719', url: 'https://maps.app.goo.gl/vndLyU8QbGiMZXfb6' },
  ];

  return (
    <section id="narcan" className="py-16 sm:py-24 bg-gradient-to-b from-[#0D0221] to-[#2D0A4E]">
      <div className="section-padding max-w-5xl mx-auto">
        <div className="animate-on-scroll text-center">
          {/* Header */}
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-white mb-2">
            GET FREE NARCAN
          </h2>
          <p className="font-display font-bold text-lg sm:text-xl text-white/80 mb-12 tracking-wider">
            NO COST. NO AGE LIMIT. NO STIGMA.
          </p>

          {/* Options */}
          <div className="grid sm:grid-cols-2 gap-8 mb-12">
            {/* Request Online */}
            <div className="card-dark p-8">
              <h3 className="font-display font-black text-2xl text-white mb-4">
                REQUEST ONLINE
              </h3>
              <p className="text-white/70 text-sm leading-relaxed mb-6">
                Send us an email with your Name and Address. We will ship Narcan directly to your door—discreet, fast, and always free. No insurance. No ID. No questions asked.
              </p>
              <button
                onClick={() => setShowDialog(true)}
                className="btn-primary flex items-center justify-center gap-2 w-full"
              >
                <Mail size={18} />
                Request Now
              </button>
            </div>

            {/* Pick Up Anytime */}
            <div className="card-dark p-8">
              <h3 className="font-display font-black text-2xl text-white mb-4">
                PICK UP ANYTIME
              </h3>
              <p className="text-white/70 text-sm leading-relaxed mb-6">
                Visit our 24/7 outdoor Narcan distribution box located at the West Feliciana Parish Library.
              </p>
              <div className="flex justify-center">
                <MapPin size={48} className="text-[#9D4EDD]" />
              </div>
            </div>
          </div>

          {/* Locations */}
          <div className="card-dark p-8">
            <h3 className="font-display font-bold text-lg text-[#E0AAFF] mb-6">
              Distribution Locations
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {locations.map((location, index) => (
                <a
                  key={index}
                  href={location.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white/70 hover:text-white transition-colors group text-left"
                >
                  <MapPin size={18} className="text-[#9D4EDD] flex-shrink-0" />
                  <span className="text-sm underline underline-offset-2 group-hover:text-[#E0AAFF]">
                    {location.address}
                  </span>
                  <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Dialog */}
      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent className="bg-[#1a0b2e] border border-[#9D4EDD]/30 text-white max-w-md">
          <DialogHeader>
            <DialogTitle className="font-display font-bold text-xl text-white">
              Request Free Narcan
            </DialogTitle>
            <DialogDescription className="text-white/70">
              Email us your name and address, and we'll ship Narcan directly to your door.
            </DialogDescription>
          </DialogHeader>
          <div className="mt-4 pt-4 border-t border-white/10">
            <a
              href="mailto:Hoperesuscitatedteam@gmail.com"
              className="btn-primary w-full flex items-center justify-center gap-2"
            >
              <Mail size={18} />
              Email Us Now
            </a>
            <p className="text-center text-white/50 text-xs mt-4">
              Hoperesuscitatedteam@gmail.com
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default GetNarcanSection;
