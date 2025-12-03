import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Collection from './components/Collection';
import Designers from './components/Designers';
import AIStylist from './components/AIStylist';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-stone-50 selection:bg-royal-gold selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Collection />
        <div className="py-12 bg-royal-red text-center text-white font-serif italic text-xl">
          "Fashion fades, only style remains the same." — Coco Chanel (Reimagined for Royalty)
        </div>
        <Designers />
      </main>
      <Footer />
      <AIStylist />
    </div>
  );
}

export default App;
