import Navbar from "./navbar";
import Footer from "./footer";

export default function AboutUs() {
    const yearsInBusiness = new Date().getFullYear() - 1992;
  return (
    <>
        <Navbar/>
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div className="space-y-8">

                {/* Heading */}
                <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                About Us
                </h1>

                {/* Description */}
                <p className="text-lg text-slate-600 leading-relaxed">
                Ing’s Trading has been a trusted name in the retail and wholesale service industry for over {yearsInBusiness} years. Established in 1992 in Hamilton, the business began by servicing the foodservice industry throughout the Waikato and Bay of Plenty regions. 
                From the beginning, Ing’s Trading built its reputation on reliable service, quality products, and strong customer relationships.
                </p>

                <p className="text-lg text-slate-600 leading-relaxed">
                As demand increased, the business expanded its operations into Auckland in 1994, allowing it to better serve a wider customer base. This growth marked an important milestone and reflected the company’s commitment to meeting the needs of its customers as they evolved.
                </p>

                <p className="text-lg text-slate-600 leading-relaxed">
                    Today, Ing’s Trading operates as a dedicated retail and wholesale store, supplying a wide range of products to businesses and individual customers alike. With decades of industry experience, the company continues to provide dependable service and competitive offerings, remaining a trusted partner for customers across the regions it serves.
                </p>
            </div>

            {/* Right Column - Image */}
            <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img 
                    src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop" 
                    alt="Premium retail store interior" 
                    className="w-full h-auto object-cover"
                />
                </div>
            </div>
            </div>
        </div>
        </div>
        <Footer/>
    </>
  );
}