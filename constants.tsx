import React from 'react';
import { Gift, Package, Truck, Star } from 'lucide-react';
import { Collection, ValueProp, GalleryItem, Testimonial } from './types';

export const COLLECTIONS: Collection[] = [
  {
    id: 'wedding',
    title: 'Wedding Souvenirs',
    image: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=1000&auto=format&fit=crop',
    description: 'Timeless tokens of love for your special day.',
  },
  {
    id: 'corporate',
    title: 'Corporate Gifting',
    image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=1000&auto=format&fit=crop',
    description: 'Elevate business relationships with premium gestures.',
  },
  {
    id: 'birthday',
    title: 'Birthday Celebrations',
    image: 'https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?q=80&w=1000&auto=format&fit=crop',
    description: 'Curated joy for milestones and memories.',
  },
  {
    id: 'traditional',
    title: 'Traditional Occasions',
    image: '/traditional_gifts_1770376756252.png',
    description: 'Honoring culture with authentic craftsmanship.',
  },
];

export const VALUE_PROPS: ValueProp[] = [
  {
    id: 'premium',
    title: 'Premium Selection',
    description: 'Handpicked items sourced from the finest artisans across the country.',
    icon: <Gift className="w-8 h-8 text-gold-400" />,
  },
  {
    id: 'packaging',
    title: 'Custom Packaging',
    description: 'Exquisite, branded packaging that adds a touch of luxury to every gift.',
    icon: <Package className="w-8 h-8 text-gold-400" />,
  },
  {
    id: 'delivery',
    title: 'Reliable Delivery',
    description: 'Secure and timely logistics ensuring your gifts arrive pristine.',
    icon: <Truck className="w-8 h-8 text-gold-400" />,
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  { id: '1', src: '/weddinggift.png', category: 'Wedding', title: 'Brass Diya & Potli Set' },
  { id: '2', src: '/weddinggift2.png', category: 'Wedding', title: 'Bangles & Sweet Box' },
  { id: '3', src: '/weddinggift3.png', category: 'Wedding', title: 'Divine Idols Gift Set' },
  { id: '4', src: '/birthday.png', category: 'Birthday', title: 'Premium Celebration Set' },
  { id: '5', src: '/birthday2.png', category: 'Birthday', title: 'Kids Party Pack' },
  { id: '6', src: '/birthday3.png', category: 'Birthday', title: 'Fun Activity Bag' },
  { id: '7', src: '/corporate.png', category: 'Corporate', title: 'Executive Pen & Journal' },
  { id: '8', src: '/corporate2.png', category: 'Corporate', title: 'Marble Clock Set' },
  { id: '9', src: '/corporate3.png', category: 'Corporate', title: 'Premium Mug Gift' },
  { id: '10', src: '/traditional.png', category: 'Traditional', title: 'Shubh Gift Box' },
  { id: '11', src: '/traditional2.png', category: 'Traditional', title: 'Silver Jewelry Box' },
  { id: '12', src: '/traditional3.png', category: 'Traditional', title: 'Silk Potli Bags' },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Priya Sharma',
    role: 'Bride',
    content: "The silver coins we ordered for our wedding were exquisite. The packaging was so luxurious, our guests were floored.",
    rating: 5,
  },
  {
    id: 't2',
    name: 'Rajesh Gupta',
    role: 'CEO, TechFlow',
    content: "Manu Return Gifts handled our Diwali corporate gifting for 500 employees flawlessly. Professional and premium.",
    rating: 5,
  },
  {
    id: 't3',
    name: 'Anjali Desai',
    role: 'Event Planner',
    content: "My go-to vendor for high-end events. Their attention to detail and customization options are unmatched.",
    rating: 5,
  },
];