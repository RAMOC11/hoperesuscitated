import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navigation from './components/Navigation';
import HeroSection from './sections/HeroSection';
import BannerSection from './sections/BannerSection';
import AboutSection from './sections/AboutSection';
import MissionSection from './sections/MissionSection';
import GetNarcanSection from './sections/GetNarcanSection';
import RecognizingSection from './sections/RecognizingSection';
import InstructionsSection from './sections/InstructionsSection';
import StatisticsSection from './sections/StatisticsSection';
import FounderSection from './sections/FounderSection';
import MediaSection from './sections/MediaSection';
import Footer from './components/Footer';

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    // Initialize scroll animations
    const sections = document.querySelectorAll('.animate-on-scroll');
    
    sections.forEach((section) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#0D0221]">
      <Navigation />
      <main>
        <HeroSection />
        <BannerSection />
        <AboutSection />
        <MissionSection />
        <GetNarcanSection />
        <RecognizingSection />
        <InstructionsSection />
        <StatisticsSection />
        <FounderSection />
        <MediaSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
