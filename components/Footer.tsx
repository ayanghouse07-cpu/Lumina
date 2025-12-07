import React from 'react';
import { Twitter, Github, Linkedin, MessageCircle } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="relative bg-lumina-black pt-32 overflow-hidden border-t border-white/5">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 relative z-10">
        
        <div className="flex flex-col md:flex-row justify-between items-start mb-32">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center">
                 <MessageCircle size={14} className="text-lumina-orange" />
              </div>
              <span className="text-xs font-bold tracking-widest uppercase text-white">Get in Touch</span>
            </div>
          </div>

          <div className="flex gap-8 text-[10px] font-bold tracking-widest uppercase text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Privacy & Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <span>@2025 Lumina Creative Inc.</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-32">
          <div>
             <div className="text-4xl md:text-6xl text-white font-light tracking-tight mb-2">+1 800 555 0199</div>
             <div className="text-4xl md:text-6xl text-white font-bold tracking-tight uppercase">hello@lumina.ai</div>
          </div>
          <div className="flex items-end gap-6 lg:justify-end">
            <a href="#" className="text-gray-500 hover:text-white transition-colors"><Twitter size={24} /></a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors"><Github size={24} /></a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors"><Linkedin size={24} /></a>
          </div>
        </div>

        {/* Massive Text Masked */}
        <div className="relative w-full overflow-hidden select-none pointer-events-none">
          <h1 className="text-[18vw] leading-[0.75] font-bold text-center tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-black opacity-80 translate-y-[5%]">
            LUMINA
          </h1>
        </div>
      </div>
      
      {/* Background Image Texture */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none mix-blend-screen">
          <img src="https://picsum.photos/1600/900?grayscale" className="w-full h-full object-cover" />
      </div>
    </footer>
  );
};