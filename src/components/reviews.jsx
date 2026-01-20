import { useState, useEffect, useRef } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

export default function CustomerTestimonials() {
  const scrollRef = useRef(null);
  const animationRef = useRef(null);

  const testimonials = [
    {
      name: "Sarah Johnson",
      rating: 5,
      text: "Absolutely fantastic service! The Auckland store has everything I need and the staff are incredibly helpful. Highly recommend!",
      avatar: "https://i.pravatar.cc/150?img=1"
    },
    {
      name: "Michael Chen",
      rating: 4,
      text: "Great quality products and excellent customer service. The Wellington store is my go-to place for shopping.",
      avatar: "https://i.pravatar.cc/150?img=13"
    },
    {
      name: "Emma Williams",
      rating: 5,
      text: "The best retail experience I've had in NZ. Wide selection, great prices, and friendly staff. Will definitely be back!",
      avatar: "https://i.pravatar.cc/150?img=5"
    },
    {
      name: "David Park",
      rating: 5,
      text: "Outstanding quality and amazing value. The team went above and beyond to help me find exactly what I needed.",
      avatar: "https://i.pravatar.cc/150?img=8"
    },
    {
      name: "Jessica Taylor",
      rating: 5,
      text: "I'm impressed by the range of products and the personalized service. This is now my favorite store!",
      avatar: "https://i.pravatar.cc/150?img=9"
    }
  ];

  // Triple for infinite scroll
  const infiniteTestimonials = [...testimonials, ...testimonials, ...testimonials];

  // Auto-scroll effect
  useEffect(() => {
    const scroll = scrollRef.current;
    if (!scroll) return;

    let scrollPosition = 0;
    const scrollSpeed = 0.5;

    const animate = () => {

        scrollPosition += scrollSpeed;
        
        const maxScroll = scroll.scrollWidth / 3;
        if (scrollPosition >= maxScroll) {
          scrollPosition = 0;
        }
        
        scroll.scrollLeft = scrollPosition;
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-3">What Our Customers Say</h2>
          <p className="text-gray-600 text-lg">
            Real experiences from our valued customers
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">

          {/* Testimonials Carousel */}
          <div
            ref={scrollRef}
            className="flex overflow-x-hidden py-4"
          >
            {infiniteTestimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="flex shrink-0 w-80 mx-4"
              >
                <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
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
                  <div className="flex items-center gap-3 mt-auto">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}