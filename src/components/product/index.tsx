"use client";

import { useState } from "react";
import Image from "next/image";
import { ShoppingCart, Truck, ChevronDown } from "lucide-react";

export default function ProductDetailsScreen() {
  const [quantity, setQuantity] = useState(1);
  const [purchaseType, setPurchaseType] = useState("one-time");

  const handleIncrement = () => setQuantity((prev) => prev + 1);
  const handleDecrement = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <div className="min-h-screen bg-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="bg-gray-50 rounded-lg p-12 flex items-center justify-center mb-8">
              <Image
                src="/product.svg"
                alt="Spiced Mint Candleaf"
                width={400}
                height={500}
                className="w-full max-w-md h-auto"
              />
            </div>

            <div className="text-center space-y-4">
              <p className="text-xl text-gray-800 font-medium">
                All hand-made with natural soy wax, Candleaf is made for your
                pleasure moments.
              </p>
              <div className="flex items-center justify-center gap-2 text-emerald-600">
                <Truck className="w-6 h-6" />
                <span className="text-lg font-medium">FREE SHIPPING</span>
              </div>
            </div>
          </div>

          <div>
            <h1 className="text-3xl md:text-4xl font-medium text-gray-900 mb-6">
              Spiced Mint Candleaf
            </h1>

            <div className="text-4xl font-medium text-emerald-600 mb-8">
              $ 9.99
            </div>

            <div className="space-y-4 mb-8">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="radio"
                  name="purchase-type"
                  value="one-time"
                  checked={purchaseType === "one-time"}
                  onChange={(e) => setPurchaseType(e.target.value)}
                  className="w-5 h-5 text-emerald-600"
                />
                <span className="text-gray-700 text-lg">One time purchase</span>
              </label>

              <div className="border border-gray-200 rounded-lg p-4">
                <label className="flex items-start gap-3 cursor-pointer mb-3">
                  <input
                    type="radio"
                    name="purchase-type"
                    value="subscribe"
                    checked={purchaseType === "subscribe"}
                    onChange={(e) => setPurchaseType(e.target.value)}
                    className="w-5 h-5 text-emerald-600 mt-1"
                  />
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700 text-lg">
                        Subscribe and delivery every
                      </span>
                      <select className="border border-gray-300 rounded px-3 py-1 text-gray-700">
                        <option>4 weeks</option>
                        <option>2 weeks</option>
                        <option>6 weeks</option>
                        <option>8 weeks</option>
                      </select>
                    </div>
                    <p className="text-gray-600 mt-2 text-sm">
                      Subscribe now and get the 10% of discount on every
                      recurring order. The discount will be applied at checkout.{" "}
                      <a href="#" className="text-emerald-600 hover:underline">
                        See details
                      </a>
                    </p>
                  </div>
                </label>
              </div>
            </div>

            <div className="mb-8">
              <label className="block text-gray-700 font-medium mb-3">
                Quantity
              </label>
              <div className="flex items-center gap-3">
                <div className="flex items-center border border-gray-300 rounded">
                  <button
                    onClick={handleDecrement}
                    className="px-4 py-2 text-gray-600 hover:bg-gray-50"
                  >
                    -
                  </button>
                  <span className="px-6 py-2 border-x border-gray-300 text-black">
                    {quantity}
                  </span>
                  <button
                    onClick={handleIncrement}
                    className="px-4 py-2 text-gray-600 hover:bg-gray-50"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-4 rounded-lg flex items-center justify-center gap-3 transition-colors mb-8">
              <ShoppingCart className="w-5 h-5" />+ Add to cart
            </button>

            <div className="border border-gray-200 rounded-lg p-6 space-y-4">
              <div>
                <span className="font-medium text-gray-900">Wax:</span>
                <span className="text-gray-600 ml-2">
                  Top grade Soy wax that delivers a smoke less, consistent burn
                </span>
              </div>
              <div>
                <span className="font-medium text-gray-900">Fragrance:</span>
                <span className="text-gray-600 ml-2">
                  Premium quality ingredients with natural essential oils
                </span>
              </div>
              <div className="flex flex-wrap gap-x-6 gap-y-2">
                <div>
                  <span className="font-medium text-gray-900">
                    Burning Time:
                  </span>
                  <span className="text-gray-600 ml-2">70-75 hours</span>
                </div>
                <div>
                  <span className="font-medium text-gray-900">Dimension:</span>
                  <span className="text-gray-600 ml-2">10cm x 5cm</span>
                </div>
                <div>
                  <span className="font-medium text-gray-900">Weight:</span>
                  <span className="text-gray-600 ml-2">400g</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
