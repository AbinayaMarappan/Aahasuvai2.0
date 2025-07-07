import { AlertCircle, Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  const goHome = () => {
    window.location.href = '/';
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-b from-cream to-white relative overflow-hidden">
      {/* Background Spice Elements */}
      <div className="absolute top-20 left-10 animate-float opacity-10">
        <div className="w-16 h-16 bg-spice-orange rounded-full"></div>
      </div>
      <div className="absolute top-32 right-20 animate-float opacity-10" style={{ animationDelay: '1s' }}>
        <div className="w-12 h-12 bg-spice-red rounded-full"></div>
      </div>

      <div className="w-full max-w-lg mx-4 text-center">
        <div className="bg-white rounded-2xl shadow-2xl p-8">
          <div className="w-20 h-20 bg-gradient-to-r from-spice-orange to-deep-amber rounded-full flex items-center justify-center mx-auto mb-6">
            <AlertCircle className="h-10 w-10 text-white" />
          </div>

          <h1 className="font-playfair text-4xl font-bold text-rich-brown mb-4">
            404 - Page Not Found
          </h1>

          <p className="text-lg text-gray-600 mb-6">
            This page seems to have disappeared like spices in a busy kitchen.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={goHome}
              className="bg-spice-orange hover:bg-deep-amber text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center"
            >
              <Home className="w-5 h-5 mr-2" />
              Back to Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}