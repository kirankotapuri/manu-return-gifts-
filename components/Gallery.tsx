import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../constants';
import { X, ZoomIn } from 'lucide-react';

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-24 bg-luxury-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="space-y-2">
            <span className="text-gold-400 uppercase tracking-widest text-xs font-semibold">Exquisite Details</span>
            <h2 className="font-serif text-4xl text-white">Product Gallery</h2>
          </div>
          <button className="hidden md:block text-gold-400 uppercase text-xs tracking-widest border border-gold-500/30 px-6 py-3 hover:bg-gold-500/10 transition-colors">
            View All Products
          </button>
        </div>

        {/* Grid Layout - 4 columns on desktop, smaller images */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {GALLERY_ITEMS.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item.src)}
              className="relative group overflow-hidden cursor-zoom-in aspect-square rounded-lg border border-gray-800 hover:border-gold-500/50 transition-all duration-300"
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter brightness-90 group-hover:brightness-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <span className="text-gold-400 text-xs uppercase tracking-wider mb-1">{item.category}</span>
                <h4 className="text-white font-serif text-sm md:text-base">{item.title}</h4>
              </div>
              <div className="absolute top-3 right-3 bg-black/50 p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ZoomIn className="w-3 h-3 text-white" />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center md:hidden">
          <button className="text-gold-400 uppercase text-xs tracking-widest border border-gold-500/30 px-6 py-3 hover:bg-gold-500/10 transition-colors">
            View All Products
          </button>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-gray-400 hover:text-white"
            onClick={() => setSelectedImage(null)}
          >
            <X size={40} />
          </button>
          <div className="max-w-5xl max-h-[90vh] overflow-hidden rounded-sm border border-gold-500/20">
            <img
              src={selectedImage}
              alt="Gallery Preview"
              className="max-w-full max-h-[85vh] object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
