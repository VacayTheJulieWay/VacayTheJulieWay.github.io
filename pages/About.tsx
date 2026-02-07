
import React from 'react';
import { THEME } from '../theme';

const About: React.FC = () => {
  return (
    <div className="fade-in max-w-7xl mx-auto px-6 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full opacity-20" style={{ backgroundColor: THEME.accent }}></div>
            <div className="rounded-3xl overflow-hidden shadow-2xl aspect-[4/5] relative z-10">
                <img 
                    src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop" 
                    alt="Julie - Bespoke Travel Planner" 
                    className="w-full h-full object-cover"
                />
            </div>
        </div>
        
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4 block">The Founder</span>
          <h1 className="text-5xl lg:text-6xl font-bold mb-8 serif">Hi, I'm Julie.</h1>
          <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
            <p>
                My love for travel started with a single plane ticket and a curiosity that hasn't quit since. 
                I’ve spent years exploring the corners of the world, from the cobblestone streets of Europe to the pristine beaches of the South Pacific.
            </p>
            <p>
                But more than the destinations, it’s the *experience* that drives me. I know what it’s like to try and plan a complex family trip while managing a full-time life. It can be overwhelming.
            </p>
            <p>
                That’s why I started **Vacay the Julie Way**. I wanted to bring the "boutique" back to travel—offering a high-touch, highly personalized service that makes my clients feel like VIPs from the moment they say "let's go."
            </p>
            <p>
                When I’m not planning your next adventure, you can find me scouring the local Kansas City coffee shops or planning my own next "research trip."
            </p>
          </div>
          
          <div className="mt-12 flex space-x-8">
            <div className="text-center">
                <div className="text-3xl font-bold serif mb-1" style={{ color: THEME.primary }}>15+</div>
                <div className="text-[10px] uppercase tracking-widest text-gray-400">Years Exp</div>
            </div>
            <div className="text-center">
                <div className="text-3xl font-bold serif mb-1" style={{ color: THEME.primary }}>500+</div>
                <div className="text-[10px] uppercase tracking-widest text-gray-400">Trips Planned</div>
            </div>
            <div className="text-center">
                <div className="text-3xl font-bold serif mb-1" style={{ color: THEME.primary }}>100%</div>
                <div className="text-[10px] uppercase tracking-widest text-gray-400">Happy Vibes</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
