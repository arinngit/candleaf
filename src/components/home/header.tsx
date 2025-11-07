import { Sprout } from "lucide-react";

export default function HomeHeader() {
  return (
    <div className="relative min-h-[600px] flex items-center justify-center">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url(/bg-image.svg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <div className="flex justify-center mb-6">
          <Sprout className="w-10 h-10 text-emerald-600" strokeWidth={2} />
        </div>

        <h1 className="text-5xl md:text-4xl font-medium text-gray-900 mb-6">
          The nature candle
        </h1>

        <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-xl mx-auto">
          All handmade with natural soy wax, Candleaf is a companion for all
          your pleasure moments
        </p>

        <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-8 py-4 rounded-md transition-colors duration-200">
          Discovery our collection
        </button>
      </div>
    </div>
  );
}
