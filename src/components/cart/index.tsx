"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function CartPage() {
  const [couponCode, setCouponCode] = useState("");

  return (
    <div className="min-h-screen bg-white">
      <div className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <Link href="/" className="inline-flex items-center gap-2 mb-6">
            <Image
              src="/candleaf.svg"
              alt="Candleaf"
              width={40}
              height={40}
              className="w-10 h-10"
            />
            <span className="text-2xl font-semibold text-emerald-600">
              Candleaf
            </span>
          </Link>

          <div className="flex items-center gap-2 text-sm">
            <span className="text-emerald-600 font-medium">Cart</span>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <span className="text-gray-900 font-medium">Details</span>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <span className="text-gray-400">Shipping</span>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <span className="text-gray-400">Payment</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-medium text-gray-900">Contact</h2>
                <div className="text-sm text-gray-600">
                  Do you have an account?{" "}
                  <Link
                    href="/auth/sign-in"
                    className="text-emerald-600 hover:underline"
                  >
                    Login
                  </Link>
                </div>
              </div>

              <input
                type="email"
                placeholder="Email or mobile phone number"
                className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none mb-4"
              />

              <label className="flex items-start gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="w-4 h-4 mt-1 text-emerald-600 border-gray-300 rounded focus:ring-emerald-500"
                />
                <span className="text-sm text-gray-700">
                  Add me to Candleaf newsletter for a 10% discount
                </span>
              </label>
            </div>

            <div>
              <h2 className="text-2xl font-medium text-gray-900 mb-4">
                Shipping Address
              </h2>

              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none"
                  />
                  <input
                    type="text"
                    placeholder="Second Name"
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none"
                  />
                </div>

                <input
                  type="text"
                  placeholder="Address and number"
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none"
                />

                <input
                  type="text"
                  placeholder="Shipping note (optional)"
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none"
                />

                <div className="grid grid-cols-3 gap-4">
                  <input
                    type="text"
                    placeholder="City"
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none"
                  />
                  <input
                    type="text"
                    placeholder="Postal Code"
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none"
                  />
                  <select className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none text-gray-700">
                    <option value="">Province</option>
                    <option value="province1">Province 1</option>
                    <option value="province2">Province 2</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs text-gray-600 mb-1">
                    Country/Region
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none text-gray-700">
                    <option value="italy">Italy</option>
                    <option value="usa">United States</option>
                    <option value="uk">United Kingdom</option>
                  </select>
                </div>

                <label className="flex items-start gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    className="w-4 h-4 mt-1 text-emerald-600 border-gray-300 rounded focus:ring-emerald-500"
                  />
                  <span className="text-sm text-gray-700">
                    Save this informations for a future fast checkout
                  </span>
                </label>
              </div>
            </div>

            <div className="flex items-center justify-between mt-8">
              <Link
                href="/"
                className="text-emerald-600 hover:text-emerald-700 font-medium"
              >
                Back
              </Link>
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-8 py-3 rounded transition-colors">
                Buy
              </button>
            </div>
          </div>

          <div className="lg:pl-8">
            <div className="bg-gray-50 rounded-lg p-6 sticky top-8">
              <div className="flex items-center gap-4 mb-6 pb-6 border-b border-gray-200">
                <div className="relative">
                  <div className="w-24 h-24 bg-white rounded-lg flex items-center justify-center">
                    <Image
                      src="/candleaf.svg"
                      alt="Spiced Mint Candleaf"
                      width={80}
                      height={80}
                      className="w-16 h-16"
                    />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-emerald-600 text-white rounded-full flex items-center justify-center text-xs font-medium">
                    1
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-gray-900 mb-1">
                    Spiced Mint Candleaf®
                  </h3>
                  <p className="text-emerald-600 font-medium">$ 9.99</p>
                </div>
              </div>

              <div className="mb-6 pb-6 border-b border-gray-200">
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Coupon code"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    className="flex-1 px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none"
                  />
                  <button className="px-6 py-2 bg-gray-400 hover:bg-gray-500 text-white rounded transition-colors">
                    Add code
                  </button>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-gray-700">
                  <span>Subtotal</span>
                  <span className="font-medium">$ 9.99</span>
                </div>
                <div className="flex justify-between text-gray-700">
                  <span>Shipping</span>
                  <span className="text-sm">Calculated at the next step</span>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-200">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-medium text-gray-900">
                    Total
                  </span>
                  <span className="text-2xl font-medium text-gray-900">
                    $ 9.99
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
