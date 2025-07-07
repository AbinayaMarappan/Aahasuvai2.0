import { useEffect, useState } from "react";
import { useCart } from "@/context/CartContext";
import { useLocation } from "wouter";

interface AvailableQuantity {
  label: string;
  price: number;
  original: number;
}

interface Product {
  id: number;
  name: string;
  images: string[];
  availableQuantities: AvailableQuantity[];
}

interface Props {
  product: Product;
  onClose: () => void;
}

export default function ProductModal({ product, onClose }: Props) {
  const { addToCart, cartItems } = useCart();
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [quantity, setQuantity] = useState<number>(0);
  const [, navigate] = useLocation();
  const [showPopup, setShowPopup] = useState(false);
const [popupText, setPopupText] = useState("");

  const selectedQty = product.availableQuantities[selectedIndex];

  useEffect(() => {
    setSelectedIndex(0);
    setQuantity(0);
  }, [product]);

  const handleAdd = () => {
  if (quantity === 0) return;

  addToCart(
    {
      id: product.id,
      name: product.name,
      images: product.images,
      description: "", // Dummy since not needed here
      price: {
        [selectedQty.label]: {
          sale: selectedQty.price,
          original: selectedQty.original,
        },
      },
      availableQuantities: [], // Use empty array instead of undefined to avoid type error
    },
    selectedQty.label,
    quantity
  );

  // Show popup
  setPopupText(`${product.name} added to cart`);
  setShowPopup(true);
  setTimeout(() => setShowPopup(false), 2000);
};


  const handleBuyNow = () => {
    handleAdd();
    window.location.href = "/cart";
  };

  const totalItemsInCart = cartItems.reduce((sum, item) => sum + (item.count || 0), 0);

  const handleViewCart = () => {
    navigate("/cart");
    onClose();
  };

  return (
    <div
      className="fixed inset-0 bg-[#fff6e7]/10 z-50 flex items-center justify-center"
      onClick={onClose}
    >
      <div
        className="bg-white p-6 rounded-xl w-[90%] max-w-md shadow-xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute top-3 right-4 text-2xl font-bold">
          &times;
        </button>

        <h2 className="text-xl font-bold mb-2">{product.name}</h2>
        <p className="text-sm text-gray-500 mb-4">Available quantities</p>

        {product.availableQuantities.map((q: AvailableQuantity, index: number) => (
          <div
            key={q.label}
            onClick={() => setSelectedIndex(index)}
            className={`flex justify-between items-center p-3 rounded border mb-2 cursor-pointer ${
              selectedIndex === index ? "bg-green-100 border-green-600" : "hover:bg-gray-100"
            }`}
          >
            <span>{q.label}</span>
            <span>
              <span className="line-through text-gray-400 mr-2">₹{q.original}</span>
              <span className="font-semibold text-green-700">₹{q.price}</span>
            </span>
          </div>
        ))}

        {/* Quantity Control */}
        <div className="flex items-center justify-center gap-4 my-4">
          <button
            onClick={() => setQuantity(Math.max(0, quantity - 1))}
            className="px-3 py-1 border rounded text-lg"
          >
            -
          </button>
          <span className="text-lg">{quantity}</span>
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="px-3 py-1 border rounded text-lg"
          >
            +
          </button>
        </div>

        {/* Buttons */}
        <div className="flex gap-4 mb-4">
          <button
            onClick={handleAdd}
            className="flex-1 bg-[#004d3d] text-white py-2 rounded-full font-semibold hover:bg-[#006d5d]"
          >
            Add to Cart
          </button>
          <button
            onClick={handleBuyNow}
            className="flex-1 bg-gray-700 text-white py-2 rounded-full font-semibold hover:bg-gray-800"
          >
            Buy Now
          </button>
        </div>

        {/* View Cart Info */}
        {totalItemsInCart > 0 && (
          <div
            className="flex items-center justify-between bg-green-700 text-white px-4 py-2 rounded-full cursor-pointer hover:bg-green-800"
            onClick={handleViewCart}
          >
            <span>
              {totalItemsInCart} ITEM{totalItemsInCart > 1 ? "S" : ""}
            </span>
            <span className="underline font-semibold">View Cart</span>
          </div>
        )}
        {showPopup && (
          <div className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 bg-green-800 text-white px-6 py-3 rounded-full shadow-md text-sm font-medium animate-fadeInOut">
            {popupText}
          </div>
        )}
      </div>
    </div>
  );
}
