import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import TeamSection from './components/TeamSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <ServicesSection />
        <TeamSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;