

import { Link } from "wouter";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import ship from "@/assets/shiprocket.avif";
import razor from "@/assets/razor.jpeg";
import logo from "@/assets/Asset 26[1].png"; // ✅ import your logo here

export default function Footer() {
  return (
    <footer className="relative bg-[#033e2d] text-[#fff6e7] text-xs w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8 py-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-10">

        {/* Address */}
        <div>
          <h2 className="text-sm font-semibold text-[#c19a6b] mb-2">Address</h2>
          <p>
            Aahasuvai Spices,<br />
            30/147, Kuppanna Chettiyar Street,<br />
            Tiruppur, Tamil Nadu – 641604, India
          </p>
          <p className="mt-1">Phone: +91 9361360885</p>
          <p>Email: aahasuvaispices@gmail.com</p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-sm font-semibold text-[#c19a6b] mb-1">Quick Links</h2>
          <ul className="space-y-0.5">
            <li><Link href="/about" className="text-xs hover:underline">About us</Link></li>
            <li><Link href="/products" className="text-xs hover:underline">Products</Link></li>
            <li><Link href="/faq" className="text-xs hover:underline">FAQ</Link></li>
            <li><Link href="/account" className="text-xs hover:underline">My Account</Link></li>
          </ul>
        </div>

        {/* Policies */}
        <div>
          <h2 className="text-sm font-semibold text-[#c19a6b] mb-1">Policies</h2>
          <ul className="space-y-0.5">
            <li><Link href="/privacy" className="text-xs hover:underline">Privacy Policy</Link></li>
            <li><Link href="/return-refund" className="text-xs hover:underline">Return & Refund</Link></li>
            <li><Link href="/copyright" className="text-xs hover:underline">Copyright</Link></li>
            <li><Link href="/terms" className="text-xs hover:underline">Terms & Conditions</Link></li>
            <li><Link href="/shipping-policy" className="text-xs hover:underline">Shipping Policy</Link></li>
          </ul>
        </div>

        {/* Shipping Partner + Social Media */}
        <div>
          <h2 className="text-sm font-semibold text-[#c19a6b] mb-2">Shipping Partner</h2>
          <div className="flex items-center gap-3 mb-3 flex-wrap">
            <img src={ship} alt="Shiprocket" className="h-5" />
          </div>
          <h2 className="text-sm font-semibold text-[#c19a6b] mb-2">Payment Partner</h2>
          <div className="flex items-center gap-3 mb-3 flex-wrap">
            <img src={razor} alt="Cashfree" className="h-5" />
          </div>
          <h2 className="text-sm font-semibold text-[#c19a6b] mb-2">Social Media</h2>
          <div className="flex items-center gap-2">
            <a href="https://www.facebook.com/profile.php?id=61577287032123" target="_blank" rel="noopener noreferrer" className="w-7 h-7 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700">
              <FaFacebookF className="text-white text-xs" />
            </a>
            <a href="https://www.instagram.com/aahasuvai_/" target="_blank" rel="noopener noreferrer" className="w-7 h-7 bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 rounded-full flex items-center justify-center hover:opacity-90">
              <FaInstagram className="text-white text-xs" />
            </a>
            <a href="https://www.linkedin.com/in/aahasuvai-spices" target="_blank" rel="noopener noreferrer" className="w-7 h-7 bg-blue-800 rounded-full flex items-center justify-center hover:bg-blue-900">
              <FaLinkedinIn className="text-white text-xs" />
            </a>
          </div>
        </div>
      </div>
            
<div className="border-t border-[#c19a6b] py-3 text-center text-xs">
  &copy; 2025 Aahasuvai. All Rights Reserved.
</div>


<div className="px-4 pb-3 flex justify-end">
  <div className="text-[10px] text-[#c19a6b] text-right">
    <p>Designed and managed by</p>
    <a href="http://www.onekit.in" target="_blank" rel="noopener noreferrer">
      <img src={logo} alt="Logo" className="h-6 mt-1 ml-auto" />
    </a>
  </div>
</div>


    </footer>
  );
}
