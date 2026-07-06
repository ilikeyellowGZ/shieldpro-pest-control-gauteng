import React, { useState } from 'react';
import { Page } from '../types';
import { PEST_IMAGES } from '../data/pestImages';

interface PestSelectorProps {
  onNavigate: (page: Page) => void;
}

interface PestSelectorItem {
  id: string;
  name: string;
  image: string;
  imageAlt: string;
  shortDesc: string;
  urgency: 'Low' | 'Medium' | 'High' | 'Extreme';
  gautengNote: string;
  recommendation: string;
  targetPage: Page;
}

export default function PestSelector({ onNavigate }: PestSelectorProps) {
  const [selectedId, setSelectedId] = useState<string>('cockroaches');

  const pests: PestSelectorItem[] = [
    {
      id: 'cockroaches',
      name: 'Cockroaches',
      image: PEST_IMAGES.cockroaches,
      imageAlt: 'Cockroach infestation behind an appliance panel',
      shortDesc: 'Carries food-borne pathogens, breeds rapidly in kitchens.',
      urgency: 'High',
      gautengNote: 'Highly active in Sandton high-rises and Pretoria commercial kitchens.',
      recommendation: 'Targeted gel baiting combined with professional residual barrier misting.',
      targetPage: 'service-cockroach'
    },
    {
      id: 'rodents',
      name: 'Rats & Mice',
      image: PEST_IMAGES.rodents,
      imageAlt: 'Rats entering through a damaged wall opening',
      shortDesc: 'Gnaws electrical cables, scratches inside ceiling voids.',
      urgency: 'Extreme',
      gautengNote: 'Severe in winter as JHB rats seek warm roof insulation spaces.',
      recommendation: 'Complete ceiling entry proofing using steel mesh and tamper-resistant bait grids.',
      targetPage: 'service-rodent'
    },
    {
      id: 'termites',
      name: 'Termites',
      image: PEST_IMAGES.termites,
      imageAlt: 'Termite damage and frass along a wooden baseboard',
      shortDesc: 'Chews through wood flooring, studs, and roof trusses silently.',
      urgency: 'Extreme',
      gautengNote: 'Prevalent in Centurion and Pretoria East clay-rich red soils.',
      recommendation: 'Sub-slab soil trenching and barrier chemical injections with written multi-year guarantee.',
      targetPage: 'service-termite'
    },
    {
      id: 'bedbugs',
      name: 'Bed Bugs',
      image: PEST_IMAGES.bedbugs,
      imageAlt: 'Small biting insects on light fabric',
      shortDesc: 'Bites overnight, causing itchy red clusters and distress.',
      urgency: 'High',
      gautengNote: 'Common in hospitality sectors, hostels, and rentals.',
      recommendation: 'Dual thermal deep steam and microencapsulated Insect Growth Regulator treatment.',
      targetPage: 'service-bedbug'
    },
    {
      id: 'ants',
      name: 'Ants',
      image: PEST_IMAGES.ants,
      imageAlt: 'Ant colony moving along an interior floor joint',
      shortDesc: 'Invades kitchens, nests deep in garden paving joints.',
      urgency: 'Medium',
      gautengNote: 'Explodes after Gauteng first spring rains and dry winter spells.',
      recommendation: 'Worker bait matrices which transport slow-acting compounds to neutralize the queen.',
      targetPage: 'service-ant'
    },
    {
      id: 'fleas',
      name: 'Fleas & Ticks',
      image: PEST_IMAGES.fleas,
      imageAlt: 'Fleas and ticks scattered across pale fabric',
      shortDesc: 'Bites domestic pets and triggers severe allergic dermatitis.',
      urgency: 'High',
      gautengNote: 'Spreads rapidly across domestic yards and carpets in warm months.',
      recommendation: 'Dual indoor floor treatment and shaded garden space sanitization spray.',
      targetPage: 'service-flea'
    },
    {
      id: 'flies',
      name: 'Flies',
      image: PEST_IMAGES.flies,
      imageAlt: 'Fly infestation gathered on a window screen',
      shortDesc: 'Vectors of infection, swarms near commercial kitchens.',
      urgency: 'Medium',
      gautengNote: 'Heavy year-round risk for Gauteng food preparation points.',
      recommendation: 'UV light traps, organic biological treatment of refuse areas, and insect screens.',
      targetPage: 'services'
    },
    {
      id: 'not_sure',
      name: 'Not Sure?',
      image: PEST_IMAGES.notSure,
      imageAlt: 'Unidentified crawling pest activity along an interior floor edge',
      shortDesc: 'Unidentified biting or structural damage signs.',
      urgency: 'Medium',
      gautengNote: 'We conduct full species identification during physical inspection.',
      recommendation: 'Book a full physical inspect & quote from our certified pest marshals.',
      targetPage: 'book-inspection'
    }
  ];

  const activePest = pests.find(p => p.id === selectedId) || pests[0];

  return (
    <section className="py-20 md:py-24 bg-[#F8F5EF]" id="pest-selector">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mx-auto mb-12">
          <span className="text-[#C9A646] text-xs font-bold uppercase tracking-[0.2em] block mb-2">
            Active Infestation Selector
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-extrabold tracking-tight text-[#17211C]">
            Tell Us What You Are Dealing With
          </h2>
          <p className="mt-3 text-sm md:text-base text-gray-600">
            Select a pest below to view immediate preventative advice, professional eradication options, and local risk levels in Gauteng.
          </p>
        </div>

        {/* Desktop Side-by-Side Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Grid: Pest Cards Selection */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {pests.map((pest) => {
              const isSelected = pest.id === selectedId;
              return (
                <button
                  key={pest.id}
                  onClick={() => setSelectedId(pest.id)}
                  className={`group flex min-h-52 md:min-h-56 flex-col items-start overflow-hidden rounded-xl border text-left transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#C9A646] focus:ring-offset-2 ${
                    isSelected
                      ? 'bg-[#0B3D2E] border-[#0B3D2E] text-white shadow-lg -translate-y-0.5'
                      : 'bg-white border-gray-200/60 text-gray-800 hover:-translate-y-1 hover:border-[#0B3D2E]/40 hover:bg-white hover:shadow-md'
                  }`}
                >
                  <div className="relative h-32 md:h-36 w-full overflow-hidden">
                    <img
                      src={pest.image}
                      alt={pest.imageAlt}
                      width={360}
                      height={216}
                      loading="lazy"
                      className={`h-full w-full object-cover transition-transform duration-300 ${
                        isSelected ? 'scale-105 opacity-90' : 'group-hover:scale-110'
                      }`}
                    />
                    <div className={`absolute inset-0 ${
                      isSelected
                        ? 'bg-[#0B3D2E]/45'
                        : 'bg-gradient-to-t from-black/35 via-black/0 to-black/0'
                    }`} />
                  </div>
                  <div className="flex flex-1 flex-col justify-between p-4">
                    <span className="font-display text-sm font-bold block">{pest.name}</span>
                    <span
                      className={`text-[10px] uppercase tracking-wide font-extrabold mt-1 ${
                        isSelected
                          ? 'text-[#C9A646]'
                          : pest.urgency === 'Extreme'
                          ? 'text-red-500'
                          : pest.urgency === 'High'
                          ? 'text-amber-500'
                          : 'text-emerald-500'
                      }`}
                    >
                      {pest.urgency} Risk
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Card: Full Breakdown with custom visual and CTA */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-gray-100 p-6 md:p-8 shadow-sm flex flex-col justify-between min-h-[520px]">
            <div>
              {/* Header */}
              <div className="grid gap-5 border-b border-gray-100 pb-5 mb-5 md:grid-cols-[240px_1fr] md:items-center">
                <div className="relative h-52 md:h-60 overflow-hidden rounded-xl bg-[#E8ECE8]">
                  <img
                    src={activePest.image}
                    alt={activePest.imageAlt}
                    width={480}
                    height={320}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 ring-1 ring-inset ring-black/5" />
                </div>
                <div>
                  <h3 className="font-display text-xl md:text-2xl font-extrabold text-[#17211C]">
                    {activePest.name} Assessment
                  </h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-xs bg-[#E8ECE8] text-[#0B3D2E] px-2.5 py-0.5 rounded-full font-semibold">
                      Gauteng Area Threat
                    </span>
                    <span className="text-xs text-gray-500">•</span>
                    <span className={`text-xs font-bold ${
                      activePest.urgency === 'Extreme' ? 'text-red-600' : 'text-amber-600'
                    }`}>
                      {activePest.urgency} Urgency Rating
                    </span>
                  </div>
                </div>
              </div>

              {/* Information Blocks */}
              <div className="space-y-4 text-sm leading-relaxed">
                <div>
                  <span className="font-bold text-[#17211C] block mb-1">Gauteng Local Risk:</span>
                  <p className="text-gray-600">{activePest.gautengNote}</p>
                </div>

                <div>
                  <span className="font-bold text-[#17211C] block mb-1">Impact & Behavior:</span>
                  <p className="text-gray-600">{activePest.shortDesc}</p>
                </div>

                <div className="bg-[#E8ECE8]/35 border border-[#0B3D2E]/5 rounded-xl p-4 mt-2">
                  <span className="font-bold text-[#0B3D2E] block mb-1.5">
                    Recommended BugProctect Pro Solution:
                  </span>
                  <p className="text-gray-700 text-xs md:text-sm font-medium">{activePest.recommendation}</p>
                </div>
              </div>
            </div>

            {/* Dynamic CTA */}
            <div className="mt-8 pt-5 border-t border-gray-100 flex flex-col sm:flex-row gap-3 justify-between items-center">
              <span className="text-xs text-gray-500 font-medium italic text-center sm:text-left">
                * Complete eradication is backed by our local service guarantees.
              </span>
              <button
                onClick={() => {
                  onNavigate(activePest.targetPage);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-xl bg-[#0B3D2E] px-6 py-3 text-xs font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#082E22] hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[#C9A646] focus:ring-offset-2"
              >
                Get help with this pest -&gt;
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
