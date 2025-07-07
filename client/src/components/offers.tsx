
import { Link } from "wouter"; // or "react-router-dom" if you're using that
import offerImage from "@/assets/offersimage.jpg"; // update path if needed

export default function Offers() {
  return (
    <section className="py-12 bg-[#fff0e0]">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
        {/* 📷 Offer Image */}
        
{/* <Link href="/offers">
  <div className="w-full md:w-1/2 cursor-pointer">
    <img
      src={offerImage}
      alt="Special Offer"
      className="rounded-lg shadow-md w-full object-cover transition duration-200 hover:opacity-90"
    />
  </div>
</Link> */}

<Link href="/offers">
  <div className="w-full px-4 md:px-10 cursor-pointer">
    <img
      src={offerImage}
      alt="Special Offer"
      className="rounded-lg shadow-md w-full h-60 md:h-80 object-cover transition duration-200 hover:opacity-90"
    />
  </div>
</Link>


        </div>
    </section>
  );
}

