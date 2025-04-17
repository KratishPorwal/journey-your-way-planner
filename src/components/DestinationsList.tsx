
import React from 'react';
import { Button } from '@/components/ui/button';
import { MapPin, Calendar, Utensils, Mountain, Waves, Landmark, Camera } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const destinations = [
  {
    id: 1,
    name: 'Bali, Indonesia',
    description: 'Tropical paradise with stunning beaches, vibrant culture, and lush landscapes.',
    imageUrl: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=2938',
    activities: 80,
    rating: 4.8,
    itinerary: [
      {
        day: 1,
        title: 'Ubud Cultural Immersion',
        activities: [
          { name: 'Morning yoga session', icon: <Mountain className="h-4 w-4" />, time: '07:00 - 08:30' },
          { name: 'Visit Sacred Monkey Forest', icon: <Mountain className="h-4 w-4" />, time: '10:00 - 12:00' },
          { name: 'Traditional Balinese lunch', icon: <Utensils className="h-4 w-4" />, time: '12:30 - 14:00' },
          { name: 'Explore Ubud Art Market', icon: <Camera className="h-4 w-4" />, time: '15:00 - 17:00' },
          { name: 'Cultural dance performance', icon: <Landmark className="h-4 w-4" />, time: '19:00 - 20:30' }
        ]
      },
      {
        day: 2,
        title: 'Beach & Temple Tour',
        activities: [
          { name: 'Visit Uluwatu Temple', icon: <Landmark className="h-4 w-4" />, time: '09:00 - 11:00' },
          { name: 'Seafood lunch at Jimbaran Bay', icon: <Utensils className="h-4 w-4" />, time: '12:00 - 13:30' },
          { name: 'Relax at Padang Padang Beach', icon: <Waves className="h-4 w-4" />, time: '14:00 - 17:00' },
          { name: 'Sunset dinner cruise', icon: <Utensils className="h-4 w-4" />, time: '18:00 - 21:00' }
        ]
      },
      {
        day: 3,
        title: 'Nature & Adventure',
        activities: [
          { name: 'Tegallalang Rice Terraces', icon: <Mountain className="h-4 w-4" />, time: '08:00 - 10:00' },
          { name: 'Visit coffee plantation', icon: <Mountain className="h-4 w-4" />, time: '10:30 - 12:00' },
          { name: 'Lunch with valley views', icon: <Utensils className="h-4 w-4" />, time: '12:30 - 14:00' },
          { name: 'Bali Swing adventure', icon: <Mountain className="h-4 w-4" />, time: '14:30 - 16:30' },
          { name: 'Balinese massage', icon: <Mountain className="h-4 w-4" />, time: '17:30 - 19:00' }
        ]
      }
    ]
  },
  {
    id: 2,
    name: 'Kyoto, Japan',
    description: 'Ancient temples, traditional gardens, and cultural experiences in Japan\'s former capital.',
    imageUrl: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=2940',
    activities: 65,
    rating: 4.9,
    itinerary: [
      {
        day: 1,
        title: 'Historic Temples & Shrines',
        activities: [
          { name: 'Visit Fushimi Inari Shrine', icon: <Landmark className="h-4 w-4" />, time: '08:00 - 10:30' },
          { name: 'Traditional tea ceremony', icon: <Utensils className="h-4 w-4" />, time: '11:00 - 12:30' },
          { name: 'Lunch at local restaurant', icon: <Utensils className="h-4 w-4" />, time: '13:00 - 14:30' },
          { name: 'Explore Kiyomizu-dera Temple', icon: <Landmark className="h-4 w-4" />, time: '15:00 - 17:30' },
          { name: 'Dinner in Gion district', icon: <Utensils className="h-4 w-4" />, time: '18:30 - 20:30' }
        ]
      },
      {
        day: 2,
        title: 'Gardens & Culture',
        activities: [
          { name: 'Arashiyama Bamboo Grove', icon: <Mountain className="h-4 w-4" />, time: '08:30 - 10:30' },
          { name: 'Visit Tenryu-ji Temple', icon: <Landmark className="h-4 w-4" />, time: '11:00 - 12:30' },
          { name: 'Lunch with garden views', icon: <Utensils className="h-4 w-4" />, time: '13:00 - 14:30' },
          { name: 'Kimono rental experience', icon: <Camera className="h-4 w-4" />, time: '15:00 - 17:00' },
          { name: 'Evening stroll in Pontocho', icon: <Camera className="h-4 w-4" />, time: '18:00 - 20:00' }
        ]
      },
      {
        day: 3,
        title: 'Imperial History',
        activities: [
          { name: 'Kyoto Imperial Palace tour', icon: <Landmark className="h-4 w-4" />, time: '09:00 - 11:00' },
          { name: 'Visit Nijo Castle', icon: <Landmark className="h-4 w-4" />, time: '11:30 - 13:30' },
          { name: 'Traditional Kaiseki lunch', icon: <Utensils className="h-4 w-4" />, time: '14:00 - 15:30' },
          { name: 'Shopping at Nishiki Market', icon: <Camera className="h-4 w-4" />, time: '16:00 - 18:00' },
          { name: 'Geisha performance', icon: <Landmark className="h-4 w-4" />, time: '19:00 - 21:00' }
        ]
      }
    ]
  },
  {
    id: 3,
    name: 'Santorini, Greece',
    description: 'Iconic white-washed buildings with blue domes overlooking the crystal-clear Aegean Sea.',
    imageUrl: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=2874',
    activities: 50,
    rating: 4.7,
    itinerary: [
      {
        day: 1,
        title: 'Oia Exploration',
        activities: [
          { name: 'Morning walk in Oia', icon: <Camera className="h-4 w-4" />, time: '08:00 - 10:00' },
          { name: 'Visit Oia Castle', icon: <Landmark className="h-4 w-4" />, time: '10:30 - 12:00' },
          { name: 'Lunch with caldera views', icon: <Utensils className="h-4 w-4" />, time: '12:30 - 14:00' },
          { name: 'Shopping in Oia', icon: <Camera className="h-4 w-4" />, time: '15:00 - 17:00' },
          { name: 'Famous Oia sunset', icon: <Camera className="h-4 w-4" />, time: '18:30 - 20:00' }
        ]
      },
      {
        day: 2,
        title: 'Sea & Volcano',
        activities: [
          { name: 'Catamaran cruise', icon: <Waves className="h-4 w-4" />, time: '09:00 - 14:00' },
          { name: 'Swimming at Red Beach', icon: <Waves className="h-4 w-4" />, time: '14:30 - 16:00' },
          { name: 'Visit hot springs', icon: <Waves className="h-4 w-4" />, time: '16:30 - 17:30' },
          { name: 'Seafood dinner in Amoudi Bay', icon: <Utensils className="h-4 w-4" />, time: '19:00 - 21:00' }
        ]
      },
      {
        day: 3,
        title: 'History & Wine',
        activities: [
          { name: 'Visit Ancient Thera', icon: <Landmark className="h-4 w-4" />, time: '09:00 - 11:30' },
          { name: 'Lunch in Pyrgos village', icon: <Utensils className="h-4 w-4" />, time: '12:00 - 13:30' },
          { name: 'Wine tasting tour', icon: <Utensils className="h-4 w-4" />, time: '14:30 - 17:30' },
          { name: 'Dinner in Fira', icon: <Utensils className="h-4 w-4" />, time: '19:00 - 21:00' }
        ]
      }
    ]
  },
  {
    id: 4,
    name: 'Dubai, UAE',
    description: 'A futuristic metropolis blending ultramodern architecture, luxury shopping, and vibrant desert landscapes.',
    imageUrl: 'https://images.unsplash.com/photo-1486718448742-163732cd1544?q=80&w=4392',
    activities: 95,
    rating: 4.6,
    itinerary: [
      {
        day: 1,
        title: 'Modern Marvels',
        activities: [
          { name: 'Visit Burj Khalifa', icon: <Landmark className="h-4 w-4" />, time: '09:00 - 11:00' },
          { name: 'Dubai Mall shopping', icon: <Camera className="h-4 w-4" />, time: '11:30 - 13:30' },
          { name: 'Lunch at Dubai Mall', icon: <Utensils className="h-4 w-4" />, time: '14:00 - 15:30' },
          { name: 'Dubai Aquarium & Underwater Zoo', icon: <Waves className="h-4 w-4" />, time: '16:00 - 18:00' },
          { name: 'Dubai Fountain show', icon: <Camera className="h-4 w-4" />, time: '19:00 - 20:00' }
        ]
      },
      {
        day: 2,
        title: 'Desert Adventure',
        activities: [
          { name: 'Morning at La Mer Beach', icon: <Waves className="h-4 w-4" />, time: '08:00 - 11:00' },
          { name: 'Lunch at beachside restaurant', icon: <Utensils className="h-4 w-4" />, time: '12:00 - 13:30' },
          { name: 'Desert safari experience', icon: <Mountain className="h-4 w-4" />, time: '15:00 - 21:00' },
          { name: 'BBQ dinner in desert camp', icon: <Utensils className="h-4 w-4" />, time: '19:00 - 21:00' }
        ]
      },
      {
        day: 3,
        title: 'Cultural Dubai',
        activities: [
          { name: 'Al Fahidi Historical District', icon: <Landmark className="h-4 w-4" />, time: '09:00 - 11:00' },
          { name: 'Dubai Museum tour', icon: <Landmark className="h-4 w-4" />, time: '11:30 - 13:00' },
          { name: 'Traditional lunch in Al Seef', icon: <Utensils className="h-4 w-4" />, time: '13:30 - 15:00' },
          { name: 'Abra ride on Dubai Creek', icon: <Waves className="h-4 w-4" />, time: '15:30 - 16:30' },
          { name: 'Shopping at Gold & Spice Souks', icon: <Camera className="h-4 w-4" />, time: '17:00 - 19:00' }
        ]
      }
    ]
  },
  {
    id: 5,
    name: 'Paris, France',
    description: 'The City of Light offers iconic landmarks, world-class cuisine, and unparalleled cultural experiences.',
    imageUrl: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2073',
    activities: 105,
    rating: 4.8,
    itinerary: [
      {
        day: 1,
        title: 'Classic Paris',
        activities: [
          { name: 'Visit Eiffel Tower', icon: <Landmark className="h-4 w-4" />, time: '09:00 - 11:30' },
          { name: 'Seine River cruise', icon: <Waves className="h-4 w-4" />, time: '12:00 - 13:30' },
          { name: 'Lunch at Parisian café', icon: <Utensils className="h-4 w-4" />, time: '14:00 - 15:30' },
          { name: 'Explore Champs-Élysées', icon: <Camera className="h-4 w-4" />, time: '16:00 - 18:30' },
          { name: 'Evening at Arc de Triomphe', icon: <Landmark className="h-4 w-4" />, time: '19:00 - 20:30' }
        ]
      },
      {
        day: 2,
        title: 'Art & Culture',
        activities: [
          { name: 'Louvre Museum', icon: <Landmark className="h-4 w-4" />, time: '09:00 - 12:30' },
          { name: 'Lunch in Le Marais', icon: <Utensils className="h-4 w-4" />, time: '13:00 - 14:30' },
          { name: 'Centre Pompidou', icon: <Landmark className="h-4 w-4" />, time: '15:00 - 17:00' },
          { name: 'Dinner in Latin Quarter', icon: <Utensils className="h-4 w-4" />, time: '19:00 - 21:00' }
        ]
      },
      {
        day: 3,
        title: 'Hidden Gems',
        activities: [
          { name: 'Montmartre walking tour', icon: <Camera className="h-4 w-4" />, time: '09:00 - 11:30' },
          { name: 'Visit Sacré-Cœur', icon: <Landmark className="h-4 w-4" />, time: '12:00 - 13:00' },
          { name: 'Lunch in Montmartre', icon: <Utensils className="h-4 w-4" />, time: '13:30 - 15:00' },
          { name: 'Luxembourg Gardens', icon: <Mountain className="h-4 w-4" />, time: '15:30 - 17:00' },
          { name: 'Fine dining experience', icon: <Utensils className="h-4 w-4" />, time: '19:30 - 22:00' }
        ]
      }
    ]
  },
  {
    id: 6,
    name: 'Marrakech, Morocco',
    description: 'A vibrant city with colorful markets, historic palaces, and a rich blend of cultures and traditions.',
    imageUrl: 'https://images.unsplash.com/photo-1466442929976-97f336a657be?q=80&w=2834', // Changed image URL
    activities: 70,
    rating: 4.5,
    itinerary: [
      {
        day: 1,
        title: 'Medina Exploration',
        activities: [
          { name: 'Visit Jemaa el-Fnaa', icon: <Camera className="h-4 w-4" />, time: '09:00 - 11:00' },
          { name: 'Explore the souks', icon: <Camera className="h-4 w-4" />, time: '11:30 - 13:30' },
          { name: 'Traditional Moroccan lunch', icon: <Utensils className="h-4 w-4" />, time: '14:00 - 15:30' },
          { name: 'Bahia Palace tour', icon: <Landmark className="h-4 w-4" />, time: '16:00 - 17:30' },
          { name: 'Dinner with local entertainment', icon: <Utensils className="h-4 w-4" />, time: '19:00 - 21:30' }
        ]
      },
      {
        day: 2,
        title: 'Gardens & Culture',
        activities: [
          { name: 'Majorelle Garden', icon: <Mountain className="h-4 w-4" />, time: '09:00 - 11:00' },
          { name: 'Yves Saint Laurent Museum', icon: <Landmark className="h-4 w-4" />, time: '11:30 - 13:00' },
          { name: 'Lunch at garden café', icon: <Utensils className="h-4 w-4" />, time: '13:30 - 15:00' },
          { name: 'Le Jardin Secret', icon: <Mountain className="h-4 w-4" />, time: '15:30 - 17:00' },
          { name: 'Cooking class and dinner', icon: <Utensils className="h-4 w-4" />, time: '18:00 - 21:00' }
        ]
      },
      {
        day: 3,
        title: 'Desert Adventure',
        activities: [
          { name: 'Day trip to Atlas Mountains', icon: <Mountain className="h-4 w-4" />, time: '08:00 - 16:00' },
          { name: 'Visit Berber village', icon: <Landmark className="h-4 w-4" />, time: '10:30 - 12:00' },
          { name: 'Lunch with mountain views', icon: <Utensils className="h-4 w-4" />, time: '12:30 - 14:00' },
          { name: 'Camel ride experience', icon: <Mountain className="h-4 w-4" />, time: '14:30 - 16:00' },
          { name: 'Hammam spa treatment', icon: <Waves className="h-4 w-4" />, time: '18:00 - 19:30' }
        ]
      }
    ]
  }
];

const DestinationsList = ({ showItineraries = false }) => {
  return (
    <div className="container mx-auto px-4">
      {!showItineraries && (
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Explore Destinations</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover amazing destinations for your next adventure. Each location offers unique experiences 
            that can be customized to create your perfect trip.
          </p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
              
              {showItineraries && (
                <Tabs defaultValue="day1" className="mt-4 mb-6">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="day1">Day 1</TabsTrigger>
                    <TabsTrigger value="day2">Day 2</TabsTrigger>
                    <TabsTrigger value="day3">Day 3</TabsTrigger>
                  </TabsList>
                  {destination.itinerary.map((day, index) => (
                    <TabsContent key={`day${index+1}`} value={`day${index+1}`} className="mt-2">
                      <div className="border rounded-md p-3">
                        <h4 className="font-medium text-center mb-2">{day.title}</h4>
                        <div className="space-y-2">
                          {day.activities.map((activity, actIndex) => (
                            <div key={actIndex} className="flex items-start text-xs">
                              <div className="bg-gray-100 p-1 rounded mr-2">
                                {activity.icon}
                              </div>
                              <div className="flex-1">
                                <p className="font-medium">{activity.name}</p>
                                <p className="text-gray-500">{activity.time}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </TabsContent>
                  ))}
                </Tabs>
              )}
              
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
    </div>
  );
};

export default DestinationsList;
