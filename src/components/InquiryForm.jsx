import { useState } from 'react';
import { Send, MessageSquare, ShieldAlert } from 'lucide-react';

export default function InquiryForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    service: '',
    message: '',
    representative: '97433102976' // Default to primary phone
  });

  const [errors, setErrors] = useState({});

  const servicesList = [
    "AC Installation",
    "AC Service",
    "AC Maintenance",
    "Other Cooling Inquiry"
  ];

  const validate = () => {
    let tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = "Name is required";
    if (!formData.phone.trim()) {
      tempErrors.phone = "Phone number is required";
    } else if (!/^\+?[0-9\s-]{6,15}$/.test(formData.phone.trim())) {
      tempErrors.phone = "Enter a valid phone number";
    }
    if (!formData.address.trim()) tempErrors.address = "Address is required";
    if (!formData.service) tempErrors.service = "Please select a service";
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error for this field
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: null
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    // Prefilled text formatting
    const formattedText = `Hello Famouse world,

New Inquiry:

Name: ${formData.name.trim()}
Phone: ${formData.phone.trim()}
Address: ${formData.address.trim()}
Service: ${formData.service}
Message: ${formData.message.trim() || 'N/A'}`;

    // Encode text for URL
    const encodedText = encodeURIComponent(formattedText);
    const whatsappUrl = `https://wa.me/${formData.representative}?text=${encodedText}`;

    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="inquiry" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background Decor Ambient Light */}
      <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-cyan-100/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest text-cyan-600 uppercase bg-cyan-50 border border-cyan-200/50 px-3.5 py-1.5 rounded-full">
            BOOKING INFO
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 mt-4 mb-6 leading-tight">
            Send Us A Quick Inquiry
          </h2>
          <p className="font-sans text-slate-600 text-sm leading-relaxed font-semibold">
            Fill out the form below. Once submitted, it will compile all your details and open WhatsApp instantly to connect you with our lead technician.
          </p>
        </div>

        {/* Inquiry Card Form Container */}
        <div className="glass-card p-4 sm:p-10 rounded-2xl sm:rounded-3xl relative bg-white/95 shadow-xl">
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 text-left">
            
            {/* Split Grid for Name and Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              
              {/* Name Field */}
              <div className="space-y-1.5">
                <label htmlFor="name" className="text-xs font-black uppercase tracking-wider text-slate-700">
                  Full Name <span className="text-cyan-600">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. John Doe"
                  className={`w-full bg-white border ${
                    errors.name ? 'border-red-500/50 focus:border-red-500' : 'border-slate-200 focus:border-cyan-500 focus:bg-slate-50/10'
                  } rounded-xl px-3.5 py-2.5 sm:py-3 text-slate-900 text-sm outline-none transition-all font-semibold`}
                />
                {errors.name && (
                  <p className="text-[10px] font-bold text-red-500 flex items-center gap-1">
                    <ShieldAlert className="w-3.5 h-3.5" />
                    <span>{errors.name}</span>
                  </p>
                )}
              </div>

              {/* Phone Field */}
              <div className="space-y-1.5">
                <label htmlFor="phone" className="text-xs font-black uppercase tracking-wider text-slate-700">
                  Phone Number <span className="text-cyan-600">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="e.g. +974 33102976"
                  className={`w-full bg-white border ${
                    errors.phone ? 'border-red-500/50 focus:border-red-500' : 'border-slate-200 focus:border-cyan-500 focus:bg-slate-50/10'
                  } rounded-xl px-3.5 py-2.5 sm:py-3 text-slate-900 text-sm outline-none transition-all font-semibold`}
                />
                {errors.phone && (
                  <p className="text-[10px] font-bold text-red-500 flex items-center gap-1">
                    <ShieldAlert className="w-3.5 h-3.5" />
                    <span>{errors.phone}</span>
                  </p>
                )}
              </div>

            </div>

            {/* Split Grid for Address and Service Dropdown */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              
              {/* Address Field */}
              <div className="space-y-1.5">
                <label htmlFor="address" className="text-xs font-black uppercase tracking-wider text-slate-700">
                  Address / Location in Qatar <span className="text-cyan-600">*</span>
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="e.g. Madina Khalifa (S), Doha"
                  className={`w-full bg-white border ${
                    errors.address ? 'border-red-500/50 focus:border-red-500' : 'border-slate-200 focus:border-cyan-500 focus:bg-slate-50/10'
                  } rounded-xl px-3.5 py-2.5 sm:py-3 text-slate-900 text-sm outline-none transition-all font-semibold`}
                />
                {errors.address && (
                  <p className="text-[10px] font-bold text-red-500 flex items-center gap-1">
                    <ShieldAlert className="w-3.5 h-3.5" />
                    <span>{errors.address}</span>
                  </p>
                )}
              </div>

              {/* Service Required Dropdown */}
              <div className="space-y-1.5">
                <label htmlFor="service" className="text-xs font-black uppercase tracking-wider text-slate-700">
                  Service Required <span className="text-cyan-600">*</span>
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className={`w-full bg-white border ${
                    errors.service ? 'border-red-500/50 focus:border-red-500' : 'border-slate-200 focus:border-cyan-500 focus:bg-slate-50/10'
                  } rounded-xl px-3.5 py-2.5 sm:py-3 text-slate-900 text-sm outline-none transition-all cursor-pointer font-semibold`}
                >
                  <option value="" disabled>Select a Service</option>
                  {servicesList.map((service) => (
                    <option key={service} value={service} className="bg-white text-slate-900">
                      {service}
                    </option>
                  ))}
                </select>
                {errors.service && (
                  <p className="text-[10px] font-bold text-red-500 flex items-center gap-1">
                    <ShieldAlert className="w-3.5 h-3.5" />
                    <span>{errors.service}</span>
                  </p>
                )}
              </div>

            </div>

            {/* Representative select choice */}
            <div className="space-y-1.5">
              <label className="text-xs font-black uppercase tracking-wider text-slate-700 block mb-1">
                Select Representative Line
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                
                {/* Rep 1 */}
                <label className={`flex items-center gap-3 p-3 sm:p-4 rounded-xl border cursor-pointer transition-colors ${
                  formData.representative === '97433102976'
                    ? 'bg-cyan-50/70 border-cyan-500/50 text-cyan-600'
                    : 'bg-white border-slate-200 hover:border-slate-300 text-slate-600'
                }`}>
                  <input
                    type="radio"
                    name="representative"
                    value="97433102976"
                    checked={formData.representative === '97433102976'}
                    onChange={handleChange}
                    className="sr-only"
                  />
                  <div className={`w-4.5 h-4.5 rounded-full border flex items-center justify-center ${
                    formData.representative === '97433102976' ? 'border-cyan-500' : 'border-slate-300'
                  }`}>
                    {formData.representative === '97433102976' && <div className="w-2.5 h-2.5 rounded-full bg-cyan-500" />}
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="font-extrabold text-xs">Representative Line 1</span>
                    <span className="text-[10px] text-slate-400 font-bold">+974 3310 2976</span>
                  </div>
                </label>

                {/* Rep 2 */}
                <label className={`flex items-center gap-3 p-3 sm:p-4 rounded-xl border cursor-pointer transition-colors ${
                  formData.representative === '97455670822'
                    ? 'bg-cyan-50/70 border-cyan-500/50 text-cyan-600'
                    : 'bg-white border-slate-200 hover:border-slate-300 text-slate-600'
                }`}>
                  <input
                    type="radio"
                    name="representative"
                    value="97455670822"
                    checked={formData.representative === '97455670822'}
                    onChange={handleChange}
                    className="sr-only"
                  />
                  <div className={`w-4.5 h-4.5 rounded-full border flex items-center justify-center ${
                    formData.representative === '97455670822' ? 'border-cyan-500' : 'border-slate-300'
                  }`}>
                    {formData.representative === '97455670822' && <div className="w-2.5 h-2.5 rounded-full bg-cyan-500" />}
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="font-extrabold text-xs">Representative Line 2</span>
                    <span className="text-[10px] text-slate-400 font-bold">+974 5567 0822</span>
                  </div>
                </label>

              </div>
            </div>

            {/* Message Field */}
            <div className="space-y-1.5">
              <label htmlFor="message" className="text-xs font-black uppercase tracking-wider text-slate-700">
                Inquiry Message / Details (Optional)
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="e.g. Please describe your AC issues or specifications..."
                rows={3}
                className="w-full bg-white border border-slate-200 focus:border-cyan-500 rounded-xl px-3.5 py-2.5 sm:py-3 text-slate-900 text-sm outline-none transition-all resize-none font-semibold"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-cyan-600 to-cyan-500 hover:from-cyan-500 hover:to-cyan-400 text-white font-black py-3 sm:py-3.5 rounded-xl shadow-lg shadow-cyan-500/10 hover:shadow-cyan-500/25 transition-all duration-300 cursor-pointer text-sm"
              >
                <MessageSquare className="w-4 h-4 text-white fill-white" />
                <span>Submit Inquiry via WhatsApp</span>
                <Send className="w-3.5 h-3.5 text-white shrink-0 ml-0.5" />
              </button>
            </div>

          </form>
        </div>

      </div>
    </section>
  );
}
