import React, { useState } from 'react';
import { Page } from '../types';
import { Calendar, ShieldCheck, CheckCircle, Clock, Upload, ArrowRight, MessageSquare, Phone } from 'lucide-react';

interface BookInspectionProps {
  onNavigate: (page: Page) => void;
}

export default function BookInspection({ onNavigate }: BookInspectionProps) {
  const [activeTab, setActiveTab] = useState<'quote' | 'inspection'>('quote');
  const [submitted, setSubmitted] = useState(false);
  const [fileName, setFileName] = useState('');

  // Form states
  const [quoteForm, setQuoteForm] = useState({
    name: '',
    phone: '',
    whatsapp: '',
    email: '',
    suburb: '',
    propertyType: 'Residential',
    pest: 'Cockroaches',
    urgency: 'Standard',
    preferredDate: '',
    preferredTime: '',
    message: '',
    consent: false,
  });

  const [bookingForm, setBookingForm] = useState({
    name: '',
    phone: '',
    email: '',
    serviceType: 'Soil Termite Treatment',
    propertyType: 'Private House',
    address: '',
    preferredDate: '',
    preferredTime: '',
    notes: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  const handleQuoteSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const err: Record<string, string> = {};
    if (!quoteForm.name.trim()) err.name = 'Full name is required';
    if (!quoteForm.phone.trim()) err.phone = 'Phone number is required';
    if (!quoteForm.email.trim()) {
      err.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(quoteForm.email)) {
      err.email = 'Please enter a valid email address';
    }
    if (!quoteForm.suburb.trim()) err.suburb = 'Suburb/area is required';
    if (!quoteForm.consent) err.consent = 'You must consent to POPI data security';

    if (Object.keys(err).length > 0) {
      setErrors(err);
    } else {
      setSubmitted(true);
      setErrors({});
    }
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const err: Record<string, string> = {};
    if (!bookingForm.name.trim()) err.name = 'Full name is required';
    if (!bookingForm.phone.trim()) err.phone = 'Phone number is required';
    if (!bookingForm.email.trim()) {
      err.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(bookingForm.email)) {
      err.email = 'Please enter a valid email address';
    }
    if (!bookingForm.address.trim()) err.address = 'Full address/suburb is required';

    if (Object.keys(err).length > 0) {
      setErrors(err);
    } else {
      setSubmitted(true);
      setErrors({});
    }
  };

  return (
    <div className="bg-white text-left">
      {/* Hero Header */}
      <section className="bg-[#101312] text-white py-16 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 h-48 w-48 bg-[#0B3D2E] opacity-25 rounded-full blur-3xl pointer-events-none"></div>
        <div className="relative z-10 mx-auto px-4 text-center space-y-4">
          <span className="text-[#C9A646] text-xs font-bold uppercase tracking-[0.2em] block mb-2">
            Pest Assessment Desk
          </span>
          <h1 className="font-display text-3xl md:text-5xl font-extrabold tracking-tight">
            Book Assessment & Free Quote
          </h1>
          <p className="text-sm text-gray-300 mx-auto leading-relaxed">
            Submit your specific property layouts and pest category. Our Gauteng-allocated service managers schedule inspections in real-time.
          </p>
        </div>
      </section>

      {/* Main Forms container */}
      <section className="py-20 bg-white">
        <div className="mx-auto px-4">
          {submitted ? (
            /* Submission Success Alert */
            <div className="bg-white rounded-3xl border border-gray-200 p-8 shadow-md text-center space-y-6">
              <div className="h-16 w-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto animate-bounce">
                <CheckCircle className="h-10 w-10" />
              </div>
              <div className="space-y-2">
                <h3 className="font-display text-xl md:text-2xl font-extrabold text-gray-900">
                  Request Logged Safely
                </h3>
                <p className="text-sm text-gray-600 mx-auto">
                  Thank you. Your request has been received. Our team will review your details and contact you shortly to confirm the next step.
                </p>
                <p className="text-xs text-gray-500 bg-gray-50 border border-gray-100 rounded-xl p-4 mx-auto leading-relaxed mt-4 font-medium">
                  🎯 <span className="font-bold text-[#0B3D2E]">What happens next:</span> A local SANS-certified marshal will call you within 15 minutes to confirm access times and provide custom cost estimations.
                </p>
              </div>
              <div className="pt-4 flex flex-col sm:flex-row justify-center gap-3">
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFileName('');
                    setErrors({});
                  }}
                  className="rounded-xl border border-gray-200 px-6 py-2.5 text-xs font-bold hover:bg-gray-50"
                >
                  Start New Request
                </button>
                <a
                  href="https://wa.me/27115550192?text=Hi%20BugProctect%20Pro,%20I%20just%20submitted%20my%20pest%20assessment%20request%20form%20online."
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl bg-emerald-600 text-white hover:bg-emerald-700 px-6 py-2.5 text-xs font-bold flex items-center justify-center gap-1.5"
                >
                  <MessageSquare className="h-4 w-4" /> Message WhatsApp Desk
                </a>
              </div>
            </div>
          ) : (
            /* Tab switcher and forms */
            <div className="space-y-8">
              <div className="flex border-b border-gray-200 p-1 bg-gray-100 rounded-xl mx-auto">
                <button
                  onClick={() => {
                    setActiveTab('quote');
                    setErrors({});
                  }}
                  className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${
                    activeTab === 'quote' ? 'bg-[#0B3D2E] text-white shadow-sm' : 'text-gray-500'
                  }`}
                >
                  Request a Free Quote
                </button>
                <button
                  onClick={() => {
                    setActiveTab('inspection');
                    setErrors({});
                  }}
                  className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${
                    activeTab === 'inspection' ? 'bg-[#0B3D2E] text-white shadow-sm' : 'text-gray-500'
                  }`}
                >
                  Book Assessment/Inspection
                </button>
              </div>

              {activeTab === 'quote' ? (
                /* 1. Quote Form */
                <form onSubmit={handleQuoteSubmit} className="space-y-5 bg-white border border-gray-200 p-6 md:p-8 rounded-2xl shadow-sm">
                  <h3 className="font-display text-lg font-extrabold text-[#17211C]">
                    Submit Detailed Quote Parameters
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">
                        Full Name
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Sipho Zuma"
                        value={quoteForm.name}
                        onChange={(e) => setQuoteForm({ ...quoteForm, name: e.target.value })}
                        className="w-full rounded-xl bg-gray-50 border border-gray-200 p-3 text-xs focus:outline-none focus:border-[#0B3D2E]"
                      />
                      {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        placeholder="e.g. +27 82 123 4567"
                        value={quoteForm.phone}
                        onChange={(e) => setQuoteForm({ ...quoteForm, phone: e.target.value })}
                        className="w-full rounded-xl bg-gray-50 border border-gray-200 p-3 text-xs focus:outline-none focus:border-[#0B3D2E]"
                      />
                      {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">
                        WhatsApp Number (Optional)
                      </label>
                      <input
                        type="tel"
                        placeholder="e.g. +27 82 123 4567"
                        value={quoteForm.whatsapp}
                        onChange={(e) => setQuoteForm({ ...quoteForm, whatsapp: e.target.value })}
                        className="w-full rounded-xl bg-gray-50 border border-gray-200 p-3 text-xs focus:outline-none focus:border-[#0B3D2E]"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="e.g. client@domain.co.za"
                        value={quoteForm.email}
                        onChange={(e) => setQuoteForm({ ...quoteForm, email: e.target.value })}
                        className="w-full rounded-xl bg-gray-50 border border-gray-200 p-3 text-xs focus:outline-none focus:border-[#0B3D2E]"
                      />
                      {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">
                        Suburb / Area
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Centurion Central, Pretoria"
                        value={quoteForm.suburb}
                        onChange={(e) => setQuoteForm({ ...quoteForm, suburb: e.target.value })}
                        className="w-full rounded-xl bg-gray-50 border border-gray-200 p-3 text-xs focus:outline-none focus:border-[#0B3D2E]"
                      />
                      {errors.suburb && <p className="text-xs text-red-500 mt-1">{errors.suburb}</p>}
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">
                        Property Type
                      </label>
                      <select
                        value={quoteForm.propertyType}
                        onChange={(e) => setQuoteForm({ ...quoteForm, propertyType: e.target.value })}
                        className="w-full rounded-xl bg-gray-50 border border-gray-200 p-3 text-xs focus:outline-none focus:border-[#0B3D2E]"
                      >
                        <option value="Residential">Residential Home / Villa</option>
                        <option value="Apartment">Apartment Complex Unit</option>
                        <option value="Commercial Kitchen">Restaurant / Commercial Kitchen</option>
                        <option value="Office">Office Facility</option>
                        <option value="Warehouse">Warehouse / Logistics</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">
                        Active Pest Problem
                      </label>
                      <select
                        value={quoteForm.pest}
                        onChange={(e) => setQuoteForm({ ...quoteForm, pest: e.target.value })}
                        className="w-full rounded-xl bg-gray-50 border border-gray-200 p-3 text-xs focus:outline-none focus:border-[#0B3D2E]"
                      >
                        <option value="Cockroaches">Cockroaches</option>
                        <option value="Rats & Mice">Rats or Mice</option>
                        <option value="Soil Termites">Soil Termites</option>
                        <option value="Bed Bugs">Bed Bugs</option>
                        <option value="Paving Ants">Paving Ants</option>
                        <option value="Fleas">Fleas & Ticks</option>
                        <option value="Not Sure">Other / Not Sure</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">
                        Urgency Level
                      </label>
                      <select
                        value={quoteForm.urgency}
                        onChange={(e) => setQuoteForm({ ...quoteForm, urgency: e.target.value })}
                        className="w-full rounded-xl bg-gray-50 border border-gray-200 p-3 text-xs focus:outline-none focus:border-[#0B3D2E]"
                      >
                        <option value="Emergency (Today)">Emergency (I need help today)</option>
                        <option value="This Week">Standard (This week scheduler)</option>
                        <option value="Quote Comparison">Budget (I am comparing quotes)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">
                        Preferred Date
                      </label>
                      <input
                        type="date"
                        value={quoteForm.preferredDate}
                        onChange={(e) => setQuoteForm({ ...quoteForm, preferredDate: e.target.value })}
                        className="w-full rounded-xl bg-gray-50 border border-gray-200 p-3 text-xs focus:outline-none focus:border-[#0B3D2E]"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">
                        Preferred Time
                      </label>
                      <input
                        type="time"
                        value={quoteForm.preferredTime}
                        onChange={(e) => setQuoteForm({ ...quoteForm, preferredTime: e.target.value })}
                        className="w-full rounded-xl bg-gray-50 border border-gray-200 p-3 text-xs focus:outline-none focus:border-[#0B3D2E]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">
                      Enquiry / Context Notes
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Please details building size, specific sight spots, or pet safety specifications..."
                      value={quoteForm.message}
                      onChange={(e) => setQuoteForm({ ...quoteForm, message: e.target.value })}
                      className="w-full rounded-xl bg-gray-50 border border-gray-200 p-3 text-xs focus:outline-none focus:border-[#0B3D2E]"
                    />
                  </div>

                  {/* Upload Image Option */}
                  <div>
                    <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">
                      Upload Infestation Image (Optional)
                    </label>
                    <div className="border-2 border-dashed border-gray-200 rounded-xl p-4 text-center cursor-pointer hover:bg-gray-50 transition-colors relative">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                        className="absolute inset-0 opacity-0 cursor-pointer"
                      />
                      <Upload className="h-6 w-6 text-gray-400 mx-auto mb-2" />
                      <span className="text-xs text-gray-500 font-medium block">
                        {fileName ? `Selected file: ${fileName}` : 'Click or Drag & Drop image files of pests/damage'}
                      </span>
                    </div>
                  </div>

                  <div className="pt-2">
                    <label className="flex items-start gap-2.5 cursor-pointer text-xs text-gray-500">
                      <input
                        type="checkbox"
                        checked={quoteForm.consent}
                        onChange={(e) => setQuoteForm({ ...quoteForm, consent: e.target.checked })}
                        className="mt-0.5 rounded border-gray-300 text-[#0B3D2E] focus:ring-[#0B3D2E]"
                      />
                      <span>
                        I consent to sharing my details according to POPI safety standards. We strictly protect your private contact fields.
                      </span>
                    </label>
                    {errors.consent && <p className="text-xs text-red-500 mt-1">{errors.consent}</p>}
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-xl bg-[#0B3D2E] hover:bg-[#072E22] text-white py-3.5 text-xs font-bold transition-all shadow-md flex items-center justify-center gap-1.5"
                  >
                    Submit Free Quote Request &rarr;
                  </button>
                </form>
              ) : (
                /* 2. Inspection Booking Form */
                <form onSubmit={handleBookingSubmit} className="space-y-5 bg-white border border-gray-200 p-6 md:p-8 rounded-2xl shadow-sm">
                  <h3 className="font-display text-lg font-extrabold text-[#17211C]">
                    Book SANS Structural Inspection
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">
                        Contact Name
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Sipho Zuma"
                        value={bookingForm.name}
                        onChange={(e) => setBookingForm({ ...bookingForm, name: e.target.value })}
                        className="w-full rounded-xl bg-gray-50 border border-gray-200 p-3 text-xs focus:outline-none focus:border-[#0B3D2E]"
                      />
                      {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        placeholder="e.g. +27 82 123 4567"
                        value={bookingForm.phone}
                        onChange={(e) => setBookingForm({ ...bookingForm, phone: e.target.value })}
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
                        placeholder="e.g. client@domain.co.za"
                        value={bookingForm.email}
                        onChange={(e) => setBookingForm({ ...bookingForm, email: e.target.value })}
                        className="w-full rounded-xl bg-gray-50 border border-gray-200 p-3 text-xs focus:outline-none focus:border-[#0B3D2E]"
                      />
                      {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">
                        Required Service Type
                      </label>
                      <select
                        value={bookingForm.serviceType}
                        onChange={(e) => setBookingForm({ ...bookingForm, serviceType: e.target.value })}
                        className="w-full rounded-xl bg-gray-50 border border-gray-200 p-3 text-xs focus:outline-none focus:border-[#0B3D2E]"
                      >
                        <option value="Cockroach Control">Cockroach Eradication</option>
                        <option value="Rodent Exclusion">Rodent Exclusion & Baiting</option>
                        <option value="Soil Termite Treatment">Soil Termite Soil Barrier</option>
                        <option value="Bed Bug Treatment">Bed Bug Thermal Deep Spray</option>
                        <option value="Ant Baiting">Suburban Ant Nest Baiting</option>
                        <option value="Residential Plan">Residential Year Protection Plan</option>
                        <option value="Commercial Compliance">Commercial Hygiene Compliance (HACCP)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">
                        Property Type
                      </label>
                      <select
                        value={bookingForm.propertyType}
                        onChange={(e) => setBookingForm({ ...bookingForm, propertyType: e.target.value })}
                        className="w-full rounded-xl bg-gray-50 border border-gray-200 p-3 text-xs focus:outline-none focus:border-[#0B3D2E]"
                      >
                        <option value="Private House">Private House / Villa</option>
                        <option value="Apartment Unit">Apartment Complex Unit</option>
                        <option value="Restaurant">Restaurant / Hotel</option>
                        <option value="Office Space">Corporate Office Space</option>
                        <option value="Warehouse">Logistics Warehouse</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">
                        Full Address / Suburb
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. 15 Garsfontein Rd, Waterkloof, Pretoria"
                        value={bookingForm.address}
                        onChange={(e) => setBookingForm({ ...bookingForm, address: e.target.value })}
                        className="w-full rounded-xl bg-gray-50 border border-gray-200 p-3 text-xs focus:outline-none focus:border-[#0B3D2E]"
                      />
                      {errors.address && <p className="text-xs text-red-500 mt-1">{errors.address}</p>}
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">
                        Preferred Appointment Date
                      </label>
                      <input
                        type="date"
                        value={bookingForm.preferredDate}
                        onChange={(e) => setBookingForm({ ...bookingForm, preferredDate: e.target.value })}
                        className="w-full rounded-xl bg-gray-50 border border-gray-200 p-3 text-xs focus:outline-none focus:border-[#0B3D2E]"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">
                        Preferred Appointment Time
                      </label>
                      <input
                        type="time"
                        value={bookingForm.preferredTime}
                        onChange={(e) => setBookingForm({ ...bookingForm, preferredTime: e.target.value })}
                        className="w-full rounded-xl bg-gray-50 border border-gray-200 p-3 text-xs focus:outline-none focus:border-[#0B3D2E]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">
                      Notes or Special Instruction (e.g. key locations)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Explain lock access, tenant availability, or domestic animal considerations..."
                      value={bookingForm.notes}
                      onChange={(e) => setBookingForm({ ...bookingForm, notes: e.target.value })}
                      className="w-full rounded-xl bg-gray-50 border border-gray-200 p-3 text-xs focus:outline-none focus:border-[#0B3D2E]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-xl bg-[#0B3D2E] hover:bg-[#072E22] text-white py-3.5 text-xs font-bold transition-all shadow-md flex items-center justify-center gap-1.5"
                  >
                    <Calendar className="h-4 w-4" /> Book Assessment Request &rarr;
                  </button>
                </form>
              )}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
