
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { X, Plus, Minus, Trash2, ArrowRight } from 'lucide-react';
import { CartItem } from '../types';
import { formatPrice } from '../utils/currency';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onRemove: (id: string) => void;
  onUpdateQty: (id: string, delta: number) => void;
}

const Cart: React.FC<CartProps> = ({ isOpen, onClose, items, onRemove, onUpdateQty }) => {
  const navigate = useNavigate();
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (!isOpen) return null;

  const handleCheckout = () => {
    onClose();
    navigate('/checkout');
  };

  return (
    <div className="fixed inset-0 z-[100] flex justify-end">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-lg bg-[#f2efe8] h-full shadow-2xl flex flex-col animate-in slide-in-from-right duration-300">
        <div className="p-8 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-3xl font-serif font-bold uppercase tracking-tighter">Your Carry</h2>
          <button onClick={onClose} className="p-3 hover:bg-gray-200 rounded-full transition-colors">
            <X size={28} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-8 no-scrollbar">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center">
              <p className="font-mono text-sm text-gray-500 mb-10 uppercase tracking-[0.3em]">Your bag is empty.</p>
              <button onClick={onClose} className="bg-[#2d3a2d] text-white px-12 py-5 font-bold uppercase tracking-widest text-sm rounded-full hover:scale-105 transition-transform shadow-lg">
                Start Carrying
              </button>
            </div>
          ) : (
            <div className="space-y-10">
              {items.map(item => (
                <div key={item.id} className="flex gap-6 group">
                  <div className="w-28 h-36 bg-gray-200 overflow-hidden rounded-2xl shadow-sm">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-serif font-bold text-xl uppercase leading-tight tracking-tight text-[#2d3a2d]">{item.name}</h3>
                      <button onClick={() => onRemove(item.id)} className="text-gray-400 hover:text-red-500 transition-colors">
                        <Trash2 size={20} />
                      </button>
                    </div>
                    <p className="font-mono text-sm font-bold text-[#2d3a2d]">{formatPrice(item.price)}</p>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center border-2 border-[#2d3a2d]/10 rounded-full overflow-hidden bg-white/50">
                        <button onClick={() => onUpdateQty(item.id, -1)} className="px-4 py-2 hover:bg-gray-200 transition-colors"><Minus size={18} /></button>
                        <span className="px-6 font-mono text-base font-black">{item.quantity}</span>
                        <button onClick={() => onUpdateQty(item.id, 1)} className="px-4 py-2 hover:bg-gray-200 transition-colors"><Plus size={18} /></button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="p-8 border-t border-gray-200 bg-white/50 space-y-6">
            <div className="flex justify-between items-center mb-10">
              <span className="font-mono text-sm uppercase tracking-widest text-[#2d3a2d]/60">Total</span>
              <p className="font-serif text-4xl font-black text-[#2d3a2d] tracking-tighter">{formatPrice(total)}</p>
            </div>
            <p className="font-mono text-xs text-[#2d3a2d]/50 uppercase tracking-[0.2em] leading-relaxed">Responsibility included. Shipping and detailed carbon metrics calculated at checkout.</p>
            <button
              onClick={handleCheckout}
              className="w-full bg-[#2d3a2d] text-white py-6 font-bold uppercase tracking-widest text-base rounded-full flex items-center justify-center gap-4 group hover:bg-[#1a241a] shadow-2xl transition-all"
            >
              Secure Checkout <ArrowRight size={24} className="group-hover:translate-x-3 transition-transform" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
