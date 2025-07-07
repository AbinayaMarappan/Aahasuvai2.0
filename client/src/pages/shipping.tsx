// import React from "react";

// export default function ShippingPolicy() {
//   return (
//     <div className="max-w-4xl mx-auto px-4 py-10 text-[#033e2d] font-sans">
//       <h1 className="text-3xl font-semibold mb-6 text-[#c19a6b]">
//         Shipping Policy
//       </h1>

//       <p className="mb-4">
//         At Aahasuvai Spices, we work hard to ensure that your order reaches you as quickly and safely as possible.
//       </p>

//       <ul className="list-disc pl-6 mb-6 space-y-2">
//         <li>All confirmed orders are usually dispatched within 2–3 working days of placing the order.</li>
//         <li>Once your order is dispatched, you will receive a tracking link via SMS or email for real-time updates on your shipment.</li>
//         <li>In rare cases of high order volume or stock delays, there may be a slight delay in dispatch. We will keep you informed and strive to dispatch your order as soon as possible.</li>
//       </ul>

//       <h2 className="text-2xl font-semibold mb-4 text-[#c19a6b]">Delivery Policy</h2>

//       <ul className="list-disc pl-6 mb-6 space-y-2">
//         <li>Orders are typically delivered within 14 working days from the date of dispatch, or as per the estimated delivery date provided during the order confirmation.</li>
//         <li>All deliveries will be made to the shipping address provided by you during checkout or registration.</li>
//         <li>Delivery updates and status will be sent to your registered email ID.</li>
//       </ul>

//       <p>
//         We rely on trusted courier and logistics partners to ensure timely and secure delivery of your products.
//       </p>
//     </div>
//   );
// }
import React from "react";
import { Link } from "wouter";

export default function ShippingPolicy() {
  return (
    <div className="min-h-screen bg-[#fff6e7] pb-20">
      {/* Yellow Full-Width Header */}
      <div className="bg-[#fff6e7] w-full py-10 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-[#1d1d1d]">Shipping Policy</h1>
          <div className="mt-2 text-[#1d1d1d] font-medium text-sm">
            <Link href="/" className="text-[#004d3d] hover:underline">Home</Link>
            <span className="mx-1">&gt;</span> Shipping Policy
          </div>
        </div>
      </div>

      {/* White Box Content */}
      <div className="max-w-5xl mx-auto bg-white shadow-md rounded-xl px-6 py-8 mt-10 text-gray-800 text-sm sm:text-base leading-relaxed">
        {/* <p className="mb-4">Timely and Secure Order Delivery</p> */}
        <h2 className="text-lg font-semibold text-[#1d1d1d] mt-6 mb-2">Timely and Secure Order Delivery</h2>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>All confirmed orders are usually dispatched within 2–3 working days of placing the order.</li>
          <li>Once your order is dispatched, you will receive a tracking link via SMS or email for real-time updates on your shipment.</li>
          <li>In rare cases of high order volume or stock delays, there may be a slight delay in dispatch. We will keep you informed and strive to dispatch your order as soon as possible.</li>
        </ul>

        <h2 className="text-lg font-semibold text-[#1d1d1d] mt-6 mb-2">Delivery Policy</h2>

        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>Orders are typically delivered within 14 working days from the date of dispatch, or as per the estimated delivery date provided during the order confirmation.</li>
          <li>All deliveries will be made to the shipping address provided by you during checkout or registration.</li>
          <li>Delivery updates and status will be sent to your registered email ID.</li>
        </ul>

        <p>
          We rely on trusted courier and logistics partners to ensure timely and secure delivery of your products.
        </p>
      </div>
    </div>
  );
}
