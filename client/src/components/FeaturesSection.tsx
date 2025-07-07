import naturalIcon from '@/assets/Natural.jpeg';
import qualityIcon from '@/assets/Premium.jpeg';
import legacyIcon from '@/assets/source.jpeg';

export default function FeaturesSection() {
  const features = [
    {
      image: naturalIcon,
      title: "100% Natural",
      description: "No artificial colors, preservatives, or additives. Pure, authentic spices sourced directly from farmers.",
      gradient: "from-spice-orange to-deep-amber"
    },
    {
      image: qualityIcon,
      title: "Premium Quality",
      description: "Hand-selected spices ground using traditional methods to preserve authentic flavors and nutrients.",
      gradient: "from-spice-red to-spice-orange"
    },
    {
      image: legacyIcon,
      title: "Source from best farms",
      description: "Sourced from the finest farms to ensure unmatched freshness and authenticity in every spice.",
      gradient: "from-fresh-green to-spice-orange"
    }
  ];

  return (
    <section className="py-20 bg-white">
    {/* <section className="py-20 bg-beige"> */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
       <h2 className="font-dmserif text-4xl md:text-5xl font-normal text-rich-brown mb-4">
  Why Choose Aahasuvai?
</h2>
          {/* <h2 className="font-playfair text-4xl md:text-5xl font-bold text-rich-brown mb-4">Why Choose Aahasuvai?</h2> */}
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">The raw materials of our products are carefully chosen from the regions of India where each raw material is well known for, so that we can provide best flavor to our products and utmost taste to our customers.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className={`w-20 h-20 bg-gradient-to-r ${feature.gradient} rounded-full overflow-hidden mx-auto mb-6 group-hover:shadow-lg transition-shadow duration-300`}>
                <img src={feature.image} alt={feature.title} className="w-full h-full object-cover rounded-full" />
              </div>
              <h3 className="font-playfair text-2xl font-semibold text-rich-brown mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}