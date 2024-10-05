import React from 'react';
import { Users, Brain, Heart, Smile } from 'lucide-react';

const services = [
  { icon: Users, title: 'Individual Therapy', description: 'One-on-one sessions tailored to your unique needs.' },
  { icon: Brain, title: 'Cognitive Behavioral Therapy', description: 'Techniques to change negative thought patterns.' },
  { icon: Heart, title: 'Couples Counseling', description: 'Strengthen your relationship and improve communication.' },
  { icon: Smile, title: 'Stress Management', description: 'Learn effective strategies to cope with daily stressors.' },
];

const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <service.icon className="text-blue-500 w-12 h-12 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;