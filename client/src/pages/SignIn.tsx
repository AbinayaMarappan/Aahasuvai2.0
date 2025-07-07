import { useState, FormEvent } from "react";
import googleIcon from "../assets/google-icon.png"; 
export default function SignIn() {
  const [step, setStep] = useState<number>(1);
  const [phone, setPhone] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [otp, setOtp] = useState<string>("");
const [countryCode, setCountryCode] = useState<string>("91");
        const [phoneError, setPhoneError] = useState<string>("");
  const handleNextFromName = (e: FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      setStep(3);
    }
  };
  const countryOptions = [
  { name: "India", code: "91", flag: "🇮🇳" },
  { name: "United States", code: "1", flag: "🇺🇸" },
  { name: "United Kingdom", code: "44", flag: "🇬🇧" },
  { name: "Australia", code: "61", flag: "🇦🇺" },
  { name: "United Arab Emirates", code: "971", flag: "🇦🇪" },
  { name: "Germany", code: "49", flag: "🇩🇪" },
  { name: "France", code: "33", flag: "🇫🇷" },
  { name: "Canada", code: "1", flag: "🇨🇦" },
  { name: "Pakistan", code: "92", flag: "🇵🇰" },
  { name: "Sri Lanka", code: "94", flag: "🇱🇰" },
];


  const handleOtpSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (otp === "1234") {
      alert("Login Successful!");
    } else {
      alert("Invalid OTP");
    }
  };
const handleNextFromPhone = (e: FormEvent) => {
  e.preventDefault();
  if (phone.length !== 10) {
    setPhoneError("Please enter a correct phone number.");
    return;
  }
  setPhoneError("");
  setStep(2);
};
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fff6e7] px-4">
      <div className="max-w-sm w-full bg-white p-6 rounded shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

{/* Google Sign-In */}
<div className="space-y-3 mb-6">
  <button
    type="button"
    onClick={() => alert("Google Sign-In (to be implemented)")}
    className="w-full border border-gray-300 py-2 px-4 rounded flex items-center justify-center gap-2 hover:bg-gray-100"
  >
    <img src={googleIcon} alt="Google" className="w-5 h-5" />
    <span className="text-sm font-medium text-gray-700">Continue with Google</span>
  </button>

  <div className="flex items-center justify-center gap-2">
    <hr className="flex-1 border-t border-gray-300" />
    <span className="text-xs text-gray-500">or</span>
    <hr className="flex-1 border-t border-gray-300" />
  </div>
</div>
      {step === 1 && (
  <form onSubmit={handleNextFromPhone} className="space-y-4">
    <label className="block text-sm font-medium text-gray-700">Phone Number *</label>
    <div className={`flex border rounded px-3 py-2 items-center gap-2 ${phoneError ? "border-red-500" : ""}`}>
<select
  value={countryCode}
  onChange={(e) => setCountryCode(e.target.value)}
  className="outline-none text-gray-700 bg-transparent"
>
  {countryOptions.map((country) => (
    <option key={country.code} value={country.code}>
      +{country.code} {country.flag}
    </option>
  ))}
</select>

      <input
        type="tel"
        value={phone}
        onChange={(e) => {
          const value = e.target.value;
          if (/^\d{0,10}$/.test(value)) {
            setPhone(value);
            setPhoneError(""); // Clear error on valid input
          }
        }}
        placeholder="Enter 10-digit number"
        className="flex-1 outline-none"
        required
      />
    </div>

    {phoneError && <p className="text-sm text-red-500">{phoneError}</p>}

    <button
      type="submit"
      className="w-full bg-[#003b32] text-white py-2 rounded font-semibold hover:bg-[#005547]"
    >
      LOGIN
    </button>
  </form>
  
)}

        {/* Step 2: Enter name */}
        {step === 2 && (
  <form onSubmit={handleNextFromName} className="space-y-4">
    <label className="block text-sm font-medium text-gray-700">Your Phone Number</label>
    <div className="w-full border px-4 py-2 rounded text-gray-800 bg-gray-100">
      +91 {phone}
    </div>

    <label className="block text-sm font-medium text-gray-700">Name *</label>
    <input
      type="text"
      value={name}
      onChange={(e) => setName(e.target.value)}
      placeholder="Enter your name"
      className="w-full border px-4 py-2 rounded"
      required
    />
    <button
      type="submit"
      className="w-full bg-[#003b32] text-white py-2 rounded font-semibold hover:bg-[#005547]"
    >
      SEND OTP
    </button>
  </form>
)}
{/* Step 3: Enter OTP */}
        {step === 3 && (
          <form onSubmit={handleOtpSubmit} className="space-y-4">
            <label className="block text-sm font-medium text-gray-700">Enter OTP</label>
            <input
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              placeholder="Enter OTP (try 1234)"
              className="w-full border px-4 py-2 rounded"
              required
            />
            <button
              type="submit"
              className="w-full bg-[#003b32] text-white py-2 rounded font-semibold hover:bg-[#005547]"
            >
              VERIFY & LOGIN
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

//new 

