import { MessageSquare } from 'lucide-react';

export default function FloatingWhatsApp() {
  const handleClick = () => {
    window.open("https://wa.me/97433102976?text=Hello,%20I%20need%20AC%20service.", "_blank");
  };

  return (
    <div className="fixed bottom-20 sm:bottom-8 right-6 z-40">
      <button
        onClick={handleClick}
        className="w-14 h-14 bg-emerald-500 hover:bg-emerald-400 text-white rounded-full flex items-center justify-center shadow-2xl shadow-emerald-500/30 hover:shadow-emerald-500/50 hover:scale-110 active:scale-95 transition-all duration-300 relative group animate-bounce cursor-pointer"
        style={{ animationDuration: '3s' }}
        aria-label="Contact Famouse world via WhatsApp"
      >
        <MessageSquare className="w-7 h-7 fill-white text-white" />
        
        {/* Tooltip bubble on hover */}
        <span className="absolute right-16 bg-slate-900 border border-slate-800 text-slate-100 text-xs font-bold px-3 py-1.5 rounded-xl whitespace-nowrap shadow-xl opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 pointer-events-none">
          🟢 Chat with Technician
        </span>
      </button>
    </div>
  );
}
