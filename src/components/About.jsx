import { CheckCircle2, Award, Users, Timer, HelpCircle } from 'lucide-react';

export default function About() {
  const highlights = [
    { title: "Fast Cooling Response", desc: "Beat the heat instantly with our rapid response times in Madina Khalifa (S) and across Doha." },
    { title: "Fully Certified Technicians", desc: "Our technicians are experts in residential and commercial split & window AC systems." },
    { title: "100% Transparent Pricing", desc: "No hidden charges. Upfront diagnostics and affordable, budget-friendly cooling solutions." },
    { title: "Top-Tier Components Only", desc: "We utilize genuine OEM replacement parts and high-grade refrigerant gases for efficiency." }
  ];

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Background Decor Ambient Light */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-cyan-100/30 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest text-cyan-600 uppercase bg-cyan-50 border border-cyan-200/50 px-3.5 py-1.5 rounded-full">
            WHO WE ARE
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 mt-4 mb-6 leading-tight">
            Keeping Qatar Cool & Comfortable Since Day One
          </h2>
          <p className="font-sans text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
            At <strong className="text-slate-900 font-bold">Famouse world</strong>, we understand how critical air conditioning is to your Qatari home or business. Our professional cooling specialists deliver unmatched AC installation, service, and maintenance.
          </p>
        </div>

        {/* Two Column Layout: Visual Stats Cards & Bullet Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual Stats Dashboard */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            
            <div className="glass-card p-4 sm:p-6 rounded-xl sm:rounded-2xl text-center space-y-2">
              <div className="w-12 h-12 bg-cyan-50 border border-cyan-100 rounded-xl flex items-center justify-center mx-auto text-cyan-600 mb-2">
                <Timer className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-black text-2xl sm:text-3xl text-slate-900">Rapid</h3>
              <p className="text-[10px] sm:text-xs text-slate-500 font-semibold">Response Dispatch</p>
            </div>

            <div className="glass-card p-4 sm:p-6 rounded-xl sm:rounded-2xl text-center space-y-2">
              <div className="w-12 h-12 bg-cyan-50 border border-cyan-100 rounded-xl flex items-center justify-center mx-auto text-cyan-600 mb-2">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-black text-2xl sm:text-3xl text-slate-900">100%</h3>
              <p className="text-[10px] sm:text-xs text-slate-500 font-semibold">Satisfaction Guaranteed</p>
            </div>

            <div className="glass-card p-4 sm:p-6 rounded-xl sm:rounded-2xl text-center space-y-2">
              <div className="w-12 h-12 bg-cyan-50 border border-cyan-100 rounded-xl flex items-center justify-center mx-auto text-cyan-600 mb-2">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-black text-2xl sm:text-3xl text-slate-900">5k+</h3>
              <p className="text-[10px] sm:text-xs text-slate-500 font-semibold">Happy Qatari Clients</p>
            </div>

            <div className="glass-card p-4 sm:p-6 rounded-xl sm:rounded-2xl text-center space-y-2">
              <div className="w-12 h-12 bg-cyan-50 border border-cyan-100 rounded-xl flex items-center justify-center mx-auto text-cyan-600 mb-2">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-black text-2xl sm:text-3xl text-slate-900">24/7</h3>
              <p className="text-[10px] sm:text-xs text-slate-500 font-semibold">Support & Inquiry</p>
            </div>

          </div>

          {/* Right Column: Detailed Highlights */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="font-heading font-extrabold text-2xl text-slate-900 mb-2">
              Why Madina Khalifa Trusts Famouse world:
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="shrink-0 mt-1">
                    <CheckCircle2 className="w-5 h-5 text-cyan-600" />
                  </div>
                  <div className="space-y-1 text-left">
                    <h4 className="font-heading font-bold text-base text-slate-900">{item.title}</h4>
                    <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-semibold">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Contact Card */}
            <div className="mt-8 p-6 rounded-2xl bg-cyan-50/50 border border-cyan-200/60 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <HelpCircle className="w-8 h-8 text-cyan-600 shrink-0" />
                <div className="text-left">
                  <p className="text-sm font-black text-slate-900">Need an urgent cooling repair?</p>
                  <p className="text-xs text-slate-500 font-semibold">Our technicians are on standby to restore comfort.</p>
                </div>
              </div>
              <a
                href="#inquiry"
                className="bg-cyan-600 hover:bg-cyan-500 text-white font-black px-6 py-2.5 rounded-xl text-xs transition-colors tracking-wide shrink-0 shadow-md shadow-cyan-600/10"
              >
                Schedule Now
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
