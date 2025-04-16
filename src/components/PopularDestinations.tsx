
import React from 'react';
import { Button } from '@/components/ui/button';
import { MapPin } from 'lucide-react';

// Destination data
const destinations = [
  {
    id: 1,
    name: 'Bali, Indonesia',
    description: 'Tropical paradise with stunning beaches, vibrant culture, and lush landscapes.',
    imageUrl: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=2938',
    activities: 80,
    rating: 4.8,
  },
  {
    id: 2,
    name: 'Kyoto, Japan',
    description: 'Ancient temples, traditional gardens, and cultural experiences in Japan\'s former capital.',
    imageUrl: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=2940',
    activities: 65,
    rating: 4.9,
  },
  {
    id: 3,
    name: 'Santorini, Greece',
    description: 'Iconic white-washed buildings with blue domes overlooking the crystal-clear Aegean Sea.',
    imageUrl: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=2874',
    activities: 50,
    rating: 4.7,
  },
  {
    id: 4,
    name: 'Costa Rica',
    description: 'Adventure paradise with rainforests, wildlife, and beautiful Pacific and Caribbean beaches.',
    imageUrl: 'https://images.unsplash.com/photo-1518509562904-e7ef99cdbc75?q=80&w=2787',
    activities: 95,
    rating: 4.6,
  }
];

const PopularDestinations = () => {
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {destinations.map((destination) => (
            <div 
              key={destination.id} 
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={destination.imageUrl} 
                  alt={destination.name} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <MapPin className="h-4 w-4 text-travel-coral mr-1" />
                  <h3 className="font-semibold text-lg">{destination.name}</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">{destination.description}</p>
                <div className="flex justify-between items-center mb-4">
                  <div className="text-sm text-gray-500">{destination.activities} activities</div>
                  <div className="flex items-center">
                    <span className="text-yellow-500">★</span>
                    <span className="ml-1 text-sm font-medium">{destination.rating}</span>
                  </div>
                </div>
                <Button 
                  variant="outline" 
                  className="w-full border-travel-blue text-travel-blue hover:bg-travel-blue hover:text-white"
                >
                  Explore
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            className="bg-travel-blue hover:bg-travel-blue/90 text-white"
          >
            View All Destinations
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PopularDestinations;
