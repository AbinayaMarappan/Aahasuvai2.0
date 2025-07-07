import { useState } from "react";
import { FaShoppingCart, FaSearch } from "react-icons/fa";
import { useLocation } from "wouter";
import { Link } from "wouter";
import { useCart } from "@/context/CartContext";
import Logo from "@/assets/Logo7.png";
import SignInDrawer from "@/components/SignInDrawer";
import { Product, products } from "@/data/products";
import { X } from "lucide-react";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [location, navigate] = useLocation();
  const { getTotalItems } = useCart();
  const cartCount = getTotalItems();
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [showDrawer, setShowDrawer] = useState(false);

  const handleSearchSubmit = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && searchInput.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchInput.trim())}`);
      setShowSearch(false);
      setSearchInput("");
    }
  };

  return (
    <nav
      style={{ backgroundColor: "#FFF6E7" }}
      className="shadow-md sticky top-0 z-40 transition-all duration-300"
    >
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
         <div className="flex items-center gap-6 h-20"> {/* added h-20 for height alignment */}
  <Link href="/?fromLogo=true">
          <div className="flex items-center justify-center h-full -mt-1">
        <img
          src={Logo}
          alt="Logo"
          className="h-28 w-28 object-contain rounded-full"
        />
      </div>
</Link>
            {/* Desktop Nav Links - Black */}
            <div className="hidden md:flex items-center gap-6">
              {[
                { label: "Home", path: "/", key: "home" },
                { label: "Product", path: "/products", key: "product" },
                { label: "Contact", path: "/contact", key: "contact" },
                { label: "Offers", path: "/offers", key: "offers" },
                { label: "Why Buy With Us", path: "/whybuywithus", key: "whybuy" },
              ].map(({ label, path, key }) => {
                const currentPath = new URL("http://dummy" + location).pathname;
                const isActive = currentPath === path;

                return (
                  <button
                    key={key}
                    onClick={() => {
                      navigate(path);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`text-sm font-medium px-2 py-1 rounded transition-colors focus:outline-none ${
                      isActive
                        ? "text-orange-600"
                        : "text-black hover:text-orange-600"
                    }`}
                  >
                    {label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Side: Search, Cart, Account, Sign In */}
          <div className="flex items-center gap-4 relative text-black">
            {/* Search */}
            <div className="relative flex items-center">
              <div
                className={`transition-all duration-300 ease-in-out ${
                  showSearch ? "opacity-100 scale-100 w-64 mr-2" : "opacity-0 scale-0 w-0"
                } overflow-hidden`}
              >
                <div className="relative">
                  <input
                    type="text"
                    value={searchInput}
                    onChange={(e) => {
                      const value = e.target.value;
                      setSearchInput(value);
                      const filtered = products.filter((product) =>
                        product.name.toLowerCase().includes(value.toLowerCase())
                      );
                      setFilteredProducts(value.trim() ? filtered : []);
                    }}
                    onKeyDown={handleSearchSubmit}
                    placeholder="Search..."
                    className="w-full pr-8 px-3 py-2 border rounded shadow text-sm"
                    autoFocus
                  />
                  <button
                    onClick={() => {
                      setShowSearch(false);
                      setSearchInput("");
                      setFilteredProducts([]);
                    }}
                    className="absolute right-2 top-2 text-black hover:text-red-500"
                  >
                    <X size={16} />
                  </button>
                </div>

                {filteredProducts.length > 0 && (
                  <div className="bg-white border border-t-0 shadow rounded-b max-h-60 overflow-y-auto">
                    {filteredProducts.map((product) => (
                      <div
                        key={product.id}
                        onClick={() => {
                          navigate(`/products?search=${encodeURIComponent(product.name)}`);
                          setShowSearch(false);
                          setSearchInput("");
                          setFilteredProducts([]);
                        }}
                        className="px-3 py-2 hover:bg-orange-100 cursor-pointer text-sm"
                      >
                        {product.name}
                      </div>
                    ))}
                  </div>
                )}
                {searchInput && filteredProducts.length === 0 && (
                  <div className="bg-white border border-t-0 shadow rounded-b px-3 py-2 text-gray-500 text-sm">
                    No products found
                  </div>
                )}
              </div>

              <FaSearch
                title="Search"
                onClick={() => setShowSearch(!showSearch)}
                className="text-black text-xl cursor-pointer hover:text-orange-600"
              />
            </div>

            {/* Cart */}
            <Link href="/cart" className="relative">
              <FaShoppingCart className="text-black text-xl hover:text-orange-600" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#004d3d] text-white text-xs rounded-full px-1.5">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* Account */}
            <Link href="/account">
              <button className="text-sm text-black hover:text-orange-600 whitespace-nowrap focus:outline-none">
                My Account
              </button>
            </Link>

            {/* Sign In */}
            <button
              onClick={() => setShowDrawer(true)}
              className="text-sm text-black hover:text-orange-600 whitespace-nowrap focus:outline-none"
            >
              Sign In
            </button>
          </div>

          {showDrawer && <SignInDrawer onClose={() => setShowDrawer(false)} />}

          {/* ☰ Mobile Menu Toggle */}
          <button
            className="md:hidden text-black ml-4"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <i className="fas fa-bars text-xl"></i>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-2 space-y-2 border-t">
            {[
              { label: "Home", path: "/" },
              { label: "Contact", path: "/contact" },
              { label: "Offers", path: "/offers" },
              { label: "Why Buy With Us", path: "/why-buy" },
            ].map(({ label, path }) => (
              <button
                key={path}
                onClick={() => {
                  navigate(path);
                  setIsMobileMenuOpen(false);
                }}
                className="block w-full text-left px-4 py-2 text-black hover:bg-gray-100 focus:outline-none"
              >
                {label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
