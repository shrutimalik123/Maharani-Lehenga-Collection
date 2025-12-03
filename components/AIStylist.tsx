import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, Sparkles, X } from 'lucide-react';
import { getStylingAdvice } from '../services/geminiService';
import { ChatMessage } from '../types';

const AIStylist: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Namaste! I am your Royal Advisor. Tell me about your occasion, and I shall assist you in finding the perfect attire.' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: ChatMessage = { role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      const responseText = await getStylingAdvice(messages.concat(userMsg), input);
      setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'model', text: 'Apologies, I am unable to connect to the royal archives.', isError: true }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Action Button */}
      <button 
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-8 right-8 z-40 bg-royal-red text-white p-4 rounded-full shadow-2xl hover:bg-red-900 transition-all duration-300 border-2 border-royal-gold ${isOpen ? 'scale-0' : 'scale-100 hover:scale-110'}`}
        aria-label="Open Royal Stylist"
      >
        <Sparkles size={24} />
      </button>

      {/* Chat Interface */}
      <div className={`fixed bottom-0 right-0 sm:bottom-8 sm:right-8 z-50 w-full sm:w-96 bg-white shadow-2xl sm:rounded-2xl border border-stone-200 overflow-hidden flex flex-col transition-all duration-500 origin-bottom-right transform ${isOpen ? 'scale-100 opacity-100 translate-y-0' : 'scale-95 opacity-0 translate-y-12 pointer-events-none'}`} style={{ height: '600px', maxHeight: '100vh' }}>
        
        {/* Header */}
        <div className="bg-royal-red p-4 flex justify-between items-center text-white">
          <div className="flex items-center space-x-2">
            <Sparkles size={18} className="text-royal-gold" />
            <div>
              <h3 className="font-display font-semibold tracking-wide">Royal Advisor</h3>
              <p className="text-xs text-white/70 font-serif italic">AI Powered Styling</p>
            </div>
          </div>
          <button onClick={() => setIsOpen(false)} className="hover:text-royal-gold transition-colors">
            <X size={20} />
          </button>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-4 bg-stone-50 space-y-4">
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[80%] rounded-lg p-3 text-sm font-sans leading-relaxed shadow-sm ${
                msg.role === 'user' 
                  ? 'bg-royal-gold text-white rounded-br-none' 
                  : 'bg-white text-stone-800 border border-stone-200 rounded-bl-none'
              }`}>
                {msg.text}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-white text-stone-400 border border-stone-200 rounded-lg p-3 rounded-bl-none text-xs italic flex items-center space-x-2">
                <span className="animate-pulse">Consulting the designers...</span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-4 bg-white border-t border-stone-100">
          <div className="flex items-center space-x-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Suggest a Lehnga for a night wedding..."
              className="flex-1 bg-stone-50 border border-stone-200 rounded-full px-4 py-2 text-sm focus:outline-none focus:border-royal-gold focus:ring-1 focus:ring-royal-gold font-sans text-stone-700"
            />
            <button 
              onClick={handleSend}
              disabled={isLoading || !input.trim()}
              className="p-2 bg-royal-red text-white rounded-full hover:bg-red-900 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AIStylist;
