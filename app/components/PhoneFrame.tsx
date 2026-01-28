'use client';

import { ReactNode } from 'react';

interface PhoneFrameProps {
  children?: ReactNode;
  screenWidth: number;
  screenHeight: number;
  zoom: number;
}

export default function PhoneFrame({ children, screenWidth, screenHeight, zoom }: PhoneFrameProps) {
  const bezelX = 25; // horizontal bezel on each side
  const bezelY = 22; // vertical bezel on top and bottom
  
  return (
    <div 
      className="relative"
      style={{ 
        width: screenWidth + (bezelX * 2),
        height: screenHeight + (bezelY * 2),
        transform: `scale(${zoom})`,
        transformOrigin: 'center',
      }}
    >
      {/* Phone outer frame */}
      <div className="absolute inset-x-[3px] inset-y-0 bg-[#1a1a1a] border border-white/60 rounded-[62px] shadow-[inset_0px_0px_8px_0px_rgba(255,255,255,0.9)]" />
      
      {/* Phone inner black bezel */}
      <div className="absolute inset-x-[7px] inset-y-[4px] bg-black rounded-[58px]" />
      
      {/* Left side buttons */}
      {/* Silent switch */}
      <div className="absolute left-0 top-[160px] w-[3px] h-[30px] bg-[#333] rounded-l-[1px] shadow-[inset_1px_0px_2px_0px_rgba(255,255,255,0.5)]" />
      {/* Volume up */}
      <div className="absolute left-0 top-[224px] w-[3px] h-[64px] bg-[#333] rounded-l-[1px] shadow-[inset_1px_0px_2px_0px_rgba(255,255,255,0.5)]" />
      {/* Volume down */}
      <div className="absolute left-0 top-[304px] w-[3px] h-[64px] bg-[#333] rounded-l-[1px] shadow-[inset_1px_0px_2px_0px_rgba(255,255,255,0.5)]" />
      
      {/* Right side button - Power */}
      <div className="absolute right-0 top-[248px] w-[3px] h-[108px] bg-[#333] rounded-r-[1px] shadow-[inset_-1px_0px_2px_0px_rgba(255,255,255,0.5)]" />
      
      {/* Phone screen area (white background for content) */}
      <div className="absolute inset-x-[25px] inset-y-[22px] bg-white rounded-[40px] overflow-hidden">
        {children}
      </div>
    </div>
  );
}
