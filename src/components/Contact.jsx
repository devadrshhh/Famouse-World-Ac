import { Phone, Mail, MapPin, ExternalLink, CalendarDays } from 'lucide-react';

export default function Contact() {
  const handleEmailClick = (e) => {
    e.preventDefault();
    window.location.href = "mailto:bijinviliappalli@gmail.com?subject=AC%20Service%20Inquiry&body=Hello,%20I%20need%20information%20about%20your%20AC%20services.";
  };

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      {/* Background Decor Ambient Light */}
      <div className="absolute bottom-1/4 left-1/3 w-[300px] h-[300px] bg-cyan-100/20 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest text-cyan-600 uppercase bg-cyan-50 border border-cyan-200/50 px-3.5 py-1.5 rounded-full">
            GET IN TOUCH
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 mt-4 mb-6 leading-tight">
            Our Contact Details
          </h2>
          <p className="font-sans text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
            Have a question or need an emergency repair? Reach out to us via phone, email, or find us in Madina Khalifa (S), Qatar.
          </p>
        </div>

        {/* Contact Content Grid (Symmetrical 3-Column Minimalist Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          
          {/* Address Card */}
          <div className="glass-card p-5 sm:p-8 rounded-2xl sm:rounded-3xl flex flex-col justify-between text-left bg-white/90">
            <div className="space-y-6">
              <div className="w-12 h-12 bg-cyan-50 border border-cyan-100 text-cyan-600 rounded-xl flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <span className="text-xs text-slate-400 uppercase tracking-wider font-extrabold">Office Address</span>
                <h4 className="font-heading font-black text-lg text-slate-900">Famouse world</h4>
                <p className="text-slate-600 text-sm leading-relaxed font-semibold">
                  Madina Khalifa (S), Doha, Qatar
                </p>
              </div>
            </div>
          </div>

          {/* Phone Card */}
          <div className="glass-card p-5 sm:p-8 rounded-2xl sm:rounded-3xl flex flex-col justify-between text-left bg-white/90">
            <div className="space-y-6">
              <div className="w-12 h-12 bg-cyan-50 border border-cyan-100 text-cyan-600 rounded-xl flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div className="space-y-4">
                <div className="space-y-1">
                  <span className="text-xs text-slate-400 uppercase tracking-wider font-extrabold">Call Representatives</span>
                  <h4 className="font-heading font-extrabold text-lg text-slate-900">Immediate Lines</h4>
                </div>
                <div className="flex flex-col gap-2 pt-1">
                  <a
                    href="tel:+97433102976"
                    className="flex items-center justify-between bg-slate-50 hover:bg-slate-100 border border-slate-200 px-4 py-2.5 rounded-xl transition-all duration-300 text-xs text-slate-700 hover:text-cyan-600 font-semibold"
                  >
                    <span>Line 1: +974 3310 2976</span>
                    <ExternalLink className="w-4 h-4 shrink-0 opacity-40" />
                  </a>
                  <a
                    href="tel:+97455670822"
                    className="flex items-center justify-between bg-slate-50 hover:bg-slate-100 border border-slate-200 px-4 py-2.5 rounded-xl transition-all duration-300 text-xs text-slate-700 hover:text-cyan-600 font-semibold"
                  >
                    <span>Line 2: +974 5567 0822</span>
                    <ExternalLink className="w-4 h-4 shrink-0 opacity-40" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Email Card */}
          <a 
            href="mailto:bijinviliappalli@gmail.com" 
            onClick={handleEmailClick}
            className="glass-card p-5 sm:p-8 rounded-2xl sm:rounded-3xl flex flex-col justify-between text-left group hover:border-cyan-500/30 bg-white/90"
          >
            <div className="space-y-6">
              <div className="w-12 h-12 bg-cyan-50 border border-cyan-100 text-cyan-600 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <Mail className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <span className="text-xs text-slate-400 uppercase tracking-wider font-extrabold">Send Email Inquiry</span>
                <h4 className="font-heading font-black text-lg text-slate-900 group-hover:text-cyan-600 transition-colors break-all">
                  bijinviliappalli@gmail.com
                </h4>
                <p className="text-cyan-600 text-xs flex items-center gap-1.5 pt-1 font-bold">
                  <CalendarDays className="w-3.5 h-3.5" />
                  <span>Click to pre-fill email</span>
                </p>
              </div>
            </div>
          </a>

        </div>

      </div>
    </section>
  );
}
