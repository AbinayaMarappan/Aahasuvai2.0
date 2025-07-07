import { useEffect, useState } from "react";
import { useCart } from "@/context/CartContext";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { useRoute } from "wouter";
import { detailedProducts } from "@/data/product1";

export default function ProductDetail() {
  const { addToCart, cartItems, updateCount } = useCart();
  const [, navigate] = useLocation();
  const [match, params] = useRoute("/product/:id");
const productId = params?.id ? parseInt(params.id) : null;
  const product = detailedProducts.find((p) => p.id === productId);
  if (!product) return <p className="p-4">Product not found.</p>;
  const [showPopup, setShowPopup] = useState(false);
const [popupText, setPopupText] = useState("");

  const [imageIndex, setImageIndex] = useState(0);
  const [selectedWeight, setSelectedWeight] = useState<"50g" | "100g">("50g");
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    if (!product) return;
    const interval = setInterval(() => {
      setImageIndex((prev) => (prev + 1) % product.images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [product]);

  useEffect(() => {
    if (!product) return;
    const existing = cartItems.find((item) => item.id === product.id);
    setQuantity(existing ? existing.count : 0);
  }, [cartItems, product]);

 const handleAddToCart = () => {
  addToCart(product, selectedWeight, 1);
  setPopupText(`${product.name} added to cart`);
  setShowPopup(true);

  setTimeout(() => {
    setShowPopup(false);
  }, 2000); // hide after 2 seconds
};
  const handleBuyNow = () => {
    handleAddToCart();
    navigate("/cart");
  };

  const handleIncrease = () => {
    if (!product) return;
    updateCount(product.id, +1);
  };

  const handleDecrease = () => {
    if (!product || quantity <= 1) return;
    updateCount(product.id, -1);
  };

  if (!product) return <p className="p-4">Product not found.</p>;

  return (
    <div className="p-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Image Section */}
        <div>
          <img
            src={product.images[imageIndex]}
            alt={product.name}
            className="w-full max-w-sm rounded-lg shadow"
          />
        </div>

        {/* Detail Section */}
        <div>
          <h1 className="text-3xl font-bold text-green-900 mb-1">{product.name}</h1>
          <p className="text-green-600 mb-4">
            You saved{" "}
            {(
              ((product.price[selectedWeight].original - product.price[selectedWeight].sale) /
                product.price[selectedWeight].original) *
              100
            ).toFixed(0)}
            %
          </p>

          {/* Weight Options */}
          <div className="mb-4">
            <h2 className="font-semibold mb-1">Available quantities</h2>
            <div className="flex gap-3">
              {(["50g", "100g"] as const).map((weight) => (
                <button
                  key={weight}
                  onClick={() => setSelectedWeight(weight)}
                  className={`px-4 py-2 rounded border ${
                    selectedWeight === weight ? "bg-green-800 text-white" : "bg-white"
                  }`}
                >
                  <div className="text-sm font-medium">{weight}</div>
                  <div className="text-xs line-through text-gray-400">
                    ₹{product.price[weight].original}
                  </div>
                  <div className="text-sm font-bold">
                    ₹{product.price[weight].sale}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Quantity Controls */}
          <div className="flex items-center gap-4 mb-6">
            <button className="px-3 py-1 border rounded" onClick={handleDecrease}>
              -
            </button>
            <span>{quantity}</span>
            <button className="px-3 py-1 border rounded" onClick={handleIncrease}>
              +
            </button>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <Button
              onClick={handleAddToCart}
              className="w-full bg-[#004d3d] text-white py-3 mt-4 rounded-full font-semibold hover:bg-[#006d5d]"
            >
              Add to Cart
            </Button>
            <Button
              onClick={handleBuyNow}
              className="w-full bg-[#004d3d] text-white py-3 mt-4 rounded-full font-semibold hover:bg-[#006d5d]"
            >
              Buy Now
            </Button>
          </div>

          {/* Description */}
          <div className="mt-6">
            <h2 className="text-xl font-semibold">Description</h2>
            <p className="mt-2 text-gray-700">{product.description}</p>
          </div>
          {showPopup && (
            <div className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 bg-green-800 text-white px-6 py-3 rounded-full shadow-md text-sm font-medium animate-fadeInOut">
              {popupText}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
