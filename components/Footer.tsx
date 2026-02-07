import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-12 border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <span className="font-serif text-2xl text-gold-400 font-bold">MANU</span>
          <p className="text-gray-500 text-sm mt-1">© {new Date().getFullYear()} Manu Return Gifts. All rights reserved.</p>
        </div>
        
        <div className="flex space-x-6">
          <a href="#" className="text-gray-500 hover:text-gold-400 transition-colors"><Instagram size={20} /></a>
          <a href="#" className="text-gray-500 hover:text-gold-400 transition-colors"><Facebook size={20} /></a>
          <a href="#" className="text-gray-500 hover:text-gold-400 transition-colors"><Twitter size={20} /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
