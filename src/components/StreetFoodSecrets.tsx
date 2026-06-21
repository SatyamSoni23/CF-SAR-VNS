import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Clock, ShieldCheck, Flame, Coffee, Sparkles, AlertTriangle, CheckCircle } from "lucide-react";
import { STREET_FOOD_DATA } from "../data/streetFood";
import { StreetFoodItem } from "../types";

export default function StreetFoodSecrets() {
  const [snacks, setSnacks] = useState<StreetFoodItem[]>(STREET_FOOD_DATA);
  const [selectedSnack, setSelectedSnack] = useState<StreetFoodItem>(STREET_FOOD_DATA[0]);
  const [isFetchingLive, setIsFetchingLive] = useState<boolean>(false);

  // Synchronize live street food dataset
  useEffect(() => {
    async function fetchLiveFood() {
      setIsFetchingLive(true);
      try {
        const response = await fetch("https://raw.githubusercontent.com/sat-test/HT-002-IMG/refs/heads/main/data/food.json");
        if (!response.ok) throw new Error("Could not fetch raw food JSON");
        const json = await response.json();
        
        const mapped: StreetFoodItem[] = Object.keys(json).map((key) => {
          const item = json[key];
          
          const hygieneTips: Record<string, string> = {
            paan: "Verify that the betel leaves are washed with clean drinking water before folding.",
            tamatar_chaat: "Choose vendors cooking in stainless steel vessels with high-quality ghee.",
            golgappe: "Verify the seller is wearing clear gloves and uses water sourced from sealed water containers.",
            tandoori_momos: "Enjoy when cooked piping hot to order from roaring wooden-ember kilns.",
            malaiyo: "Choose morning counters with dustproof net shields or transparent protective screens.",
            ras_malai: "Savor only from chilled sweet shops with secure sliding door refrigeration.",
            rajbhog: "Check that syrups and chenna are protected from environmental exposure.",
            baati_chokha: "Pick live grills where local cooks fan away embers directly as they bake.",
            rabri_jalebi: "Always order straight out of boiling hot ghee cauldrons for top hygiene.",
            lassi: "Enjoy freshly whipped yogurt prepared in single-use eco-friendly fired kulhads."
          };

          return {
            id: key.replace(/_/g, "-"),
            name: item.name,
            alternativeName: item.tagline,
            description: item.description,
            bestTime: item.best_timing,
            hygieneTip: hygieneTips[key] || "RO water hygiene verified",
            flavorProfile: {
              spicy: parseInt(item.flavour_intesity_rating.spicy || "0"),
              sweet: parseInt(item.flavour_intesity_rating.sweet || "0"),
              smoky: parseInt(item.flavour_intesity_rating.smoky || "0"),
              tangy: parseInt(item.flavour_intesity_rating.tangy || "0")
            },
            keyIngredients: item.key_indian_ingrediant,
            image: item.url
          };
        });

        if (mapped.length > 0) {
          setSnacks(mapped);
          setSelectedSnack((prev) => {
            const matched = mapped.find(p => p.id === prev.id);
            return matched || mapped[0];
          });
        }
      } catch (err) {
        console.error("Failed to dynamically fetch Sarnath live food list:", err);
      } finally {
        setIsFetchingLive(false);
      }
    }
    
    fetchLiveFood();
  }, []);
  
  // Interactive Kulhad Tea Brewing State
  const [brewStep, setBrewStep] = useState<number>(0); // 0: empty, 1: ginger added, 2: cardamom added, 3: boiling, 4: cup poured!
  const [showSpiritualTip, setShowSpiritualTip] = useState(false);
  const [currentTip, setCurrentTip] = useState("");

  const spiritualChaiTips = [
    "Just as clay absorbs the tea, take a moment to absorb Sarnath's stillness. Have a peaceful day!",
    "Patience is the secret ingredient of both slow-simmered Masala Chai and the path to peace.",
    "A steaming kulhad in hand, overlooking the stupa paths—life’s most profound zen is often its simplest.",
    "The sweet and the spicy must balance, both in your morning kachori and in your daily rhythm.",
    "May your thoughts be as clear as spring waters, and your spirit as warm as simmered ginger tea."
  ];

  const handleChaiPress = (stepNum: number) => {
    if (brewStep === stepNum - 1) {
      setBrewStep(stepNum);
      if (stepNum === 3) {
        // Automatically cascade pour to final cup after boiling!
        setTimeout(() => {
          setBrewStep(4);
          const randTip = spiritualChaiTips[Math.floor(Math.random() * spiritualChaiTips.length)];
          setCurrentTip(randTip);
          setShowSpiritualTip(true);
        }, 1200);
      }
    }
  };

  const handleResetChai = () => {
    setBrewStep(0);
    setShowSpiritualTip(false);
  };

  return (
    <section className="py-24 bg-stone-100 border-t border-b border-stone-200" id="street-food-secrets-section">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="inline-flex px-3 py-1 bg-orange-500/10 text-orange-800 rounded-full text-xs font-mono font-semibold tracking-wider uppercase mb-3">
            {isFetchingLive ? "Updating Local Cuisine..." : "🍂 Verified Traditional Secrets"}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-stone-900 font-sans">
            Street Food & Local Flavors Revealed
          </h2>
          <p className="text-xs font-mono text-amber-800 tracking-wider uppercase mt-2">
            Deer Park & Beyond
          </p>
        </div>

        {/* Showcase All Street Foods visually at the top */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-12" id="street-food-top-grid">
          {snacks.map((snack) => {
            const isSelected = selectedSnack.id === snack.id;
            return (
              <button
                key={snack.id}
                onClick={() => setSelectedSnack(snack)}
                className={`group relative overflow-hidden rounded-2xl border text-left transition-all duration-300 cursor-pointer aspect-video md:aspect-square flex flex-col justify-end p-4 ${
                  isSelected
                    ? "border-amber-600 ring-4 ring-amber-500/10 scale-102 bg-white"
                    : "border-stone-200 hover:border-stone-300 bg-white"
                }`}
              >
                {/* Background image */}
                <div className="absolute inset-0 z-0">
                  <img
                    src={snack.image}
                    alt={snack.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  {/* Dark gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t transition-opacity duration-300 ${
                    isSelected ? "from-black/90 via-black/50" : "from-black/80 via-black/25"
                  }`} />
                </div>
                
                <div className="relative z-10 w-full">
                  {isSelected && (
                    <span className="inline-flex items-center gap-1 px-1.5 py-0.5 bg-amber-500 text-[8px] font-bold text-stone-950 uppercase rounded-sm mb-1.5 tracking-wider">
                      ★ Active
                    </span>
                  )}
                  <h4 className="text-xs md:text-sm font-bold text-[#FDFBF7] font-sans line-clamp-1 group-hover:text-amber-400 transition-colors">
                    {snack.name.split(" & ")[0]}
                  </h4>
                  <p className="text-[9px] text-stone-300 font-mono italic line-clamp-1 mt-0.5">
                    {snack.alternativeName || ""}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* LEFT COLUMN: Clean Active Spotlight Panel with big Image block side-by-side with content */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedSnack.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-3xl border border-stone-200/80 overflow-hidden shadow-xs"
                id={`street-food-detail-${selectedSnack.id}`}
              >
                <div className="flex flex-col md:flex-row min-h-[420px]">
                  {/* 1. Large Spotlight Image Block */}
                  <div className="relative w-full md:w-5/12 h-64 md:h-auto shrink-0 overflow-hidden bg-stone-900 border-r border-stone-100">
                    <img
                      src={selectedSnack.image}
                      alt={selectedSnack.name}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    {/* Visual Overlay elements */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    
                    <div className="absolute bottom-4 left-4 right-4 text-left">
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-amber-950/80 backdrop-blur-xs text-amber-400 rounded-lg text-[9px] font-mono tracking-widest uppercase font-bold border border-amber-500/10 mb-2">
                        <Clock className="w-3 h-3 text-amber-500" />
                        <span>Best: {selectedSnack.bestTime.split(" ")[0]}</span>
                      </span>
                      <p className="text-[9px] font-mono text-stone-300 font-bold tracking-widest uppercase">
                        EST. SOUVENIR ROADMAP
                      </p>
                    </div>
                  </div>

                  {/* 2. Right Text Content Column */}
                  <div className="p-6 md:p-8 flex flex-col justify-between flex-1 text-left">
                    <div>
                      {/* Sub-header tagline info */}
                      <span className="text-[9px] font-mono tracking-widest text-[#D97706] font-bold uppercase block mb-1">
                        Sarnath Street Pick Range
                      </span>
                      <h3 className="text-2xl md:text-3xl font-extrabold text-stone-900 tracking-tight leading-tight">
                        {selectedSnack.name}
                      </h3>
                      <p className="text-xs font-mono text-amber-700 font-medium italic mt-1.5 mb-5">
                        {selectedSnack.alternativeName}
                      </p>

                      <p className="text-stone-600 text-xs md:text-sm leading-relaxed mb-6">
                        {selectedSnack.description}
                      </p>

                      {/* Split Details: Flavor Profile Grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-5 border-t border-stone-100">
                        <div>
                          <span className="block text-[10px] font-mono text-stone-400 uppercase tracking-widest font-bold mb-3.5">
                            👅 Flavor Intensity Rating
                          </span>
                          <div className="space-y-3">
                            {Object.entries(selectedSnack.flavorProfile).map(([flavor, rating]) => (
                              <div key={flavor} className="flex items-center justify-between gap-3 text-xs">
                                <span className="w-14 text-[11px] font-medium text-stone-600 uppercase font-sans tracking-wide">
                                  {flavor}
                                </span>
                                <div className="h-2 bg-stone-100 rounded-full flex-1 overflow-hidden">
                                  <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: `${((rating as number) / 5) * 100}%` }}
                                    transition={{ duration: 0.5, delay: 0.1 }}
                                    className="h-full rounded-full bg-gradient-to-r from-amber-500 to-orange-600"
                                  />
                                </div>
                                <span className="text-[10px] font-mono font-bold text-stone-800 shrink-0 w-6 text-right">
                                  {rating}/5
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div>
                          <span className="block text-[10px] font-mono text-stone-400 uppercase tracking-widest font-bold mb-3.5">
                            🌿 Key Indian Ingredients
                          </span>
                          <div className="flex flex-wrap gap-1.5">
                            {selectedSnack.keyIngredients.map((ing) => (
                              <span
                                key={ing}
                                className="text-[10px] px-2.5 py-1 rounded-lg bg-stone-50 border border-stone-200/60 text-stone-700 font-medium font-sans"
                              >
                                {ing}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Bottom strip: Best timing + Hygiene info */}
                    <div className="mt-8 pt-4 border-t border-stone-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-xs">
                      <div className="flex items-center gap-2 bg-orange-50/50 px-3 py-1.5 rounded-xl border border-orange-200/20 text-amber-900 font-sans">
                        <Clock className="w-4 h-4 text-amber-700 shrink-0" />
                        <span><strong className="font-bold">Best Timing:</strong> {selectedSnack.bestTime}</span>
                      </div>
                      
                      <div className="flex items-center gap-1.5 text-[11px] text-stone-500 font-sans italic">
                        <ShieldCheck className="w-4 h-4 text-emerald-600" />
                        <span>RO Water Hygiene Check Verified</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Pro Critic Tips Sub-Panel */}
            <div className="p-6 md:p-8 bg-amber-950 text-[#FDFBF7] rounded-3xl border border-amber-900/10 space-y-6 relative overflow-hidden shadow-xs mt-6 text-left">
              {/* Overlay abstract circle */}
              <div className="absolute -bottom-12 -right-12 w-48 h-48 rounded-full bg-amber-900/20 pointer-events-none" />
              
              <div className="flex items-center gap-2">
                <span className="p-1 px-2.5 rounded-md bg-amber-600 text-[10px] font-mono tracking-widest uppercase font-bold">
                  PRO GUIDES
                </span>
                <h4 className="text-lg font-bold font-sans tracking-tight">
                  Pro Critic Tips for the Street Savvy
                </h4>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs leading-relaxed">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-amber-400">
                    <Clock className="w-4.5 h-4.5 mr-0.5 shrink-0" />
                    <span className="font-bold uppercase tracking-wider font-mono text-[10px]">Best Timing Strategy</span>
                  </div>
                  <p className="text-amber-100/90 font-sans">
                    Hit the street stalls between <strong className="text-amber-300">7:00 AM – 9:30 AM</strong> for the freshest, crispiest Kachoris. Street Chaat vendors fire up their griddles later in the afternoon, peaking from <strong className="text-amber-300">4:30 PM</strong> onwards.
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-emerald-400">
                    <ShieldCheck className="w-4.5 h-4.5 mr-0.5 shrink-0" />
                    <span className="font-bold uppercase tracking-wider font-mono text-[10px]">Hygiene Checkpoint</span>
                  </div>
                  <p className="text-amber-100/90 font-sans">
                    Always choose stalls utilizing filtered or RO water setups, look for vendors using eco-friendly, single-use leaf bowls (<strong className="text-emerald-300">dolas</strong>), and ensure fried snacks are pulled live straight from the boiling oil.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: INTERACTIVE CHAI BREWING EXPERIENCE (Spans 4 of 12) */}
          <div className="lg:col-span-4 space-y-8">
            {/* INTERACTIVE KULHAD CHAI WIDGET */}
            <div className="bg-white rounded-3xl p-6 border border-stone-200/80 shadow-xs text-left">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Coffee className="w-5 h-5 text-amber-700" />
                  <span className="text-sm font-bold text-stone-900 font-sans">Live Kulhad Chai Brewer</span>
                </div>
                <span className="text-[10px] font-mono tracking-widest text-[#D97706] font-bold uppercase">
                  Interactive
                </span>
              </div>

              <p className="text-xs text-stone-500 font-sans leading-relaxed mb-6">
                Assam tea leaves, sun-dried clay mineral cups. Experience the assembly of Sarnath’s famous earthy ginger-cardamom brew.
              </p>

              {/* Brewer Interactive Steps Panel */}
              <div className="space-y-3 mb-6">
                {/* Step 1 */}
                <button
                  type="button"
                  onClick={() => handleChaiPress(1)}
                  disabled={brewStep !== 0}
                  className={`w-full p-2.5 rounded-xl text-left text-xs font-medium transition-all flex items-center justify-between cursor-pointer border ${
                    brewStep >= 1
                      ? "bg-slate-50 border-stone-200 text-stone-400"
                      : brewStep === 0
                      ? "bg-amber-500/5 hover:bg-amber-500/10 border-amber-500/20 text-amber-900 font-semibold"
                      : "bg-stone-50 border-stone-100 text-stone-300"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <span className="w-5 h-5 flex items-center justify-center rounded-full bg-stone-200 text-[10px] font-bold text-stone-600">1</span>
                    Crush Fresh Ginger Roots
                  </span>
                  {brewStep >= 1 && <span className="text-emerald-600 font-mono text-[10px]">✔ Crushed</span>}
                </button>

                {/* Step 2 */}
                <button
                  type="button"
                  onClick={() => handleChaiPress(2)}
                  disabled={brewStep !== 1}
                  className={`w-full p-2.5 rounded-xl text-left text-xs font-medium transition-all flex items-center justify-between cursor-pointer border ${
                    brewStep >= 2
                      ? "bg-slate-50 border-stone-200 text-stone-400"
                      : brewStep === 1
                      ? "bg-amber-500/5 hover:bg-amber-500/10 border-amber-500/20 text-amber-900 font-semibold"
                      : "bg-stone-50 border-stone-100 text-stone-300"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <span className="w-5 h-5 flex items-center justify-center rounded-full bg-stone-200 text-[10px] font-bold text-stone-600">2</span>
                    Sprinkle Green Cardamom Shells
                  </span>
                  {brewStep >= 2 && <span className="text-emerald-600 font-mono text-[10px]">✔ Sprinkled</span>}
                </button>

                {/* Step 3 */}
                <button
                  type="button"
                  onClick={() => handleChaiPress(3)}
                  disabled={brewStep !== 2}
                  className={`w-full p-2.5 rounded-xl text-left text-xs font-medium transition-all flex items-center justify-between cursor-pointer border ${
                    brewStep >= 3
                      ? "bg-slate-50 border-stone-200 text-stone-400"
                      : brewStep === 2
                      ? "bg-amber-500/5 hover:bg-amber-500/10 border-amber-500/20 text-amber-900 font-semibold animate-pulse"
                      : "bg-stone-50 border-stone-100 text-stone-300"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <span className="w-5 h-5 flex items-center justify-center rounded-full bg-stone-200 text-[10px] font-bold text-stone-600">3</span>
                    Brew Slow-Simmered Tea Cascade
                  </span>
                  {brewStep >= 3 && <span className="text-amber-600 font-mono text-[10px] animate-pulse">⚡ Boiling...</span>}
                </button>
              </div>

              {/* Visual Interactive Cup & Steaming Liquid */}
              <div className="relative h-44 bg-stone-50 border border-stone-150 rounded-2xl flex items-center justify-center overflow-hidden">
                {brewStep === 0 && (
                  <span className="text-[11px] text-stone-400 font-mono font-semibold">Sun-baked clay cup is empty. Start Step 1!</span>
                )}
                {brewStep === 1 && (
                  <span className="text-[11.5px] text-amber-900 font-serif font-semibold text-center px-4 animate-bounce">
                    💥 Ginger lands! Aromatic zest unlocked.
                  </span>
                )}
                {brewStep === 2 && (
                  <span className="text-[11.5px] text-amber-900 font-serif font-semibold text-center px-4">
                    ✨ Cardamom settles. Sweet herbal aroma rises.
                  </span>
                )}
                {brewStep === 3 && (
                  <div className="text-center">
                    <span className="block text-[15px] animate-bounce">🔥</span>
                    <span className="text-xs text-[#D97706] font-mono font-bold animate-pulse">INFUSING RAW CLAY MINERAL SOLUTIONS...</span>
                  </div>
                )}
                {brewStep === 4 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex flex-col items-center py-2"
                  >
                    {/* Steam Visual lines */}
                    <div className="flex gap-1 mb-1">
                      <span className="w-1 h-4 bg-stone-400/30 rounded-full animate-pulse transform -translate-y-1 block" />
                      <span className="w-1 h-5 bg-stone-400/20 rounded-full animate-pulse delay-100 block" />
                      <span className="w-1 h-4 bg-stone-400/35 rounded-full animate-pulse delay-300 transform -translate-y-1 block" />
                    </div>

                    {/* Kulhad clay cup */}
                    <div className="w-16 h-14 bg-amber-800 rounded-b-3xl rounded-t-lg border-2 border-amber-950 flex flex-col justify-between overflow-hidden shadow-md">
                      <div className="h-4 bg-amber-900 border-b border-amber-950/40" />
                      <span className="text-[9px] text-[#FDFBF7]/50 font-mono text-center pb-1">CLAY SUN</span>
                    </div>

                    <span className="text-xs text-amber-950 font-bold mt-2 flex items-center gap-1">
                      ☕ Ginger-Cardamom Kulhad Ready!
                    </span>
                  </motion.div>
                )}
              </div>

              {/* Spiritual Food Quote overlay */}
              <AnimatePresence>
                {showSpiritualTip && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mt-4 p-4 bg-amber-50 rounded-2xl border border-amber-200 text-xs text-amber-950 line-clamp-3 leading-relaxed font-sans"
                  >
                    <p className="font-bold text-amber-900 flex items-center gap-1.5 mb-1 text-[11px] uppercase tracking-wider font-mono">
                      <Sparkles className="w-3.5 h-3.5 text-amber-700 shrink-0" />
                      Sarnath Tea Scroll Quote
                    </p>
                    "{currentTip}"
                    <button
                      onClick={handleResetChai}
                      className="block mt-2.5 text-[10px] text-amber-700 underline font-semibold hover:text-amber-900 cursor-pointer"
                    >
                      Brew Another Cup
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
