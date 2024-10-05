import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="relative bg-cover bg-center h-screen flex items-center" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1573497620053-ea5300f94f21?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")'}}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl mx-auto text-center text-white">
          <div className="mb-8 w-64 h-64 mx-auto">
            <svg enable-background="new 0 0 792 612" version="1.1" viewBox="0 0 792 612" xml:space="preserve" xmlns="http://www.w3.org/2000/svg">
              <style type="text/css">
                {`.st0{fill:#FFFFFF;}`}
              </style>
              {/* SVG paths here */}
            </svg>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">Counselling & Psychotherapy</h2>
          <p className="text-xl mb-8">Empowering you to overcome challenges and live a fulfilling life.</p>
          <a href="#contact" className="btn btn-secondary text-lg px-8 py-3">Book a Session</a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;