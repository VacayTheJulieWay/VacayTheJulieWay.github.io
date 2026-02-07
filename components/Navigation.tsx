
import React, { useState, useEffect } from 'react';
import { Page } from '../types';
import { THEME } from '../theme';

interface NavigationProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentPage, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', value: Page.HOME },
    { label: 'About', value: Page.ABOUT },
    { label: 'Services', value: Page.SERVICES },
    { label: 'Contact', value: Page.CONTACT },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4 ${
        isScrolled ? 'glass shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div 
          className="text-2xl font-bold cursor-pointer transition-transform hover:scale-105"
          onClick={() => onNavigate(Page.HOME)}
          style={{ color: THEME.primary }}
        >
          <span className="serif italic">Vacay</span> the Julie Way
        </div>

        <div className="hidden md:flex space-x-8 items-center">
          {navItems.map((item) => (
            <button
              key={item.value}
              onClick={() => onNavigate(item.value)}
              className={`text-sm font-medium transition-colors hover:opacity-100 ${
                currentPage === item.value ? 'opacity-100 border-b-2' : 'opacity-60'
              }`}
              style={{ 
                color: THEME.text,
                borderColor: currentPage === item.value ? THEME.primary : 'transparent'
              }}
            >
              {item.label}
            </button>
          ))}
          
          <div className="flex space-x-4 ml-4">
            <SocialIcon href="https://instagram.com" icon="Instagram" />
            <SocialIcon href="https://facebook.com" icon="Facebook" />
            <SocialIcon href="https://tiktok.com" icon="TikTok" />
          </div>
        </div>

        {/* Mobile Menu Placeholder - For simplicity, keeping it clean */}
        <div className="md:hidden">
            <button 
                onClick={() => onNavigate(Page.CONTACT)}
                className="px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider text-white"
                style={{ backgroundColor: THEME.primary }}
            >
                Start
            </button>
        </div>
      </div>
    </nav>
  );
};

const SocialIcon: React.FC<{ href: string; icon: string }> = ({ href, icon }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    className="opacity-60 hover:opacity-100 transition-opacity"
    title={icon}
  >
    <div className="w-5 h-5 flex items-center justify-center">
        {/* Minimalist text representations for brevity, could swap for SVGs */}
        <span className="text-[10px] font-bold">{icon[0]}</span>
    </div>
  </a>
);

export default Navigation;
