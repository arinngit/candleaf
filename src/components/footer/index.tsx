import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="border-t border-gray-700 mb-12"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Image
                src="/candleaf.svg"
                alt="Candleaf"
                width={50}
                height={50}
                className="w-12 h-12"
              />
              <span className="text-2xl font-semibold">Candleaf</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Your natural candle made for your home and for your wellness.
            </p>
          </div>

          <div className="ml-4">
            <h3 className="text-emerald-400 font-medium mb-6">Discovery</h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/new-season"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  New season
                </Link>
              </li>
              <li>
                <Link
                  href="/most-searched"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Most searched
                </Link>
              </li>
              <li>
                <Link
                  href="/most-selled"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Most selled
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-emerald-400 font-medium mb-6">About</h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/help"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Help
                </Link>
              </li>
              <li>
                <Link
                  href="/shipping"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Shipping
                </Link>
              </li>
              <li>
                <Link
                  href="/affiliate"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Affiliate
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-emerald-400 font-medium mb-6">Info</h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Contact us
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Privacy Policies
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
