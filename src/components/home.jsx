import Navbar from './navbar'
import mainImage from '../assets/main.png';

function Home() {

  return (
    <>
       <Navbar/> 
      <div className="w-full bg-black shadow-sm top-0 left-0 right-0 h-[80vh] relative">
        <img src={mainImage} alt="Main Banner" className="w-full h-full object-cover oberabsolute z-1"/>
        <h1 className="absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl md:text-6xl font-bold text-center">
          Your Trusted Source of Asian Goods in New Zealand
        </h1>
      </div>
    </>
  )
}

export default Home