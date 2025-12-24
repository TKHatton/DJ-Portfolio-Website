
import React from 'react';
import { CheckCircle } from 'lucide-react';
import Section from '../Section';

const MissionSection: React.FC = () => {
  return (
    <Section subtitle="The Mission" title="Building Systems That Work" variant="black">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <p className="text-xl md:text-2xl text-brand-cream/90 leading-relaxed font-light">
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
                <div className="bg-brand-orange/30 p-1 rounded-full">
                  <CheckCircle className="text-brand-orange" size={16} />
                </div>
                <span className="text-sm font-semibold text-brand-cream/80">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="aspect-square bg-gradient-to-br from-brand-orange/20 to-brand-peach/20 rounded-[3rem] p-1 transition-all duration-500 hover:scale-105 hover:from-brand-orange/40 hover:to-brand-peach/40 shadow-[0_0_60px_-10px_rgba(240,104,54,0.5)] hover:shadow-[0_0_100px_0px_rgba(240,104,54,0.8)]">
            <div className="w-full h-full rounded-[2.8rem] overflow-hidden shadow-2xl">
              <img
                src="/images/Logo Option 6.jpg"
                alt="Digital Jaywalking Logo"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default MissionSection;
