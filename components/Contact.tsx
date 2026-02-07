import React, { useState } from 'react';
import { Phone, MapPin, Mail, MessageCircle, X } from 'lucide-react';

const Contact: React.FC = () => {
  const [showPhoneModal, setShowPhoneModal] = useState(false);

  return (
    <>
      {/* Phone Numbers Modal */}
      {showPhoneModal && (
        <div
          className="fixed inset-0 z-[100] bg-black/80 flex items-center justify-center p-4"
          onClick={() => setShowPhoneModal(false)}
        >
          <div
            className="bg-luxury-dark border border-gold-500/30 rounded-lg p-8 max-w-md w-full relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
              onClick={() => setShowPhoneModal(false)}
            >
              <X size={24} />
            </button>
            <h3 className="font-serif text-2xl text-white mb-6 text-center">Call Us</h3>
            <div className="space-y-4">
              <a
                href="tel:+919010213107"
                className="flex items-center gap-4 p-4 bg-luxury-black border border-gray-700 rounded-lg hover:border-gold-400 transition-colors group"
              >
                <div className="bg-gold-400 p-3 rounded-full">
                  <Phone className="w-5 h-5 text-luxury-black" />
                </div>
                <div>
                  <p className="text-gold-400 text-sm">Primary</p>
                  <p className="text-white text-lg font-medium group-hover:text-gold-400 transition-colors">+91 9010213107</p>
                </div>
              </a>
              <a
                href="tel:+916300320038"
                className="flex items-center gap-4 p-4 bg-luxury-black border border-gray-700 rounded-lg hover:border-gold-400 transition-colors group"
              >
                <div className="bg-gold-400 p-3 rounded-full">
                  <Phone className="w-5 h-5 text-luxury-black" />
                </div>
                <div>
                  <p className="text-gold-400 text-sm">Secondary</p>
                  <p className="text-white text-lg font-medium group-hover:text-gold-400 transition-colors">+91 6300320038</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Gold CTA Section */}
      <section className="bg-gold-400 py-16">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="font-display text-3xl md:text-5xl text-luxury-black mb-6 font-semibold">
            Ready to Make Your Event Memorable?
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="flex items-center justify-center gap-2 bg-luxury-black text-gold-400 px-8 py-4 uppercase tracking-widest font-medium hover:bg-white hover:text-luxury-black transition-colors duration-300">
              <MessageCircle size={20} />
              Chat on WhatsApp
            </button>
            <button
              onClick={() => setShowPhoneModal(true)}
              className="flex items-center justify-center gap-2 bg-transparent border-2 border-luxury-black text-luxury-black px-8 py-4 uppercase tracking-widest font-medium hover:bg-luxury-black hover:text-gold-400 transition-colors duration-300"
            >
              <Phone size={20} />
              Call Now
            </button>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section id="contact" className="py-24 bg-luxury-black relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

            {/* Contact Info */}
            <div className="space-y-10">
              <div>
                <span className="text-gold-400 uppercase tracking-widest text-xs font-semibold">Get in Touch</span>
                <h2 className="font-serif text-4xl text-white mt-2 mb-6">Visit Our Boutique</h2>
                <p className="text-gray-400 font-sans leading-relaxed">
                  Experience the elegance firsthand. Visit our showroom to explore our extensive collection and consult with our gifting experts for your upcoming celebrations.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-luxury-dark p-3 rounded-full border border-gold-500/20 text-gold-400">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-serif text-lg">Location</h4>
                    <p className="text-gray-400 text-sm">Vijaya Mahal Gate Rd<br />Ramamurthy Nagar, Nellore, Andhra Pradesh</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-luxury-dark p-3 rounded-full border border-gold-500/20 text-gold-400">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-serif text-lg">Phone</h4>
                    <p className="text-gray-400 text-sm">+91 9010213107<br />+91 6300320038</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-luxury-dark p-3 rounded-full border border-gold-500/20 text-gold-400">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-serif text-lg">Email</h4>
                    <p className="text-gray-400 text-sm">hello@manureturngifts.com<br />support@manureturngifts.com</p>
                  </div>
                </div>
              </div>

              {/* Map Embed (Placeholder) */}
              <div className="w-full h-48 bg-gray-800 rounded-sm overflow-hidden border border-gray-700 opacity-60 hover:opacity-100 transition-opacity">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.867272217646!2d78.405!3d17.418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDI1JzA0LjgiTiA3OMKwMjQnMTguMCJF!5e0!3m2!1sen!2sin!4v1630000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  className="grayscale invert contrast-125"
                ></iframe>
              </div>
            </div>

            {/* Form */}
            <div className="bg-luxury-dark p-8 md:p-12 border border-gold-500/10">
              <h3 className="font-serif text-2xl text-white mb-8">Send Us a Message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="group">
                    <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2 group-focus-within:text-gold-400 transition-colors">Name</label>
                    <input type="text" className="w-full bg-luxury-black border-b border-gray-700 text-white p-2 focus:outline-none focus:border-gold-400 transition-colors" placeholder="John Doe" />
                  </div>
                  <div className="group">
                    <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2 group-focus-within:text-gold-400 transition-colors">Phone</label>
                    <input type="tel" className="w-full bg-luxury-black border-b border-gray-700 text-white p-2 focus:outline-none focus:border-gold-400 transition-colors" placeholder="+91..." />
                  </div>
                </div>
                <div className="group">
                  <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2 group-focus-within:text-gold-400 transition-colors">Email</label>
                  <input type="email" className="w-full bg-luxury-black border-b border-gray-700 text-white p-2 focus:outline-none focus:border-gold-400 transition-colors" placeholder="john@example.com" />
                </div>
                <div className="group">
                  <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2 group-focus-within:text-gold-400 transition-colors">Occasion</label>
                  <select className="w-full bg-luxury-black border-b border-gray-700 text-white p-2 focus:outline-none focus:border-gold-400 transition-colors">
                    <option>Wedding</option>
                    <option>Corporate Event</option>
                    <option>Birthday</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="group">
                  <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2 group-focus-within:text-gold-400 transition-colors">Message</label>
                  <textarea rows={4} className="w-full bg-luxury-black border-b border-gray-700 text-white p-2 focus:outline-none focus:border-gold-400 transition-colors" placeholder="Tell us about your requirements..."></textarea>
                </div>
                <button type="submit" className="w-full bg-gold-400 text-luxury-black py-4 uppercase tracking-widest font-bold hover:bg-white transition-colors duration-300 mt-4">
                  Send Enquiry
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
