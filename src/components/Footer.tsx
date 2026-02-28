import { Instagram, Facebook, Video, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0D0221] border-t border-white/10">
      <div className="section-padding py-12 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Logo & Tagline */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img 
                src="/images/logo_reference.jpg" 
                alt="Hope Resuscitated" 
                className="w-10 h-10 object-contain"
              />
              <span className="font-display font-bold text-white text-lg">
                HOPE RESUSCITATED
              </span>
            </div>
            <p className="text-[#C77DFF] text-sm mb-4">
              NO STIGMA • NO BARRIERS • JUST HOPE
            </p>
            <p className="text-white/50 text-sm">
              Preventing teen overdose with Narcan
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-white/60 hover:text-white transition-colors text-sm">
                  About Us
                </a>
              </li>
              <li>
                <a href="#mission" className="text-white/60 hover:text-white transition-colors text-sm">
                  Our Mission
                </a>
              </li>
              <li>
                <a href="#narcan" className="text-white/60 hover:text-white transition-colors text-sm">
                  Get Narcan
                </a>
              </li>
              <li>
                <a href="#learn" className="text-white/60 hover:text-white transition-colors text-sm">
                  Learn
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-white mb-4">Contact</h4>
            <ul className="space-y-2">
              <li>
                <a href="tel:225-286-1608" className="text-white/60 hover:text-white transition-colors text-sm flex items-center gap-2">
                  <Phone size={14} className="text-[#9D4EDD]" />
                  225-286-1608
                </a>
              </li>
              <li>
                <a href="mailto:Hoperesuscitatedteam@gmail.com" className="text-white/60 hover:text-white transition-colors text-sm flex items-center gap-2">
                  <Mail size={14} className="text-[#9D4EDD]" />
                  Hoperesuscitatedteam@gmail.com
                </a>
              </li>
            </ul>

            {/* Social Links */}
            <div className="flex items-center gap-4 mt-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:bg-[#9D4EDD] hover:text-white transition-all"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:bg-[#9D4EDD] hover:text-white transition-all"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:bg-[#9D4EDD] hover:text-white transition-all"
              >
                <Video size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 text-center">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} Hope Resuscitated. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
