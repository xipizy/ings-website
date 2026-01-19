import Navbar from './navbar'
import locationIcon from '../assets/location.png';
import wholesaleIcon from '../assets/wholesale.png';
import checkIcon from '../assets/check.png';
import mainImage from '../assets/main.png';
import { useEffect } from 'react';
import Footer from './footer';
import { Truck, ShieldCheck, Headphones } from 'lucide-react';


function Home() {

  useEffect(() => {
    
    const autoScroll = async () => {
      while (true) {
        await new Promise(resolve => setTimeout(resolve, 100000));
        
        const hash = window.location.hash;
        let currentSlide = parseInt(hash.slice(6));  
        currentSlide = (currentSlide % 4) + 1;
        const link = document.querySelector(`a[href="#slide${currentSlide}"]`);
        if (link) {
          link.click();
        }
      }
    };
    
    autoScroll();
  }, []);

  return (
    <>
      <nav className="sticky top-0 z-2">
        <Navbar/> 
      </nav>
      <div className="w-full bg-black shadow-sm top-0 left-0 right-0 h-[80vh] relative">
        <img src={mainImage} alt="Main Banner" className="w-full h-full object-cover absolute z-1"/>
        <h1 className="absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl md:text-6xl font-bold text-center">
          Your Trusted Source of Asian Goods in New Zealand
        </h1>
      </div>

      {/* Icon Section */}
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
      
      {/* Features */}
      <section className="py-16 px-6 bg-gray-50 h-[50vh]">
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
              <div className="bg-blue-500 rounded-xl w-16 h-16 flex items-center justify-center mb-6">
                <Truck className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Fast and FREE delivery</h3>
              <p className="text-gray-600 leading-relaxed">
                Customers in Hamilton enjoy free delivery on orders over $100 (Businessness no minimum), while Auckland customers benefit from free delivery on orders over $150.
              </p>
            </div>

            {/* Quality Guaranteed */}
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-purple-500 rounded-xl w-16 h-16 flex items-center justify-center mb-6">
                <ShieldCheck className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Quality Guaranteed</h3>
              <p className="text-gray-600 leading-relaxed">
                Every product is carefully selected and quality-checked to meet our high standards.
              </p>
            </div>

            {/* 24/7 Support */}
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-green-500 rounded-xl w-16 h-16 flex items-center justify-center mb-6">
                <Headphones className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">24/7 Support</h3>
              <p className="text-gray-600 leading-relaxed">
                Our dedicated team is always ready to help you with any questions or concerns.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* News */}
      <div className="w-full h-[15vh] bg-linear-to-b from-white to-gray-800"></div>
      <div className="w-full h-[80vh] bg-gray-800 flex flex-col items-center drop-shadow-2xl">
        <h2 className="text-white text-7xl font-semibold text-center pt-25">Latest News</h2>

        {/* Carousel */}
        <div className="carousel w-[50%] h-[30vh] mt-10 rounded-2xl drop-shadow-lg">
          <div id="slide1" className="carousel-item relative w-full">
            <img
              src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
              className="w-full" />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide4" className="btn btn-circle">❮</a>
              <a href="#slide2" className="btn btn-circle">❯</a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <img
              src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
              className="w-full" />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide1" className="btn btn-circle">❮</a>
              <a href="#slide3" className="btn btn-circle">❯</a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <div className="w-full bg-black">
            </div>
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide2" className="btn btn-circle">❮</a>
              <a href="#slide4" className="btn btn-circle">❯</a>
            </div>
          </div>
          <div id="slide4" className="carousel-item relative w-full">
            <img
              src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
              className="w-full" />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide3" className="btn btn-circle">❮</a>
              <a href="#slide1" className="btn btn-circle">❯</a>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default Home