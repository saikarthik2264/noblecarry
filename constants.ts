
import { Product } from './types';

export const PRODUCTS: Product[] = [
  // BACKPACKS
  {
    id: 'bp-everyday',
    name: 'Everyday Backpack',
    category: 'BACKPACKS',
    subCategory: 'Casual / Daily',
    price: 9960, // ₹9,960 (was $120)
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=1200&auto=format&fit=crop',
    description: 'Built for the long haul. This isn\'t a backpack you\'ll replace in two years. Reinforced stitching, water-resistant wax canvas, and a design that gets better with age.',
    impact: {
      wasteReduced: '2.5kg Ocean Plastic',
      lifespan: '15+ Years',
      materials: ['Reclaimed Wax Canvas', 'Recycled Nylon Lining', 'Upcycled Leather Straps']
    }
  },
  {
    id: 'bp-work',
    name: 'Work Backpack',
    category: 'BACKPACKS',
    subCategory: 'Professional / Tech',
    price: 13695, // ₹13,695 (was $165)
    image: 'https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?q=80&w=1200&auto=format&fit=crop',
    description: 'Designed for professionals who refuse to compromise. Padded laptop compartment, organized pockets, and a minimalist aesthetic that transitions from office to adventure.',
    impact: {
      wasteReduced: '3.2kg Industrial Fabric',
      lifespan: '20+ Years',
      materials: ['Heavy-Duty Wax Canvas', 'Recycled Tech Padding', 'Brass Hardware']
    }
  },
  {
    id: 'bp-travel',
    name: 'Travel Backpack',
    category: 'BACKPACKS',
    subCategory: 'Adventure / Expedition',
    price: 16600, // ₹16,600 (was $200)
    image: 'https://images.unsplash.com/photo-1577733966973-d680bffd2e80?q=80&w=1200&auto=format&fit=crop',
    description: 'For those who live out of a bag. Maximum capacity, minimal footprint. Built to survive years of airports, hostels, and mountain trails.',
    impact: {
      wasteReduced: '4.1kg Mixed Textiles',
      lifespan: '25+ Years',
      materials: ['Triple-Layer Wax Canvas', 'Recycled Ripstop', 'Reclaimed Buckles']
    }
  },
  // HANDBAGS
  {
    id: 'hb-daily',
    name: 'Daily Handbag',
    category: 'HANDBAGS',
    subCategory: 'Everyday / Casual',
    price: 7470, // ₹7,470 (was $90)
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1200&auto=format&fit=crop',
    description: 'Your daily companion. Compact, durable, and designed to replace hundreds of disposable bags. Carry what matters, nothing more.',
    impact: {
      wasteReduced: '1.8kg Textile Waste',
      lifespan: '12+ Years',
      materials: ['Reclaimed Canvas', 'Recycled Cotton Lining', 'Leather Accents']
    }
  },
  {
    id: 'hb-office',
    name: 'Office Handbag',
    category: 'HANDBAGS',
    subCategory: 'Corporate / Structured',
    price: 14940, // ₹14,940 (was $180)
    image: 'https://images.unsplash.com/photo-1564422170194-896b89110ef8?q=80&w=1200&auto=format&fit=crop',
    description: 'Professional elegance meets radical sustainability. Structured design, premium materials, and a statement that you care about more than just style.',
    impact: {
      wasteReduced: '2.9kg Premium Textiles',
      lifespan: '18+ Years',
      materials: ['Wax Canvas', 'Recycled Suede Lining', 'Brass Fixtures']
    }
  },
  {
    id: 'hb-minimal',
    name: 'Minimal Carry Bag',
    category: 'HANDBAGS',
    subCategory: 'Essentials / Night Out',
    price: 6225, // ₹6,225 (was $75)
    image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=1200&auto=format&fit=crop',
    description: 'Less is more. A small, rugged pouch for your phone, keys, and cards. Designed for those who travel light.',
    impact: {
      wasteReduced: '0.8kg Fabric Scraps',
      lifespan: '12+ Years',
      materials: ['Reclaimed Canvas Scraps', 'Paracord Handle']
    }
  }
];

export const COLORS = {
  sand: '#f4f1ea',
  clay: '#d7bfa2',
  olive: '#556b2f',
  charcoal: '#333333',
  offwhite: '#faf9f6'
};
