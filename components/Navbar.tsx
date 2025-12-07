import React, { useState, useEffect } from 'react';
import { Disc } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  
  const opacity = useTransform(scrollY, [0, 100], [0, 1]);
  const blur = useTransform(scrollY, [0, 100], [0, 12]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-white/0 ${isScrolled ? 'border-white/5 bg-lumina-black/80' : ''}`}
      style={{ backdropFilter: `blur(${isScrolled ? 12 : 0}px)` }}
    >
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-lumina-gradient rounded-full flex items-center justify-center text-black">
             <div className="w-3 h-3 bg-black rounded-full" />
          </div>
          <span className="font-bold text-lg tracking-wide text-white">Lumina</span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-widest text-gray-400">
          <a href="#" className="hover:text-white transition-colors">WORKFLOW</a>
          <a href="#" className="hover:text-white transition-colors">RESOURCES</a>
          <a href="#" className="hover:text-white transition-colors">PRICING</a>
        </div>

        <div className="flex items-center gap-6">
          <button className="text-sm font-medium text-white hover:text-gray-300 hidden sm:block">Log In</button>
          <button className="bg-lumina-gradient text-black px-6 py-2.5 rounded-full text-sm font-bold hover:brightness-110 transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,85,0,0.3)]">
            Get Access
          </button>
        </div>
      </div>
    </motion.nav>
  );
};