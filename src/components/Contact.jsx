import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, MessageSquare, Calendar, DollarSign, CheckSquare, Tag, User, FileText, CheckCircle2 } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    contactNumber: '',
    category: 'Small Business',
    projectName: '',
    features: [],
    deadline: '',
    budget: '',
    message: ''
  });

  const [status, setStatus] = useState('idle'); // idle, sending, success, error

  const academicFeatures = ["Full Documentation", "Viva Prep", "MERN Stack", "Cloud Deployment"];
  const businessFeatures = ["E-Commerce", "Booking System", "Live Chat", "Portfolio"];

  const currentFeatures = formData.category === 'Academic University Project' ? academicFeatures : businessFeatures;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData(prev => ({
        ...prev,
        features: checked 
          ? [...prev.features, value] 
          : prev.features.filter(f => f !== value)
      }));
    } else if (name === 'category') {
      setFormData(prev => ({ ...prev, [name]: value, features: [] }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const formatMessageText = () => {
    return `*New Project Inquiry*
Name: ${formData.name}
Contact: ${formData.contactNumber}
Category: ${formData.category}
Project Name: ${formData.projectName}
Features: ${formData.features.join(', ') || 'None selected'}
Deadline: ${formData.deadline}
Budget: ${formData.budget}
Additional Details: ${formData.message}`;
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent(formatMessageText());
    window.open(`https://wa.me/94765840848?text=${text}`, '_blank');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');

    // EmailJS credentials
    const serviceId = 'service_c7sy5ge';
    const templateId = 'template_d1vx19r';
    const publicKey = 'K43fmiOV67HM8rs67';

    const templateParams = {
      from_name: formData.name,
      contact_number: formData.contactNumber,
      category: formData.category,
      project_name: formData.projectName,
      features: formData.features.join(', '),
      deadline: formData.deadline,
      budget: formData.budget,
      message: formData.message,
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setStatus('success');
        setFormData({
          name: '', contactNumber: '', category: 'Small Business',
          projectName: '', features: [], deadline: '', budget: '', message: ''
        });
        setTimeout(() => setStatus('idle'), 5000);
      })
      .catch((err) => {
        console.log('FAILED...', err);
        setStatus('error');
        setTimeout(() => setStatus('idle'), 3000);
      });
  };

  return (
    <section id="contact" className="py-24 relative bg-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            Let's Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-cyan-glow text-glow">Together</span>
          </h2>
          <p className="text-xl text-gray-400 font-light">
            Ready to start your digital journey? Get in touch for a free consultation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Contact Info */}
          <div className="space-y-8 lg:col-span-4">
            <div className="bg-glass p-8 rounded-2xl border border-gray-800 h-full flex flex-col">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              
              <div className="space-y-6 flex-grow">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-slate-grey p-3 rounded-lg border border-gray-700 text-electric-blue">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm text-gray-400 font-medium uppercase tracking-wider mb-1">Direct Line</p>
                    <p className="text-lg text-white font-semibold">0765840848</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-slate-grey p-3 rounded-lg border border-gray-700 text-cyan-glow">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm text-gray-400 font-medium uppercase tracking-wider mb-1">Email Us</p>
                    <p className="text-lg text-white font-semibold">hello@kinship27.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-slate-grey p-3 rounded-lg border border-gray-700 text-electric-blue">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm text-gray-400 font-medium uppercase tracking-wider mb-1">Headquarters</p>
                    <p className="text-lg text-white font-semibold">Colombo, Sri Lanka</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-glass p-8 rounded-2xl border border-gray-800 lg:col-span-8 relative overflow-hidden">
            {status === 'success' && (
              <div className="absolute inset-0 z-10 bg-charcoal/90 backdrop-blur-md flex flex-col items-center justify-center animate-in fade-in duration-500">
                <CheckCircle2 className="h-20 w-20 text-cyan-glow mb-4 animate-bounce shadow-[0_0_30px_rgba(0,240,255,0.6)] rounded-full" />
                <h3 className="text-3xl font-bold text-white mb-2 text-shadow-glow">Message Sent!</h3>
                <p className="text-gray-300 text-center max-w-md">We have received your requirements and will get back to you shortly.</p>
              </div>
            )}
            
            <h3 className="text-2xl font-bold text-white mb-6">Project Requirements</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="flex items-center text-sm font-medium text-gray-400 mb-2">
                    <User className="h-4 w-4 mr-2 text-cyan-glow" /> Full Name <span className="text-electric-blue ml-1">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-slate-grey/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-glow focus:ring-1 focus:ring-cyan-glow transition-all duration-300 shadow-inner"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="contactNumber" className="flex items-center text-sm font-medium text-gray-400 mb-2">
                    <Phone className="h-4 w-4 mr-2 text-cyan-glow" /> Contact Number (WhatsApp) <span className="text-electric-blue ml-1">*</span>
                  </label>
                  <input
                    type="tel"
                    id="contactNumber"
                    name="contactNumber"
                    value={formData.contactNumber}
                    onChange={handleChange}
                    required
                    className="w-full bg-slate-grey/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-glow focus:ring-1 focus:ring-cyan-glow transition-all duration-300 shadow-inner"
                    placeholder="+94 7X XXX XXXX"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="category" className="flex items-center text-sm font-medium text-gray-400 mb-2">
                    <Tag className="h-4 w-4 mr-2 text-cyan-glow" /> Project Category <span className="text-electric-blue ml-1">*</span>
                  </label>
                  <select
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    required
                    className="w-full bg-slate-grey/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-glow focus:ring-1 focus:ring-cyan-glow transition-all duration-300 appearance-none shadow-inner"
                  >
                    <option value="Small Business">Small Business</option>
                    <option value="Tourism & Hospitality">Tourism & Hospitality</option>
                    <option value="Academic University Project">Academic University Project</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="projectName" className="flex items-center text-sm font-medium text-gray-400 mb-2">
                    <FileText className="h-4 w-4 mr-2 text-cyan-glow" /> Project Name / Topic
                  </label>
                  <input
                    type="text"
                    id="projectName"
                    name="projectName"
                    value={formData.projectName}
                    onChange={handleChange}
                    className="w-full bg-slate-grey/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-glow focus:ring-1 focus:ring-cyan-glow transition-all duration-300 shadow-inner"
                    placeholder="e.g. Bakery Management System"
                  />
                </div>
              </div>

              {/* Dynamic Features */}
              <div>
                <label className="flex items-center text-sm font-medium text-gray-400 mb-3">
                  <CheckSquare className="h-4 w-4 mr-2 text-cyan-glow" /> Required Features
                </label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {currentFeatures.map((feature, idx) => (
                    <label key={idx} className="flex items-center p-3 rounded-lg border border-gray-700 bg-slate-grey/30 cursor-pointer hover:bg-slate-grey/60 transition-colors group">
                      <input
                        type="checkbox"
                        name="features"
                        value={feature}
                        checked={formData.features.includes(feature)}
                        onChange={handleChange}
                        className="w-4 h-4 rounded border-gray-600 text-electric-blue focus:ring-cyan-glow bg-charcoal focus:ring-offset-charcoal"
                      />
                      <span className="ml-2 text-sm text-gray-300 group-hover:text-white transition-colors">{feature}</span>
                    </label>
                  ))}
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="deadline" className="flex items-center text-sm font-medium text-gray-400 mb-2">
                    <Calendar className="h-4 w-4 mr-2 text-cyan-glow" /> Target Deadline <span className="text-electric-blue ml-1">*</span>
                  </label>
                  <input
                    type="date"
                    id="deadline"
                    name="deadline"
                    value={formData.deadline}
                    onChange={handleChange}
                    required
                    style={{ colorScheme: 'dark' }}
                    className="w-full bg-slate-grey/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-glow focus:ring-1 focus:ring-cyan-glow transition-all duration-300 shadow-inner"
                  />
                </div>

                <div>
                  <label htmlFor="budget" className="flex items-center text-sm font-medium text-gray-400 mb-2">
                    <DollarSign className="h-4 w-4 mr-2 text-cyan-glow" /> Budget Estimate
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full bg-slate-grey/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-glow focus:ring-1 focus:ring-cyan-glow transition-all duration-300 appearance-none shadow-inner"
                  >
                    <option value="">Select a range...</option>
                    <option value="Under $500">Under $500 (LKR 150k)</option>
                    <option value="$500 - $1,000">$500 - $1,000</option>
                    <option value="$1,000 - $2,500">$1,000 - $2,500</option>
                    <option value="$2,500+">$2,500+</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="flex items-center text-sm font-medium text-gray-400 mb-2">
                  <MessageSquare className="h-4 w-4 mr-2 text-cyan-glow" /> Additional Requirements
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full bg-slate-grey/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-glow focus:ring-1 focus:ring-cyan-glow transition-all duration-300 resize-none shadow-inner"
                  placeholder="Tell us any specific details, tech stack preferences, or integrations needed..."
                ></textarea>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-gray-800">
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="flex-1 flex items-center justify-center px-8 py-4 rounded-xl font-bold text-charcoal bg-electric-blue hover:bg-cyan-glow transition-all duration-300 shadow-[0_0_15px_rgba(0,240,255,0.3)] hover:shadow-[0_0_25px_rgba(0,240,255,0.5)] transform hover:-translate-y-0.5 disabled:opacity-70 disabled:transform-none disabled:hover:shadow-none"
                >
                  {status === 'sending' ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-charcoal" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send via Email
                      <Send className="ml-2 h-5 w-5" />
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={handleWhatsApp}
                  className="flex-1 group flex items-center justify-center px-8 py-4 rounded-xl font-bold text-white border border-green-500/50 bg-green-500/10 hover:bg-green-500/20 transition-all duration-300 shadow-[0_0_15px_rgba(34,197,94,0.1)] hover:shadow-[0_0_20px_rgba(34,197,94,0.3)] transform hover:-translate-y-0.5"
                >
                  <MessageSquare className="mr-2 h-5 w-5 text-green-400 group-hover:scale-110 transition-transform" />
                  Send via WhatsApp
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
