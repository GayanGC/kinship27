import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import LiveChat from './components/LiveChat';

function App() {
  return (
    <div className="min-h-screen bg-charcoal text-gray-100 font-sans selection:bg-electric-blue selection:text-charcoal overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <Contact />
      </main>
      
      {/* Footer */}
      <footer className="bg-black py-8 border-t border-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="text-xl font-extrabold tracking-wider text-white">
              KINSHIP <span className="text-electric-blue text-glow">27</span>
            </span>
          </div>
          <p className="text-gray-500 text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} Kinship 27. All rights reserved. Crafting Digital Legacies.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-electric-blue transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 hover:text-electric-blue transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </footer>
      <LiveChat />
    </div>
  );
}

export default App;
