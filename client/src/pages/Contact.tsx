// // src/pages/Contact.tsx
// export default function Contact() {
//   return (
//     <div className="p-8">
//       <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
//       <p>📧 Email: example@example.com</p>
//       <p>📞 Phone: +91-9876543210</p>
//       {/* Add your actual contact form or info here */}
//     </div>
//   );
// }
// src/pages/Contact.tsx
import ContactSection from "@/components/ContactSection"; // ✅ Make sure the path is correct

export default function ContactPage() {
  return (
    <main>
      <ContactSection />
    </main>
  );
}

