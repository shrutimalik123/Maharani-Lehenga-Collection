import React from 'react';
import { Lehnga, Designer } from './types';

// SVGs as components for cleaner usage
export const MandalaIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className} fill="currentColor" opacity="0.2">
    <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="2" fill="none" />
    <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="1" fill="none" />
    <path d="M50 10 L60 30 L50 50 L40 30 Z" fill="currentColor" />
    <path d="M50 90 L60 70 L50 50 L40 70 Z" fill="currentColor" />
    <path d="M90 50 L70 60 L50 50 L70 40 Z" fill="currentColor" />
    <path d="M10 50 L30 60 L50 50 L30 40 Z" fill="currentColor" />
  </svg>
);

export const DESIGNERS: Designer[] = [
  {
    id: 'd1',
    name: 'Meera Rathore',
    specialty: 'Royal Heritage',
    image: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=800&q=80',
    imagePrompt: 'Portrait of an elegant senior Indian female fashion designer named Meera Rathore, wearing a silk saree and traditional kundan jewelry, warm lighting, regal atmosphere, photorealistic, 8k',
    description: 'Specializing in reviving ancient embroidery techniques from the Mughal era.'
  },
  {
    id: 'd2',
    name: 'Ananya Vohra',
    specialty: 'Modern Fusion',
    image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=800&q=80',
    imagePrompt: 'Portrait of a young chic Indian female fashion designer named Ananya Vohra, wearing a contemporary indo-western fusion outfit, minimalist studio background, professional, photorealistic, 8k',
    description: 'Blending contemporary silhouettes with traditional craftsmanship for the modern bride.'
  },
  {
    id: 'd3',
    name: 'Tarunika Devi',
    specialty: 'Zardosi Gold',
    image: 'https://images.unsplash.com/photo-1621784563330-caee0b138a00?auto=format&fit=crop&w=800&q=80',
    imagePrompt: 'Portrait of a sophisticated Indian female fashion designer named Tarunika Devi, wearing opulent velvet and heavy gold jewelry, rich luxurious background, photorealistic, 8k',
    description: 'Renowned for heavy gold thread work and opulent velvet fabrics.'
  }
];

export const LEHNGAS: Lehnga[] = [
  {
    id: 'l1',
    name: 'The Crimson Maharani',
    designer: 'Meera Rathore',
    price: '$4,500',
    category: 'Bridal',
    image: 'https://images.unsplash.com/photo-1595950653126-72f6196e8361?auto=format&fit=crop&w=800&q=80',
    imagePrompt: 'Full body fashion shot of a stunning Indian bride wearing "The Crimson Maharani", a deep red velvet lehenga with intricate heavy gold zardosi embroidery, traditional royal jewelry, standing in a palace, photorealistic, 8k',
    description: 'Deep red velvet with intricate hand-embroidered zardosi work.'
  },
  {
    id: 'l2',
    name: 'Emerald Heritage',
    designer: 'Ananya Vohra',
    price: '$2,800',
    category: 'Party',
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdd403348?auto=format&fit=crop&w=800&q=80',
    imagePrompt: 'Full body fashion shot of an Indian model wearing "Emerald Heritage", a rich emerald green raw silk lehenga with silver gota patti accents, elegant pose, luxury setting, photorealistic, 8k',
    description: 'A rich emerald green raw silk ensemble featuring silver gota patti accents.'
  },
  {
    id: 'l3',
    name: 'Ivory Dreams',
    designer: 'Tarunika Devi',
    price: '$3,200',
    category: 'Contemporary',
    image: 'https://images.unsplash.com/photo-1619983081563-430f63602796?auto=format&fit=crop&w=800&q=80',
    imagePrompt: 'Full body fashion shot of an Indian model wearing "Ivory Dreams", a pastel ivory organza lehenga with delicate floral thread work and pearl embellishments, daylight, dreamy soft focus background, photorealistic, 8k',
    description: 'Pastel ivory organza with floral thread work and pearl embellishments.'
  },
  {
    id: 'l4',
    name: 'Royal Rani Pink',
    designer: 'Meera Rathore',
    price: '$3,900',
    category: 'Bridal',
    image: 'https://images.unsplash.com/photo-1583391733958-3771e05d972c?auto=format&fit=crop&w=800&q=80',
    imagePrompt: 'Full body fashion shot of an Indian bride wearing "Royal Rani Pink", a rich hot pink silk lehenga with heavy gold borders and embroidery, traditional wedding setting, photorealistic, 8k',
    description: 'Rich pink silk with heavy gold borders and intricate embroidery.'
  },
  {
    id: 'l5',
    name: 'Blush Rose',
    designer: 'Ananya Vohra',
    price: '$2,100',
    category: 'Contemporary',
    image: 'https://images.unsplash.com/photo-1628867332274-1188310c1f15?auto=format&fit=crop&w=800&q=80',
    imagePrompt: 'Full body fashion shot of an Indian model wearing "Blush Rose", a light pink tulle lehenga with glittering sequin gradients, modern styling, studio lighting, photorealistic, 8k',
    description: 'Light pink tulle lehnga with sequin gradients, perfect for sangeet.'
  },
  {
    id: 'l6',
    name: 'Golden Hour',
    designer: 'Tarunika Devi',
    price: '$5,000',
    category: 'Bridal',
    image: 'https://images.unsplash.com/photo-1610179927953-b32873117498?auto=format&fit=crop&w=800&q=80',
    imagePrompt: 'Full body fashion shot of an Indian model wearing "Golden Hour", a full gold tissue lehenga that shimmers like liquid metal, golden lighting, opulent vibe, photorealistic, 8k',
    description: 'Full gold tissue lehnga that shimmers like liquid metal.'
  }
];