export interface CafeItem {
  name: string;
  category: string;
  description: string;
  mustTry: string[];
  idealFor: string;
  image: string;
  rating: number;
  reviewsCount: number;
  hasWiFi: boolean;
  hasAirCon: boolean;
  hasOutdoor: boolean;
  avgCost: string;
  operatingHours: string;
  accentColor: string;
}

export interface StreetFoodItem {
  id: string;
  name: string;
  alternativeName?: string;
  description: string;
  bestTime: string;
  hygieneTip: string;
  flavorProfile: {
    spicy: number;
    sweet: number;
    smoky: number;
    tangy: number;
  };
  keyIngredients: string[];
  image: string;
}

export interface SilkMotif {
  id: string;
  name: string;
  meaning: string;
  era: string;
  patternType: string;
  visualPattern: string; // Tailwinds classes or details
}
