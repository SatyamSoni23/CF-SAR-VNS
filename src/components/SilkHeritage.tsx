import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, Compass, Shield, Heart } from "lucide-react";

export default function SilkHeritage() {
  const [activeMotif, setActiveMotif] = useState<string>("kalka");

  const motifs = [
    {
      id: "kalka",
      name: "The Kalka (Paisley)",
      concept: "Eternal Flame & Tree of Life",
      description: "An ancient tear-shaped scroll representing mango buds, sacred fire, and the fertility of the soil. This iconic motif is woven with dense gold Zari threads and features intricate internal detailing like micro-dots and floral stems.",
      effort: "3-4 weeks of precision handloom weaving",
      symbolism: "Abundance, eternity, and spiritual guidance."
    },
    {
      id: "bel",
      name: "The Floral Bel (Vine)",
      concept: "Sacred Creeper & Harmony",
      description: "A continuous, running floral border pattern directly inspired by Mughal garden architecture. It symbolizes flow and the spiritual interconnectedness of all life forms, gently winding along the margins of the saree.",
      effort: "12-14 days of border dedication",
      symbolism: "Peaceful growth, continuity, and elegant borders."
    },
    {
      id: "buti",
      name: "The Asharfi Buti (Medallion)",
      concept: "Golden Sovereign Circles",
      description: "Delicate coin-sized geometric rosettes scattered across the silk plane. In Mughal years, weavers infused actual raw sterling silver coated in gold leaf to produce highly reflecting sovereigns that glitter under candle light.",
      effort: "5 weeks of meticulous lattice spacing",
      symbolism: "Heritage royalty, cosmic stars, and prosperity."
    },
    {
      id: "shikargah",
      name: "The Shikargah (Forest)",
      concept: "Royal Wilderness Panels",
      description: "The most complex traditional Banarasi layout. It depicts active forest scroll scenes featuring deer, parrots, hunting lords, and sprawling foliage woven seamlessly in a rich, multi-colored tapestry structure.",
      effort: "3-4 months of collaborative weaver labor",
      symbolism: "The natural cycle of life, royal majesty, and dense wilderness."
    }
  ];

  const currentMotif = motifs.find(m => m.id === activeMotif) || motifs[0];

  return (
    <section className="relative py-24 bg-[#3E0A1D] text-[#FDFBF7] overflow-hidden" id="silk-heritage-section">
      {/* Intricate Gold Borders (Sunbursts/Spiritual motifs background decor) */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-amber-600 via-amber-400 to-amber-700" />
      <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-amber-600 via-amber-400 to-amber-700" />

      {/* Decorative Loom Wire Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(#d97706_0.5px,transparent_0.5px)] [background-size:16px_16px] opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Deep Narrative & Weaver Context (Spans 6) */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/20 text-amber-350 rounded-full text-[11px] font-mono font-bold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Cultural Palette Cleanser</span>
            </div>

            <h2 className="text-3xl md:text-5xl font-bold tracking-tight font-sans text-amber-100">
              Beyond the Plate: Sarnath’s Banarasi Silk Heritage
            </h2>

            <p className="text-stone-200 text-sm md:text-base leading-relaxed font-sans">
              Once your palate is satisfied, take a short stroll into the vibrant artisan pockets surrounding Sarnath. Varanasi’s world-famous Banarasi Silk weaving culture is deeply tied to this area. For centuries, master weavers have used fine silk threads and real gold or silver metallics (<strong className="text-amber-400">Zari</strong>) to create breathtaking sarees, brocades, and luxury stoles.
            </p>

            <p className="text-stone-300 text-xs md:text-sm leading-relaxed font-sans">
              Many family-run handloom units operate right out of the lanes near Sarnath, preserving ancient Mughal-inspired floral motifs and geometric designs. Visiting these workshops gives you a rare look at the rhythmic clacking of traditional looms—a perfect cultural accompaniment after exploring Sarnath’s incredible food trails.
            </p>

            {/* Quick Handloom Facts Grid */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-amber-900/40">
              <div className="text-center p-3 rounded-2xl bg-amber-950/40 border border-amber-500/10">
                <span className="block text-xl md:text-2xl font-bold text-amber-400 font-sans">5K+</span>
                <span className="block text-[9px] font-mono text-stone-300 uppercase tracking-wider">Active Looms</span>
              </div>
              <div className="text-center p-3 rounded-2xl bg-amber-950/40 border border-amber-500/10">
                <span className="block text-xl md:text-2xl font-bold text-amber-400 font-sans">100%</span>
                <span className="block text-[9px] font-mono text-stone-300 uppercase tracking-wider">Handmade Saree</span>
              </div>
              <div className="text-center p-3 rounded-2xl bg-amber-950/40 border border-amber-500/10">
                <span className="block text-xl md:text-2xl font-bold text-amber-400 font-sans">Pure</span>
                <span className="block text-[9px] font-mono text-stone-300 uppercase tracking-wider">Silver Zari</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Silk Gallery Weaver (Spans 6) */}
          <div className="lg:col-span-6">
            <div className="bg-[#510D25] rounded-3xl p-6 md:p-8 border border-amber-500/20 shadow-xl text-left">
              <span className="text-[10px] font-mono tracking-widest text-amber-400 uppercase block mb-2 font-bold">
                MUGHAL-INSPIRED TEXTILE INTERACTIVE CHIP
              </span>
              <h3 className="text-xl md:text-2xl font-bold text-[#FDFBF7] tracking-tight mb-4">
                Interactive Silk Motif Gallery
              </h3>

              {/* Selector buttons */}
              <div className="flex flex-wrap gap-2 mb-6" id="silk-motif-nav">
                {motifs.map((motif) => (
                  <button
                    key={motif.id}
                    onClick={() => setActiveMotif(motif.id)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-semibold tracking-wide transition-all border cursor-pointer ${
                      activeMotif === motif.id
                        ? "bg-amber-400 border-amber-400 text-stone-950 shadow-sm"
                        : "bg-amber-950/60 border-amber-500/15 text-amber-200 hover:bg-amber-950"
                    }`}
                  >
                    {motif.name.split(" (")[0]}
                  </button>
                ))}
              </div>

              {/* Motif Presentation Card Detail */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentMotif.id}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.3 }}
                  className="bg-amber-950/60 rounded-2xl border border-amber-500/15 p-5 relative overflow-hidden"
                >
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                    {/* CSS Weaving Representation Visual */}
                    <div className="md:col-span-4 h-32 bg-[#310515] rounded-xl border border-amber-500/10 flex items-center justify-center relative overflow-hidden">
                      {/* Generates elegant abstract weaving representations */}
                      <div className="absolute inset-2 border border-dashed border-amber-500/20 rounded-lg flex items-center justify-center">
                        {currentMotif.id === "kalka" && (
                          <div className="w-10 h-16 border-2 border-amber-400/80 rounded-t-full rounded-bl-full transform rotate-12 bg-amber-400/10 animate-pulse relative">
                            {/* Inner threads */}
                            <span className="absolute inset-1.5 border border-amber-400/30 rounded-t-full rounded-bl-full block" />
                          </div>
                        )}
                        {currentMotif.id === "bel" && (
                          <div className="w-16 h-6 border-t-2 border-b-2 border-dashed border-amber-400/80 rounded-2xl flex items-center justify-around animate-pulse">
                            <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                            <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                            <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                          </div>
                        )}
                        {currentMotif.id === "buti" && (
                          <div className="w-12 h-12 border-2 border-amber-400/80 rounded-full flex items-center justify-center animate-spin [animation-duration:15s] relative">
                            <span className="absolute w-6 h-6 border border-dashed border-amber-400/50" />
                            <span className="absolute w-2 h-2 rounded-full bg-amber-400" />
                          </div>
                        )}
                        {currentMotif.id === "shikargah" && (
                          <div className="w-14 h-14 border border-amber-400/50 rounded-lg p-1 flex flex-col justify-between animate-pulse">
                            <div className="h-4 bg-amber-400/20 rounded-xs" />
                            <div className="h-4 bg-amber-400/30 rounded-xs" />
                            <div className="h-4 bg-amber-400/10 rounded-xs" />
                          </div>
                        )}
                      </div>
                      <span className="absolute bottom-2 text-[8px] font-mono tracking-widest text-amber-500 uppercase font-bold">
                        Zari Thread Simulation
                      </span>
                    </div>

                    {/* Facts Content */}
                    <div className="md:col-span-8 space-y-3">
                      <div>
                        <h4 className="text-base font-bold text-amber-300 font-sans">{currentMotif.name}</h4>
                        <span className="text-[10px] font-mono uppercase tracking-wider text-stone-300">Representation: {currentMotif.concept}</span>
                      </div>

                      <p className="text-stone-250 text-xs leading-relaxed font-sans">
                        {currentMotif.description}
                      </p>

                      <div className="pt-2.5 border-t border-amber-900/40 grid grid-cols-2 gap-2 text-[10.5px]">
                        <div>
                          <span className="block text-[8px] font-mono text-stone-400 uppercase tracking-widest font-bold">Loom Duration</span>
                          <span className="font-semibold text-amber-400">{currentMotif.effort}</span>
                        </div>
                        <div>
                          <span className="block text-[8px] font-mono text-stone-400 uppercase tracking-widest font-bold">Symbolic Meaning</span>
                          <span className="font-semibold text-amber-400">{currentMotif.symbolism}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Handloom Souvenir guide notes */}
              <div className="mt-6 p-4 bg-amber-950/40 rounded-2xl border border-amber-500/10 flex gap-3 text-xs">
                <div className="bg-amber-400 text-stone-950 p-2 h-7 w-7 rounded-lg font-bold flex items-center justify-center font-mono shrink-0">
                  i
                </div>
                <div>
                  <h4 className="font-semibold text-amber-300 font-sans mb-0.5">Souvenir Buyer's Caution</h4>
                  <p className="text-stone-350 text-[11px] leading-relaxed font-sans">
                    Authentic Banarasi silk is woven purely on manual wooden handlooms. Check the back of the fabric—handloom pieces feature beautiful, slightly irregular thread floats, whereas machine-made fakes are perfectly, synthetic flat.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
