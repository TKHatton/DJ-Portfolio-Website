
import React from 'react';
import Section from '../components/Section';
import ParallaxVideo from '../components/ParallaxVideo';
import MissionSection from '../components/sections/MissionSection';
import CTASection from '../components/sections/CTASection';

const AboutPage: React.FC = () => {
  return (
    <>
      <MissionSection />

      <ParallaxVideo videoSrc="/videos/A_smooth_cinematic_1080p_202512232004.mp4" height="medium" text="Designed For You" />

      <Section subtitle="The Process" title="How We Build Together" variant="teal">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { step: '01', title: 'We Talk', desc: "You tell me about the problem. What's taking too much time? What's broken? I listen and ask clarifying questions." },
            { step: '02', title: 'We Design', desc: "I propose a solution. We discuss what works best for your workflow. If it makes sense, we build it." },
            { step: '03', title: 'It Works', desc: "The system is live. You save time. I support it. Win-win." }
          ].map((item, i) => (
            <div key={i} className="relative group">
              <span className="text-7xl font-black text-brand-cream/5 absolute -top-8 -left-4 group-hover:text-brand-orange/10 transition-colors">
                {item.step}
              </span>
              <div className="relative z-10">
                <h4 className="text-2xl font-bold mb-4 text-brand-cream">{item.title}</h4>
                <p className="text-brand-cream/60 leading-relaxed italic">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <CTASection
        title="Let's Build Something That Works"
        description="Tell me about your problem. No pitch, just a conversation about building systems that make your life easier."
      />
    </>
  );
};

export default AboutPage;
