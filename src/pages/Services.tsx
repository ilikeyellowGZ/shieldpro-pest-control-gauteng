import React from 'react';
import { Page } from '../types';
import { SERVICE_ITEMS } from '../data/pestData';
import { ShieldCheck, HelpCircle, Phone, MessageSquare, ArrowRight, CheckCircle } from 'lucide-react';

interface ServicesProps {
  onNavigate: (page: Page) => void;
}

export default function Services({ onNavigate }: ServicesProps) {
  const handleNavClick = (page: Page) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-white">
      {/* Hero Header */}
      <section className="bg-[#101312] text-white py-16 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 h-48 w-48 bg-[#0B3D2E] opacity-20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="relative z-10 mx-auto px-4">
          <span className="text-[#C9A646] text-xs font-bold uppercase tracking-[0.2em] block mb-2">
            Professional Extermination Protocols
          </span>
          <h1 className="font-display text-3xl md:text-5xl font-extrabold tracking-tight">
            Our Pest Eradication Services
          </h1>
          <p className="mt-4 text-sm text-gray-300 mx-auto leading-relaxed">
            From cockroach gel baiting in retail kitchens to structural sub-slab soil barriers against harvester termites, we deliver certified peace of mind across Gauteng.
          </p>
        </div>
      </section>

      {/* Intro block */}
      <section className="py-12 bg-gray-50 border-b border-gray-100">
        <div className="mx-auto px-4 text-center space-y-4">
          <p className="text-xs font-bold text-[#0B3D2E] uppercase tracking-wider">
            ★ Safety First Methodology
          </p>
          <p className="text-sm text-gray-600 mx-auto leading-relaxed">
            All pesticide compounds we utilize are SANS-registered and SABS-compliant. We apply precise, low-toxicity gel matrices, dry granule perimeters, and microencapsulated residuals that are specifically designed to reduce active pest populations while remaining safe for children, pets, and food-handling zones when dry.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICE_ITEMS.map((service) => (
              <div
                key={service.id}
                className="group relative min-h-[380px] md:min-h-[420px] bg-white rounded-2xl border border-gray-200 p-6 flex flex-col justify-between hover:border-[#0B3D2E] hover:shadow-xl transition-all duration-300 text-left"
              >
                <div>
                  {/* Service Card Top visual decoration */}
                  <div className="h-2 w-full bg-gradient-to-r from-[#0B3D2E] to-[#C9A646] rounded-t-2xl absolute top-0 left-0"></div>

                  <div className="h-12 w-12 bg-[#E8ECE8] text-[#0B3D2E] group-hover:bg-[#0B3D2E] group-hover:text-white rounded-xl flex items-center justify-center transition-colors mb-5 mt-2">
                    <ShieldCheck className="h-6 w-6 text-[#C9A646] group-hover:text-white" />
                  </div>

                  <h3 className="font-display text-lg font-bold text-[#17211C] group-hover:text-[#0B3D2E] transition-colors mb-2">
                    {service.title}
                  </h3>
                  
                  <p className="text-xs text-gray-500 leading-relaxed mb-4">
                    {service.shortDesc}
                  </p>

                  <div className="text-[10px] font-bold text-amber-600 bg-amber-50 w-fit px-2 py-0.5 rounded-full mb-6">
                    {service.urgencyLevel}
                  </div>

                  {/* Highlights Bullet points */}
                  <ul className="space-y-1.5 mb-6 text-xs text-gray-600">
                    {service.benefits.slice(0, 2).map((b, idx) => (
                      <li key={idx} className="flex gap-2 items-start">
                        <CheckCircle className="h-3.5 w-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                  <button
                    onClick={() => handleNavClick(service.pageId)}
                    className="text-xs font-bold text-[#0B3D2E] hover:underline flex items-center gap-1"
                  >
                    View Treatment Process &rarr;
                  </button>
                  <button
                    onClick={() => handleNavClick('book-inspection')}
                    className="text-[11px] font-bold uppercase tracking-wider text-white bg-[#0B3D2E] group-hover:bg-[#C9A646] px-3.5 py-2 rounded-xl transition-colors"
                  >
                    Get Quote
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom request section */}
      <section className="py-16 bg-[#F8F5EF] text-center border-t border-gray-200">
        <div className="mx-auto px-4 space-y-6">
          <h2 className="font-display text-2xl font-extrabold text-[#17211C]">Dealing with a specialized pest or unique complex requirement?</h2>
          <p className="text-xs text-gray-500 mx-auto leading-relaxed">
            We handle industrial warehouse bird proofing (spikes, netting), garden harvester termites, park flea sprays, and multi-unit complexes under custom SLA agreements. Ask our Gauteng service managers.
          </p>
          <div className="flex justify-center gap-4 pt-2">
            <button
              onClick={() => handleNavClick('contact')}
              className="rounded-xl bg-[#0B3D2E] hover:bg-[#072E22] text-white px-6 py-3 text-xs font-bold transition-all"
            >
              Contact Our Service Manager
            </button>
            <button
              onClick={() => handleNavClick('book-inspection')}
              className="rounded-xl border border-[#0B3D2E] text-[#0B3D2E] hover:bg-[#0B3D2E] hover:text-white px-6 py-3 text-xs font-bold transition-all"
            >
              Request Free Inspection
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
