import { useEffect, useRef } from 'react';
import { Star} from 'lucide-react';
import BruceIcon from '../reviewicons/bruceIcon.png';
import GeorgeIcon from '../reviewicons/georgeIcon.png';
import SashIcon from '../reviewicons/sashIcon.png'; 
import MarkIcon from '../reviewicons/markIcon.png';
import GunaIcon from '../reviewicons/gunaIcon.png';

export default function CustomerTestimonials() {
  const scrollRef = useRef(null);
  const animationRef = useRef(null);

  const testimonials = [
    {
      name: "Bruce Walker",
      rating: 5,
      text: "We get what we need for my wife's food truck business, all we have to do is ring and place the order. When we arrive the order is ready to go, the prices are very competitive. Best Asian outlet I've been too.",
      avatar: BruceIcon
    },
    {
      name: "George Garard",
      rating: 5,
      text: "Excellent Asian grocery shopping.",
      avatar: GeorgeIcon
    },
    {
      name: "Sashmeeta Prasad",
      rating: 5,
      text: "Their premix coffees are so nice and better for me than pak n sav or other stores pre mix coffees",
      avatar: SashIcon
    },
    {
      name: "Mark Strongman",
      rating: 5,
      text: "They have a wide variety of Asian food",
      avatar: MarkIcon
    },
    {
      name: "Guna Sekaran Kanniah",
      rating: 5,
      text: "Good range of products and owners are helpful and friendly and genuine",
      avatar: GunaIcon
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