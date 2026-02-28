import { Heart } from 'lucide-react';

const BannerSection = () => {
  return (
    <section className="bg-gradient-banner py-8 sm:py-12">
      <div className="text-center px-6">
        <h2 className="font-display font-bold text-xl sm:text-2xl md:text-3xl text-white mb-2 flex items-center justify-center gap-2 flex-wrap">
          Lives Empowered: 213 Narcan Doses Distributed
          <Heart size={24} className="text-white fill-white" />
        </h2>
        <p className="text-white/80 text-sm sm:text-base font-medium">
          When help is within reach, hope is too.
        </p>
      </div>
    </section>
  );
};

export default BannerSection;
