import Navbar from './navbar';
import { useEffect, useState, useRef } from 'react';
import { MapPin, Phone, ChevronDown, Clock } from 'lucide-react';
import aucklandStore1 from '../assets/aucklandStore1.png';
import hamiltonStore1 from '../assets/hamiltonStore1.png';
import Footer from './footer';
import ContactForm from './contactForm';

export default function Store() {

    const storesRef = useRef(null);

    const [showAllHours1, setShowAllHours1] = useState(false);
    const [showAllHours2, setShowAllHours2] = useState(false);
    const [call1, setCall1] = useState(false);
    const [call2, setCall2] = useState(false);

    const [aucklandState, setAucklandState] = useState(0);
    const [hamiltonState, setHamiltonState] = useState(0);
    // 0 == Closed, 1 == Open, 2 == Closing Soon

    const scheduleDataAuckland = [
            { day: "Monday", hours: "9:00 AM - 5:00 PM" },
            { day: "Tuesday", hours: "9:00 AM - 5:00 PM" },
            { day: "Wednesday", hours: "9:00 AM - 5:00 PM" },
            { day: "Thursday", hours: "9:00 AM - 5:00 PM" },
            { day: "Friday", hours: "9:00 AM - 5:00 PM" },
            { day: "Saturday", hours: "10:00 AM - 5:00 PM" },
            { day: "Sunday", hours: "Closed", closed: true }
        ];

    const scheduleDataHamilton = [
            { day: "Monday", hours: "9:00 AM - 5:30 PM" },
            { day: "Tuesday", hours: "9:00 AM - 5:30 PM" },
            { day: "Wednesday", hours: "9:00 AM - 5:30 PM" },
            { day: "Thursday", hours: "9:00 AM - 5:30 PM" },
            { day: "Friday", hours: "9:00 AM - 5:30 PM" },
            { day: "Saturday", hours: "8:00 AM - 5:00 PM" },
            { day: "Sunday", hours: "Closed", closed: true }
        ];

    const currentDay = new Date().toLocaleDateString('en-US', { weekday: 'long' });

    const scrollToStores = () => {    
        storesRef.current?.scrollIntoView({ behavior: 'smooth' });
    };
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
        
        if (day === 0) return 100;

        let hourString = "";
        if (storeName === 'Auckland') {
            // Get starting hour based on day
            hourString = getTodayTimesAuckland();
        } else {
            // Get starting hour based on day
            hourString = getTodayTimesHamilton();
        }   

            let [startTime, endTime] = hourString.split(' - ');
            let startHour = parseInt(startTime.split(':')[0]);
            let endHour = parseInt(endTime.split(':')[0]) + (parseInt(endTime.split(':')[1]) / 60) + 12; // Convert to 24-hour format

            let totalHours = endHour - startHour;
            let elapsedHours = hour + (minute / 60) - startHour;

            if (elapsedHours < 0) return 0;
            if (elapsedHours > totalHours) return 100;
            return (elapsedHours / totalHours) * 100;
    }

    const getTimeToClosing = (storeName) => {
        const now = new Date();
        const day = now.getDay();
        const hour = now.getHours();
        const minute = now.getMinutes();

        if (day === 0) return "Closed";
        
        let hourString = "";
        if (storeName === 'Auckland') {
            // Get starting hour based on day
            hourString = getTodayTimesAuckland();
            
        } else {
            // Get starting hour based on day
            hourString = getTodayTimesHamilton();
        }   
            let [startTime, endTime] = hourString.split(' - ');
            let startHour = parseInt(startTime.split(':')[0]);
            let endHour = parseInt(endTime.split(':')[0]) + (parseInt(endTime.split(':')[1]) / 60) + 12; // Convert to 24-hour format

            let totalHours = endHour - startHour;
            let hoursToClose = endHour - (hour + (minute / 60));
        
            if (hoursToClose < 0) return "Closed";

            if (hoursToClose > totalHours) return "Opens in " + Math.floor(hoursToClose - totalHours) + " hours " + Math.round(((hoursToClose - totalHours) % 1) * 60) + " mins";

            return "Closes in " + Math.floor(hoursToClose) + " hours " + Math.round((hoursToClose % 1) * 60) + " mins";
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
                <h1 className="text-7xl font-bold mb-6">Our Locations</h1>
                <p className="text-base md:text-2xl leading-relaxed opacity-90">
                    Visit us at either of our locations or reach out through the contact details below.
                </p>
                <button onClick={scrollToStores} className="bg-red-500 hover:bg-red-600 text-white font-bold px-8 py-4 rounded-full text-xl transition-colors cursor-pointer mt-4">
                    Go To Stores
                </button>
            </div>
        </div>

        <div ref={storesRef} className="min-h-max bg-gray-200 p-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
            {/* Auckland Store */}
            <div className="bg-white rounded-2xl shadow-md overflow-hidden">
            {/* Store Image */}
            <div className="relative h-40">
                <img 
                src={aucklandStore1} 
                alt="Auckland Store"
                className="w-full h-full object-cover"
                />

                {aucklandState === 0 && <div className="absolute top-3 right-3 bg-red-500 text-white px-4 py-1.5 rounded-full font-bold text-xs flex items-center gap-1">
                                        <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                                        CLOSED
                                        </div>}
                {aucklandState === 1 && <div className="absolute top-3 right-3 bg-green-500 text-white px-4 py-1.5 rounded-full font-bold text-xs flex items-center gap-1">
                                        <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                                        OPEN NOW
                                        </div>}
                {aucklandState === 2 && <div className="absolute top-3 right-3 bg-orange-500 text-white px-4 py-1.5 rounded-full font-bold text-xs flex items-center gap-1">
                                        <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
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
                    {aucklandState === 0 && <span className="text-red-600 text-sm font-semibold">Closed</span>}
                    {aucklandState === 2 && <span className="text-orange-600 text-sm font-semibold">Closing Soon</span>}
                    {aucklandState === 1 && <span className="text-green-600 text-sm font-semibold">Open</span>}
                </div>

                <div className="mb-4">
                    <div className="w-full bg-green-100 rounded-full h-1.5">
                    <div className={`${aucklandState === 1 && 'bg-green-500'} ${aucklandState === 0 && 'bg-red-500'} ${aucklandState === 2 && 'bg-orange-500'} h-1.5 rounded-full`} style={{ width: `${getProgressPercentage("Auckland")}%` }}></div>
                    </div>
                    <p className="text-xs text-gray-600 mt-1">{getTimeToClosing("Auckland")}</p>
                </div>

                {/* View All Hours - Auckland Store */}
                <button 
                    onClick={() => setShowAllHours1(!showAllHours1)}
                    className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200"
                >
                    <Clock className="w-4 h-4" />
                    <span>View All Hours</span>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${showAllHours1 ? 'rotate-180' : ''}`} />
                </button>

                <div className={`
                    transition-all duration-300 ease-in-out overflow-hidden
                    ${showAllHours1 ? 'max-h-96 opacity-100 mt-3' : 'max-h-0 opacity-0'}
                `}>
                    <div className="space-y-2 text-sm text-black">
                    {scheduleDataAuckland.map((item, index) => (
                        <div key={index} className="flex justify-between">
                        <span className={item.closed ? "text-red-600" : " text-black"}>
                            {item.day}
                            {/* Green Dot for current day */}
                            {item.day === currentDay && (
                            <span className="inline-block w-2 h-2 bg-green-500 rounded-full animate-pulse ml-2"></span>
                            )}
                        </span>
                        <span className={item.closed ? "text-red-600" : " text-black"}>
                            {item.hours}
                        </span>
                        </div>
                    ))}
                    </div>
                </div>
                
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
                <div className="grid grid-cols-1 mt-5 pt-4 border-t">
                <button onClick={() => setCall1(!call1)} className="flex flex-col items-center gap-1 text-blue-600 hover:bg-blue-50 py-2 rounded transition duration-150">
                    <Phone className="w-5 h-5" />
                    <span className="text-xs font-medium">Contact Details</span>
                </button>
                    <div className={`
                        transition-all duration-400 ease-in-out overflow-hidden
                        ${call1 ? 'max-h-20 opacity-100 mt-2' : 'max-h-0 opacity-0'}
                    `}>
                        <p className="text-black text-center">Phone: (09) 276 2701</p>
                        <p className="text-black text-center">Email: paul@ings.co.nz</p>
                    </div>
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
                                        <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                                        CLOSED
                                        </div>}
                {hamiltonState === 1 && <div className="absolute top-3 right-3 bg-green-500 text-white px-4 py-1.5 rounded-full font-bold text-xs flex items-center gap-1">
                                        <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                                        OPEN NOW
                                        </div>}
                {hamiltonState === 2 && <div className="absolute top-3 right-3 bg-orange-500 text-white px-4 py-1.5 rounded-full font-bold text-xs flex items-center gap-1">
                                        <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
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
                    {hamiltonState === 0 && <span className="text-red-600 text-sm font-semibold">Closed</span>}
                    {hamiltonState === 2 && <span className="text-orange-600 text-sm font-semibold">Closing Soon</span>}
                    {hamiltonState === 1 && <span className="text-green-600 text-sm font-semibold">Open</span>}
                </div>

                <div className="mb-4">
                    <div className="w-full bg-green-100 rounded-full h-1.5">
                    <div className={` ${hamiltonState === 1 && 'bg-green-500'} ${hamiltonState === 0 && 'bg-red-500'} ${hamiltonState === 2 && 'bg-orange-500'} h-1.5 rounded-full`} style={{ width: `${getProgressPercentage("Hamilton")}%` }}></div>
                    </div>
                    <p className="text-xs text-gray-600 mt-1">{getTimeToClosing("Hamilton")}</p>
                </div>

                {/* View All Hours - Hamilton Store */}
                <button 
                    onClick={() => setShowAllHours2(!showAllHours2)}
                    className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200"
                >
                    <Clock className="w-4 h-4" />
                    <span>View All Hours</span>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${showAllHours2 ? 'rotate-180' : ''}`} />
                </button>

                <div className={`
                    transition-all duration-300 ease-in-out overflow-hidden
                    ${showAllHours2 ? 'max-h-96 opacity-100 mt-3' : 'max-h-0 opacity-0'}
                `}>
                    <div className="space-y-2 text-sm text-black">
                    {scheduleDataHamilton.map((item, index) => (
                        <div key={index} className="flex justify-between">
                        <span className={item.closed ? "text-red-600" : " text-black"}>
                            {item.day}
                            {/* Green Dot for current day */}
                            {item.day === currentDay && (
                            <span className="inline-block w-2 h-2 bg-green-500 rounded-full animate-pulse ml-2"></span>
                            )}
                        </span>
                        <span className={item.closed ? "text-red-600" : " text-black"}>
                            {item.hours}
                        </span>
                        </div>
                    ))}
                    </div>
                </div>
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
                <div className="grid grid-cols-1 mt-5 pt-4 border-t">
                <button onClick={() => setCall2(!call2)} className="flex flex-col items-center gap-1 text-blue-600 hover:bg-blue-50 py-2 rounded transition duration-150">
                    <Phone className="w-5 h-5" />
                    <span className="text-xs font-medium">Contact Details</span>
                </button>
                    <div className={`
                        transition-all duration-400 ease-in-out overflow-hidden
                        ${call2 ? 'max-h-20 opacity-100 mt-2' : 'max-h-0 opacity-0'}
                    `}>
                        <p className="text-black text-center">Phone: (07) 849 1668</p>
                        <p className="text-black text-center">Email: ingstradingltd@outlook.com</p>
                    </div>
                </div>
            </div>
            </div>  
        </div>
        </div>
        {/* Form Section
        <div className="max-w-2xl mx-auto mt-5 mb-10">
            <h2 className="text-5xl font-bold text-center mb-8 text-black">Send Us a Message</h2>
            <p className="text-center mb-8 text-lg text-black">Got a question? Fill out the form below and we'll get back to you as soon as possible.</p>
            <ContactForm/>
        </div> */}
        <Footer/>
    </>
  );
}