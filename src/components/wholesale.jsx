import { Package, DollarSign, Users } from 'lucide-react';
import Navbar from './navbar';
import Footer from './footer';
import ContactForm from './contactForm';
import { useRef } from 'react';

export default function WholesaleInquiry() {

  const formRef = useRef(null);

  const scrollToForm = () => {    
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  function handleClickStores() {
    window.location.href = '/stores';
  }

  return (
    <>
        <nav className="sticky top-0 z-2">
            <Navbar/> 
        </nav>
        {/* Hero Section */}
        <div 
            className="relative h-200 bg-cover bg-center flex items-center justify-center"
            style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200")',
            backgroundBlendMode: 'overlay',
            backgroundColor: 'rgba(0,0,0,0.6)'
            }}
        >
            <div className="text-center text-white z-1">
            <h1 className="text-7xl font-bold mb-6">Partner With Us</h1>
            <button onClick={scrollToForm} className="bg-red-500 hover:bg-red-600 text-white font-bold px-8 py-4 rounded-full text-xl transition-colors cursor-pointer">
                Start Your Enquiry
            </button>
            </div>
        </div>

        {/* Features Section */}
        <div className="max-w-6xl mx-auto py-12 px-4">
            <div className="grid md:grid-cols-3 gap-6 mb-16">
            {/* Vast Product Range */}
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
                <div className="flex justify-center mb-4">
                <div className="bg-red-500 rounded-full p-4">
                    <Package className="w-8 h-8 text-white" />
                </div>
                </div>
                <h3 className="text-2xl font-bold text-red-600 mb-4">Vast Product Range</h3>
                <p className="text-gray-700">
                Access our diverse catalog, featuring an extensive range of authentic Asian groceries.
                </p>
            </div>

            {/* Competitive Pricing */}
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
                <div className="flex justify-center mb-4">
                <div className="bg-red-500 rounded-full p-4">
                    <DollarSign className="w-8 h-8 text-white" />
                </div>
                </div>
                <h3 className="text-2xl font-bold text-red-600 mb-4">Competitive Pricing</h3>
                <p className="text-gray-700">
                We offer bulk discounts and direct supplier orders on selected products.
                </p>
            </div>

            {/* Excellent Service */}
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
                <div className="flex justify-center mb-4">
                <div className="bg-red-500 rounded-full p-4">
                    <Users className="w-8 h-8 text-white" />
                </div>
                </div>
                <h3 className="text-2xl font-bold text-red-600 mb-4">Excellent Service</h3>
                <p className="text-gray-700">
                Our friendly team is ready to answer any questions or problems you may have.
                </p>
            </div>
            </div>

            {/* Form Section */}
            <div ref={formRef} className="max-w-2xl mx-auto grid gap-8 grid-cols-1">
                <h2 className="text-4xl font-bold text-center text-black">Wholesale Contact</h2>
                <p className="text-gray-600 leading-relaxed text-center">
                    Ready to take your business to the next level with our wholesale options? Find your local store and reach out to us by phone or email. Our team is here to assist you with any questions you may have. We look forward to partnering with you for all your Asian grocery needs!
                </p>
                
                <button onClick={handleClickStores} className="bg-red-500 hover:bg-red-600 text-white font-bold px-8 py-4 rounded-full text-xl transition-colors cursor-pointer">
                    Find Your Nearest Store
                </button>
            </div>
        </div>
        <Footer/>
    </>
  );
}