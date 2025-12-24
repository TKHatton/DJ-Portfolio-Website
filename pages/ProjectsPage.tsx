
import React from 'react';
import Section from '../components/Section';
import ParallaxVideo from '../components/ParallaxVideo';
import ProjectGrid from '../components/ProjectGrid';
import SystemTracker from '../components/SystemTracker';
import BookSection from '../components/sections/BookSection';

const ProjectsPage: React.FC = () => {
  return (
    <>
      <Section subtitle="Portfolio" title="Projects I've Built" variant="cream">
        <p className="text-xl text-brand-black/60 mb-12 max-w-3xl">
          Custom automation systems, websites, and AI tools I've built for clients.
          Each project designed to save time and solve real business problems.
        </p>
        <ProjectGrid />
        <div className="mt-16 text-center">
          <button className="btn-angular px-10 py-5 border-2 border-brand-orange/30 bg-brand-cream hover:bg-brand-orange hover:text-white hover:border-brand-orange transition-all font-bold">
            View All Experiments
          </button>
        </div>
      </Section>

      <ParallaxVideo videoSrc="/videos/A_smooth_cinematic_1080p_202512232004.mp4" height="medium" text="Built To Last" />

      <Section subtitle="Lab Status" title="Systems Building Right Now" variant="teal">
        <p className="text-brand-cream/60 mb-12 max-w-2xl leading-relaxed">
          I'm actively building custom solutions for businesses that need automation, websites, and AI tools.
          Here's what I'm focusing on at the moment:
        </p>
        <SystemTracker />
      </Section>

      <Section subtitle="New Release" title="Coming Early 2026" variant="black">
        <BookSection />
      </Section>
    </>
  );
};

export default ProjectsPage;
