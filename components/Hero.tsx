import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToCollections = () => {
    const element = document.getElementById('collections');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Video with Overlay */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover scale-105"
        >
          <source src="/loopgiftvideo.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-luxury-black/80 via-luxury-black/70 to-luxury-black/95"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto space-y-8 animate-fade-in-up">

        <h1 className="font-display font-medium text-5xl md:text-7xl lg:text-8xl text-white leading-tight">
          Manu <span className="text-gold-gradient italic">Return Gifts</span>
        </h1>

        <div className="w-24 h-[1px] bg-gold-400 mx-auto my-6"></div>

        <p className="font-sans text-lg md:text-xl text-gray-300 font-light tracking-wide max-w-2xl mx-auto">
          Curating Moments of Joy with timeless elegance and cultural warmth.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12">
          <button
            onClick={scrollToCollections}
            className="group relative px-8 py-4 bg-gold-400 text-luxury-black font-medium tracking-widest uppercase hover:bg-white transition-all duration-300 min-w-[180px]"
          >
            View Collection
            <span className="absolute inset-0 border border-white opacity-0 group-hover:opacity-100 scale-105 transition-all duration-300"></span>
          </button>

          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative px-8 py-4 bg-transparent border border-gold-400 text-gold-400 font-medium tracking-widest uppercase hover:bg-luxury-black/50 transition-all duration-300 min-w-[180px]"
          >
            Contact Us
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer" onClick={scrollToCollections}>
        <ChevronDown className="text-gold-400 w-8 h-8 opacity-70" />
      </div>
    </div>
  );
};

export default Hero;