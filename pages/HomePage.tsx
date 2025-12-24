
import React from 'react';
import HeroParallax from '../components/HeroParallax';
import HeroContent from '../components/HeroContent';
import ParallaxVideo from '../components/ParallaxVideo';
import Section from '../components/Section';
import BookSection from '../components/sections/BookSection';
import CTASection from '../components/sections/CTASection';

const HomePage: React.FC = () => {
  return (
    <>
      <HeroParallax />
      <HeroContent />

      <ParallaxVideo videoSrc="/videos/A_smooth_cinematic_1080p_202512232004.mp4" height="medium" text="Systems That Scale" />

      <Section subtitle="New Release" title="Coming Early 2026" variant="black">
        <BookSection />
      </Section>

      <CTASection />
    </>
  );
};

export default HomePage;
