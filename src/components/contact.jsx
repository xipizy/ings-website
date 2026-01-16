import { Mail, Phone, MapPin } from 'lucide-react';
import Navbar from './navbar'

export default function ContactUs() {
  return (
    <>
        <nav className="sticky top-0 z-2">
            <Navbar/> 
        </nav>
      {/* Main Content */}
      <div className="py-12 px-6 bg-gray-200">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-6xl font-bold text-center text-black mb-2">Contact Us</h1>
          <p className="text-center text-black mb-12 text-xl">We have two stores, located in Auckland and Hamilton.</p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Auckland Store */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-black mb-6">Auckland Store</h2>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <div className="bg-red-500 rounded-full p-2 flex shrink-0">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-black">Email: paul@ings.co.nz</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-red-500 rounded-full p-2 flex shrink-0">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-black">Phone: (09) 276 2701</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-red-500 rounded-full p-2 flex shrink-0">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-black">259 Great South Road</p>
                    <p className="text-black">Otahuhu</p>
                    <p className="text-black">Auckland, NZ</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-300 rounded-lg h-48 flex items-center justify-center">
                <span className="text-5xl font-bold text-black">Photos</span>
              </div>
            </div>

            {/* Hamilton Store */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-black mb-6">Hamilton Store</h2>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <div className="bg-red-500 rounded-full p-2 flex shrink-0">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-black">Email: ingstradingltd@outlook.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-red-500 rounded-full p-2 flex shrink-0">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-black">Phone: (07) 848 1668</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-red-500 rounded-full p-2 flex shrink-0">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-black">4 Keddell Street</p>
                    <p className="text-black">Frankton</p>
                    <p className="text-black">Hamilton, NZ</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-300 rounded-lg h-48 flex items-center justify-center">
                <span className="text-5xl font-bold text-black">Photos</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      </>
  );
}