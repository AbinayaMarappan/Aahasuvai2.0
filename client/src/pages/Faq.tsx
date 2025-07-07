import { useState } from "react";
import { Link } from "wouter";

const faqData = [
  {
    question: "WHAT ARE THE DIFFERENT MODES OF PAYMENT ON AAHASUVAI.IN ? ",
    answer: (
      <ul className="list-disc ml-5">
        <li>Credit cards</li>
        <li>Debit cards</li>
        <li>Net banking</li>
      </ul>
    ),
  },
  {
    question: "IS IT SAFE TO USE MY CREDIT CARD ON THIS SITE?",
    answer:
      "Yes. All transactions on aahasuvai.in are 100% safe. We work with world-class payment gateways to process your payment. All the information is processed using ssl data encryption (secure encrypted connection), which protects the information from being viewed by anyone. ",
  },
  {
    question: "WHAT IS YOUR CANCELLATION & REFUND POLICY?",
    answer: "Please visit our cancellation & refund page for on the cancellation & refund policy",
  },
  {
    question: "WHICH COURIER COMPANY DO YOU USE FOR DELIVERY?",
    answer: "We have tied up with a number of reputed courier partners. The courier service provider for your order is selected based on your location.",
  },
  {
    question: "MY TRANSACTION FAILED BUT THE MONEY WAS DEDUCTED FROM MY ACCOUNT. WHAT CAN I DO FOR GETTING MY MONEY?",
    answer: "Please contact us via +91 9361360885 or fill in our Contact Us form with your transaction details and we will look into it immediately.",
  },
  {
    question: "I WANT TO RETURN MY PRODUCT AS IT IS FAULTY/DAMAGED. WHAT DO I HAVE TO DO?",
    answer: (
      <ul className="list-disc ml-5">
        <li>Please contact us via +91 9361360885 within 48 hours of delivery of the damaged/defective product.</li>
        <li>Send us back the product via courier (We suggest you go for a reputed courier company) within a day of the receipt of information from us. We will reimburse you the courier charges.</li>
        <li>When sending back a product, please ensure the following:
          <ul className="list-disc ml-5">
            <li>That the product is unused.</li>
            <li>That the product is returned in its original packaging along with the original price tags, labels, barcodes, user manual, invoice etc.</li>
            <li>That the product is strongly and adequately packed so that there is no further damage of products during transit.</li>
          </ul>
        </li>
      </ul>
    ),
  },
  {
    question: "HOW WILL I GET MY MONEY BACK IN CASE OF A CANCELLATION OR RETURN? WHAT ARE THE MODES OF REFUND?",
    answer: "The amount will be refunded to your credit card. Please contact customer support for any further assistance regarding this issue.",
  },
  {
    question: "WHAT IS THE MINIMUM ORDER FOR DELIVERY?",
    answer: "The minimum order for delivery is 200rs across Tamil Nadu and 300rs for Other states . ",
  },
  {
    question: "HOW DO I RESET MY PASSWORD?",
    answer: "You need to enter your email address on the Login page and click on forgot password. An email with a reset password will be sent to your email address. With this, you can change your password. In case of any further issues please contact our customer support team.",
  },
  {
    question: "IS IT POSSIBLE TO ORDER AN ITEM WHICH IS OUT OF STOCK?",
    answer: "No, you can only order products which are in-stock. We try to ensure the availability of all products on our website. In this scenario ‘aahasuvai.in’ provides ‘notify me’ option, which will inform you when the product is available. Once the product is available you can purchase as per your requirement.",
  },
  {
    question: "WHAT ARE YOUR TIMING TO CONTACT CUSTOMER SERVICE?",
    answer: "Our customer service team is available from monday to saturday at 10 A.M to 6 P.M.",
  },
  {
    question: "HOW CAN I GIVE FEEDBACK ON THE QUALITY OF CUSTOMER SERVICE?",
    answer: "Our customer support team constantly strives to ensure the best shopping experience for all our customers. We would love to hear about your experience with aahasuvai.in. Do write to us at No +91 9361360885 for Feedback & Suggestions.",
  },
  {
    question: "DO YOU HAVE OFFLINE STORES?",
    answer: "No we don’t have any outlets..",
  },
  {
    question: "I AM A CORPORATE/ BUSINESS. CAN I PLACE ORDERS WITH SURYABALAFOODS.COM?",
    answer: "Yes, we do bulk supply of certain products at special prices to institutions such as schools, restaurants and corporate. Please contact us via +91 9361360885 to know more.",
  },
  {
    question: "HOW DO I CHECK THE CURRENT STATUS OF MY ORDER?",
    answer: "You will be updated through email and sms also we provide tracking button on your order page .",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-[#fff6e7]">
      <div className="bg-[#fff6e7] w-full py-10 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-[#1d1d1d]">FAQ</h1>
          <div className="mt-2 text-sm text-[#1d1d1d] font-medium">
            <Link href="/" className="hover:underline text-[#004d3d]">Home</Link>
            <span className="mx-1">&gt;</span> FAQ
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="space-y-4">
          {faqData.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`rounded-md border transition-all duration-300 ${
                  isOpen
                    ? "bg-gray-100 border-gray-300"
                    : "bg-white border-gray-200"
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-4 text-left"
                >
                  <span className="font-semibold text-[#003b32]">
                    {faq.question}
                  </span>
                  <span
                    className={`w-6 h-6 rounded-full border-2 flex items-center justify-center text-sm font-bold transition-all ${
                      isOpen
                        ? "bg-[#003b32] text-white border-[#003b32]"
                        : "text-[#003b32] border-[#003b32]"
                    }`}
                  >
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                {isOpen && (
                  <div className="px-4 pb-4 text-sm text-gray-700">{faq.answer}</div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
