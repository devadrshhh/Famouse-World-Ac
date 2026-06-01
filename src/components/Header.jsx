import { useState, useEffect } from 'react';
import { Menu, X, Phone, Calendar } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Inquiry', href: '#inquiry' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'glass-effect shadow-lg border-b border-white/5 py-3' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Company Name */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="flex flex-col">
              <span className="font-heading font-extrabold text-lg sm:text-xl tracking-tight text-slate-900 group-hover:text-cyan-600 transition-colors duration-300">
                FAMOUSE WORLD
              </span>
              <span className="text-[10px] tracking-wider text-cyan-600 font-bold -mt-1 uppercase">
                AC Services
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-sans text-sm font-semibold text-slate-700 hover:text-cyan-600 transition-colors duration-200 relative py-2 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-cyan-500 hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Phone Quick Call Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+97433102976"
              className="flex items-center gap-2 bg-white/80 hover:bg-white border border-slate-200 hover:border-cyan-500/30 text-slate-700 hover:text-slate-900 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-300"
            >
              <Phone className="w-3.5 h-3.5 text-cyan-600 animate-pulse" />
              <span>+974 3310 2976</span>
            </a>
            <a
              href="#inquiry"
              className="flex items-center gap-2 bg-gradient-to-r from-cyan-600 to-cyan-500 hover:from-cyan-500 hover:to-cyan-400 text-slate-950 px-4 py-2 rounded-full text-xs font-bold shadow-lg shadow-cyan-500/10 hover:shadow-cyan-500/25 transition-all duration-300"
            >
              <Calendar className="w-3.5 h-3.5 text-slate-950" />
              <span>Book Service</span>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="md:hidden flex items-center gap-3">
            <a
              href="tel:+97433102976"
              className="p-2 rounded-lg bg-cyan-50 border border-cyan-100 text-cyan-600"
              aria-label="Call Famouse world"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg bg-white border border-slate-200 text-slate-700 focus:outline-none focus:border-cyan-500/40"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[60px] w-full bg-white/95 backdrop-blur-lg z-40 border-t border-cyan-100/50 transition-all duration-300 animate-fade-in text-left">
          <div className="px-6 py-8 space-y-6 flex flex-col items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-heading text-lg font-semibold text-slate-700 hover:text-cyan-600 transition-colors duration-200 py-2 w-full text-center"
              >
                {link.name}
              </a>
            ))}
            
            <hr className="w-full border-slate-100 my-2" />

            <div className="w-full flex flex-col gap-3">
              <span className="text-xs text-center text-slate-500 uppercase tracking-widest font-semibold">
                Quick Representatives Line
              </span>
              <a
                href="tel:+97433102976"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center gap-3 bg-slate-50 border border-slate-200 text-slate-700 py-3 rounded-xl hover:border-cyan-500/30 transition-colors"
              >
                <Phone className="w-4 h-4 text-cyan-600" />
                <span className="font-semibold text-sm">+974 3310 2976</span>
              </a>
              <a
                href="tel:+97455670822"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center gap-3 bg-slate-50 border border-slate-200 text-slate-700 py-3 rounded-xl hover:border-cyan-500/30 transition-colors"
              >
                <Phone className="w-4 h-4 text-cyan-600" />
                <span className="font-semibold text-sm">+974 5567 0822</span>
              </a>
              <a
                href="#inquiry"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-600 to-cyan-500 text-white py-3 rounded-xl font-bold text-center shadow-lg shadow-cyan-500/15"
              >
                <Calendar className="w-4 h-4" />
                <span>Request Free Quote</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
