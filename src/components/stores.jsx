import Navbar from './navbar'
import { useEffect } from 'react';
import { useState } from 'react';

function Stores() {
    const [aucklandState, setAucklandState] = useState(0);
    const [hamiltonState, setHamiltonState] = useState(0);
    // 0 == Closed, 1 == Open, 2 == Closing Soon

    useEffect(() => {
        const now = new Date();
        const day = now.getDay();
        const hour = now.getHours();
        const minute = now.getMinutes();

        if (day === 0) {
            setAucklandState(0);
            setHamiltonState(0);
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
            if (day === 6) {
                if (hour >= 8 && hour < 16) {
                    setHamiltonState(1);
                } else if (hour >= 16 && hour < 17) {
                    setHamiltonState(2);
                } else {
                    setHamiltonState(0);
                }
            } else {
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
        }
      }, []);

    return(
        <>
            <nav className="sticky top-0 z-2">
                <Navbar/> 
            </nav>
            <div className="w-full h-full bg-gray-200 py-12 px-4">
            <h2 className="text-5xl font-bold text-center mb-8 text-black">Our Store Locations</h2>
            
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
                {/* Auckland Store */}
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="p-6">
                    <h3 className="text-2xl font-bold mb-4 text-center text-black">Auckland Store</h3>
                    
                    {/* Hours */}
                    <div className="space-y-2 mb-6">
                    <div className="flex justify-between">
                        <span className="font-semibold text-black">Sunday</span>
                        <span className="text-red-600 font-semibold">Closed</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="font-semibold text-black">Monday</span>
                        <span className="text-black">9:00am - 5:00pm</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="font-semibold text-black">Tuesday</span>
                        <span className="text-black">9:00am - 5:00pm</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="font-semibold text-black">Wednesday</span>
                        <span className="text-black">9:00am - 5:00pm</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="font-semibold text-black">Thursday</span>
                        <span className="text-black">9:00am - 5:00pm</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="font-semibold text-black">Friday</span>
                        <span className="text-black">9:00am - 5:00pm</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="font-semibold text-black">Saturday</span>
                        <span className="text-black">9:00am - 5:00pm</span>
                    </div>
                    </div>
                    
                    {/* Map placeholder */}
                    <div className="w-full h-48 bg-gray-200 rounded mb-4 flex items-center justify-center">
                        <span className="text-gray-500">Map View</span>
                    </div>
                    
                    {/* Status and Phone */}
                    <div className="text-center">
                        {aucklandState === 0 ? <div className="inline-block bg-red-500 text-white px-6 py-2 rounded-full font-bold mb-2">CLOSED</div> : null}
                        {aucklandState === 1 ? <div className="inline-block bg-green-500 text-white px-6 py-2 rounded-full font-bold mb-2">OPEN</div> : null}
                        {aucklandState === 2 ? <div className="inline-block bg-orange-400 text-white px-6 py-2 rounded-full font-bold mb-2">CLOSING SOON</div> : null}
                    <p className="text-gray-700">Phone: (09) 299 2701</p>
                    </div>
                </div>
                </div>

                {/* Hamilton Store */}
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="p-6">
                    <h3 className="text-2xl font-bold mb-4 text-center text-black">Hamilton Store</h3>
                    
                    {/* Hours */}
                    <div className="space-y-2 mb-6">
                    <div className="flex justify-between">
                        <span className="font-semibold text-black">Sunday</span>
                        <span className="text-red-600 font-semibold">Closed</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="font-semibold text-black">Monday</span>
                        <span className="text-black">9:00am - 5:30pm</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="font-semibold text-black">Tuesday</span>
                        <span className="text-black">9:00am - 5:30pm</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="font-semibold text-black">Wednesday</span>
                        <span className="text-black">9:00am - 5:30pm</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="font-semibold text-black">Thursday</span>
                        <span className="text-black">9:00am - 5:30pm</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="font-semibold text-black">Friday</span>
                        <span className="text-black">9:00am - 5:30pm</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="font-semibold text-black">Saturday</span>
                        <span className="text-black">8:00am - 5:00pm</span>
                    </div>
                    </div>
                    
                    {/* Map placeholder */}
                    <div className="w-full h-48 bg-gray-200 rounded mb-4 flex items-center justify-center">
                    <span className="text-gray-500">Map View</span>
                    </div>
                    
                    {/* Status and Phone */}
                    <div className="text-center">
                        {hamiltonState === 0 ? <div className="inline-block bg-red-500 text-white px-6 py-2 rounded-full font-bold mb-2">CLOSED</div> : null}
                        {hamiltonState === 1 ? <div className="inline-block bg-green-500 text-white px-6 py-2 rounded-full font-bold mb-2">OPEN</div> : null}
                        {hamiltonState === 2 ? <div className="inline-block bg-orange-400 text-white px-6 py-2 rounded-full font-bold mb-2">CLOSING SOON</div> : null}
                    <p className="text-gray-700">Phone: (07) 848 1998</p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </>
    );
}

export default Stores