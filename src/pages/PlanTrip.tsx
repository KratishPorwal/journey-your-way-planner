
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TripCreator from '@/components/TripCreator';
import { CalendarDays, Map, Compass, Star } from 'lucide-react';

const PlanTrip = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="pt-24 pb-12 bg-gradient-to-r from-travel-teal/10 to-travel-blue/5">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-6">
            <Map className="text-travel-blue w-8 h-8 mr-3" />
            <h1 className="text-4xl font-bold text-gray-800">Plan Your Perfect Trip</h1>
          </div>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            Create a personalized itinerary tailored to your travel style and preferences. 
            Build your dream vacation day by day with our interactive trip planner.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="bg-travel-blue/10 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Compass className="h-8 w-8 text-travel-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Choose Destinations</h3>
              <p className="text-gray-600">Select from our curated list of amazing destinations worldwide</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="bg-travel-coral/10 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <CalendarDays className="h-8 w-8 text-travel-coral" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Customize Itinerary</h3>
              <p className="text-gray-600">Create a day-by-day plan with activities you'll love</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="bg-yellow-400/10 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-yellow-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Save & Share</h3>
              <p className="text-gray-600">Download your personalized travel plan or share with friends</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="py-12 flex-grow">
        <TripCreator />
      </div>
      
      <Footer />
    </div>
  );
};

export default PlanTrip;
