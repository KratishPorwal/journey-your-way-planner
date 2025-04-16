
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import DestinationsList from '@/components/DestinationsList';
import { Button } from '@/components/ui/button';
import { Compass } from 'lucide-react';

const Destinations = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="pt-24 pb-16 bg-gradient-to-r from-travel-blue/10 to-travel-coral/5">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-6">
            <Compass className="text-travel-blue w-8 h-8 mr-3" />
            <h1 className="text-4xl font-bold text-gray-800">Our Destinations</h1>
          </div>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-8">
            Explore our carefully curated collection of the world's most captivating destinations. 
            From hidden gems to popular hotspots, find your next adventure with detailed itineraries.
          </p>
          <div className="flex justify-center">
            <Button 
              className="bg-travel-blue hover:bg-travel-blue/90 text-white"
              onClick={() => document.getElementById('destinations-list')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Browse Destinations
            </Button>
          </div>
        </div>
      </div>
      
      <div id="destinations-list" className="py-12">
        <DestinationsList showItineraries={true} />
      </div>
      
      <Footer />
    </div>
  );
};

export default Destinations;
