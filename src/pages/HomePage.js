// src/pages/HomePage.jsx
import React from 'react';
import HeroSection from '../components/sections/HeroSection';
import FeaturesSection from '../components/sections/FeaturesSection';
import BenefitsSection from '../components/sections/BenefitsSection';
import ContactForm from '../components/layout/ContactForm';
import FooterSection from '../components/sections/FooterSection';

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <BenefitsSection />
      <ContactForm />
      <FooterSection />
    </>
  );
};

export default HomePage;