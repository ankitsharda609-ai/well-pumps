
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-blue-600 text-white p-2 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <div>
                <h1 className="text-xl font-bold text-white leading-tight">Well Pump Pro</h1>
                <p className="text-[10px] uppercase tracking-widest text-blue-500 font-bold">Carmel, Indiana</p>
              </div>
            </div>
            <p className="text-slate-500 leading-relaxed mb-8 max-w-sm">
              Providing professional well pump maintenance, pressure switch calibration, and emergency water restoration services to the Carmel community for over 20 years.
            </p>
          </div>
          
          <div>
            <h5 className="text-white font-bold mb-6">Location</h5>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-blue-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                1 Civic Sq<br/>Carmel, IN 46032
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-blue-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Open 24/7 for Emergencies
              </li>
            </ul>
          </div>

          <div>
            <h5 className="text-white font-bold mb-6">Contact</h5>
            <a 
              href="tel:8443406413" 
              className="text-2xl font-extrabold text-blue-500 hover:text-blue-400 transition-colors mb-4 block"
            >
              (844) 340-6413
            </a>
            <p className="text-xs text-slate-600 uppercase tracking-widest font-bold">Priority Support Line</p>
          </div>
        </div>
        
        <div className="border-t border-slate-900 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-slate-600">
            &copy; {new Date().getFullYear()} Well Pump Pro Carmel. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-slate-600 font-bold uppercase tracking-widest">
            <a href="#" className="hover:text-blue-500">Privacy Policy</a>
            <a href="#" className="hover:text-blue-500">Terms of Service</a>
            <a href="#" className="hover:text-blue-500">Service Map</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
