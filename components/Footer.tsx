
import React from 'react';
import { Page } from '../types';
import { THEME } from '../theme';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="py-20 px-6 border-t" style={{ backgroundColor: THEME.white, borderColor: THEME.secondary }}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <div className="text-2xl font-bold mb-6" style={{ color: THEME.primary }}>
            <span className="serif italic">Vacay</span> the Julie Way
          </div>
          <p className="text-gray-500 max-w-sm leading-relaxed mb-6">
            Bespoke travel planning for the modern explorer. From Disney magic to deep-sea cruises, we handle the logistics so you can handle the memories.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-blue-400">Instagram</a>
            <a href="#" className="text-gray-400 hover:text-blue-400">Facebook</a>
            <a href="#" className="text-gray-400 hover:text-blue-400">TikTok</a>
          </div>
        </div>

        <div>
          <h4 className="font-bold mb-6 uppercase tracking-widest text-xs" style={{ color: THEME.text }}>Quick Links</h4>
          <ul className="space-y-4 text-sm text-gray-500">
            <li><button onClick={() => onNavigate(Page.HOME)} className="hover:text-blue-400">Home</button></li>
            <li><button onClick={() => onNavigate(Page.ABOUT)} className="hover:text-blue-400">About Julie</button></li>
            <li><button onClick={() => onNavigate(Page.SERVICES)} className="hover:text-blue-400">Our Specialties</button></li>
            <li><button onClick={() => onNavigate(Page.CONTACT)} className="hover:text-blue-400">Contact</button></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6 uppercase tracking-widest text-xs" style={{ color: THEME.text }}>Contact Info</h4>
          <ul className="space-y-4 text-sm text-gray-500">
            <li>Based in Kansas City</li>
            <li>(913) 385-3355</li>
            <li>hello@vacaythejulieway.com</li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-gray-50 flex flex-col md:row justify-between items-center text-[10px] text-gray-400 uppercase tracking-widest">
        <p>&copy; {new Date().getFullYear()} Vacay the Julie Way. All rights reserved.</p>
        <p className="mt-4 md:mt-0">Designed for Dreamers</p>
      </div>
    </footer>
  );
};

export default Footer;
