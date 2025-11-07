import Image from "next/image";

const products = [
  { id: 1, name: "Spiced Mint", price: "9.99$", image: "/product.svg" },
  { id: 2, name: "Sweet Straweberry", price: "9.99$", image: "/product.svg" },
  { id: 3, name: "Cool Blueberries", price: "9.99$", image: "/product.svg" },
  { id: 4, name: "Juicy Lemon", price: "9.99$", image: "/product.svg" },
  { id: 5, name: "Product name", price: "9.99$", image: "/product.svg" },
  { id: 6, name: "Fragrant Cinnamon", price: "9.99$", image: "/product.svg" },
  { id: 7, name: "Summer Cherries", price: "9.99$", image: "/product.svg" },
  { id: 8, name: "Clean Lavander", price: "9.99$", image: "/product.svg" },
];

export default function HomeProduct() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-medium text-gray-900 mb-4">
            Products
          </h2>
          <p className="text-lg text-gray-600">
            Order it for you or for your beloved ones
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="bg-gray-100 p-4 flex items-center justify-center">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={100}
                  height={180}
                  className="w-full h-auto"
                />
              </div>

              <div className="p-6 flex justify-between items-center">
                <h3 className="text-lg font-medium text-gray-900">
                  {product.name}
                </h3>
                <span className="text-lg font-medium text-emerald-600">
                  {product.price}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
