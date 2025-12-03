import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-stone-900 text-ivory py-16 border-t-4 border-royal-gold">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          <div className="col-span-1 md:col-span-1">
            <span className="font-display text-2xl font-bold tracking-widest uppercase text-white mb-6 block">
              Maharani
            </span>
            <p className="font-serif text-stone-400 text-sm leading-loose">
              Celebrating the timeless elegance of Indian heritage through bespoke craftsmanship and luxury couture.
            </p>
          </div>

          <div>
            <h4 className="font-sans font-bold text-royal-gold tracking-widest text-sm mb-6 uppercase">Collections</h4>
            <ul className="space-y-4 font-serif text-stone-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Bridal Couture</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Festive Wear</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Royal Trousseau</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Accessories</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-sans font-bold text-royal-gold tracking-widest text-sm mb-6 uppercase">Visit Us</h4>
            <ul className="space-y-4 font-serif text-stone-400 text-sm">
              <li>12, Hauz Khas Village</li>
              <li>New Delhi, India 110016</li>
              <li>+91 11 2345 6789</li>
              <li>contact@maharanicouture.com</li>
            </ul>
          </div>

          <div>
            <h4 className="font-sans font-bold text-royal-gold tracking-widest text-sm mb-6 uppercase">Follow Us</h4>
            <div className="flex space-x-6 text-stone-400">
              <a href="#" className="hover:text-white hover:scale-110 transition-all"><Instagram size={24} /></a>
              <a href="#" className="hover:text-white hover:scale-110 transition-all"><Facebook size={24} /></a>
              <a href="#" className="hover:text-white hover:scale-110 transition-all"><Twitter size={24} /></a>
            </div>
            <div className="mt-8">
               <p className="text-xs text-stone-600">© 2024 Maharani Couture. All rights reserved.</p>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
