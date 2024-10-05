import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center">
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
            <img src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="Therapist office" className="rounded-lg shadow-md" />
          </div>
          <div className="w-full lg:w-1/2 lg:pl-12">
            <h2 className="text-3xl font-bold mb-6">About Careworks</h2>
            <p className="text-gray-700 mb-6">
              At Careworks Counselling and Psychotherapy, we believe in the power of compassionate care and evidence-based practices. Our team of experienced therapists is dedicated to helping you navigate life's challenges and achieve personal growth.
            </p>
            <p className="text-gray-700 mb-6">
              With a focus on creating a safe and supportive environment, we offer a range of therapeutic approaches tailored to meet your individual needs. Whether you're dealing with anxiety, depression, relationship issues, or seeking personal development, we're here to support you on your journey to wellness.
            </p>
            <a href="#contact" className="btn btn-primary">Get to Know Us</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;