import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 shadow-md py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <div className="flex-shrink-0 flex items-center">
          <span className={`font-display text-2xl font-bold tracking-widest uppercase ${isScrolled ? 'text-royal-red' : 'text-white'}`}>
            Maharani
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          {['Collections', 'Designers', 'Heritage', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className={`font-serif text-sm tracking-widest hover:text-royal-gold transition-colors ${isScrolled ? 'text-stone-dark' : 'text-white/90'}`}
            >
              {item.toUpperCase()}
            </a>
          ))}
          <button className={`p-2 rounded-full hover:bg-white/20 transition ${isScrolled ? 'text-stone-dark' : 'text-white'}`}>
            <ShoppingBag size={20} />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className={isScrolled ? 'text-stone-dark' : 'text-white'}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-white absolute w-full shadow-xl animate-fade-in-down">
          <div className="px-4 pt-2 pb-8 space-y-2">
            {['Collections', 'Designers', 'Heritage', 'Contact'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block px-3 py-4 font-serif text-stone-dark hover:bg-stone-50 hover:text-royal-red text-center tracking-widest border-b border-stone-100"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.toUpperCase()}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
