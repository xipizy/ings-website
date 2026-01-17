import { useState } from 'react';
import Navbar from './navbar';
import { useEffect } from 'react';
import { MapPin, Phone, Navigation, Share2, ChevronDown, Clock } from 'lucide-react';
import aucklandStore1 from '../assets/aucklandStore1.png';
import hamiltonStore1 from '../assets/hamiltonStore1.png';

export default function StoreCards() {
    const [showAllHours1, setShowAllHours1] = useState(false);
    const [showAllHours2, setShowAllHours2] = useState(false);

    const [aucklandState, setAucklandState] = useState(0);
    const [hamiltonState, setHamiltonState] = useState(0);
    // 0 == Closed, 1 == Open, 2 == Closing Soon

    const getCurrentTime = () => {
        const now = new Date();
        return now.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });
    };

    const getTodayTimesAuckland = () => {
        const now = new Date();
        const day = now.getDay();
        if (day === 0) return "Closed";
        else if (day >= 1 && day <= 5) return "9:00 AM - 5:00 PM";
        else if (day === 6) return "10:00 AM - 5:00 PM";
    }

    const getTodayTimesHamilton = () => {
        const now = new Date();
        const day = now.getDay();
        if (day === 0) return "Closed";
        else if (day >= 1 && day <= 5) return "9:00 AM - 5:30 PM";
        else if (day === 6) return "8:00 AM - 5:00 PM";
    }

    const getProgressPercentage = (storeName) => {
        const now = new Date();
        const day = now.getDay();
        const hour = now.getHours();
        const minute = now.getMinutes();

        if (storeName === 'Auckland') {
            // Get starting hour based on day
            let hourString = getTodayTimesAuckland();
            let [startTime, endTime] = hourString.split(' - ');
            let startHour = parseInt(startTime.split(':')[0]);
            let endHour = parseInt(endTime.split(':')[0]) + 12; // Convert to 24-hour format

            let totalHours = endHour - startHour;
            let elapsedHours = hour + (minute / 60) - startHour;

            if (elapsedHours < 0) return 0;
            if (elapsedHours > totalHours) return 100;
            return (elapsedHours / totalHours) * 100;
        } else {
            // Get starting hour based on day
            let hourString = getTodayTimesHamilton();
            let [startTime, endTime] = hourString.split(' - ');
            let startHour = parseInt(startTime.split(':')[0]);
            let endHour = parseInt(endTime.split(':')[0]) + (parseInt(endTime.split(':')[1]) / 60) + 12; // Convert to 24-hour format

            let totalHours = endHour - startHour;
            let elapsedHours = hour + (minute / 60) - startHour;

            if (elapsedHours < 0) return 0;
            if (elapsedHours > totalHours) return 100;
            return (elapsedHours / totalHours) * 100;
        }   
    }

    useEffect(() => {
            const now = new Date();
            const day = now.getDay();
            const hour = now.getHours();
            const minute = now.getMinutes();
    
            if (day === 0) {
                setAucklandState(0);
                setHamiltonState(0);
            } else if (day === 6) {
                // Auckland Store
                if (hour >= 10 && hour < 16) {
                    setAucklandState(1);
                } else if (hour >= 16 && hour < 17) {
                    setAucklandState(2);
                } else {
                    setAucklandState(0);
                }
                // Hamilton Store
                if (hour >= 8 && hour < 16) {
                        setHamiltonState(1);
                    } else if (hour >= 16 && hour < 17) {
                        setHamiltonState(2);
                    } else {
                        setHamiltonState(0);
                    }
            } else {
                // Auckland Store
                if (hour >= 9 && hour < 16) {
                    setAucklandState(1);
                } else if (hour >= 16 && hour < 17) {
                    setAucklandState(2);
                } else {
                    setAucklandState(0);
                }
                // Hamilton Store
                if (hour >= 9 && hour <= 16) {
                    if (hour === 16 && minute > 30) {
                        setHamiltonState(2);
                    } else {
                        setHamiltonState(1);
                    }
                } else if (hour >= 17) {
                    if (hour === 17 && minute < 30) {
                        setHamiltonState(2);
                    } else {
                        setHamiltonState(0);
                    }
                }
            }
          }, []);
    
    return (
    <>
        <nav className="sticky top-0 z-2">
            <Navbar/> 
        </nav>
        <div className="min-h-max bg-gray-200 p-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
            {/* Downtown Store */}
            <div className="bg-white rounded-2xl shadow-md overflow-hidden">
            {/* Store Image */}
            <div className="relative h-40">
                <img 
                src={aucklandStore1} 
                alt="Auckland Store"
                className="w-full h-full object-cover"
                />

                {aucklandState === 0 && <div className="absolute top-3 right-3 bg-red-500 text-white px-4 py-1.5 rounded-full font-bold text-xs flex items-center gap-1">
                                        <span className="w-2 h-2 bg-white rounded-full"></span>
                                        CLOSED
                                        </div>}
                {aucklandState === 1 && <div className="absolute top-3 right-3 bg-green-500 text-white px-4 py-1.5 rounded-full font-bold text-xs flex items-center gap-1">
                                        <span className="w-2 h-2 bg-white rounded-full"></span>
                                        OPEN NOW
                                        </div>}
                {aucklandState === 2 && <div className="absolute top-3 right-3 bg-orange-500 text-white px-4 py-1.5 rounded-full font-bold text-xs flex items-center gap-1">
                                        <span className="w-2 h-2 bg-white rounded-full"></span>
                                        CLOSING SOON
                                        </div>}
            </div>

            {/* Store Info */}
            <div className="p-5">
                <h3 className="text-xl font-bold mb-3 text-black">Auckland Store</h3>

                <div className="flex items-start gap-2 text-gray-600 mb-5">
                <MapPin className="w-4 h-4 mt-0.5 text-blue-600 flex shrink-0" />
                <span className="text-sm text-black">259 Great South Road, Otahuhu, Auckland, NZ</span>
                </div>

                {/* Hours Section */}
                <div className="border-t pt-4">
                <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-semibold text-gray-600 uppercase">Today's Hours</span>
                    <span className="text-xs text-gray-600">{getCurrentTime()}</span>
                </div>
                
                <div className="flex justify-between items-center mb-2">
                    <span className="text-lg font-bold text-black">{getTodayTimesAuckland()}</span>
                    <span className="text-green-600 text-sm font-semibold">Open</span>
                </div>

                <div className="mb-4">
                    <div className="w-full bg-green-100 rounded-full h-1.5">
                    <div className={`${aucklandState === 1 && 'bg-green-500'} ${aucklandState === 0 && 'bg-red-500'} ${aucklandState === 2 && 'bg-orange-500'} h-1.5 rounded-full`} style={{ width: `${getProgressPercentage("Auckland")}%` }}></div>
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
                    <div className="flex justify-between"><span>Monday</span><span>9:00 AM - 5:00 PM</span></div>
                    <div className="flex justify-between"><span>Tuesday</span><span>9:00 AM - 5:00 PM</span></div>
                    <div className="flex justify-between"><span>Wednesday</span><span>9:00 AM - 5:00 PM</span></div>
                    <div className="flex justify-between"><span>Thursday</span><span>9:00 AM - 5:00 PM</span></div>
                    <div className="flex justify-between"><span>Friday</span><span>9:00 AM - 5:00 PM</span></div>
                    <div className="flex justify-between"><span>Saturday</span><span>10:00 AM - 5:00 PM</span></div>
                    <div className="flex justify-between"><span className="text-red-600">Sunday</span><span className="text-red-600">Closed</span></div>
                    </div>
                )}
                </div>

                {/* Map */}
                <div className="mt-5 pt-4 border-t">
                <div className="w-full h-100 bg-gray-200 rounded mb-4 flex items-center justify-center">
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6377.716950796189!2d174.83579619531918!3d-36.94154901302845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d0d4eb9825f5013%3A0x17aa10ae5f4183d9!2sIngs%20Trading%20Ltd!5e0!3m2!1sen!2snz!4v1768529338123!5m2!1sen!2snz" 
                            className="cover-full w-full h-full rounded mb-4"
                            style={{ border: 0 }} 
                            allowFullScreen="" 
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
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

            {/* Hamilton Store */}
            <div className="bg-white rounded-2xl shadow-md overflow-hidden">
            {/* Store Image */}
            <div className="relative h-40">
                <img 
                src={hamiltonStore1} 
                alt="Hamilton Store"
                className="w-full h-full object-cover"
                />
                {hamiltonState === 0 && <div className="absolute top-3 right-3 bg-red-500 text-white px-4 py-1.5 rounded-full font-bold text-xs flex items-center gap-1">
                                        <span className="w-2 h-2 bg-white rounded-full"></span>
                                        CLOSED
                                        </div>}
                {hamiltonState === 1 && <div className="absolute top-3 right-3 bg-green-500 text-white px-4 py-1.5 rounded-full font-bold text-xs flex items-center gap-1">
                                        <span className="w-2 h-2 bg-white rounded-full"></span>
                                        OPEN NOW
                                        </div>}
                {hamiltonState === 2 && <div className="absolute top-3 right-3 bg-orange-500 text-white px-4 py-1.5 rounded-full font-bold text-xs flex items-center gap-1">
                                        <span className="w-2 h-2 bg-white rounded-full"></span>
                                        CLOSING SOON
                                        </div>}
            </div>

            {/* Store Info */}
            <div className="p-5">
                <h3 className="text-xl font-bold mb-3 text-black">Hamilton Store</h3>

                <div className="flex items-start gap-2 text-gray-600 mb-5">
                <MapPin className="w-4 h-4 mt-0.5 text-blue-600 flex shrink-0" />
                <span className="text-sm text-black">4 Keddell Street, Frankton, Hamilton, NZ</span>
                </div>

                {/* Hours Section */}
                <div className="border-t pt-4">
                <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-semibold text-gray-600 uppercase">Today's Hours</span>
                    <span className="text-xs text-gray-600">{getCurrentTime()}</span>
                </div>
                
                <div className="flex justify-between items-center mb-2">
                    <span className="text-lg font-bold text-black">{getTodayTimesHamilton()}</span>
                    <span className="text-red-600 text-sm font-semibold">Closed</span>
                </div>

                <div className="mb-4">
                    <div className="w-full bg-green-100 rounded-full h-1.5">
                    <div className={` ${hamiltonState === 1 && 'bg-green-500'} ${hamiltonState === 0 && 'bg-red-500'} ${hamiltonState === 2 && 'bg-orange-500'} h-1.5 rounded-full`} style={{ width: `${getProgressPercentage("Hamilton")}%` }}></div>
                    </div>
                    <p className="text-xs text-gray-600 mt-1">Closed</p>
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
                    <div className="flex justify-between"><span>Monday</span><span>9:00 AM - 5:30 PM</span></div>
                    <div className="flex justify-between"><span>Tuesday</span><span>9:00 AM - 5:30 PM</span></div>
                    <div className="flex justify-between"><span>Wednesday</span><span>9:00 AM - 5:30 PM</span></div>
                    <div className="flex justify-between"><span>Thursday</span><span>9:00 AM - 5:30 PM</span></div>
                    <div className="flex justify-between"><span>Friday</span><span>9:00 AM - 5:30 PM</span></div>
                    <div className="flex justify-between"><span>Saturday</span><span>8:00 AM - 5:00 PM</span></div>
                    <div className="flex justify-between"><span className="text-red-600">Sunday</span><span className="text-red-600">Closed</span></div>
                    </div>
                )}
                </div>

                {/* Map */}
                <div className="mt-5 pt-4 border-t">
                    <div className="w-full h-100 bg-gray-200 rounded mb-4 flex items-center justify-center">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6306.260393118721!2d175.26593904391362!3d-37.78698845646589!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d6d220f606ea8e1%3A0x9d97216f18026327!2sIngs%20Trading!5e0!3m2!1sen!2snz!4v1768527965010!5m2!1sen!2snz" 
                            className="cover-full w-full h-full rounded mb-4"
                            style={{ border: 0 }} 
                            allowFullScreen="" 
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
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