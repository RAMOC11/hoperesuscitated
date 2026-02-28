import { MapPin, Lightbulb, Users } from 'lucide-react';

const MissionSection = () => {
  const pillars = [
    {
      icon: MapPin,
      title: "Where We're Making an Impact",
      items: [
        "40+ Narcan doses distributed in our first week at the West Feliciana Parish Library—our first distribution site and a powerful start",
        "More library locations coming soon as we expand access across Louisiana",
        "On-site outreach at high schools, health fairs, and local events",
        "Website requests fulfilled across the region—shipped directly with no barriers and no cost"
      ]
    },
    {
      icon: Lightbulb,
      title: "What We're Doing Differently",
      items: [
        "No age restrictions—teens and young adults can access Narcan directly",
        "Hyper-local partnerships with schools, libraries, and fire departments",
        "Community-led events with real-time training and free resources",
        "Stigma-free education built around youth voices and real-life stories"
      ]
    },
    {
      icon: Users,
      title: "Who We're Reaching",
      items: [
        "Teens navigating peer pressure and crisis situations",
        "Families in rural areas with limited healthcare access",
        "Educators and community leaders ready to be equipped and empowered",
        "Anyone who believes in harm reduction as a path to healing"
      ]
    }
  ];

  return (
    <section id="mission" className="py-16 sm:py-24 bg-[#0D0221]">
      <div className="section-padding max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-white tracking-wider">
            OUR MISSION IN ACTION:
          </h2>
        </div>

        {/* Three Columns */}
        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="animate-on-scroll"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="card-dark p-8 h-full">
                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#9D4EDD]/30 to-[#E0AAFF]/10 flex items-center justify-center border border-[#9D4EDD]/30">
                    <pillar.icon size={40} className="text-[#E0AAFF]" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-display font-bold text-lg text-white text-center mb-6">
                  {pillar.title}
                </h3>

                {/* Items */}
                <ul className="space-y-4">
                  {pillar.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="text-[#C77DFF] text-sm leading-relaxed text-center"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
