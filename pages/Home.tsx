
import React from 'react';
import { THEME } from '../theme';
import { Page, SpecialtyCard as SpecialtyCardType } from '../types';
import SpecialtyCard from '../components/SpecialtyCard';
import TripStarter from '../components/TripStarter';

interface HomeProps {
  onNavigate: (page: Page) => void;
}

const SPECIALTIES: SpecialtyCardType[] = [
  {
    title: "Disney Magic",
    description: "From rope-dropping Hollywood Studios to finding the best spot for fireworks, I handle the Genie+ stress so you just enjoy the churros.",
    image: "https://images.unsplash.com/photo-1513297844881-6091eb11002b?q=80&w=800&auto=format&fit=crop",
    tag: "Family Favorites"
  },
  {
    title: "Cruise Adventures",
    description: "Waking up in a new port every morning. Whether it's the Caribbean sun or Alaskan glaciers, I'll find your perfect stateroom.",
    image: "https://images.unsplash.com/photo-1548574505-5e239809ee19?q=80&w=800&auto=format&fit=crop",
    tag: "Luxury Travel"
  },
  {
    title: "Universal Thrills",
    description: "Get ready for high-speed adventures and movie-making magic. I'll plan your express passes so you spend more time on rides and less in line.",
    image: "https://images.unsplash.com/photo-1621252179027-94459d278660?q=80&w=800&auto=format&fit=crop",
    tag: "Adventure"
  }
];

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <div className="fade-in">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden px-6 lg:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="z-10 text-center lg:text-left">
            <span className="inline-block px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-6" style={{ backgroundColor: THEME.secondary, color: THEME.primary }}>
              Your New Best Friend in Travel
            </span>
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-8" style={{ color: THEME.text }}>
              Traveling the <span className="serif italic" style={{ color: THEME.primary }}>Julie Way</span>
            </h1>
            <p className="text-lg lg:text-xl text-gray-500 mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Bespoke itineraries, expert advice, and a partnership that lasts long after the flight home. Let's make your dream trip a reality.
            </p>
            <button 
              onClick={() => document.getElementById('trip-starter')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-10 py-5 rounded-full text-white font-bold transition-all hover:scale-105 shadow-lg"
              style={{ backgroundColor: THEME.primary }}
            >
              Start Planning Your Magic
            </button>
          </div>
          
          <div className="relative h-[500px] lg:h-[700px] w-full rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1502086223501-7ea24ec83abc?q=80&w=1200&auto=format&fit=crop" 
              alt="Happy Family Traveling" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
        </div>
      </section>

      {/* The Julie Way Difference */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-10 serif">It’s more than just a booking.</h2>
          <div className="space-y-8 text-lg text-gray-600 leading-relaxed">
            <p>
              Hey there! I’m Julie, and I believe travel should be as seamless as it is spectacular. 
              Think of me as your personal travel architect, concierge, and hype-woman all rolled into one.
            </p>
            <p>
              The "Julie Way" means no cookie-cutter packages. It means I listen to what makes your family laugh, 
              what your dream dinner looks like, and exactly how many times you’re willing to walk up a hill for a photo.
            </p>
            <p className="font-semibold" style={{ color: THEME.primary }}>
              This isn't just a transaction; it's a partnership. And I can't wait to get started!
            </p>
          </div>
        </div>
      </section>

      {/* Specialties Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 serif">Where do you want to go?</h2>
          <p className="text-gray-400 uppercase tracking-widest text-xs font-bold">Expertise in the Extraordinary</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {SPECIALTIES.map((card, idx) => (
            <SpecialtyCard key={idx} card={card} />
          ))}
        </div>
      </section>

      {/* Interactive Trip Starter */}
      <section id="trip-starter" className="py-24 px-6" style={{ backgroundColor: THEME.secondary }}>
        <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4 serif">Let's find your vibe.</h2>
                <p className="text-gray-500">Quickly answer 3 fun questions to help me get to know your travel style.</p>
            </div>
            <TripStarter />
        </div>
      </section>

      {/* Social Feed Placeholder */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
            <div>
                <h2 className="text-4xl font-bold mb-2 serif">The Social Feed</h2>
                <p className="text-gray-400">Follow the journey @VacayTheJulieWay</p>
            </div>
            <a href="#" className="hidden md:block text-sm font-bold uppercase tracking-wider underline decoration-2" style={{ color: THEME.primary }}>Follow along</a>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <div key={i} className="aspect-square bg-gray-100 rounded-xl overflow-hidden relative group cursor-pointer shadow-sm">
                <img src={`https://picsum.photos/seed/${i + 20}/600/600`} alt="Instagram Feed" className="w-full h-full object-cover transition-transform group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-white font-bold text-xs uppercase tracking-widest">View Post</span>
                </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
