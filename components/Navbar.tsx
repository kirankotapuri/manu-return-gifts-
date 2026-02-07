import React, { useState, useEffect } from 'react';
import { Menu, X, Instagram } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Collections', href: '#collections' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled || isMobileMenuOpen
        ? 'bg-luxury-black/95 backdrop-blur-md border-b border-gold-500/20 py-4 shadow-lg'
        : 'bg-transparent py-6'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <div className="flex items-center cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
            <img
              src="/logo.png"
              alt="Manu Return Gifts Logo"
              className="h-32 md:h-36 object-contain drop-shadow-[0_0_15px_rgba(212,175,55,0.4)]"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-12">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm uppercase tracking-widest text-gray-300 hover:text-gold-400 transition-colors duration-300 font-sans"
              >
                {link.name}
              </a>
            ))}
            <a
              href="https://www.instagram.com/manu552172?igsh=MWNtY2Q1NHU0Zzluag=="
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border border-gold-400 text-gold-400 hover:bg-gold-400 hover:text-luxury-black transition-all duration-300 rounded-full"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gold-400 focus:outline-none"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-luxury-black border-b border-gold-500/20 shadow-xl transition-all duration-300 ease-in-out overflow-hidden ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
      >
        <div className="px-4 py-6 space-y-4 flex flex-col items-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg text-gray-300 hover:text-gold-400 font-serif tracking-wide"
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://www.instagram.com/manu552172?igsh=MWNtY2Q1NHU0Zzluag=="
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 flex items-center justify-center gap-2 px-8 py-3 border border-gold-400 text-gold-400 text-sm uppercase tracking-wider hover:bg-gold-400 hover:text-luxury-black transition-all duration-300 w-full"
          >
            <Instagram className="w-5 h-5" />
            Follow Us
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
