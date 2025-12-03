import React from 'react';
import { ChevronDown } from 'lucide-react';
import GeneratedImage from './GeneratedImage';

const Hero: React.FC = () => {
  const HERO_PROMPT = "Cinematic wide angle shot of a royal Indian bride in an exquisite red lehenga standing in the center of a majestic ancient palace with arches, golden hour lighting, intricate architecture, 8k resolution, photorealistic, atmospheric";

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image - AI Generated */}
      <div className="absolute inset-0">
        <GeneratedImage 
          prompt={HERO_PROMPT}
          fallbackSrc="https://images.unsplash.com/photo-1510784722466-f2aa9c52fe6c?auto=format&fit=crop&w=2070&q=80"
          alt="Royal Indian Bride"
          className="w-full h-full"
          aspectRatio="16:9"
        />
        <div className="absolute inset-0 bg-black/40 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-stone-900/20 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
        <div className="animate-fade-in-up space-y-6 max-w-4xl mx-auto">
          <span className="text-royal-gold font-sans tracking-[0.3em] text-sm md:text-base uppercase border-b border-royal-gold pb-2 inline-block">
            Est. 1985
          </span>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-white font-medium leading-tight drop-shadow-lg">
            Royal <br /> <span className="italic text-royal-gold font-serif">Lehngas</span>
          </h1>
          <p className="text-stone-200 font-serif text-lg md:text-xl max-w-2xl mx-auto leading-relaxed tracking-wide mt-6">
            Discover the artistry of India's finest craftsmen. Handwoven luxury for the modern Maharani.
          </p>
          
          <div className="pt-10">
            <a 
              href="#collections" 
              className="group relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-serif font-medium tracking-tighter text-white bg-transparent border border-white/50 hover:border-royal-gold transition-colors duration-300 ease-out"
            >
              <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-royal-gold rounded-full group-hover:w-56 group-hover:h-56 opacity-10"></span>
              <span className="relative tracking-widest uppercase text-sm group-hover:text-royal-gold transition-colors">Explore Collection</span>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-white/70">
        <ChevronDown size={32} />
      </div>
    </div>
  );
};

export default Hero;