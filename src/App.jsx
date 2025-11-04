import React from 'react';
import Hero from './components/Hero';
import AboutAndProfile from './components/AboutAndProfile';
import CareerTimeline from './components/CareerTimeline';
import ContactFooter from './components/ContactFooter';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <header className="sticky top-0 z-40 backdrop-blur bg-slate-950/60 border-b border-slate-800">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#home" className="text-slate-200 font-semibold tracking-tight">Ridho A. Rahman</a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-300">
            <a href="#home" className="hover:text-white transition">Home</a>
            <a href="#about" className="hover:text-white transition">About</a>
            <a href="#experience" className="hover:text-white transition">Experience</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </nav>
          <a
            href="mailto:ridho.aulia7324@gmail.com"
            className="inline-flex md:hidden text-sm rounded-md border border-slate-700 px-3 py-1.5 text-slate-300"
          >
            Contact
          </a>
        </div>
      </header>

      <main>
        <Hero />
        <AboutAndProfile />
        <CareerTimeline />
        <ContactFooter />
      </main>
    </div>
  );
}

export default App;
