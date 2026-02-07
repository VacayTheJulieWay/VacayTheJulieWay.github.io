
import React from 'react';
import { SpecialtyCard as SpecialtyCardType } from '../types';
import { THEME } from '../theme';

const SpecialtyCard: React.FC<{ card: SpecialtyCardType }> = ({ card }) => {
  return (
    <div className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
      <div className="h-64 overflow-hidden">
        <img 
          src={card.image} 
          alt={card.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4 z-10">
          <span 
            className="px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-white shadow-sm"
            style={{ backgroundColor: THEME.primary }}
          >
            {card.tag}
          </span>
        </div>
      </div>
      
      <div className="p-8">
        <h3 className="text-2xl font-bold mb-3" style={{ color: THEME.text }}>
          {card.title}
        </h3>
        <p className="text-gray-600 leading-relaxed text-sm">
          {card.description}
        </p>
        
        <div className="mt-6 flex items-center text-sm font-semibold group-hover:underline decoration-2" style={{ color: THEME.primary }}>
          Plan this vibe
          <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default SpecialtyCard;
