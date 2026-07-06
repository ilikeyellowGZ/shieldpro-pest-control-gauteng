import React, { useState } from 'react';
import { Page } from '../types';
import { SERVICE_AREAS } from '../data/pestData';
import { MapPin, Search, Phone, MessageSquare, ShieldCheck, CheckCircle } from 'lucide-react';

interface ServiceAreasProps {
  onNavigate: (page: Page) => void;
}

export default function ServiceAreas({ onNavigate }: ServiceAreasProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredAreas = SERVICE_AREAS.filter(area => {
    const matchesAreaName = area.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesSuburbs = area.suburbs.some(sub => sub.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesAreaName || matchesSuburbs;
  });

  const handleNavClick = (page: Page) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-white">
      {/* Hero Header */}
      <section className="bg-[#101312] text-white py-16 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 h-48 w-48 bg-[#0B3D2E] opacity-20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="relative z-10 mx-auto px-4 text-center space-y-4">
          <span className="text-[#C9A646] text-xs font-bold uppercase tracking-[0.2em] block mb-2">
            Gauteng Coverage Directories
          </span>
          <h1 className="font-display text-3xl md:text-5xl font-extrabold tracking-tight">
            Our Service Areas in Gauteng
          </h1>
          <p className="text-sm text-gray-300 mx-auto leading-relaxed">
            From residential complexes in Centurion to corporate office parks in Sandton and heavy industrial warehousing on the East Rand — we maintain active local technician dispatch routes.
          </p>
        </div>
      </section>

      {/* Interactive Suburb Search */}
      <section className="py-12 bg-[#F8F5EF] border-b border-gray-100">
        <div className="mx-auto px-4 text-center space-y-4">
          <h2 className="font-display text-lg font-extrabold text-[#17211C]">
            Is your suburb covered? Search in real-time:
          </h2>
          <div className="relative">
            <Search className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="e.g. Bryanston, Eldoraigne, Bedfordview, Waterkloof..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 bg-white border border-gray-300/80 rounded-xl text-sm focus:outline-none focus:border-[#0B3D2E] text-gray-900 shadow-sm"
            />
          </div>
          {searchQuery && (
            <p className="text-xs text-gray-500 font-medium">
              Found {filteredAreas.length} regional sectors matching "{searchQuery}"
            </p>
          )}
        </div>
      </section>

      {/* Service Area Grid */}
      <section className="py-20 bg-white">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          {filteredAreas.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredAreas.map((area, idx) => (
                <div
                  key={idx}
                  className="min-h-[380px] bg-white rounded-2xl border border-gray-200 p-6 shadow-sm flex flex-col justify-between text-left hover:border-[#0B3D2E] hover:shadow-md transition-all"
                >
                  <div className="space-y-4">
                    {/* Header */}
                    <div className="flex gap-3 items-start border-b border-gray-100 pb-4">
                      <div className="p-2.5 bg-[#E8ECE8] text-[#0B3D2E] rounded-xl shrink-0">
                        <MapPin className="h-5 w-5 text-[#C9A646]" />
                      </div>
                      <div>
                        <h3 className="font-display text-base font-extrabold text-[#17211C]">
                          {area.name}
                        </h3>
                        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mt-0.5">
                          {area.region} SABS District
                        </span>
                      </div>
                    </div>

                    {/* Regional copy */}
                    <p className="text-xs text-gray-500 leading-relaxed">
                      {area.description}
                    </p>

                    {/* Suburbs Badge list */}
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block mb-2">
                        Covered Suburbs & Surrounds:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {area.suburbs.map((sub, sidx) => (
                          <span
                            key={sidx}
                            className="text-[10px] font-semibold text-gray-700 bg-gray-50 border border-gray-200/50 px-2 py-1 rounded"
                          >
                            {sub}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Operational Note */}
                    <div className="text-[11px] font-medium text-emerald-700 bg-emerald-50/70 p-3 rounded-lg flex items-center gap-1.5 border border-emerald-100">
                      <ShieldCheck className="h-4 w-4 shrink-0 text-[#C9A646]" />
                      <span>{area.urgencyNote}</span>
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="pt-6 border-t border-gray-100 mt-6 grid grid-cols-2 gap-2">
                    <button
                      onClick={() => handleNavClick('book-inspection')}
                      className="bg-[#0B3D2E] text-white hover:bg-[#082E22] py-2 text-xs font-bold rounded-xl text-center"
                    >
                      Book Inspection
                    </button>
                    <a
                      href={`https://wa.me/27115550192?text=Hi%20BugProctect%20Pro,%20I%20am%20located%20in%20${encodeURIComponent(area.name)}%20and%20would%20like%20to%20request%20a%20technician%20call.`}
                      target="_blank"
                      rel="noreferrer"
                      className="border border-emerald-500 text-emerald-700 hover:bg-emerald-50 py-2 text-xs font-bold rounded-xl text-center flex items-center justify-center gap-1"
                    >
                      <MessageSquare className="h-3.5 w-3.5" /> WhatsApp
                    </a>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 mx-auto space-y-4">
              <MapPin className="h-12 w-12 text-gray-300 mx-auto" />
              <h3 className="font-display text-base font-extrabold text-gray-800">
                Suburb Outside Core Grid?
              </h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                We regularly support surrounding small holdings, agricultural areas, and custom industrial sites adjacent to Gauteng borders. Contact our operations office to verify travel coefficients.
              </p>
              <a
                href="tel:+27115550192"
                className="inline-flex items-center gap-1.5 rounded-xl bg-[#0B3D2E] text-white px-5 py-2.5 text-xs font-bold"
              >
                <Phone className="h-4 w-4" /> Call Gauteng HQ (+27 11 555 0192)
              </a>
            </div>
          )}
        </div>
      </section>

      {/* SANS Compliance footer block */}
      <section className="py-16 bg-[#101312] text-white text-left">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="space-y-2">
            <h3 className="font-display text-lg font-extrabold text-[#C9A646]">
              Certified Regional SABS Response
            </h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              BugProctect Pro maintains active, registered pest marshals stationed across central Gauteng hubs. This allows us to guarantee same-day callouts where technicians are already active in your suburb zone.
            </p>
          </div>
          <button
            onClick={() => handleNavClick('book-inspection')}
            className="shrink-0 bg-white hover:bg-gray-100 text-gray-900 px-6 py-3 rounded-xl text-xs font-bold"
          >
            Request Technician Dispatch &rarr;
          </button>
        </div>
      </section>
    </div>
  );
}
