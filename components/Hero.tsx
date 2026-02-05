
import React from 'react';

interface HeroProps {
  onAction: () => void;
}

const Hero: React.FC<HeroProps> = ({ onAction }) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-slate-900">
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500 rounded-full blur-[120px] -mr-48 -mt-48"></div>
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-indigo-500 rounded-full blur-[100px] -ml-24 -mb-24"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <span className="inline-block bg-blue-600/20 text-blue-400 px-4 py-1.5 rounded-full text-sm font-bold tracking-wide mb-6 uppercase">
          24/7 Emergency Well Service in Carmel
        </span>
        <h1 className="text-4xl md:text-7xl font-extrabold text-white mb-6 leading-tight max-w-4xl mx-auto">
          No Water? Low Pressure? <br/>
          <span className="text-blue-500">We Fix It Fast.</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
          Specializing in submersible pump pulls, pressure switch calibration, and complete well system restoration for Carmel residents.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button 
            onClick={onAction}
            className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-10 rounded-xl shadow-xl transition-all transform hover:-translate-y-1"
          >
            Start Instant AI Diagnosis
          </button>
          <a 
            href="tel:8443406413"
            className="w-full sm:w-auto bg-white hover:bg-slate-50 text-slate-900 font-bold py-4 px-10 rounded-xl shadow-xl transition-all transform hover:-translate-y-1"
          >
            Call (844) 340-6413
          </a>
        </div>
        
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto border-t border-slate-800 pt-10">
          <Stat label="Licensed & Insured" value="Carmel, IN" />
          <Stat label="Avg Response Time" value="< 2 Hours" />
          <Stat label="Emergency Work" value="Available 24/7" />
          <Stat label="Service Area" value="Hamilton Co." />
        </div>
      </div>
    </section>
  );
};

const Stat: React.FC<{ label: string, value: string }> = ({ label, value }) => (
  <div>
    <div className="text-white font-bold text-lg mb-1">{value}</div>
    <div className="text-slate-500 text-xs uppercase tracking-widest">{label}</div>
  </div>
);

export default Hero;
