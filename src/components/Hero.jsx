import React from 'react';
import { ArrowRight, GitBranch } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-electric-blue/10 rounded-full blur-[100px] animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-glow/10 rounded-full blur-[100px] animate-pulse delay-1000"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
          <span className="block text-white">CRAFTING</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-cyan-glow text-glow pb-2">
            DIGITAL LEGACIES.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-4 text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto font-light leading-relaxed mb-10">
          The Ultimate Web & Software Solutions Hub for Modern Businesses & Academic Success.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
          <a
            href="#services"
            className="group flex items-center justify-center px-8 py-4 rounded-full font-bold text-lg text-charcoal bg-electric-blue hover:bg-cyan-glow transition-all duration-300 shadow-[0_0_20px_rgba(0,240,255,0.5)] hover:shadow-[0_0_40px_rgba(0,240,255,0.8)] transform hover:-translate-y-1"
          >
            Explore Services
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#portfolio"
            className="group flex items-center justify-center px-8 py-4 rounded-full font-bold text-lg text-white border-2 border-gray-700 hover:border-electric-blue bg-glass hover-glow transition-all duration-300 transform hover:-translate-y-1"
          >
            <GitBranch className="mr-2 h-5 w-5" />
            View Our GitHub Projects
          </a>
        </div>
      </div>
      
    </section>
  );
};

export default Hero;
