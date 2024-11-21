import React from 'react';
import Header from './components/Header';
import ProductHero from './components/ProductHero';
import Features from './components/Features';
import Cart from './components/Cart';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-white">
        <Header />
        <Cart />
        <main>
          <ProductHero />
          <Features />
        </main>
        <footer className="bg-gray-50 mt-auto py-12">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="border-t border-gray-900/10 pt-8">
              <p className="text-sm leading-5 text-gray-500">
                © 2023 Yokel.dev. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </CartProvider>
  );
}

export default App;