
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import DestinationsList from './DestinationsList';

const PopularDestinations = ({ showAll = true }) => {
  console.log('PopularDestinations component mounted');
  
  return (
    <section id="destinations" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Popular Destinations</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover amazing destinations for your next adventure. Each location offers unique experiences 
            that can be customized to create your perfect trip.
          </p>
        </div>

        <DestinationsList showItineraries={false} />

        {showAll && (
          <div className="text-center mt-12">
            <Link to="/destinations">
              <Button className="bg-travel-blue hover:bg-travel-blue/90 text-white">
                View All Destinations
              </Button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default PopularDestinations;
