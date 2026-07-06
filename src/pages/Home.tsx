import React, { useState } from 'react';
import { Page } from '../types';
import PestSelector from '../components/PestSelector';
import OnboardingFlow from '../components/OnboardingFlow';
import { SERVICE_ITEMS, REVIEWS, INDUSTRIES } from '../data/pestData';
import { 
  ShieldCheck, 
  Phone, 
  MessageSquare, 
  ArrowRight, 
  Clock, 
  MapPin, 
  Users, 
  Sparkles, 
  CheckCircle2, 
  ChevronRight,
  HelpCircle,
  FileText,
  BadgeAlert,
  ChevronDown,
  Building,
  Home as HomeIcon,
  Warehouse
} from 'lucide-react';

interface HomeProps {
  onNavigate: (page: Page) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const homeFaqs = [
    {
      q: 'How quickly can your Gauteng team respond?',
      a: 'We offer same-day service for emergency pest problems across Johannesburg, Pretoria, and surrounding areas whenever a technician is active in your suburb. For standard service bookings, we typically schedule appointments within 24 to 48 hours of your request.'
    },
    {
      q: 'Are your pest control treatments safe for children and domestic pets?',
      a: 'Yes, your family’s safety is our highest priority. All products we apply are SANS-registered, highly targeted, and strictly applied by trained professionals according to direct label instructions. We use sealed, tamper-resistant bait stations for rodents, and will advise you on pet-friendly garden baiting solutions.'
    },
    {
      q: 'Do I need to leave my house during treatment?',
      a: 'For most standard treatments like cockroach gel baiting or garden ant treatment, you do not need to leave. However, for full indoor chemical space sprays (like severe flea or bed bug knockdown treatments), we recommend leaving the property for 3 to 4 hours to let the product settle and dry completely.'
    },
    {
      q: 'Will pests come back after treatment is complete?',
      a: 'We design our premium treatments to reduce active pest populations immediately and prevent future recurrence. For long-term protection, we provide clear prevention advice (like sealing weep holes and trimming trees). For heavy risks like termites, we include solid multi-year guarantees, and offer routine maintenance plans for high-risk businesses.'
    },
    {
      q: 'How much does professional pest control cost in South Africa?',
      a: 'Pest control pricing depends on several specific factors: the pest type, the size of your property, the severity of the active infestation, and the treatment method required. Rather than a flat generic fee, we provide free, highly accurate personalized quotes.'
    }
  ];

  const trustBadges = [
    { title: 'Gauteng-Based Team', desc: 'SABS registered technicians' },
    { title: 'Safe SANS-Approved Treatments', desc: 'Safe for children & pets once dry' },
    { title: 'Residential & Commercial', desc: 'HACCP-compliant standards' },
    { title: 'Discreet Sighting Visits', desc: 'Unmarked vehicles where requested' },
    { title: 'Free Digital Quote', desc: 'No hidden call-out fees' },
    { title: 'Emergency Support', desc: 'Same-day response availability' }
  ];

  const pillars = [
    {
      title: '1. Inspect & Map',
      desc: 'We conduct a thermal and physical analysis to identify the specific species, primary nesting cores, active travel paths, and structural ingress points.'
    },
    {
      title: '2. Targeted Treatment',
      desc: 'Instead of blind spraying, we apply specialized, low-toxicity compound matrix baits and residual microencapsulated barriers that target nesting lifecycles.'
    },
    {
      title: '3. Seal & Prevent',
      desc: 'Our technician advises on sealing structural vents, filling weep holes, trimming tree paths, and improving sanitary barriers to stop future entries.'
    },
    {
      title: '4. Maintain & Certify',
      desc: 'We provide digital service compliance folders, optional recurring maintenance protection schedules, and certified warranties for structural peace of mind.'
    }
  ];

  const handleNavClick = (page: Page) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-white">
      {/* Dynamic JSON-LD SEO Schema markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "LocalBusiness",
                "@id": "https://bugproctectpro.co.za/#localbusiness",
                "name": "BugProctect Pro",
                "image": "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=800",
                "telephone": "+27115550192",
                "email": "support@bugproctectpro.co.za",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "18 Sandton Drive, Sandhurst",
                  "addressLocality": "Sandton, Johannesburg",
                  "addressRegion": "Gauteng",
                  "postalCode": "2196",
                  "addressCountry": "ZA"
                },
                "geo": {
                  "@type": "GeoCoordinates",
                  "latitude": -26.1044,
                  "longitude": 28.0433
                },
                "url": "https://bugproctectpro.co.za",
                "openingHoursSpecification": [
                  {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                    "opens": "07:30",
                    "closes": "18:00"
                  },
                  {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": "Saturday",
                    "opens": "08:00",
                    "closes": "14:00"
                  }
                ],
                "sameAs": [
                  "https://facebook.com/bugproctectpro",
                  "https://instagram.com/bugproctectpro"
                ],
                "priceRange": "$$"
              },
              {
                "@type": "Service",
                "name": "Pest Control & Structural Eradication Services",
                "provider": {
                  "@type": "LocalBusiness",
                  "@id": "https://bugproctectpro.co.za/#localbusiness"
                },
                "areaServed": [
                  { "@type": "AdministrativeArea", "name": "Johannesburg" },
                  { "@type": "AdministrativeArea", "name": "Pretoria" },
                  { "@type": "AdministrativeArea", "name": "Sandton" },
                  { "@type": "AdministrativeArea", "name": "Centurion" }
                ],
                "description": "SABS-registered structural pest eradication and preventative barriers targeting cockroaches, rodents, ants, bed bugs, termites, and fleas."
              },
              {
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "How quickly can your Gauteng team respond?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "We offer same-day service for emergency pest problems across Johannesburg, Pretoria, and surrounding areas whenever a technician is active in your suburb."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Are your pest control treatments safe for children and domestic pets?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes, your family’s safety is our highest priority. All products we apply are SANS-registered, highly targeted, and strictly applied by trained professionals according to direct label instructions."
                    }
                  }
                ]
              }
            ]
          })
        }}
      />

      {/* 1. Cinematic Hero Section */}
      <section className="relative bg-[#101312] pt-12 pb-24 md:pt-20 md:pb-32 lg:min-h-[760px] overflow-hidden text-white">
        {/* Subtle background graphic overlays */}
        <div className="absolute inset-0 z-0 opacity-45 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#0B3D2E]/45 via-transparent to-transparent pointer-events-none"></div>
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center mix-blend-overlay opacity-30"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1600")' }}
        ></div>

        <div className="relative z-10 mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-6 md:space-y-8 text-left">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#0B3D2E] border border-[#C9A646]/30 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#C9A646]">
              <ShieldCheck className="h-4 w-4" /> Professional Pest Control Gauteng
            </div>
            
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
              Gauteng Pest Control That Protects Your Home, Business & Peace of Mind
            </h1>
            
            <p className="text-gray-300 text-sm md:text-base font-normal leading-relaxed">
              Fast, discreet, and professional pest control for homes, restaurants, offices, schools, warehouses, and commercial complexes across Johannesburg, Pretoria, and surrounding Gauteng areas.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button
                onClick={() => handleNavClick('book-inspection')}
                className="flex items-center justify-center gap-2 rounded-xl bg-[#0B3D2E] hover:bg-[#072E22] border-2 border-[#C9A646]/40 px-7 py-4 text-sm font-bold text-white transition-all transform hover:-translate-y-0.5 shadow-lg"
              >
                Book a Free Inspection <ArrowRight className="h-4 w-4 text-[#C9A646]" />
              </button>
              
              <a
                href="tel:+27115550192"
                className="flex items-center justify-center gap-2 rounded-xl bg-white/5 border border-white/20 hover:bg-white/10 px-7 py-4 text-sm font-bold text-white transition-colors"
              >
                <Phone className="h-4 w-4 text-[#C9A646]" /> Call Specialist Now
              </a>
            </div>

            {/* Trust Line */}
            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-gray-400 font-medium">
              <span className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-emerald-500" /> Residential Protection</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-emerald-500" /> Commercial Audits</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-emerald-500" /> SANS 10133 Registered</span>
              <span className="flex items-center gap-1.5 text-amber-500 font-semibold"><Clock className="h-4 w-4" /> Same-day Emergency response</span>
            </div>
          </div>

          {/* Right Hero Visual / Compact Form Card */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-[#C9A646] to-[#0B3D2E] opacity-25 blur pointer-events-none"></div>
            <div className="relative bg-white rounded-3xl border border-gray-100 p-6 md:p-10 lg:min-h-[520px] shadow-2xl text-gray-900">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#0B3D2E] bg-[#E8ECE8] px-3 py-1 rounded-full">
                SANS Certified Response
              </span>
              <h3 className="font-display text-xl md:text-2xl font-extrabold text-[#17211C] mt-3">
                Need Help Immediately?
              </h3>
              <p className="text-xs text-gray-500 mt-1 mb-6">
                Fill in your basic pest problem. Our Gauteng dispatch office reviews entries in real-time.
              </p>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-[10px] font-extrabold uppercase tracking-wider text-gray-400 mb-1">
                    Select Your Pest Concern
                  </label>
                  <select 
                    className="w-full rounded-xl bg-gray-50 border border-gray-200 p-3 text-xs focus:outline-none focus:border-[#0B3D2E]"
                    id="hero-pest-select"
                  >
                    <option value="cockroaches">Cockroaches</option>
                    <option value="rodents">Rats & Mice</option>
                    <option value="termites">Termites</option>
                    <option value="bedbugs">Bed Bugs</option>
                    <option value="ants">Ants</option>
                    <option value="fleas">Fleas & Ticks</option>
                    <option value="other">Not Sure / Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] font-extrabold uppercase tracking-wider text-gray-400 mb-1">
                    Property Type
                  </label>
                  <select 
                    className="w-full rounded-xl bg-gray-50 border border-gray-200 p-3 text-xs focus:outline-none focus:border-[#0B3D2E]"
                    id="hero-prop-select"
                  >
                    <option value="home">Residential Home</option>
                    <option value="apartment">Apartment / Complex</option>
                    <option value="restaurant">Restaurant / Kitchen</option>
                    <option value="office">Corporate Office</option>
                    <option value="warehouse">Industrial Warehouse</option>
                  </select>
                </div>

                <button
                  onClick={() => handleNavClick('book-inspection')}
                  className="w-full mt-2 rounded-xl bg-[#0B3D2E] hover:bg-[#082E22] text-white py-3.5 text-xs font-bold transition-all shadow-md flex items-center justify-center gap-2"
                >
                  Get Your Free Digital Quote &rarr;
                </button>
              </div>

              <div className="mt-5 border-t border-gray-100 pt-4 flex items-center justify-between text-[11px] text-gray-500">
                <span>🔒 Secure POPI-Compliant data</span>
                <span className="text-[#C9A646] font-semibold">★ Verified SABS Standards</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Urgency Bar */}
      <div className="bg-[#C9A646] py-3.5 text-gray-900 font-semibold text-xs md:text-sm shadow-sm">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-3">
          <div className="flex items-center gap-2 text-center md:text-left">
            <span className="h-2 w-2 rounded-full bg-red-600 animate-ping"></span>
            <span>Seeing cockroaches, rodents or termites? Don’t wait for the infestation to spread. Request an assessment today.</span>
          </div>
          <button
            onClick={() => handleNavClick('book-inspection')}
            className="shrink-0 bg-white hover:bg-gray-100 text-[#0B3D2E] px-4.5 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-wider transition-all"
          >
            Request Urgent Call
          </button>
        </div>
      </div>

      {/* 3. Trust Badges */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
            {trustBadges.map((badge, idx) => (
              <div key={idx} className="min-h-[150px] space-y-1 p-5 hover:bg-gray-50 rounded-2xl transition-colors">
                <div className="h-10 w-10 bg-[#E8ECE8] text-[#0B3D2E] rounded-full flex items-center justify-center mx-auto mb-2">
                  <ShieldCheck className="h-5 w-5 text-[#C9A646]" />
                </div>
                <h4 className="font-display text-xs font-bold text-[#17211C]">{badge.title}</h4>
                <p className="text-[10px] text-gray-500">{badge.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Pest Problem Selector */}
      <PestSelector onNavigate={onNavigate} />

      {/* 5. Services Overview Cards */}
      <section className="py-20 bg-white">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mx-auto mb-16">
            <span className="text-[#0B3D2E] text-xs font-bold uppercase tracking-[0.2em] block mb-2">
              SANS-Registered Solutions
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold tracking-tight text-[#17211C]">
              Premium Pest Solutions Engineered for Performance
            </h2>
            <p className="mt-4 text-sm md:text-base text-gray-600">
              We do not believe in temporary fixes. We combine barrier techniques, chemical knockdown, and structural exclusion to secure your premises permanently.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICE_ITEMS.map((service) => (
              <div
                key={service.id}
                className="group relative min-h-[360px] bg-white rounded-2xl border border-gray-200/60 p-6 flex flex-col justify-between hover:border-[#0B3D2E] hover:shadow-xl transition-all duration-300"
              >
                <div>
                  {/* Icon Lockup */}
                  <div className="h-12 w-12 bg-[#E8ECE8] text-[#0B3D2E] group-hover:bg-[#0B3D2E] group-hover:text-white rounded-xl flex items-center justify-center transition-colors mb-5">
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
                </div>

                <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                  <button
                    onClick={() => handleNavClick(service.pageId)}
                    className="text-xs font-bold text-[#0B3D2E] hover:underline flex items-center gap-1"
                  >
                    View Details <ChevronRight className="h-3 w-3" />
                  </button>
                  <button
                    onClick={() => handleNavClick('book-inspection')}
                    className="text-[10px] font-bold uppercase tracking-wider text-white bg-[#0B3D2E] group-hover:bg-[#C9A646] px-3 py-1.5 rounded-lg transition-colors"
                  >
                    Get Quote
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Why Choose Us (The Four Pillars) */}
      <section className="py-20 bg-[#101312] text-white overflow-hidden relative">
        <div className="absolute top-1/2 left-0 h-96 w-96 bg-[#0B3D2E]/25 rounded-full blur-3xl pointer-events-none"></div>

        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mx-auto mb-16">
            <span className="text-[#C9A646] text-xs font-bold uppercase tracking-[0.2em] block mb-2">
              Our Professional Methodology
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold tracking-tight text-white">
              Pest Control is Not Just Spraying. It is Inspection, Treatment, Prevention and Follow-up.
            </h2>
            <p className="mt-4 text-xs md:text-sm text-gray-400">
              A single application of standard retail aerosol products only scatters the colony. Our scientific methodology targets breeding behaviors to dismantle infestations at their structural sources.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pillars.map((p, idx) => (
              <div key={idx} className="min-h-[280px] space-y-4 bg-white/5 border border-white/10 p-6 rounded-2xl relative">
                <span className="absolute -top-4 right-4 text-4xl font-black text-white/5 font-mono select-none">
                  0{idx + 1}
                </span>
                <h3 className="font-display text-base font-bold text-[#C9A646]">
                  {p.title}
                </h3>
                <p className="text-xs leading-relaxed text-gray-300">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={() => handleNavClick('about')}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-white hover:text-[#C9A646] transition-colors"
            >
              Learn more about our certification and standards &rarr;
            </button>
          </div>
        </div>
      </section>

      {/* 7. Gauteng Local Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6 text-left">
            <span className="text-[#0B3D2E] text-xs font-bold uppercase tracking-[0.2em] block">
              Gauteng Footprint
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold tracking-tight text-[#17211C]">
              Built for Gauteng Homes and Businesses
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              From restaurant kitchens in Sandton to family homes in Centurion, offices in Pretoria, and logistics warehouses on the East Rand, Gauteng properties need fast, practical, SANS-certified, and highly discreet pest control.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed">
              Gauteng’s unique highveld environment creates severe localized pest behavior — extreme winter rodent migrations into ceiling spaces, spring ant swarms following first rains, and severe subterranean termite risk in clay-red soils. We maintain dedicated technicians in your suburb for swift turnaround.
            </p>

            {/* Quick Location Badge Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4">
              {[
                'Sandton', 'Pretoria', 'Centurion', 'Randburg', 'Midrand', 'Fourways', 'East Rand', 'Roodepoort', 'Soweto'
              ].map((loc) => (
                <div key={loc} className="flex items-center gap-1.5 text-xs font-semibold text-gray-700 bg-[#E8ECE8]/50 px-3 py-2 rounded-xl">
                  <MapPin className="h-3.5 w-3.5 text-[#0B3D2E]" />
                  {loc}
                </div>
              ))}
            </div>

            <div className="pt-4">
              <button
                onClick={() => handleNavClick('areas')}
                className="rounded-xl border border-[#0B3D2E] text-[#0B3D2E] hover:bg-[#0B3D2E] hover:text-white px-5 py-2.5 text-xs font-bold transition-all"
              >
                View Service Suburbs Map
              </button>
            </div>
          </div>

          {/* Right illustration image of Johannesburg / Pretoria */}
          <div className="lg:col-span-6 relative">
            <div className="absolute top-0 right-0 h-full w-full bg-gradient-to-tr from-[#0B3D2E]/20 to-transparent rounded-3xl pointer-events-none"></div>
            <img 
              src="https://images.unsplash.com/photo-1605647540924-852290f6b0d5?q=80&w=800" 
              alt="Gauteng suburban technician service" 
              className="rounded-3xl shadow-xl border border-gray-100 object-cover w-full h-[480px]"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* 8. Industries section */}
      <section className="py-20 bg-[#F8F5EF]">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mx-auto mb-16">
            <span className="text-[#0B3D2E] text-xs font-bold uppercase tracking-[0.2em] block mb-2">
              Bespoke Industry Audits
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold tracking-tight text-[#17211C]">
              Industries We Protect Daily
            </h2>
            <p className="mt-4 text-sm text-gray-600">
              Different environments face entirely distinct risks and require unique compliance tracking. We optimize treatments based on SANS regulations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {INDUSTRIES.map((ind, idx) => (
              <div key={idx} className="min-h-[360px] bg-white rounded-2xl border border-gray-200/40 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <img 
                  src={ind.image} 
                  alt={ind.title} 
                  className="h-60 w-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="p-6 space-y-3 text-left">
                  <h3 className="font-display text-base font-extrabold text-[#17211C]">
                    {ind.title}
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    {ind.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={() => handleNavClick('industries')}
              className="rounded-xl bg-[#0B3D2E] text-white hover:bg-[#072E22] px-6 py-3 text-xs font-bold transition-colors"
            >
              View Full Compliance Checklist
            </button>
          </div>
        </div>
      </section>

      {/* 9. Guided Onboarding process workflow section */}
      <section className="py-20 bg-[#101312] text-white">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-6 text-left">
            <span className="text-[#C9A646] text-xs font-bold uppercase tracking-[0.2em] block">
              Digital Triage Workflow
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold tracking-tight text-white leading-tight">
              Ready to Take Control of Your Space?
            </h2>
            <p className="text-xs md:text-sm text-gray-400 leading-relaxed">
              Use our quick 60-second guided onboarding system to let our tech team understand your specific pest type, property style, and level of urgency.
            </p>

            {/* Step summary dots list */}
            <div className="space-y-4 pt-4 text-xs font-medium">
              <div className="flex gap-3 items-start">
                <span className="h-5 w-5 bg-[#C9A646] text-gray-900 rounded-full flex items-center justify-center text-[10px] font-black shrink-0">1</span>
                <div>
                  <span className="font-bold text-white block">Tell us the problem</span>
                  <span className="text-gray-400">Select pest category, building type and address area.</span>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <span className="h-5 w-5 bg-[#C9A646] text-gray-900 rounded-full flex items-center justify-center text-[10px] font-black shrink-0">2</span>
                <div>
                  <span className="font-bold text-white block">Confirm Dispatch Time</span>
                  <span className="text-gray-400">We verify pricing and secure a time slot on Phone/WhatsApp.</span>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <span className="h-5 w-5 bg-[#C9A646] text-gray-900 rounded-full flex items-center justify-center text-[10px] font-black shrink-0">3</span>
                <div>
                  <span className="font-bold text-white block">Professional Extermination</span>
                  <span className="text-gray-400">Technicians treat safely and deliver lasting prevention advice.</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            {/* Embedded Active Onboarding wizard */}
            <OnboardingFlow />
          </div>
        </div>
      </section>

      {/* 10. Tasteful Before/After style comparison section */}
      <section className="py-20 bg-white">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mx-auto mb-16">
            <span className="text-[#0B3D2E] text-xs font-bold uppercase tracking-[0.2em] block mb-2">
              Proven Outcomes
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold tracking-tight text-[#17211C]">
              Eradication vs. Ongoing Prevention
            </h2>
            <p className="mt-4 text-sm text-gray-600">
              Pest control is not a one-time event — it requires a deliberate shift from immediate knockdown to ongoing architectural shielding.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Before */}
            <div className="min-h-[320px] border border-red-200 bg-red-50/40 rounded-2xl p-6 md:p-8 space-y-4 text-left">
              <span className="text-xs font-bold text-red-600 uppercase tracking-widest bg-red-100 px-3 py-1 rounded-full">
                Before Treatment (Active Pest Activity)
              </span>
              <p className="text-sm text-gray-700 leading-relaxed">
                Nests breed unchecked behind warm kitchen cupboards, in wet bathroom conduits, and dark crawl voids. Standard consumer spray attempts scatter pests, triggering colonial splitting and rendering infestations increasingly resilient.
              </p>
              <ul className="space-y-2 text-xs text-gray-600 font-medium">
                <li className="flex items-center gap-2 text-red-600">• Constant noise scratching in ceilings at night</li>
                <li className="flex items-center gap-2 text-red-600">• Contaminated surfaces and unsealed access cracks</li>
                <li className="flex items-center gap-2 text-red-600">• Risk of local SANS municipal safety fines</li>
              </ul>
            </div>

            {/* After */}
            <div className="min-h-[320px] border border-emerald-200 bg-emerald-50/40 rounded-2xl p-6 md:p-8 space-y-4 text-left">
              <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest bg-emerald-100 px-3 py-1 rounded-full">
                After BugProctect Pro Barrier Protocols
              </span>
              <p className="text-sm text-gray-700 leading-relaxed">
                Active nesting blocks are eliminated via slow-acting gel baits. Microencapsulated residual chemical compounds secure a perimeter boundary along exterior walls, while physical exclusion mesh plugs all key architectural ingress voids.
              </p>
              <ul className="space-y-2 text-xs text-gray-700 font-medium">
                <li className="flex items-center gap-2 text-emerald-700">✓ Absolute peace of mind with written warranties</li>
                <li className="flex items-center gap-2 text-emerald-700">✓ All weeping air vents secured with mesh plugs</li>
                <li className="flex items-center gap-2 text-emerald-700">✓ SANS compliance file perfectly in place</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 11. Testimonials (Reviews Section Snippet) */}
      <section className="py-20 bg-[#F8F5EF]">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mx-auto mb-16">
            <span className="text-[#0B3D2E] text-xs font-bold uppercase tracking-[0.2em] block mb-2">
              Verified Feedback
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold tracking-tight text-[#17211C]">
              What Gauteng Customers Say
            </h2>
            <p className="mt-4 text-sm text-gray-600">
              Read real feedback from local homeowners and property managers across Sandton, Midrand, and Pretoria.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {REVIEWS.slice(0, 3).map((rev) => (
              <div key={rev.id} className="min-h-[280px] bg-white rounded-2xl border border-gray-200/50 p-6 flex flex-col justify-between shadow-sm">
                <div className="space-y-4 text-left">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">{rev.type} Treatment</span>
                    <span className="text-xs text-[#C9A646] font-bold">★★★★★</span>
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
                  <span className="text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded text-[10px]">Verified Client</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={() => handleNavClick('reviews')}
              className="text-xs font-bold text-[#0B3D2E] hover:underline"
            >
              See all verified customer reviews &rarr;
            </button>
          </div>
        </div>
      </section>

      {/* 12. Pricing Guidance Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6 text-left">
              <span className="text-[#0B3D2E] text-xs font-bold uppercase tracking-[0.2em] block">
                Cost Estimations
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-extrabold tracking-tight text-[#17211C] leading-tight">
                How We Calculate Pest Control Pricing
              </h2>
              <p className="text-xs md:text-sm text-gray-500 leading-relaxed">
                Pest control pricing depends on pest type, property size, infestation level and treatment method. Request a free quote for accurate pricing.
              </p>
              <p className="text-xs md:text-sm text-gray-500 leading-relaxed">
                We believe in ethical transparent quoting. Rather than posting generic flat prices that do not solve custom nesting conditions, we provide free physical or digital assessments.
              </p>
              <button
                onClick={() => handleNavClick('book-inspection')}
                className="rounded-xl bg-[#0B3D2E] text-white hover:bg-[#072E22] px-6 py-3 text-xs font-bold transition-all"
              >
                Request Custom Quotation
              </button>
            </div>

            <div className="lg:col-span-7 bg-[#F8F5EF] rounded-2xl p-6 md:p-8 border border-gray-200/50">
              <h3 className="font-display text-base font-extrabold text-[#17211C] mb-6 text-left">
                Primary Cost Drivers
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
                {[
                  { title: 'Pest Category & Cycle', desc: 'Resilient pests like bed bugs require thermal treatments and nested retreatment cycles.' },
                  { title: 'Severity of Infestation', desc: 'Mild localized issues use basic bait matrices. Severe multi-room risks require deep knockdown misting.' },
                  { title: 'Overall Property Size', desc: 'We calculate correct liquid chemical volume based on building linear perimeter meters.' },
                  { title: 'Required Warranty Years', desc: 'Structural guarantees for soil-barrier termite treatments vary from 1 to 5 written years.' },
                  { title: 'Exclusion Proofing Mesh', desc: 'Physical exclusion sealing materials (mesh, foam, steel barriers) add structural protection.' },
                  { title: 'Follow-Up Maintenance', desc: 'Once-off treatments vs discounted recurring monthly business audits.' }
                ].map((item, idx) => (
                  <div key={idx} className="min-h-[150px] bg-white rounded-xl p-5 border border-gray-100">
                    <span className="font-display text-xs font-bold text-[#0B3D2E] block mb-1">
                      {item.title}
                    </span>
                    <p className="text-[11px] text-gray-500 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 13. FAQ Accordion (Snippet of 5 main FAQs) */}
      <section className="py-20 bg-[#F8F5EF]">
        <div className="mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-[#0B3D2E] text-xs font-bold uppercase tracking-[0.2em] block mb-2">
              Got Questions?
            </span>
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight text-[#17211C]">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3.5 text-left">
            {homeFaqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div key={idx} className="bg-white border border-gray-200/60 rounded-xl overflow-hidden transition-all shadow-sm">
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full flex justify-between items-center p-4 text-left font-display text-xs md:text-sm font-bold text-gray-800 hover:text-[#0B3D2E] transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`h-4 w-4 shrink-0 transition-transform ${isOpen ? 'rotate-180 text-[#C9A646]' : 'text-gray-400'}`} />
                  </button>
                  {isOpen && (
                    <div className="p-4 pt-1 border-t border-gray-100 text-xs text-gray-600 leading-relaxed bg-[#F8F5EF]/30">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-8 text-center">
            <button
              onClick={() => handleNavClick('contact')}
              className="text-xs font-bold text-[#0B3D2E] hover:underline"
            >
              Have a custom question? Ask our Gauteng help desk &rarr;
            </button>
          </div>
        </div>
      </section>

      {/* 14. Final Call to Action */}
      <section className="bg-[#0B3D2E] text-white py-16 md:py-24 relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-[#C9A646]/20 via-transparent to-transparent pointer-events-none"></div>
        <div className="relative z-10 mx-auto px-4 sm:px-6">
          <span className="text-[#C9A646] text-xs font-bold uppercase tracking-[0.2em] block mb-2">
            Instant Dispatch Desk
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
            Ready to Take Control of the Problem?
          </h2>
          <p className="text-gray-300 text-xs md:text-sm mx-auto leading-relaxed mb-8">
            Do not let a small cockroach or rodent issue expand into a severe nesting threat. Book a free visual inspection today or chat with our SABS-compliant coordinators on WhatsApp.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => handleNavClick('book-inspection')}
              className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-xl bg-white text-[#0B3D2E] hover:bg-[#F8F5EF] px-8 py-4 text-sm font-bold transition-all shadow-md"
            >
              Book Free Inspection
            </button>
            <a
              href="https://wa.me/27115550192?text=Hello%20BugProctect%20Pro,%20I%20would%20like%20to%20request%20a%20pest%20inspection."
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 px-8 py-4 text-sm font-bold text-white transition-all shadow-md"
            >
              <MessageSquare className="h-5 w-5 fill-white text-emerald-600" /> WhatsApp Us
            </a>
            <a
              href="tel:+27115550192"
              className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-xl bg-white/5 border border-white/20 hover:bg-white/10 px-8 py-4 text-sm font-bold transition-colors"
            >
              <Phone className="h-5 w-5 text-[#C9A646]" /> Call Support
            </a>
          </div>

          <div className="mt-8 text-xs text-gray-400 font-medium">
            * Operational across Johannesburg & Pretoria • Safe registered compounds • Same-day dispatch
          </div>
        </div>
      </section>
    </div>
  );
}
