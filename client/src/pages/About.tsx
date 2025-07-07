
import { motion } from "framer-motion";
import about1 from "@/assets/about1.jpg";
import about2 from "@/assets/about2.jpg";
import about3 from "@/assets/about4.jpg";

export default function About() {
  const sections = [
    {
      title: "Aahasuvai – A Taste of Pure Spice",
      content:
        "Rooted in the warmth of our grandmother’s kitchen, Aahasuvai brings to life a legacy of authentic taste. With decades of love and learning, our spice blends are a tribute to tradition, carefully curated using premium spices sourced from the finest regions across India.",
      image: about1,
      reverse: false,
    },
    {
      title: "What We Stand For",
      content:
        "What makes Aahasuvai unique is not just the quality — it’s the process. Our raw spices are sun-dried naturally, preserving their aroma, flavor, and medicinal value. Each masala is blended with innovation and tradition, ensuring a rich, consistent taste that reminds you of home.",
      image: about2,
      reverse: true,
    },
    {
      title: "Looking Ahead",
      content:
        "From everyday essentials like turmeric, cumin, and chilli powder to signature blends for South Indian specialties, Aahasuvai spices are a celebration of purity and taste. Packed with care using modern techniques, we lock in freshness and goodness without compromise. We are dedicated to bringing you a Healthy Feast, one spice at a time.",
      image: about3,
      reverse: false,
    },
    {
      title: "Our Story: The History of Aaha Suvai",
      content: `Aaha Suvai was born from the heart of a humble kitchen, where generations of tradition, love, and spices came together. It all began in a small South Indian village, where our grandmother     would wake before dawn, handpicking and sun-drying the finest spices to prepare her signature masala  blends. Her cooking was more than food—it was a celebration of culture, family, and authenticity.  Inspired by her legacy, we set out to preserve these cherished recipes and bring them to kitchens around the world. With every blend we create, we honor her methods—slow, mindful, and pure.We don’t believe in shortcuts. Our spices are sourced from the best regions of India, dried naturally, and ground with care, ensuring that each packet carries the aroma, flavor, and emotion of home-cooked food.Today, Aaha Suvai stands as a symbol of timeless taste and unmatched quality. We aim to reconnect people with their roots  through the power of food, offering spice mixes that carry stories of warmth, heritage, and the joy of true flavor.`,

      image: about1, // Reusing the first image
      reverse: true,
    },
  ];

  return (
    <section className="py-16 bg-[#fff6e7]" style={{ color: " #004d3d" }}>
      <div className="max-w-6xl mx-auto px-6 space-y-24">
        {sections.map((sec, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: sec.reverse ? 100 : -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className={`flex flex-col md:flex-row ${
              sec.reverse ? "md:flex-row-reverse" : ""
            } items-center gap-10`}
          >
            <img
              src={sec.image}
              alt={sec.title}
              className="w-full md:w-1/2 rounded-2xl shadow-md object-cover h-64 md:h-96"
            />
            <div className="md:w-1/2 whitespace-pre-line">
              <h2 className="text-3xl font-bold mb-4">{sec.title}</h2>
              <p className="text-lg leading-relaxed">
                {sec.content}
                {i === sections.length - 1 && (
                  <span className="block mt-6 bg-[#004d3d] text-[#fff6e7] font-semibold px-4 py-3 rounded-xl shadow-md">
                    From our grandmother’s hands to your kitchen — Aaha Suvai is
                    not just a brand. It's a tradition.
                  </span>
                )}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
