import React, { useState } from 'react';
import { LEHNGAS, MandalaIcon } from '../constants';
import GeneratedImage from './GeneratedImage';

const Collection: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'Bridal' | 'Party' | 'Contemporary'>('All');

  const filteredItems = filter === 'All' 
    ? LEHNGAS 
    : LEHNGAS.filter(item => item.category === filter);

  return (
    <section id="collections" className="py-24 bg-white relative">
       {/* Background decoration */}
       <div className="absolute left-0 top-1/4 w-96 h-96 opacity-5 pointer-events-none">
         <MandalaIcon className="text-royal-red animate-spin-slow" />
       </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-stone-200 pb-8">
          <div>
            <h2 className="font-display text-4xl md:text-5xl text-stone-900">The Royal Collection</h2>
            <p className="font-serif text-stone-500 mt-2">Exquisite pieces for your special moments.</p>
          </div>
          
          {/* Filters */}
          <div className="flex space-x-6 mt-6 md:mt-0 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto">
            {['All', 'Bridal', 'Party', 'Contemporary'].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat as any)}
                className={`font-sans text-sm tracking-widest uppercase transition-colors whitespace-nowrap ${
                  filter === cat 
                  ? 'text-royal-red font-bold border-b-2 border-royal-red' 
                  : 'text-stone-400 hover:text-stone-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* CSS Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {filteredItems.map((item) => (
            <div key={item.id} className="group flex flex-col h-full">
              {/* Image Container with enforced Aspect Ratio */}
              <div className="relative bg-stone-100 aspect-[3/4] w-full mb-6 shadow-md hover:shadow-xl transition-shadow duration-300">
                <GeneratedImage
                  prompt={item.imagePrompt}
                  fallbackSrc={item.image}
                  alt={item.name}
                  className="w-full h-full"
                  aspectRatio="3:4"
                />
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                {/* Quick Action Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out border-t border-royal-gold/20">
                  <p className="text-stone-800 font-serif italic text-sm mb-3 line-clamp-2">
                    {item.description}
                  </p>
                  <button className="w-full py-3 bg-stone-900 text-ivory font-sans text-xs tracking-[0.2em] uppercase hover:bg-royal-red transition-colors duration-300">
                    View Details
                  </button>
                </div>

                {/* Price Tag */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 shadow-sm border border-stone-100">
                  <span className="font-serif text-stone-900 font-bold tracking-wide text-sm">{item.price}</span>
                </div>
              </div>
              
              {/* Product Info */}
              <div className="flex justify-between items-start mt-auto">
                <div>
                  <h3 className="font-display text-xl text-stone-800 group-hover:text-royal-red transition-colors duration-300">
                    {item.name}
                  </h3>
                  <p className="text-sm font-serif text-stone-500 italic mt-1 border-b border-transparent group-hover:border-royal-gold inline-block transition-all">
                    {item.designer}
                  </p>
                </div>
                <span className="text-[10px] font-sans border border-stone-200 px-3 py-1 text-stone-500 uppercase tracking-widest group-hover:border-royal-gold group-hover:text-royal-gold transition-colors">
                  {item.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collection;