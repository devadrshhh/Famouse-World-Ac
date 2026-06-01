import { Phone } from 'lucide-react';

export default function StickyMobileCall() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 w-full z-40 bg-[#070b13]/90 backdrop-blur-md border-t border-white/5 py-3.5 px-4 shadow-2xl flex gap-3">
      {/* Representative 1 button */}
      <a
        href="tel:+97433102976"
        className="flex-1 flex items-center justify-center gap-2 bg-slate-900 border border-slate-700/60 text-slate-100 hover:text-cyan-400 py-3 rounded-xl text-xs font-black shadow-lg shadow-black/10 active:scale-95 transition-all duration-200"
      >
        <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
        <span>+974 3310 2976</span>
      </a>

      {/* Representative 2 button */}
      <a
        href="tel:+97455670822"
        className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-600 to-cyan-500 text-slate-950 py-3 rounded-xl text-xs font-black shadow-lg shadow-cyan-500/10 active:scale-95 transition-all duration-200"
      >
        <Phone className="w-4 h-4 text-slate-950 shrink-0" />
        <span>+974 5567 0822</span>
      </a>
    </div>
  );
}
