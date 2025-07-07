import pro from "@/assets/powder.jpg";

export interface Product {
  id: number;
  name: string;
  price: number;
  quantity: string;
  image: string;
  count?: number;
}

export const products: Product[] = [
  { id: 1, name: "Biryani Masala", price: 40, quantity: "50g", image: pro },
  { id: 2, name: "Chicken Masala", price: 45, quantity: "50g", image: pro },
  { id: 3, name: "Chilli Chicken Masala", price: 50, quantity: "50g", image: pro },
  { id: 4, name: "Chilli Gobi Masala", price: 55, quantity: "50g", image: pro },
  { id: 5, name: "Chilli Powder", price: 60, quantity: "50g", image: pro },
  { id: 6, name: "Cumin Powder", price: 65, quantity: "50g", image: pro },
  { id: 7, name: "Curry Powder", price: 70, quantity: "50g", image: pro },
  { id: 8, name: "Dhall Rice Powder", price: 75, quantity: "50g", image: pro },
  { id: 9, name: "Egg Curry Masala", price: 80, quantity: "50g", image: pro },
  { id: 10, name: "Fennel Powder", price: 85, quantity: "50g", image: pro },
  { id: 11, name: "Fish Curry Masala", price: 90, quantity: "50g", image: pro },
  { id: 12, name: "Fish Fry Masala", price: 95, quantity: "50g", image: pro },
  { id: 13, name: "Garlic Rice Powder", price: 100, quantity: "50g", image: pro },
  { id: 14, name: "Garam Masala", price: 105, quantity: "50g", image: pro },
  { id: 15, name: "Idly / Dosa Powder", price: 110, quantity: "50g", image: pro },
  { id: 16, name: "Kulambu Chilli Powder", price: 115, quantity: "50g", image: pro },
  { id: 17, name: "Lemon Rice Powder", price: 120, quantity: "50g", image: pro },
  { id: 18, name: "Mutton Masala", price: 125, quantity: "50g", image: pro },
  { id: 19, name: "Pepper Powder", price: 130, quantity: "50g", image: pro },
  { id: 20, name: "Rasam Powder", price: 135, quantity: "50g", image: pro },
  { id: 21, name: "Sambar Powder", price: 140, quantity: "50g", image: pro },
  { id: 22, name: "Tamarind Rice Powder", price: 145, quantity: "50g", image: pro },
  { id: 23, name: "Turmeric Powder", price: 150, quantity: "50g", image: pro },
  { id: 24, name: "Vathal Pulikulambu Powder", price: 155, quantity: "50g", image: pro },
];
