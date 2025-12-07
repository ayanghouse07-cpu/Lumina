
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Activity, Layers, Zap, Globe } from 'lucide-react';

const StatItem = ({ value, label, subtext, delay }: { value: string, label: string, subtext: string, delay: number }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay }}
    className="border-l border-white/5 pl-8 md:pl-12 py-8 group relative z-10"
  >
    <div className="text-5xl md:text-7xl font-light text-white mb-2 group-hover:text-lumina-orange transition-colors duration-500">{value}</div>
    <div className="text-lg text-white font-medium mb-1">{label}</div>
    <div className="text-sm text-gray-500">{subtext}</div>
  </motion.div>
);

export const Stats = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  
  return (
    <section ref={containerRef} className="py-20 border-y border-white/5 bg-black/50 backdrop-blur-sm relative z-10 overflow-hidden">
      {/* Background Parallax */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-b from-white/5 to-transparent rounded-full blur-[100px] pointer-events-none opacity-20"
      />
      
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <StatItem value="$500M" label="Creator Revenue" subtext="Generated via Lumina assets" delay={0} />
          <StatItem value="99%" label="Client Satisfaction" subtext="Based on 50k+ reviews" delay={0.2} />
          <StatItem value="2M+" label="Videos Generated" subtext="In the last quarter alone" delay={0.4} />
          <StatItem value="4.9" label="Average Rating" subtext="Across all platforms" delay={0.6} />
        </div>

        <div className="mt-20 pt-10 border-t border-white/5">
          <h3 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-10 text-center md:text-left">Trusted By Industry Leaders</h3>
          <div className="flex flex-wrap justify-between items-center gap-10 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
             {/* Simple text logos for representation */}
             <div className="flex items-center gap-2 text-2xl font-bold text-white"><Zap fill="white" /> AMP</div>
             <div className="flex items-center gap-2 text-2xl font-bold text-white"><Layers fill="white" /> Adobe</div>
             <div className="flex items-center gap-2 text-2xl font-bold text-white">100<sup className="text-xs">TB</sup></div>
             <div className="flex items-center gap-2 text-2xl font-bold text-white">ActiveCampaign &gt;</div>
          </div>
        </div>
      </div>
    </section>
  );
};
