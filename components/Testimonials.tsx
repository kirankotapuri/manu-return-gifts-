import React from 'react';
import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-luxury-charcoal relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gold-500/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 border-b border-gray-800 pb-12">
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-display text-gold-400 mb-2">1200+</p>
            <p className="text-xs uppercase tracking-widest text-gray-400">Happy Customers</p>
          </div>
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-display text-gold-400 mb-2">2+</p>
            <p className="text-xs uppercase tracking-widest text-gray-400">Branches</p>
          </div>
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-display text-gold-400 mb-2">4.9</p>
            <p className="text-xs uppercase tracking-widest text-gray-400">Average Rating</p>
          </div>
        </div>

        <div className="text-center mb-16">
          <span className="text-gold-400 uppercase tracking-widest text-xs font-semibold">Testimonials</span>
          <h2 className="font-serif text-3xl md:text-4xl text-white mt-2">Client Love</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial) => (
            <div key={testimonial.id} className="bg-luxury-black p-8 border border-gray-800 relative hover:border-gold-500/30 transition-colors duration-300">
              <Quote className="absolute top-6 right-6 text-gold-500/20 w-8 h-8" />
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-gold-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-300 font-sans italic mb-6 leading-relaxed">"{testimonial.content}"</p>
              <div>
                <h5 className="text-white font-serif text-lg">{testimonial.name}</h5>
                <p className="text-gold-500 text-xs uppercase tracking-wider">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
