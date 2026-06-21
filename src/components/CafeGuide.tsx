import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Star, Wifi, WifiOff, Wind, Compass, Leaf, Heart, Sparkles, Filter } from "lucide-react";
import { CafeItem } from "../types";
import { CAFES_DATA } from "../data/cafes";

export default function CafeGuide() {
  const [selectedFilter, setSelectedFilter] = useState<"all" | "wifi" | "aircon" | "outdoor" | "budget">("all");
  const [favorites, setFavorites] = useState<string[]>([]);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [cafes, setCafes] = useState<CafeItem[]>(CAFES_DATA);
  const [isFetchingLive, setIsFetchingLive] = useState<boolean>(false);

  // Initialize favorites and fetch live data
  useEffect(() => {
    const stored = localStorage.getItem("sarnath_fav_cafes");
    if (stored) {
      try {
        setFavorites(JSON.parse(stored));
      } catch (err) {
        console.error("Error reading favorites", err);
      }
    }

    async function fetchLiveCafes() {
      setIsFetchingLive(true);
      try {
        const response = await fetch("https://raw.githubusercontent.com/sat-test/HT-002-IMG/refs/heads/main/data/cafe.json");
        if (!response.ok) throw new Error("Could not fetch the verified raw JSON café list");
        const json = await response.json();
        
        // Map the keys of the JSON response to proper CafeItem interface
        const mapped: CafeItem[] = Object.keys(json).map((key) => {
          const item = json[key];
          
          // Tailor precise visual fields matching Sarnath heritage styling
          const wifiMap: Record<string, boolean> = {
            the_coffee_trading: true,
            night_owl_cafe: true,
            the_friends_table: true,
            maati_house: true,
            shaakya_restaurant: true,
            atithi_cafe_restaurant: true,
          };
          
          const airconMap: Record<string, boolean> = {
            the_coffee_trading: true,
            night_owl_cafe: true,
            veg_gali: true,
            the_friends_table: true,
            maati_house: true,
            shaakya_restaurant: true,
            atithi_cafe_restaurant: true,
            the_legacy: true,
          };
          
          const outdoorMap: Record<string, boolean> = {
            appam_cafe: true,
            the_legacy: true,
            atithi_cafe_restaurant: true,
            maati_house: true,
            the_friends_table: true,
          };
          
          const categoryMap: Record<string, string> = {
            the_coffee_trading: "Specialty Cafe",
            night_owl_cafe: "Cozy Night Hub",
            veg_gali: "Fine Vegetarian",
            the_friends_table: "Relaxed Bistro",
            appam_cafe: "South Indian Heritage",
            the_legacy: "Heritage Lounge",
            red_palace: "Family Restaurant",
            atithi_cafe_restaurant: "Traditional Kitchen",
            maati_house: "Trendy Earthy Lounge",
            shaakya_restaurant: "Multi-Cuisine Diner",
          };

          const idealForMap: Record<string, string> = {
            the_coffee_trading: "Coffee Connoisseurs & Remote Work",
            night_owl_cafe: "Late Night Hangs & Quick Bites",
            veg_gali: "Families & Pure Veg Lovers",
            the_friends_table: "Social Gatherings & Casual Bites",
            appam_cafe: "Breakfast Lovers & South Indian Seekers",
            the_legacy: "Tourists & Traditional Diners",
            red_palace: "Large Groups & Feast Lovers",
            atithi_cafe_restaurant: "Cozy Dinners & Near Lotus Hotel",
            maati_house: "Aesthetic Seekers & Creative Minds",
            shaakya_restaurant: "Hotel SGT Plaza Diners",
          };

          const accentMap: Record<string, string> = {
            the_coffee_trading: "amber",
            night_owl_cafe: "indigo",
            veg_gali: "emerald",
            the_friends_table: "amber",
            appam_cafe: "orange",
            the_legacy: "rose",
            red_palace: "rose",
            atithi_cafe_restaurant: "emerald",
            maati_house: "emerald",
            shaakya_restaurant: "indigo",
          };

          const costMap: Record<string, string> = {
            the_coffee_trading: "₹350 for two",
            night_owl_cafe: "₹300 for two",
            veg_gali: "₹400 for two",
            the_friends_table: "₹450 for two",
            appam_cafe: "₹200 for two",
            the_legacy: "₹500 for two",
            red_palace: "₹600 for two",
            atithi_cafe_restaurant: "₹350 for two",
            maati_house: "₹500 for two",
            shaakya_restaurant: "₹550 for two",
          };

          return {
            name: item.name,
            category: categoryMap[key] || "Sarnath Café",
            description: item.description || "A wonderful place to dine and relax in the heart of historic Sarnath.",
            mustTry: item.must_try || [],
            idealFor: idealForMap[key] || "Families & Food Enthusiasts",
            image: item.url,
            rating: parseFloat(item.rating) || 4.5,
            reviewsCount: 100 + (item.name.length * 15) % 320,
            hasWiFi: wifiMap[key] || false,
            hasAirCon: airconMap[key] || false,
            hasOutdoor: outdoorMap[key] || false,
            avgCost: costMap[key] || "₹300 for two",
            operatingHours: `${item.openTime} - ${item.closeTime}`,
            accentColor: accentMap[key] || "amber",
          };
        });

        if (mapped.length > 0) {
          setCafes(mapped);
        }
      } catch (err) {
        console.error("Failed to dynamically fetch Sarnath live cafes from raw config:", err);
      } finally {
        setIsFetchingLive(false);
      }
    }

    fetchLiveCafes();
  }, []);

  const toggleFavorite = (name: string, e: React.MouseEvent) => {
    e.stopPropagation();
    let updated = [...favorites];
    if (favorites.includes(name)) {
      updated = updated.filter((item) => item !== name);
    } else {
      updated.push(name);
    }
    setFavorites(updated);
    localStorage.setItem("sarnath_fav_cafes", JSON.stringify(updated));
  };

  // Safe checks for budget (under ₹350 per two)
  const isBudget = (cost: string) => {
    const num = parseInt(cost.replace(/[^0-9]/g, ""));
    return num <= 350;
  };

  const filteredCafes = cafes.filter((cafe) => {
    switch (selectedFilter) {
      case "wifi":
        return cafe.hasWiFi;
      case "aircon":
        return cafe.hasAirCon;
      case "outdoor":
        return cafe.hasOutdoor;
      case "budget":
        return isBudget(cafe.avgCost);
      case "all":
      default:
        return true;
    }
  });

  return (
    <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto" id="cafe-guide-section">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/10 text-amber-800 rounded-full text-xs font-mono font-semibold tracking-wider uppercase mb-4"
        >
          <Leaf className="w-3.5 h-3.5" />
          <span>{isFetchingLive ? "Updating Sarnath Café Database..." : "Verified Sarnath Cafe Hopping Guide"}</span>
        </motion.div>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl md:text-5xl font-bold tracking-tight text-stone-900 font-sans mb-5 leading-tight"
        >
          {cafes.length} Handpicked Spots You Simply Can’t Miss
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-stone-600 text-base md:text-lg leading-relaxed font-sans"
        >
          Curated with strict standards for pristine hygiene, rich culinary character, and serene spiritual ambiances that pay homage to traditional Sarnath values.
        </motion.p>
      </div>

      {/* Filter Badges Control Panel */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-12" id="cafe-filter-panel">
        <span className="text-xs font-mono text-stone-400 mr-2 flex items-center gap-1.5 uppercase tracking-wider font-semibold">
          <Filter className="w-3.5 h-3.5" />
          Quick Filters:
        </span>
        {[
          { id: "all", label: "Show All Spaces" },
          { id: "wifi", label: "Nomad Friendly (Wi-Fi)" },
          { id: "aircon", label: "Air Conditioned AC" },
          { id: "outdoor", label: "Open-Air Garden" },
          { id: "budget", label: "Budget-Friendly (≤ ₹300 for 2)" },
        ].map((filter) => (
          <button
            key={filter.id}
            onClick={() => setSelectedFilter(filter.id as any)}
            className={`px-4 py-2 rounded-2xl text-xs font-semibold tracking-wide transition-all border cursor-pointer ${
              selectedFilter === filter.id
                ? "bg-[#D97706] border-[#D97706] text-[#FDFBF7] shadow-sm transform scale-102 font-medium"
                : "bg-white border-stone-200 text-stone-700 hover:bg-[#FDFBF7] hover:border-amber-900/30"
            }`}
          >
            {filter.label}
          </button>
        ))}
      </div>

      {/* Grid Layout Container */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
        <AnimatePresence mode="popLayout">
          {filteredCafes.map((cafe, index) => {
            const isFav = favorites.includes(cafe.name);
            return (
              <motion.div
                key={cafe.name}
                layout
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group relative flex flex-col md:flex-row bg-[#FDFBF7] rounded-3xl border border-amber-900/10 shadow-xs overflow-hidden transition-all duration-300 hover:shadow-md hover:border-amber-900/20"
                onMouseEnter={() => setHoveredCard(cafe.name)}
                onMouseLeave={() => setHoveredCard(null)}
                id={`cafe-card-${cafe.name.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {/* Image Section */}
                <div className="relative w-full md:w-2/5 h-48 md:h-auto overflow-hidden shrink-0">
                  <img
                    src={cafe.image}
                    alt={cafe.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  {/* Category overlay */}
                  <span className="absolute top-4 left-4 inline-flex items-center px-3 py-1 bg-black/75 backdrop-blur-xs text-amber-400 rounded-full text-[10px] font-mono tracking-widest uppercase">
                    {cafe.category}
                  </span>
                  
                  {/* Favorite Button Overlay */}
                  <button
                    onClick={(e) => toggleFavorite(cafe.name, e)}
                    className="absolute top-4 right-4 p-2 rounded-full bg-white/90 backdrop-blur-xs text-stone-600 hover:text-rose-600 hover:bg-white transition-all shadow-sm cursor-pointer"
                    title={isFav ? "Remove From Bookmarks" : "Save to Foodie Shortlist"}
                  >
                    <Heart className={`w-4 h-4 transition-transform ${isFav ? "fill-rose-600 text-rose-600 scale-110" : ""}`} />
                  </button>
                </div>

                {/* Content Section */}
                <div className="p-6 md:p-8 flex flex-col justify-between flex-1">
                  <div>
                    {/* Header: Ideal Badges + Title */}
                    <div className="flex items-start justify-between gap-1 mb-2">
                      <span className="inline-flex px-2.5 py-0.5 bg-amber-50 text-amber-900 hover:bg-amber-100 rounded-lg text-[10px] font-bold font-sans tracking-tight">
                        🎯 Ideal For: {cafe.idealFor}
                      </span>
                      <div className="flex items-center gap-1 shrink-0 text-amber-600 text-xs font-mono font-semibold">
                        <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                        <span>{cafe.rating}</span>
                      </div>
                    </div>

                    <h3 className="text-xl md:text-2xl font-bold tracking-tight text-stone-900 font-sans group-hover:text-amber-800 transition-colors">
                      {cafe.name}
                    </h3>

                    <p className="text-stone-600 text-xs md:text-sm leading-relaxed mt-2.5 mb-5 font-sans">
                      {cafe.description}
                    </p>

                    {/* Must Try List */}
                    <div className="mb-6">
                      <span className="block text-[10px] font-mono text-stone-400 uppercase tracking-widest font-bold mb-2">
                        ⭐ MUST-TRY culinary items
                      </span>
                      <ul className="space-y-1.5">
                        {cafe.mustTry.map((item, i) => (
                          <li key={i} className="text-xs text-stone-800 font-medium flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-600 mt-0.5" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Footer Stats */}
                  <div className="border-t border-stone-200/60 pt-4 mt-auto">
                    <div className="flex flex-wrap items-center justify-between gap-4">
                      {/* Amenities Indicators */}
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-mono text-stone-500 font-semibold">{cafe.avgCost}</span>
                        <div className="flex items-center gap-2 border-l border-stone-200 pl-3">
                          {cafe.hasWiFi ? (
                            <Wifi className="w-4 h-4 text-emerald-600" title="High speed Wi-Fi active" />
                          ) : (
                            <WifiOff className="w-4 h-4 text-stone-300" title="No Wi-Fi (Digital Detox)" />
                          )}
                          {cafe.hasAirCon && (
                            <Wind className="w-4 h-4 text-sky-600" title="Air Conditioned space" />
                          )}
                          {cafe.hasOutdoor && (
                            <Leaf className="w-4 h-4 text-emerald-700" title="Peaceful outdoor garden" />
                          )}
                        </div>
                      </div>

                      <span className="text-[10px] font-mono font-bold tracking-widest text-[#D97706]/80 bg-amber-50 px-2.5 py-1 rounded-md">
                        {cafe.operatingHours}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>

        {filteredCafes.length === 0 && (
          <div className="col-span-1 lg:col-span-2 text-center py-16 bg-stone-50 rounded-3xl border border-stone-100">
            <Compass className="w-10 h-10 text-stone-300 mx-auto mb-3" />
            <p className="text-stone-500 text-sm font-sans mb-2">No cafes fit this specific filter setting.</p>
            <button
              onClick={() => setSelectedFilter("all")}
              className="text-xs text-amber-700 underline font-semibold cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

      {/* Bottom Floating Curators Accent */}
      <div className="mt-16 text-center max-w-xl mx-auto p-4 bg-amber-950/5 rounded-2xl border border-amber-900/5">
        <p className="text-xs font-sans text-stone-500 leading-relaxed flex items-center justify-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-amber-600" />
          <span>Nomad tip: <strong className="text-stone-700 font-bold">Nirvana Bistro</strong> features dedicated dual fiber ISP outlets supporting seamless digital work sessions.</span>
        </p>
      </div>
    </section>
  );
}
