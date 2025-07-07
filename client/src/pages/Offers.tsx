
import { useState } from "react";
import { Button } from "@/components/ui/button";

const offers = [
  {
    id: 1,
    image: "/offer1.jpg",
    title: "Get extra 10% off on your order above ₹300.",
    details: "A. How do I use my coupon?\nIt’s as simple as snow! Add the ....",
    code: "AMOFF10",
  },
  {
    id: 2,
    image: "/offer2.jpg",
    title: "Get extra 20% OFF on your order above ₹450.",
    details: "A. How do I use my coupon?\nIt’s as simple as snow! Add the ....",
    code: "AMOFF20",
  },
  {
    id: 3,
    image: "/offer3.jpg",
    title: "Get flat ₹200 OFF on your orders above ₹500.",
    details: "A. How do I use my coupon?\nIt’s as simple as snow! Add the ....",
    code: "AMUFAM",
  },
  {
    id: 4,
    image: "/offer4.jpg",
    title: "Get free COD and extra 10%OFF on all orders above...",
    details: "",
    code: "AMUCOD10",
  },
  {
    id: 5,
    image: "/offer5.jpg",
    title: "Get free COD and extra 20%OFF on all orders above...",
    details: "",
    code: "AMUCOD20",
  },
  {
    id: 6,
    image: "/offer6.jpg",
    title: "Get flat ₹200 OFF on your first order above ₹500. Grab it!",
    details: "",
    code: "AMFAM200",
  },
];

export default function OffersPage() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    <div className="min-h-screen bg-[#fff6e7]">
      {/* FULL-WIDTH Yellow Banner */}
      <div className="bg-[#fff6e7] w-full py-10 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-[#1d1d1d]">Exclusive Offers Just for You!</h1>
          {/* <div className="mt-2 text-[#004d3d] font-medium">Home <span className="mx-1">&gt;</span> Offers
          </div> */}
          <div className="mt-2 text-[#1d1d1d] font-medium">
            {/* Home <span className="mx-1">&gt;</span> Products */}
            <span className="text-[#004d3d]">Home</span> <span className="mx-1">&gt;</span>Offers
          </div>
        </div>
      </div>

      {/* Main Offers Grid */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
          {offers.map((offer) => (
            <div
              key={offer.id}
              className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden hover:shadow-md transition duration-300"
            >
              <img
                src={offer.image}
                alt={`Offer ${offer.id}`}
                className="w-full h-40 object-cover sm:h-44 md:h-48"
              />
              <div className="p-4 flex flex-col justify-between">
                <h2 className="text-sm font-semibold text-gray-800 mb-1">
                  {offer.title}
                </h2>
                {/* {offer.details && (
                  // <p className="text-xs text-gray-500 mb-2 whitespace-pre-line">
                  //   {offer.details}{" "}
                  //   <span className="text-green-700 font-medium cursor-pointer hover:underline">
                  //     + View details
                  //   </span>
                  // </p>
                )} */}
                <Button
                  onClick={() => handleCopy(offer.code)}
                  className="mt-2 bg-[#004d3d] text-white hover:bg-[#006d5d] rounded px-4 py-2 w-fit"
                >
                  {copiedCode === offer.code ? "Copied!" : offer.code}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
