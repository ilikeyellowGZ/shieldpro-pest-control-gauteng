import React from 'react';
import { Page } from '../types';
import { SERVICE_ITEMS, PEST_DATABASE } from '../data/pestData';
import { ShieldCheck, CheckCircle, Clock, AlertTriangle, HelpCircle, Phone, MessageSquare, ChevronRight } from 'lucide-react';

interface ServiceDetailProps {
  pageId: Page;
  onNavigate: (page: Page) => void;
}

export default function ServiceDetail({ pageId, onNavigate }: ServiceDetailProps) {
  // Map pageId to our SERVICE_ITEMS or custom service structure
  const service = SERVICE_ITEMS.find(s => s.pageId === pageId) || SERVICE_ITEMS[0];
  
  // Try to find the matching pest from pest database for additional facts
  const pestId = service.id.replace('-control', '').replace('-treatment', '');
  const pest = PEST_DATABASE.find(p => p.id === pestId);

  const handleNavClick = (page: Page) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-white">
      {/* Hero Header */}
      <section className="bg-[#101312] text-white py-16 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 h-48 w-48 bg-[#0B3D2E] opacity-25 rounded-full blur-3xl pointer-events-none"></div>
        <div className="relative z-10 mx-auto px-4 text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-[#0B3D2E] border border-[#C9A646]/30 px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider text-[#C9A646]">
            SANS 10133 Certified Treatment
          </div>
          <h1 className="font-display text-3xl md:text-5xl font-extrabold tracking-tight">
            {service.title} Services
          </h1>
          <p className="text-sm text-gray-300 mx-auto leading-relaxed">
            {service.shortDesc}
          </p>
        </div>
      </section>

      {/* Main Body Content Grid */}
      <section className="py-20 bg-white">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 text-left">
          {/* Left Column: Rich Copywriting */}
          <div className="lg:col-span-8 space-y-10">
            {/* 1. Deep Description */}
            <div className="space-y-4">
              <h2 className="font-display text-2xl font-extrabold text-[#17211C]">
                Professional {service.title} Protocol
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                {service.fullDesc}
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                We employ advanced integrated pest management (IPM) techniques designed to break the breeding and developmental cycles. Rather than relying on simple, short-term contact insecticides that only disperse nests, our SABS-registered marshals apply targeted molecular matrices that solve root problems.
              </p>
            </div>

            {/* 2. Risks and Signs (Pest Specific if possible) */}
            {pest && (
              <div className="bg-[#F8F5EF] p-6 rounded-2xl border border-gray-100 space-y-4">
                <h3 className="font-display text-base font-extrabold text-[#17211C] flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-amber-500" /> Active Infestation Warn Signs
                </h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-gray-600">
                  {pest.signsOfInfestation.map((sign, idx) => (
                    <li key={idx} className="flex gap-2 items-start bg-white p-3 rounded-xl border border-gray-100">
                      <span className="text-amber-500 font-black shrink-0">•</span>
                      <span>{sign}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* 3. Our Multi-Stage Treatment Process */}
            <div className="space-y-6">
              <h3 className="font-display text-xl font-extrabold text-[#17211C]">
                Step-by-Step Eradication Workflow
              </h3>
              <div className="space-y-4">
                {service.process.map((step, idx) => (
                  <div key={idx} className="flex gap-4 items-start bg-white p-5 rounded-xl border border-gray-100">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0B3D2E] text-white text-xs font-black shrink-0">
                      0{idx + 1}
                    </span>
                    <div>
                      <span className="font-display text-sm font-extrabold text-[#17211C] block mb-1">
                        Phase {idx + 1}
                      </span>
                      <p className="text-xs text-gray-500 leading-relaxed">
                        {step}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 4. Benefits */}
            <div className="space-y-4">
              <h3 className="font-display text-lg font-extrabold text-[#17211C]">
                Why BugProctect Pro is Recommended for {service.title}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {service.benefits.map((benefit, idx) => (
                  <div key={idx} className="border border-emerald-100 bg-emerald-50/20 p-4 rounded-xl">
                    <CheckCircle className="h-5 w-5 text-[#C9A646] mb-2" />
                    <p className="text-xs font-semibold text-gray-800 leading-relaxed">
                      {benefit}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* 5. Pest Prevention Guidelines */}
            {pest && (
              <div className="space-y-4 pt-4 border-t border-gray-100">
                <h3 className="font-display text-base font-extrabold text-[#17211C]">
                  SANS Preventative Guidelines (To Stop Recurrence)
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed mb-2">
                  Chemical eradication is highly effective, but must be accompanied by mechanical and environmental prevention to remain permanent:
                </p>
                <ul className="space-y-2.5 text-xs text-gray-600">
                  {pest.preventionTips.map((tip, idx) => (
                    <li key={idx} className="flex gap-2 items-start">
                      <span className="text-[#C9A646] font-bold">✓</span>
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Right Column: Tailored Conversion Card */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-md space-y-6">
              <div className="space-y-1">
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#0B3D2E] bg-[#E8ECE8] px-2.5 py-0.5 rounded-full">
                  Fast-Track Dispatch
                </span>
                <h4 className="font-display text-lg font-extrabold text-[#17211C] pt-2">
                  Request a Free Quote
                </h4>
                <p className="text-xs text-gray-400">
                  Priced ethically based on property perimeter and severe active nesting vectors.
                </p>
              </div>

              <div className="space-y-4 text-xs font-semibold text-gray-600">
                <div className="flex gap-2 items-center bg-gray-50 p-3 rounded-xl">
                  <Clock className="h-4 w-4 text-amber-500" />
                  <span>Same-day quote response</span>
                </div>
                <div className="flex gap-2 items-center bg-gray-50 p-3 rounded-xl">
                  <ShieldCheck className="h-4 w-4 text-[#C9A646]" />
                  <span>Written Service Warranty included</span>
                </div>
              </div>

              <button
                onClick={() => handleNavClick('book-inspection')}
                className="w-full bg-[#0B3D2E] text-white hover:bg-[#082E22] py-3 text-xs font-bold rounded-xl shadow-sm transition-colors"
              >
                Book Inspection Request &rarr;
              </button>

              <div className="border-t border-gray-100 pt-4 text-center">
                <span className="text-[10px] text-gray-400 block mb-2">Prefer instant human chat?</span>
                <a
                  href={`https://wa.me/27115550192?text=Hi%20BugProctect%20Pro,%20I%20have%20an%20active%20infestation%20of%20${encodeURIComponent(service.title)}%20and%20would%20like%20to%20request%20an%20inspection.`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-lg border border-emerald-500 bg-emerald-50/50 px-4 py-2 text-xs font-bold text-emerald-700 hover:bg-emerald-50 transition-colors"
                >
                  <MessageSquare className="h-4 w-4" /> Message WhatsApp Desk
                </a>
              </div>
            </div>

            {/* SABS warning note */}
            <div className="bg-[#F8F5EF] p-5 rounded-2xl border border-gray-100 text-xs text-gray-500 leading-relaxed text-left">
              <span className="font-bold text-[#17211C] block mb-1">⚠️ SABS Professional Notice:</span>
              Chemical compound treatments for persistent vectors like termites, bed bugs, and roof rodents should never be handled using standard non-registered hardware sprays. Incomplete eradication causes fragmentation nesting, which drives pests deep into structural walls and voids.
            </div>
          </div>
        </div>
      </section>

      {/* Bottom links to other treatments */}
      <section className="py-12 bg-gray-50 border-t border-gray-200 text-left">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <h4 className="font-display text-sm font-bold uppercase tracking-wider text-[#C9A646] mb-6">
            Other Specialized Gauteng Treatments
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {SERVICE_ITEMS.filter(s => s.pageId !== pageId).slice(0, 4).map((other) => (
              <button
                key={other.id}
                onClick={() => handleNavClick(other.pageId)}
                className="bg-white border border-gray-200/50 hover:border-[#0B3D2E] p-4 rounded-xl text-left transition-all"
              >
                <span className="font-display text-xs font-bold text-[#17211C] block">
                  {other.title}
                </span>
                <span className="text-[10px] text-gray-400 block mt-1">
                  View protocol &rarr;
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
