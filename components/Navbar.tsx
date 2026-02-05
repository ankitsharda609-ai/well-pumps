
import React from 'react';

interface NavbarProps {
  onNavigate: (tab: 'home' | 'diagnostics' | 'blog' | 'faq') => void;
  currentTab: string;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentTab }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-morphism border-b border-slate-200">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <div 
          className="flex items-center gap-2 cursor-pointer group"
          onClick={() => onNavigate('home')}
        >
          <div className="bg-blue-600 text-white p-2 rounded-lg group-hover:bg-blue-700 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
          </div>
          <div>
            <h1 className="text-xl font-bold text-slate-900 leading-tight">Well Pump Pro</h1>
            <p className="text-[10px] uppercase tracking-widest text-blue-600 font-bold">Carmel, Indiana</p>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <NavLink active={currentTab === 'home'} onClick={() => onNavigate('home')}>Home</NavLink>
          <NavLink active={currentTab === 'diagnostics'} onClick={() => onNavigate('diagnostics')}>AI Diagnostic</NavLink>
          <NavLink active={currentTab === 'blog'} onClick={() => onNavigate('blog')}>Learning Center</NavLink>
          <NavLink active={currentTab === 'faq'} onClick={() => onNavigate('faq')}>FAQ</NavLink>
        </div>

        <a 
          href="tel:8443406413" 
          className="bg-yellow-500 hover:bg-yellow-400 text-slate-900 font-bold py-2.5 px-6 rounded-full shadow-md transition-all transform active:scale-95 text-sm md:text-base whitespace-nowrap"
        >
          (844) 340-6413
        </a>
      </div>
    </nav>
  );
};

const NavLink: React.FC<{ children: React.ReactNode, active: boolean, onClick: () => void }> = ({ children, active, onClick }) => (
  <button 
    onClick={onClick}
    className={`text-sm font-semibold transition-colors hover:text-blue-600 ${active ? 'text-blue-600' : 'text-slate-600'}`}
  >
    {children}
  </button>
);

export default Navbar;
