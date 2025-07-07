import { useState } from "react";
import powder from "@/assets/powder.jpg";
import whole from "@/assets/whole.jpg";
import blend from "@/assets/blend.jpg";
import special from "@/assets/special.jpg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useCart } from "@/context/CartContext";
import ProductModal from "@/components/ProductModel";

// Product type definition
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

// Sample product data
const products: Product[] = [
  {
    id: 1,
    name: "Turmeric Masala",
    images: [powder],
    description: "High-quality turmeric powder used in Indian cooking with strong aroma and color.",
    ingredients: ["Turmeric"],
    availableQuantities: [
      { label: "50g", price: 40, original: 45 },
      { label: "100g", price: 75, original: 85 },
    ],
  },
  {
    id: 2,
    name: "Chili Powder",
    images: [powder],
    description: "Finely ground red chili powder for rich color and spicy flavor.",
    ingredients: ["Dried Red Chilies"],
    availableQuantities: [
      { label: "50g", price: 45, original: 50 },
      { label: "100g", price: 85, original: 95 },
    ],
  },
  {
    id: 3,
    name: "Coriander Masala",
    images: [powder],
    description: "Fresh coriander seeds ground into a fine, aromatic powder.",
    ingredients: ["Coriander Seeds"],
    availableQuantities: [{ label: "50g", price: 50, original: 55 }],
  },
  {
    id: 4,
    name: "Garam Masala",
    images: [powder],
    description: "A warming spice blend used across North Indian dishes.",
    ingredients: ["Cloves", "Cinnamon", "Cardamom", "Nutmeg"],
    availableQuantities: [{ label: "50g", price: 55, original: 65 }],
  },
];

export default function ProductCatalog() {
  const productCategories = [
    {
      title: "Spice Powders",
      description: "Turmeric, chili, coriander and other essential ground spices",
      productCount: 12,
      image: whole,
    },
    {
      title: "Whole Spices",
      description: "Cardamom, cinnamon, cloves and aromatic whole spices",
      productCount: 8,
      image: powder,
    },
    {
      title: "Masala Blends",
      description: "Garam masala, curry powder and signature spice mixes",
      productCount: 15,
      image: blend,
    },
    {
      title: "Specialty Items",
      description: "Saffron, curry leaves and rare specialty ingredients",
      productCount: 6,
      image: special,
    },
  ];

  const { cartItems, addToCart } = useCart();
  const [modalProduct, setModalProduct] = useState<Product | null>(null);

  const getProductCount = (id: number) => {
    const item = cartItems.find((i) => i.id === id);
    return item?.count || 0;
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: (index: number) => ({
      opacity: 0,
      y: 50,
      scale: 0.95,
    }),
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: index * 0.1,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section className="py-16 bg-[#fff6e7]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Categories */}
        <h2 className="text-3xl font-bold text-center text-[#004d3d] mb-12">
          Explore Our Spice Categories
        </h2>
        <motion.div
          className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {productCategories.map((category, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              className="bg-white rounded-xl shadow p-6 text-center hover:shadow-lg transition"
            >
              <img
                src={category.image}
                alt={category.title}
                className="w-full h-32 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-[#004d3d] mb-2">
                {category.title}
              </h3>
              <p className="text-gray-700 text-sm">{category.description}</p>
              <p className="text-sm mt-1 text-spice-orange font-semibold">
                {category.productCount} Products
              </p>
            </motion.div>
          ))}
        </motion.div>

                    {/* Featured Products */}
            <h2 className="text-3xl font-bold text-[#004d3d] mb-6 text-center">Featured Products</h2>
                {/* <h2 className="text-3xl font-bold text-center text-[#004d3d] mb-12"></h2> */}

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mb-16">
              {products.slice(0, 4).map((product) => (
                <div
                  key={product.id}
                  className="bg-white border border-gray-200 rounded-xl shadow hover:shadow-lg transition p-4 flex flex-col items-center"
                >
                  <Link to={`/product/${product.id}`} className="text-center w-full">
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-24 h-24 object-contain mb-4 mx-auto"
                    />
                    <h3 className="text-lg font-semibold text-[#004d3d] mb-1">{product.name}</h3>
                    <p className="text-sm text-gray-700 mb-3">
                      ₹{product.availableQuantities[0].price} — {product.availableQuantities[0].label}
                    </p>
                  </Link>

                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => setModalProduct(product)}
                      className="bg-[#004d3d] text-[#fff6e7] hover:bg-[#006d5d] px-4 py-1 rounded-full text-sm font-medium"
                    >
                      Add
                    </button>

                    {getProductCount(product.id) > 0 && (
                      <span className="bg-[#004d3d] text-white text-xs font-semibold px-2 py-1 rounded-full">
                        {getProductCount(product.id)}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Modal Component */}
            {modalProduct && (
              <ProductModal product={modalProduct} onClose={() => setModalProduct(null)} />
            )}


        {/* View All Button */}
        <div className="text-center">
          <Link to="/products">
            <button className="inline-flex items-center justify-center bg-[#004d3d] hover:bg-[#006d5d] text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
              <i className="fas fa-th-large mr-2"></i>VIEW ALL PRODUCTS
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
