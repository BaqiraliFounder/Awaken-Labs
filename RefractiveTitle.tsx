
import React, { useEffect, useRef, useState } from 'react';

interface RefractiveTitleProps {
  mainText: string;
  subText: string;
  className?: string;
}

const RefractiveTitle: React.FC<RefractiveTitleProps> = ({ mainText, subText, className = "" }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [targetPos, setTargetPos] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  // Smooth easing (lerp) logic
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);

    let animationFrameId: number;
    const lerp = (start: number, end: number, factor: number) => start + (end - start) * factor;

    const updatePosition = () => {
      setMousePos(prev => ({
        x: lerp(prev.x, targetPos.x, 0.1),
        y: lerp(prev.y, targetPos.y, 0.1)
      }));
      animationFrameId = requestAnimationFrame(updatePosition);
    };

    if (!isMobile) {
      animationFrameId = requestAnimationFrame(updatePosition);
    }

    return () => {
      window.removeEventListener('resize', checkMobile);
      cancelAnimationFrame(animationFrameId);
    };
  }, [targetPos, isMobile]);

  const handleMouseMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (isMobile || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ('touches' in e) ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
    const y = ('touches' in e) ? e.touches[0].clientY : (e as React.MouseEvent).clientY;
    setTargetPos({ x: x - rect.left, y: y - rect.top });
  };

  // Adjusted for branding: Inter font, tighter tracking, responsive sizing
  const titleStyles = "text-[8vw] md:text-[7vw] lg:text-[6.5vw] font-black tracking-tighter leading-[0.9] select-none uppercase transition-colors duration-500";
  
  // Radial mask size
  const maskSize = 350;

  if (isMobile) {
    return (
      <div className={`flex flex-col items-center lg:items-start justify-center py-6 ${className}`}>
        <h1 className={`${titleStyles} text-zinc-900 text-center lg:text-left`}>{mainText}</h1>
        <p className="mt-4 text-[10px] tracking-[0.4em] uppercase font-black text-orange-600 bg-orange-50 px-3 py-1 rounded-md">{subText}</p>
      </div>
    );
  }

  return (
    <div 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className={`relative w-full flex flex-col items-center lg:items-start justify-center cursor-none ${className}`}
      style={{ perspective: '1000px' }}
    >
      {/* Base layer - Muted Zinc for site theme */}
      <div className={`${titleStyles} text-zinc-200 font-black text-center lg:text-left`}>
        {mainText}
      </div>

      {/* Refracted Layers with Radial Masking */}
      <div 
        className="absolute inset-0 flex flex-col items-center lg:items-start justify-center pointer-events-none overflow-hidden"
        style={{
          WebkitMaskImage: `radial-gradient(circle ${maskSize}px at ${mousePos.x}px ${mousePos.y}px, black 0%, transparent 100%)`,
          maskImage: `radial-gradient(circle ${maskSize}px at ${mousePos.x}px ${mousePos.y}px, black 0%, transparent 100%)`,
        }}
      >
        {/* Layer 1: Chromatic Aberration - Orange Primary */}
        <div 
          className={`${titleStyles} text-orange-500/40 font-black absolute blur-[1px] text-center lg:text-left`}
          style={{ transform: `translate(${(mousePos.x - targetPos.x) * 0.15}px, ${(mousePos.y - targetPos.y) * 0.15}px)` }}
        >
          {mainText}
        </div>
        
        {/* Layer 2: Chromatic Aberration - Soft Amber */}
        <div 
          className={`${titleStyles} text-amber-500/30 font-black absolute blur-[1px] text-center lg:text-left`}
          style={{ transform: `translate(${(mousePos.x - targetPos.x) * -0.15}px, ${(mousePos.y - targetPos.y) * -0.15}px)` }}
        >
          {mainText}
        </div>

        {/* Main Revealed Text - Zinc 900 for Light Theme Legibility */}
        <div 
          className={`${titleStyles} text-zinc-900 font-black text-center lg:text-left`}
          style={{
            transform: `scale(${1 + Math.abs(mousePos.x - targetPos.x) * 0.0005}) skewX(${(mousePos.x - targetPos.x) * 0.02}deg)`,
          }}
        >
          {mainText}
        </div>
      </div>

      {/* Subtitle - Refined for site theme */}
      <div 
        className="mt-6 transition-transform duration-500"
        style={{ 
          transform: `translateY(${(mousePos.y - targetPos.y) * 0.1}px)`,
          opacity: Math.max(0.5, 1 - Math.abs(mousePos.x - targetPos.x) * 0.005)
        }}
      >
        <p className="text-[11px] tracking-[0.4em] uppercase font-black text-orange-600 bg-orange-50/80 backdrop-blur-sm border border-orange-100 px-5 py-2 rounded-lg shadow-sm">
          {subText}
        </p>
      </div>
    </div>
  );
};

export default RefractiveTitle;
