// import React from "react";

// export default function Privacy() {
//   return (
//     <div className="max-w-4xl mx-auto px-4 py-10 text-gray-800">
//       <h1 className="text-2xl font-bold mb-6 text-green-900">Copyright & Trademark Policy</h1>

//       <p className="mb-4">
//         All content, files, and information available on this website <strong>https://www.aahasuvai.in</strong> are the
//         exclusive property of Aahasuvai Spices and are protected by applicable copyright and trademark laws.
//       </p>
//       <p className="mb-4">
//         No part of this website may be copied, reproduced, or used without written permission from Aahasuvai Foods.
//       </p>
//       <ul className="list-disc ml-6 mb-4">
//         <li>Do not reuse our content or branding</li>
//         <li>Do not distribute or resell any material</li>
//         <li>Written consent is required for any commercial use</li>
//       </ul>
//       <p>By using our website, you agree to abide by these terms.</p>
//     </div>
//   );
// }
import React from "react";
import { Link } from "wouter";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-[#fff6e7] pb-20">
      {/* Yellow Full-Width Header */}
      <div className="bg-[#fff6e7] w-full py-10 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-[#1d1d1d]">Copyright & Trademark Policy</h1>
          <div className="mt-2 text-[#1d1d1d] font-medium text-sm">
            <Link href="/" className="text-[#004d3d] hover:underline">Home</Link>
            <span className="mx-1">&gt;</span> Copyright
          </div>
        </div>
      </div>

      {/* White Box Content */}
      <div className="max-w-5xl mx-auto bg-white shadow-md rounded-xl px-6 py-8 mt-10 text-gray-800 text-sm sm:text-base leading-relaxed">
        <p className="mb-4">
          All content, files, and information available on this website <strong>https://www.aahasuvai.in</strong> are the
          exclusive property of Aahasuvai Spices and are protected by applicable copyright and trademark laws.
        </p>
        <p className="mb-4">
          No part of this website may be copied, reproduced, or used without written permission from Aahasuvai Foods.
        </p>
        <ul className="list-disc ml-6 mb-4">
          <li>Do not reuse our content or branding</li>
          <li>Do not distribute or resell any material</li>
          <li>Written consent is required for any commercial use</li>
        </ul>
        <p>By using our website, you agree to abide by these terms.</p>
      </div>
    </div>
  );
}
