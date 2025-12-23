
import React from 'react';
import { 
  ArrowRight, 
  BookOpen, 
  MessageSquare, 
  Calendar,
  CheckCircle,
  Mail
} from 'lucide-react';
import HeroParallax from './components/HeroParallax';
import Section from './components/Section';
import ServiceGrid from './components/ServiceGrid';
import ProjectGrid from './components/ProjectGrid';
import SystemTracker from './components/SystemTracker';
import FaqAccordion from './components/FaqAccordion';

const App: React.FC = () => {
  return (
    <div className="bg-brand-cream text-brand-black selection:bg-brand-orange selection:text-white">
      {/* 1. Hero Section - Kept dark for the video impact */}
      <HeroParallax />

      {/* 2. About Section - Primary Cream */}
      <Section subtitle="The Mission" title="Building Systems That Work" variant="cream">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <p className="text-xl md:text-2xl text-brand-black/80 leading-relaxed font-light">
              Digital Jaywalking exists to put powerful automation and web tools in the hands 
              of people who don't have time to figure it out themselves. Whether it's a 
              custom workflow that saves you 10 hours a week or a website that actually converts, 
              every system is built with one goal: <span className="text-brand-orange font-bold">make your life easier.</span>
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                "Custom solutions, not templates",
                "Built for your specific workflow",
                "Education-first approach",
                "Affordable & transparent pricing"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="bg-brand-orange/20 p-1 rounded-full">
                    <CheckCircle className="text-brand-orange" size={16} />
                  </div>
                  <span className="text-sm font-semibold text-brand-black/70">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-brand-orange/20 to-brand-teal/20 rounded-[3rem] p-1">
              <div className="w-full h-full bg-white rounded-[2.8rem] overflow-hidden flex items-center justify-center p-12 shadow-2xl">
                {/* Abstract Visual */}
                <div className="relative w-full h-full">
                  <div className="absolute top-0 left-0 w-32 h-32 bg-brand-orange/20 rounded-full blur-3xl" />
                  <div className="absolute bottom-0 right-0 w-32 h-32 bg-brand-teal/40 rounded-full blur-3xl" />
                  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-brand-orange/10">
                    <path fill="currentColor" d="M44.7,-76.4C58.2,-69.2,70,-58.5,78.2,-45.4C86.4,-32.3,91.1,-16.8,90.4,-1.2C89.7,14.4,83.6,28.8,75,41.4C66.5,54,55.5,64.8,42.4,72.4C29.3,80.1,14.1,84.7,-0.9,86.2C-15.9,87.7,-31.8,86.1,-45.3,79.1C-58.8,72.1,-69.9,59.8,-77.8,46.1C-85.7,32.4,-90.4,17.2,-89.2,2.1C-88,-13.1,-80.9,-28.1,-71.2,-40.4C-61.5,-52.7,-49.2,-62.3,-36,-69.8C-22.8,-77.3,-8.3,-82.7,6.4,-83.8C21.1,-84.9,42.2,-81.7,44.7,-76.4Z" transform="translate(100 100)" />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                       <span className="text-brand-orange text-6xl font-black italic block drop-shadow-lg">DJ</span>
                       <span className="text-brand-black/20 text-[10px] uppercase tracking-[0.4em] font-bold">Systems</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* 3. Service Highlights - Teal Variant */}
      <Section subtitle="Capabilities" title="What I Build For You" variant="teal">
        <ServiceGrid />
      </Section>

      {/* 4. Featured Work - Primary Cream */}
      <Section subtitle="Showcase" title="Projects I've Built" variant="cream">
        <ProjectGrid />
        <div className="mt-16 text-center">
          <button className="px-10 py-5 border-2 border-brand-teal/30 rounded-full hover:border-brand-orange hover:text-brand-orange transition-all font-bold">
            View All Experiments
          </button>
        </div>
      </Section>

      {/* 5. Systems Tracker - Teal Variant */}
      <Section subtitle="Lab Status" title="Systems Building Right Now" variant="teal">
        <p className="text-brand-cream/60 mb-12 max-w-2xl leading-relaxed">
          I'm actively building custom solutions for businesses that need automation, websites, and AI tools. 
          Here's what I'm focusing on at the moment:
        </p>
        <SystemTracker />
      </Section>

      {/* 6. Book Showcase - Custom Black Variant for Focus */}
      <Section subtitle="New Release" title="Coming Early 2026" variant="black">
        <div className="dark-glass-card rounded-[3rem] p-8 md:p-12 overflow-hidden relative border-brand-cream/5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 space-y-6">
              <h3 className="text-4xl md:text-5xl font-black leading-tight text-brand-cream">
                Building <span className="text-brand-orange">The Invisible</span> Architect
              </h3>
              <p className="text-brand-cream/70 text-lg leading-relaxed">
                This book teaches you how to build custom automation systems without code. 
                Perfect for entrepreneurs, creators, and small business owners who want to 
                save time and stay competitive.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {['Mindset of Automation', 'Tools for the New Age', 'Building Your First System', 'Scaling with AI'].map((topic, i) => (
                  <li key={i} className="flex items-center gap-2 text-brand-cream/50 text-sm italic">
                    <BookOpen size={14} className="text-brand-orange" /> {topic}
                  </li>
                ))}
              </ul>
              <button className="px-8 py-4 bg-brand-orange text-white rounded-full font-bold hover:scale-105 transition-transform mt-4 shadow-xl shadow-brand-orange/20">
                Notify Me When It Launches
              </button>
            </div>
            <div className="order-1 lg:order-2 flex justify-center">
              <div className="w-64 h-80 md:w-80 md:h-[450px] bg-gradient-to-br from-brand-orange to-brand-peach rounded-lg shadow-2xl transform rotate-6 hover:rotate-0 transition-transform duration-500 flex flex-col items-center justify-between p-8 text-center relative overflow-hidden">
                 <div className="absolute inset-0 bg-brand-teal/20 mix-blend-multiply rounded-lg"></div>
                 <div className="relative z-10 text-white/20 font-black text-xl uppercase tracking-[0.3em]">Digital Jaywalking</div>
                 <div className="relative z-10 space-y-2">
                    <div className="text-white font-black text-3xl leading-none drop-shadow-md">THE INVISIBLE ARCHITECT</div>
                    <div className="text-white/60 text-[10px] uppercase font-bold tracking-widest italic">Building Systems Without Code</div>
                 </div>
                 <div className="relative z-10 w-12 h-1 bg-white/40 mx-auto" />
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* 7. How It Works - Primary Cream */}
      <Section subtitle="The Process" title="How We Build Together" variant="cream">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { step: '01', title: 'We Talk', desc: "You tell me about the problem. What's taking too much time? What's broken? I listen and ask clarifying questions." },
            { step: '02', title: 'We Design', desc: "I propose a solution. We discuss what works best for your workflow. If it makes sense, we build it." },
            { step: '03', title: 'It Works', desc: "The system is live. You save time. I support it. Win-win." }
          ].map((item, i) => (
            <div key={i} className="relative group">
              <span className="text-7xl font-black text-brand-teal/5 absolute -top-8 -left-4 group-hover:text-brand-orange/10 transition-colors">
                {item.step}
              </span>
              <div className="relative z-10">
                <h4 className="text-2xl font-bold mb-4">{item.title}</h4>
                <p className="text-brand-black/50 leading-relaxed italic">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* 8. FAQ Section - Teal Variant */}
      <Section subtitle="Clarification" title="Common Questions" variant="teal">
        <FaqAccordion />
      </Section>

      {/* 9. Final CTA - Cream with Teal Accents */}
      <Section className="pb-32" variant="cream">
        <div className="text-center space-y-8 max-w-4xl mx-auto py-16">
          <h2 className="text-5xl md:text-7xl font-black italic tracking-tighter text-brand-black">
            Ready to <span className="text-brand-orange underline decoration-brand-sage/30 underline-offset-8">Stop Wasting</span> Time?
          </h2>
          <p className="text-xl text-brand-black/60">
            Let's talk about what's broken in your business. No pitch. 
            Just a conversation about your systems.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
            <button className="px-12 py-5 bg-brand-orange text-white font-bold rounded-full hover:bg-brand-orange/90 transition-all transform hover:scale-105 flex items-center gap-3 shadow-xl shadow-brand-orange/20">
              <MessageSquare size={20} /> Tell Me About Your Problem
            </button>
            <button className="px-12 py-5 bg-brand-teal text-brand-cream font-bold rounded-full hover:bg-brand-teal/80 transition-all flex items-center gap-3">
              <Calendar size={20} /> Book a Quick Call
            </button>
          </div>
        </div>
      </Section>

      {/* Footer - Black Variant */}
      <footer className="bg-brand-black text-brand-cream py-20 px-6 md:px-12 border-t border-brand-teal/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
            <div className="col-span-1 md:col-span-1">
              <div className="text-2xl font-black mb-6">Digital <span className="text-brand-orange">Jaywalking</span></div>
              <p className="text-brand-cream/40 text-sm leading-relaxed max-w-xs">
                Premium digital products and automation systems designed for 
                uncompromising efficiency and sustainable growth.
              </p>
            </div>
            
            <div>
              <h5 className="font-bold mb-6 text-xs uppercase tracking-[0.3em] text-brand-cream/30">Quick Links</h5>
              <ul className="space-y-4 text-sm text-brand-cream/60">
                <li><a href="#" className="hover:text-brand-orange transition-colors">About Mission</a></li>
                <li><a href="#" className="hover:text-brand-orange transition-colors">Project Portfolio</a></li>
                <li><a href="#" className="hover:text-brand-orange transition-colors">Current Systems</a></li>
                <li><a href="#" className="hover:text-brand-orange transition-colors">Book Updates</a></li>
              </ul>
            </div>

            <div>
              <h5 className="font-bold mb-6 text-xs uppercase tracking-[0.3em] text-brand-cream/30">Support</h5>
              <ul className="space-y-4 text-sm text-brand-cream/60">
                <li><a href="#" className="hover:text-brand-orange transition-colors">Contact Support</a></li>
                <li><a href="#" className="hover:text-brand-orange transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-brand-orange transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-brand-orange transition-colors">Cookie Policy</a></li>
              </ul>
            </div>

            <div>
              <h5 className="font-bold mb-6 text-xs uppercase tracking-[0.3em] text-brand-cream/30">Newsletter</h5>
              <p className="text-xs text-brand-cream/40 mb-6">Get updates on new systems and tools.</p>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Email address" 
                  className="bg-brand-teal/30 border border-brand-teal/40 rounded-lg px-4 py-3 text-sm flex-grow focus:outline-none focus:border-brand-orange transition-colors text-brand-cream"
                />
                <button className="px-4 bg-brand-orange text-white rounded-lg hover:bg-brand-orange/80 transition-colors">
                  <Mail size={18} />
                </button>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-brand-teal/20 text-brand-cream/20 text-[10px] uppercase font-bold tracking-[0.4em]">
            <p>© 2024 DIGITAL JAYWALKING. ALL RIGHTS RESERVED.</p>
            <div className="flex gap-8 mt-6 md:mt-0">
              <a href="#" className="hover:text-brand-orange transition-all">YouTube</a>
              <a href="#" className="hover:text-brand-orange transition-all">LinkedIn</a>
              <a href="#" className="hover:text-brand-orange transition-all">X (Twitter)</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
