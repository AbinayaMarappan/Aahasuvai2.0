import React, { useState, useEffect } from "react";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import slider1 from '@/assets/Slider1.jpg';
import slider2 from '@/assets/Slider4.jpg';
import slider3 from '@/assets/Slider5.jpg';

const images = [slider1, slider2, slider3];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirst = currentIndex === 0;
    const newIndex = isFirst ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLast = currentIndex === images.length - 1;
    const newIndex = isLast ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  // 🔁 Auto-slide every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 2000); 

    return () => clearInterval(interval); // Cleanup
  }, [currentIndex]); // Update when currentIndex changes

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex}`}
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
      />

      {/* Overlay (if needed) */}
      <div className="w-full h-full object-cover"></div>

      {/* Arrows */}
      {/* <div className="absolute z-20 inset-0 flex items-center justify-between px-6">
        <button
          onClick={goToPrevious}
          className="text-white text-3xl p-3 bg-black bg-opacity-0 rounded-full hover:bg-opacity-60 transition"
        >
          <FaArrowLeft />
        </button>
        <button
          onClick={goToNext}
          className="text-white text-3xl p-3 bg-black bg-opacity-0 rounded-full hover:bg-opacity-60 transition"
        >
          <FaArrowRight />
        </button>
      </div> */}
      {/* Clickable Left & Right Overlay for Navigation */}
<div className="absolute inset-0 z-10 flex justify-between">
  {/* Left Side - Previous */}
  <div
    onClick={goToPrevious}
    className="w-1/2 h-full cursor-pointer"
  ></div>

  {/* Right Side - Next */}
  <div
    onClick={goToNext}
    className="w-1/2 h-full cursor-pointer"
  ></div>
</div>

    </section>
  );
}
