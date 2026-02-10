
import React from 'react';
import { ArrowRight } from 'lucide-react';
import workshopImage from '../assets/story-workshop.jpg';
import movementImage from '../assets/story-movement.jpg';

const About: React.FC = () => {
  return (
    <div className="bg-[#f4f1ea] pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center mb-40">
          <div>
            <h2 className="text-sm font-mono uppercase tracking-[0.6em] text-[#2d3a2d]/40 mb-10">Our Origins</h2>
            <h1 className="text-4xl md:text-5xl font-serif font-black uppercase tracking-tighter leading-none mb-10 text-[#2d3a2d]">
              Do we really <br /> need <span className="italic font-normal">more</span> bags?
            </h1>
            <p className="font-mono text-base md:text-lg text-[#2d3a2d]/70 leading-tight uppercase tracking-tight">
              Or do we just need better ones? Noble Carry began with this simple question in a small workshop cluttered with discarded canvas.
            </p>
          </div>
          <div className="relative">
            <div className="rounded-[60px] overflow-hidden shadow-2xl">
              <img src={workshopImage} alt="Workshop Craftsmanship" className="w-full h-auto grayscale brightness-90 hover:grayscale-0 transition-all duration-1000" />
            </div>
            <div className="absolute -bottom-12 -left-12 bg-[#2d3a2d] text-white p-12 hidden md:block max-w-sm rounded-[30px] shadow-2xl">
              <p className="font-mono text-sm uppercase tracking-widest leading-loose text-white/80">
                "WE SAW MOUNTAINS OF HIGH-QUALITY WASTE BEING BURNED. WE SAW ARTISANS LOSING THEIR CRAFTS TO MACHINES. WE DECIDED TO STOP BOTH."
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-48">
          <section className="max-w-5xl mx-auto text-center">
            <h3 className="text-3xl md:text-4xl font-serif font-black uppercase tracking-tighter mb-10 text-[#2d3a2d]">Why only Backpacks <br /> & Handbags?</h3>
            <p className="font-mono text-sm md:text-base text-[#2d3a2d]/50 leading-relaxed uppercase tracking-widest">
              Because we believe in mastery. By focusing on only two categories, we can obsess over every stitch, every buckle, and every material choice. We don't want to sell you everything. We want to sell you the last bag you'll ever need.
            </p>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="p-16 bg-white rounded-[40px] shadow-sm border-t-8 border-[#2d3a2d]">
              <h4 className="text-xl font-serif font-black uppercase mb-4 text-[#2d3a2d]">Responsible Materials</h4>
              <p className="font-mono text-base text-[#2d3a2d]/50 uppercase tracking-widest leading-relaxed">From waxed organic canvas to recycled ocean plastic, we prioritize materials that give more than they take.</p>
            </div>
            <div className="p-16 bg-white rounded-[40px] shadow-sm border-t-8 border-[#2d3a2d]">
              <h4 className="text-xl font-serif font-black uppercase mb-4 text-[#2d3a2d]">Designed to Last</h4>
              <p className="font-mono text-base text-[#2d3a2d]/50 uppercase tracking-widest leading-relaxed">Fast fashion is a trap. Our bags are engineered for heavy use, aging beautifully into unique pieces of your story.</p>
            </div>
            <div className="p-16 bg-white rounded-[40px] shadow-sm border-t-8 border-[#2d3a2d]">
              <h4 className="text-xl font-serif font-black uppercase mb-4 text-[#2d3a2d]">Ethically Made</h4>
              <p className="font-mono text-base text-[#2d3a2d]/50 uppercase tracking-widest leading-relaxed">No sweatshops. No secrets. We pay living wages and support community growth where our products are made.</p>
            </div>
          </div>

          <section className="bg-[#2d3a2d] text-[#f2efe8] p-12 md:p-20 rounded-[50px] overflow-hidden relative shadow-2xl">
            <div className="relative z-10 max-w-4xl">
              <h3 className="text-3xl md:text-4xl font-serif font-black uppercase tracking-tighter leading-none mb-10">This is a Movement, <br /> not just a store.</h3>
              <p className="font-mono text-sm md:text-base text-white/50 mb-10 uppercase tracking-widest leading-relaxed">
                Join 15,000+ conscious carries who have chosen responsibility over convenience. Let's make slow fashion the new standard.
              </p>
              <button className="bg-white text-[#2d3a2d] px-10 py-5 font-black uppercase tracking-widest text-sm rounded-full hover:scale-105 transition-transform flex items-center gap-4 shadow-xl">
                Join the Movement <ArrowRight size={20} />
              </button>
            </div>
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
              <img src={movementImage} className="w-full h-full object-cover" alt="Movement pattern" />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
