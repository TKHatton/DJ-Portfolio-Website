
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-black text-brand-cream py-20 px-6 md:px-12 border-t border-brand-cream/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-20">
          <div className="col-span-1 lg:col-span-3">
            <div className="text-2xl font-black font-display mb-6">Digital <span className="text-brand-orange">Jaywalking</span></div>
            <p className="text-brand-cream/60 text-sm leading-relaxed max-w-xs">
              Premium digital products and automation systems designed for
              uncompromising efficiency and sustainable growth.
            </p>
          </div>

          <div className="col-span-1 lg:col-span-2">
            <h5 className="font-bold mb-6 text-xs uppercase tracking-[0.3em] text-brand-cream/30">Quick Links</h5>
            <ul className="space-y-4 text-sm text-brand-cream/60">
              <li><Link to="/about" className="hover:text-brand-orange transition-colors">About Mission</Link></li>
              <li><Link to="/projects" className="hover:text-brand-orange transition-colors">Project Portfolio</Link></li>
              <li><Link to="/services" className="hover:text-brand-orange transition-colors">Services</Link></li>
              <li><Link to="/contact" className="hover:text-brand-orange transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div className="col-span-1 lg:col-span-2">
            <h5 className="font-bold mb-6 text-xs uppercase tracking-[0.3em] text-brand-cream/30">Support</h5>
            <ul className="space-y-4 text-sm text-brand-cream/60">
              <li><Link to="/contact" className="hover:text-brand-orange transition-colors">Contact Support</Link></li>
              <li><a href="#" className="hover:text-brand-orange transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-brand-orange transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-brand-orange transition-colors">Cookie Policy</a></li>
            </ul>
          </div>

          <div className="col-span-1 lg:col-span-5">
            <h5 className="font-bold mb-6 text-xs uppercase tracking-[0.3em] text-brand-cream/30">Newsletter</h5>
            <p className="text-xs text-brand-cream/40 mb-6">Get updates on new systems and tools.</p>
            <div className="flex gap-2 max-w-md">
              <input
                type="email"
                placeholder="Email address"
                className="bg-brand-black/50 border-2 border-brand-cream/20 rounded-lg px-4 py-3 text-sm flex-grow focus:outline-none focus:border-brand-orange transition-colors text-brand-cream"
              />
              <button className="btn-angular px-4 py-3 bg-brand-orange text-white hover:bg-brand-orange/80 transition-colors flex-shrink-0">
                <Mail size={18} />
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-brand-cream/10 text-brand-cream/20 text-[10px] uppercase font-bold tracking-[0.4em]">
          <p>© 2026 DIGITAL JAYWALKING. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8 mt-6 md:mt-0">
            <a href="#" className="hover:text-brand-orange transition-all">YouTube</a>
            <a href="#" className="hover:text-brand-orange transition-all">LinkedIn</a>
            <a href="#" className="hover:text-brand-orange transition-all">X (Twitter)</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
