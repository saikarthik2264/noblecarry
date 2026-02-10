import React from 'react';
import { AlertTriangle, Globe, Zap } from 'lucide-react';

const TransparencySection: React.FC = () => {
    const learnings = [
        {
            icon: AlertTriangle,
            title: 'The Waxed Canvas Dilemma',
            text: "Initially, our organic wax wasn't water-resistant enough for torrential rains. We failed our first mountain testers. We've since pivoted to a specialized pine-resin blend.",
            resolution: 'Version 2.4 Infusion',
            color: 'bg-orange-100 text-orange-800'
        },
        {
            icon: Globe,
            title: 'The Logistics Trade-off',
            text: "Using 100% ocean plastic is carbon-intensive to transport. We're still struggling to find a localized sorting facility that meets our purity standards. We're currently at 85% local.",
            resolution: 'Ongoing Challenge: Sourcing Density',
            color: 'bg-blue-100 text-blue-800'
        },
        {
            icon: Zap,
            title: 'Metal Hardware Scarcity',
            text: "Recycled stainless steel buckles are 4x the cost of plastic. It makes our bags 'premium,' which contradicts our 'accessibility' goal. We are exploring bamboo composites as a middle ground.",
            resolution: 'In R&D: Bio-Composite Hard-wear',
            color: 'bg-green-100 text-green-800'
        }
    ];

    return (
        <section className="py-32 bg-[#f2efe8] px-6">
            <div className="max-w-7xl mx-auto">
                <header className="mb-20">
                    <h2 className="text-xs font-mono uppercase tracking-[0.5em] text-[#2d3a2d]/40 mb-6">
                        Radical Transparency
                    </h2>
                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#2d3a2d] uppercase leading-none tracking-tighter heading-academic">
                        Failures & <br />Learnings
                    </h3>
                    <p className="mt-6 text-base text-[#2d3a2d]/70 font-sans max-w-3xl">
                        We believe in showing our work. Here's what didn't go as planned, and how we're addressing it.
                    </p>
                </header>

                <div className="bento-grid">
                    {learnings.map((item, i) => (
                        <div key={i} className="bento-card group space-y-8 lab-notebook relative">
                            <div className={`w-16 h-16 ${item.color} flex items-center justify-center rounded-xl group-hover:scale-110 transition-all shadow-lg`}>
                                <item.icon size={32} />
                            </div>
                            <h4 className="font-serif text-xl md:text-2xl font-bold uppercase tracking-tight heading-academic">
                                {item.title}
                            </h4>
                            <p className="font-mono text-base text-[#2d3a2d]/70 leading-relaxed">
                                {item.text}
                            </p>
                            <div className="pt-6 border-t border-[#2d3a2d]/10">
                                <span className="text-xs font-mono uppercase text-[#2d3a2d]/50 italic tracking-wider">
                                    → {item.resolution}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-20 p-10 bg-white/60 rounded-3xl border border-[#2d3a2d]/10">
                    <p className="font-mono text-sm text-[#2d3a2d]/60 text-center uppercase tracking-widest">
                        "We're not perfect. We're just committed to getting better." — The Noble Carry Team
                    </p>
                </div>
            </div>
        </section>
    );
};

export default TransparencySection;
