
import React from 'react';

const SERVICES = [
  {
    title: "Pressure Switch Repair",
    description: "If your switch is clicking or your water pulses, it's a hazard. We calibrate and replace contact points to restore smooth water flow.",
    icon: (
      <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    title: "Submersible Pump Pulls",
    description: "Deep well expertise. Our specialized rigs safely extract pumps from hundreds of feet deep for repair or replacement.",
    icon: (
      <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
      </svg>
    )
  },
  {
    title: "No Water Emergency",
    description: "Total loss of water? We prioritize these calls to ensure your household is back to normal as quickly as possible.",
    icon: (
      <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    )
  }
];

const Services: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-3">Expert Solutions</h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">How We Help Carmel Homeowners</h3>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            From electrical troubleshooting to heavy mechanical lifting, we handle every aspect of well maintenance and repair.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {SERVICES.map((s, idx) => (
            <div key={idx} className="p-8 rounded-3xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 group">
              <div className="mb-6 bg-white w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                {s.icon}
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-4">{s.title}</h4>
              <p className="text-slate-600 leading-relaxed mb-6">{s.description}</p>
              <button className="text-blue-600 font-bold flex items-center gap-2 group-hover:gap-4 transition-all">
                Learn Details
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
