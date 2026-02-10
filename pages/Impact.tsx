
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { Globe, Users, Zap, Heart } from 'lucide-react';

const data = [
  { name: 'Plastics', value: 4200, color: '#2d3a2d' },
  { name: 'Water (KL)', value: 12500, color: '#556b2f' },
  { name: 'CO2 (T)', value: 890, color: '#d7bfa2' },
  { name: 'Artisans', value: 85, color: '#2d3a2d' },
];

const Impact: React.FC = () => {
  return (
    <div className="pt-32 pb-20 px-6 md:px-12 bg-[#f4f1ea] min-h-screen">
      <div className="max-w-7xl mx-auto">
        <header className="mb-24 text-center">
          <h2 className="text-sm font-mono uppercase tracking-[0.6em] text-[#2d3a2d]/40 mb-8">Real-Time Responsibility</h2>
          <h1 className="text-4xl md:text-5xl font-serif font-black uppercase tracking-tighter leading-none mb-8 text-[#2d3a2d]">Impact Dashboard</h1>
          <p className="font-mono text-sm md:text-base text-[#2d3a2d]/50 max-w-3xl mx-auto leading-relaxed uppercase tracking-tight">
            We track every gram of waste reclaimed and every hour of artisan labor supported. Radical honesty is our only metric.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-32">
          <div className="bg-white p-12 md:p-16 rounded-[50px] shadow-2xl border-t-[12px] border-[#2d3a2d]">
            <h3 className="text-2xl font-serif font-black uppercase mb-8 text-[#2d3a2d] tracking-tight">Resource Reclamation</h3>
            <div className="h-[280px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>
                  <XAxis dataKey="name" stroke="#2d3a2d" fontSize={14} tickLine={false} axisLine={false} fontWeight="bold" />
                  <Tooltip cursor={{ fill: '#f4f1ea', radius: 10 }} contentStyle={{ borderRadius: '15px', border: 'none', fontWeight: 'bold' }} />
                  <Bar dataKey="value" radius={[10, 10, 0, 0]}>
                    {data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            <p className="font-mono text-sm text-[#2d3a2d]/40 mt-10 uppercase tracking-[0.3em] text-center font-bold">Data updated weekly from our production centers</p>
          </div>

          <div className="grid grid-cols-1 gap-8">
            <div className="bg-[#2d3a2d] text-[#f2efe8] p-10 md:p-12 rounded-[40px] flex items-center gap-10 group shadow-xl">
              <div className="w-16 h-16 bg-white/10 group-hover:bg-white/20 transition-colors flex items-center justify-center rounded-[20px] shrink-0">
                <Globe size={36} />
              </div>
              <div>
                <h4 className="text-3xl md:text-4xl font-serif font-black leading-none mb-2 tracking-tighter">12,500</h4>
                <p className="font-mono text-base text-white/50 uppercase tracking-widest font-bold">Liters of water saved this month</p>
              </div>
            </div>
            <div className="bg-white p-10 md:p-12 rounded-[40px] flex items-center gap-10 border border-[#2d3a2d]/5 group shadow-xl">
              <div className="w-16 h-16 bg-gray-100 group-hover:bg-gray-200 transition-colors text-[#2d3a2d] flex items-center justify-center rounded-[20px] shrink-0">
                <Users size={36} />
              </div>
              <div>
                <h4 className="text-3xl md:text-4xl font-serif font-black leading-none mb-2 tracking-tighter">85+</h4>
                <p className="font-mono text-base text-[#2d3a2d]/50 uppercase tracking-widest font-bold">Active artisan partnerships</p>
              </div>
            </div>
            <div className="bg-[#556b2f] text-white p-10 md:p-12 rounded-[40px] flex items-center gap-10 group shadow-xl">
              <div className="w-16 h-16 bg-white/10 group-hover:bg-white/20 transition-colors flex items-center justify-center rounded-[20px] shrink-0">
                <Zap size={36} />
              </div>
              <div>
                <h4 className="text-3xl md:text-4xl font-serif font-black leading-none mb-2 tracking-tighter">4.2 Tons</h4>
                <p className="font-mono text-base text-white/50 uppercase tracking-widest font-bold">Upcycled ocean plastic used</p>
              </div>
            </div>
          </div>
        </div>

        <section className="bg-white p-12 md:p-20 rounded-[50px] shadow-sm text-center border border-[#2d3a2d]/5 relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-2xl md:text-4xl font-serif font-black uppercase tracking-tighter mb-8 max-w-4xl mx-auto leading-[1.1] text-[#2d3a2d]">"Sustainability isn't marketing. It's an <span className="italic font-normal">engineering</span> challenge."</h2>
            <p className="font-mono text-sm md:text-base text-[#2d3a2d]/50 max-w-2xl mx-auto mb-10 uppercase tracking-tight leading-relaxed">
              Every bag comes with a unique ID code that allows you to trace its origin, from raw material source to the artisan who hand-finished it.
            </p>
            <button className="px-10 py-5 bg-[#2d3a2d] text-white font-black uppercase tracking-widest text-sm rounded-full hover:scale-105 transition-transform flex items-center gap-4 mx-auto shadow-2xl">
              Trace Your Bag <Heart size={20} />
            </button>
          </div>
          <div className="absolute inset-0 opacity-5 pointer-events-none">
            <img src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200" alt="Tech Background" className="w-full h-full object-cover" />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Impact;
