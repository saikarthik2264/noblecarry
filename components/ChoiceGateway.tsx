import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface ChoiceGatewayProps {
    onChoice?: (choice: 'BACKPACKS' | 'HANDBAGS') => void;
}

const ChoiceGateway: React.FC<ChoiceGatewayProps> = ({ onChoice }) => {
    const navigate = useNavigate();
    const [hoveredChoice, setHoveredChoice] = useState<'BACKPACKS' | 'HANDBAGS' | null>(null);

    const handleChoice = (choice: 'BACKPACKS' | 'HANDBAGS') => {
        sessionStorage.setItem('noble_carry_choice', choice);
        if (onChoice) {
            onChoice(choice);
        } else {
            navigate(`/category/${choice}`);
        }
    };

    return (
        <div className="fixed inset-0 z-[200] bg-[#f2efe8] flex flex-col items-center justify-center p-6 text-center overflow-hidden animate-in">
            <div className="max-w-5xl w-full">
                <h2 className="text-xs font-mono uppercase tracking-[0.5em] text-[#2d3a2d]/40 mb-12 animate-pulse">
                    Identity precedes consumption
                </h2>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#2d3a2d] leading-none mb-16 uppercase tracking-tighter heading-academic">
                    What kind of carrier <br /> are you today?
                </h1>

                <div className="flex flex-col md:flex-row gap-16 justify-center items-center">
                    {/* Backpack Choice */}
                    <button
                        onClick={() => handleChoice('BACKPACKS')}
                        onMouseEnter={() => setHoveredChoice('BACKPACKS')}
                        onMouseLeave={() => setHoveredChoice(null)}
                        className="silhouette-choice group relative flex flex-col items-center"
                    >
                        <div className="w-40 h-52 relative mb-6">
                            <div className={`silhouette-glow ${hoveredChoice === 'BACKPACKS' ? 'opacity-30' : 'opacity-0'}`} />
                            <img
                                src="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=1974&auto=format&fit=crop"
                                alt="Backpack Silhouette"
                                className="w-full h-full object-cover grayscale brightness-75 rounded-3xl border border-[#2d3a2d]/10 shadow-xl"
                            />
                        </div>
                        <span className="font-serif text-2xl font-bold uppercase tracking-widest text-[#2d3a2d] group-hover:tracking-tighter transition-all duration-500 heading-academic">
                            The Commuter
                        </span>
                        <span className="font-mono text-xs uppercase text-[#2d3a2d]/50 mt-3 tracking-[0.3em]">
                            Backpack User
                        </span>
                    </button>

                    <div className="w-px h-32 bg-[#2d3a2d]/10 hidden md:block" />

                    {/* Handbag Choice */}
                    <button
                        onClick={() => handleChoice('HANDBAGS')}
                        onMouseEnter={() => setHoveredChoice('HANDBAGS')}
                        onMouseLeave={() => setHoveredChoice(null)}
                        className="silhouette-choice group relative flex flex-col items-center"
                    >
                        <div className="w-40 h-52 relative mb-6">
                            <div className={`silhouette-glow ${hoveredChoice === 'HANDBAGS' ? 'opacity-30' : 'opacity-0'}`} />
                            <img
                                src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1974&auto=format&fit=crop"
                                alt="Handbag Silhouette"
                                className="w-full h-full object-cover grayscale brightness-75 rounded-3xl border border-[#2d3a2d]/10 shadow-xl"
                            />
                        </div>
                        <span className="font-serif text-2xl font-bold uppercase tracking-widest text-[#2d3a2d] group-hover:tracking-tighter transition-all duration-500 heading-academic">
                            The Minimalist
                        </span>
                        <span className="font-mono text-xs uppercase text-[#2d3a2d]/50 mt-3 tracking-[0.3em]">
                            Handbag User
                        </span>
                    </button>
                </div>
            </div>

            <div className="absolute bottom-10 font-mono text-xs uppercase tracking-widest text-[#2d3a2d]/30">
                Noble Carry — Est. 2024
            </div>
        </div>
    );
};

export default ChoiceGateway;
