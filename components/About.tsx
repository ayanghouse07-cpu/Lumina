
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Star, Info, Quote } from 'lucide-react';

export const About = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  return (
    <section ref={containerRef} className="py-40 relative z-10 overflow-hidden">
      
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 relative z-10 items-start">
        
        {/* Left Quote Card */}
        <div className="lg:col-span-4 sticky top-32">
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-lumina-gradient text-black p-10 rounded-[2rem] relative overflow-hidden shadow-[0_20px_40px_rgba(255,85,0,0.15)]"
          >
            <div className="flex items-center mb-8">
               <div className="flex -space-x-4">
                  <img src="https://picsum.photos/seed/user1/100/100" className="w-12 h-12 rounded-full border-[3px] border-lumina-orange object-cover" alt="User" />
                  <img src="https://picsum.photos/seed/user2/100/100" className="w-12 h-12 rounded-full border-[3px] border-lumina-orange object-cover" alt="User" />
                  <div className="w-12 h-12 rounded-full bg-black text-white border-[3px] border-lumina-orange flex items-center justify-center text-xs font-bold z-10">+2k</div>
               </div>
            </div>
            
            <div className="text-3xl font-medium mb-12 leading-tight tracking-tight">
              "Lumina changed my entire workflow."
            </div>

            <div className="flex justify-between items-end border-t border-black/10 pt-6">
               <div className="flex flex-col gap-1">
                 <span className="text-[10px] font-black uppercase tracking-widest opacity-60">Verified Creator</span>
                 <div className="flex gap-0.5">
                   <Star size={12} fill="black" strokeWidth={0} />
                   <Star size={12} fill="black" strokeWidth={0} />
                   <Star size={12} fill="black" strokeWidth={0} />
                   <Star size={12} fill="black" strokeWidth={0} />
                   <Star size={12} fill="black" strokeWidth={0} />
                 </div>
               </div>
               <Quote size={48} className="opacity-10 rotate-180" fill="black" />
            </div>
          </motion.div>
        </div>

        {/* Right Text Content */}
        <div className="lg:col-span-8 flex flex-col justify-center pt-10">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="w-2 h-2 rounded-full border border-lumina-orange animate-ping absolute" />
              <div className="w-2 h-2 rounded-full bg-lumina-gradient" />
              <span className="text-xs font-bold text-lumina-orange uppercase tracking-[0.2em]">Version 2.0 Available</span>
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ staggerChildren: 0.1 }}
              className="text-2xl md:text-3xl font-light text-white mb-12"
            >
              Next generation <span className="opacity-50">creative suite.</span>
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl lg:text-[4rem] font-medium leading-[1.05] tracking-tight text-[#4a4a4a]"
            >
              We are a <span className="text-white">creative intelligence engine</span> dedicated to transforming how the world <span className="text-white">visualizes stories</span>. With a team of researchers, engineers, and artists, we build tools that empower <span className="text-white">ambitious creators</span> to design, animate, and ship cinematic experiences at the speed of thought.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-12 flex items-center gap-4"
            >
               <button className="text-sm font-bold border-b border-white pb-1 hover:text-lumina-orange hover:border-lumina-orange transition-colors uppercase tracking-widest">
                 About Us
               </button>
            </motion.div>
        </div>

      </div>
    </section>
  );
};