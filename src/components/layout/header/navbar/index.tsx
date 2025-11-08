import Link from "next/link";
import { ChevronDown, User, ShoppingCart } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 flex items-center justify-center">
              <img
                src="/candleaf.svg"
                alt="Candleaf"
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-xl font-semibold text-[#56B280]">
              Candleaf
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <button className="flex items-center gap-1 text-gray-700 hover:text-gray-900 transition-colors">
              Discovery
              <ChevronDown className="w-4 h-4" />
            </button>
            <Link
              href="/about"
              className="text-gray-700 hover:text-gray-900 transition-colors"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-gray-900 transition-colors"
            >
              Contact us
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="/auth/sign-in"
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <User className="w-6 h-6 text-gray-700" />
            </Link>
            <Link
              href="/cart"
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <ShoppingCart className="w-6 h-6 text-gray-700" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
