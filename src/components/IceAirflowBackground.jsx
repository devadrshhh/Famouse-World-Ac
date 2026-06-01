import { useState, useEffect } from 'react';

export default function IceAirflowBackground() {
  const [scrollY, setScrollY] = useState(0);
  const [scrollSpeed, setScrollSpeed] = useState(0);

  useEffect(() => {
    let lastScroll = window.scrollY;
    let timeoutId;

    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setScrollY(currentScroll);

      // Calculate scroll velocity (speed)
      const diff = Math.abs(currentScroll - lastScroll);
      setScrollSpeed(Math.min(diff * 0.8, 15)); // Cap the velocity multiplier
      lastScroll = currentScroll;

      // Reset speed/velocity back to idle glide when scrolling stops
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setScrollSpeed(0);
      }, 150);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeoutId);
    };
  }, []);

  // Snowflakes array with custom scroll factors
  const iceElements = [
    { id: 1, size: 20, left: '8%', top: '8%', speed: 0.12, baseRotate: 45 },
    { id: 2, size: 36, left: '82%', top: '15%', speed: 0.08, baseRotate: 15 },
    { id: 3, size: 14, left: '68%', top: '30%', speed: 0.20, baseRotate: 90 },
    { id: 4, size: 28, left: '12%', top: '48%', speed: 0.10, baseRotate: 60 },
    { id: 5, size: 40, left: '86%', top: '62%', speed: 0.04, baseRotate: 120 },
    { id: 6, size: 18, left: '42%', top: '70%', speed: 0.15, baseRotate: 30 },
    { id: 7, size: 32, left: '7%', top: '85%', speed: 0.09, baseRotate: 75 },
    { id: 8, size: 24, left: '88%', top: '92%', speed: 0.11, baseRotate: 110 },
    { id: 9, size: 20, left: '55%', top: '102%', speed: 0.18, baseRotate: 40 },
    { id: 10, size: 28, left: '22%', top: '118%', speed: 0.13, baseRotate: 135 }
  ];

  // Wind breeze lines dispersing from the right side down
  const windRipples = [
    { id: 1, top: '22%', left: '10%', speed: 0.18, width: 280 },
    { id: 2, top: '48%', left: '40%', speed: 0.12, width: 380 },
    { id: 3, top: '75%', left: '15%', speed: 0.16, width: 320 },
    { id: 4, top: '105%', left: '35%', speed: 0.14, width: 420 }
  ];

  return (
    <div className="ice-bg-container">
      
      {/* 1. Global Parallax Background Snowflakes */}
      {iceElements.map((el) => (
        <div
          key={el.id}
          className="absolute pointer-events-none transition-transform duration-100 ease-out"
          style={{
            left: el.left,
            top: el.top,
            // Apply both depth translation and velocity-based rotation
            transform: `translateY(${scrollY * el.speed}px) rotate(${el.baseRotate + scrollY * 0.08 + (scrollSpeed * 2)}deg)`,
            width: `${el.size}px`,
            height: `${el.size}px`,
            opacity: 0.22 + (scrollSpeed * 0.01) // glow slightly on active scrolls
          }}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-cyan-400/50"
          >
            <line x1="12" y1="2" x2="12" y2="22" />
            <line x1="2" y1="12" x2="22" y2="12" />
            <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
            <line x1="4.93" y1="19.07" x2="19.07" y2="4.93" />
            <polyline points="10 4 12 2 14 4" />
            <polyline points="10 20 12 22 14 20" />
            <polyline points="4 10 2 12 4 14" />
            <polyline points="20 10 22 12 20 14" />
          </svg>
        </div>
      ))}

      {/* 2. Global Scrolling Cool Wind / Breeze Vectors */}
      {windRipples.map((ripple) => (
        <div
          key={ripple.id}
          className="absolute pointer-events-none transition-transform duration-100 ease-out opacity-20"
          style={{
            top: ripple.top,
            left: ripple.left,
            width: `${ripple.width}px`,
            // Wind ripples blow dynamically horizontally on scroll speed
            transform: `translateX(${(scrollY * ripple.speed) + (scrollSpeed * 1.5)}px) translateY(${scrollY * 0.04}px)`,
          }}
        >
          <svg
            viewBox="0 0 100 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            className="text-cyan-300/40"
          >
            <path
              d="M 0 10 C 25 2, 75 18, 100 10"
              strokeLinecap="round"
              strokeDasharray="4,4"
            />
          </svg>
        </div>
      ))}

      {/* 3. Floating Split AC Indoor Unit (Fixed Right Side Parallax Glide) */}
      <div 
        className="hidden md:flex fixed right-6 z-30 pointer-events-none transition-transform duration-150 ease-out items-center gap-3"
        style={{
          // AC glides down the page as scroll progresses, keeping it visible
          transform: `translateY(${Math.min(100 + scrollY * 0.12, 1000)}px) scale(0.95)`,
          opacity: 0.45 + (scrollSpeed * 0.02)
        }}
      >
        {/* Airflow Particles blowing out from underneath the AC unit */}
        <div className="absolute right-12 top-10 flex flex-col items-end gap-1.5 opacity-85">
          <div 
            className="h-0.5 bg-gradient-to-l from-cyan-400 to-transparent rounded-full transition-all"
            style={{ width: `${60 + scrollSpeed * 8}px`, opacity: 0.4 }}
          />
          <div 
            className="h-0.5 bg-gradient-to-l from-cyan-300 to-transparent rounded-full transition-all"
            style={{ width: `${80 + scrollSpeed * 12}px`, opacity: 0.6 }}
          />
          <div 
            className="h-0.5 bg-gradient-to-l from-cyan-400 to-transparent rounded-full transition-all"
            style={{ width: `${50 + scrollSpeed * 6}px`, opacity: 0.4 }}
          />
        </div>

        {/* The Sleek Split AC Unit Graphic (Glassmorphism design) */}
        <div className="w-[180px] h-[38px] bg-white/70 backdrop-blur-md border border-cyan-200/50 rounded-lg shadow-lg shadow-cyan-500/5 relative flex flex-col justify-between p-1.5 pl-3">
          
          {/* Main grill lines */}
          <div className="flex gap-1.5 opacity-40 mt-0.5">
            <div className="w-16 h-1 bg-slate-300 rounded-full" />
            <div className="w-8 h-1 bg-slate-300 rounded-full" />
          </div>

          {/* LED indicators and vent */}
          <div className="flex justify-between items-center w-full">
            {/* Vent flap */}
            <div 
              className="h-1 bg-cyan-400/80 rounded-full transition-all duration-300"
              style={{ width: '82%', transform: `rotate(${5 + scrollSpeed * 1.5}deg)` }}
            />
            {/* Glowing cyan LED indicator */}
            <div className="flex gap-1 items-center pr-1.5">
              <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full animate-ping absolute" />
              <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
            </div>
          </div>
          
          {/* Tiny brand label */}
          <div className="absolute top-1 right-8 text-[6px] font-black tracking-widest text-slate-400 scale-75 uppercase">
            Famouse
          </div>
        </div>
      </div>

      {/* Freezing ambient gradient overlays */}
      <div className="absolute top-0 inset-x-0 h-[60vh] bg-gradient-to-b from-cyan-100/10 via-transparent to-transparent pointer-events-none" />
      <div className="absolute bottom-0 inset-x-0 h-[80vh] bg-gradient-to-t from-cyan-100/10 via-transparent to-transparent pointer-events-none" />
    </div>
  );
}
