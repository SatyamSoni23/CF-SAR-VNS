import { StreetFoodItem } from "../types";

// Raw street foods data in the requested formatting
export const STREET_FOODS_RAW = {
  "paan": {
    "name": "Banarasi Paan",
    "flavour_intesity_rating": {
      "spicy": "1",
      "sweet": "4",
      "smoky": "1",
      "tangy": "2"
    },
    "key_indian_ingrediant": [
      "Betel Leaf",
      "Gulkand",
      "Fennel Seeds",
      "Tutti Frutti",
      "Cardamom"
    ],
    "best_timing": "After Meals / Evening",
    "tagline": "The Iconic Mouth Freshener of Kashi",
    "description": "The most famous culinary symbol of Varanasi. Fresh betel leaves are folded around gulkand, fennel seeds, dry fruits, and aromatic spices to create a refreshing, mildly sweet experience.",
    "url": "https://raw.githubusercontent.com/sat-test/HT-002-IMG/refs/heads/main/food/HT-002-001.png"
  },
  "tamatar_chaat": {
    "name": "Banarasi Tamatar Chaat",
    "flavour_intesity_rating": {
      "spicy": "4",
      "sweet": "3",
      "smoky": "2",
      "tangy": "5"
    },
    "key_indian_ingrediant": [
      "Tomatoes",
      "Boiled Potatoes",
      "Chaat Masala",
      "Tamarind Chutney",
      "Desi Ghee"
    ],
    "best_timing": "4:00 PM - 9:00 PM",
    "tagline": "The Signature Chaat of Varanasi",
    "description": "A unique Banarasi street food where tomatoes are mashed and cooked with spices, potatoes, and ghee before being topped with sev, chutneys, and fresh coriander.",
    "url": "https://raw.githubusercontent.com/sat-test/HT-002-IMG/refs/heads/main/food/HT-002-002.png"
  },
  "golgappe": {
    "name": "Banarasi Golgappa",
    "flavour_intesity_rating": {
      "spicy": "4",
      "sweet": "2",
      "smoky": "0",
      "tangy": "5"
    },
    "key_indian_ingrediant": [
      "Semolina Puris",
      "Mint Water",
      "Tamarind Water",
      "Black Salt",
      "Boiled Potatoes"
    ],
    "best_timing": "4:00 PM - 9:00 PM",
    "tagline": "Crispy Shells Filled with Tangy Magic",
    "description": "Crispy hollow puris filled with spiced potato mixture and flavorful mint-tamarind water. One of the most loved evening snacks in Varanasi.",
    "url": "https://raw.githubusercontent.com/sat-test/HT-002-IMG/refs/heads/main/food/HT-002-003.png"
  },
  "tandoori_momos": {
    "name": "Tandoori Momos",
    "flavour_intesity_rating": {
      "spicy": "4",
      "sweet": "1",
      "smoky": "5",
      "tangy": "3"
    },
    "key_indian_ingrediant": [
      "Vegetable Filling",
      "Yogurt Marinade",
      "Kashmiri Red Chilli",
      "Ginger Garlic Paste",
      "Tandoori Masala"
    ],
    "best_timing": "3:00 PM - 9:00 PM",
    "tagline": "Smoky Tibetan Delight of Sarnath",
    "description": "A popular Sarnath specialty where steamed momos are coated in spicy tandoori marinade and roasted in a tandoor for a smoky flavor.",
    "url": "https://raw.githubusercontent.com/sat-test/HT-002-IMG/refs/heads/main/food/HT-002-004.png"
  },
  "malaiyo": {
    "name": "Malaiyo",
    "flavour_intesity_rating": {
      "spicy": "0",
      "sweet": "5",
      "smoky": "0",
      "tangy": "0"
    },
    "key_indian_ingrediant": [
      "Milk Foam",
      "Saffron",
      "Pistachios",
      "Cardamom",
      "Sugar"
    ],
    "best_timing": "Winter Mornings (November-February)",
    "tagline": "The Cloud-Like Winter Dessert of Varanasi",
    "description": "An airy saffron-infused milk froth prepared during cold winter nights and served at sunrise. One of Varanasi's most unique seasonal delicacies.",
    "url": "https://raw.githubusercontent.com/sat-test/HT-002-IMG/refs/heads/main/food/HT-002-005.png"
  },
  "ras_malai": {
    "name": "Ras Malai",
    "flavour_intesity_rating": {
      "spicy": "0",
      "sweet": "5",
      "smoky": "0",
      "tangy": "1"
    },
    "key_indian_ingrediant": [
      "Chenna",
      "Milk",
      "Sugar",
      "Saffron",
      "Pistachios"
    ],
    "best_timing": "After Lunch or Dinner",
    "tagline": "Soft Cottage Cheese Dumplings in Sweet Milk",
    "description": "Soft chenna patties soaked in thick saffron-flavored milk and garnished with nuts.",
    "url": "https://raw.githubusercontent.com/sat-test/HT-002-IMG/refs/heads/main/food/HT-002-006.png"
  },
  "rajbhog": {
    "name": "Rajbhog",
    "flavour_intesity_rating": {
      "spicy": "0",
      "sweet": "5",
      "smoky": "0",
      "tangy": "0"
    },
    "key_indian_ingrediant": [
      "Chenna",
      "Saffron",
      "Sugar Syrup",
      "Cardamom",
      "Dry Fruits"
    ],
    "best_timing": "Any Time",
    "tagline": "The Royal Cousin of Rasgulla",
    "description": "A large saffron-flavored chenna sweet stuffed with dry fruits and soaked in fragrant sugar syrup.",
    "url": "https://raw.githubusercontent.com/sat-test/HT-002-IMG/refs/heads/main/food/HT-002-007.png"
  },
  "baati_chokha": {
    "name": "Baati Chokha",
    "flavour_intesity_rating": {
      "spicy": "3",
      "sweet": "0",
      "smoky": "5",
      "tangy": "2"
    },
    "key_indian_ingrediant": [
      "Whole Wheat Flour",
      "Roasted Eggplant",
      "Boiled Potatoes",
      "Tomatoes",
      "Desi Ghee"
    ],
    "best_timing": "Lunch & Dinner",
    "tagline": "Rustic Fire-Roasted Feast of Purvanchal",
    "description": "Hard-baked wheat dumplings drenched in desi ghee and served with smoky chokha made from roasted eggplant, potatoes, tomatoes, and spices. A hearty traditional meal popular across the Varanasi region.",
    "url": "https://raw.githubusercontent.com/sat-test/HT-002-IMG/refs/heads/main/food/HT-002-008.png"
  },
  "rabri_jalebi": {
    "name": "Rabri Jalebi",
    "flavour_intesity_rating": {
      "spicy": "0",
      "sweet": "5",
      "smoky": "0",
      "tangy": "1"
    },
    "key_indian_ingrediant": [
      "Refined Flour Batter",
      "Sugar Syrup",
      "Reduced Milk (Rabri)",
      "Saffron",
      "Pistachios"
    ],
    "best_timing": "Breakfast & Evening",
    "tagline": "Hot Crispy Spirals with Rich Rabri",
    "description": "Freshly fried crispy jalebis soaked in sugar syrup and served with thick, creamy rabri made from slow-reduced milk. One of the most beloved sweet combinations in Varanasi.",
    "url": "https://raw.githubusercontent.com/sat-test/HT-002-IMG/refs/heads/main/food/HT-002-009.png"
  },
  "lassi": {
    "name": "Banarasi Lassi",
    "flavour_intesity_rating": {
      "spicy": "0",
      "sweet": "4",
      "smoky": "0",
      "tangy": "2"
    },
    "key_indian_ingrediant": [
      "Curd",
      "Malai",
      "Sugar",
      "Rose Water",
      "Dry Fruits"
    ],
    "best_timing": "10:00 AM - 6:00 PM",
    "tagline": "Creamy Kulhad Bliss from the Ghats",
    "description": "A thick and creamy yogurt drink served in traditional clay cups and topped with malai, nuts, and occasionally saffron. A must-have refreshment while exploring the ghats of Varanasi.",
    "url": "https://raw.githubusercontent.com/sat-test/HT-002-IMG/refs/heads/main/food/HT-002-010.png"
  }
};

export const STREET_FOOD_DATA: StreetFoodItem[] = Object.entries(STREET_FOODS_RAW).map(([key, item]) => {
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
