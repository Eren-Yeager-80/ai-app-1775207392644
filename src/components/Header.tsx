import React from 'react';
    import { ShoppingCart, User, Store } from 'lucide-react';
    import { Link } from 'react-router-dom';

    const Header: React.FC = () => {
      return (
        <header className="bg-white shadow-sm sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2 text-2xl font-bold text-gray-800 hover:text-indigo-600 transition-colors">
              <Store size={32} className="text-indigo-600" />
              <span>ElectroMart</span>
            </Link>

            <nav className="hidden md:flex space-x-6">
              <Link to="/" className="text-gray-600 hover:text-indigo-600 transition-colors text-lg font-medium">
                Home
              </Link>
              <Link to="/shop" className="text-gray-600 hover:text-indigo-600 transition-colors text-lg font-medium">
                Shop
              </Link>
              <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors text-lg font-medium">
                Categories
              </a>
              <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors text-lg font-medium">
                Contact
              </a>
            </nav>

            <div className="flex items-center space-x-4">
              <button className="text-gray-600 hover:text-indigo-600 transition-colors">
                <ShoppingCart size={24} />
              </button>
              <button className="text-gray-600 hover:text-indigo-600 transition-colors">
                <User size={24} />
              </button>
            </div>
          </div>
        </header>
      );
    };

    export default Header;