import React, { useState } from 'react';
import { Page } from '../types';
import Logo from './Logo';
import { Phone, MessageSquare, Menu, X, Calendar, ChevronDown } from 'lucide-react';

interface HeaderProps {
  activePage: Page;
  onNavigate: (page: Page) => void;
}

export default function Header({ activePage, onNavigate }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [moreDropdownOpen, setMoreDropdownOpen] = useState(false);

  const primaryNavItems: { label: string; page: Page }[] = [
    { label: 'Home', page: 'home' },
    { label: 'Services', page: 'services' },
    { label: 'Areas', page: 'areas' },
    { label: 'Contact', page: 'contact' },
  ];

  const moreNavItems: { label: string; page: Page }[] = [
    { label: 'About', page: 'about' },
    { label: 'Industries', page: 'industries' },
    { label: 'Pest Guide', page: 'pest-guide' },
    { label: 'Reviews', page: 'reviews' },
    { label: 'Blog', page: 'blog' },
  ];

  const handleNavClick = (page: Page) => {
    onNavigate(page);
    setIsOpen(false);
    setServicesDropdownOpen(false);
    setMoreDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const specificServices: { name: string; page: Page }[] = [
    { name: 'Cockroach Control', page: 'service-cockroach' },
    { name: 'Rodent Exclusion', page: 'service-rodent' },
    { name: 'Termite soil barriers', page: 'service-termite' },
    { name: 'Bed Bug Knockdown', page: 'service-bedbug' },
    { name: 'Ant Control', page: 'service-ant' },
    { name: 'Flea & Tick treatment', page: 'service-flea' },
    { name: 'Residential pest control', page: 'service-residential' },
    { name: 'Commercial & Retail', page: 'service-commercial' },
  ];

  const isMoreActive = moreNavItems.some((item) => item.page === activePage);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#0B3D2E]/10 bg-white/90 backdrop-blur-md">
      {/* Top Banner Bar */}
      <div className="bg-[#101312] py-2 text-xs text-white">
        <div className="mx-auto flex px-4 justify-between items-center sm:px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-gray-300">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              Gauteng same-day support
            </span>
            <span className="hidden md:inline-block text-gray-400">|</span>
            <span className="hidden md:inline-block text-gray-300">
              SANS Compliant • SABS Registered
            </span>
          </div>
          <div className="flex items-center gap-4 font-medium text-[#C9A646]">
            <span>Emergency Line:</span>
            <a href="tel:+27115550192" className="hover:underline flex items-center gap-1">
              <Phone className="h-3 w-3" /> +27 11 555 0192
            </a>
          </div>
        </div>
      </div>

      {/* Main Nav Navbar */}
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 justify-between items-center">
          {/* Logo Section */}
          <div className="flex cursor-pointer items-center gap-3" onClick={() => handleNavClick('home')}>
            <Logo variant="primary" size={42} />
            <div className="flex flex-col leading-tight">
              <span className="font-display text-base font-extrabold tracking-tight text-[#17211C] sm:text-lg">
                BugProctect Pro
              </span>
              <span className="hidden text-[10px] font-bold uppercase tracking-[0.18em] text-[#C9A646] sm:block">
                Pest Control Gauteng
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {primaryNavItems.map((item) => {
              if (item.page === 'services') {
                return (
                  <div
                    key={item.page}
                    className="relative"
                    onMouseEnter={() => setServicesDropdownOpen(true)}
                    onMouseLeave={() => setServicesDropdownOpen(false)}
                  >
                    <button
                      onClick={() => handleNavClick('services')}
                      aria-expanded={servicesDropdownOpen}
                      className={`flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors hover:text-[#0B3D2E] ${
                        activePage.startsWith('service') || activePage === 'services'
                          ? 'text-[#0B3D2E] border-b-2 border-[#0B3D2E]'
                          : 'text-gray-600'
                      }`}
                    >
                      {item.label}
                      <ChevronDown className="h-3.5 w-3.5" />
                    </button>

                    {/* Services Dropdown */}
                    {servicesDropdownOpen && (
                      <div className="absolute left-0 mt-0 w-64 rounded-xl border border-gray-100 bg-white p-2 shadow-xl animate-in fade-in slide-in-from-top-2 duration-200">
                        <div className="mb-2 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-gray-400">
                          Specific Treatments
                        </div>
                        {specificServices.map((subService) => (
                          <button
                            key={subService.page}
                            onClick={() => handleNavClick(subService.page)}
                            className="w-full rounded-lg px-3 py-2 text-left text-xs font-medium text-gray-700 hover:bg-[#E8ECE8] hover:text-[#0B3D2E] transition-colors"
                          >
                            {subService.name}
                          </button>
                        ))}
                        <div className="mt-1 border-t border-gray-100 pt-1.5">
                          <button
                            onClick={() => handleNavClick('services')}
                            className="w-full rounded-lg px-3 py-2 text-left text-xs font-bold text-[#0B3D2E] hover:bg-[#0B3D2E]/5 transition-colors"
                          >
                            All Services Overview &rarr;
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <button
                  key={item.page}
                  onClick={() => handleNavClick(item.page)}
                  className={`px-3.5 py-2 text-sm font-medium transition-colors hover:text-[#0B3D2E] ${
                    activePage === item.page
                      ? 'text-[#0B3D2E] font-semibold border-b-2 border-[#0B3D2E]'
                      : 'text-gray-600'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}

            <div
              className="relative"
              onMouseEnter={() => setMoreDropdownOpen(true)}
              onMouseLeave={() => setMoreDropdownOpen(false)}
            >
              <button
                type="button"
                onClick={() => setMoreDropdownOpen((open) => !open)}
                aria-expanded={moreDropdownOpen}
                className={`flex items-center gap-1 px-3.5 py-2 text-sm font-medium transition-colors hover:text-[#0B3D2E] ${
                  isMoreActive
                    ? 'text-[#0B3D2E] font-semibold border-b-2 border-[#0B3D2E]'
                    : 'text-gray-600'
                }`}
              >
                More
                <ChevronDown className="h-3.5 w-3.5" />
              </button>

              {moreDropdownOpen && (
                <div className="absolute right-0 mt-0 w-52 rounded-xl border border-gray-100 bg-white p-2 shadow-xl animate-in fade-in slide-in-from-top-2 duration-200">
                  {moreNavItems.map((item) => (
                    <button
                      key={item.page}
                      onClick={() => handleNavClick(item.page)}
                      className={`w-full rounded-lg px-3 py-2 text-left text-xs font-medium transition-colors ${
                        activePage === item.page
                          ? 'bg-[#0B3D2E]/10 text-[#0B3D2E]'
                          : 'text-gray-700 hover:bg-[#E8ECE8] hover:text-[#0B3D2E]'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* Contact Actions (Desktop) */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://wa.me/27115550192?text=Hello%20BugProctect%20Pro,%20I%20would%20like%20to%20request%20a%20pest%20inspection."
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-full border border-emerald-500 bg-emerald-50/50 px-4 py-2 text-xs font-semibold text-emerald-700 hover:bg-emerald-50 transition-colors"
            >
              <MessageSquare className="h-4 w-4 text-emerald-600 fill-emerald-600" />
              WhatsApp Us
            </a>

            <button
              onClick={() => handleNavClick('book-inspection')}
              className="flex items-center gap-2 rounded-full bg-[#0B3D2E] px-5 py-2.5 text-xs font-bold text-white shadow-md hover:bg-[#082E22] transition-all transform hover:-translate-y-0.5"
            >
              <Calendar className="h-4 w-4 text-[#C9A646]" />
              Book Free Inspection
            </button>
          </div>

          {/* Hamburger Menu Toggle (Mobile) */}
          <div className="flex items-center lg:hidden gap-2">
            <a
              href="tel:+27115550192"
              className="flex items-center justify-center h-10 w-10 rounded-full bg-gray-100 text-gray-700"
              title="Call BugProctect Pro"
            >
              <Phone className="h-4 w-4" />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center justify-center h-10 w-10 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
              aria-label="Toggle navigation"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {isOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white p-4 animate-in slide-in-from-top duration-300">
          <div className="space-y-1 pb-4">
            {primaryNavItems.map((item) => (
              <button
                key={item.page}
                onClick={() => handleNavClick(item.page)}
                className={`w-full rounded-lg px-4 py-3 text-left text-sm font-semibold transition-colors ${
                  activePage === item.page
                    ? 'bg-[#0B3D2E]/10 text-[#0B3D2E]'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="border-t border-gray-100 pt-3 mb-4">
            <span className="block px-4 pb-2 text-[10px] font-bold uppercase tracking-wider text-gray-400">
              More Pages
            </span>
            <div className="grid grid-cols-2 gap-1 px-2">
              {moreNavItems.map((item) => (
                <button
                  key={item.page}
                  onClick={() => handleNavClick(item.page)}
                  className={`rounded-lg p-2 text-left text-xs transition-colors ${
                    activePage === item.page
                      ? 'bg-[#0B3D2E]/10 text-[#0B3D2E] font-semibold'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-[#0B3D2E]'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Quick Sub Service Links on Mobile */}
          <div className="border-t border-gray-100 pt-3 mb-4">
            <span className="block px-4 pb-2 text-[10px] font-bold uppercase tracking-wider text-gray-400">
              Popular Treatments
            </span>
            <div className="grid grid-cols-2 gap-1 px-2">
              {specificServices.slice(0, 6).map((subService) => (
                <button
                  key={subService.page}
                  onClick={() => handleNavClick(subService.page)}
                  className="rounded-lg p-2 text-left text-xs text-gray-600 hover:bg-gray-50 hover:text-[#0B3D2E]"
                >
                  • {subService.name}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2.5 pt-3 border-t border-gray-100">
            <a
              href="https://wa.me/27115550192?text=Hello%20BugProctect%20Pro,%20I%20would%20like%20to%20request%20a%20pest%20inspection."
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 rounded-xl border border-emerald-500 bg-emerald-50/50 py-3 text-xs font-bold text-emerald-700"
            >
              <MessageSquare className="h-4 w-4" />
              WhatsApp
            </a>
            <button
              onClick={() => handleNavClick('book-inspection')}
              className="flex items-center justify-center gap-2 rounded-xl bg-[#0B3D2E] py-3 text-xs font-bold text-white"
            >
              <Calendar className="h-4 w-4" />
              Book Free
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
