import React from 'react';
import { Page } from '../types';
import Logo from './Logo';
import { Phone, Mail, Clock, ShieldAlert, MessageSquare, MapPin } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const handleNavClick = (page: Page) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const services = [
    { name: 'Cockroach Eradication', page: 'service-cockroach' as Page },
    { name: 'Rodent Baiting & Proofing', page: 'service-rodent' as Page },
    { name: 'Subterranean Termite Soil Barrier', page: 'service-termite' as Page },
    { name: 'Deep Bed Bug treatment', page: 'service-bedbug' as Page },
    { name: 'Suburban Ant Nest Baiting', page: 'service-ant' as Page },
    { name: 'Flea & Tick treatment', page: 'service-flea' as Page },
    { name: 'Residential Protection', page: 'service-residential' as Page },
    { name: 'Commercial Compliance (HACCP)', page: 'service-commercial' as Page },
  ];

  const serviceAreas = [
    { name: 'Sandton & Northern JHB', page: 'areas' as Page },
    { name: 'Randburg & West Rand', page: 'areas' as Page },
    { name: 'Centurion & Pretoria', page: 'areas' as Page },
    { name: 'Midrand & Kyalami', page: 'areas' as Page },
    { name: 'East Rand (Ekurhuleni)', page: 'areas' as Page },
    { name: 'Soweto & Southern suburbs', page: 'areas' as Page },
  ];

  return (
    <footer className="bg-[#101312] pt-16 pb-8 text-gray-300">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Info */}
          <div className="space-y-6">
            <div className="flex cursor-pointer items-center gap-3" onClick={() => handleNavClick('home')}>
              <Logo variant="light-primary" size={44} />
              <div className="flex flex-col leading-tight">
                <span className="font-display text-lg font-extrabold tracking-tight text-white">
                  BugProctect Pro
                </span>
                <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#C9A646]">
                  Pest Control Gauteng
                </span>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-gray-400">
              BugProctect Pro is Gauteng’s premium, SANS-registered pest control service provider. We help residential homes, food services, commercial offices, and industrial hubs eradicate and prevent severe infestations safely and discreetly.
            </p>
            <div className="flex flex-col gap-3.5 pt-2">
              <a
                href="https://wa.me/27115550192?text=Hello%20BugProctect%20Pro,%20I%20would%20like%20to%20request%20a%20pest%20inspection."
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-emerald-600/95 hover:bg-emerald-700 px-4 py-2.5 text-xs font-bold text-white transition-colors w-fit"
              >
                <MessageSquare className="h-4 w-4 fill-white text-emerald-600" />
                WhatsApp Gauteng Desk
              </a>
              <div className="flex items-center gap-2 text-xs text-amber-500 font-semibold">
                <ShieldAlert className="h-4 w-4" /> Same-day support where available
              </div>
            </div>
          </div>

          {/* Quick Links / Services */}
          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-[#C9A646] mb-6">
              Our Specific Treatments
            </h3>
            <ul className="space-y-3.5 text-sm">
              {services.map((service, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleNavClick(service.page)}
                    className="hover:text-white hover:underline transition-colors text-gray-400 text-left"
                  >
                    {service.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-[#C9A646] mb-6">
              Gauteng Regions We Serve
            </h3>
            <ul className="space-y-3.5 text-sm">
              {serviceAreas.map((area, index) => (
                <li key={index} className="flex items-center gap-2">
                  <MapPin className="h-3.5 w-3.5 text-gray-500 shrink-0" />
                  <button
                    onClick={() => handleNavClick(area.page)}
                    className="hover:text-white hover:underline transition-colors text-gray-400 text-left"
                  >
                    {area.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact details */}
          <div className="space-y-6">
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-[#C9A646]">
              BugProctect Pro Gauteng HQ
            </h3>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3 text-gray-400">
                <Phone className="h-5 w-5 text-[#C9A646] shrink-0" />
                <div className="flex flex-col">
                  <span className="text-xs text-gray-500 font-medium">Phone Support</span>
                  <a href="tel:+27115550192" className="hover:text-white font-medium">
                    +27 11 555 0192
                  </a>
                </div>
              </li>
              <li className="flex gap-3 text-gray-400">
                <Mail className="h-5 w-5 text-[#C9A646] shrink-0" />
                <div className="flex flex-col">
                  <span className="text-xs text-gray-500 font-medium">Email Enquiries</span>
                  <a href="mailto:support@bugproctectpro.co.za" className="hover:text-white font-medium">
                    support@bugproctectpro.co.za
                  </a>
                </div>
              </li>
              <li className="flex gap-3 text-gray-400">
                <Clock className="h-5 w-5 text-[#C9A646] shrink-0" />
                <div className="flex flex-col">
                  <span className="text-xs text-gray-500 font-medium">Business Hours</span>
                  <span className="font-medium">Mon - Fri: 07:30 - 18:00</span>
                  <span className="font-medium">Saturday: 08:00 - 14:00</span>
                  <span className="text-xs text-amber-500 mt-1 font-semibold">
                    * Emergency response: 24/7 on WhatsApp
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Separator */}
        <div className="mt-16 border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} BugProctect Pro (Pty) Ltd South Africa. All Rights Reserved.</p>
          <div className="flex flex-wrap items-center justify-center gap-6">
            <a
              href="https://heyywebb.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-gray-300 hover:underline"
            >
              Made by heyywebb
            </a>
            <button onClick={() => handleNavClick('privacy')} className="hover:text-gray-300 hover:underline">
              Privacy Policy
            </button>
            <button onClick={() => handleNavClick('terms')} className="hover:text-gray-300 hover:underline">
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
