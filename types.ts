export interface Lehnga {
  id: string;
  name: string;
  designer: string;
  price: string;
  image: string;
  imagePrompt: string;
  category: 'Bridal' | 'Party' | 'Contemporary';
  description: string;
}

export interface Designer {
  id: string;
  name: string;
  specialty: string;
  image: string;
  imagePrompt: string;
  description: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}