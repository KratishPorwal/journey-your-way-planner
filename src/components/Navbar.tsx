
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="/" className="font-bold text-2xl text-travel-blue">
          Journey<span className="text-travel-coral">Your</span>Way
        </a>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8 items-center">
          <a href="#" className="text-gray-700 hover:text-travel-blue transition-colors">Home</a>
          <a href="#destinations" className="text-gray-700 hover:text-travel-blue transition-colors">Destinations</a>
          <a href="#plan" className="text-gray-700 hover:text-travel-blue transition-colors">Plan Your Trip</a>
          <a href="#" className="text-gray-700 hover:text-travel-blue transition-colors">About Us</a>
          <Button className="bg-travel-blue hover:bg-travel-blue/90 text-white">
            Get Started
          </Button>
        </div>

        {/* Mobile Navigation Toggle */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white px-4 py-5 shadow-md animate-fade-in">
          <div className="flex flex-col space-y-4">
            <a href="#" className="text-gray-700 hover:text-travel-blue py-2 transition-colors">Home</a>
            <a href="#destinations" className="text-gray-700 hover:text-travel-blue py-2 transition-colors">Destinations</a>
            <a href="#plan" className="text-gray-700 hover:text-travel-blue py-2 transition-colors">Plan Your Trip</a>
            <a href="#" className="text-gray-700 hover:text-travel-blue py-2 transition-colors">About Us</a>
            <Button className="bg-travel-blue hover:bg-travel-blue/90 text-white w-full">
              Get Started
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
