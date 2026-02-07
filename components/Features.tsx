import React from 'react';
import { VALUE_PROPS } from '../constants';

const Features: React.FC = () => {
  return (
    <section className="py-20 bg-luxury-dark border-t border-gold-500/10 border-b border-gold-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {VALUE_PROPS.map((prop) => (
            <div key={prop.id} className="group p-8 hover:bg-luxury-black/50 transition-colors duration-300 rounded-sm">
              <div className="mb-6 flex justify-center">
                <div className="p-4 rounded-full border border-gold-500/30 group-hover:border-gold-400 transition-colors duration-300 bg-luxury-black">
                  {prop.icon}
                </div>
              </div>
              <h3 className="text-xl font-serif text-white mb-3 tracking-wide">{prop.title}</h3>
              <p className="text-gray-400 font-sans text-sm leading-relaxed">{prop.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
