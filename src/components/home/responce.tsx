import Image from "next/image";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    image: "/woman-1.svg",
    rating: 4,
    quote: '"I love it! No more air fresheners"',
    name: "Luisa",
  },
  {
    id: 2,
    image: "/man-1.svg",
    rating: 5,
    quote: '"Raccomended for everyone"',
    name: "Edoardo",
  },
  {
    id: 3,
    image: "/woman-2.svg",
    rating: 4,
    quote: '"Looks very natural, the smell is awesome"',
    name: "Mart",
  },
];

export default function HomeResponce() {
  return (
    <section className="py-16 px-4 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-medium text-gray-900 mb-4">
            Testimonials
          </h2>
          <p className="text-lg text-gray-600">
            Some quotes from our happy customers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-lg p-8 text-center"
            >
              <div className="flex justify-center mb-6">
                <div className="w-30 h-30 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={96}
                    height={96}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="flex justify-center gap-1 mb-6">
                {[...Array(5)].map((_, index) => (
                  <Star
                    key={index}
                    className={`w-6 h-6 ${
                      index < testimonial.rating
                        ? "fill-emerald-500 text-emerald-500"
                        : "fill-gray-300 text-gray-300"
                    }`}
                  />
                ))}
              </div>

              <p className="text-xl text-gray-900 mb-4 font-medium">
                {testimonial.quote}
              </p>

              <p className="text-gray-600">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
