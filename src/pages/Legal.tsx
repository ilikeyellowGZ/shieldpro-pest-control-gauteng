import React from 'react';
import { Page } from '../types';

interface LegalProps {
  pageId: 'privacy' | 'terms';
  onNavigate: (page: Page) => void;
}

export default function Legal({ pageId, onNavigate }: LegalProps) {
  return (
    <div className="bg-white text-left">
      {/* Header */}
      <section className="bg-[#101312] text-white py-12 text-center">
        <div className="mx-auto px-4">
          <h1 className="font-display text-2xl md:text-4xl font-extrabold tracking-tight">
            {pageId === 'privacy' ? 'Privacy Policy' : 'Terms of Service'}
          </h1>
          <p className="mt-2 text-xs text-gray-400">
            Last Updated: July 6, 2026 • BugProctect Pro (Pty) Ltd South Africa
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="mx-auto px-4 text-xs md:text-sm text-gray-600 space-y-6 leading-relaxed">
          {pageId === 'privacy' ? (
            /* Privacy Policy */
            <>
              <h2 className="font-display text-base font-extrabold text-[#17211C]">1. Compliance with the POPI Act</h2>
              <p>
                BugProctect Pro is committed to protecting your privacy in strict accordance with the Protection of Personal Information (POPI) Act, Act No. 4 of 2013, of South Africa. We collect and process personal data solely to coordinate service quotes, schedule physical properties inspections, and distribute SANS-compliant chemical reports.
              </p>

              <h2 className="font-display text-base font-extrabold text-[#17211C]">2. Information We Collect</h2>
              <p>
                We collect your name, phone numbers, WhatsApp addresses, email addresses, and structural suburb addresses when you fill in our online quote and guided onboarding forms. This data is processed securely to allow nearest technician dispatch routes.
              </p>

              <h2 className="font-display text-base font-extrabold text-[#17211C]">3. Data Security & Storage</h2>
              <p>
                All private information is stored on secure servers and is never sold, leased, or distributed to third-party marketing networks. We retain details solely for service verification and compliance warranties.
              </p>

              <h2 className="font-display text-base font-extrabold text-[#17211C]">4. Your Rights</h2>
              <p>
                Under POPIA, you maintain the full right to inspect, update, or request immediate deletion of your contact fields held in our registers. Contact our information officer at support@bugproctectpro.co.za.
              </p>
            </>
          ) : (
            /* Terms of Service */
            <>
              <h2 className="font-display text-base font-extrabold text-[#17211C]">1. Standard Services Conditions</h2>
              <p>
                BugProctect Pro coordinates pest eradication and preventative structural containment according to SABS-approved guidelines and SANS 10133 standards. All bookings are subject to technician availability and physical access variables in your suburb.
              </p>

              <h2 className="font-display text-base font-extrabold text-[#17211C]">2. Written Service Warranties</h2>
              <p>
                Warranties and guarantees vary depending on the target vector (e.g., soil-barrier termite injections hold multi-year protection warranties, whereas immediate residential cockroach gel bait knockdowns rely on strict sanitation adherence by the client).
              </p>

              <h2 className="font-display text-base font-extrabold text-[#17211C]">3. Client Preparation & Access</h2>
              <p>
                Clients must provide adequate access to skirtings, ceilings, gutters, and sub-slabs as specified by coordinators before arrival. We decline liability for nesting segments in inaccessible structures.
              </p>

              <h2 className="font-display text-base font-extrabold text-[#17211C]">4. Chemical Safety Disclaimers</h2>
              <p>
                All chemical compounds applied are registered under Act 36 of 1947 of South Africa and SANS guidelines. BugProctect Pro guarantees safety ONLY when chemical perimeters settle and dry according to technician timelines. Children and domestic animals must remain clear of active wet spaces.
              </p>
            </>
          )}

          <div className="pt-8 border-t border-gray-100">
            <button
              onClick={() => onNavigate('home')}
              className="text-xs font-bold text-[#0B3D2E] hover:underline"
            >
              &larr; Return to Homepage
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
