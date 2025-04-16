
import React from 'react';
import { Button } from '@/components/ui/button';
import { MapPin, Calendar, Compass } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center parallax-bg" 
         style={{ 
           backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url("https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070")',
         }}>
      <div className="container mx-auto px-4 py-20 mt-16">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Your Journey, Your Way
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8">
            Create custom travel experiences tailored to your interests, timeline, and budget.
            Plan your perfect trip with complete freedom and flexibility.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Button 
              size="lg" 
              className="bg-travel-blue hover:bg-travel-blue/90 text-white"
              onClick={() => document.getElementById('plan')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Start Planning
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-white/10 text-white border-white hover:bg-white/20"
              onClick={() => document.getElementById('destinations')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Destinations
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20">
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="bg-travel-blue/20 p-3 rounded-full w-fit mb-4">
              <MapPin className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Choose Your Destinations</h3>
            <p className="text-white/80">Select from popular destinations or discover hidden gems for your perfect journey.</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="bg-travel-teal/20 p-3 rounded-full w-fit mb-4">
              <Calendar className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Customize Day by Day</h3>
            <p className="text-white/80">Build your perfect itinerary with flexibility to plan each day exactly how you want it.</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="bg-travel-coral/20 p-3 rounded-full w-fit mb-4">
              <Compass className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Personalized Experiences</h3>
            <p className="text-white/80">Choose activities and accommodations that match your interests and travel style.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
