import { Star, Quote, UserCheck } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: "Ahmed Al-Kuwari",
      location: "Madina Khalifa, Qatar",
      review: "Famouse world AC Services is outstanding. My split AC stopped cooling in July. They arrived in under 45 minutes, found a capacitor failure, replaced it, and top-up the gas immediately. Very reasonable price!",
      rating: 5,
      service: "AC Repair & Gas Filling"
    },
    {
      name: "Binoy Cherian",
      location: "Al Sadd, Qatar",
      review: "We signed an Annual Maintenance Contract (AMC) for our villa. The quarterly deep cleaning pressure jet wash they perform is brilliant. The airflow is super clean and smells fresh. Punctual technicians.",
      rating: 5,
      service: "Annual Maintenance Contract"
    },
    {
      name: "Fatima Al-Thani",
      location: "West Bay, Doha",
      review: "Super fast installation! We bought a new O-General split AC and needed it installed immediately. The Famouse world team did a pristine job with clean ducting hides, brackets, and zero mess. Highly recommended!",
      rating: 5,
      service: "AC Installation"
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-white relative overflow-hidden">
      {/* Background Decor Ambient Light */}
      <div className="absolute top-1/3 right-0 w-72 h-72 bg-cyan-100/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest text-cyan-600 uppercase bg-cyan-50 border border-cyan-200/50 px-3.5 py-1.5 rounded-full">
            REVIEWS
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 mt-4 mb-6 leading-tight">
            What Our Clients In Qatar Say
          </h2>
          <p className="font-sans text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
            Read real feedback from homeowners and office managers who trust Famouse world for high-quality, professional cooling solutions.
          </p>
        </div>

        {/* Testimonials Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div 
              key={index} 
              className="glass-card p-8 rounded-2xl flex flex-col justify-between relative group"
            >
              {/* Quote Mark Icon */}
              <Quote className="w-10 h-10 text-cyan-500/10 absolute top-6 right-6 shrink-0" />
              
              <div className="space-y-6 relative z-10">
                {/* Rating Stars */}
                <div className="flex gap-1">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-cyan-500 text-cyan-500" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed italic font-semibold text-left">
                  "{item.review}"
                </p>
              </div>

              {/* User Bio Card */}
              <div className="flex items-center gap-3 pt-6 mt-6 border-t border-slate-100 relative z-10">
                <div className="w-10 h-10 rounded-full bg-cyan-50 border border-cyan-100 flex items-center justify-center text-cyan-600">
                  <UserCheck className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <h4 className="font-heading font-extrabold text-sm text-slate-900">{item.name}</h4>
                  <p className="text-[10px] text-cyan-600 font-extrabold">{item.location}</p>
                  <span className="inline-block bg-slate-50 border border-slate-100 text-slate-500 text-[9px] font-bold px-2 py-0.5 rounded mt-1.5">
                    {item.service}
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
