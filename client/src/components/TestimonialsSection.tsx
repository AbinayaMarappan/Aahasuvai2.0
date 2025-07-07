// export default function TestimonialsSection() {
//   const testimonials = [
//     {
//       name: "Priya Sharma",
//       location: "Home Chef, Mumbai",
//       testimonial:
//         "The quality of spices from Aahasuvai Masala is exceptional. The aroma and flavor of their garam masala reminds me of my grandmother's cooking. Absolutely authentic!",
//       initial: "P",
//       gradient: "from-[#004d3d] to-[#5f8577]",
//     },
//     {
//       name: "Chef Rajesh Kumar",
//       location: "Executive Chef, Bangalore",
//       testimonial:
//         "As a professional chef, I demand the best ingredients. Aahasuvai Masala consistently delivers premium quality spices that elevate every dish I create.",
//       initial: "R",
//       gradient: "from-[#4c7e68] to-[#004d3d]",
//     },
//     {
//       name: "Mrs. Meera Patel",
//       location: "Loyal Customer, Chennai",
//       testimonial:
//         "Three generations of our family have used Aahasuvai Masala. The consistency in quality and authentic taste keeps us coming back. Truly a heritage brand!",
//       initial: "M",
//       gradient: "from-[#6b9a87] to-[#004d3d]",
//     },
//   ];

//   return (
//     <section className="py-20 bg-[#fff6e7]">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="font-playfair text-4xl md:text-5xl font-bold text-[#004d3d] mb-4">
//             What Our Customers Say
//           </h2>
//           <p className="text-xl text-[#004d3d] opacity-80 max-w-3xl mx-auto">
//             Hear from families who have made Aahasuvai a part of their culinary journey
//           </p>
//         </div>

//         <div className="grid md:grid-cols-3 gap-8">
//           {testimonials.map((testimonial, index) => (
//             <div
//               key={index}
//               className="bg-white border border-[#c2bfb8] rounded-2xl p-8 hover:shadow-md transition-shadow duration-300"
//             >
//               <div className="flex items-center mb-6">
//                 <div className="flex text-yellow-400 text-lg">
//                   {[...Array(5)].map((_, i) => (
//                     <i key={i} className="fas fa-star"></i>
//                   ))}
//                 </div>
//               </div>
//               <p className="text-[#004d3d] mb-6 leading-relaxed opacity-90">
//                 "{testimonial.testimonial}"
//               </p>
//               <div className="flex items-center">
//                 <div
//                   className={`w-12 h-12 bg-gradient-to-r ${testimonial.gradient} rounded-full flex items-center justify-center mr-4`}
//                 >
//                   <span className="text-white font-semibold">{testimonial.initial}</span>
//                 </div>
//                 <div>
//                   <div className="font-semibold text-[#004d3d]">{testimonial.name}</div>
//                   <div className="text-sm text-[#004d3d] opacity-70">{testimonial.location}</div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Priya Sharma",
      location: "Home Chef, Mumbai",
      testimonial:
        "The quality of spices from Aahasuvai Masala is exceptional. The aroma and flavor of their garam masala reminds me of my grandmother's cooking. Absolutely authentic!",
      initial: "P",
      gradient: "from-[#004d3d] to-[#5f8577]",
    },
    {
      name: "Chef Rajesh Kumar",
      location: "Executive Chef, Bangalore",
      testimonial:
        "As a professional chef, I demand the best ingredients. Aahasuvai Masala consistently delivers premium quality spices that elevate every dish I create.",
      initial: "R",
      gradient: "from-[#4c7e68] to-[#004d3d]",
    },
    {
      name: "Mrs. Meera Patel",
      location: "Loyal Customer, Chennai",
      testimonial:
        "Three generations of our family have used Aahasuvai Masala. The consistency in quality and authentic taste keeps us coming back. Truly a heritage brand!",
      initial: "M",
      gradient: "from-[#6b9a87] to-[#004d3d]",
    },
  ];

  return (
    <section className="py-20 bg-[#fff6e7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-[#004d3d] mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-[#004d3d] opacity-80 max-w-3xl mx-auto">
            Hear from families who have made Aahasuvai a part of their culinary journey
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white border border-[#c2bfb8] rounded-2xl p-8 hover:shadow-md transition-shadow duration-300 flex flex-col"
            >
              {/* Stars */}
              <div className="flex items-center mb-6">
                <div className="flex text-yellow-400 text-lg">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="fas fa-star"></i>
                  ))}
                </div>
              </div>

              {/* Testimonial Message */}
              <p className="text-[#004d3d] mb-6 leading-relaxed opacity-90 flex-1">
                "{testimonial.testimonial}"
              </p>

              {/* Name + Initials pinned at bottom */}
              <div className="mt-auto flex items-center pt-4 border-t border-[#e5e5e5]">
                <div
                  className={`w-12 h-12 bg-gradient-to-r ${testimonial.gradient} rounded-full flex items-center justify-center mr-4`}
                >
                  <span className="text-white font-semibold text-lg">
                    {testimonial.initial}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-[#004d3d]">{testimonial.name}</div>
                  <div className="text-sm text-[#004d3d] opacity-70">
                    {testimonial.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
