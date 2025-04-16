
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import PopularDestinations from '@/components/PopularDestinations';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Map, Compass } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      
      <section className="py-20">
        <div className="container mx-auto px-4">
          <PopularDestinations showAll={false} />
          
          <div className="text-center mt-12">
            <Link to="/destinations">
              <Button 
                className="bg-travel-blue hover:bg-travel-blue/90 text-white"
              >
                View All Destinations
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Plan Your Journey</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Create your perfect itinerary with our interactive trip planner.
              Choose destinations, activities, and craft a personalized experience.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md max-w-md">
              <div className="flex items-center mb-4">
                <Compass className="h-6 w-6 text-travel-coral mr-2" />
                <h3 className="text-xl font-semibold">Discover Destinations</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Explore our collection of amazing destinations worldwide, complete with suggested itineraries, 
                local activities, and insider recommendations.
              </p>
              <Link to="/destinations">
                <Button 
                  variant="outline" 
                  className="w-full border-travel-coral text-travel-coral hover:bg-travel-coral hover:text-white"
                >
                  Browse Destinations
                </Button>
              </Link>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md max-w-md">
              <div className="flex items-center mb-4">
                <Map className="h-6 w-6 text-travel-blue mr-2" />
                <h3 className="text-xl font-semibold">Create Your Itinerary</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Build your trip day-by-day with activities that match your interests. 
                Select destinations, choose experiences, and craft a journey that's uniquely yours.
              </p>
              <Link to="/plan">
                <Button 
                  className="w-full bg-travel-blue hover:bg-travel-blue/90 text-white"
                >
                  Start Planning
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
