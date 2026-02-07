import React from 'react';

export interface Collection {
  id: string;
  title: string;
  image: string;
  description: string;
}

export interface ValueProp {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface GalleryItem {
  id: string;
  src: string;
  category: string;
  title: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
}