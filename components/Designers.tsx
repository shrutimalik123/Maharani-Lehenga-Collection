import React from 'react';
import { DESIGNERS } from '../constants';
import GeneratedImage from './GeneratedImage';

const Designers: React.FC = () => {
  return (
    <section id="designers" className="py-24 bg-stone-100 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-royal-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl text-stone-900 mb-4">Our Curators</h2>
          <div className="w-24 h-1 bg-royal-red mx-auto mb-6"></div>
          <p className="font-serif text-stone-600 max-w-2xl mx-auto text-lg italic">
            Visionaries who thread history into every weave.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {DESIGNERS.map((designer) => (
            <div key={designer.id} className="group cursor-pointer">
              <div className="relative overflow-hidden mb-6 shadow-xl border-4 border-white h-96">
                <GeneratedImage
                  prompt={designer.imagePrompt}
                  fallbackSrc={designer.image}
                  alt={designer.name}
                  className="w-full h-full"
                  aspectRatio="3:4"
                />
                <div className="absolute inset-0 bg-royal-red/0 group-hover:bg-royal-red/10 transition-colors duration-500 pointer-events-none"></div>
              </div>
              <div className="text-center">
                <h3 className="font-display text-2xl text-stone-800 mb-2 group-hover:text-royal-red transition-colors">{designer.name}</h3>
                <p className="font-serif text-royal-gold uppercase tracking-widest text-xs mb-3">{designer.specialty}</p>
                <p className="font-sans text-stone-500 text-sm leading-relaxed px-4">{designer.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Designers;