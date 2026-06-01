import { useState, useEffect } from 'react';
import { MessageSquare, PhoneCall, ShieldCheck, Sparkles, Snowflake } from 'lucide-react';

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleInquiryScroll = (e) => {
    e.preventDefault();
    const element = document.getElementById("inquiry");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-[95vh] flex items-center justify-center pt-28 pb-20 overflow-hidden bg-gradient-to-b from-[#e0f2fe]/60 via-[#f0f9ff]/70 to-[#ffffff]"
    >
      {/* Background Image Container with Scroll-Sensitivity Parallax */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img 
          src="/assets/hero-bg.png" 
          alt="Luxury Air Conditioning" 
          className="w-full h-full object-cover object-center opacity-[0.18]"
          style={{ 
            transform: `translateY(${scrollY * 0.28}px) scale(1.08)`,
            transition: 'transform 0.1s cubic-bezier(0.1, 0.8, 0.2, 1)' 
          }}
        />
        {/* Soft cool gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent" />
      </div>

      {/* Floating Breeze Ripples decoration */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent opacity-100 z-10" />

      {/* Content Container (Simplified, Light Contrast & Centered) */}
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 z-20 w-full flex flex-col items-center text-center">
        
        {/* Hero Headline */}
        <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-slate-900 leading-tight mb-4 max-w-4xl">
          Professional AC <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-cyan-500 to-cyan-700 font-black">
            Installation & Service
          </span>
        </h1>

        {/* Hero Subtitle */}
        <p className="font-sans text-base sm:text-lg lg:text-xl text-slate-600 font-semibold tracking-wide max-w-2xl mb-10 leading-relaxed">
          Fast • Reliable • Affordable Cooling Solutions
        </p>

        {/* Trust Highlights Row */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-10 text-slate-700 font-semibold">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-cyan-600 shrink-0" />
            <span className="text-sm">100% Certified Technicians</span>
          </div>
          <div className="flex items-center gap-2">
            <Snowflake className="w-5 h-5 text-cyan-600 shrink-0 animate-spin-slow" />
            <span className="text-sm">Ultra-Fast Response Times</span>
          </div>
        </div>

        {/* Call to Actions */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          
          {/* Scroll to Inquiry Form Button */}
          <button
            onClick={handleInquiryScroll}
            className="flex items-center justify-center gap-3 bg-gradient-to-r from-cyan-600 to-cyan-500 hover:from-cyan-500 hover:to-cyan-400 text-white font-black px-8 py-4 rounded-xl shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/35 transition-all duration-300 w-full sm:w-auto hover:-translate-y-0.5 cursor-pointer group"
          >
            <MessageSquare className="w-5 h-5 text-white fill-white group-hover:scale-110 transition-transform" />
            <span>WhatsApp Inquiry</span>
          </button>

          {/* Call Now / Contact Button */}
          <a
            href="#contact"
            className="flex items-center justify-center gap-3 bg-white border border-slate-200 hover:border-cyan-500/40 text-slate-700 hover:text-cyan-600 font-black px-8 py-4 rounded-xl shadow-sm hover:shadow-md hover:bg-slate-50 transition-all duration-300 w-full sm:w-auto hover:-translate-y-0.5"
          >
            <PhoneCall className="w-5 h-5 text-cyan-600" />
            <span>Call Now</span>
          </a>

        </div>

      </div>
    </section>
  );
}
