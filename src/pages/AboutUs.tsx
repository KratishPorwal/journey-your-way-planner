
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { MapPin, Globe, Calendar, Users } from 'lucide-react';

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16">
        <section className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-bold text-travel-blue mb-6">About JourneyYourWay</h1>
            <p className="text-lg text-gray-700 mb-8">
              Your journey, your way - we make travel planning personal, flexible, and enjoyable.
            </p>

            <div className="relative mb-12">
              <img 
                src="https://images.unsplash.com/photo-1522199710521-72d69614c702?q=80&w=3272" 
                alt="Our team" 
                className="w-full h-80 object-cover rounded-lg shadow-md"
              />
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/60 to-transparent p-6 rounded-b-lg">
                <h2 className="text-white text-2xl font-semibold">Our passionate team of travelers</h2>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-travel-blue mb-4">Our Story</h2>
            <p className="text-gray-700 mb-6">
              JourneyYourWay was born from a simple idea: travel should be personal. We believe that the best 
              trips are the ones tailored to your unique interests, pace, and style. Founded in 2023 by a group 
              of passionate travelers frustrated with rigid, pre-packaged tours, we set out to create a platform 
              that puts you in control of your travel experience.
            </p>
            
            <p className="text-gray-700 mb-8">
              Today, we help thousands of travelers create custom itineraries that reflect their travel dreams. 
              Our team combines technology with personalized service to make travel planning seamless, inspiring, 
              and fun.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="flex items-center text-xl font-semibold text-travel-blue mb-3">
                  <Globe className="mr-2 h-5 w-5 text-travel-coral" />
                  Our Mission
                </h3>
                <p className="text-gray-700">
                  To empower travelers to create meaningful journeys on their own terms, connecting them with 
                  authentic experiences that match their unique preferences and interests.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="flex items-center text-xl font-semibold text-travel-blue mb-3">
                  <Users className="mr-2 h-5 w-5 text-travel-coral" />
                  Our Values
                </h3>
                <p className="text-gray-700">
                  We value authenticity, flexibility, and sustainability. We believe in responsible travel that 
                  respects local cultures and environments while creating unforgettable experiences.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-travel-blue mb-4">What Makes Us Different</h2>
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="bg-travel-coral/10 p-2 rounded-full mr-4">
                  <MapPin className="h-5 w-5 text-travel-coral" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Fully Customizable Itineraries</h3>
                  <p className="text-gray-700">Mix and match destinations, activities, and accommodations to create your perfect trip.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-travel-coral/10 p-2 rounded-full mr-4">
                  <Calendar className="h-5 w-5 text-travel-coral" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Day-by-Day Planning</h3>
                  <p className="text-gray-700">Build your journey one day at a time, with flexible scheduling that works for you.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-travel-coral/10 p-2 rounded-full mr-4">
                  <Globe className="h-5 w-5 text-travel-coral" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Local Expertise</h3>
                  <p className="text-gray-700">Access insider tips and hidden gems from our network of local experts around the world.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default AboutUs;
