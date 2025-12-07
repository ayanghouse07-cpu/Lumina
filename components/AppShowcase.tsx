
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Smartphone, CheckCircle, Zap, Star, Layout } from 'lucide-react';

export const AppShowcase = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const glowY = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  return (
    <section ref={containerRef} className="py-32 relative overflow-hidden">
       {/* Decorative glow with Parallax */}
       <motion.div 
         style={{ y: glowY }}
         className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-lumina-orange/5 rounded-full blur-[120px] pointer-events-none opacity-50" 
       />

      <div className="max-w-[1600px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center relative z-10">
        
        {/* Phone Mockup */}
        <div className="relative flex justify-center lg:justify-start group perspective-1000">
          <motion.div 
            initial={{ rotateY: -10, rotateX: 5 }}
            whileInView={{ rotateY: 0, rotateX: 0 }}
            transition={{ duration: 1.5, type: 'spring' }}
            className="relative w-[340px] h-[680px] bg-black border-[10px] border-[#1a1a1a] rounded-[3.5rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] overflow-hidden z-20"
          >
             {/* Dynamic Island / Notch */}
             <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-[#1a1a1a] rounded-b-2xl z-30" />

             {/* Phone Screen Content */}
             <div className="w-full h-full bg-[#050505] relative">
                {/* Status Bar */}
                <div className="absolute top-0 w-full h-10 px-8 flex justify-between items-end z-20 text-[10px] text-white pb-2">
                  <span className="font-medium">9:41</span>
                  <div className="flex gap-1.5 items-center">
                    <div className="w-4 h-2.5 bg-white rounded-sm"></div>
                  </div>
                </div>

                {/* App UI */}
                <div className="px-6 pt-14 pb-8 text-white h-full flex flex-col">
                   <div className="flex justify-between items-center mb-8">
                      <h3 className="font-bold text-lg flex items-center gap-1">Lumina <Star size={10} className="text-lumina-orange fill-lumina-orange" /></h3>
                      <div className="flex gap-1">
                        <div className="w-1 h-1 rounded-full bg-gray-500" />
                        <div className="w-1 h-1 rounded-full bg-gray-500" />
                        <div className="w-1 h-1 rounded-full bg-gray-500" />
                      </div>
                   </div>
                   
                   <div className="flex justify-between gap-2 mb-8 overflow-x-auto scrollbar-hide pb-2">
                      <div className="flex flex-col items-center gap-2 min-w-[60px]">
                        <div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center bg-white/5"><Smartphone size={20} className="text-white" /></div>
                        <span className="text-[10px] font-medium text-gray-500">News</span>
                      </div>
                      <div className="flex flex-col items-center gap-2 min-w-[60px]">
                        <div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center bg-white/5"><Zap size={20} className="text-white" /></div>
                        <span className="text-[10px] font-medium text-gray-500">Updates</span>
                      </div>
                      <div className="flex flex-col items-center gap-2 min-w-[60px]">
                        <div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center bg-white/5"><CheckCircle size={20} className="text-white" /></div>
                        <span className="text-[10px] font-medium text-gray-500">Verified</span>
                      </div>
                      <div className="flex flex-col items-center gap-2 min-w-[60px]">
                        <div className="w-14 h-14 rounded-full border border-lumina-orange flex items-center justify-center bg-black text-lumina-orange shadow-[0_0_15px_rgba(255,85,0,0.2)]"><Layout size={20} /></div>
                        <span className="text-[10px] font-bold text-white">Feature</span>
                      </div>
                   </div>

                   {/* User Profile Snippet */}
                   <div className="flex items-center gap-3 mb-4">
                     <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-lumina-orange to-purple-500 p-[1px]">
                       <div className="w-full h-full rounded-full bg-black flex items-center justify-center overflow-hidden">
                         <img src="https://picsum.photos/seed/u1/50/50" className="w-full h-full object-cover" />
                       </div>
                     </div>
                     <div>
                       <div className="text-xs font-bold">Lumina_official</div>
                       <div className="text-[10px] text-gray-500">Sponsored</div>
                     </div>
                     <div className="ml-auto text-gray-500 text-[10px]">•••</div>
                   </div>

                   {/* Main Card */}
                   <div className="relative flex-1 bg-[#111] rounded-3xl overflow-hidden mb-6 group-hover:scale-[1.02] transition-transform duration-500 border border-white/5">
                      <img src="https://picsum.photos/seed/phone/400/600" className="absolute inset-0 w-full h-full object-cover opacity-80" alt="App Content" />
                      
                      {/* Overlay Elements */}
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80" />
                      
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full text-[10px] border border-white/10 flex items-center gap-2 w-fit mb-3">
                            <div className="w-1.5 h-1.5 bg-lumina-gradient rounded-full animate-pulse shadow-[0_0_5px_#FF5500]"></div>
                            AI Generated
                        </div>
                      </div>
                   </div>

                   <button className="w-full py-4 bg-lumina-gradient text-black font-bold rounded-2xl text-xs flex justify-between items-center px-6 hover:brightness-110 transition-all">
                     Try Lumina for free
                     <ArrowRight size={16} />
                   </button>
                </div>
             </div>
          </motion.div>
          
          {/* Shadow/Glow behind phone */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[600px] bg-lumina-orange/20 blur-[100px] -z-10" />
        </div>

        {/* Right Content */}
        <div className="space-y-16 py-10">
           <motion.div 
             initial={{ opacity: 0, x: 50 }}
             whileInView={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.8 }}
             className="group"
           >
              <div className="text-5xl md:text-7xl font-medium text-white mb-2 group-hover:text-lumina-orange transition-colors">10+</div>
              <div className="text-gray-500 text-lg border-b border-white/10 pb-8 group-hover:border-lumina-orange/30 transition-colors">Industries Transformed</div>
           </motion.div>

           <motion.div 
             initial={{ opacity: 0, x: 50 }}
             whileInView={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.8, delay: 0.2 }}
             className="group"
           >
              <div className="text-5xl md:text-7xl font-medium text-white mb-2 group-hover:text-lumina-orange transition-colors">500 Million</div>
              <div className="text-gray-500 text-lg border-b border-white/10 pb-8 group-hover:border-lumina-orange/30 transition-colors">Assets Generated Annually</div>
           </motion.div>

           <motion.div 
             initial={{ opacity: 0, x: 50 }}
             whileInView={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.8, delay: 0.4 }}
             className="group"
           >
              <div className="text-5xl md:text-7xl font-medium text-white mb-2 group-hover:text-lumina-orange transition-colors">1,800%</div>
              <div className="text-gray-500 text-lg border-b border-white/10 pb-8 group-hover:border-lumina-orange/30 transition-colors">Production Efficiency Lift</div>
           </motion.div>

           <motion.div 
             initial={{ opacity: 0, x: 50 }}
             whileInView={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.8, delay: 0.6 }}
             className="group"
           >
              <div className="text-5xl md:text-7xl font-medium text-white mb-2 group-hover:text-lumina-orange transition-colors">140,000</div>
              <div className="text-gray-500 text-lg">Active Creative Teams</div>
           </motion.div>
        </div>

      </div>
    </section>
  );
};