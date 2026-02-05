
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import DiagnosticAI from './components/DiagnosticAI';
import BlogSection from './components/BlogSection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'home' | 'diagnostics' | 'blog' | 'faq'>('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeTab]);

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return (
          <>
            <Hero onAction={() => setActiveTab('diagnostics')} />
            <Services />
            <div className="bg-slate-100 py-20">
              <div className="container mx-auto px-4 max-w-4xl">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-slate-900 mb-4">Smart Well Diagnostic</h2>
                  <p className="text-slate-600">Explain your symptoms to our AI-powered assistant for instant troubleshooting advice.</p>
                </div>
                <DiagnosticAI />
              </div>
            </div>
          </>
        );
      case 'diagnostics':
        return (
          <div className="pt-24 pb-20 container mx-auto px-4 max-w-4xl">
             <div className="text-center mb-12">
                <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Interactive Troubleshooting</h1>
                <p className="text-slate-600 text-lg">Describe what's happening with your water system (noises, pressure drops, etc.) and get an instant professional assessment.</p>
              </div>
            <DiagnosticAI />
          </div>
        );
      case 'blog':
        return <div className="pt-24"><BlogSection /></div>;
      case 'faq':
        return <div className="pt-24"><FAQSection /></div>;
      default:
        return <Hero onAction={() => setActiveTab('diagnostics')} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar onNavigate={setActiveTab} currentTab={activeTab} />
      <main className="flex-grow">
        {renderContent()}
      </main>
      <Footer />
    </div>
  );
};

export default App;
