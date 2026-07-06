import React, { useState } from 'react';
import { Page } from '../types';
import { BLOG_POSTS } from '../data/pestData';
import { Calendar, User, Clock, ChevronRight, ArrowLeft } from 'lucide-react';

interface BlogProps {
  onNavigate: (page: Page) => void;
}

export default function Blog({ onNavigate }: BlogProps) {
  const [selectedPostId, setSelectedPostId] = useState<string | null>(null);

  const handlePostClick = (id: string) => {
    setSelectedPostId(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBack = () => {
    setSelectedPostId(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const activePost = BLOG_POSTS.find(p => p.id === selectedPostId);

  return (
    <div className="bg-white text-left">
      {/* Hero Header */}
      <section className="bg-[#101312] text-white py-16 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 h-48 w-48 bg-[#0B3D2E] opacity-20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="relative z-10 mx-auto px-4 text-center space-y-4">
          <span className="text-[#C9A646] text-xs font-bold uppercase tracking-[0.2em] block mb-2">
            BugProctect Pro Field Notes
          </span>
          <h1 className="font-display text-3xl md:text-5xl font-extrabold tracking-tight">
            Pest Advice & Compliance Blog
          </h1>
          <p className="text-sm text-gray-300 mx-auto leading-relaxed">
            Written directly by SABS-registered marshals and SANS corporate compliance auditors. Practical tips to secure your structures.
          </p>
        </div>
      </section>

      {/* Main Blog Body */}
      <section className="py-20 bg-white">
        <div className="mx-auto px-4 sm:px-6">
          {activePost ? (
            /* Single Post View */
            <div className="space-y-8 mx-auto">
              <button
                onClick={handleBack}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-gray-500 hover:text-gray-900 transition-colors"
              >
                <ArrowLeft className="h-4 w-4" /> Back to all articles
              </button>

              <div className="space-y-4">
                <span className="text-[10px] uppercase font-bold tracking-widest text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-full">
                  {activePost.category}
                </span>
                <h2 className="font-display text-2xl md:text-4xl font-extrabold text-[#17211C] leading-tight">
                  {activePost.title}
                </h2>
                {/* Meta details */}
                <div className="flex flex-wrap gap-x-4 gap-y-1.5 text-xs text-gray-400 font-medium">
                  <span className="flex items-center gap-1"><User className="h-3.5 w-3.5" /> By {activePost.author}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1"><Calendar className="h-3.5 w-3.5" /> {activePost.date}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {activePost.readTime}</span>
                </div>
              </div>

              <img
                src={activePost.image}
                alt={activePost.title}
                className="w-full h-[460px] object-cover rounded-2xl border border-gray-100 shadow-sm"
                referrerPolicy="no-referrer"
              />

              {/* Formatted Content */}
              <div className="text-sm md:text-base text-gray-700 leading-relaxed space-y-6 pt-4 border-t border-gray-100">
                {activePost.content.split('\n\n').map((para, pidx) => (
                  <p key={pidx}>{para}</p>
                ))}
              </div>

              {/* Bottom CTA block */}
              <div className="bg-[#F8F5EF] p-6 rounded-2xl border border-gray-100/70 mt-12 text-center space-y-3">
                <span className="font-display text-sm font-extrabold text-gray-800 block">
                  Dealing with this exact issue in your property?
                </span>
                <p className="text-xs text-gray-500 mx-auto leading-relaxed">
                  Avoid applying basic over-the-counter sprays that split colonies. Let our certified Gauteng team conduct a free physical inspection.
                </p>
                <button
                  onClick={() => onNavigate('book-inspection')}
                  className="rounded-xl bg-[#0B3D2E] hover:bg-[#072E22] text-white px-5 py-2.5 text-xs font-bold transition-colors"
                >
                  Book Free Assessment Now
                </button>
              </div>
            </div>
          ) : (
            /* Post grid list */
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {BLOG_POSTS.map((post) => (
                <div
                  key={post.id}
                  className="min-h-[430px] bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow"
                >
                  <div>
                    <img
                      src={post.image}
                      alt={post.title}
                      className="h-60 w-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="p-5 space-y-3">
                      <span className="text-[9px] font-bold uppercase tracking-widest text-[#0B3D2E] bg-[#E8ECE8] px-2.5 py-0.5 rounded-full">
                        {post.category}
                      </span>
                      <h3 className="font-display text-sm md:text-base font-extrabold text-[#17211C] leading-tight hover:text-[#0B3D2E] cursor-pointer" onClick={() => handlePostClick(post.id)}>
                        {post.title}
                      </h3>
                      <p className="text-xs text-gray-500 leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>
                    </div>
                  </div>

                  <div className="p-5 pt-0 border-t border-gray-50 mt-4 flex items-center justify-between text-[11px] text-gray-400">
                    <span>{post.readTime}</span>
                    <button
                      onClick={() => handlePostClick(post.id)}
                      className="text-[#0B3D2E] font-bold hover:underline flex items-center gap-0.5"
                    >
                      Read Post <ChevronRight className="h-3 w-3" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
