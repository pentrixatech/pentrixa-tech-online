import React from 'react';
import Hero from '../components/home/Hero';
import CapabilityStrip from '../components/home/CapabilityStrip';
import IntroSection from '../components/home/IntroSection';
import ServicesPreview from '../components/home/ServicesPreview';
import SolutionsPreview from '../components/home/SolutionsPreview';
import FeaturedProjects from '../components/home/FeaturedProjects';
import TechnologySection from '../components/home/TechnologySection';
import WhyPentrixa from '../components/home/WhyPentrixa';
import ProcessPreview from '../components/home/ProcessPreview';
import TeamPreview from '../components/home/TeamPreview';
import InsightsPreview from '../components/home/InsightsPreview';
import FAQPreview from '../components/home/FAQPreview';
import FinalCTA from '../components/home/FinalCTA';

export default function Home() {
  return (
    <main className="page-wrapper home-page">
      <Hero />
      <CapabilityStrip />
      <IntroSection />
      <ServicesPreview />
      <SolutionsPreview />
      <FeaturedProjects />
      <TechnologySection />
      <WhyPentrixa />
      <ProcessPreview />
      <TeamPreview />
      <InsightsPreview />
      <FAQPreview />
      <FinalCTA />
    </main>
  );
}