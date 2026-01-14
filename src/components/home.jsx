import Navbar from './navbar'
import locationIcon from '../assets/location.png';
import wholesaleIcon from '../assets/wholesale.png';
import checkIcon from '../assets/check.png';
import mainImage from '../assets/main.png';

function Home() {

  return (
    <>
       <Navbar/> 
      <div className="w-full bg-black shadow-sm top-0 left-0 right-0 h-[80vh] relative">
        <img src={mainImage} alt="Main Banner" className="w-full h-full object-cover absolute z-1"/>
        <h1 className="absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl md:text-6xl font-bold text-center">
          Your Trusted Source of Asian Goods in New Zealand
        </h1>
      </div>
      {/* Icon Section */}
      <div className="w-full bg-white h-[10vh] flex items-center justify-center">
        <div className="w-100 h-20 flex items-center justify-between">
          <div className="w-12 h-12 rounded-full flex items-center justify-center">
              <img src={locationIcon} alt="Location icon" className="object-contain"/>
          </div>
          <h2 className="text-black text-2xl font-semibold p-4 text-center">Two Convenient Locations</h2>
          <div className="border-l border-gray-300 h-full"></div>
        </div>

        <div className="w-100 h-20 flex items-center justify-between ml-10">
          <div className="w-12 h-12 rounded-full flex items-center justify-center">
              <img src={wholesaleIcon} alt="Wholesale icon" className="object-contain"/>
          </div>
          <h2 className="text-black text-2xl font-semibold p-4 text-center">Wholesale & Retail Options</h2>
          <div className="border-l border-gray-300 h-full"></div>
        </div>

        <div className="w-80 h-20 flex items-center justify-between ml-10">
          <div className="w-12 h-12 rounded-full flex items-center justify-center">
              <img src={checkIcon} alt="Check icon" className="object-contain"/>
          </div>
          <h2 className="text-black text-2xl font-semibold p-4 text-center">Quality Guaranteed</h2>
        </div>
      </div>
    </>
  )
}

export default Home