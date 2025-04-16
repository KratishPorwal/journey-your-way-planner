
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="font-bold text-2xl text-travel-blue">
          Journey<span className="text-travel-coral">Your</span>Way
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8 items-center">
          <Link to="/" className="text-gray-700 hover:text-travel-blue transition-colors">Home</Link>
          <Link to="/#destinations" className="text-gray-700 hover:text-travel-blue transition-colors">Destinations</Link>
          <Link to="/#plan" className="text-gray-700 hover:text-travel-blue transition-colors">Plan Your Trip</Link>
          <Link to="/about" className="text-gray-700 hover:text-travel-blue transition-colors">About Us</Link>
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
            <Link to="/" className="text-gray-700 hover:text-travel-blue py-2 transition-colors" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link to="/#destinations" className="text-gray-700 hover:text-travel-blue py-2 transition-colors" onClick={() => setIsMenuOpen(false)}>Destinations</Link>
            <Link to="/#plan" className="text-gray-700 hover:text-travel-blue py-2 transition-colors" onClick={() => setIsMenuOpen(false)}>Plan Your Trip</Link>
            <Link to="/about" className="text-gray-700 hover:text-travel-blue py-2 transition-colors" onClick={() => setIsMenuOpen(false)}>About Us</Link>
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
