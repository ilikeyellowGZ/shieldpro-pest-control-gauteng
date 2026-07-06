import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Bug, Home, MapPin, AlertTriangle, User, CheckCircle, ArrowRight, ArrowLeft, MessageSquare, Phone, Send } from 'lucide-react';

interface OnboardingFlowProps {
  onComplete?: (leadData: any) => void;
}

const HEYYWEBB_URL = 'https://heyywebb.com';

export default function OnboardingFlow({ onComplete }: OnboardingFlowProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    pest: '',
    propertyType: '',
    location: '',
    urgency: '',
    name: '',
    phone: '',
    whatsapp: '',
    email: '',
    suburb: '',
    consent: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const pests = [
    { label: 'Cockroaches', icon: 'Bug' },
    { label: 'Rats or Mice', icon: 'Rat' },
    { label: 'Termites', icon: 'ShieldAlert' },
    { label: 'Bed Bugs', icon: 'Sparkles' },
    { label: 'Ants', icon: 'Activity' },
    { label: 'Fleas & Ticks', icon: 'Scissors' },
    { label: 'Other / Not Sure', icon: 'HelpCircle' },
  ];

  const properties = [
    { label: 'Private House', desc: 'Family home or villa' },
    { label: 'Apartment / Flat', desc: 'High-density sectional title' },
    { label: 'Restaurant / Café', desc: 'Food prep hygiene compliance' },
    { label: 'Office Space', desc: 'Corporate / shared floor' },
    { label: 'Warehouse / Logistics', desc: 'Industrial stock storage' },
    { label: 'School / Childcare', desc: 'Extra-safe treatments' },
    { label: 'Other Business', desc: 'Retail or commercial shop' },
  ];

  const regions = [
    'Johannesburg Central',
    'Sandton & North JHB',
    'Pretoria & Centurion',
    'Midrand & Kyalami',
    'East Rand (Ekurhuleni)',
    'West Rand / Roodepoort',
    'Soweto & South JHB',
  ];

  const urgencies = [
    { label: 'I need help today', desc: 'Emergency same-day team dispatch', color: 'text-red-500 bg-red-50 border-red-200' },
    { label: 'This week', desc: 'Standard professional scheduling', color: 'text-amber-500 bg-amber-50 border-amber-200' },
    { label: 'I am comparing quotes', desc: 'Accurate cost breakdown assessment', color: 'text-blue-500 bg-blue-50 border-blue-200' },
    { label: 'Routine maintenance', desc: 'Ongoing commercial preventative audits', color: 'text-emerald-500 bg-emerald-50 border-emerald-200' },
  ];

  const handleSelect = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Auto advance for initial simple select steps
    if (step < 4) {
      setTimeout(() => setStep(prev => prev + 1), 250);
    }
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    if (errors[name]) {
      setErrors(prev => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
  };

  const validateStep5 = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Full name is required';
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[0-9\s\+\-\(\)]{9,15}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.suburb.trim()) newErrors.suburb = 'Suburb/area is required';
    if (!formData.consent) newErrors.consent = 'You must consent to our data safety terms';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (step === 5) {
      if (validateStep5()) {
        if (onComplete) onComplete(formData);
        window.location.assign(HEYYWEBB_URL);
      }
    } else {
      setStep(prev => prev + 1);
    }
  };

  const handleBack = () => {
    setStep(prev => prev - 1);
  };

  const resetForm = () => {
    setFormData({
      pest: '',
      propertyType: '',
      location: '',
      urgency: '',
      name: '',
      phone: '',
      whatsapp: '',
      email: '',
      suburb: '',
      consent: false,
    });
    setStep(1);
    setErrors({});
  };

  return (
    <div className="w-full bg-[#101312] rounded-3xl border border-[#0B3D2E]/20 p-6 md:p-10 text-white shadow-2xl relative overflow-hidden">
      {/* Absolute Ambient Glow */}
      <div className="absolute top-0 right-0 h-48 w-48 bg-[#0B3D2E] opacity-20 rounded-full blur-3xl pointer-events-none"></div>

      {/* Progress header */}
      {step < 6 && (
        <div className="mb-8">
          <div className="flex justify-between items-center mb-3">
            <span className="text-xs uppercase tracking-wider font-semibold text-[#C9A646]">
              Step {step} of 5 • Guided Assessment
            </span>
            <span className="text-xs text-gray-400 font-medium">
              {Math.round(((step - 1) / 5) * 100)}% Complete
            </span>
          </div>
          <div className="w-full bg-gray-800 h-1.5 rounded-full overflow-hidden">
            <div
              className="bg-[#C9A646] h-full transition-all duration-350"
              style={{ width: `${(step / 5) * 100}%` }}
            ></div>
          </div>
        </div>
      )}

      {/* Wizard Content */}
      <div className="min-h-[420px]">
        {step === 1 && (
          <div className="space-y-6">
            <div>
              <h3 className="font-display text-xl md:text-2xl font-extrabold tracking-tight text-white flex items-center gap-2">
                <Bug className="h-6 w-6 text-[#C9A646]" /> What pest are you dealing with?
              </h3>
              <p className="text-xs text-gray-400 mt-1">
                Select your primary concern. Don’t worry if you are unsure, we will verify during inspection.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {pests.map((p) => (
                <button
                  key={p.label}
                  onClick={() => handleSelect('pest', p.label)}
                  className={`p-4 rounded-xl text-left border transition-all ${
                    formData.pest === p.label
                      ? 'bg-[#0B3D2E] border-[#C9A646] text-white shadow-md'
                      : 'bg-white/5 border-white/10 text-gray-300 hover:bg-white/10 hover:border-white/20'
                  }`}
                >
                  <span className="text-sm font-semibold">{p.label}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6">
            <div>
              <h3 className="font-display text-xl md:text-2xl font-extrabold tracking-tight text-white flex items-center gap-2">
                <Home className="h-6 w-6 text-[#C9A646]" /> What type of property is it?
              </h3>
              <p className="text-xs text-gray-400 mt-1">
                We adjust chemical concentrations and SANS compliance workflows depending on space category.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {properties.map((p) => (
                <button
                  key={p.label}
                  onClick={() => handleSelect('propertyType', p.label)}
                  className={`p-4 rounded-xl text-left border transition-all ${
                    formData.propertyType === p.label
                      ? 'bg-[#0B3D2E] border-[#C9A646] text-white shadow-md'
                      : 'bg-white/5 border-white/10 text-gray-300 hover:bg-white/10 hover:border-white/20'
                  }`}
                >
                  <span className="text-sm font-semibold block">{p.label}</span>
                  <span className="text-[11px] text-gray-400 block mt-0.5">{p.desc}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-6">
            <div>
              <h3 className="font-display text-xl md:text-2xl font-extrabold tracking-tight text-white flex items-center gap-2">
                <MapPin className="h-6 w-6 text-[#C9A646]" /> Where is the property located?
              </h3>
              <p className="text-xs text-gray-400 mt-1">
                Select your general Gauteng region so we can check active technician routes.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {regions.map((r) => (
                <button
                  key={r}
                  onClick={() => handleSelect('location', r)}
                  className={`p-4 rounded-xl text-left border transition-all ${
                    formData.location === r
                      ? 'bg-[#0B3D2E] border-[#C9A646] text-white shadow-md'
                      : 'bg-white/5 border-white/10 text-gray-300 hover:bg-white/10 hover:border-white/20'
                  }`}
                >
                  <span className="text-sm font-semibold">{r}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="space-y-6">
            <div>
              <h3 className="font-display text-xl md:text-2xl font-extrabold tracking-tight text-white flex items-center gap-2">
                <AlertTriangle className="h-6 w-6 text-[#C9A646]" /> How urgent is the threat?
              </h3>
              <p className="text-xs text-gray-400 mt-1">
                This triggers our same-day fast-response priority routing mechanism.
              </p>
            </div>
            <div className="space-y-3 pt-2">
              {urgencies.map((u) => (
                <button
                  key={u.label}
                  onClick={() => handleSelect('urgency', u.label)}
                  className={`w-full p-4 rounded-xl text-left border transition-all flex justify-between items-center ${
                    formData.urgency === u.label
                      ? 'bg-[#0B3D2E] border-[#C9A646] text-white'
                      : 'bg-white/5 border-white/10 text-gray-300 hover:bg-white/10'
                  }`}
                >
                  <div>
                    <span className="text-sm font-semibold block">{u.label}</span>
                    <span className="text-xs text-gray-400 block mt-0.5">{u.desc}</span>
                  </div>
                  {formData.urgency === u.label && (
                    <span className="h-2 w-2 rounded-full bg-[#C9A646] animate-pulse"></span>
                  )}
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 5 && (
          <div className="space-y-5">
            <div>
              <h3 className="font-display text-xl md:text-2xl font-extrabold tracking-tight text-white flex items-center gap-2">
                <User className="h-6 w-6 text-[#C9A646]" /> Contact & Area Specifics
              </h3>
              <p className="text-xs text-gray-400 mt-1">
                Enter your details below. Your data is SANS-compliant and strictly kept secure.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleTextChange}
                  placeholder="e.g. Sipho Zuma"
                  className="w-full rounded-xl bg-white/5 border border-white/10 p-3 text-sm focus:border-[#C9A646] focus:outline-none focus:ring-1 focus:ring-[#C9A646]"
                />
                {errors.name && <p className="text-xs text-red-400 mt-1">{errors.name}</p>}
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">
                  Primary Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleTextChange}
                  placeholder="e.g. +27 82 123 4567"
                  className="w-full rounded-xl bg-white/5 border border-white/10 p-3 text-sm focus:border-[#C9A646] focus:outline-none focus:ring-1 focus:ring-[#C9A646]"
                />
                {errors.phone && <p className="text-xs text-red-400 mt-1">{errors.phone}</p>}
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">
                  WhatsApp Number (Optional)
                </label>
                <input
                  type="tel"
                  name="whatsapp"
                  value={formData.whatsapp}
                  onChange={handleTextChange}
                  placeholder="e.g. +27 82 123 4567"
                  className="w-full rounded-xl bg-white/5 border border-white/10 p-3 text-sm focus:border-[#C9A646] focus:outline-none focus:ring-1 focus:ring-[#C9A646]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleTextChange}
                  placeholder="e.g. client@domain.co.za"
                  className="w-full rounded-xl bg-white/5 border border-white/10 p-3 text-sm focus:border-[#C9A646] focus:outline-none focus:ring-1 focus:ring-[#C9A646]"
                />
                {errors.email && <p className="text-xs text-red-400 mt-1">{errors.email}</p>}
              </div>

              <div className="md:col-span-2">
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">
                  Specific Suburb / Street Address
                </label>
                <input
                  type="text"
                  name="suburb"
                  value={formData.suburb}
                  onChange={handleTextChange}
                  placeholder="e.g. Lonehill, Sandton"
                  className="w-full rounded-xl bg-white/5 border border-white/10 p-3 text-sm focus:border-[#C9A646] focus:outline-none"
                />
                {errors.suburb && <p className="text-xs text-red-400 mt-1">{errors.suburb}</p>}
              </div>
            </div>

            <div className="pt-2">
              <label className="flex items-start gap-2.5 cursor-pointer text-xs text-gray-400">
                <input
                  type="checkbox"
                  name="consent"
                  checked={formData.consent}
                  onChange={handleTextChange}
                  className="mt-1 rounded border-gray-600 bg-gray-800 text-[#0B3D2E] focus:ring-[#0B3D2E]"
                />
                <span>
                  I consent to sharing my details with BugProctect Pro according to the POPI Act. We never sell your contact details to third parties.
                </span>
              </label>
              {errors.consent && <p className="text-xs text-red-400 mt-1">{errors.consent}</p>}
            </div>
          </div>
        )}

        {step === 6 && (
          <div className="text-center py-8 space-y-6 flex flex-col items-center justify-center min-h-[380px]">
            <div className="p-4 bg-emerald-500/10 text-emerald-400 rounded-full animate-bounce">
              <CheckCircle className="h-16 w-16" />
            </div>
            <div className="space-y-2">
              <h3 className="font-display text-2xl font-extrabold text-white">
                Assessed & Received Successfully
              </h3>
              <p className="text-sm text-gray-300 mx-auto">
                Thank you, <span className="font-bold text-white">{formData.name}</span>. Your {formData.pest.toLowerCase()} assessment request for your {formData.propertyType.toLowerCase()} in {formData.suburb} has been securely logged.
              </p>
              <p className="text-xs text-gray-400 bg-white/5 border border-white/5 rounded-xl p-4 mx-auto mt-4 leading-relaxed">
                <span className="font-bold text-[#C9A646] block mb-1">🎯 What happens next:</span>
                Our nearest Gauteng-allocated technician is reviewing your priority. We will contact you on <span className="font-bold text-white">{formData.phone}</span> or via WhatsApp within 15 minutes to confirm access, pricing, and exact dispatch hour.
              </p>
            </div>
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button
                onClick={resetForm}
                className="rounded-xl border border-white/10 px-6 py-2.5 text-xs font-semibold hover:bg-white/10"
              >
                Start New Assessment
              </button>
              <a
                href={`https://wa.me/27115550192?text=Hello%20BugProctect%20Pro,%20my%20name%20is%20${encodeURIComponent(formData.name)}.%20I%20just%20submitted%20the%20onboarding%20form%20for%20${encodeURIComponent(formData.pest)}%20in%20${encodeURIComponent(formData.suburb)}.`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 px-6 py-2.5 text-xs font-bold text-white"
              >
                <MessageSquare className="h-4 w-4" /> Message WhatsApp Desk
              </a>
            </div>
          </div>
        )}
      </div>

      {/* Control Buttons */}
      {step < 6 && (
        <div className="mt-8 pt-6 border-t border-white/5 flex justify-between">
          {step > 1 ? (
            <button
              onClick={handleBack}
              className="flex items-center gap-1 text-sm font-semibold text-gray-400 hover:text-white transition-colors"
            >
              <ArrowLeft className="h-4 w-4" /> Back
            </button>
          ) : (
            <div></div>
          )}

          {formData[step === 1 ? 'pest' : step === 2 ? 'propertyType' : step === 3 ? 'location' : step === 4 ? 'urgency' : 'name'] ? (
            <button
              onClick={handleNext}
              className="flex items-center gap-1.5 rounded-xl bg-[#0B3D2E] hover:bg-[#0E4F3C] px-6 py-3 text-xs font-bold text-white border border-[#C9A646]/20 transition-all"
            >
              {step === 5 ? 'Submit My Request' : 'Continue'} <ArrowRight className="h-4 w-4 text-[#C9A646]" />
            </button>
          ) : (
            <button
              disabled
              className="opacity-45 cursor-not-allowed flex items-center gap-1.5 rounded-xl bg-white/5 px-6 py-3 text-xs font-bold text-gray-500 border border-white/5"
            >
              {step === 5 ? 'Complete Fields' : 'Select Option'} <ArrowRight className="h-4 w-4" />
            </button>
          )}
        </div>
      )}
    </div>
  );
}
