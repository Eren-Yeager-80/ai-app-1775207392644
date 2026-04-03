import React from 'react';
    import { Store, Facebook, Instagram, Twitter } from 'lucide-react';

    const Footer: React.FC = () => {
      return (
        <footer className="bg-gray-800 text-gray-300 py-8 mt-12">
          <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 text-2xl font-bold text-white mb-4">
                <Store size={32} className="text-indigo-400" />
                <span>ElectroMart</span>
              </div>
              <p className="text-sm">Your one-stop shop for all electronics.</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-indigo-400 transition-colors text-sm">About Us</a></li>
                <li><a href="#" className="hover:text-indigo-400 transition-colors text-sm">Shop</a></li>
                <li><a href="#" className="hover:text-indigo-400 transition-colors text-sm">FAQ</a></li>
                <li><a href="#" className="hover:text-indigo-400 transition-colors text-sm">Privacy Policy</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
              <p className="text-sm">123 Tech Lane, Innovation City, 98765</p>
              <p className="text-sm">Email: info@electromart.com</p>
              <p className="text-sm">Phone: (123) 456-7890</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">
                  <Facebook size={24} />
                </a>
                <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">
                  <Instagram size={24} />
                </a>
                <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">
                  <Twitter size={24} />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm">
            &copy; {new Date().getFullYear()} ElectroMart. All rights reserved.
          </div>
        </footer>
      );
    };

    export default Footer;