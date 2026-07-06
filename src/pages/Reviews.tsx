import React, { useState } from 'react';
import { Page } from '../types';
import { REVIEWS } from '../data/pestData';
import { CheckCircle2, MessageSquare, Plus, Star } from 'lucide-react';

interface ReviewsProps {
  onNavigate: (page: Page) => void;
}

export default function Reviews({ onNavigate }: ReviewsProps) {
  const [filter, setFilter] = useState<'All' | 'Residential' | 'Commercial'>('All');

  const filteredReviews = REVIEWS.filter(rev => {
    if (filter === 'All') return true;
    return rev.type === filter;
  });

  return (
    <div className="bg-white text-left">
      {/* Hero Header */}
      <section className="bg-[#101312] text-white py-16 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 h-48 w-48 bg-[#0B3D2E] opacity-20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="relative z-10 mx-auto px-4 text-center space-y-4">
          <span className="text-[#C9A646] text-xs font-bold uppercase tracking-[0.2em] block mb-2">
            Client Testimonials
          </span>
          <h1 className="font-display text-3xl md:text-5xl font-extrabold tracking-tight">
            Gauteng Customer Feedback
          </h1>
          <p className="text-sm text-gray-300 mx-auto leading-relaxed">
            Verified-style feedback from local families, corporate logistics parks, and hospitality restaurant owners across Johannesburg and Pretoria suburbs.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-gray-50 border-b border-gray-100">
        <div className="mx-auto px-4 flex justify-center gap-2">
          {['All', 'Residential', 'Commercial'].map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category as any)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                filter === category
                  ? 'bg-[#0B3D2E] text-white shadow-sm'
                  : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-50'
              }`}
            >
              {category} Feedback
            </button>
          ))}
        </div>
      </section>

      {/* Main Reviews List */}
      <section className="py-16 bg-white">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredReviews.map((rev) => (
              <div
                key={rev.id}
                className="min-h-[300px] bg-white rounded-2xl border border-gray-200 p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 bg-gray-50 px-2.5 py-1 rounded-full border border-gray-100">
                      {rev.type} Treatment
                    </span>
                    <div className="flex text-[#C9A646] h-3.5 items-center gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-3 w-3 fill-[#C9A646] stroke-[#C9A646]" />
                      ))}
                    </div>
                  </div>

                  <p className="text-xs text-gray-600 leading-relaxed italic">
                    "{rev.comment}"
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-100 mt-6 flex justify-between items-center text-xs">
                  <div>
                    <span className="font-extrabold text-[#17211C] block">{rev.name}</span>
                    <span className="text-gray-400 block text-[10px]">{rev.location}</span>
                  </div>
                  <div className="flex items-center gap-1 text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded text-[10px] font-bold">
                    <CheckCircle2 className="h-3 w-3" /> SABS Verified
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Prompt to submit a review */}
          <div className="min-h-[260px] bg-[#F8F5EF] mx-auto rounded-3xl p-6 md:p-10 border border-gray-200/50 mt-20 text-center space-y-4 flex flex-col justify-center">
            <span className="text-xs font-bold text-[#0B3D2E] uppercase tracking-wider block">
              Are you a past BugProctect Pro client?
            </span>
            <h3 className="font-display text-lg font-extrabold text-[#17211C]">
              We value your local feedback
            </h3>
            <p className="text-xs text-gray-500 mx-auto leading-relaxed">
              We operate strictly on local performance standards. If our certified technicians resolved your infestation, help other Gauteng complexes make the right choice.
            </p>
            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center gap-1.5 rounded-xl bg-[#0B3D2E] text-white px-5 py-2.5 text-xs font-bold hover:bg-[#072E22] transition-colors"
            >
              Submit Your Review &rarr;
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
