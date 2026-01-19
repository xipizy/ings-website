import { useState } from 'react';
import { Package, DollarSign, Users } from 'lucide-react';
import {useRef} from 'react';
import Navbar from './navbar'
import Footer from './footer';

export default function WholesaleInquiry() {
  const [formData, setFormData] = useState({
    name: '',
    store: 'AKL',
    email: '',
    message: ''
  });

  const formRef = useRef(null);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! We will contact you soon.');
    // Add your form submission logic here
    // Clear
    setFormData({
      name: '',
      store: 'AKL',
      email: '',
      message: ''
    });
  };

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
                Start Your Inquiry
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
                We offer bulk discounts and direct supplier orders on selected products
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
                Our friendly team is ready to answer any questions or problems you may have
                </p>
            </div>
            </div>

            {/* Form Section */}
            <div ref={formRef} className="max-w-2xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-8 text-black">Wholesale Inquiry Form</h2>
            
            <div className="space-y-4">
                <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="text-black w-full px-6 py-4 bg-gray-300 rounded text-lg placeholder-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500"
                />

                <select
                name="store"
                placeholder="Which Store HAM/AKL"
                value={formData.store}
                onChange={handleChange}
                className="text-black w-full px-6 py-4 bg-gray-300 rounded text-lg placeholder-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                    <option value="AKL">Auckland Store</option>
                    <option value="HAM">Hamilton Store</option>
                </select>

                <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="text-black w-full px-6 py-4 bg-gray-300 rounded text-lg placeholder-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500"
                />

                <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full px-6 py-4 bg-gray-300 rounded text-lg placeholder-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500 resize-none text-black"
                />

                <div className="text-center">
                <button
                    onClick={handleSubmit}
                    className="bg-red-500 hover:bg-red-600 text-white font-bold px-12 py-4 rounded-full text-xl transition-colors"
                >
                    Submit
                </button>
                </div>
            </div>

            <p className="text-center mt-8 text-lg">
                <span className="text-red-600 font-semibold">Prefer to speak over the phone? Click </span>
                <a href="/stores" className="text-blue-600 hover:underline font-semibold">here</a>
                <span className="text-red-600 font-semibold"> and find your local store</span>
            </p>
            </div>
        </div>
        <Footer/>
    </>
  );
}