import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
        <div className="flex flex-wrap -mx-4">
          <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
            <form className="bg-white rounded-lg shadow-md p-8">
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
                <input type="text" id="name" className="w-full px-3 py-2 border rounded-md" placeholder="Your Name" />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
                <input type="email" id="email" className="w-full px-3 py-2 border rounded-md" placeholder="Your Email" />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message</label>
                <textarea id="message" rows={4} className="w-full px-3 py-2 border rounded-md" placeholder="Your Message"></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-full">Send Message</button>
            </form>
          </div>
          <div className="w-full lg:w-1/2 px-4">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
              <div className="flex items-start mb-4">
                <Phone className="text-blue-500 mr-4 mt-1" />
                <div>
                  <h4 className="font-bold">Phone</h4>
                  <p>+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-start mb-4">
                <Mail className="text-blue-500 mr-4 mt-1" />
                <div>
                  <h4 className="font-bold">Email</h4>
                  <p>info@careworks.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="text-blue-500 mr-4 mt-1" />
                <div>
                  <h4 className="font-bold">Address</h4>
                  <p>123 Therapy Street, Wellness City, ST 12345</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;