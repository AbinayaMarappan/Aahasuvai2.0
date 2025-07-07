// import React from "react";

// export default function Copyright() {
//   return (
//     <div className="max-w-4xl mx-auto px-4 py-10 text-[#033e2d] font-sans">
//       <h1 className="text-3xl font-semibold mb-6 text-[#c19a6b]">
//         Copyright Policy
//       </h1>

//       <h2 className="text-2xl font-semibold mb-4 text-[#c19a6b]">
//         Trademark, Copyright & Restriction
//       </h2>

//       <p className="mb-4">
//         All content, files, and information available on this website{" "}
//         <a href="https://www.aahasuvai.in" className="text-[#c19a6b] underline">
//           https://www.aahasuvai.in
//         </a>{" "}
//         are the exclusive property of Aahasuvai Spices and are protected by applicable
//         copyright and trademark laws.
//       </p>

//       <p className="mb-4">
//         Unless explicitly stated, no part of this website may be duplicated, copied, reproduced,
//         modified, republished, uploaded, posted, transmitted, or distributed in any form or by any
//         means — either electronically or mechanically — without prior written permission from
//         Aahasuvai Foods.
//       </p>

//       <p className="mb-4">
//         Our website may include registered and unregistered trademarks, logos, and brand elements
//         that belong to Aahasuvai Spices or its affiliates. Use of these trademarks or logos without
//         authorization is strictly prohibited.
//       </p>

//       <p className="mb-4">
//         If any of the content holds personal or commercial value for your use — such as for publishing
//         on another website, digital platform, or printed medium — you must obtain express written
//         consent from us beforehand. Any use of our materials in a commercial context (including for
//         profit or promotion) without consent will be considered a violation and may invite legal action.
//       </p>

//       <p className="mb-4">
//         You may use the content of this website only for personal, non-commercial purposes,
//         provided that such use does not violate any copyright, trademark, or proprietary rights
//         of Aahasuvai Spices.
//       </p>

//       <p className="mb-4">
//         By using this website, you agree:
//       </p>

//       <ul className="list-disc pl-6 mb-6 space-y-2">
//         <li>Not to reproduce or distribute any content from this site in any form,</li>
//         <li>Not to assist others in such acts, and</li>
//         <li>Not to imply ownership or association with our content or branding in any form.</li>
//       </ul>

//       <p className="mb-4">
//         Please be advised that your use of our website and services does not grant you ownership
//         rights or licenses to any part of the content, design, or materials presented.
//       </p>
//     </div>
//   );
// }
import React from "react";
import { Link } from "wouter";

export default function Copyright() {
  return (
    <div className="min-h-screen bg-[#fff6e7] pb-20">
      {/* Yellow Full-Width Header */}
      <div className="bg-[#fff6e7] w-full py-10 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-[#1d1d1d]">Copyright Policy</h1>
          <div className="mt-2 text-[#1d1d1d] font-medium text-sm">
            <Link href="/" className="text-[#004d3d] hover:underline">Home</Link>
            <span className="mx-1">&gt;</span> Copyright
          </div>
        </div>
      </div>

      {/* White Box Content */}
      <div className="max-w-5xl mx-auto bg-white shadow-md rounded-xl px-6 py-8 mt-10 text-gray-800 text-sm sm:text-base leading-relaxed">
        <h2 className="text-lg font-semibold text-[#1d1d1d] mb-4">
          Trademark, Copyright & Restriction
        </h2>

        <p className="mb-4">
          All content, files, and information available on this website{" "}
          <a href="https://www.aahasuvai.in" className="text-green-700 underline">
            https://www.aahasuvai.in
          </a>{" "}
          are the exclusive property of Aahasuvai Spices and are protected by applicable
          copyright and trademark laws.
        </p>

        <p className="mb-4">
          Unless explicitly stated, no part of this website may be duplicated, copied, reproduced,
          modified, republished, uploaded, posted, transmitted, or distributed in any form or by any
          means — either electronically or mechanically — without prior written permission from
          Aahasuvai Foods.
        </p>

        <p className="mb-4">
          Our website may include registered and unregistered trademarks, logos, and brand elements
          that belong to Aahasuvai Spices or its affiliates. Use of these trademarks or logos without
          authorization is strictly prohibited.
        </p>

        <p className="mb-4">
          If any of the content holds personal or commercial value for your use — such as for publishing
          on another website, digital platform, or printed medium — you must obtain express written
          consent from us beforehand. Any use of our materials in a commercial context (including for
          profit or promotion) without consent will be considered a violation and may invite legal action.
        </p>

        <p className="mb-4">
          You may use the content of this website only for personal, non-commercial purposes,
          provided that such use does not violate any copyright, trademark, or proprietary rights
          of Aahasuvai Spices.
        </p>

        <p className="mb-4">
          By using this website, you agree:
        </p>

        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>Not to reproduce or distribute any content from this site in any form,</li>
          <li>Not to assist others in such acts, and</li>
          <li>Not to imply ownership or association with our content or branding in any form.</li>
        </ul>

        <p className="mb-4">
          Please be advised that your use of our website and services does not grant you ownership
          rights or licenses to any part of the content, design, or materials presented.
        </p>
      </div>
    </div>
  );
}
