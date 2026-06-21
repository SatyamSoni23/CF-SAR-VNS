import React from "react";
import { motion } from "motion/react";
import { Map, MapPin, Compass, ArrowDownCircle, Heart, Coffee, Globe } from "lucide-react";

interface HeroProps {
  onScrollToSection: (id: string) => void;
  favoritesCount: number;
}

export default function Hero({ onScrollToSection, favoritesCount }: HeroProps) {
  // Current local time representation: June 21, 2026
  const formattedTime = "June 21, 2026";

  const handleScrollClick = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    onScrollToSection(id);
  };

  return (
    <div className="relative min-h-[92vh] flex flex-col justify-between bg-stone-950 text-white overflow-hidden" id="hero-section">
      
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?q=80&w=1600"
          alt="Serene ruins of ancient Dhamek Stupa in Sarnath under warm twilight"
          className="w-full h-full object-cover opacity-35 filter brightness-90 saturate-75"
          referrerPolicy="no-referrer"
        />
        {/* Rich gradient mask to protect text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-950/85 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-stone-950/40" />
      </div>

      {/* FLOATING HEADER NAVIGATION */}
      <header className="relative z-20 border-b border-white/5 bg-stone-950/85 backdrop-blur-md px-4 md:px-8 py-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
          
          {/* Logo Brand */}
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-xl bg-amber-600/20 text-amber-500 border border-amber-500/20">
              <Compass className="w-5 h-5 animate-spin [animation-duration:12s]" />
            </span>
            <div>
              <span className="font-sans font-bold text-base tracking-tight block text-[#FDFBF7]">
                SARNATH
              </span>
              <span className="text-[9px] font-mono tracking-widest text-amber-400 font-bold uppercase block -mt-1">
                Cafe & Foods Guide
              </span>
            </div>
          </div>

          {/* Nav Items */}
          <nav className="flex items-center gap-5 md:gap-7 text-xs font-semibold tracking-wide text-stone-300">
            <a
              href="#cafe-guide"
              onClick={(e) => handleScrollClick("cafe-guide-section", e)}
              className="hover:text-amber-400 transition-colors"
            >
              Cafe Hopper Guide
            </a>
            <a
              href="#street-food"
              onClick={(e) => handleScrollClick("street-food-secrets-section", e)}
              className="hover:text-amber-400 transition-colors"
            >
              Street Food Secrets
            </a>
            <a
              href="#silk"
              onClick={(e) => handleScrollClick("silk-heritage-section", e)}
              className="hover:text-amber-400 transition-colors"
            >
              Silk Heritage
            </a>
          </nav>

          {/* Bookmark Badge */}
          <div className="flex items-center gap-3">
            <span className="hidden sm:inline-block text-[10px] font-mono text-stone-400 border border-stone-800 rounded-lg py-1 px-2.5">
              📅 {formattedTime} • Varanasi, UP
            </span>
            {favoritesCount > 0 && (
              <motion.button
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                onClick={(e) => handleScrollClick("cafe-guide-section", e)}
                className="py-1.5 px-3 rounded-full bg-rose-600 hover:bg-rose-700 text-white text-[11px] font-bold flex items-center gap-1.5 transition-all shadow-sm cursor-pointer"
              >
                <Heart className="w-3.5 h-3.5 fill-white" />
                <span>Shortlist ({favoritesCount})</span>
              </motion.button>
            )}
          </div>

        </div>
      </header>

      {/* HERO HERO SECTION BODY */}
      <main className="relative z-10 flex-1 flex items-center px-4 md:px-8 py-12 md:py-20">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT COLUMN: Bold Typography and CTAs */}
          <div className="lg:col-span-7 text-left space-y-6 md:space-y-8">
            
            <div className="space-y-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-600/20 text-amber-300 rounded-full text-xs font-mono font-bold uppercase tracking-widest border border-amber-500/10">
                <Coffee className="w-3.5 h-3.5" />
                <span>Culinary crossroads of Varanasi</span>
              </span>
              
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-[#FDFBF7] font-sans leading-tight">
                Best Cafes in Sarnath: The Ultimate Foodie Guide
              </h1>
              
              <p className="text-amber-400 font-mono text-sm md:text-base font-semibold tracking-wider">
                Varanasi’s Spiritual Suburb & Peace Lane Sanctuaries
              </p>
            </div>

            <div className="space-y-4 max-w-2xl">
              <p className="text-stone-300 text-sm md:text-base leading-relaxed font-sans">
                Welcome to Sarnath, where the ancient echoes of enlightenment meet a vibrant, evolving food culture. While millions travel to these sacred grounds just outside Varanasi to walk in the footsteps of the Buddha, a new wave of culinary discovery awaits. From hidden monastery lanes serving authentic Tibetan street food to modern rooftop hubs brewing artisan espresso, finding the perfect spot to recharge after a day of exploring the ancient ruins has never been easier or more exciting.
              </p>
              
              <p className="hidden md:block text-stone-400 text-sm leading-relaxed font-sans">
                Whether you are a solo backpacker tracking down local secrets, a digital nomad needing reliable Wi-Fi, or an international pilgrim seeking a peaceful space for reflection, Sarnath’s food scene has a seat saved for you. The culinary landscape here is beautifully distinct from the chaotic heart of main Banaras; it moves at a slower, more intentional pace.
              </p>
            </div>

            {/* CTA Controls */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={(e) => handleScrollClick("cafe-guide-section", e)}
                className="py-3.5 px-6 rounded-2xl bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 text-[#FDFBF7] text-xs font-extrabold tracking-wider uppercase transition-all shadow-md transform hover:-translate-y-0.5 cursor-pointer"
                id="explore-food-map-btn"
              >
                Explore Sarnath Food Map
              </button>
              <button
                onClick={(e) => handleScrollClick("street-food-secrets-section", e)}
                className="py-3.5 px-6 rounded-2xl border border-white/20 hover:border-white/50 bg-white/5 hover:bg-white/10 text-[#FDFBF7] text-xs font-bold transition-all cursor-pointer"
                id="discover-street-flavors-btn"
              >
                Discover Street Flavors
              </button>
            </div>

          </div>

          {/* RIGHT COLUMN: Float Traveler Facts Card / Digital Map Companion */}
          <div className="lg:col-span-5 bg-stone-900/40 backdrop-blur-md rounded-3xl border border-white/10 p-6 md:p-8 space-y-6 text-left relative overflow-hidden">
            {/* Ambient gold glow */}
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-amber-500/10 rounded-full filter blur-xl" />

            <div className="flex items-center gap-2">
              <span className="p-1.5 rounded-lg bg-amber-500/10 text-amber-500">
                <Map className="w-4 h-4" />
              </span>
              <span className="text-xs font-mono text-stone-400 uppercase tracking-widest font-bold">
                Local Travel Companion
              </span>
            </div>

            <h3 className="font-bold font-sans text-xl text-[#FDFBF7] tracking-tight">
              Sarnath Spiritual Grid
            </h3>

            <div className="space-y-4 text-xs font-sans text-stone-300">
              <div className="flex gap-3">
                <MapPin className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-stone-200">How to Reach (9 km from Banaras)</h4>
                  <p className="text-stone-400 text-[11px] leading-relaxed mt-0.5">
                    A panoramic 25-minute auto-rickshaw or taxi drive north from Varanasi Cantt Station. Local e-rickshaws dominate Sarnath interior lanes.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <Globe className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-stone-200">Global monastery influence</h4>
                  <p className="text-stone-400 text-[11px] leading-relaxed mt-0.5">
                    Taste authentic Tibetan thukpa, Bhutanese butter tea, and organic green matches curated across ancient Thai, Japanese, and Chinese temples.
                  </p>
                </div>
              </div>

              <div className="flex gap-3 border-t border-white/5 pt-4">
                <ArrowDownCircle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-stone-200">Why the Local Pace is Slower</h4>
                  <p className="text-stone-400 text-[11px] leading-relaxed mt-0.5">
                    In direct contrast to Banaras's chaotic ghat pathways, Sarnath operates with peaceful, wide roads, silent ancient gardens, and spacious temple lawns.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Sarnath Coordinates fact */}
            <div className="bg-[#1F2937]/50 rounded-xl p-3 border border-white/5 text-[10px] font-mono text-stone-400 flex justify-between">
              <span>LATITUDE: 25.3762° N</span>
              <span>LONGITUDE: 83.0227° E</span>
            </div>

          </div>

        </div>
      </main>

      {/* Wave bottom separator */}
      <div className="relative z-10 w-full h-12 bg-stone-100 flex items-end">
        <div className="w-full h-8 bg-stone-100 uppercase text-[9px] font-mono text-stone-400 tracking-widest font-bold flex items-center justify-center border-t border-stone-200/50">
          Scroll Down to Begin Your Food Trail • ✦ • Explore verifying cafes
        </div>
      </div>

    </div>
  );
}
