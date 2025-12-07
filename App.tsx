
import React from 'react';
import { GridBackground } from './components/ui/GridBackground';
import { ScrollFlow } from './components/ui/ScrollFlow';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Stats } from './components/Stats';
import { AppShowcase } from './components/AppShowcase';
import { CaseStudies } from './components/CaseStudies';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="bg-lumina-black min-h-screen text-white relative selection:bg-lumina-orange selection:text-black font-sans antialiased overflow-x-hidden">
      <GridBackground />
      <ScrollFlow />
      <Navbar />
      
      <main className="relative z-10">
        <Hero />
        <About />
        <Stats />
        <AppShowcase />
        <CaseStudies />
      </main>

      <Footer />
      
      {/* Sticky indicator for scroll progress/section could go here */}
      <div className="fixed bottom-8 right-8 z-50 hidden md:block">
        <button className="bg-black/80 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full flex items-center gap-2 text-[10px] font-bold hover:bg-white/10 transition-all group uppercase tracking-wider shadow-2xl">
          <div className="w-1.5 h-1.5 bg-lumina-gradient rounded-full animate-pulse shadow-[0_0_8px_#FF5500]" />
          <span className="text-gray-400 group-hover:text-white transition-colors">Made in Aura</span>
        </button>
      </div>
    </div>
  );
}

export default App;