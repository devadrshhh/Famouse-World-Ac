import { Wrench, Settings, Hammer, Wind, ShieldCheck, Zap } from 'lucide-react';

export default function Services() {
  const services = [
    {
      title: "AC Installation",
      icon: Hammer,
      description: "Professional sizing, mounting, and calibration for split, window, and ducted AC systems.",
      details: ["Copper piping layout", "Brackets & outdoor mount", "Vacuum testing & startup"]
    },
    {
      title: "AC Service",
      icon: Settings,
      description: "Deep chemical cleaning and filter wash to restore air purity and maximize efficiency.",
      details: ["Pressure jet cleaning", "Drain tray chemical flush", "Performance check"]
    },
    {
      title: "AC Maintenance",
      icon: Wrench,
      description: "Routine check-ups to prevent breakdowns and extend the life of your cooling system.",
      details: ["Electrical component check", "Fan motor lubrication", "Amperage & voltage test"]
    }
  ];

  return (
    <section id="services" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background Decor Ambient Light */}
      <div className="absolute top-1/4 right-0 w-72 h-72 bg-cyan-100/30 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest text-cyan-600 uppercase bg-cyan-50 border border-cyan-200/50 px-3.5 py-1.5 rounded-full">
            WHAT WE DO
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 mt-4 mb-6 leading-tight">
            Our Premium AC Services
          </h2>
          <p className="font-sans text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
            We provide a complete suite of specialized residential and commercial air conditioning services, engineered to withstand the extreme heat of Qatar's summer.
          </p>
        </div>

        {/* 6 Services Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div 
                key={idx}
                className="glass-card p-5 sm:p-8 rounded-2xl sm:rounded-3xl flex flex-col justify-between text-left group"
              >
                <div className="space-y-6">
                  
                  {/* Icon Container */}
                  <div className="w-12 h-12 bg-cyan-50 border border-cyan-200/60 text-cyan-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-2">
                    <h3 className="font-heading font-extrabold text-lg text-slate-900 group-hover:text-cyan-600 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Bullet checklist details */}
                  <ul className="space-y-2.5 pt-4 border-t border-slate-100">
                    {service.details.map((detail, dIdx) => (
                      <li key={dIdx} className="flex items-center gap-2.5">
                        <div className="w-4.5 h-4.5 rounded-full bg-cyan-50 border border-cyan-100 flex items-center justify-center text-cyan-600 shrink-0">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="w-2.5 h-2.5">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </div>
                        <span className="text-xs text-slate-600 font-semibold">{detail}</span>
                      </li>
                    ))}
                  </ul>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
