import React, { useState } from 'react';
import { Page } from '../types';
import { Phone, Mail, Clock, ShieldAlert, MessageSquare, MapPin, Send, CheckCircle } from 'lucide-react';

interface ContactProps {
  onNavigate: (page: Page) => void;
}

export default function Contact({ onNavigate }: ContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    pest: 'General Enquiries',
    suburb: '',
    message: '',
    consent: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Enter a valid email address';
    }
    if (!formData.suburb.trim()) newErrors.suburb = 'Suburb is required';
    if (!formData.consent) newErrors.consent = 'You must accept data safety terms';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setSubmitted(true);
      setErrors({});
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const val = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;
    setFormData(prev => ({ ...prev, [name]: val }));
    if (errors[name]) {
      setErrors(prev => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
  };

  return (
    <div className="bg-white text-left">
      {/* Hero Header */}
      <section className="bg-[#101312] text-white py-16 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 h-48 w-48 bg-[#0B3D2E] opacity-25 rounded-full blur-3xl pointer-events-none"></div>
        <div className="relative z-10 mx-auto px-4 text-center space-y-4">
          <span className="text-[#C9A646] text-xs font-bold uppercase tracking-[0.2em] block mb-2">
            24/7 Operations Desk
          </span>
          <h1 className="font-display text-3xl md:text-5xl font-extrabold tracking-tight">
            Contact BugProctect Pro Gauteng
          </h1>
          <p className="text-sm text-gray-300 mx-auto leading-relaxed">
            Connect directly with SABS-registered marshals. We respond within 15 minutes on WhatsApp and phone lines.
          </p>
        </div>
      </section>

      {/* Main Grid Contact & Details */}
      <section className="py-20 bg-white">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Contact details, hours, map */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <h2 className="font-display text-2xl font-extrabold text-[#17211C]">
                Get In Touch Immediately
              </h2>
              <p className="text-sm text-gray-500 leading-relaxed">
                Whether you need urgent rodent ceiling exclusion, harvester termite assessments, or routine commercial HACCP audits, we have local dispatch units positioned across your suburb.
              </p>
            </div>

            {/* Structured details cards */}
            <div className="space-y-4">
              <div className="flex gap-4 p-4 border border-gray-100 rounded-2xl bg-[#F8F5EF]/50">
                <Phone className="h-6 w-6 text-[#C9A646] shrink-0" />
                <div>
                  <span className="text-xs text-gray-400 block font-bold uppercase tracking-wider">Direct Dispatch Phone</span>
                  <a href="tel:+27115550192" className="text-sm font-extrabold text-[#17211C] hover:underline">
                    +27 11 555 0192
                  </a>
                </div>
              </div>

              <div className="flex gap-4 p-4 border border-gray-100 rounded-2xl bg-[#F8F5EF]/50">
                <Mail className="h-6 w-6 text-[#C9A646] shrink-0" />
                <div>
                  <span className="text-xs text-gray-400 block font-bold uppercase tracking-wider">Email Support Desk</span>
                  <a href="mailto:support@bugproctectpro.co.za" className="text-sm font-extrabold text-[#17211C] hover:underline">
                    support@bugproctectpro.co.za
                  </a>
                </div>
              </div>

              <div className="flex gap-4 p-4 border border-gray-100 rounded-2xl bg-[#F8F5EF]/50">
                <Clock className="h-6 w-6 text-[#C9A646] shrink-0" />
                <div>
                  <span className="text-xs text-gray-400 block font-bold uppercase tracking-wider">Operations Hours</span>
                  <span className="text-sm font-bold text-[#17211C] block">Mon - Fri: 07:30 - 18:00</span>
                  <span className="text-sm font-bold text-[#17211C] block">Saturday: 08:00 - 14:00</span>
                  <span className="text-xs text-amber-600 block font-semibold mt-1">
                    * Emergency response: 24/7 on WhatsApp
                  </span>
                </div>
              </div>
            </div>

            {/* Google Maps embed placeholder */}
            <div className="rounded-2xl overflow-hidden border border-gray-200 h-80 md:h-96 relative bg-[#F8F5EF] flex items-center justify-center text-center p-6">
              <div className="space-y-2">
                <MapPin className="h-8 w-8 text-[#0B3D2E] mx-auto animate-bounce" />
                <span className="font-display text-sm font-extrabold text-gray-800 block">BugProctect Pro Gauteng Operations HQ</span>
                <p className="text-[11px] text-gray-500 mx-auto">
                  18 Sandton Drive, Sandhurst, Sandton, Johannesburg, 2196, South Africa.
                </p>
                <span className="text-[10px] text-gray-400 block italic">
                  * Live Google Map is embedded here.
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Contact form */}
          <div className="lg:col-span-7 min-h-[640px] bg-white rounded-2xl border border-gray-200 p-6 md:p-8 shadow-sm">
            {submitted ? (
              <div className="text-center py-12 space-y-6">
                <div className="h-16 w-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto animate-bounce">
                  <CheckCircle className="h-10 w-10" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-display text-xl font-extrabold text-gray-900">
                    Your Message has Been Logged
                  </h3>
                  <p className="text-xs text-gray-500 mx-auto">
                    Thank you, <span className="font-bold text-gray-800">{formData.name}</span>. Our Gauteng help desk has received your {formData.pest.toLowerCase()} enquiry andSuburb details.
                  </p>
                  <p className="text-xs text-gray-500 bg-[#F8F5EF] p-4 rounded-xl mx-auto leading-relaxed mt-4 font-medium">
                    🎯 A certified service manager will call you back on <span className="font-bold text-[#17211C]">{formData.phone}</span> within 15 minutes.
                  </p>
                </div>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: '',
                      phone: '',
                      email: '',
                      pest: 'General Enquiries',
                      suburb: '',
                      message: '',
                      consent: false,
                    });
                  }}
                  className="rounded-xl border border-gray-200 px-5 py-2 text-xs font-semibold hover:bg-gray-50"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="font-display text-lg font-extrabold text-[#17211C]">
                  Send Us a Direct Message
                </h3>
                <p className="text-xs text-gray-400 mt-1">
                  Submit your details below and we’ll review pricing for your specific suburb perimeters.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">
                      Your Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. Sipho Zuma"
                      className="w-full rounded-xl bg-gray-50 border border-gray-200 p-3 text-xs focus:outline-none focus:border-[#0B3D2E]"
                    />
                    {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">
                      Primary Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="e.g. +27 82 123 4567"
                      className="w-full rounded-xl bg-gray-50 border border-gray-200 p-3 text-xs focus:outline-none focus:border-[#0B3D2E]"
                    />
                    {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="e.g. client@domain.co.za"
                      className="w-full rounded-xl bg-gray-50 border border-gray-200 p-3 text-xs focus:outline-none focus:border-[#0B3D2E]"
                    />
                    {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">
                      Specific Suburb / Area
                    </label>
                    <input
                      type="text"
                      name="suburb"
                      value={formData.suburb}
                      onChange={handleInputChange}
                      placeholder="e.g. Bryanston, Sandton"
                      className="w-full rounded-xl bg-gray-50 border border-gray-200 p-3 text-xs focus:outline-none focus:border-[#0B3D2E]"
                    />
                    {errors.suburb && <p className="text-xs text-red-500 mt-1">{errors.suburb}</p>}
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">
                      Primary Pest Problem
                    </label>
                    <select
                      name="pest"
                      value={formData.pest}
                      onChange={handleInputChange}
                      className="w-full rounded-xl bg-gray-50 border border-gray-200 p-3 text-xs focus:outline-none focus:border-[#0B3D2E]"
                    >
                      <option value="General Enquiries">General Enquiries / Multiple</option>
                      <option value="Cockroaches">Cockroaches</option>
                      <option value="Rats & Mice">Rats or mice</option>
                      <option value="Termites">Soil Termites</option>
                      <option value="Bed Bugs">Bed Bugs</option>
                      <option value="Ants">Paving Ants</option>
                      <option value="Fleas">Fleas or ticks</option>
                    </select>
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">
                      How can we help? (Details)
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      placeholder="Please mention severity, estimated building size, or pet safety concerns..."
                      className="w-full rounded-xl bg-gray-50 border border-gray-200 p-3 text-xs focus:outline-none focus:border-[#0B3D2E]"
                    />
                  </div>
                </div>

                <div className="pt-2">
                  <label className="flex items-start gap-2 cursor-pointer text-[11px] text-gray-500">
                    <input
                      type="checkbox"
                      name="consent"
                      checked={formData.consent}
                      onChange={handleInputChange}
                      className="mt-0.5 rounded border-gray-300 text-[#0B3D2E] focus:ring-[#0B3D2E]"
                    />
                    <span>
                      I consent to sharing my details with BugProctect Pro according to POPI Act guidelines. We strictly keep your private data safe.
                    </span>
                  </label>
                  {errors.consent && <p className="text-xs text-red-500 mt-1">{errors.consent}</p>}
                </div>

                <button
                  type="submit"
                  className="w-full flex justify-center items-center gap-1.5 rounded-xl bg-[#0B3D2E] text-white py-3.5 text-xs font-bold hover:bg-[#072E22] transition-all shadow-md mt-4"
                >
                  <Send className="h-4 w-4" /> Submit Enquiry &rarr;
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
