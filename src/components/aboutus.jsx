import Navbar from "./navbar";
import Footer from "./footer";
import oldHamiltonPhoto from '../assets/oldHamilton.png';
import oldAucklandPhoto from '../assets/oldAuckland.png';
import newHamiltonPhoto from '../assets/newHamilton.png';

export default function AboutUs() {
    const yearsInBusiness = new Date().getFullYear() - 1992;
  return (
    <>
        <Navbar/>
        <div className="min-h-screen bg-gray-150 animate-fade-in">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Section 1 - Content */}
            <div className="space-y-8">

                {/* Heading */}
                <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                About Us
                </h1>

                {/* Description */}
                <p className="text-lg text-slate-800 leading-relaxed">
                Ing's Trading has been a trusted name in the retail and wholesale service industry for over {yearsInBusiness} years. Established in 1992 in Hamilton, the business began by servicing the foodservice industry throughout the Waikato and Bay of Plenty regions. 
                From the beginning, Ing's Trading built its reputation on reliable service, quality products, and strong customer relationships.
                </p>
            </div>

            {/* Section 1 - Image */}
            <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img 
                    src={oldHamiltonPhoto} 
                    alt="Old Storefront of ING'S TRADING LTD. in Hamilton" 
                    className="w-full h-auto object-cover"
                />
                </div>
            </div>

            {/* Section 2 - Image */}
            <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img 
                    src={oldAucklandPhoto} 
                    alt="Old Storefront of ING'S TRADING LTD. in Auckland" 
                    className="w-full h-auto object-cover"
                />
                </div>
            </div>
            {/* Section 2 - Content */}
            <div className="space-y-8">

                {/* Description */}
                <p className="text-lg text-slate-800 leading-relaxed">
                As demand increased, the business expanded its operations into Auckland in 1994, allowing it to better serve a wider customer base. This growth marked an important milestone and reflected the company's commitment to meeting the needs of its customers as they evolved.
                </p>
            </div>

            {/* Section 3 - Content */}
            <div className="space-y-8">

                {/* Description */}
                <p className="text-lg text-slate-800 leading-relaxed">
                    Today, Ing's Trading operates as a dedicated retail and wholesale store, supplying a wide range of products to businesses and individual customers alike. With decades of industry experience, the company continues to provide dependable service and competitive offerings, remaining a trusted partner for customers across the regions it serves.
                </p>
            </div>

             {/* Section 3 - Image */}
            <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img 
                    src={newHamiltonPhoto} 
                    alt="New Storefront of ING'S TRADING LTD. in Hamilton" 
                    className="w-full h-auto object-cover"
                />
                </div>
            </div>
            </div>
        </div>
        </div>
        <Footer/>
        <style jsx>{`
          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }
          .animate-fade-in {
            animation: fadeIn 1s ease-in;
          }
        `}</style>
    </>
  );
}