import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useToast } from "@/hooks/use-toast";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const { toast } = useToast();

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Error",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Success",
      description: "Thank you for your message! We will get back to you soon.",
    });

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="bg-[#fff6e7] w-full py-10 px-6">
      {/* Header + Breadcrumb */}
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-[#1d1d1d]">Contact Us</h1>
        <div className="mt-2 text-[#1d1d1d] font-medium">
          <span className="text-[#004d3d]">Home</span>{" "}
          <span className="mx-1">&gt;</span> Contact Us
        </div>
      </div>

      {/* Content White Box */}
      <div className="max-w-7xl mx-auto py-12 px-6">
        <div className="bg-white rounded-xl shadow-lg p-8 grid md:grid-cols-2 gap-10">
          {/* LEFT – Google Map */}
          <div className="w-full h-[450px] rounded-lg overflow-hidden shadow-md">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps?q=1973-A,%20Trichy%20Road,%20Iyyer%20Hospital%20Bus%20Stop,%20Singanallur,%20Coimbatore%20%E2%80%93%20641005,%20Tamil%20Nadu,%20India&output=embed"
              width="100%"
              height="100%"
              allowFullScreen
              loading="lazy"
              style={{ border: 0 }}
            ></iframe>
          </div>

          {/* RIGHT – Info + Form */}
          <div>
            <p className="font-bold text-lg text-[#1d1d1d] mb-2">Our Office</p>
            <p className="text-sm text-gray-700 leading-relaxed">
              Aahasuvai Spices,<br />
              30/147, Kuppanna Chettiyar Street,<br />
              Tiruppur, Tamil Nadu – 641604, India
            </p>

            <h4 className="mt-6 text-sm font-semibold text-gray-800">
              Contact Information
            </h4>
            <p className="text-[#1d64a7] font-medium text-sm">
              +91 9789499491
              <br />
              Email:{" "}
              <a
                href="mailto:aahasuvaispices@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                aahasuvaispices@gmail.com
              </a>
            </p>

            {/* FORM */}
            <form onSubmit={handleSubmit} className="mt-8 space-y-4">
              <h3 className="text-xl font-bold text-[#1d1d1d]">
                Leave a Message
              </h3>

              <Input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                required
              />
              <Input
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                required
              />
              <Input
                type="text"
                placeholder="Subject"
                value={formData.subject}
                onChange={(e) => handleInputChange("subject", e.target.value)}
              />
              <Textarea
                placeholder="Message"
                rows={4}
                value={formData.message}
                onChange={(e) => handleInputChange("message", e.target.value)}
                required
              />

              <Button
                type="submit"
                className="bg-emerald-900 hover:bg-gray-700 text-white px-6 py-2 rounded-md"
              >
                Submit
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
