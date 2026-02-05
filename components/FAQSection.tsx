
import React, { useState } from 'react';

const FAQS = [
  {
    question: "Why is my well pump pressure switch clicking repeatedly?",
    answer: "This is usually a symptom of 'short cycling'. It happens when your pressure tank is waterlogged (no air cushion) or the switch settings have drifted. It places extreme stress on your pump and can cause motor burnout if not fixed quickly."
  },
  {
    question: "What exactly is a Submersible Pump Pull?",
    answer: "A pump pull involves using a specialized hoist rig or pulling machine to extract the pump from the bottom of your well casing. This is necessary when the pump's motor fails, the intake is clogged, or the drop pipe has developed a leak underground."
  },
  {
    question: "I have no water at all. What should I check first?",
    answer: "First, check your electrical panel for a tripped breaker labeled 'Well' or 'Pump'. Second, look at your pressure gauge near the tank. If it reads zero, your pump isn't running or your tank is empty. If the breaker is fine, the issue is likely the pressure switch or the pump motor."
  },
  {
    question: "Do you service all of Hamilton County?",
    answer: "Yes! While we are headquartered in Carmel (1 Civic Sq), we service Westfield, Noblesville, Fishers, and the surrounding areas for all well emergencies."
  },
  {
    question: "How long does it take to replace a well pump?",
    answer: "Most pump pulls and replacements can be completed in 4 to 6 hours, depending on the depth of the well and the complexity of the electrical system. We carry most standard pump models on our service trucks."
  }
];

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-3">Got Questions?</h2>
          <h3 className="text-4xl font-extrabold text-slate-900 mb-6">Common Well Concerns</h3>
          <p className="text-slate-600">Detailed answers to help you understand your water system.</p>
        </div>

        <div className="space-y-4">
          {FAQS.map((f, idx) => (
            <div 
              key={idx} 
              className={`border rounded-2xl transition-all overflow-hidden ${
                openIndex === idx ? 'border-blue-500 shadow-xl shadow-blue-500/5 bg-blue-50/10' : 'border-slate-200 hover:border-slate-300'
              }`}
            >
              <button 
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full text-left p-6 flex items-center justify-between"
              >
                <span className={`font-bold text-lg ${openIndex === idx ? 'text-blue-700' : 'text-slate-900'}`}>
                  {f.question}
                </span>
                <span className={`w-8 h-8 rounded-full flex items-center justify-center transition-transform ${
                  openIndex === idx ? 'bg-blue-600 text-white rotate-180' : 'bg-slate-100 text-slate-500'
                }`}>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
              {openIndex === idx && (
                <div className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-blue-100 pt-4">
                  {f.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 p-10 bg-slate-900 rounded-3xl text-center">
          <h4 className="text-2xl font-bold text-white mb-4">Still need answers?</h4>
          <p className="text-slate-400 mb-8">Speak directly with a well technician in Carmel right now.</p>
          <a 
            href="tel:8443406413" 
            className="inline-flex items-center gap-3 bg-yellow-500 hover:bg-yellow-400 text-slate-900 font-extrabold py-4 px-10 rounded-xl transition-all transform active:scale-95 shadow-xl"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            (844) 340-6413
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
