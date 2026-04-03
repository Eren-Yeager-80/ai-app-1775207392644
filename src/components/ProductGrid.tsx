import React from 'react';
    import ProductCard from './ProductCard';

    interface Product {
      id: string;
      name: string;
      price: number;
      imageUrl: string;
    }

    interface ProductGridProps {
      products: Product[];
      title?: string;
    }

    const ProductGrid: React.FC<ProductGridProps> = ({ products, title = "Featured Products" }) => {
      return (
        <section className="container mx-auto px-4 py-12">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-10 text-center">
            {title}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      );
    };

    export default ProductGrid;