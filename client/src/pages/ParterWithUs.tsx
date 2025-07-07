import React from "react";
import factory from "@/assets/factory.jpg";
import delivery from "@/assets/delivery.avif";
import discount from "@/assets/discount.png";
import adsupport from "@/assets/adsupport.jpg";
import { motion } from "framer-motion";

const cards = [
  { title: "Direct Supply", img: factory, delay: 0, from: "left" },
  { title: "Doorstep Delivery", img: delivery, delay: 0.2, from: "right" },
  { title: "Attractive Schemes", img: discount, delay: 0.4, from: "left" },
  { title: "Marketing Support", img: adsupport, delay: 0.6, from: "right" },
];

export default function PartnerWithUs() {
  return (
    <section className="bg-[#004d3d] py-16 text-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
         <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-[#fff6e7]">
            Why Become a Distributor with Aahasuvai?
          </h2>
          </div>
        {/* LEFT: Animated Cards */}
        <div className="grid grid-cols-2 gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: card.from === "left" ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: card.delay }}
              viewport={{ once: true }}
              className="bg-white text-[#004d3d] rounded-lg overflow-hidden shadow-lg"
            >
              <img
                src={card.img}
                alt={card.title}
                className="w-full h-32 object-contain bg-white"
              />
              <div className="bg-gradient-to-t from-[#caa76a] to-[#fefae0] text-center py-2 font-semibold">
                {card.title}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      {/* Distributor Form Centered Below the Card Grid */}
<div className="max-w-2xl mx-auto bg-[#fff6e7] text-[#004d3d] rounded-xl p-8 shadow-xl mt-12">
  <h3 className="text-2xl font-bold mb-6 text-center">Become a Distributor</h3>
  <form className="space-y-4">
    <input
      type="text"
      placeholder="Name"
      className="w-full border border-gray-400 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#004d3d]"
    />
    <input
      type="text"
      placeholder="Company Name"
      className="w-full border border-gray-400 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#004d3d]"
    />
    <input
      type="tel"
      placeholder="Phone Number"
      className="w-full border border-gray-400 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#004d3d]"
    />
    <input
      type="text"
      placeholder="GST Number"
      className="w-full border border-gray-400 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#004d3d]"
    />
    <button
      type="submit"
      className="w-full bg-[#004d3d] text-white font-semibold py-2 px-4 rounded-full hover:bg-[#006d5d] transition"
    >
      Submit
    </button>
  </form>
</div>
    </section>
  );
}