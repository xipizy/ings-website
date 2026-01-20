import { Star } from 'lucide-react';

export default function CustomerTestimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "Auckland Customer",
      rating: 5,
      text: "Absolutely fantastic service! The Auckland store has everything I need and the staff are incredibly helpful. Highly recommend!",
      avatar: "https://i.pravatar.cc/150?img=1"
    },
    {
      name: "Michael Chen",
      location: "Wellington Customer",
      rating: 5,
      text: "Great quality products and excellent customer service. The Wellington store is my go-to place for shopping.",
      avatar: "https://i.pravatar.cc/150?img=13"
    },
    {
      name: "Emma Williams",
      location: "Regional Customer",
      rating: 5,
      text: "The best retail experience I've had in NZ. Wide selection, great prices, and friendly staff. Will definitely be back!",
      avatar: "https://i.pravatar.cc/150?img=5"
    }
  ];

  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-3">What Our Customers Say</h2>
          <p className="text-gray-600 text-lg">
            Real experiences from our valued customers
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              {/* Star Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 leading-relaxed mb-6">
                "{testimonial.text}"
              </p>

              {/* Customer Info */}
              <div className="flex items-center gap-3">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}