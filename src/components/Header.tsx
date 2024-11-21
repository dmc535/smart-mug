import React from 'react';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import { useCart } from '../context/CartContext';

export default function Header() {
  const { toggleCart, itemCount } = useCart();

  return (
    <header className="bg-secondary">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-primary text-xl font-bold">Yokel.dev</span>
            </div>
          </div>
          <div className="flex items-center">
            <button 
              className="relative rounded-full bg-wood p-2 text-secondary hover:bg-wood-dark transition-colors"
              onClick={toggleCart}
            >
              <ShoppingCartIcon className="h-6 w-6" />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-primary text-white text-xs flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}