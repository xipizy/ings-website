import { Facebook, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* RetailHub Section */}
          <div>
            <h3 className="text-xl font-bold mb-3">ING'S TRADING LTD.</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your trusted retail partner across New Zealand.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-400 text-sm hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/stores" className="text-gray-400 text-sm hover:text-white transition-colors">
                  Stores
                </a>
              </li>
              <li>
                <a href="/wholesale" className="text-gray-400 text-sm hover:text-white transition-colors">
                  Wholesale Inquiries
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-400 text-sm hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-base font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li>
                <a href="mailto:paul@ings.co.nz" className="text-gray-400 text-sm hover:text-white transition-colors">
                  Auckland : paul@ings.co.nz
                </a>
              </li>
              <li>
                <a href="tel:092762701" className="text-gray-400 text-sm hover:text-white transition-colors">
                  Auckland : (09) 276 2701
                </a>
              </li>
              <li>
                <a href="mailto:ingstradingltd@outlook.com" className="text-gray-400 text-sm hover:text-white transition-colors">
                  Hamilton : ingstradingltd@outlook.com
                </a>
              </li>
              <li>
                <a href="tel:078481668" className="text-gray-400 text-sm hover:text-white transition-colors">
                  Hamilton : (07) 848 1668
                </a>
              </li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h4 className="text-base font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © 2026 ING'S TRADING LTD. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}