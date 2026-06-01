import { Phone, Mail, MapPin, Snowflake } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleEmailClick = (e) => {
    e.preventDefault();
    window.location.href = "mailto:bijinviliappalli@gmail.com?subject=AC%20Service%20Inquiry&body=Hello,%20I%20need%20information%20about%20your%20AC%20services.";
  };

  return (
    <footer className="bg-[#05080f] border-t border-slate-900 pt-16 pb-8 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Brand Identity Card */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="flex flex-col">
                <span className="font-heading font-extrabold text-lg tracking-tight text-white">
                  FAMOUSE WORLD
                </span>
                <span className="text-[10px] tracking-widest text-cyan-400 font-bold -mt-1 uppercase">
                  AC Services
                </span>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-slate-400 mt-2">
              Famouse world's leading cooling solutions partner, offering premium air conditioning installation, repair, and annual maintenance contracts across Qatar.
            </p>
            <div className="flex items-center gap-2 mt-2 text-xs font-semibold text-cyan-400">
              <Snowflake className="w-3.5 h-3.5 animate-spin-slow" style={{ animationDuration: '8s' }} />
              <span>Fast • Reliable • Affordable Cooling</span>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="font-heading font-bold text-sm text-white uppercase tracking-wider mb-5">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm">
              {[
                { name: 'Home', href: '#home' },
                { name: 'About Us', href: '#about' },
                { name: 'Our Services', href: '#services' },
                { name: 'Inquiry Form', href: '#inquiry' },
                { name: 'Contact Us', href: '#contact' }
              ].map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="hover:text-cyan-400 transition-colors duration-200 flex items-center gap-1.5 group"
                  >
                    <span className="h-1 w-1 rounded-full bg-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="font-heading font-bold text-sm text-white uppercase tracking-wider mb-5">
              Our Services
            </h3>
            <ul className="space-y-3 text-sm">
              {[
                'AC Installation',
                'AC Service',
                'AC Maintenance',
                'AC Repair',
                'Gas Filling',
                'Annual Maintenance (AMC)'
              ].map((service) => (
                <li key={service} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-slate-800"></span>
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details Column */}
          <div>
            <h3 className="font-heading font-bold text-sm text-white uppercase tracking-wider mb-5">
              Contact Details
            </h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-cyan-500 shrink-0 mt-0.5" />
                <span className="text-slate-300">
                  Madina Khalifa (S),<br />
                  Doha, Qatar
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-cyan-500 shrink-0" />
                <div className="flex flex-col text-slate-300">
                  <a href="tel:+97433102976" className="hover:text-cyan-400 transition-colors">+974 3310 2976</a>
                  <a href="tel:+97455670822" className="hover:text-cyan-400 transition-colors">+974 5567 0822</a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-cyan-500 shrink-0" />
                <a 
                  href="mailto:bijinviliappalli@gmail.com" 
                  onClick={handleEmailClick}
                  className="text-slate-300 hover:text-cyan-400 transition-colors break-all"
                >
                  bijinviliappalli@gmail.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Credits Bar */}
        <div className="border-t border-slate-900/60 pt-8 mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {currentYear} Polarix AC Services. All rights reserved.</p>
          <div className="flex items-center gap-1">
            <span>Powering comfort under the label</span>
            <span className="text-cyan-500 font-bold tracking-wide">FAMOUS WORLD</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
