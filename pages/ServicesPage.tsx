
import React from 'react';
import { ArrowRight } from 'lucide-react';
import Section from '../components/Section';
import ParallaxVideo from '../components/ParallaxVideo';
import ServiceGrid from '../components/ServiceGrid';
import FaqAccordion from '../components/FaqAccordion';
import CTASection from '../components/sections/CTASection';

const ServicesPage: React.FC = () => {
  return (
    <>
      {/* Hero Section with Value Prop */}
      <section className="bg-brand-black text-brand-cream py-32 px-6 mt-20">
        <div className="max-w-5xl mx-auto">
          <div className="max-w-3xl glass-card p-12 md:p-16 rounded-[3rem] border-brand-cream/10 shadow-2xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-black mb-8 text-brand-cream leading-tight">
              Stop Wasting Time on <span className="italic text-brand-orange underline decoration-brand-peach/30 decoration-4 underline-offset-8">Manual Work</span>
            </h1>
            <p className="text-xl md:text-2xl text-brand-cream/70 leading-relaxed mb-10">
              I build custom systems that automate your workflow, save you hours every week,
              and help you focus on what actually matters.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-angular px-10 py-5 bg-brand-orange text-white font-bold hover:bg-brand-orange/90 transition-all flex items-center justify-center gap-3 shadow-xl shadow-brand-orange/20">
                <ArrowRight size={20} /> Let's Build It
              </button>
              <button className="btn-angular px-10 py-5 bg-brand-black border-2 border-brand-orange/50 text-brand-cream font-bold hover:bg-brand-orange hover:border-brand-orange transition-all flex items-center justify-center">
                See My Work
              </button>
            </div>
          </div>
        </div>
      </section>

      <Section subtitle="Capabilities" title="What I Build For You" variant="teal">
        <p className="text-xl text-brand-cream/60 mb-12 max-w-3xl leading-relaxed">
          Custom solutions designed to save time, automate workflows, and scale your business.
          From automation systems to AI-powered tools, every project is built for real results.
        </p>
        <ServiceGrid />
      </Section>

      <ParallaxVideo videoSrc="/videos/A_smooth_cinematic_1080p_202512232004.mp4" height="medium" text="Real Solutions" />

      <Section subtitle="The Process" title="How We Build Together" variant="cream">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { step: '01', title: 'We Talk', desc: "You tell me about the problem. What's taking too much time? What's broken? I listen and ask clarifying questions." },
            { step: '02', title: 'We Design', desc: "I propose a solution. We discuss what works best for your workflow. If it makes sense, we build it." },
            { step: '03', title: 'It Works', desc: "The system is live. You save time. I support it. Win-win." }
          ].map((item, i) => (
            <div key={i} className="relative group">
              <span className="text-7xl font-black text-brand-black/5 absolute -top-8 -left-4 group-hover:text-brand-orange/10 transition-colors">
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

      <Section subtitle="Clarification" title="Common Questions" variant="teal">
        <FaqAccordion />
      </Section>

      <CTASection />
    </>
  );
};

export default ServicesPage;
