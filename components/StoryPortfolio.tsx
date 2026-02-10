import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Package, MapPin, Clock } from 'lucide-react';
import { PRODUCTS } from '../constants';
import LifespanBar from './LifespanBar';

interface StoryPortfolioProps {
    category?: 'BACKPACKS' | 'HANDBAGS' | 'ALL';
}

const StoryPortfolio: React.FC<StoryPortfolioProps> = ({ category = 'ALL' }) => {
    const [selectedNode, setSelectedNode] = useState<string | null>(null);
    const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

    const filteredProducts = category === 'ALL'
        ? PRODUCTS
        : PRODUCTS.filter(p => p.category === category);

    const handleNodeClick = (productId: string) => {
        setSelectedNode(selectedNode === productId ? null : productId);
    };

    return (
        <section className="py-32 bg-white px-6">
            <div className="max-w-7xl mx-auto">
                <header className="text-center mb-20">
                    <h2 className="text-xs font-mono uppercase tracking-[0.5em] text-[#2d3a2d]/40 mb-6">
                        The Portfolio
                    </h2>
                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#2d3a2d] uppercase leading-none tracking-tighter heading-academic mb-6">
                        Every Bag <br />Has a Story
                    </h3>
                    <p className="text-base text-[#2d3a2d]/70 font-sans max-w-2xl mx-auto">
                        Click any product to explore its purpose, usage scenario, and expected lifespan.
                    </p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {filteredProducts.map((product) => (
                        <div
                            key={product.id}
                            className="story-node group relative"
                            onClick={() => handleNodeClick(product.id)}
                        >
                            <div className="relative aspect-[3/4] bg-[#e5e1d8] overflow-hidden rounded-3xl shadow-lg transition-all duration-500 group-hover:shadow-2xl cursor-pointer">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 grayscale-[0.3] group-hover:grayscale-0"
                                />

                                {/* Hover Overlay with Data Points */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#2d3a2d] via-[#2d3a2d]/80 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
                                    <div className="space-y-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                        {/* Purpose */}
                                        <div className="flex items-start gap-3">
                                            <Package size={20} className="text-[#d4af37] shrink-0 mt-1" />
                                            <div>
                                                <p className="text-xs font-mono uppercase tracking-widest text-white/60 mb-1">
                                                    The Why
                                                </p>
                                                <p className="text-sm font-sans text-white font-medium">
                                                    {product.description.split('.')[0]}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Usage Scenario */}
                                        <div className="flex items-start gap-3">
                                            <MapPin size={20} className="text-[#d4af37] shrink-0 mt-1" />
                                            <div>
                                                <p className="text-xs font-mono uppercase tracking-widest text-white/60 mb-1">
                                                    The Where
                                                </p>
                                                <p className="text-sm font-sans text-white font-medium">
                                                    {product.subCategory}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Lifespan */}
                                        <div className="flex items-start gap-3">
                                            <Clock size={20} className="text-[#d4af37] shrink-0 mt-1" />
                                            <div>
                                                <p className="text-xs font-mono uppercase tracking-widest text-white/60 mb-1">
                                                    The How Long
                                                </p>
                                                <p className="text-sm font-sans text-white font-medium">
                                                    {product.impact.lifespan}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Category Badge */}
                                <div className="absolute top-6 left-6 bg-white/95 px-4 py-2 font-mono text-xs font-bold uppercase tracking-[0.2em] shadow-md rounded-lg">
                                    {product.subCategory}
                                </div>
                            </div>

                            {/* Product Name & Price */}
                            <div className="mt-6 flex justify-between items-end border-b-2 border-[#2d3a2d]/10 group-hover:border-[#2d3a2d] transition-all pb-4">
                                <div>
                                    <h4 className="text-2xl font-serif font-bold uppercase tracking-tight text-[#2d3a2d] heading-academic">
                                        {product.name}
                                    </h4>
                                    <p className="font-mono text-xs text-[#2d3a2d]/50 uppercase mt-2 tracking-widest">
                                        {product.impact.wasteReduced} reduced
                                    </p>
                                </div>
                                <p className="font-mono text-2xl font-black text-[#2d3a2d] data-youth">
                                    ${product.price}
                                </p>
                            </div>

                            {/* Expanded Details */}
                            {selectedNode === product.id && (
                                <div className="mt-8 p-8 bg-[#f2efe8] rounded-3xl border border-[#2d3a2d]/10 tree-expand">
                                    <LifespanBar
                                        productLifespan={product.impact.lifespan}
                                        showComparison={true}
                                        size="sm"
                                    />
                                    <Link
                                        to={`/product/${product.id}`}
                                        className="mt-8 w-full flex items-center justify-center gap-3 bg-[#2d3a2d] text-white py-4 px-8 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-[#1a241a] transition-all group"
                                    >
                                        View Full Story
                                        <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                                    </Link>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StoryPortfolio;
