import Navbar from './navbar'

function Stores() {
    return(
        <>
            <nav className="sticky top-0 z-2">
                <Navbar/> 
            </nav>
            <div className="w-full bg-gray-100 py-12 px-4">
            <h2 className="text-4xl font-bold text-center mb-8 text-black">Our Store Locations</h2>
            
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
                    <div className="inline-block bg-red-500 text-white px-6 py-2 rounded-full font-bold mb-2">
                        CLOSED
                    </div>
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
                        <span className="text-black">8:00am - 5:30pm</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="font-semibold text-black">Tuesday</span>
                        <span className="text-black">8:00am - 5:30pm</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="font-semibold text-black">Wednesday</span>
                        <span className="text-black">8:00am - 5:30pm</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="font-semibold text-black">Thursday</span>
                        <span className="text-black">8:00am - 5:30pm</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="font-semibold text-black">Friday</span>
                        <span className="text-black">8:00am - 5:30pm</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="font-semibold text-black">Saturday</span>
                        <span className="text-black">8:00am - 5:30pm</span>
                    </div>
                    </div>
                    
                    {/* Map placeholder */}
                    <div className="w-full h-48 bg-gray-200 rounded mb-4 flex items-center justify-center">
                    <span className="text-gray-500">Map View</span>
                    </div>
                    
                    {/* Status and Phone */}
                    <div className="text-center">
                    <div className="inline-block bg-green-500 text-white px-6 py-2 rounded-full font-bold mb-2">
                        OPEN
                    </div>
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