import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import ProductCatalog from "@/components/ProductCatalog";
import TestimonialsSection from "@/components/TestimonialsSection";
import  Offers from "@/components/offers";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <HeroSection />
      <FeaturesSection />
      <ProductCatalog />
      <Offers />
      <TestimonialsSection />
    </div>
  );
}
