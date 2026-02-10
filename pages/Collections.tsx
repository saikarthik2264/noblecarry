import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

const Collections: React.FC = () => {
    const categories = [
        {
            id: 'BACKPACKS',
            title: 'Backpacks',
            subtitle: 'Built for long days. Longer life.',
            description: 'From college to work to adventure, our backpacks are engineered for heavy use and designed to age beautifully.',
            image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=1200&auto=format&fit=crop',
            products: ['Everyday Backpack', 'Work Backpack', 'Travel Backpack']
        },
        {
            id: 'HANDBAGS',
            title: 'Handbags',
            subtitle: 'Carry less. Mean more.',
            description: 'Minimalist design meets maximum versatility. Each handbag replaces thousands of disposable alternatives.',
            image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1200&auto=format&fit=crop',
            products: ['Daily Handbag', 'Office Handbag', 'Minimal Carry Bag']
        }
    ];

    return (
        <div className="min-h-screen bg-[#f2efe8] pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <ScrollReveal direction="up">
                    <header className="text-center mb-20">
                        <h2 className="text-xs font-mono uppercase tracking-[0.5em] text-[#2d3a2d]/40 mb-6">
                            Our Collections
                        </h2>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-black uppercase tracking-tighter leading-none text-[#2d3a2d] mb-6 sm:mb-8 heading-academic">
                            Choose Your <br />Carry
                        </h1>
                        <p className="text-base sm:text-lg md:text-xl text-[#2d3a2d]/70 font-sans max-w-2xl mx-auto leading-relaxed">
                            We focus on only two categories. Why? Because mastery requires focus.
                            Every stitch, every buckle, every material choice is obsessed over.
                        </p>
                    </header>
                </ScrollReveal>

                {/* Categories Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 mb-12 sm:mb-16 md:mb-20">
                    {categories.map((category, index) => (
                        <ScrollReveal
                            key={category.id}
                            direction={index === 0 ? 'left' : 'right'}
                            delay={0.2}
                        >
                            <Link
                                to={`/category/${category.id}`}
                                className="group block bg-white rounded-[40px] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                            >
                                {/* Image */}
                                <div className="aspect-[4/3] overflow-hidden relative">
                                    <img
                                        src={category.image}
                                        alt={category.title}
                                        className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                </div>

                                {/* Content */}
                                <div className="p-10">
                                    <h3 className="text-3xl md:text-4xl font-serif font-black uppercase tracking-tighter text-[#2d3a2d] mb-3 heading-academic">
                                        {category.title}
                                    </h3>
                                    <p className="font-mono text-sm uppercase tracking-widest text-[#2d3a2d]/60 mb-6">
                                        {category.subtitle}
                                    </p>
                                    <p className="text-base text-[#2d3a2d]/70 font-sans leading-relaxed mb-8">
                                        {category.description}
                                    </p>

                                    {/* Product List */}
                                    <div className="space-y-3 mb-8">
                                        {category.products.map((product) => (
                                            <div
                                                key={product}
                                                className="flex items-center gap-3 text-sm font-mono uppercase tracking-widest text-[#2d3a2d]/50"
                                            >
                                                <div className="w-1.5 h-1.5 bg-[#2d3a2d]/30 rounded-full" />
                                                {product}
                                            </div>
                                        ))}
                                    </div>

                                    {/* CTA */}
                                    <div className="flex items-center gap-3 text-[#2d3a2d] font-bold uppercase tracking-widest text-sm group-hover:gap-5 transition-all">
                                        Explore {category.title}
                                        <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                                    </div>
                                </div>
                            </Link>
                        </ScrollReveal>
                    ))}
                </div>

                {/* Bottom CTA */}
                <ScrollReveal direction="up" delay={0.4}>
                    <div className="bg-[#2d3a2d] text-white p-12 md:p-16 rounded-[50px] text-center">
                        <h3 className="text-2xl md:text-3xl font-serif font-bold uppercase tracking-tighter mb-4">
                            Not sure which to choose?
                        </h3>
                        <p className="font-mono text-sm text-white/70 uppercase tracking-widest mb-8">
                            Learn about our materials and impact
                        </p>
                        <Link
                            to="/about"
                            className="inline-flex items-center gap-3 px-10 py-5 bg-white text-[#2d3a2d] font-bold uppercase tracking-widest text-sm rounded-full hover:scale-105 transition-transform"
                        >
                            Our Story <ArrowRight size={20} />
                        </Link>
                    </div>
                </ScrollReveal>
            </div>
        </div>
    );
};

export default Collections;
