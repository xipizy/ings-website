import Navbar from './navbar'
import locationIcon from '../assets/location.png';
import wholesaleIcon from '../assets/wholesale.png';
import checkIcon from '../assets/check.png';
import mainImage from '../assets/hamiltonStore1.png';
import Reviews from './reviews';
import { useEffect } from 'react';
import Footer from './footer';
import { DollarSign, Package , HeartHandshake} from 'lucide-react';
import NewsUpdates from './news';


function Home() {

  return (
    <>
      <nav className="sticky top-0 z-2">
        <Navbar/> 
      </nav>
      <div className="animate-fade-in">
      <div className="w-full bg-black shadow-sm top-0 left-0 right-0 h-[80vh] relative">
        <img src={mainImage} style={{ opacity: 0.3 }} alt="Main Banner" className="w-full h-full object-cover absolute z-1"/>
        <h1 className="absolute z-1 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl md:text-6xl font-bold text-center">
          Your Trusted Source of Asian Goods in New Zealand
        </h1>
      </div>

      {/* Icon Section , only visible on desktop*/}
      <div className="hidden md:flex">
      <div className="w-full bg-white h-[10vh] flex items-center justify-center">
        <div className="w-100 h-20 flex items-center justify-between">
          <div className="w-12 h-12 rounded-full flex items-center justify-center">
              <img src={locationIcon} alt="Location icon" className="object-contain"/>
          </div>
          <h2 className="text-black text-2xl font-semibold p-4 text-center">Two Convenient Locations</h2>
          <div className="border-l border-gray-300 h-full"></div>
        </div>

        <div className="w-100 h-20 flex items-center justify-between ml-10">
          <div className="w-12 h-12 rounded-full flex items-center justify-center">
              <img src={wholesaleIcon} alt="Wholesale icon" className="object-contain"/>
          </div>
          <h2 className="text-black text-2xl font-semibold p-4 text-center">Wholesale & Retail Options</h2>
          <div className="border-l border-gray-300 h-full"></div>
        </div>

        <div className="w-80 h-20 flex items-center justify-between ml-10">
          <div className="w-12 h-12 rounded-full flex items-center justify-center">
              <img src={checkIcon} alt="Check icon" className="object-contain"/>
          </div>
          <h2 className="text-black text-2xl font-semibold p-4 text-center">Quality Guaranteed</h2>
        </div>
      </div>
      </div>

      {/* Features */}
      <section className="py-16 px-6 bg-gray-150">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-3">Why Choose Us</h2>
            <p className="text-gray-600 text-lg">
              Experience the difference with our premium retail services
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Fast Delivery */}
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-red-500 rounded-xl w-16 h-16 flex items-center justify-center mb-6">
                <DollarSign className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Competitive Pricing</h3>
              <p className="text-gray-600 leading-relaxed">
                We provide authentic Asian food and packaging products at competitive prices, giving your business reliable quality without breaking the budget. Consistent, affordable, and trusted by our customers.
              </p>
            </div>

            {/* Quality Guaranteed */}
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-red-500 rounded-xl w-16 h-16 flex items-center justify-center mb-6">
                <Package  className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Quality Guaranteed</h3>
              <p className="text-gray-600 leading-relaxed">
                Our products are carefully selected and imported from trusted suppliers, ensuring authenticity, safety, and consistent high standards. You can trust that every item we offer delivers the best to you.
              </p>
            </div>

            {/* Customer Service */}
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-red-500 rounded-xl w-16 h-16 flex items-center justify-center mb-6">
                <HeartHandshake className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Customer Experience & Service</h3>
              <p className="text-gray-600 leading-relaxed">
                Our customers come first. Our knowledgeable team is always happy to help you find exactly what you need, offering personalized guidance to ensure a smooth and enjoyable shopping experience.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* News */}
      <NewsUpdates/>
      
      {/* Reviews Section */}
      <Reviews/>

      {/* Footer */}
      <Footer/>
      </div>
      {/* Fade-in Animation */}
      <style jsx>{`
          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }
          .animate-fade-in {
            animation: fadeIn 1s ease-in;
          }
        `}</style>
    </>
  )
}

export default Home