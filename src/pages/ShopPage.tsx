import React from 'react';
    import ProductGrid from '../components/ProductGrid';
    import { products } from '../data/products';

    const ShopPage: React.FC = () => {
      return (
        <div className="bg-gray-50 min-h-screen">
          <ProductGrid products={products} title="Explore Our Collection" />
        </div>
      );
    };

    export default ShopPage;