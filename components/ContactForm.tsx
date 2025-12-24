
import React, { useState } from 'react';
import { Send } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    message: '',
    budget: '',
    timeline: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit} className="glass-card p-8 md:p-12 rounded-[2rem] border-brand-orange/10 shadow-2xl max-w-3xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="name" className="block text-sm font-bold text-brand-black/70 mb-2">
            Name <span className="text-brand-orange">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 border-2 border-brand-black/20 rounded-lg focus:border-brand-orange focus:outline-none transition-colors"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-bold text-brand-black/70 mb-2">
            Email <span className="text-brand-orange">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border-2 border-brand-black/20 rounded-lg focus:border-brand-orange focus:outline-none transition-colors"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="company" className="block text-sm font-bold text-brand-black/70 mb-2">
            Company / Business
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-3 border-2 border-brand-black/20 rounded-lg focus:border-brand-orange focus:outline-none transition-colors"
          />
        </div>

        <div>
          <label htmlFor="projectType" className="block text-sm font-bold text-brand-black/70 mb-2">
            Project Type
          </label>
          <select
            id="projectType"
            name="projectType"
            value={formData.projectType}
            onChange={handleChange}
            className="w-full px-4 py-3 border-2 border-brand-black/20 rounded-lg focus:border-brand-orange focus:outline-none transition-colors"
          >
            <option value="">Select a type</option>
            <option value="automation">Automation System</option>
            <option value="website">Website</option>
            <option value="ai-tool">AI Tool</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>

      <div className="mb-6">
        <label htmlFor="message" className="block text-sm font-bold text-brand-black/70 mb-2">
          Message <span className="text-brand-orange">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell me about your project..."
          className="w-full px-4 py-3 border-2 border-brand-blue/20 rounded-lg focus:border-brand-blue focus:outline-none transition-colors resize-none"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div>
          <label htmlFor="budget" className="block text-sm font-bold text-brand-black/70 mb-2">
            Budget Range
          </label>
          <select
            id="budget"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            className="w-full px-4 py-3 border-2 border-brand-black/20 rounded-lg focus:border-brand-orange focus:outline-none transition-colors"
          >
            <option value="">Select a range</option>
            <option value="under-5k">Under $5,000</option>
            <option value="5k-10k">$5,000 - $10,000</option>
            <option value="10k-25k">$10,000 - $25,000</option>
            <option value="25k-plus">$25,000+</option>
          </select>
        </div>

        <div>
          <label htmlFor="timeline" className="block text-sm font-bold text-brand-black/70 mb-2">
            Timeline
          </label>
          <select
            id="timeline"
            name="timeline"
            value={formData.timeline}
            onChange={handleChange}
            className="w-full px-4 py-3 border-2 border-brand-black/20 rounded-lg focus:border-brand-orange focus:outline-none transition-colors"
          >
            <option value="">Select a timeline</option>
            <option value="urgent">Urgent (1-2 weeks)</option>
            <option value="soon">Soon (1 month)</option>
            <option value="flexible">Flexible (2-3 months)</option>
            <option value="planning">Just planning</option>
          </select>
        </div>
      </div>

      <button
        type="submit"
        className="btn-angular w-full px-12 py-5 bg-brand-orange text-white font-bold hover:bg-brand-orange/90 transition-all flex items-center justify-center gap-3 shadow-xl shadow-brand-orange/20"
      >
        <Send size={20} /> Send Message
      </button>
    </form>
  );
};

export default ContactForm;
