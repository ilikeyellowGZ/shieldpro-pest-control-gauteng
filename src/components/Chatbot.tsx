import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, X, Phone, RefreshCw, Send } from 'lucide-react';

const HEYYWEBB_URL = 'https://heyywebb.com';

interface Message {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  options?: string[];
}

export default function Chatbot({ onNavigate }: { onNavigate: (page: string) => void }) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentStep, setCurrentStep] = useState<'pest' | 'property' | 'urgency' | 'area' | 'end'>('pest');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const [triageData, setTriageData] = useState({
    pest: '',
    property: '',
    urgency: '',
    area: '',
  });

  // Start chatbot conversation
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      triggerBotMessage(
        "Hi, I can help you figure out the next step. What pest problem are you dealing with?",
        ['Cockroaches', 'Rats or mice', 'Termites', 'Bed bugs', 'Ants', 'Fleas', 'Not sure']
      );
    }
  }, [isOpen]);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isTyping]);

  const triggerBotMessage = (text: string, options?: string[]) => {
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      setMessages(prev => [
        ...prev,
        {
          id: Math.random().toString(),
          sender: 'bot',
          text,
          options,
        },
      ]);
    }, 750);
  };

  const handleOptionClick = (option: string) => {
    // Add user message
    setMessages(prev => [
      ...prev,
      {
        id: Math.random().toString(),
        sender: 'user',
        text: option,
      },
    ]);

    // Handle steps
    if (currentStep === 'pest') {
      setTriageData(prev => ({ ...prev, pest: option }));
      setCurrentStep('property');
      triggerBotMessage(
        "Where is the problem happening?",
        ['Home', 'Apartment', 'Restaurant', 'Office', 'Warehouse', 'School', 'Other business']
      );
    } else if (currentStep === 'property') {
      setTriageData(prev => ({ ...prev, property: option }));
      setCurrentStep('urgency');
      triggerBotMessage(
        "How urgent is it?",
        ['I need help today', 'This week', 'I am comparing quotes', 'I need monthly maintenance']
      );
    } else if (currentStep === 'urgency') {
      setTriageData(prev => ({ ...prev, urgency: option }));
      setCurrentStep('area');
      triggerBotMessage(
        "Which area are you in?",
        ['Johannesburg', 'Pretoria', 'Sandton', 'Midrand', 'East Rand', 'West Rand', 'Other Gauteng area']
      );
    } else if (currentStep === 'area') {
      setTriageData(prev => ({ ...prev, area: option }));
      setCurrentStep('end');
      window.location.assign(HEYYWEBB_URL);
    }
  };

  const handleFinalAction = (action: 'quote' | 'whatsapp' | 'call') => {
    setIsOpen(false);
    if (action === 'quote') {
      window.location.assign(HEYYWEBB_URL);
    } else if (action === 'whatsapp') {
      const text = `Hi BugProctect Pro, I have a ${triageData.pest || 'pest'} problem in my ${triageData.property || 'property'} located in ${triageData.area || 'Gauteng'}. Urgency: ${triageData.urgency || 'asap'}. Please advise.`;
      window.open(`https://wa.me/27115550192?text=${encodeURIComponent(text)}`, '_blank');
    } else if (action === 'call') {
      window.open('tel:+27115550192');
    }
  };

  const handleReset = () => {
    setMessages([]);
    setCurrentStep('pest');
    setTriageData({ pest: '', property: '', urgency: '', area: '' });
    triggerBotMessage(
      "Let's start over. What pest problem are you dealing with?",
      ['Cockroaches', 'Rats or mice', 'Termites', 'Bed bugs', 'Ants', 'Fleas', 'Not sure']
    );
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Floating Launcher Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-[#0B3D2E] text-[#C9A646] shadow-xl hover:bg-[#072E22] transition-all transform hover:scale-105 active:scale-95 border-2 border-[#C9A646]/20"
          id="chatbot-launcher"
        >
          <MessageSquare className="h-6 w-6" />
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F28C28] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-[#F28C28] text-[9px] font-bold text-white items-center justify-center">1</span>
          </span>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="w-[calc(100vw-32px)] sm:w-[360px] h-[500px] bg-white rounded-2xl shadow-2xl border border-gray-100 flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-250">
          {/* Header */}
          <div className="bg-[#101312] p-4 text-white flex justify-between items-center border-b border-[#0B3D2E]/20">
            <div className="flex items-center gap-2.5">
              <div className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse"></div>
              <div>
                <h4 className="font-display text-sm font-bold text-white">Pest Assistant</h4>
                <p className="text-[10px] text-[#C9A646] uppercase tracking-wider font-semibold">BugProctect Pro Smart Triage</p>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <button
                onClick={handleReset}
                className="p-1.5 hover:bg-white/10 rounded-lg text-gray-400 hover:text-white transition-colors"
                title="Restart Chat"
              >
                <RefreshCw className="h-4 w-4" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 hover:bg-white/10 rounded-lg text-gray-400 hover:text-white transition-colors"
                title="Close Assistant"
              >
                <X className="h-4.5 w-4.5" />
              </button>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#F8F5EF]/60">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}>
                {/* Text Bubble */}
                <div
                  className={`rounded-2xl p-3 text-xs leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-[#0B3D2E] text-white rounded-tr-none'
                      : 'bg-white text-gray-800 rounded-tl-none border border-gray-200/55 shadow-sm'
                  }`}
                >
                  {msg.text}
                </div>

                {/* Option Buttons */}
                {msg.options && currentStep !== 'end' && (
                  <div className="flex flex-wrap gap-1.5 mt-2.5">
                    {msg.options.map((opt) => (
                      <button
                        key={opt}
                        onClick={() => handleOptionClick(opt)}
                        className="rounded-full border border-gray-200 bg-white px-3 py-1.5 text-[11px] font-semibold text-gray-700 hover:border-[#0B3D2E] hover:bg-[#0B3D2E]/5 hover:text-[#0B3D2E] transition-all"
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Simulated typing */}
            {isTyping && (
              <div className="flex items-start">
                <div className="bg-white border border-gray-200/55 shadow-sm rounded-2xl rounded-tl-none p-3 text-xs text-gray-500">
                  <span className="flex gap-1 items-center">
                    <span className="h-1.5 w-1.5 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0ms' }}></span>
                    <span className="h-1.5 w-1.5 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '150ms' }}></span>
                    <span className="h-1.5 w-1.5 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '300ms' }}></span>
                  </span>
                </div>
              </div>
            )}

            {/* End Step Recommendation CTAs */}
            {currentStep === 'end' && !isTyping && (
              <div className="space-y-2 mt-4 animate-in fade-in duration-300">
                <div className="rounded-xl border border-dashed border-[#0B3D2E]/20 bg-emerald-50/50 p-3 text-xs text-[#0B3D2E] font-medium leading-relaxed">
                  <span className="font-extrabold block text-gray-900 mb-1">📋 Summary:</span>
                  • Pest: {triageData.pest}<br />
                  • Area: {triageData.area}<br />
                  • Urgency: {triageData.urgency}
                </div>

                <div className="flex flex-col gap-1.5 pt-1">
                  <button
                    onClick={() => handleFinalAction('quote')}
                    className="w-full bg-[#0B3D2E] hover:bg-[#082E22] text-white py-2.5 rounded-xl text-xs font-bold transition-all shadow-sm flex items-center justify-center gap-1.5"
                  >
                    Request Free Inspection
                  </button>
                  <button
                    onClick={() => handleFinalAction('whatsapp')}
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5"
                  >
                    WhatsApp Us Now
                  </button>
                  <button
                    onClick={() => handleFinalAction('call')}
                    className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5"
                  >
                    <Phone className="h-3 w-3" /> Call Specialist
                  </button>
                </div>

                <p className="text-[10px] text-gray-400 text-center italic mt-2">
                  This assistant is a guided demo and does not replace professional inspection.
                </p>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Input Placeholder */}
          <div className="p-3 border-t border-gray-100 bg-white flex items-center gap-2">
            <input
              type="text"
              disabled
              placeholder="Select options above to reply..."
              className="flex-1 bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 text-xs text-gray-400 focus:outline-none cursor-not-allowed"
            />
            <button
              disabled
              className="p-2 bg-gray-100 rounded-xl text-gray-300 cursor-not-allowed"
            >
              <Send className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
