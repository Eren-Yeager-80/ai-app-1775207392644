import React from 'react';
    import { Link } from 'react-router-dom';

    const Hero: React.FC = () => {
      return (
        <section
          className="relative h-[60vh] md:h-[70vh] bg-cover bg-center flex items-center justify-center text-white"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1542393545-10f5c24fd695?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')" }}
        >
          <div className="absolute inset-0 bg-black opacity-60"></div>
          <div className="relative z-10 text-center px-4">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 drop-shadow-lg">
              Discover the Future of Electronics
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto drop-shadow-md">
              Experience cutting-edge technology and premium quality products delivered right to your door.
            </p>
            <Link
              to="/shop"
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg transform transition duration-300 ease-in-out hover:scale-105"
            >
              Shop Now
            </Link>
          </div>
        </section>
      );
    };

    export default Hero;