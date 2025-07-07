// import { Link } from "wouter";

// export default function WhyBuy() {
//   return (
//     <div className="bg-[#FFF6E7] min-h-screen px-4 pt-10 pb-20">
      
//       {/* 🔶 Yellow Header Box */}
//       <div className="bg-[#fff3b0] w-full py-10">
//         <div className="max-w-7xl mx-auto px-4">
//           <h1 className="text-4xl font-bold text-[#1d1d1d] uppercase mb-4">
//             Why Buy With Us – Aaha Suvai
//           </h1>
//           <div className="text-sm text-[#1d1d1d] font-medium">
//             <Link href="/" className="hover:underline text-[#004d3d]">Home</Link>
//             <span className="mx-1">&gt;</span>
//             <span>Why Buy With Us</span>
//           </div>
//         </div>
//       </div>

//       {/* 🟩 White Content Box */}
//       <div className="max-w-7xl mx-auto mt-10 px-4">
//         <div className="bg-white shadow-md rounded-xl p-6 sm:p-10">
//           <div className="space-y-6 text-gray-700 text-sm sm:text-base leading-relaxed">
//             <section>
//               <h2 className="text-lg font-semibold text-[#003b32] mb-1">
//                 🍲 From Our Traditional Kitchen to Yours
//               </h2>
//               <p>
//                 We bring you masalas rooted in heritage, freshly crafted using age-old recipes and sent
//                 straight from our factory to your home—with love and authenticity in every pack.
//               </p>
//             </section>

//             <section>
//               <h2 className="text-lg font-semibold text-[#003b32] mb-1">
//                 💰 Factory-Direct Prices & Exclusive Offers
//               </h2>
//               <p>
//                 Being the makers, we eliminate middlemen and pass on the savings to you. Enjoy premium
//                 spice blends at affordable prices, along with special online-only offers.
//               </p>
//             </section>

//             <section>
//               <h2 className="text-lg font-semibold text-[#003b32] mb-1">
//                 🌿 Pure Ingredients, Timeless Taste
//               </h2>
//               <p>
//                 Every blend is made from handpicked, naturally sun-dried spices to retain aroma and
//                 flavor—giving your dishes that nostalgic, home-cooked feel.
//               </p>
//             </section>

//             <section>
//               <h2 className="text-lg font-semibold text-[#003b32] mb-1">
//                 🧼 Safe, Clean & Hygienic Packaging
//               </h2>
//               <p>
//                 We follow strict hygiene protocols in our factory. Each packet is safely sealed and packed
//                 with care, ensuring health and quality with every delivery.
//               </p>
//             </section>

//             <section>
//               <h2 className="text-lg font-semibold text-[#003b32] mb-1">
//                 ⏱️ Save Time, Cook Better
//               </h2>
//               <p>
//                 No more standing in queues or visiting multiple stores. Order online and get spices delivered
//                 to your doorstep—fresh, fast, and hassle-free.
//               </p>
//             </section>

//             <section>
//               <h2 className="text-lg font-semibold text-[#003b32] mb-1">
//                 ❤️ Loved by Customers
//               </h2>
//               <p>
//                 Our community of spice lovers trust AAHA SUVAI for consistent quality and taste. Check out
//                 our glowing reviews and become part of the family!
//               </p>
//             </section>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
import { Link } from "wouter";

export default function WhyBuy() {
  return (
    <div className="min-h-screen bg-[#fff6e7]">
      {/* FULL-WIDTH Yellow Banner */}
      <div className="bg-[#fff6e7] w-full py-10 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-[#1d1d1d]">
            Why Buy With Us – Aaha Suvai
          </h1>
          
            <div className="mt-2 text-[#1d1d1d] font-medium">
            {/* Home <span className="mx-1">&gt;</span> Products */}
            <span className="text-[#004d3d]">Home</span> <span className="mx-1">&gt;</span>Why Buy With Us
          </div>
        </div>
      </div>

      {/* WHITE BOX */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="bg-white shadow-md rounded-xl p-6 sm:p-10">
          <div className="space-y-6 text-gray-700 text-sm sm:text-base leading-relaxed">
            <section>
              <h2 className="text-lg font-semibold text-[#003b32] mb-1">
                 From Our Traditional Kitchen to Yours
              </h2>
              <p>
                We bring you masalas rooted in heritage, freshly crafted using
                age-old recipes and sent straight from our factory to your
                home—with love and authenticity in every pack.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-[#003b32] mb-1">
                 Factory-Direct Prices & Exclusive Offers
              </h2>
              <p>
                Being the makers, we eliminate middlemen and pass on the
                savings to you. Enjoy premium spice blends at affordable prices,
                along with special online-only offers.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-[#003b32] mb-1">
                 Pure Ingredients, Timeless Taste
              </h2>
              <p>
                Every blend is made from handpicked, naturally sun-dried spices
                to retain aroma and flavor—giving your dishes that nostalgic,
                home-cooked feel.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-[#003b32] mb-1">
                 Safe, Clean & Hygienic Packaging
              </h2>
              <p>
                We follow strict hygiene protocols in our factory. Each packet
                is safely sealed and packed with care, ensuring health and
                quality with every delivery.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-[#003b32] mb-1">
                 Save Time, Cook Better
              </h2>
              <p>
                No more standing in queues or visiting multiple stores. Order
                online and get spices delivered to your doorstep—fresh, fast,
                and hassle-free.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-[#003b32] mb-1">
                 Loved by Customers
              </h2>
              <p>
                Our community of spice lovers trust AAHA SUVAI for consistent
                quality and taste. Check out our glowing reviews and become part
                of the family!
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
