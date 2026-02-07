
import React from 'react';
import { THEME } from '../theme';

const Contact: React.FC = () => {
  return (
    <div className="fade-in max-w-7xl mx-auto px-6 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div>
          <h1 className="text-5xl font-bold mb-8 serif">Let's Chat!</h1>
          <p className="text-xl text-gray-500 mb-12 max-w-lg leading-relaxed">
            Have a question? Ready to start your next adventure? I'm just a phone call or message away.
          </p>
          
          <div className="space-y-12">
            <div className="flex items-start">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mr-6 flex-shrink-0" style={{ backgroundColor: THEME.secondary }}>
                    <span className="text-xl">📞</span>
                </div>
                <div>
                    <h4 className="font-bold text-sm uppercase tracking-widest text-gray-400 mb-2">Give us a call</h4>
                    <p className="text-2xl font-bold serif">(913) 385-3355</p>
                </div>
            </div>

            <div className="flex items-start">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mr-6 flex-shrink-0" style={{ backgroundColor: THEME.secondary }}>
                    <span className="text-xl">📍</span>
                </div>
                <div>
                    <h4 className="font-bold text-sm uppercase tracking-widest text-gray-400 mb-2">Based in</h4>
                    <p className="text-2xl font-bold serif">Kansas City, MO</p>
                    <p className="text-gray-500">Serving clients nationwide</p>
                </div>
            </div>

            <div className="flex items-start">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mr-6 flex-shrink-0" style={{ backgroundColor: THEME.secondary }}>
                    <span className="text-xl">✉️</span>
                </div>
                <div>
                    <h4 className="font-bold text-sm uppercase tracking-widest text-gray-400 mb-2">Email</h4>
                    <p className="text-2xl font-bold serif underline decoration-1" style={{ textDecorationColor: THEME.primary }}>hello@vacaythejulieway.com</p>
                </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-12 rounded-3xl shadow-xl border border-gray-100">
            <h3 className="text-3xl font-bold mb-8 serif text-center">Inquiry Form</h3>
            <p className="text-center text-gray-500 mb-8 text-sm">Fill out the details below and I'll get back to you within 24 business hours!</p>
            
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-6">
                    <div>
                        <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">First Name</label>
                        <input type="text" className="w-full p-4 rounded-xl bg-gray-50 border-transparent focus:border-blue-300 focus:bg-white focus:ring-0 transition-all outline-none" placeholder="Julie" />
                    </div>
                    <div>
                        <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Last Name</label>
                        <input type="text" className="w-full p-4 rounded-xl bg-gray-50 border-transparent focus:border-blue-300 focus:bg-white focus:ring-0 transition-all outline-none" placeholder="Traveler" />
                    </div>
                </div>
                
                <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Email Address</label>
                    <input type="email" className="w-full p-4 rounded-xl bg-gray-50 border-transparent focus:border-blue-300 focus:bg-white focus:ring-0 transition-all outline-none" placeholder="hello@example.com" />
                </div>

                <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Tell me about your dream trip</label>
                    <textarea className="w-full p-4 rounded-xl bg-gray-50 border-transparent focus:border-blue-300 focus:bg-white focus:ring-0 transition-all outline-none h-32 resize-none" placeholder="I'm thinking about a family cruise in November..."></textarea>
                </div>

                <button 
                    type="submit" 
                    className="w-full py-5 rounded-xl text-white font-bold transition-all hover:scale-[1.02] shadow-lg"
                    style={{ backgroundColor: THEME.primary }}
                >
                    Send Message
                </button>
            </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
