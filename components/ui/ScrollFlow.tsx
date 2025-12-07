
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const ScrollFlow = () => {
  const { scrollYProgress } = useScroll();
  
  // Create a path that snakes through the content
  const pathLength = useTransform(scrollYProgress, [0, 0.8], [0, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
      <svg className="w-full h-full absolute top-0 left-0" preserveAspectRatio="none">
        <motion.path
          d="M 200 600 C 400 800, 1200 1000, 1400 1600 C 1600 2200, 200 2400, 200 3200 C 200 4000, 1400 4200, 1400 5000"
          fill="none"
          stroke="url(#orange-gradient)"
          strokeWidth="1"
          style={{ pathLength, opacity }}
          className="opacity-40"
        />
        <defs>
          <linearGradient id="orange-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(255, 85, 0, 0)" />
            <stop offset="20%" stopColor="rgba(255, 85, 0, 0.5)" />
            <stop offset="80%" stopColor="rgba(255, 85, 0, 0.5)" />
            <stop offset="100%" stopColor="rgba(255, 85, 0, 0)" />
          </linearGradient>
        </defs>
      </svg>
      
      {/* Ambient Orbs following the flow vaguely */}
      <div className="absolute top-[800px] right-[20%] w-64 h-64 bg-lumina-orange/5 rounded-full blur-[80px]" />
      <div className="absolute top-[1600px] left-[10%] w-96 h-96 bg-lumina-orange/5 rounded-full blur-[100px]" />
      <div className="absolute top-[2400px] right-[10%] w-64 h-64 bg-lumina-orange/5 rounded-full blur-[80px]" />
    </div>
  );
};
