import React, { useState } from 'react';
import { Page } from './types';
import Header from './components/Header';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';

// Page Imports
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import ServiceAreas from './pages/ServiceAreas';
import PestGuide from './pages/PestGuide';
import Blog from './pages/Blog';
import Reviews from './pages/Reviews';
import Contact from './pages/Contact';
import BookInspection from './pages/BookInspection';
import Legal from './pages/Legal';

// Lucide icons
import { Phone, MessageSquare, Calendar } from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const renderActivePage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={setCurrentPage} />;
      case 'about':
        return <About onNavigate={setCurrentPage} />;
      case 'services':
      case 'industries':
        return <Services onNavigate={setCurrentPage} />;
      case 'service-cockroach':
      case 'service-rodent':
      case 'service-termite':
      case 'service-bedbug':
      case 'service-ant':
      case 'service-flea':
      case 'service-residential':
      case 'service-commercial':
        return <ServiceDetail pageId={currentPage} onNavigate={setCurrentPage} />;
      case 'areas':
        return <ServiceAreas onNavigate={setCurrentPage} />;
      case 'pest-guide':
        return <PestGuide onNavigate={setCurrentPage} />;
      case 'blog':
        return <Blog onNavigate={setCurrentPage} />;
      case 'reviews':
        return <Reviews onNavigate={setCurrentPage} />;
      case 'contact':
        return <Contact onNavigate={setCurrentPage} />;
      case 'book-inspection':
        return <BookInspection onNavigate={setCurrentPage} />;
      case 'privacy':
      case 'terms':
        return <Legal pageId={currentPage as 'privacy' | 'terms'} onNavigate={setCurrentPage} />;
      default:
        return <Home onNavigate={setCurrentPage} />;
    }
  };

  const handleMobileQuoteClick = () => {
    setCurrentPage('book-inspection');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#F8F5EF] flex flex-col font-sans text-gray-800">
      {/* Sticky Header */}
      <Header activePage={currentPage} onNavigate={setCurrentPage} />

      {/* Main Page Viewport with simple opacity transitions */}
      <main className="flex-1">
        {renderActivePage()}
      </main>

      {/* Footer */}
      <Footer onNavigate={setCurrentPage} />

      {/* Floating Chatbot */}
      <Chatbot onNavigate={setCurrentPage} />

      {/* Sticky Bottom Call CTA Bar for Mobile Users */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-200/80 p-2.5 grid grid-cols-3 gap-2 shadow-2xl">
        <a
          href="tel:+27115550192"
          className="flex flex-col items-center justify-center gap-1 text-[10px] font-bold text-gray-700 bg-gray-50 border border-gray-200 py-2.5 rounded-xl transition-colors active:bg-gray-100"
        >
          <Phone className="h-4 w-4 text-[#0B3D2E]" />
          <span>Call Now</span>
        </a>
        <a
          href="https://wa.me/27115550192?text=Hello%20BugProctect%20Pro,%20I%20would%20like%20to%20request%20an%20urgent%20pest%20control%20assessment."
          target="_blank"
          rel="noreferrer"
          className="flex flex-col items-center justify-center gap-1 text-[10px] font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 py-2.5 rounded-xl transition-colors active:bg-emerald-100"
        >
          <MessageSquare className="h-4 w-4 text-emerald-600 fill-emerald-600" />
          <span>WhatsApp</span>
        </a>
        <button
          onClick={handleMobileQuoteClick}
          className="flex flex-col items-center justify-center gap-1 text-[10px] font-bold text-white bg-[#0B3D2E] py-2.5 rounded-xl transition-colors active:bg-[#072E22]"
        >
          <Calendar className="h-4 w-4 text-[#C9A646]" />
          <span>Free Quote</span>
        </button>
      </div>
    </div>
  );
}
