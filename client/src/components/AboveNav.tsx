
import React from "react";
import { Link } from "react-router-dom";

const AboveNav: React.FC = () => {
  return (
    <div className="bg-[#004d3d] text-white text-sm px-4 py-2">
        <div className="w-full flex justify-between items-center">

        {/* Left Side Text */}
        <p className="text-xs sm:text-sm">Free Delivery | Free COD on orders above Rs.499</p>

        {/* Right Side Links */}
        <div className="space-x-4 text-xs sm:text-sm whitespace-nowrap">
  <Link
    to="/about"
    className="hover:underline focus:underline sm:hover:underline transition-all"
  >
    ABOUT US
  </Link>
  <Link
    to="/partner"
    className="hover:underline focus:underline sm:hover:underline transition-all"
  >
    PARTNER WITH US
  </Link>
</div>


      </div>
    </div>
    
  );
};

export default AboveNav;