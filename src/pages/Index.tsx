
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import PopularDestinations from '@/components/PopularDestinations';
import TripCreator from '@/components/TripCreator';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <PopularDestinations />
      <TripCreator />
      <Footer />
    </div>
  );
};

export default Index;
