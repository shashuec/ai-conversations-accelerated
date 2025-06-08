
import React from 'react';
import Hero from '@/components/Hero';
import Problem from '@/components/Problem';
import Solution from '@/components/Solution';
import HowItWorks from '@/components/HowItWorks';
import Features from '@/components/Features';
import WhyConversAI from '@/components/WhyConversAI';
import Testimonials from '@/components/Testimonials';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Problem />
      <Solution />
      <HowItWorks />
      <Features />
      <WhyConversAI />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
