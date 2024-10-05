import React from 'react';
import { Heart, Phone, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-semibold mb-4">Careworks</h3>
            <p className="mb-4">Providing compassionate counselling and psychotherapy services.</p>
            <div className="flex items-center">
              <Heart className="text-blue-400 mr-2" />
              <span>Healing hearts, empowering minds</span>
            </div>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-blue-400">Home</a></li>
              <li><a href="#services" className="hover:text-blue-400">Services</a></li>
              <li><a href="#about" className="hover:text-blue-400">About Us</a></li>
              <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <div className="flex items-center mb-2">
              <Phone className="mr-2" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center">
              <Mail className="mr-2" />
              <span>info@careworks.com</span>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p>&copy; 2023 Careworks Counselling and Psychotherapy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;