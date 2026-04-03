import React from 'react';
    import Hero from '../components/Hero';
    import ProductGrid from '../components/ProductGrid';
    import { products } from '../data/products';

    const HomePage: React.FC = () => {
      // Display a subset of products for the home page, e.g., the first 4
      const featuredProducts = products.slice(0, 4);

      return (
        <div className="bg-gray-50 min-h-screen">
          <Hero />
          <ProductGrid products={featuredProducts} title="Our Bestsellers" />
          {/* Add more sections here like categories, testimonials, etc. */}
        </div>
      );
    };

    export default HomePage;