
import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { ChevronRight, Minus, CreditCard, Triangle, Zap, X } from 'lucide-react';

interface CaseStudy {
  category: string;
  name: string;
  icon: React.ReactNode;
  description: string;
  stat: string;
  statDesc: string;
  solution?: string;
  isOpen?: boolean;
}

const initialCases: CaseStudy[] = [
  {
    category: "FINTECH",
    name: "Midday Financial",
    icon: <CreditCard size={20} />,
    description: "Automated financial reporting visualizations.",
    stat: "40% reduction",
    statDesc: "in meeting times"
  },
  {
    category: "INFRASTRUCTURE",
    name: "Vercel",
    icon: <Triangle size={20} fill="currentColor" />,
    description: "Dynamic deployment previews generated instantly.",
    stat: "2x velocity",
    statDesc: "of feature shipments"
  },
  {
    category: "DATABASE",
    name: "Supabase",
    icon: <Zap size={20} />,
    description: "Postgres documentation turned into video tutorials.",
    stat: "1M+",
    statDesc: "developer views"
  },
  {
    category: "PRODUCTIVITY",
    name: "Linear Systems",
    icon: <X size={20} />,
    description: "Internal fragmentation led to siloed decision-making and slower release cycles across distributed engineering teams.",
    solution: "Deployed Lumina's collaborative engine to synchronize asset pipelines and automate status reporting in real-time.",
    stat: "40% reduction",
    statDesc: "in meeting times and doubled the velocity of feature shipments within Q3.",
    isOpen: true
  }
];

export const CaseStudies = () => {
  const [cases, setCases] = useState<CaseStudy[]>(initialCases);
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [-150, 150]);

  const toggleCase = (index: number) => {
    setCases(cases.map((c, i) => 
      i === index ? { ...c, isOpen: !c.isOpen } : c
    ));
  };

  return (
    <section ref={containerRef} className="py-32 relative z-10 overflow-hidden">
      {/* Background Parallax Blob */}
      <motion.div 
        style={{ y }}
        className="absolute bottom-0 left-[-20%] w-[1000px] h-[1000px] bg-lumina-orange/5 rounded-full blur-[150px] pointer-events-none" 
      />

      <div className="max-w-[1600px] mx-auto px-6 md:px-12 relative z-10">
        
        <div className="flex justify-between items-end mb-20">
          <h2 className="text-5xl md:text-7xl font-medium tracking-tight text-white">Success Stories</h2>
          <div className="flex items-center gap-2 text-xs font-bold text-lumina-orange tracking-widest uppercase">
            <div className="w-2 h-2 rounded-full bg-lumina-gradient" /> Case Studies
          </div>
        </div>

        <div className="border-t border-white/10">
          {cases.map((item, index) => (
            <div 
              key={index} 
              onClick={() => toggleCase(index)}
              className={`group border-b border-white/10 transition-colors hover:bg-white/5 ${item.isOpen ? 'bg-white/5' : ''}`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 py-10 items-center cursor-pointer">
                
                <div className="lg:col-span-3 text-xs font-bold tracking-widest text-gray-500 uppercase group-hover:text-white transition-colors">
                  {item.category}
                </div>
                
                <div className="lg:col-span-4 flex items-center gap-4 text-2xl md:text-3xl font-medium text-white">
                  {item.icon}
                  {item.name}
                </div>

                <div className="lg:col-span-5 flex justify-end pr-4">
                   {item.isOpen ? <Minus className="text-white" /> : <ChevronRight className="text-gray-600 group-hover:text-white" />}
                </div>
              </div>

              <AnimatePresence>
                {item.isOpen && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-12 pt-4">
                      <div className="lg:col-span-3"></div>
                      <div className="lg:col-span-3 pl-4">
                         <div className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">Challenge</div>
                         <p className="text-sm text-gray-300 leading-relaxed max-w-xs">
                           {item.description}
                         </p>
                      </div>
                      <div className="lg:col-span-3 pl-4">
                         <div className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">Solution</div>
                         <p className="text-sm text-gray-300 leading-relaxed max-w-xs">
                           {item.solution || "Implemented custom AI pipelines to automate visual asset generation at scale."}
                         </p>
                      </div>
                      <div className="lg:col-span-3 pl-4">
                         <div className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">Result</div>
                         <p className="text-sm text-gray-300 leading-relaxed max-w-xs">
                           Achieved a <span className="text-lumina-orange">{item.stat}</span> {item.statDesc}
                         </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
