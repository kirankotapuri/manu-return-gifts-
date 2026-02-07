import React from 'react';
import { COLLECTIONS } from '../constants';

const Collections: React.FC = () => {
  return (
    <section id="collections" className="py-24 bg-luxury-black relative">
      {/* Decorative subtle pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(#D4AF37 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <span className="text-gold-400 uppercase tracking-widest text-xs font-semibold">Our Portfolio</span>
          <h2 className="font-serif text-4xl md:text-5xl text-white">Curated Collections</h2>
          <div className="w-16 h-[2px] bg-gold-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {COLLECTIONS.map((collection, index) => (
            <div
              key={collection.id}
              className="group relative h-[450px] overflow-hidden cursor-pointer"
            >
              {/* Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${collection.image})` }}
              ></div>

              {/* Overlay - Darkens on hover */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-500"></div>

              {/* Gold Border Reveal */}
              <div className="absolute inset-4 border border-gold-400 opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500"></div>

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-8 text-center items-center translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="font-display text-3xl text-white mb-2 italic">
                  {collection.title}
                </h3>
                <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 font-sans leading-relaxed mb-4">
                  {collection.description}
                </p>
                <span className="text-gold-400 uppercase text-xs tracking-widest border-b border-gold-400 pb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                  Explore
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collections;
