import React from 'react';
import { useInView } from 'react-intersection-observer';
import { useCart } from '../context/CartContext';
import ProductImage from './ProductImage';

export default function ProductHero() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const { addToCart } = useCart();

  return (
    <div className="relative overflow-hidden bg-white">
      <div className="pt-16 sm:pt-24 lg:pt-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
            <div className="max-w-xl">
              <h1 className="font-bold tracking-tight text-secondary">
                <span className="block text-primary text-2xl mb-2">Yokel.dev Presents</span>
                <span className="block text-4xl sm:text-6xl">The Smart Mug for Local Living</span>
              </h1>
              <p className="mt-6 text-lg text-gray-600">
                A perfect blend of tradition and technology. Handcrafted wooden design meets smart temperature control and a beautiful LCD display showing local updates.
              </p>
              <div ref={ref}>
                <div className={`mt-10 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                  <button
                    onClick={addToCart}
                    className="inline-block rounded-md border border-transparent bg-secondary px-8 py-3 text-center font-medium text-primary hover:bg-secondary-light transform transition hover:scale-105"
                  >
                    Pre-order now ($149.99)
                  </button>
                </div>
              </div>
            </div>
            <ProductImage />
          </div>
        </div>
      </div>
    </div>
  );
}