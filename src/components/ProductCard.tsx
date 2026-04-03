import React from 'react';
    import { Link } from 'react-router-dom';
    import { ShoppingCart } from 'lucide-react';

    interface ProductCardProps {
      product: {
        id: string;
        name: string;
        price: number;
        imageUrl: string;
      };
    }

    const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
      return (
        <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
          <Link to={`/product/${product.id}`} className="block">
            <div className="relative h-64 overflow-hidden">
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <span className="text-white text-lg font-semibold">${product.price.toFixed(2)}</span>
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2 truncate group-hover:text-indigo-600 transition-colors">
                {product.name}
              </h3>
            </div>
          </Link>
          <div className="p-4 border-t border-gray-100 flex justify-between items-center">
            <span className="text-2xl font-bold text-indigo-600">${product.price.toFixed(2)}</span>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors flex items-center space-x-2">
              <ShoppingCart size={18} />
              <span>Add to Cart</span>
            </button>
          </div>
        </div>
      );
    };

    export default ProductCard;