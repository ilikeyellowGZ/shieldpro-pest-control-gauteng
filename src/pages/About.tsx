import React from 'react';
import { Page } from '../types';
import { ShieldCheck, Award, Users, CheckCircle, Calendar, Phone, MessageSquare } from 'lucide-react';

interface AboutProps {
  onNavigate: (page: Page) => void;
}

export default function About({ onNavigate }: AboutProps) {
  return (
    <div className="bg-white">
      {/* Hero Header */}
      <section className="bg-[#101312] text-white py-16 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 h-48 w-48 bg-[#0B3D2E] opacity-20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="relative z-10 mx-auto px-4">
          <span className="text-[#C9A646] text-xs font-bold uppercase tracking-[0.2em] block mb-2">
            The BugProctect Pro Legacy
          </span>
          <h1 className="font-display text-3xl md:text-5xl font-extrabold tracking-tight">
            About BugProctect Pro Gauteng
          </h1>
          <p className="mt-4 text-sm text-gray-300 mx-auto leading-relaxed">
            Registered SABS technicians providing SANS 10133 compliant pest eradication, structural exclusion, and biological safety barriers across Gauteng.
          </p>
        </div>
      </section>

      {/* Brand Values & Core Story */}
      <section className="py-20 bg-white">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6 text-left">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold text-[#17211C]">
              Pioneering Ethical, Science-Backed Pest Extermination in South Africa
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              Founded to fill a critical gap in Gauteng’s service sector, BugProctect Pro was built by structural engineers and chemical hygiene experts who believed pest control should be more than blind chemical spraying.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed">
              We look at buildings as complete ecosystems. Our methodology targets pest behavior, local Highveld breeding patterns, and entry vectors. Whether we are sealing complex electrical conduit boxes in Sandton or protecting wooden sub-slabs in Pretoria, we focus on permanent structural protection.
            </p>
            
            <div className="border-l-4 border-[#C9A646] bg-[#F8F5EF] p-4 rounded-r-xl">
              <span className="font-bold text-[#0B3D2E] text-sm block">Our Core Safety Promise:</span>
              <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                “Safe when applied by trained professionals according to direct label instructions. We strictly utilize eco-responsible, SANS-registered compounds that cause zero harm to children, pets, or soil ecosystems.”
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <img 
              src="https://images.unsplash.com/photo-1605647540924-852290f6b0d5?q=80&w=800" 
              alt="Professional technician with protective gear" 
              className="rounded-2xl shadow-xl w-full h-[460px] object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* Trust & Certification Pillars */}
      <section className="py-16 bg-[#F8F5EF] border-t border-b border-gray-200/50 text-left">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mx-auto mb-12">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold text-[#17211C]">
              Why Gauteng Selects BugProctect Pro
            </h2>
            <p className="text-xs text-gray-500 mt-2">
              We operate under strict compliance criteria, guaranteeing flawless safety standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="min-h-[260px] bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-4">
              <div className="h-12 w-12 rounded-xl bg-[#E8ECE8] text-[#0B3D2E] flex items-center justify-center">
                <ShieldCheck className="h-6 w-6 text-[#C9A646]" />
              </div>
              <h3 className="font-display text-base font-extrabold text-[#17211C]">SABS & SANS Registered</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Every technician holds SABS-approved registrations and applies pesticides strictly in compliance with SANS 10133 standards. Full MSDS datasheets are provided on-site.
              </p>
            </div>

            <div className="min-h-[260px] bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-4">
              <div className="h-12 w-12 rounded-xl bg-[#E8ECE8] text-[#0B3D2E] flex items-center justify-center">
                <Award className="h-6 w-6 text-[#C9A646]" />
              </div>
              <h3 className="font-display text-base font-extrabold text-[#17211C]">Eco-Responsible Science</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                We favor slow-acting bait matrices and biological control agents that target specific pest lifecycles instead of broadcasting generic industrial poisons.
              </p>
            </div>

            <div className="min-h-[260px] bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-4">
              <div className="h-12 w-12 rounded-xl bg-[#E8ECE8] text-[#0B3D2E] flex items-center justify-center">
                <Users className="h-6 w-6 text-[#C9A646]" />
              </div>
              <h3 className="font-display text-base font-extrabold text-[#17211C]">Uncompromised Discretion</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                To protect your hospitality business or neighborhood peace, we utilize clean, unmarked service vehicles and operate after-hours where requested.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Operational Stats Section */}
      <section className="py-20 bg-[#101312] text-white">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <span className="font-mono text-4xl md:text-5xl font-black text-[#C9A646]">8+</span>
              <p className="text-xs text-gray-400 mt-1 uppercase tracking-wider font-semibold">Gauteng Suburb Hubs</p>
            </div>
            <div>
              <span className="font-mono text-4xl md:text-5xl font-black text-[#C9A646]">4,200+</span>
              <p className="text-xs text-gray-400 mt-1 uppercase tracking-wider font-semibold">Protected Homes</p>
            </div>
            <div>
              <span className="font-mono text-4xl md:text-5xl font-black text-[#C9A646]">180+</span>
              <p className="text-xs text-gray-400 mt-1 uppercase tracking-wider font-semibold">Regular Food Outlets</p>
            </div>
            <div>
              <span className="font-mono text-4xl md:text-5xl font-black text-[#C9A646]">100%</span>
              <p className="text-xs text-gray-400 mt-1 uppercase tracking-wider font-semibold">SANS 10133 Compliant</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#0B3D2E] text-white text-center">
        <div className="mx-auto px-4 space-y-6">
          <h2 className="font-display text-2xl md:text-3xl font-extrabold">Ready to Partner with SABS-Certified Specialists?</h2>
          <p className="text-xs text-gray-300 mx-auto">
            Get SANS-compliant structural pest reports or book immediate same-day site inspections across Johannesburg and Pretoria suburbs.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center pt-2">
            <button
              onClick={() => onNavigate('book-inspection')}
              className="w-full sm:w-auto bg-[#C9A646] text-[#101312] px-6 py-3 rounded-xl text-xs font-bold hover:bg-yellow-500 transition-colors"
            >
              Book SANS Inspection
            </button>
            <a
              href="tel:+27115550192"
              className="w-full sm:w-auto border border-white/20 bg-white/5 px-6 py-3 rounded-xl text-xs font-bold hover:bg-white/10 transition-colors inline-flex justify-center items-center gap-1.5"
            >
              <Phone className="h-4 w-4 text-[#C9A646]" /> Call Headquarters
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
