export interface DetailedProduct {
  id: number;
  name: string;
  description: string;
  images: string[];
  price: {
    [quantity: string]: {
      sale: number;
      original: number;
    };
  };
  availableQuantities: ("50g" | "100g")[]; 
}
interface AvailableQuantity {
  label: string; 
  price: number;
  original: number;
}

export const detailedProducts: DetailedProduct[] = [
  {
    id: 1,
    name: "Biryani Masala",
    description: "Aromatic blend perfect for traditional biryani dishes.",
    images: ["/assets/biryani1.jpg", "/assets/biryani2.jpg"],
    price: {
      "50g": { sale: 50, original: 60 },
      "100g": { sale: 90, original: 110 },
    },
    availableQuantities: ["50g", "100g"],
  },
  {
    id: 2,
    name: "Chicken Masala",
    description: "Spice up your chicken recipes with this flavorful blend.",
    images: ["/assets/chicken1.jpg", "/assets/chicken2.jpg"],
    price: {
      "50g": { sale: 45, original: 55 },
      "100g": { sale: 85, original: 100 },
    },
    availableQuantities: ["50g", "100g"],
  },
  {
    id: 3,
    name: "Chilli Chicken Masala",
    description: "Perfect for spicy and crispy chilli chicken lovers.",
    images: ["/assets/chillichicken1.jpg", "/assets/chillichicken2.jpg"],
    price: {
      "50g": { sale: 48, original: 60 },
      "100g": { sale: 88, original: 105 },
    },
    availableQuantities: ["50g", "100g"],
  },
  {
    id: 4,
    name: "Chilli Gobi Masala",
    description: "Zesty blend made for delicious chilli gobi recipes.",
    images: ["/assets/chilligobi1.jpg", "/assets/chilligobi2.jpg"],
    price: {
      "50g": { sale: 42, original: 55 },
      "100g": { sale: 78, original: 95 },
    },
    availableQuantities: ["50g", "100g"],
  },
  {
    id: 5,
    name: "Chilli Powder",
    description: "Bright red chilli powder to add heat and color.",
    images: ["/assets/chilli1.jpg", "/assets/chilli2.jpg"],
    price: {
      "50g": { sale: 38, original: 50 },
      "100g": { sale: 72, original: 90 },
    },
    availableQuantities: ["50g", "100g"],
  },
  {
    id: 6,
    name: "Cumin Powder",
    description: "Earthy and fragrant cumin powder for everyday use.",
    images: ["/assets/cumin1.jpg", "/assets/cumin2.jpg"],
    price: {
      "50g": { sale: 35, original: 45 },
      "100g": { sale: 68, original: 85 },
    },
    availableQuantities: ["50g", "100g"],
  },
  {
    id: 7,
    name: "Curry Powder",
    description: "Versatile curry powder ideal for multiple cuisines.",
    images: ["/assets/curry1.jpg", "/assets/curry2.jpg"],
    price: {
      "50g": { sale: 36, original: 48 },
      "100g": { sale: 70, original: 88 },
    },
    availableQuantities: ["50g", "100g"],
  },
  {
    id: 8,
    name: "Dhall Rice Powder",
    description: "Aromatic blend perfect for flavorful dhall rice.",
    images: ["/assets/dhall1.jpg", "/assets/dhall2.jpg"],
    price: {
      "50g": { sale: 33, original: 42 },
      "100g": { sale: 64, original: 80 },
    },
    availableQuantities: ["50g", "100g"],
  },
  {
    id: 9,
    name: "Egg Curry Masala",
    description: "Rich and spicy blend to enhance egg curry dishes.",
    images: ["/assets/egg1.jpg", "/assets/egg2.jpg"],
    price: {
      "50g": { sale: 44, original: 55 },
      "100g": { sale: 82, original: 98 },
    },
    availableQuantities: ["50g", "100g"],
  },
  {
    id: 10,
    name: "Fennel Powder",
    description: "Mild and sweet fennel powder for digestion and flavor.",
    images: ["/assets/fennel1.jpg", "/assets/fennel2.jpg"],
    price: {
      "50g": { sale: 30, original: 40 },
      "100g": { sale: 58, original: 75 },
    },
    availableQuantities: ["50g", "100g"],
  },
  {
    id: 11,
    name: "Fish Curry Masala",
    description: "Bold spice mix crafted for traditional fish curries.",
    images: ["/assets/fishcurry1.jpg", "/assets/fishcurry2.jpg"],
    price: {
      "50g": { sale: 47, original: 60 },
      "100g": { sale: 88, original: 105 },
    },
    availableQuantities: ["50g", "100g"],
  },
  {
    id: 12,
    name: "Fish Fry Masala",
    description: "Crispy and tangy masala for perfect fish fries.",
    images: ["/assets/fishfry1.jpg", "/assets/fishfry2.jpg"],
    price: {
      "50g": { sale: 46, original: 56 },
      "100g": { sale: 84, original: 100 },
    },
    availableQuantities: ["50g", "100g"],
  },
  {
    id: 13,
    name: "Garlic Rice Powder",
    description: "Flavorful garlic mix for quick rice seasoning.",
    images: ["/assets/garlic1.jpg", "/assets/garlic2.jpg"],
    price: {
      "50g": { sale: 32, original: 42 },
      "100g": { sale: 60, original: 75 },
    },
    availableQuantities: ["50g", "100g"],
  },
  {
    id: 14,
    name: "Garam Masala",
    description: "Traditional North Indian spice blend for depth.",
    images: ["/assets/garam1.jpg", "/assets/garam2.jpg"],
    price: {
      "50g": { sale: 50, original: 62 },
      "100g": { sale: 95, original: 110 },
    },
    availableQuantities: ["50g", "100g"],
  },
  {
    id: 15,
    name: "Idly / Dosa Powder",
    description: "Classic podi to pair with soft idly and crispy dosa.",
    images: ["/assets/idly1.jpg", "/assets/idly2.jpg"],
    price: {
      "50g": { sale: 34, original: 44 },
      "100g": { sale: 66, original: 82 },
    },
    availableQuantities: ["50g", "100g"],
  },
  {
    id: 16,
    name: "Kulambu Chilli Powder",
    description: "Perfectly balanced powder for tangy kulambu dishes.",
    images: ["/assets/kulambu1.jpg", "/assets/kulambu2.jpg"],
    price: {
      "50g": { sale: 39, original: 49 },
      "100g": { sale: 76, original: 92 },
    },
    availableQuantities: ["50g", "100g"],
  },
  {
    id: 17,
    name: "Lemon Rice Powder",
    description: "Zesty lemon rice mix for quick lunch ideas.",
    images: ["/assets/lemon1.jpg", "/assets/lemon2.jpg"],
    price: {
      "50g": { sale: 31, original: 41 },
      "100g": { sale: 59, original: 70 },
    },
    availableQuantities: ["50g", "100g"],
  },
  {
    id: 18,
    name: "Mutton Masala",
    description: "Aromatic and rich masala for tender mutton dishes.",
    images: ["/assets/mutton1.jpg", "/assets/mutton2.jpg"],
    price: {
      "50g": { sale: 52, original: 65 },
      "100g": { sale: 98, original: 115 },
    },
    availableQuantities: ["50g", "100g"],
  },
  {
    id: 19,
    name: "Pepper Powder",
    description: "Freshly ground pepper for bold flavor and spice.",
    images: ["/assets/pepper1.jpg", "/assets/pepper2.jpg"],
    price: {
      "50g": { sale: 37, original: 48 },
      "100g": { sale: 71, original: 90 },
    },
    availableQuantities: ["50g", "100g"],
  },
  {
    id: 20,
    name: "Rasam Powder",
    description: "South Indian rasam mix for tangy, spicy soups.",
    images: ["/assets/rasam1.jpg", "/assets/rasam2.jpg"],
    price: {
      "50g": { sale: 35, original: 46 },
      "100g": { sale: 66, original: 82 },
    },
    availableQuantities: ["50g", "100g"],
  },
  {
    id: 21,
    name: "Sambar Powder",
    description: "Traditional sambar blend for rich lentil dishes.",
    images: ["/assets/sambar1.jpg", "/assets/sambar2.jpg"],
    price: {
      "50g": { sale: 40, original: 52 },
      "100g": { sale: 74, original: 90 },
    },
    availableQuantities: ["50g", "100g"],
  },
  {
    id: 22,
    name: "Tamarind Rice Powder",
    description: "Tangy and spicy tamarind rice mix for instant meals.",
    images: ["/assets/tamarind1.jpg", "/assets/tamarind2.jpg"],
    price: {
      "50g": { sale: 36, original: 45 },
      "100g": { sale: 68, original: 82 },
    },
    availableQuantities: ["50g", "100g"],
  },
  {
    id: 23,
    name: "Turmeric Powder",
    description: "Golden turmeric powder known for purity and aroma.",
    images: ["/assets/turmeric1.jpg", "/assets/turmeric2.jpg"],
    price: {
      "50g": { sale: 40, original: 50 },
      "100g": { sale: 75, original: 90 },
    },
    availableQuantities: ["50g", "100g"],
  },
  {
    id: 24,
    name: "Vathal Pulikulambu Powder",
    description: "Robust spice mix for vathal kulambu preparation.",
    images: ["/assets/vathal1.jpg", "/assets/vathal2.jpg"],
    price: {
      "50g": { sale: 43, original: 54 },
      "100g": { sale: 80, original: 96 },
    },
    availableQuantities: ["50g", "100g"],
  }
];
