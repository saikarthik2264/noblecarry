
import React, { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { PRODUCTS } from '../constants';
import { formatPrice } from '../utils/currency';

const CategoryPage: React.FC = () => {
  const { type } = useParams<{ type: string }>();

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(p => p.category === type);
  }, [type]);

  const title = type === 'BACKPACKS' ? 'Built for Long Days' : 'Carry Less. Mean More.';
  const subtitle = type === 'BACKPACKS'
    ? 'Durable carry for university, work, and the unexpected.'
    : 'Intentional design for everyday essentials.';

  return (
    <div className="min-h-screen bg-[#f2efe8] pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <header className="mb-24">
          <h2 className="text-sm font-mono uppercase tracking-[0.5em] text-[#2d3a2d]/40 mb-6">{type}</h2>
          <h1 className="text-4xl md:text-5xl font-serif font-black uppercase tracking-tighter mb-8 leading-none text-[#2d3a2d]">
            {title}
          </h1>
          <p className="font-mono text-sm md:text-base text-[#2d3a2d]/60 max-w-3xl leading-relaxed">{subtitle}</p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
          {filteredProducts.map(product => (
            <Link key={product.id} to={`/product/${product.id}`} className="group block">
              <div className="relative aspect-[4/5] bg-[#e5e1d8] overflow-hidden mb-8 rounded-[30px] shadow-sm transition-shadow hover:shadow-2xl">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 grayscale-[0.3] group-hover:grayscale-0"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://images.unsplash.com/photo-1547949003-9792a18a2601?q=80&w=800';
                  }}
                />
                <div className="absolute top-8 left-8 bg-white/95 px-6 py-3 font-mono text-xs font-bold uppercase tracking-[0.2em] shadow-sm rounded-sm">
                  {product.subCategory}
                </div>
                <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  <div className="w-16 h-16 bg-[#2d3a2d] text-white rounded-full flex items-center justify-center shadow-xl">
                    <ArrowRight size={28} />
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-end border-b-2 border-[#2d3a2d]/10 group-hover:border-[#2d3a2d] transition-all pb-4">
                <div>
                  <h3 className="text-2xl font-serif font-bold uppercase tracking-tight text-[#2d3a2d]">{product.name}</h3>
                  <p className="font-mono text-sm text-[#2d3a2d]/50 uppercase mt-2 tracking-widest">{product.impact.wasteReduced} reduced</p>
                </div>
                <p className="font-mono text-lg font-black text-[#2d3a2d]">{formatPrice(product.price)}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
