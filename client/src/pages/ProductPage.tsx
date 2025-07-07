import { useEffect, useState } from "react";
import pro from "@/assets/powder.jpg";
import { useCart } from "@/context/CartContext";
import { useLocation, Link } from "wouter";
import ProductModal from "@/components/ProductModel";

export interface Product {
  id: number;
  name: string;
  images: string[];
  description: string;
  ingredients: string[];
  availableQuantities: {
    label: string;
    price: number;
    original: number;
  }[];
  count?: number;
}
export const products: Product[] = [
  {
    id: 1,
    name: "Biryani Masala",
    images: [pro, pro, pro],
    description: "Special blend for biryani dishes.",
    ingredients: ["Bay Leaf", "Clove", "Cinnamon"],
    availableQuantities: [{ label: "50g", price: 75, original: 85 }],
  },
  {
    id: 2,
    name: "Chicken Masala",
    images: [pro, pro, pro],
    description: "Spice mix for flavorful chicken curry.",
    ingredients: ["Coriander", "Turmeric", "Ginger"],
    availableQuantities: [{ label: "50g", price: 80, original: 90 }],
  },
  {
    id: 3,
    name: "Chilli Chicken Masala",
    images: [pro, pro, pro],
    description: "Spicy masala blend for Indo-Chinese Chilli Chicken.",
    ingredients: ["Red Chili", "Garlic", "Ginger", "Cornflour"],
    availableQuantities: [{ label: "50g", price: 45, original: 55 }],
  },
  {
    id: 4,
    name: "Chilli Gobi Masala",
    images: [pro, pro, pro],
    description: "Mix for spicy and crispy chilli gobi.",
    ingredients: ["Chili", "Ginger", "Cornflour"],
    availableQuantities: [{ label: "50g", price: 85, original: 95 }],
  },
  {
    id: 5,
    name: "Chilli Powder",
    images: [pro, pro, pro],
    description: "Fiery red chilli powder for spice lovers.",
    ingredients: ["Dry Red Chilies"],
    availableQuantities: [{ label: "50g", price: 90, original: 100 }],
  },
  {
    id: 6,
    name: "Cumin Powder",
    images: [pro, pro, pro],
    description: "Aromatic ground cumin perfect for Indian cooking.",
    ingredients: ["Cumin Seeds"],
    availableQuantities: [{ label: "50g", price: 50, original: 60 }],
  },
  {
    id: 7,
    name: "Curry Powder",
    images: [pro, pro, pro],
    description: "Universal curry spice mix for everyday use.",
    ingredients: ["Coriander", "Cumin", "Fenugreek"],
    availableQuantities: [{ label: "50g", price: 95, original: 105 }],
  },
  {
    id: 8,
    name: "Dhall Rice Powder",
    images: [pro, pro, pro],
    description: "Nutritious dhal rice mix for quick meals.",
    ingredients: ["Toor Dal", "Chili", "Coriander", "Salt"],
    availableQuantities: [{ label: "50g", price: 55, original: 65 }],
  },
  {
    id: 9,
    name: "Egg Curry Masala",
    images: [pro, pro, pro],
    description: "Spicy and tangy egg curry flavor enhancer.",
    ingredients: ["Chili", "Coriander", "Black Salt"],
    availableQuantities: [{ label: "50g", price: 100, original: 110 }],
  },
  {
    id: 10,
    name: "Fennel Powder",
    images: [pro, pro, pro],
    description: "Sweet and aromatic ground fennel seeds.",
    ingredients: ["Fennel Seeds"],
    availableQuantities: [{ label: "50g", price: 105, original: 115 }],
  },
  {
    id: 11,
    name: "Fish Curry Masala",
    images: [pro, pro, pro],
    description: "Rich and spicy masala for fish curry dishes.",
    ingredients: ["Coriander", "Tamarind", "Garlic"],
    availableQuantities: [{ label: "50g", price: 110, original: 120 }],
  },
  {
    id: 12,
    name: "Fish Fry Masala",
    images: [pro, pro, pro],
    description: "Crispy, spicy coating mix for fish fry.",
    ingredients: ["Chili", "Garlic", "Fennel", "Salt"],
    availableQuantities: [{ label: "50g", price: 60, original: 70 }],
  },
  {
    id: 13,
    name: "Garlic Rice Powder",
    images: [pro, pro, pro],
    description: "Flavored rice mix with roasted garlic aroma.",
    ingredients: ["Garlic", "Curry Leaves", "Chili"],
    availableQuantities: [{ label: "50g", price: 65, original: 75 }],
  },
  {
    id: 14,
    name: "Garam Masala",
    images: [pro, pro, pro],
    description: "Classic North Indian spice blend.",
    ingredients: ["Cinnamon", "Cloves", "Cardamom"],
    availableQuantities: [{ label: "50g", price: 70, original: 80 }],
  },
  {
    id: 15,
    name: "Idly / Dosa Powder",
    images: [pro, pro, pro],
    description: "Traditional chutney powder for idly and dosa.",
    ingredients: ["Lentils", "Chili", "Salt"],
    availableQuantities: [{ label: "50g", price: 115, original: 125 }],
  },
  {
    id: 16,
    name: "Kulambu Chilli Powder",
    images: [pro, pro, pro],
    description: "Special chilli powder for tamarind curries.",
    ingredients: ["Chili", "Coriander", "Fenugreek"],
    availableQuantities: [{ label: "50g", price: 120, original: 130 }],
  },
  {
    id: 17,
    name: "Lemon Rice Powder",
    images: [pro, pro, pro],
    description: "Instant mix to prepare tangy lemon rice.",
    ingredients: ["Lemon", "Chili", "Mustard"],
    availableQuantities: [{ label: "50g", price: 125, original: 135 }],
  },
  {
    id: 18,
    name: "Mutton Masala",
    images: [pro, pro, pro],
    description: "Special mix for delicious mutton curries.",
    ingredients: ["Clove", "Black Pepper", "Turmeric"],
    availableQuantities: [{ label: "50g", price: 130, original: 140 }],
  },
  {
    id: 19,
    name: "Pepper Powder",
    images: [pro, pro, pro],
    description: "Strong and fresh black pepper powder.",
    ingredients: ["Black Pepper"],
    availableQuantities: [{ label: "50g", price: 150, original: 160 }],
  },
  {
    id: 20,
    name: "Rasam Powder",
    images: [pro, pro, pro],
    description: "Essential spice mix for spicy tangy rasam.",
    ingredients: ["Cumin", "Pepper", "Garlic"],
    availableQuantities: [{ label: "50g", price: 155, original: 165 }],
  },
  {
    id: 21,
    name: "Sambar Powder",
    images: [pro, pro, pro],
    description: "South Indian staple mix for sambar.",
    ingredients: ["Coriander", "Toor Dal", "Fenugreek"],
    availableQuantities: [{ label: "50g", price: 135, original: 145 }],
  },
  {
    id: 22,
    name: "Tamarind Rice Powder",
    images: [pro, pro, pro],
    description: "Traditional tamarind rice mix for tangy South Indian flavor.",
    ingredients: ["Tamarind", "Chili", "Mustard", "Curry Leaves"],
    availableQuantities: [{ label: "50g", price: 40, original: 50 }],
  },
  {
    id: 23,
    name: "Turmeric Powder",
    images: [pro, pro, pro],
    description: "Pure and bright turmeric for flavor and color.",
    ingredients: ["Turmeric"],
    availableQuantities: [{ label: "50g", price: 140, original: 150 }],
  },
  {
    id: 24,
    name: "Vathal Pulikulambu Powder",
    images: [pro, pro, pro],
    description: "Tangy, spicy blend for traditional Vathal Pulikulambu dishes.",
    ingredients: ["Tamarind", "Chili", "Coriander", "Fenugreek"],
    availableQuantities: [{ label: "50g", price: 95, original: 105 }],
  },
];

export default function ProductPage() {
  const {  cartItems } = useCart();
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [location] = useLocation();
  const [searchTerm, setSearchTerm] = useState("");
  const [modalProduct, setModalProduct] = useState<Product | null>(null);
 const handleOpenModal = (product: Product) => {
    setModalProduct(product);
  };

  useEffect(() => {
    const url = new URLSearchParams(location.split("?")[1]);
    const searchParam = url.get("search")?.toLowerCase();
    if (searchParam) setSearchTerm(searchParam);
  }, [location]);

  useEffect(() => {
    if (searchTerm) {
      const filtered = products.filter((p) =>
        p.name.toLowerCase().includes(searchTerm)
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products);
    }
  }, [searchTerm]);

  const getProductCount = (id: number) => {
    const item = cartItems.find((i) => i.id === id);
    return item?.count || 0;
  };

  return (
    
    <div className="bg-[#fff6e7] min-h-screen">
      <div className="bg-[#fff6e7] w-full py-10 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-[#1d1d1d]">Products</h1>
          <div className="mt-2 text-[#1d1d1d] font-medium">
            {/* Home <span className="mx-1">&gt;</span> Products */}
            <span className="text-[#004d3d]">Home</span> <span className="mx-1">&gt;</span>Products

          </div>
        </div>
      </div>

      <section className="max-w-7xl mx-auto px-6 py-12">
        {filteredProducts.length === 0 ? (
          <p className="text-center text-gray-600">No products found.</p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white border border-gray-200 rounded-xl shadow hover:shadow-lg transition p-4 flex flex-col items-center"
              >
                <Link href={`/product/${product.id}`} className="text-center">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-24 h-24 object-contain mb-4 mx-auto"
                  />
                  <h3 className="text-lg font-semibold text-[#004d3d] mb-1">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-700 mb-3">
                    ₹{product.availableQuantities[0].price} — {product.availableQuantities[0].label}
                  </p>
                </Link>
                <div className="flex items-center space-x-2">

            <button
  onClick={() => handleOpenModal(product)}
  className="bg-[#004d3d] text-[#fff6e7] hover:bg-[#006d5d] px-6 py-2 rounded-full text-sm font-medium transition"
>
  Add
</button>
                {modalProduct && (
                  <ProductModal product={modalProduct} onClose={() => setModalProduct(null)} />
                )}


                  {getProductCount(product.id) > 0 && (
                    <span className="bg-[#004d3d] text-white text-xs font-semibold px-2 py-1 rounded-full">
                      {getProductCount(product.id)}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
