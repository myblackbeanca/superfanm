import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Why MINY', href: 'https://y.minyvinyl.com' },
    { name: 'Featured', href: '#featured' },
    { name: 'Success Stories', href: '#success-stories' },
    { name: 'Experience', href: '#experience' },
  ];

  return (
    <nav className="bg-purple-900/95 backdrop-blur-sm fixed w-full z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="/" className="text-white font-bold text-xl">MINY</a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-white transition-colors"
              >
                {item.name}
              </a>
            ))}
            <a
              href="https://drop.minyvinyl.com"
              className="bg-purple-500 hover:bg-purple-600 px-4 py-2 rounded-full text-white transition-colors"
            >
              Get Started
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-purple-900/95 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-4 space-y-4">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <a
              href="https://drop.minyvinyl.com"
              className="block bg-purple-500 hover:bg-purple-600 px-4 py-2 rounded-full text-white text-center transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}