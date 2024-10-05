import React from 'react';
import { Heart } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center">
          <Heart className="text-blue-500 mr-2" />
          <h1 className="text-3xl font-bold text-gray-800" style={{ fontFamily: 'Staatliches, cursive' }}>Careworks</h1>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#home" className="text-gray-600 hover:text-blue-500">Home</a></li>
            <li><a href="#services" className="text-gray-600 hover:text-blue-500">Services</a></li>
            <li><a href="#team" className="text-gray-600 hover:text-blue-500">Our Team</a></li>
            <li><a href="#about" className="text-gray-600 hover:text-blue-500">About</a></li>
            <li><a href="#contact" className="text-gray-600 hover:text-blue-500">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;