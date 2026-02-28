import { Search, UserRound, Droplets, Phone } from 'lucide-react';

const InstructionsSection = () => {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-[#2D0A4E] to-[#0D0221]">
      <div className="section-padding max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* English Card */}
          <div className="animate-on-scroll">
            <div className="bg-white rounded-[18px] p-6 sm:p-8 h-full">
              <h3 className="font-display font-black text-lg sm:text-xl text-[#0D0221] mb-6 text-center uppercase">
                WHAT TO DO IN CASE OF A SUSPECTED OPIOID EMERGENCY
              </h3>

              <div className="space-y-4">
                {/* Step 1 - CHECK */}
                <div className="flex gap-4 items-start bg-[#f8f0ff] p-4 rounded-xl">
                  <div className="flex-shrink-0 w-14 h-14 rounded-full bg-[#9D4EDD] flex items-center justify-center">
                    <Search size={24} className="text-white" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-display font-black text-xl text-[#9D4EDD]">1.</span>
                      <span className="font-display font-bold text-lg text-[#0D0221] uppercase">CHECK</span>
                    </div>
                    <p className="text-[#0D0221]/70 text-sm">
                      Check for slowed breathing or unresponsiveness.
                    </p>
                  </div>
                </div>

                {/* Step 2 - LAY */}
                <div className="flex gap-4 items-start bg-[#f8f0ff] p-4 rounded-xl">
                  <div className="flex-shrink-0 w-14 h-14 rounded-full bg-[#9D4EDD] flex items-center justify-center">
                    <UserRound size={24} className="text-white" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-display font-black text-xl text-[#9D4EDD]">2.</span>
                      <span className="font-display font-bold text-lg text-[#0D0221] uppercase">LAY</span>
                    </div>
                    <p className="text-[#0D0221]/70 text-sm">
                      Lay the person on their back and tilt the head up.
                    </p>
                  </div>
                </div>

                {/* Step 3 - SPRAY */}
                <div className="flex gap-4 items-start bg-[#f8f0ff] p-4 rounded-xl">
                  <div className="flex-shrink-0 w-14 h-14 rounded-full bg-[#9D4EDD] flex items-center justify-center">
                    <Droplets size={24} className="text-white" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-display font-black text-xl text-[#9D4EDD]">3.</span>
                      <span className="font-display font-bold text-lg text-[#0D0221] uppercase">SPRAY</span>
                    </div>
                    <p className="text-[#0D0221]/70 text-sm">
                      Insert device into either nostril and press plunger firmly.
                    </p>
                  </div>
                </div>

                {/* Step 4 - STAY */}
                <div className="flex gap-4 items-start bg-[#f8f0ff] p-4 rounded-xl">
                  <div className="flex-shrink-0 w-14 h-14 rounded-full bg-[#9D4EDD] flex items-center justify-center">
                    <Phone size={24} className="text-white" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-display font-black text-xl text-[#9D4EDD]">4.</span>
                      <span className="font-display font-bold text-lg text-[#0D0221] uppercase">STAY</span>
                    </div>
                    <p className="text-[#0D0221]/70 text-sm">
                      Call 911 immediately and continue to administer doses as needed.
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-[#0D0221]/50 text-xs mt-6 leading-relaxed">
                Use as directed. Refer to full Drug Facts label. 1 nasal spray device contains 1 dose. Safe to keep giving doses as needed. © 2023 Emergent Devices Inc. NARCAN® is a registered trademark of Emergent Operations Ireland Limited.
              </p>
            </div>
          </div>

          {/* Spanish Card */}
          <div className="animate-on-scroll" style={{ animationDelay: '0.1s' }}>
            <div className="bg-white rounded-[18px] p-6 sm:p-8 h-full">
              <h3 className="font-display font-black text-lg sm:text-xl text-[#0D0221] mb-6 text-center uppercase">
                QUÉ HACER EN CASO DE UNA PRESUNTA EMERGENCIA POR OPIOIDES
              </h3>

              <div className="space-y-4">
                {/* Step 1 - COMPROBAR */}
                <div className="flex gap-4 items-start bg-[#f8f0ff] p-4 rounded-xl">
                  <div className="flex-shrink-0 w-14 h-14 rounded-full bg-[#9D4EDD] flex items-center justify-center">
                    <Search size={24} className="text-white" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-display font-black text-xl text-[#9D4EDD]">1.</span>
                      <span className="font-display font-bold text-lg text-[#0D0221] uppercase">COMPROBAR</span>
                    </div>
                    <p className="text-[#0D0221]/70 text-sm">
                      Verifique si hay respiración lenta o falta de respuesta.
                    </p>
                  </div>
                </div>

                {/* Step 2 - RECOSTAR */}
                <div className="flex gap-4 items-start bg-[#f8f0ff] p-4 rounded-xl">
                  <div className="flex-shrink-0 w-14 h-14 rounded-full bg-[#9D4EDD] flex items-center justify-center">
                    <UserRound size={24} className="text-white" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-display font-black text-xl text-[#9D4EDD]">2.</span>
                      <span className="font-display font-bold text-lg text-[#0D0221] uppercase">RECOSTAR</span>
                    </div>
                    <p className="text-[#0D0221]/70 text-sm">
                      Acueste a la persona e inclínele la cabeza hacia arriba.
                    </p>
                  </div>
                </div>

                {/* Step 3 - ATOMIZAR */}
                <div className="flex gap-4 items-start bg-[#f8f0ff] p-4 rounded-xl">
                  <div className="flex-shrink-0 w-14 h-14 rounded-full bg-[#9D4EDD] flex items-center justify-center">
                    <Droplets size={24} className="text-white" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-display font-black text-xl text-[#9D4EDD]">3.</span>
                      <span className="font-display font-bold text-lg text-[#0D0221] uppercase">ATOMIZAR</span>
                    </div>
                    <p className="text-[#0D0221]/70 text-sm">
                      Inserte el dispositivo en cualquiera de las fosas nasales y presione el émbolo con firmeza.
                    </p>
                  </div>
                </div>

                {/* Step 4 - PERMANECER */}
                <div className="flex gap-4 items-start bg-[#f8f0ff] p-4 rounded-xl">
                  <div className="flex-shrink-0 w-14 h-14 rounded-full bg-[#9D4EDD] flex items-center justify-center">
                    <Phone size={24} className="text-white" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-display font-black text-xl text-[#9D4EDD]">4.</span>
                      <span className="font-display font-bold text-lg text-[#0D0221] uppercase">PERMANECER</span>
                    </div>
                    <p className="text-[#0D0221]/70 text-sm">
                      Llame al 911 de inmediato y continúe administrando las dosis según sea necesario.
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-[#0D0221]/50 text-xs mt-6 leading-relaxed">
                Úselo según lo indicado. Consulte la etiqueta completa de Datos sobre el medicamento. 1 dispositivo de atomización nasal contiene 1 dosis. Es seguro seguir administrando las dosis según sea necesario. © 2023 Emergent Devices Inc.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstructionsSection;
