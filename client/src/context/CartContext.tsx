import { createContext, useContext, useState, ReactNode } from "react";

export type Product = {
  availableQuantities: any;
  id: number;
  name: string;
  images: string[];
  description: string;
  price: {
    [key: string]: {
      sale: number;
      original: number;
    };
  };
};


// CartItem extends Product with count
type CartItem = {
  id: number;
  name: string;
  image: string;
  selectedWeight: string;
  unitPrice: number;
  count: number;
   price: {
    [key: string]: {
      sale: number;
      original: number;
    };
  };
};

type CartContextType = {
  cartItems: CartItem[];
  addToCart: (product: Product, selectedWeight: string, count?: number) => void;
  removeFromCart: (id: number) => void;
  updateCount: (id: number, change: number) => void;
  getTotalItems: () => number;
};


// Create the context
const CartContext = createContext<CartContextType | undefined>(undefined);

// Custom hook
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used inside a CartProvider");
  }
  return context;
};

// Cart provider implementation
export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (product: Product, selectedWeight: string = "50g", count: number = 1) => {
  const existing = cartItems.find(
    (item) => item.id === product.id && item.selectedWeight === selectedWeight
  );

  const unitPrice = product.price[selectedWeight].sale;
  const image = product.images[0];

  if (existing) {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === product.id && item.selectedWeight === selectedWeight
          ? { ...item, count: item.count + count }
          : item
      )
    );
  } else {
    const newCartItem: CartItem = {
      id: product.id,
      name: product.name,
      image,
      selectedWeight,
      unitPrice,
      count,
      price:  product.price
    };
    setCartItems((prev) => [...prev, newCartItem]);
  }
};



  const removeFromCart = (id: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const updateCount = (id: number, change: number) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, count: Math.max(1, item.count + change) }
          : item
      )
    );
  };

  // ✅ Only return number of unique items in cart
  const getTotalItems = () => {
    return cartItems.length;
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, updateCount, getTotalItems }}
    >
      {children}
    </CartContext.Provider>
  );
};
