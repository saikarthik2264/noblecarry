import React from 'react';
import { Clock } from 'lucide-react';

interface LifespanBarProps {
  productLifespan: string;
  marketLifespan?: string;
  showComparison?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

const LifespanBar: React.FC<LifespanBarProps> = ({ 
  productLifespan, 
  marketLifespan = '6–12 months',
  showComparison = true,
  size = 'md'
}) => {
  const sizeClasses = {
    sm: 'h-4',
    md: 'h-6',
    lg: 'h-8'
  };

  return (
    <div className="space-y-8">
      {showComparison && (
        <div className="relative">
          <div className="flex justify-between items-end mb-3">
            <span className="font-mono text-sm uppercase tracking-widest text-[#2d3a2d]/50">
              Mass Produced "Eco" Bag
            </span>
            <span className="font-mono text-sm text-red-600 font-bold">
              {marketLifespan}
            </span>
          </div>
          <div className={`${sizeClasses[size]} bg-gray-100 rounded-full overflow-hidden shadow-inner`}>
            <div className="h-full bg-gradient-to-r from-gray-300 to-gray-100 w-[15%] animate-pulse" />
          </div>
          <p className="font-mono text-xs uppercase text-[#2d3a2d]/30 mt-2">
            Prone to strap failure, liner peeling, and landfill transition.
          </p>
        </div>
      )}

      <div className="relative">
        <div className="flex justify-between items-end mb-3">
          <span className="font-mono text-sm uppercase tracking-widest text-[#2d3a2d] font-bold flex items-center gap-2">
            <Clock size={16} />
            Noble Carry Recrafted
          </span>
          <span className="font-mono text-sm text-green-700 font-bold">
            {productLifespan}
          </span>
        </div>
        <div className={`${sizeClasses[size]} bg-gray-100 rounded-full overflow-hidden border border-[#2d3a2d]/5 shadow-inner`}>
          <div className="h-full bg-gradient-to-r from-[#556b2f] to-[#d4af37] w-[90%] flex items-center justify-end px-4 lifespan-bar-fill lifespan-bar-noble">
            <Clock size={size === 'sm' ? 12 : size === 'md' ? 14 : 16} className="text-white" />
          </div>
        </div>
        <p className="font-mono text-xs uppercase text-[#2d3a2d]/60 mt-2">
          Reinforced seams, repairable hardware, and aging-friendly waxed canvas.
        </p>
      </div>
    </div>
  );
};

export default LifespanBar;
