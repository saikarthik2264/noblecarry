

import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ArrowRight, Shield, Droplet, Leaf, Users, Recycle } from 'lucide-react';
import ChoiceGateway from '../components/ChoiceGateway';
import StoryPortfolio from '../components/StoryPortfolio';
import TransparencySection from '../components/TransparencySection';
import LifespanBar from '../components/LifespanBar';
import ScrollReveal from '../components/ScrollReveal';
import CounterAnimation from '../components/CounterAnimation';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [hasChosen, setHasChosen] = useState<boolean>(false);

  // Check if user has already made a choice in this session
  useEffect(() => {
    const choice = sessionStorage.getItem('noble_carry_choice');
    if (choice) setHasChosen(true);
  }, []);

  const handleChoice = (choice: 'BACKPACKS' | 'HANDBAGS') => {
    setHasChosen(true);
  };

  // Show Choice Gateway on first visit
  if (!hasChosen) {
    return <ChoiceGateway onChoice={handleChoice} />;
  }

  return (
    <main className="relative bg-[#f2efe8] animate-in fade-in duration-1000">
      {/* HERO SECTION */}
      <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-20 pt-20">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 flex flex-col justify-center max-w-xl">
            <h2 className="text-xs font-mono uppercase tracking-[0.5em] text-[#2d3a2d]/50 mb-8">
              Sustainable by Design
            </h2>
            <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-serif font-bold text-[#2d3a2d] leading-[0.9] mb-6 sm:mb-8 uppercase tracking-tighter heading-academic">
              Carry the <br /> Future, <br /> Not the <br /> Waste.
            </h1>
            <p className="text-sm sm:text-base text-[#2d3a2d]/70 mb-8 sm:mb-10 leading-relaxed font-sans">
              Recrafted from 100% ocean plastic. Designed for a lifetime of adventure. <span className="font-bold text-[#2d3a2d]">One bag = 12kg of plastic removed.</span>
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-8">
              <button
                onClick={() => navigate('/collections')}
                className="w-full sm:w-auto px-8 sm:px-12 py-5 sm:py-6 bg-[#2d3a2d] text-[#f2efe8] rounded-full font-bold uppercase text-sm sm:text-base tracking-widest hover:bg-[#1a241a] transition-all transform hover:scale-105 active:scale-95 shadow-xl"
              >
                Explore Collection
              </button>
              <Link to="/about" className="flex items-center gap-2 font-bold uppercase text-sm tracking-widest text-[#2d3a2d] group">
                Our Mission <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>

            {/* Stats Row */}
            <div className="mt-12 sm:mt-20 pt-6 sm:pt-8 border-t border-[#2d3a2d]/10 flex flex-wrap gap-8 sm:gap-12 md:gap-24">
              <div>
                <p className="text-3xl sm:text-4xl font-bold text-[#2d3a2d] data-youth">4.5k</p>
                <p className="text-xs font-mono uppercase tracking-widest text-[#2d3a2d]/50 mt-1">Kg Waste Diverted</p>
              </div>
              <div className="border-l border-[#2d3a2d]/10 pl-8 sm:pl-12">
                <p className="text-3xl sm:text-4xl font-bold text-[#2d3a2d] data-youth">100%</p>
                <p className="text-xs font-mono uppercase tracking-widest text-[#2d3a2d]/50 mt-1">Recycled Materials</p>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 relative w-full h-full min-h-[400px] lg:min-h-[550px]">
            <div className="absolute inset-0 rounded-[40px] overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1547949003-9792a18a2601?q=80&w=2070&auto=format&fit=crop"
                alt="Sustainable Waxed Canvas Backpack"
                className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute bottom-10 left-10 p-8 bg-white/90 backdrop-blur-md rounded-2xl flex items-center gap-6 max-w-xs shadow-xl">
                <div className="w-14 h-14 rounded-full bg-[#2d3a2d]/10 flex items-center justify-center text-[#2d3a2d]">
                  <Shield size={32} />
                </div>
                <div>
                  <p className="font-bold text-base text-[#2d3a2d]">Lifetime Warranty</p>
                  <p className="text-xs text-[#2d3a2d]/60 font-medium">Repair, don't replace.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THE LIFESPAN BAR SECTION */}
      <section className="py-32 px-6 bg-white overflow-hidden">
        <div className="max-w-5xl mx-auto">
          <header className="text-center mb-16">
            <h2 className="text-xs font-mono uppercase tracking-[0.5em] text-[#2d3a2d]/40 mb-4">
              The Lifecycle Analysis
            </h2>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#2d3a2d] uppercase heading-academic">
              The Lifespan Reality
            </h3>
            <p className="mt-6 text-lg text-[#2d3a2d]/70 font-sans max-w-2xl mx-auto">
              Most "eco-friendly" bags fail within months. We design for decades.
            </p>
          </header>

          <LifespanBar
            productLifespan="5–10+ Years"
            marketLifespan="6–12 months"
            showComparison={true}
            size="lg"
          />
        </div>
      </section>

      {/* THE PROBLEM - Dark, Heavy Section */}
      <section className="py-40 px-6 bg-gradient-to-b from-[#1a1a1a] to-[#2d3a2d] text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <ScrollReveal direction="up" delay={0.2}>
            <h2 className="text-xs font-mono uppercase tracking-[0.5em] text-white/40 mb-8">
              The Reality We Face
            </h2>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.4}>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif font-black uppercase tracking-tighter leading-none mb-16 heading-academic">
              The Fast Fashion <br />Catastrophe
            </h3>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-20">
            <ScrollReveal direction="up" delay={0.5}>
              <div className="p-8 bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10">
                <p className="text-5xl md:text-6xl font-serif font-black mb-4 text-red-400">
                  <CounterAnimation end={1} suffix=" Trillion" />
                </p>
                <p className="font-mono text-sm uppercase tracking-widest text-white/60">
                  Plastic bags used yearly
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.7}>
              <div className="p-8 bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10">
                <p className="text-5xl md:text-6xl font-serif font-black mb-4 text-orange-400">
                  <CounterAnimation end={12} suffix=" months" />
                </p>
                <p className="font-mono text-sm uppercase tracking-widest text-white/60">
                  Average bag lifespan
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.9}>
              <div className="p-8 bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10">
                <p className="text-5xl md:text-6xl font-serif font-black mb-4 text-yellow-400">
                  <CounterAnimation end={92} suffix="%" decimals={0} />
                </p>
                <p className="font-mono text-sm uppercase tracking-widest text-white/60">
                  End up in landfills
                </p>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal direction="up" delay={1.1}>
            <p className="mt-16 text-xl md:text-2xl font-serif text-white/80 leading-relaxed">
              We're drowning in disposable culture. <br />
              <span className="text-white font-bold">It's time to carry better.</span>
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* WAX CANVAS EDUCATION - Craft Section */}
      <section className="py-32 px-6 bg-[#f4f1ea] overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <ScrollReveal direction="left">
              <div className="relative">
                <div className="aspect-[4/3] rounded-[40px] overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1581605405669-fcdf81165afa?q=80&w=1200"
                    alt="Wax Canvas Crafting Process"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                  />
                </div>
                <div className="absolute -bottom-8 -right-8 bg-[#2d3a2d] text-white p-8 rounded-3xl shadow-xl max-w-xs">
                  <p className="font-mono text-xs uppercase tracking-widest text-white/60 mb-2">Natural Process</p>
                  <p className="font-serif text-2xl font-bold">Hand-Waxed Canvas</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div>
                <h2 className="text-xs font-mono uppercase tracking-[0.5em] text-[#2d3a2d]/40 mb-6">
                  The Craft
                </h2>
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif font-black uppercase tracking-tighter leading-none mb-8 text-[#2d3a2d] heading-academic">
                  Wax Canvas: <br />Nature's Armor
                </h3>
                <p className="text-lg text-[#2d3a2d]/70 font-sans leading-relaxed mb-8">
                  Instead of plastic coatings, we use a centuries-old technique: wax canvasing. Natural beeswax is hand-rubbed into thick cotton canvas, creating a water-resistant, durable fabric that ages beautifully.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#2d3a2d]/5 rounded-xl flex items-center justify-center shrink-0">
                      <Droplet size={24} className="text-[#2d3a2d]" />
                    </div>
                    <div>
                      <h4 className="font-serif text-xl font-bold text-[#2d3a2d] mb-2">Water-Resistant</h4>
                      <p className="text-sm text-[#2d3a2d]/60 font-sans">Natural wax repels water without synthetic chemicals</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#2d3a2d]/5 rounded-xl flex items-center justify-center shrink-0">
                      <Leaf size={24} className="text-[#2d3a2d]" />
                    </div>
                    <div>
                      <h4 className="font-serif text-xl font-bold text-[#2d3a2d] mb-2">Develops Patina</h4>
                      <p className="text-sm text-[#2d3a2d]/60 font-sans">Each bag becomes unique with use, not worn out</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#2d3a2d]/5 rounded-xl flex items-center justify-center shrink-0">
                      <Recycle size={24} className="text-[#2d3a2d]" />
                    </div>
                    <div>
                      <h4 className="font-serif text-xl font-bold text-[#2d3a2d] mb-2">Re-Waxable</h4>
                      <p className="text-sm text-[#2d3a2d]/60 font-sans">Refresh the coating at home—repair, don't replace</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ENHANCED IMPACT DASHBOARD */}
      <section className="py-32 px-6 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal direction="up">
            <header className="text-center mb-20">
              <h2 className="text-xs font-mono uppercase tracking-[0.5em] text-[#2d3a2d]/40 mb-6">
                Real-Time Responsibility
              </h2>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif font-black uppercase tracking-tighter leading-none text-[#2d3a2d] heading-academic">
                Our Impact, <br />Measured Honestly
              </h3>
            </header>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ScrollReveal direction="up" delay={0.2}>
              <div className="p-8 bg-gradient-to-br from-[#2d3a2d] to-[#1a241a] text-white rounded-3xl shadow-xl">
                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-6">
                  <Recycle size={28} />
                </div>
                <p className="text-4xl font-serif font-black mb-2">
                  <CounterAnimation end={4500} suffix="+" />
                </p>
                <p className="font-mono text-xs uppercase tracking-widest text-white/60">
                  Kg Waste Upcycled
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.4}>
              <div className="p-8 bg-gradient-to-br from-[#556b2f] to-[#3d4f21] text-white rounded-3xl shadow-xl">
                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-6">
                  <Droplet size={28} />
                </div>
                <p className="text-4xl font-serif font-black mb-2">
                  <CounterAnimation end={12500} suffix="+" />
                </p>
                <p className="font-mono text-xs uppercase tracking-widest text-white/60">
                  Liters Water Saved
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.6}>
              <div className="p-8 bg-gradient-to-br from-[#d7bfa2] to-[#c4a882] text-[#2d3a2d] rounded-3xl shadow-xl">
                <div className="w-14 h-14 bg-[#2d3a2d]/10 rounded-2xl flex items-center justify-center mb-6">
                  <Users size={28} />
                </div>
                <p className="text-4xl font-serif font-black mb-2">
                  <CounterAnimation end={85} suffix="+" />
                </p>
                <p className="font-mono text-xs uppercase tracking-widest text-[#2d3a2d]/60">
                  Artisan Partners
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.8}>
              <div className="p-8 bg-gradient-to-br from-[#f4f1ea] to-[#e5e1d8] text-[#2d3a2d] rounded-3xl shadow-xl border-2 border-[#2d3a2d]/10">
                <div className="w-14 h-14 bg-[#2d3a2d]/10 rounded-2xl flex items-center justify-center mb-6">
                  <Leaf size={28} />
                </div>
                <p className="text-4xl font-serif font-black mb-2">
                  <CounterAnimation end={100} suffix="%" />
                </p>
                <p className="font-mono text-xs uppercase tracking-widest text-[#2d3a2d]/60">
                  Recycled Materials
                </p>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal direction="up" delay={1}>
            <div className="mt-16 p-10 bg-[#f4f1ea] rounded-3xl text-center">
              <p className="font-mono text-sm text-[#2d3a2d]/60 uppercase tracking-widest leading-relaxed">
                "We track every gram of waste reclaimed and every hour of artisan labor supported. <br className="hidden md:block" />
                Radical honesty is our only metric."
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* STORY PORTFOLIO */}
      <StoryPortfolio category="ALL" />

      {/* FAILURES & LEARNINGS */}
      <TransparencySection />

      {/* FINAL CTA */}
      <section className="py-32 bg-white text-center">
        <h2 className="text-xs font-mono uppercase tracking-[0.5em] text-[#2d3a2d]/40 mb-10">
          Choose Your Carry
        </h2>
        <div className="flex flex-wrap justify-center gap-10">
          <button
            onClick={() => navigate('/category/BACKPACKS')}
            className="px-14 py-7 bg-[#2d3a2d] text-white font-bold uppercase tracking-widest text-base rounded-full hover:scale-105 transition-all flex items-center gap-4 shadow-xl"
          >
            Backpacks <ArrowRight size={24} />
          </button>
          <button
            onClick={() => navigate('/category/HANDBAGS')}
            className="px-14 py-7 border-2 border-[#2d3a2d] text-[#2d3a2d] font-bold uppercase tracking-widest text-base rounded-full hover:bg-[#2d3a2d] hover:text-white transition-all flex items-center gap-4 shadow-sm"
          >
            Handbags <ArrowRight size={24} />
          </button>
        </div>
      </section>
    </main>
  );
};

export default Home;
