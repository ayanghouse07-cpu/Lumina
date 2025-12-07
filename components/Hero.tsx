
import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Play, Video, ScanLine, Upload, Check } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative min-h-screen pt-40 pb-20 flex flex-col justify-center overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[1200px] h-[800px] bg-lumina-orange/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-[1600px] mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Content */}
        <div className="lg:col-span-7">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-10"
          >
            <div className="w-2 h-2 rounded-full bg-lumina-gradient shadow-[0_0_10px_#FF5500]" />
            <span className="text-lumina-orange font-bold text-xs tracking-[0.2em] uppercase">Creative Suite 2.0</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-7xl md:text-9xl font-medium leading-[0.9] tracking-tight mb-10 text-white"
          >
            Craft Visual <br />
            <span className="text-white opacity-50">Stories.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-400 max-w-xl mb-12 leading-relaxed"
          >
            Transforms raw footage into cinematic masterpieces instantly. Lumina's AI adapts to your unique style, automating the tedious so you can focus on the story.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap items-center gap-8"
          >
            <button className="group relative px-8 py-4 bg-white/5 rounded-full border border-lumina-orange/20 flex items-center gap-4 overflow-hidden hover:border-lumina-orange/50 transition-colors duration-300 backdrop-blur-sm">
               <div className="absolute inset-0 bg-lumina-orange/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
               <div className="w-8 h-8 rounded-full bg-lumina-gradient flex items-center justify-center text-black relative z-10 shadow-[0_0_15px_rgba(255,85,0,0.4)]">
                 <Sparkles size={16} fill="black" strokeWidth={2} />
               </div>
               <span className="font-bold text-lg text-white relative z-10">Start Creating</span>
               <ArrowRight size={18} className="text-gray-400 group-hover:text-white transition-colors relative z-10" />
            </button>
            <div className="flex items-center gap-2 text-sm text-gray-500 font-medium">
              <Check size={16} className="text-lumina-orange" /> No credit card required
            </div>
          </motion.div>
        </div>

        {/* Right Visuals */}
        <div className="lg:col-span-5 relative mt-12 lg:mt-0">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative"
          >
            {/* Video Card */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 group cursor-pointer aspect-video">
              <img 
                src="https://picsum.photos/seed/lumina/800/500" 
                alt="Cinematic Landscape" 
                className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-white/5 backdrop-blur-xl flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
                  <Play fill="white" className="ml-1 opacity-80" />
                </div>
              </div>
            </div>

            {/* Floating Steps UI - Positioned to overlap bottom right */}
            <div className="absolute -bottom-16 -right-4 md:-right-8 w-full max-w-[320px]">
              <div className="bg-[#0A0A0A]/90 backdrop-blur-2xl border border-white/10 rounded-2xl p-2 space-y-1 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                 {/* Active Item */}
                 <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/5 relative overflow-hidden group">
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-lumina-gradient" />
                    <div className="w-8 h-8 rounded-lg bg-[#1a1a1a] text-lumina-orange flex items-center justify-center shadow-inner border border-white/5">
                        <Video size={14} />
                    </div>
                    <span className="text-sm font-bold text-white tracking-wide">Import Footage</span>
                    <div className="ml-auto w-2 h-2 rounded-full bg-lumina-gradient shadow-[0_0_5px_#FF5500]" />
                 </div>

                 {/* Inactive Items */}
                 <div className="flex items-center gap-4 p-4 rounded-xl opacity-60 hover:opacity-100 transition-opacity cursor-pointer">
                    <div className="text-xs font-bold text-gray-600 w-8 text-center">02</div>
                    <span className="text-sm font-medium text-gray-400">AI Scene Detect</span>
                 </div>
                 <div className="flex items-center gap-4 p-4 rounded-xl opacity-60 hover:opacity-100 transition-opacity cursor-pointer">
                    <div className="text-xs font-bold text-gray-600 w-8 text-center">03</div>
                    <span className="text-sm font-medium text-gray-400">Export 4K</span>
                 </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};