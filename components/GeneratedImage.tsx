import React, { useState, useEffect } from 'react';
import { generateImage } from '../services/geminiService';
import { Loader2 } from 'lucide-react';

interface GeneratedImageProps {
  prompt: string;
  fallbackSrc: string;
  alt: string;
  className?: string;
  aspectRatio?: '1:1' | '3:4' | '4:3' | '16:9' | '9:16';
}

const GeneratedImage: React.FC<GeneratedImageProps> = ({ prompt, fallbackSrc, alt, className, aspectRatio = '1:1' }) => {
  const [src, setSrc] = useState<string>(fallbackSrc);
  const [isGenerating, setIsGenerating] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    let mounted = true;

    const fetchImage = async () => {
      // Don't generate if no prompt
      if (!prompt) {
        setIsGenerating(false);
        return;
      }

      setIsGenerating(true);
      try {
         const generated = await generateImage(prompt, aspectRatio);
         if (mounted && generated) {
           setSrc(generated);
         } else if (mounted) {
           setHasError(true);
         }
      } catch (e) {
        if (mounted) setHasError(true);
      } finally {
        if (mounted) setIsGenerating(false);
      }
    };
    
    // Add a small random delay to prevent hitting rate limits instantly if many mount at once
    const delay = Math.floor(Math.random() * 2000);
    const timeout = setTimeout(fetchImage, delay);
    
    return () => {
      mounted = false;
      clearTimeout(timeout);
    };
  }, [prompt, aspectRatio]);

  return (
    <div className={`relative ${className} overflow-hidden bg-stone-200`}>
      <img 
        src={src} 
        alt={alt} 
        className={`w-full h-full object-cover transition-all duration-1000 ${isGenerating ? 'scale-105 blur-sm opacity-80' : 'scale-100 opacity-100'}`}
      />
      
      {isGenerating && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/30 backdrop-blur-[1px] transition-opacity duration-300">
          <Loader2 className="w-8 h-8 text-royal-gold animate-spin mb-2" />
          <span className="text-white text-xs font-serif tracking-widest uppercase">Weaving...</span>
        </div>
      )}
      
      {/* Optional: Subtle indicator that this is an AI generation if successful and not loading */}
      {!isGenerating && !hasError && src !== fallbackSrc && (
        <div className="absolute bottom-2 right-2 px-2 py-1 bg-black/40 backdrop-blur-md rounded text-[8px] text-white/80 font-sans tracking-wider uppercase">
          AI Design
        </div>
      )}
    </div>
  );
};

export default GeneratedImage;