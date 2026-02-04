import logo from '../assets/logo.png';
import { useState } from 'react';
import { Menu, X, Home, User, Settings, Bell, Search, LogOut } from 'lucide-react';

function handleClickStores() {
  window.location.href = '/stores';
}

function handleClickHome() {
  window.location.href = '/';
}

function handleClickWholesale() {
  window.location.href = '/wholesale';
}

function handleClickAboutUs() {
  window.location.href = '/aboutus';
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
    {/* Deskstop Version */}
    <div className="hidden md:flex">
    <header className="w-full bg-white border-b border-gray-200 shadow-sm top-0 left-0 right-0 z-1">
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
            <button onClick={handleClickAboutUs} className="px-4 py-2 text-gray-600 text-sm rounded bg-white cursor-pointer hover:bg-red-400 transition-colors duration-350 hover:text-white">
              About Us
            </button>
          </nav>
        </div>
      </div>
    </header>
    </div>

    {/* Mobile Version */}
      <div className="flex md:hidden">
        {/* Navbar */}
        <nav className="w-full bg-white border-b border-gray-200 shadow-sm top-0 left-0 right-0 z-100">
          <div className="px-4 h-16 flex items-center justify-between">
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
            {/* Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-10 h-10 flex items-center justify-center active:scale-95 transition-all duration-200"
            >
              {isOpen ? (
                <X className="w-5 h-5 text-gray-600" />
              ) : (
                <Menu className="w-5 h-5 text-gray-600" />
              )}
            </button>
          </div>
        </nav>

        {/* Dropdown Menu */}
        <div
          className={`fixed top-16 left-0 right-0 z-40 transition-all duration-300 ease-out ${
            isOpen
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 -translate-y-4 pointer-events-none'
          }`}
        >
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 shadow-2xl shadow-black/50 overflow-hidden">
            <div className="p-4">
              <a
                href="/"
                className="block px-7 py-5 mb-2 bg-white bg-opacity-5 rounded-xl text-black font-medium text-base transition-all duration-150 border border-transparent active:text-white active:bg-red-600 active:border-red-600 active:scale-95 relative overflow-hidden"
              >
                <span className="absolute left-0 top-0 h-full w-1 bg-red-600"></span>
                Home
              </a>

              <a
                href="/stores"
                className="block px-7 py-5 mb-2 bg-white bg-opacity-5 rounded-xl text-black font-medium text-base transition-all duration-150 border border-transparent active:text-white active:bg-red-600 active:border-red-600 active:scale-95 relative overflow-hidden"
              >
                <span className="absolute left-0 top-0 h-full w-1 bg-red-600"></span>
                Stores
              </a>

              <a
                href="/wholesale"
                className="block px-7 py-5 mb-2 bg-white bg-opacity-5 rounded-xl text-black font-medium text-base transition-all duration-150 border border-transparent active:text-white active:bg-red-600 active:border-red-600 active:scale-95 relative overflow-hidden"
              >
                <span className="absolute left-0 top-0 h-full w-1 bg-red-600"></span>
                Wholesale Inquiries
              </a>

              <a
                href="/aboutus"
                className="block px-7 py-5 mb-2 bg-white bg-opacity-5 rounded-xl text-black font-medium text-base transition-all duration-150 border border-transparent active:text-white active:bg-red-600 active:border-red-600 active:scale-95 relative overflow-hidden"
              >
                <span className="absolute left-0 top-0 h-full w-1 bg-red-600"></span>
                About Us
              </a>
            </div>
          </div>
        </div>

        {/* Blur Effect on dropdown */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-30 transition-opacity duration-300"
            onClick={() => setIsOpen(false)}
            style={{ top: '64px' }}
          />
        )}

    </div>
    </>
  );
}