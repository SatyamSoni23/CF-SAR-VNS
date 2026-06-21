import React, { useState, useEffect } from "react";
import Hero from "./components/Hero";
import CafeGuide from "./components/CafeGuide";
import StreetFoodSecrets from "./components/StreetFoodSecrets";
import SilkHeritage from "./components/SilkHeritage";
import { Heart, Compass, MapPin, ExternalLink, HelpCircle, PhoneCall, AlertCircle } from "lucide-react";

export default function App() {
  const [favoritesCount, setFavoritesCount] = useState<number>(0);

  // Set the real browser tab title to Sarnath Cafe & Foods on mount
  useEffect(() => {
    document.title = "Sarnath Cafe & Foods Guide • Varanasi";
    
    // Poll localstorage to update bookmark indicators live
    const updateFavCount = () => {
      const stored = localStorage.getItem("sarnath_fav_cafes");
      if (stored) {
        try {
          const parsed = JSON.parse(stored);
          setFavoritesCount(parsed.length);
        } catch {
          setFavoritesCount(0);
        }
      } else {
        setFavoritesCount(0);
      }
    };

    updateFavCount();
    // Listening to changes across components
    window.addEventListener("storage", updateFavCount);
    const interval = setInterval(updateFavCount, 1500);

    return () => {
      window.removeEventListener("storage", updateFavCount);
      clearInterval(interval);
    };
  }, []);

  const handleScrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-stone-100 text-stone-900 selection:bg-amber-100 selection:text-amber-900 flex flex-col justify-between">
      
      {/* Primary Landing Main Containers */}
      <div className="flex-1">
        {/* HERO HEADER */}
        <Hero onScrollToSection={handleScrollToSection} favoritesCount={favoritesCount} />

        {/* SECTION 2: THE CAFE HOPPING GUIDE */}
        <CafeGuide />

        {/* SECTION 3: STREET FOOD & LOCAL FLAVORS REVEALED */}
        <StreetFoodSecrets />

        {/* SECTION 4: BANARASI SILK */}
        <SilkHeritage />
      </div>

      {/* COMPREHENSIVE TRAVEL & TRAVELER GUIDE FOOTER */}
      <footer className="bg-stone-950 text-[#FDFBF7] pt-16 pb-12 border-t border-white/5 relative overflow-hidden" id="traveler-footer">
        {/* Background Subtle Circles */}
        <div className="absolute -bottom-24 left-10 w-96 h-96 bg-amber-500/5 rounded-full filter blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10 text-left">
            
            {/* Column 1: Editorial Column */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="p-1.5 rounded-lg bg-amber-500/10 text-amber-550 border border-amber-500/20">
                  <Compass className="w-4.5 h-4.5" />
                </span>
                <span className="text-sm font-bold tracking-tight uppercase font-sans">Sarnath Food Trails</span>
              </div>
              <p className="text-stone-400 text-xs leading-relaxed font-sans">
                Curating the bridges between spiritual heritage, authentic local flavors, and modern continental comfort foods. Exploring Sarnath at a peaceful rhythm.
              </p>
              <div className="text-[10px] text-stone-500 font-mono">
                © 2026 Sarnath Cafe Association.
              </div>
            </div>

            {/* Column 2: Digital Nomad & Work Hub details */}
            <div className="space-y-4">
              <h4 className="text-xs font-mono font-bold tracking-widest text-amber-400 uppercase">
                💻 Digital Work Spots
              </h4>
              <ul className="space-y-2 text-xs text-stone-400 font-sans">
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 mt-0.5">•</span>
                  <span>Fiber Optic ISP Outlets (Nirvana Bar)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 mt-0.5">•</span>
                  <span>Extended Charging power booths available</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 mt-0.5">•</span>
                  <span>Quiet monasteries reading nooks closeby</span>
                </li>
              </ul>
            </div>

            {/* Column 3: Quick Tourist Safety Contacts */}
            <div className="space-y-4 font-sans">
              <h4 className="text-xs font-mono font-bold tracking-widest text-[#D97706] uppercase">
                📞 Help & Transit
              </h4>
              <div className="space-y-2 text-xs text-stone-400">
                <div className="flex items-center gap-2">
                  <PhoneCall className="w-3.5 h-3.5 text-stone-500" />
                  <span>UP Tourism Helpdesk: 18601801364</span>
                </div>
                <div className="flex items-center gap-2">
                  <AlertCircle className="w-3.5 h-3.5 text-stone-500" />
                  <span>Sarnath Police Outpost: 112 (India Tollfree)</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-stone-500" />
                  <span>Location: Sarnath Station Road, Varanasi</span>
                </div>
              </div>
            </div>

            {/* Column 4: Local Travel Advisory rules */}
            <div className="space-y-4">
              <h4 className="text-xs font-mono font-bold tracking-widest text-emerald-400 uppercase">
                🧘 Respecting Sarnath
              </h4>
              <p className="text-stone-400 text-xs leading-relaxed font-sans">
                Many cafes here practice zero-waste dining and organic farming methods. Wear comfortable footwear for temple complexes, respect quiet zones, and carry a reusable water flask.
              </p>
            </div>

          </div>

          {/* Bottom Designer Credit Row */}
          <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-stone-500">
            <div className="flex flex-wrap items-center gap-4">
              <a href="#cafe-guide" onClick={(e) => { e.preventDefault(); handleScrollToSection("cafe-guide-section"); }} className="hover:text-[#FDFBF7] transition-colors">Cafe Map</a>
              <a href="#street-food" onClick={(e) => { e.preventDefault(); handleScrollToSection("street-food-secrets-section"); }} className="hover:text-[#FDFBF7] transition-colors">Street Savor</a>
              <a href="#silk" onClick={(e) => { e.preventDefault(); handleScrollToSection("silk-heritage-section"); }} className="hover:text-[#FDFBF7] transition-colors">Banarasi Handloom</a>
            </div>
            <div className="flex items-center gap-1">
              <span>Made for spiritual food lovers in Sarnath</span>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
