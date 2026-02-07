
import React from 'react';
import { THEME } from '../theme';

const Services: React.FC = () => {
  const serviceList = [
    {
        title: "Initial Consultation",
        description: "A 30-minute discovery call where we talk dreams, budgets, and deal-breakers.",
        icon: "💬"
    },
    {
        title: "Bespoke Itinerary Building",
        description: "Day-by-day plans tailored specifically to your family's pace and preferences.",
        icon: "🗓️"
    },
    {
        title: "Concierge Bookings",
        description: "Dining reservations, shore excursions, and that 'impossible' hard-to-get ticket.",
        icon: "🎟️"
    },
    {
        title: "On-Trip Support",
        description: "Flights delayed? Need a last-minute change? I'm just a text away while you're traveling.",
        icon: "📲"
    }
  ];

  return (
    <div className="fade-in max-w-7xl mx-auto px-6 py-20">
      <div className="text-center mb-20 max-w-3xl mx-auto">
        <h1 className="text-5xl font-bold mb-6 serif">Our Boutique Services</h1>
        <p className="text-gray-500 text-lg">We don't just book flights; we curate memories. Every package is custom-built for your unique adventure.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
        {serviceList.map((s, idx) => (
            <div key={idx} className="p-10 rounded-3xl border-2 border-gray-50 hover:border-blue-100 transition-all group bg-white shadow-sm hover:shadow-md">
                <div className="text-4xl mb-6">{s.icon}</div>
                <h3 className="text-2xl font-bold mb-4 serif group-hover:text-blue-500 transition-colors">{s.title}</h3>
                <p className="text-gray-600 leading-relaxed">{s.description}</p>
            </div>
        ))}
      </div>

      <div className="bg-slate-900 text-white rounded-[3rem] p-12 lg:p-20 flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="max-w-xl">
            <h2 className="text-4xl font-bold mb-6 serif italic">Ready for the "Julie Way" experience?</h2>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                Experience the luxury of not having to lift a finger. Our planning fee is a small investment in a vacation that actually feels like a vacation.
            </p>
            <ul className="space-y-4">
                <li className="flex items-center text-sm font-medium"><span className="mr-3 text-blue-400">✓</span> No hidden fees</li>
                <li className="flex items-center text-sm font-medium"><span className="mr-3 text-blue-400">✓</span> Direct line to your planner</li>
                <li className="flex items-center text-sm font-medium"><span className="mr-3 text-blue-400">✓</span> Insider access and perks</li>
            </ul>
        </div>
        <div className="flex-shrink-0">
            <button className="px-12 py-6 rounded-full font-bold text-black bg-white hover:bg-slate-100 transition-all transform hover:scale-105 shadow-xl">
                View Sample Itinerary
            </button>
        </div>
      </div>
    </div>
  );
};

export default Services;
