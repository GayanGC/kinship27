import React from 'react';
import { Store, PlaneTakeoff, GraduationCap } from 'lucide-react';

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Small Businesses & Retail',
      icon: <Store className="h-10 w-10 text-electric-blue" />,
      description: 'Digital transformation for Bakeries, Saloons, Clothing Stores, and Local Shops with robust E-Commerce integrations.',
      features: ['Inventory Management', 'Online Storefronts', 'POS Integration', 'Customer Portals']
    },
    {
      id: 2,
      title: 'Tourism & Hospitality',
      icon: <PlaneTakeoff className="h-10 w-10 text-cyan-glow" />,
      description: 'Premium platforms for Hotels, Travel Agencies, and Villa Booking systems designed for global reach.',
      features: ['Booking Engines', 'Property Management', 'Virtual Tours', 'Multi-currency Support']
    },
    {
      id: 3,
      title: 'Academic & University Projects',
      icon: <GraduationCap className="h-10 w-10 text-electric-blue" />,
      description: 'End-to-end full-stack software development, complete documentation, and 100% Viva-ready coaching for ITP, ISP, MAD, and Research projects.',
      features: ['Full-Stack Development', 'Comprehensive Documentation', 'Viva Coaching & Mock Sessions', 'Plagiarism-free Code']
    }
  ];

  return (
    <section id="services" className="py-24 relative bg-charcoal">
      {/* Background accents */}
      <div className="absolute top-0 w-full h-[1px] bg-gradient-to-r from-transparent via-electric-blue/30 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            Choose Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-cyan-glow text-glow">Domain</span>
          </h2>
          <p className="text-xl text-gray-400 font-light">
            Tailored digital solutions perfectly engineered for your specific industry requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id}
              className="group bg-glass rounded-2xl p-8 border border-gray-800 hover-glow transition-all duration-500 transform hover:-translate-y-2 relative overflow-hidden"
            >
              {/* Card glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="mb-6 p-4 bg-slate-grey/50 inline-block rounded-xl border border-white/5 group-hover:border-electric-blue/30 transition-colors">
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-electric-blue transition-colors">
                {service.title}
              </h3>
              
              <p className="text-gray-400 mb-8 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-3">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-sm text-gray-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-electric-blue mr-3 shadow-[0_0_5px_rgba(0,240,255,0.8)]"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
