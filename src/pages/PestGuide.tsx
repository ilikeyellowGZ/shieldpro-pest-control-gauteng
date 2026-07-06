import React, { useState } from 'react';
import { Page } from '../types';
import { PEST_DATABASE } from '../data/pestData';
import { Bug, AlertTriangle, ShieldCheck, CheckCircle2, Search, ArrowRight } from 'lucide-react';

interface PestGuideProps {
  onNavigate: (page: Page) => void;
}

export default function PestGuide({ onNavigate }: PestGuideProps) {
  const [activeTab, setActiveTab] = useState(PEST_DATABASE[0].id);

  const activePest = PEST_DATABASE.find(p => p.id === activeTab) || PEST_DATABASE[0];

  const handleNavClick = (page: Page) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const dangerColors: Record<string, string> = {
    Low: 'text-emerald-600 bg-emerald-50 border-emerald-100',
    Medium: 'text-blue-600 bg-blue-50 border-blue-100',
    High: 'text-amber-600 bg-amber-50 border-amber-100',
    Extreme: 'text-red-600 bg-red-50 border-red-100'
  };

  return (
    <div className="bg-white">
      {/* Hero Header */}
      <section className="bg-[#101312] text-white py-16 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 h-48 w-48 bg-[#0B3D2E] opacity-25 rounded-full blur-3xl pointer-events-none"></div>
        <div className="relative z-10 mx-auto px-4 text-center space-y-4">
          <span className="text-[#C9A646] text-xs font-bold uppercase tracking-[0.2em] block mb-2">
            SABS Species Database
          </span>
          <h1 className="font-display text-3xl md:text-5xl font-extrabold tracking-tight">
            Gauteng Pest Library & Identification Key
          </h1>
          <p className="text-sm text-gray-300 mx-auto leading-relaxed">
            SABS-authorized field identification, localized infestation warnings, and practical structural containment procedures for residential and commercial assets.
          </p>
        </div>
      </section>

      {/* Main interactive directory */}
      <section className="py-20 bg-white">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Navigation: Pest tabs list */}
          <div className="lg:col-span-4 space-y-2 text-left">
            <span className="text-[10px] uppercase font-bold tracking-widest text-gray-400 block mb-3 px-3">
              Select Vector to Inspect
            </span>
            {PEST_DATABASE.map((p) => (
              <button
                key={p.id}
                onClick={() => setActiveTab(p.id)}
                className={`w-full flex items-center justify-between p-4 rounded-xl border text-left transition-all ${
                  activeTab === p.id
                    ? 'bg-[#0B3D2E] border-[#0B3D2E] text-white shadow-md'
                    : 'bg-white border-gray-200/60 text-gray-700 hover:bg-gray-50'
                }`}
              >
                <div>
                  <span className="font-display text-xs md:text-sm font-extrabold block">{p.name}</span>
                  <span className="text-[10px] text-gray-400 italic block">{p.scientificName}</span>
                </div>
                <span className={`text-[9px] uppercase font-bold border px-2 py-0.5 rounded-full ${
                  activeTab === p.id ? 'bg-white/10 text-white border-white/15' : dangerColors[p.dangerLevel]
                }`}>
                  {p.dangerLevel} Danger
                </span>
              </button>
            ))}
          </div>

          {/* Right Content: Deep visual detailed card */}
          <div className="lg:col-span-8 min-h-[560px] bg-white border border-gray-200 p-6 md:p-8 rounded-2xl shadow-sm text-left">
            <div className="space-y-6">
              {/* Header block */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-gray-100 pb-5">
                <div>
                  <h3 className="font-display text-xl md:text-2xl font-extrabold text-[#17211C]">
                    {activePest.name} Guide
                  </h3>
                  <span className="text-xs text-gray-400 italic block mt-1">
                    Taxonomy: {activePest.scientificName}
                  </span>
                </div>
                <span className={`text-xs font-bold border px-3 py-1 rounded-full w-fit ${dangerColors[activePest.dangerLevel]}`}>
                  ⚠️ Danger Rating: {activePest.dangerLevel}
                </span>
              </div>

              {/* Grid with info & image */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                <div className="md:col-span-7 space-y-4 text-xs md:text-sm text-gray-600 leading-relaxed">
                  <p className="font-medium text-gray-800">
                    {activePest.description}
                  </p>
                  <div>
                    <span className="font-bold text-[#17211C] block mb-1">Gauteng Area Risk Summary:</span>
                    <p className="bg-gray-50 border border-gray-100 p-3 rounded-lg">
                      {activePest.gautengRisk}
                    </p>
                  </div>
                </div>
                <div className="md:col-span-5">
                  <img 
                    src={activePest.image} 
                    alt={activePest.name} 
                    className="rounded-xl object-cover h-64 md:h-72 w-full border border-gray-100 shadow-sm"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>

              {/* Signs and Symptoms */}
              <div className="space-y-3 pt-4 border-t border-gray-100">
                <span className="font-display text-xs font-bold uppercase tracking-wider text-gray-400 block">
                  Primary Signs of Infestation:
                </span>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-gray-600">
                  {activePest.signsOfInfestation.map((sign, idx) => (
                    <li key={idx} className="flex gap-2 items-start bg-gray-50 p-3 rounded-lg">
                      <span className="text-[#C9A646] font-black">•</span>
                      <span>{sign}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Treatment Approach */}
              <div className="bg-emerald-50/50 border border-emerald-100 rounded-xl p-4 space-y-1.5">
                <span className="font-display text-xs font-bold uppercase tracking-wider text-emerald-800 flex items-center gap-1">
                  <ShieldCheck className="h-4 w-4 text-[#C9A646]" /> SABS Recommended Eradication Strategy:
                </span>
                <p className="text-xs text-emerald-950 font-medium leading-relaxed">
                  {activePest.treatmentApproach}
                </p>
              </div>

              {/* Prevention Tips */}
              <div className="space-y-3 pt-4 border-t border-gray-100">
                <span className="font-display text-xs font-bold uppercase tracking-wider text-gray-400 block">
                  Practical Mechanical Prevention Tips:
                </span>
                <ul className="space-y-2 text-xs text-gray-600">
                  {activePest.preventionTips.map((tip, idx) => (
                    <li key={idx} className="flex gap-2 items-start">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Footer CTA */}
              <div className="pt-6 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-4 mt-6">
                <span className="text-xs text-gray-400 italic">
                  * Structural species identification reports are provided during site inspections.
                </span>
                <button
                  onClick={() => {
                    // Navigate to appropriate service page
                    const pageIdMap: Record<string, Page> = {
                      cockroaches: 'service-cockroach',
                      rodents: 'service-rodent',
                      termites: 'service-termite',
                      bedbugs: 'service-bedbug',
                      ants: 'service-ant',
                      fleas: 'service-flea'
                    };
                    handleNavClick(pageIdMap[activePest.id] || 'services');
                  }}
                  className="flex items-center gap-1.5 rounded-xl bg-[#0B3D2E] text-white px-5 py-2.5 text-xs font-bold"
                >
                  View Specific Treatment <ArrowRight className="h-4 w-4 text-[#C9A646]" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
