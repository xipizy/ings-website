import logo from '../assets/logo.png';

function handleClickStores() {
  window.location.href = '/stores';
}

function handleClickHome() {
  window.location.href = '/#slide1';
}

function handleClickWholesale() {
  window.location.href = '/wholesale';
}

export default function Navbar() {
  return (
    <>
    <header className="w-full bg-white border-b border-gray-200 shadow-sm top-0 left-0 right-0 z-">
      <div className="w-full px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full flex items-center justify-center">
                <img src={logo} alt="ING'S TRADING LTD. Logo" className="object-contain"/>
            </div>
            <div>
              <div className="text-s font-semibold text-gray-800">ING'S TRADING LTD.</div>
              <div className="text-xs text-gray-500 whitespace-nowrap">吴氏贸易有限公司</div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex items-center">
            <button onClick={handleClickHome} className="px-4 py-2 text-gray-600 text-sm rounded bg-white cursor-pointer hover:bg-red-400 transition-colors duration-350 hover:text-white">
              Home
            </button>
            <button onClick={handleClickStores} className="px-4 py-2 text-gray-600 text-sm rounded bg-white cursor-pointer hover:bg-red-400 transition-colors duration-350 hover:text-white">
              Stores
            </button>
            <button onClick={handleClickWholesale} className="px-4 py-2 text-gray-600 text-sm rounded bg-white cursor-pointer hover:bg-red-400 transition-colors duration-350 hover:text-white">
              Wholesale Inquiries
            </button>
          </nav>
        </div>
      </div>
    </header>
    </>
  );
}