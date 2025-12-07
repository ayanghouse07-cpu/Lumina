import React from 'react';

export const GridBackground = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none flex justify-between px-4 md:px-12 max-w-[1600px] mx-auto w-full left-0 right-0">
      <div className="w-px h-full bg-white/5 hidden md:block" />
      <div className="w-px h-full bg-white/5" />
      <div className="w-px h-full bg-white/5" />
      <div className="w-px h-full bg-white/5" />
      <div className="w-px h-full bg-white/5 hidden md:block" />
    </div>
  );
};