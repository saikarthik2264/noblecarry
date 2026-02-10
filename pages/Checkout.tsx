
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, ShieldCheck } from 'lucide-react';
import { CartItem } from '../types';
import { formatPrice } from '../utils/currency';

interface CheckoutProps {
  cartItems: CartItem[];
  clearCart: () => void;
}

const Checkout: React.FC<CheckoutProps> = ({ cartItems, clearCart }) => {
  const navigate = useNavigate();
  const [isOrdered, setIsOrdered] = useState(false);

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = 0; // Ethical standard
  const total = subtotal + shipping;

  const handleOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setIsOrdered(true);
    setTimeout(() => {
      clearCart();
    }, 500);
  };

  if (isOrdered) {
    return (
      <div className="min-h-screen pt-32 pb-20 px-6 bg-[#f2efe8] flex items-center justify-center text-center">
        <div className="max-w-md animate-in zoom-in duration-500">
          <CheckCircle size={80} className="mx-auto text-[#2d3a2d] mb-8" />
          <h1 className="text-5xl font-serif font-bold uppercase tracking-tighter text-[#2d3a2d] mb-4">Carry Nobly</h1>
          <p className="font-mono text-base text-[#2d3a2d]/60 mb-12 uppercase tracking-widest">Your order has been placed with purpose. A confirmation is on its way to your inbox.</p>
          <Link to="/" className="inline-block px-12 py-5 bg-[#2d3a2d] text-white font-bold uppercase tracking-widest text-sm rounded-full hover:scale-105 transition-all">
            Return to Story
          </Link>
        </div>
      </div>
    );
  }

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen pt-32 pb-20 px-6 bg-[#f2efe8] flex items-center justify-center text-center">
        <div>
          <h1 className="text-4xl font-serif font-bold uppercase text-[#2d3a2d] mb-6">Nothing to carry.</h1>
          <Link to="/" className="inline-flex items-center gap-2 font-mono text-sm uppercase tracking-widest text-[#2d3a2d]/50 hover:text-[#2d3a2d]">
            <ArrowLeft size={16} /> Return home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6 bg-[#f2efe8]">
      <div className="max-w-7xl mx-auto">
        <button onClick={() => navigate(-1)} className="flex items-center gap-3 font-mono text-sm font-bold uppercase tracking-[0.3em] text-[#2d3a2d] mb-12 hover:-translate-x-2 transition-transform">
          <ArrowLeft size={20} /> Back to Bag
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 md:gap-20">
          {/* Form */}
          <form onSubmit={handleOrder} className="space-y-16">
            <div>
              <h2 className="text-sm font-mono uppercase tracking-[0.3em] text-[#2d3a2d]/40 mb-10">— SHIPPING IDENTITY</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-12">
                <div className="flex flex-col border-b-2 border-[#2d3a2d]/10 focus-within:border-[#2d3a2d] transition-colors">
                  <label className="font-mono text-sm font-bold uppercase tracking-widest text-[#2d3a2d] mb-2">FIRST NAME</label>
                  <input required type="text" className="bg-transparent py-2 outline-none font-mono text-sm uppercase tracking-widest" />
                </div>
                <div className="flex flex-col border-b-2 border-[#2d3a2d]/10 focus-within:border-[#2d3a2d] transition-colors">
                  <label className="font-mono text-sm font-bold uppercase tracking-widest text-[#2d3a2d] mb-2">LAST NAME</label>
                  <input required type="text" className="bg-transparent py-2 outline-none font-mono text-sm uppercase tracking-widest" />
                </div>
                <div className="md:col-span-2 flex flex-col border-b-2 border-[#2d3a2d]/10 focus-within:border-[#2d3a2d] transition-colors">
                  <label className="font-mono text-sm font-bold uppercase tracking-widest text-[#2d3a2d] mb-2">EMAIL ADDRESS</label>
                  <input required type="email" className="bg-transparent py-2 outline-none font-mono text-sm uppercase tracking-widest" />
                </div>
                <div className="md:col-span-2 flex flex-col border-b-2 border-[#2d3a2d]/10 focus-within:border-[#2d3a2d] transition-colors">
                  <label className="font-mono text-sm font-bold uppercase tracking-widest text-[#2d3a2d] mb-2">STREET ADDRESS</label>
                  <input required type="text" className="bg-transparent py-2 outline-none font-mono text-sm uppercase tracking-widest" />
                </div>
                <div className="flex flex-col border-b-2 border-[#2d3a2d]/10 focus-within:border-[#2d3a2d] transition-colors">
                  <label className="font-mono text-sm font-bold uppercase tracking-widest text-[#2d3a2d] mb-2">CITY</label>
                  <input required type="text" className="bg-transparent py-2 outline-none font-mono text-sm uppercase tracking-widest" />
                </div>
                <div className="flex flex-col border-b-2 border-[#2d3a2d]/10 focus-within:border-[#2d3a2d] transition-colors">
                  <label className="font-mono text-sm font-bold uppercase tracking-widest text-[#2d3a2d] mb-2">POSTAL CODE</label>
                  <input required type="text" className="bg-transparent py-2 outline-none font-mono text-sm uppercase tracking-widest" />
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-sm font-mono uppercase tracking-[0.3em] text-[#2d3a2d]/40 mb-10">— PAYMENT LOGIC</h2>
              <div className="p-8 border-2 border-[#2d3a2d] bg-white/40 rounded-[24px] flex items-center justify-between group cursor-pointer shadow-sm">
                <div className="flex items-center gap-6">
                  <div className="w-12 h-7 bg-[#2d3a2d] rounded-sm" />
                  <span className="font-mono text-sm font-bold uppercase tracking-[0.2em] text-[#2d3a2d]">SECURE CREDIT CARD</span>
                </div>
                <div className="w-6 h-6 border-2 border-[#2d3a2d] rounded-full flex items-center justify-center">
                  <div className="w-2.5 h-2.5 bg-[#2d3a2d] rounded-full" />
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <button type="submit" className="w-full bg-[#2d3a2d] text-white py-6 sm:py-8 text-lg sm:text-xl font-bold uppercase tracking-widest rounded-full hover:bg-[#1a241a] transition-all transform hover:scale-[1.01] active:scale-95 shadow-2xl">
                Pay {formatPrice(total)}
              </button>
              <div className="flex items-center gap-2 justify-center text-[10px] font-mono uppercase text-[#2d3a2d]/40 tracking-[0.3em]">
                ENCRYPTED & RESPONSIBLE TRANSACTION
              </div>
            </div>
          </form>

          {/* Summary */}
          <div className="lg:pl-20 border-l border-[#2d3a2d]/10">
            <h2 className="text-sm font-mono uppercase tracking-[0.3em] text-[#2d3a2d]/40 mb-12">— ORDER SUMMARY</h2>
            <div className="space-y-10 mb-16">
              {cartItems.map(item => (
                <div key={item.id} className="flex gap-6 items-center">
                  <div className="w-20 h-20 bg-gray-200 rounded-[14px] overflow-hidden shadow-sm">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover grayscale" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center">
                      <h3 className="font-serif font-black text-lg uppercase tracking-tight leading-none text-[#2d3a2d]">{item.name}</h3>
                      <span className="font-mono text-sm font-bold text-[#2d3a2d]">{formatPrice(item.price * item.quantity)}</span>
                    </div>
                    <p className="font-mono text-xs text-[#2d3a2d]/40 mt-2 uppercase tracking-widest">QTY: {item.quantity}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-6 mb-16 font-mono text-sm uppercase tracking-widest text-[#2d3a2d]/60">
              <div className="flex justify-between">
                <span>SUBTOTAL</span>
                <span>{formatPrice(subtotal)}</span>
              </div>
              <div className="flex justify-between">
                <span>SHIPPING (RADICAL FREE)</span>
                <span>₹0</span>
              </div>
              <div className="flex justify-between font-serif font-black text-5xl tracking-tighter text-[#2d3a2d] pt-8 border-t border-[#2d3a2d]/10">
                <span>TOTAL</span>
                <span>{formatPrice(total)}</span>
              </div>
            </div>

            <div className="bg-white p-10 rounded-[40px] shadow-sm border border-[#2d3a2d]/5">
              <h4 className="font-serif font-bold text-2xl uppercase text-[#2d3a2d] mb-4">SUSTAINABLE PROMISE</h4>
              <p className="font-mono text-[11px] text-[#2d3a2d]/50 leading-relaxed uppercase tracking-[0.1em]">
                THIS ORDER DIVERTS APPROXIMATELY <span className="font-bold text-[#2d3a2d]">{(cartItems.length * 2.5).toFixed(1)}KG</span> OF INDUSTRIAL WASTE FROM OCEANS AND SUPPORTS LOCALIZED ARTISAN COMMUNITIES. WE DON'T USE PLASTIC TAPE OR OVERSIZED BOXES. YOUR CARRY WILL ARRIVE IN A COMPOSTABLE STARCH-BASED SHELL.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
