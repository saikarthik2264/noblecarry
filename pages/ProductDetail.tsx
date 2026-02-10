
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, RefreshCw, ShieldCheck, Zap, Package, MapPin } from 'lucide-react';
import { PRODUCTS } from '../constants';
import { Product } from '../types';
import LifespanBar from '../components/LifespanBar';
import { formatPrice } from '../utils/currency';

interface ProductDetailProps {
  onAddToCart: (product: Product) => void;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ onAddToCart }) => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const product = PRODUCTS.find(p => p.id === id);

  if (!product) {
    return (
      <div className="h-screen flex items-center justify-center">
        <p className="font-mono text-2xl">Product not found.</p>
      </div>
    );
  }

  return (
    <div className="bg-[#f4f1ea] min-h-screen pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <button onClick={() => navigate(-1)} className="flex items-center gap-3 font-mono text-sm uppercase tracking-widest mb-16 hover:-translate-x-3 transition-transform text-[#2d3a2d]/60">
          <ArrowLeft size={24} /> Go Back
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 md:gap-24 items-start">
          <div className="sticky top-32 space-y-12">
            <div className="aspect-[4/5] bg-[#e5e1d8] overflow-hidden rounded-[50px] shadow-2xl">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover grayscale-[0.1] hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <div className="grid grid-cols-2 gap-8">
              <img src="https://images.unsplash.com/photo-1581605405669-fcdf81165afa?q=80&w=800" alt="Material Detail" className="w-full aspect-square object-cover rounded-[32px] shadow-lg grayscale hover:grayscale-0 transition-all" />
              <img src="https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?q=80&w=800" alt="Craft Detail" className="w-full aspect-square object-cover rounded-[32px] shadow-lg grayscale hover:grayscale-0 transition-all" />
            </div>
          </div>

          <div className="space-y-20">
            <header>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-black text-[#2d3a2d] uppercase tracking-tighter leading-none mb-6 sm:mb-8 heading-academic">{product.name}</h1>
              <div className="flex items-center gap-8">
                <p className="font-mono text-xl sm:text-2xl font-bold text-[#2d3a2d] data-youth">{formatPrice(product.price)}</p>
                <span className="px-6 py-3 bg-[#2d3a2d]/5 text-[#2d3a2d]/60 font-mono text-xs font-black uppercase rounded-full tracking-widest border border-[#2d3a2d]/10">Ethically Priced</span>
              </div>
            </header>

            {/* Enhanced Lifespan Visualization */}
            <div className="bg-white p-12 rounded-[40px] shadow-sm border border-[#2d3a2d]/5">
              <h3 className="font-mono text-sm uppercase tracking-[0.4em] text-[#2d3a2d]/40 mb-8">
                Expected Lifespan
              </h3>
              <LifespanBar
                productLifespan={product.impact.lifespan}
                showComparison={true}
                size="md"
              />
            </div>

            {/* Product Story */}
            <div className="space-y-10">
              <h3 className="font-mono text-base uppercase tracking-[0.5em] text-[#2d3a2d]/30">The Story</h3>
              <p className="text-xl md:text-2xl text-[#2d3a2d] leading-[1.3] font-serif font-medium">{product.description}</p>
            </div>

            {/* Product Data Points */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col gap-3">
                <div className="w-12 h-12 bg-[#2d3a2d]/5 rounded-xl flex items-center justify-center">
                  <Package size={24} className="text-[#2d3a2d]" />
                </div>
                <p className="text-xs font-mono uppercase tracking-widest text-[#2d3a2d]/40">The Why</p>
                <p className="text-sm font-sans text-[#2d3a2d] font-medium">{product.description.split('.')[0]}</p>
              </div>
              <div className="flex flex-col gap-3">
                <div className="w-12 h-12 bg-[#2d3a2d]/5 rounded-xl flex items-center justify-center">
                  <MapPin size={24} className="text-[#2d3a2d]" />
                </div>
                <p className="text-xs font-mono uppercase tracking-widest text-[#2d3a2d]/40">The Where</p>
                <p className="text-sm font-sans text-[#2d3a2d] font-medium">{product.subCategory}</p>
              </div>
              <div className="flex flex-col gap-3">
                <div className="w-12 h-12 bg-[#2d3a2d]/5 rounded-xl flex items-center justify-center">
                  <Zap size={24} className="text-[#2d3a2d]" />
                </div>
                <p className="text-xs font-mono uppercase tracking-widest text-[#2d3a2d]/40">Impact</p>
                <p className="text-sm font-sans text-[#2d3a2d] font-medium">{product.impact.wasteReduced}</p>
              </div>
            </div>

            {/* Impact Snapshot */}
            <div className="bg-[#2d3a2d] text-[#f2efe8] p-16 space-y-16 rounded-[50px] shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-10 opacity-5">
                <ShieldCheck size={120} />
              </div>
              <h3 className="font-mono text-base uppercase tracking-[0.5em] text-white/40">Impact Snapshot</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
                <div className="flex gap-8">
                  <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-white shrink-0">
                    <Zap size={32} />
                  </div>
                  <div>
                    <p className="font-bold text-lg uppercase mb-2 tracking-widest">Waste Reduced</p>
                    <p className="font-mono text-base text-white/60 uppercase">{product.impact.wasteReduced}</p>
                  </div>
                </div>
                <div className="flex gap-8">
                  <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-white shrink-0">
                    <ShieldCheck size={32} />
                  </div>
                  <div>
                    <p className="font-bold text-lg uppercase mb-2 tracking-widest">Verified Materials</p>
                    <p className="font-mono text-base text-white/60 uppercase">{product.impact.materials.length} Sources</p>
                  </div>
                </div>
              </div>
              <div className="pt-10 border-t border-white/10 relative z-10">
                <p className="font-bold text-base uppercase mb-6 text-white/40 tracking-widest">Composition Detail</p>
                <div className="flex flex-wrap gap-4">
                  {product.impact.materials.map(m => (
                    <span key={m} className="px-6 py-3 bg-white/5 border border-white/10 rounded-full font-mono text-xs font-bold uppercase tracking-[0.2em]">{m}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="space-y-8">
              <button
                onClick={() => onAddToCart(product)}
                className="w-full bg-[#2d3a2d] text-white py-10 text-3xl font-bold uppercase tracking-widest rounded-full hover:bg-[#1a241a] transition-all transform hover:scale-[1.01] active:scale-95 shadow-2xl"
              >
                Carry Nobly
              </button>
              <p className="text-center font-mono text-sm uppercase tracking-[0.3em] text-[#2d3a2d]/40">Responsible shipping worldwide. Free repairs for life.</p>
            </div>

            {/* Repair Philosophy */}
            <div className="pt-24 border-t border-[#2d3a2d]/10 space-y-12">
              <div className="flex gap-10 items-start">
                <div className="p-6 bg-white rounded-3xl shadow-sm border border-[#2d3a2d]/5">
                  <RefreshCw size={48} className="text-[#2d3a2d]/40" />
                </div>
                <div>
                  <h4 className="font-serif text-2xl font-bold uppercase mb-4 text-[#2d3a2d] tracking-tight heading-academic">Designed for repair</h4>
                  <p className="font-sans text-base text-[#2d3a2d]/70 leading-relaxed">Every component is chosen because it can be fixed. We'd rather fix your bag than sell you a new one. Our craft team is available for virtual support 24/7.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
