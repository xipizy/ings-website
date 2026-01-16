import { useState } from 'react';
import Navbar from './navbar';
import { MapPin, Phone, Navigation, Share2, ChevronDown, Clock } from 'lucide-react';

export default function StoreCards() {
  const [showAllHours1, setShowAllHours1] = useState(false);
  const [showAllHours2, setShowAllHours2] = useState(false);

  const getCurrentTime = () => {
    const now = new Date();
    return now.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });
  };

  return (
    <>
    <nav className="sticky top-0 z-2">
        <Navbar/> 
    </nav>
    <div className="min-h-screen bg-gray-200 p-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
        {/* Downtown Store */}
        <div className="bg-white rounded-2xl shadow-md overflow-hidden">
          {/* Store Image */}
          <div className="relative h-40">
            <img 
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=300&fit=crop" 
              alt="Downtown Store"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-3 right-3 bg-green-500 text-white px-4 py-1.5 rounded-full font-bold text-xs flex items-center gap-1">
              <span className="w-2 h-2 bg-white rounded-full"></span>
              OPEN NOW
            </div>
          </div>

          {/* Store Info */}
          <div className="p-5">
            <h3 className="text-xl font-bold mb-3 text-black">Downtown Store</h3>

            <div className="flex items-start gap-2 text-gray-600 mb-5">
              <MapPin className="w-4 h-4 mt-0.5 text-blue-600 flex shrink-0" />
              <span className="text-sm text-black">123 Main Street, City Center</span>
            </div>

            {/* Hours Section */}
            <div className="border-t pt-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-semibold text-gray-600 uppercase">Today's Hours</span>
                <span className="text-xs text-gray-600">{getCurrentTime()}</span>
              </div>
              
              <div className="flex justify-between items-center mb-2">
                <span className="text-lg font-bold text-black">9:00 AM - 9:00 PM</span>
                <span className="text-green-600 text-sm font-semibold">Open</span>
              </div>

              <div className="mb-4">
                <div className="w-full bg-green-100 rounded-full h-1.5">
                  <div className="bg-green-500 h-1.5 rounded-full" style={{ width: '65%' }}></div>
                </div>
                <p className="text-xs text-gray-600 mt-1">Closes in 5 hours 23 mins</p>
              </div>

              {/* View All Hours */}
              <button 
                onClick={() => setShowAllHours1(!showAllHours1)}
                className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900"
              >
                <Clock className="w-4 h-4" />
                <span>View All Hours</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${showAllHours1 ? 'rotate-180' : ''}`} />
              </button>

              {showAllHours1 && (
                <div className="mt-3 space-y-2 text-sm text-black">
                  <div className="flex justify-between"><span>Monday</span><span>9:00 AM - 9:00 PM</span></div>
                  <div className="flex justify-between"><span>Tuesday</span><span>9:00 AM - 9:00 PM</span></div>
                  <div className="flex justify-between"><span>Wednesday</span><span>9:00 AM - 9:00 PM</span></div>
                  <div className="flex justify-between"><span>Thursday</span><span>9:00 AM - 9:00 PM</span></div>
                  <div className="flex justify-between"><span>Friday</span><span>9:00 AM - 9:00 PM</span></div>
                  <div className="flex justify-between"><span>Saturday</span><span>10:00 AM - 8:00 PM</span></div>
                  <div className="flex justify-between"><span className="text-red-600">Sunday</span><span className="text-red-600">Closed</span></div>
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-3 gap-3 mt-5 pt-4 border-t">
              <button className="flex flex-col items-center gap-1 text-blue-600 hover:bg-blue-50 py-2 rounded">
                <Phone className="w-5 h-5" />
                <span className="text-xs font-medium">Call</span>
              </button>
              <button className="flex flex-col items-center gap-1 text-blue-600 hover:bg-blue-50 py-2 rounded">
                <Navigation className="w-5 h-5" />
                <span className="text-xs font-medium">Directions</span>
              </button>
              <button className="flex flex-col items-center gap-1 text-blue-600 hover:bg-blue-50 py-2 rounded">
                <Share2 className="w-5 h-5" />
                <span className="text-xs font-medium">Share</span>
              </button>
            </div>
          </div>
        </div>

        {/* Westside Store */}
        <div className="bg-white rounded-2xl shadow-md overflow-hidden">
          {/* Store Image */}
          <div className="relative h-40">
            <img 
              src="https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=600&h=300&fit=crop" 
              alt="Westside Store"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-3 right-3 bg-red-500 text-white px-4 py-1.5 rounded-full font-bold text-xs flex items-center gap-1">
              <span className="w-2 h-2 bg-white rounded-full"></span>
              CLOSED
            </div>
          </div>

          {/* Store Info */}
          <div className="p-5">
            <h3 className="text-xl font-bold mb-3 text-black">Westside Store</h3>

            <div className="flex items-start gap-2 text-gray-600 mb-5">
              <MapPin className="w-4 h-4 mt-0.5 text-blue-600 flex shrink-0" />
              <span className="text-sm text-black">456 Oak Avenue, West District</span>
            </div>

            {/* Hours Section */}
            <div className="border-t pt-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-semibold text-gray-600 uppercase">Today's Hours</span>
                <span className="text-xs text-gray-600">{getCurrentTime()}</span>
              </div>
              
              <div className="flex justify-between items-center mb-2">
                <span className="text-lg font-bold text-black">8:00 AM - 10:00 PM</span>
                <span className="text-red-600 text-sm font-semibold">Closed</span>
              </div>

              <div className="mb-4">
                <p className="text-xs text-gray-600 ">Opens tomorrow at 8:00 AM</p>
              </div>

              {/* View All Hours */}
              <button 
                onClick={() => setShowAllHours2(!showAllHours2)}
                className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900"
              >
                <Clock className="w-4 h-4" />
                <span>View All Hours</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${showAllHours2 ? 'rotate-180' : ''}`} />
              </button>

              {showAllHours2 && (
                <div className="mt-3 space-y-2 text-sm text-black">
                  <div className="flex justify-between"><span>Monday</span><span>8:00 AM - 10:00 PM</span></div>
                  <div className="flex justify-between"><span>Tuesday</span><span>8:00 AM - 10:00 PM</span></div>
                  <div className="flex justify-between"><span>Wednesday</span><span>8:00 AM - 10:00 PM</span></div>
                  <div className="flex justify-between"><span>Thursday</span><span>8:00 AM - 10:00 PM</span></div>
                  <div className="flex justify-between"><span>Friday</span><span>8:00 AM - 10:00 PM</span></div>
                  <div className="flex justify-between"><span>Saturday</span><span>9:00 AM - 9:00 PM</span></div>
                  <div className="flex justify-between"><span className="text-red-600">Sunday</span><span className="text-red-600">Closed</span></div>
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-3 gap-3 mt-5 pt-4 border-t">
              <button className="flex flex-col items-center gap-1 text-blue-600 hover:bg-blue-50 py-2 rounded">
                <Phone className="w-5 h-5" />
                <span className="text-xs font-medium">Call</span>
              </button>
              <button className="flex flex-col items-center gap-1 text-blue-600 hover:bg-blue-50 py-2 rounded">
                <Navigation className="w-5 h-5" />
                <span className="text-xs font-medium">Directions</span>
              </button>
              <button className="flex flex-col items-center gap-1 text-blue-600 hover:bg-blue-50 py-2 rounded">
                <Share2 className="w-5 h-5" />
                <span className="text-xs font-medium">Share</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}