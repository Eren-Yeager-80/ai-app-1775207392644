import React from 'react';
    import { useParams } from 'react-router-dom';
    import { getProductById } from '../data/products';
    import { ShoppingCart, Star } from 'lucide-react';

    const ProductDetailPage: React.FC = () => {
      const { id } = useParams<{ id: string }>();
      const product = getProductById(id || '');

      if (!product) {
        return (
          <div className="container mx-auto px-4 py-12 text-center text-red-500 font-bold text-2xl">
            Product not found!
          </div>
        );
      }

      return (
        <div className="container mx-auto px-4 py-12 bg-white rounded-xl shadow-lg mt-8 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="aspect-w-16 aspect-h-9 md:aspect-w-4 md:aspect-h-3 lg:aspect-w-1 lg:aspect-h-1 overflow-hidden rounded-lg shadow-md">
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h1 className="text-4xl font-extrabold text-gray-900 mb-4">{product.name}</h1>
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex text-yellow-400">
                  <Star fill="currentColor" size={20} />
                  <Star fill="currentColor" size={20} />
                  <Star fill="currentColor" size={20} />
                  <Star fill="currentColor" size={20} />
                  <Star size={20} />
                </div>
                <span className="text-gray-600 text-sm">(124 reviews)</span>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">{product.description}</p>
              <div className="text-5xl font-bold text-indigo-600 mb-8">${product.price.toFixed(2)}</div>
              <div className="flex space-x-4">
                <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 px-8 rounded-full text-xl flex items-center justify-center space-x-3 transition-colors duration-300 transform hover:scale-105">
                  <ShoppingCart size={24} />
                  <span>Add to Cart</span>
                </button>
                <button className="border border-indigo-600 text-indigo-600 hover:bg-indigo-100 font-bold py-4 px-8 rounded-full text-xl transition-colors duration-300">
                  Buy Now
                </button>
              </div>
            </div>
          </div>

          <div className="mt-16 border-t border-gray-200 pt-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Product Specifications</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>High-resolution display</li>
              <li>Long-lasting battery</li>
              <li>Advanced processor</li>
              <li>Water-resistant design</li>
              <li>1-year warranty</li>
            </ul>
          </div>
        </div>
      );
    };

    export default ProductDetailPage;