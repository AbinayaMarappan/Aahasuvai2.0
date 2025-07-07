import SignIn from "@/pages/SignIn"; // Adjust this import path to match your file structure
import { useCart } from "@/context/CartContext";
import { useState } from "react";
import emt from ".././assets/cart-removebg-preview.png"

export default function CartPage() {
  const { cartItems, updateCount, removeFromCart } = useCart();
  const total = cartItems.reduce((sum, item) => {
  const salePrice = item.price[item.selectedWeight]?.sale || 0;
  return sum + salePrice * item.count;
}, 0);
  const [showSignIn, setShowSignIn] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("online");

  return (
    <div className="relative min-h-screen bg-[#fff6e7] text-[#004d3d] font-sans overflow-x-hidden">
      {/* Top Yellow Banner */}
              <div className="bg-[#fff6e7] w-full py-10 px-6">

            {/* Home <span className="mx-1">&gt;</span> Products */}

          
        
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-[#1d1d1d]">Cart</h1>
          {/* <p className="text-sm text-[#004d3d]">Home &gt; <span className="text-black">Cart</span></p> */}
          <div className="mt-2 text-[#1d1d1d] font-medium">
            {/* Home <span className="mx-1">&gt;</span> Products */}
            <span className="text-[#004d3d]">Home</span> <span className="mx-1">&gt;</span>Cart

          </div>
        </div>
      </div>
      {/* Cart Content */}
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left: Product List */}
        <div className="md:col-span-2 space-y-6">
          {cartItems.length === 0 ? (
            // <p className="text-center text-xl col-span-3">🛒 Your cart is empty.</p>
//             <div className="col-span-3 flex justify-center items-center">
//   <img
//     src={emt} // 🛒 replace with your image path
//     alt="Empty Cart"
//     className="w-60 h-60 object-contain"
//   />

// <p className="text-center text-lg text-gray-700">🛒 Your cart is empty.</p>
// </div>
<div className="col-span-3 flex flex-col items-center">
  <img
    src={emt}
    alt="Empty Cart"
    className="w-75h-75 object-contain mb-4"
  />
  <p className="text-center text-lg text-gray-700"> Your cart is empty.</p>
</div>


          ) : (
            <table className="w-full text-left border-collapse">
              <thead className="text-sm font-bold border-b">
                <tr className="text-[#004d3d]">
                  <th className="py-2">PRODUCT</th>
                  <th className="py-2">UNIT PRICE</th>
                  <th className="py-2">QUANTITY</th>
                  <th className="py-2">SUB TOTAL</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id} className="border-b">
                    <td className="py-4 flex items-center gap-3">
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-Black-400 hover:text-red-500 text-xl"
                      >
                        ✕
                      </button>
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-12 h-12 object-contain"
                      />
                      <span className="font-medium text-sm">{item.name}</span>
                    </td>
                    <td>₹{item.price[item.selectedWeight].sale.toFixed(2)}</td>
                    <td className="py-4">
                      <div className="flex items-center gap-2">
                      <button
                                onClick={() => {
                  if (item.count === 1) {
                    removeFromCart(item.id);
                  } else {
                    updateCount(item.id, -1);
                  }
                }}

                className="w-7 h-7 flex items-center justify-center rounded-full bg-[#004d3d] text-white text-sm"
              >
                -
              </button>
{/* <span className="font-medium text-sm">{item.count}</span> */}
<span className="font-medium text-sm min-w-[2ch] text-center">{item.count}</span>

<button
  onClick={() => updateCount(item.id, 1)}
  className="w-7 h-7 flex items-center justify-center rounded-full bg-[#004d3d] text-white text-sm"
>
  +
</button>
</div>

                    </td>
                   <td>₹{(item.price[item.selectedWeight].sale * item.count).toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>

        {/* Right: Summary - New Layout */}
        <div className="bg-white rounded-xl shadow p-6 space-y-4 h-fit">
          <h3 className="text-lg font-bold">Bill Details</h3>

          <div className="space-y-4">
            <fieldset>
              <legend className="text-sm font-semibold mb-2">Select Payment Method</legend>
              <div className="space-y-2">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    value="online"
                    checked={paymentMethod === "online"}
                    onChange={() => setPaymentMethod("online")}
                  />
                  Online Payment <span className="text-xs text-gray-500">(Available for orders above ₹150)</span>
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    value="cod"
                    checked={paymentMethod === "cod"}
                    onChange={() => setPaymentMethod("cod")}
                  />
                  Cash on Delivery <span className="text-xs text-gray-500">(Available for orders above ₹300)</span>
                </label>
              </div>
            </fieldset>

            <div>
              <p className="text-sm font-semibold mb-1">Apply coupon</p>
              <input
                type="text"
                placeholder="Enter coupon code"
                className="w-full border px-3 py-2 rounded"
              />
              <p className="text-xs text-gray-500 mt-1">3 coupons available for cod payment</p>
            </div>

            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Cart total</span>
                <span>₹{total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
  <span>Delivery Charges</span>
  {total > 499 ? (
    <span className="text-green-600">Free</span>
  ) : (
    <span className="text-red-600">₹50</span>
  )}
</div>

              <hr />
              <div className="flex justify-between font-semibold text-base">
                <span>To Pay</span>
                {/* <span>₹{total.toFixed(2)}</span> */}
                <span>₹{(total <= 499 ? total + 50 : total).toFixed(2)}</span>
              </div>
            </div>

            <div className="mt-6">
              <h4 className="text-md font-bold">BILLING ADDRESS</h4>
              <div className="mt-2 bg-[#e8f5e9] p-3 rounded text-center text-sm font-medium text-[#004d3d]">
                You should login to add address
              </div>

              <button
                onClick={() => setShowSignIn(true)}
                className="w-full bg-[#004d3d] text-white py-3 mt-4 rounded-full font-semibold hover:bg-[#006d5d]"
              >
                Login now
              </button>

              <button
                disabled
                className="w-full bg-gray-300 text-gray-600 py-3 mt-2 rounded-full font-semibold cursor-not-allowed"
              >
                PROCEED FOR PAYMENT
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Sidebar SignIn Drawer */}
      {showSignIn && (
        <div className="fixed top-0 right-0 w-full max-w-md h-full bg-white shadow-lg z-50 transition-transform duration-300 transform translate-x-0 overflow-y-auto">
          <div className="flex justify-end p-4">
            <button
              onClick={() => setShowSignIn(false)}
              className="text-2xl text-gray-600 hover:text-red-600"
            >
              ×
            </button>
          </div>
          <div className="p-4 bg-white">
            <SignIn />
          </div>
        </div>
      )}
    </div>
  );
}
