
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Calendar, MapPin, Search, Save } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import ActivityCard from './ActivityCard';
import DayPlanner from './DayPlanner';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';

// Sample destinations
const destinations = [
  { id: 'bali', name: 'Bali, Indonesia' },
  { id: 'dubai', name: 'Dubai, UAE' },
  { id: 'paris', name: 'Paris, France' },
  { id: 'kyoto', name: 'Kyoto, Japan' },
  { id: 'santorini', name: 'Santorini, Greece' },
  { id: 'marrakech', name: 'Marrakech, Morocco' }
];

// Activity data by destination with updated image URLs
const activitiesByDestination = {
  bali: [
    {
      id: 1,
      title: 'Guided Rainforest Hike',
      description: 'Explore the lush rainforest with an expert guide who will show you hidden spots and local wildlife.',
      imageUrl: 'https://images.unsplash.com/photo-1501555088652-021faa106b9b?w=400&h=300&fit=crop',
      duration: '3 hours',
      price: 45,
      rating: 4.8,
      category: 'Adventure'
    },
    {
      id: 2,
      title: 'Beach Sunset Yoga',
      description: 'Relax with sunset yoga on the beach, perfect for all skill levels with amazing ocean views.',
      imageUrl: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&h=300&fit=crop',
      duration: '1 hour',
      price: 25,
      rating: 4.6,
      category: 'Wellness'
    },
    {
      id: 3,
      title: 'Local Food Tour',
      description: 'Taste authentic local cuisine as you explore markets and restaurants with a culinary expert.',
      imageUrl: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop',
      duration: '4 hours',
      price: 65,
      rating: 4.9,
      category: 'Food & Drink'
    },
    {
      id: 4,
      title: 'Kayaking Adventure',
      description: 'Paddle through crystal clear waters and explore hidden coves along the coastline.',
      imageUrl: 'https://images.unsplash.com/photo-1544551763962-0c623066013b?w=400&h=300&fit=crop',
      duration: '2 hours',
      price: 40,
      rating: 4.7,
      category: 'Water Sports'
    },
    {
      id: 5,
      title: 'Cultural Museum Visit',
      description: 'Discover the rich history and traditions of the region through interactive exhibits.',
      imageUrl: 'https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?w=400&h=300&fit=crop',
      duration: '2 hours',
      price: 20,
      rating: 4.5,
      category: 'Culture'
    },
    {
      id: 6,
      title: 'Cycling City Tour',
      description: 'Explore the city on a bicycle with stops at major landmarks and hidden gems.',
      imageUrl: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=400&h=300&fit=crop',
      duration: '3 hours',
      price: 35,
      rating: 4.6,
      category: 'Sightseeing'
    }
  ],
  dubai: [
    {
      id: 7,
      title: 'Desert Safari',
      description: 'Experience thrilling dune bashing, camel rides, and a traditional Bedouin camp dinner.',
      imageUrl: 'https://images.unsplash.com/photo-1452022449339-59005948ec5b?w=400&h=300&fit=crop',
      duration: '6 hours',
      price: 85,
      rating: 4.8,
      category: 'Adventure'
    },
    {
      id: 8,
      title: 'Burj Khalifa Visit',
      description: 'Ascend to the observation deck of the world\'s tallest building for breathtaking views.',
      imageUrl: 'https://images.unsplash.com/photo-1582672060674-bc2bd808a8f5?w=400&h=300&fit=crop',
      duration: '2 hours',
      price: 40,
      rating: 4.7,
      category: 'Sightseeing'
    },
    {
      id: 9,
      title: 'Luxury Yacht Cruise',
      description: 'Sail along Dubai\'s stunning coastline on a private yacht with refreshments.',
      imageUrl: 'https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=400&h=300&fit=crop',
      duration: '3 hours',
      price: 120,
      rating: 4.9,
      category: 'Water Sports'
    },
    {
      id: 10,
      title: 'Gold Souk Shopping Tour',
      description: 'Explore the famous Gold Souk with a guide to help you find the best deals.',
      imageUrl: 'https://images.unsplash.com/photo-1582650625119-3a31a7c9abe5?w=400&h=300&fit=crop',
      duration: '3 hours',
      price: 30,
      rating: 4.5,
      category: 'Culture'
    }
  ],
  paris: [
    {
      id: 11,
      title: 'Eiffel Tower Skip-the-Line',
      description: 'Skip the long lines and enjoy priority access to this iconic Parisian landmark.',
      imageUrl: 'https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?w=400&h=300&fit=crop',
      duration: '2 hours',
      price: 65,
      rating: 4.7,
      category: 'Sightseeing'
    },
    {
      id: 12,
      title: 'Louvre Museum Guided Tour',
      description: 'Discover the masterpieces of the Louvre with an expert art historian guide.',
      imageUrl: 'https://images.unsplash.com/photo-1565799287995-de836be0cd63?w=400&h=300&fit=crop',
      duration: '3 hours',
      price: 70,
      rating: 4.8,
      category: 'Culture'
    },
    {
      id: 13,
      title: 'Seine River Dinner Cruise',
      description: 'Enjoy a gourmet dinner while cruising past illuminated Parisian landmarks.',
      imageUrl: 'https://images.unsplash.com/photo-1622831617330-bc3a4d516fcd?w=400&h=300&fit=crop',
      duration: '2.5 hours',
      price: 95,
      rating: 4.9,
      category: 'Food & Drink'
    }
  ],
  kyoto: [
    {
      id: 14,
      title: 'Fushimi Inari Shrine Tour',
      description: 'Walk through the iconic red torii gates and learn about this sacred Shinto shrine.',
      imageUrl: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=400&h=300&fit=crop',
      duration: '2.5 hours',
      price: 40,
      rating: 4.8,
      category: 'Culture'
    },
    {
      id: 15,
      title: 'Traditional Tea Ceremony',
      description: 'Experience the art of Japanese tea ceremony in an authentic setting.',
      imageUrl: 'https://images.unsplash.com/photo-1542556398-ad66a547be4e?w=400&h=300&fit=crop',
      duration: '1.5 hours',
      price: 55,
      rating: 4.9,
      category: 'Culture'
    },
    {
      id: 16,
      title: 'Bamboo Forest Walk',
      description: 'Stroll through the enchanting Arashiyama Bamboo Grove away from the crowds.',
      imageUrl: 'https://images.unsplash.com/photo-1573496799752-986e54949443?w=400&h=300&fit=crop',
      duration: '2 hours',
      price: 35,
      rating: 4.7,
      category: 'Adventure'
    }
  ],
  santorini: [
    {
      id: 17,
      title: 'Caldera Sunset Cruise',
      description: 'Sail around the volcanic islands and witness the famous Santorini sunset.',
      imageUrl: 'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=400&h=300&fit=crop',
      duration: '4 hours',
      price: 90,
      rating: 4.9,
      category: 'Water Sports'
    },
    {
      id: 18,
      title: 'Wine Tasting Tour',
      description: 'Sample unique wines from ancient vineyards with spectacular caldera views.',
      imageUrl: 'https://images.unsplash.com/photo-1566842937765-97e6733d1c74?w=400&h=300&fit=crop',
      duration: '3 hours',
      price: 75,
      rating: 4.8,
      category: 'Food & Drink'
    }
  ],
  marrakech: [
    {
      id: 19,
      title: 'Medina Walking Tour',
      description: 'Navigate the bustling souks and hidden corners of the ancient Medina with a local guide.',
      imageUrl: 'https://images.unsplash.com/photo-1597212618440-806262de4f6b?w=400&h=300&fit=crop',
      duration: '3 hours',
      price: 35,
      rating: 4.7,
      category: 'Culture'
    },
    {
      id: 20,
      title: 'Atlas Mountains Day Trip',
      description: 'Explore Berber villages and stunning landscapes in the nearby Atlas Mountains.',
      imageUrl: 'https://images.unsplash.com/photo-1489493887464-892be6d1daae?w=400&h=300&fit=crop',
      duration: '8 hours',
      price: 85,
      rating: 4.8,
      category: 'Adventure'
    }
  ]
};

const categories = ['All', 'Adventure', 'Wellness', 'Food & Drink', 'Water Sports', 'Culture', 'Sightseeing'];

const TripCreator = () => {
  const [numDays, setNumDays] = useState<number>(3);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [itinerary, setItinerary] = useState<{ day: number; activities: any[] }[]>([]);
  const [currentDay, setCurrentDay] = useState<number>(1);
  const [destination, setDestination] = useState<string>("bali");
  const [activities, setActivities] = useState(activitiesByDestination.bali);
  const { toast } = useToast();
  
  // Update activities when destination changes
  useEffect(() => {
    const destinationActivities = activitiesByDestination[destination as keyof typeof activitiesByDestination] || [];
    setActivities(destinationActivities);
    // Reset itinerary when destination changes
    setItinerary([]);
    initializeDays();
  }, [destination]);
  
  const filteredActivities = selectedCategory === 'All' 
    ? activities 
    : activities.filter(activity => activity.category === selectedCategory);

  const initializeDays = () => {
    if (itinerary.length !== numDays) {
      const newItinerary = [];
      for (let i = 1; i <= numDays; i++) {
        const existingDay = itinerary.find(item => item.day === i);
        if (existingDay) {
          newItinerary.push(existingDay);
        } else {
          newItinerary.push({ day: i, activities: [] });
        }
      }
      setItinerary(newItinerary);
      if (currentDay > numDays) {
        setCurrentDay(numDays);
      }
    }
  };

  React.useEffect(() => {
    initializeDays();
  }, [numDays]);

  const addActivityToDay = (activityId: number) => {
    const activity = activities.find(a => a.id === activityId);
    if (!activity) return;

    setItinerary(prev => {
      const updatedItinerary = [...prev];
      const dayIndex = updatedItinerary.findIndex(item => item.day === currentDay);
      
      if (dayIndex >= 0) {
        const isActivityAlreadyAdded = updatedItinerary[dayIndex].activities.some(a => a.id === activityId);
        
        if (!isActivityAlreadyAdded) {
          updatedItinerary[dayIndex] = {
            ...updatedItinerary[dayIndex],
            activities: [...updatedItinerary[dayIndex].activities, activity]
          };
        }
      }
      
      return updatedItinerary;
    });
  };

  const removeActivityFromDay = (activityId: number) => {
    setItinerary(prev => {
      const updatedItinerary = [...prev];
      const dayIndex = updatedItinerary.findIndex(item => item.day === currentDay);
      
      if (dayIndex >= 0) {
        updatedItinerary[dayIndex] = {
          ...updatedItinerary[dayIndex],
          activities: updatedItinerary[dayIndex].activities.filter(a => a.id !== activityId)
        };
      }
      
      return updatedItinerary;
    });
  };

  const saveItinerary = () => {
    const hasActivities = itinerary.some(day => day.activities.length > 0);
    
    if (!hasActivities) {
      toast({
        title: "Cannot save empty itinerary",
        description: "Please add at least one activity to your itinerary.",
        variant: "destructive"
      });
      return;
    }
    
    try {
      const id = `itinerary-${Date.now()}`;
      
      const savedItinerary = {
        id,
        destination: destinations.find(d => d.id === destination)?.name || destination,
        days: numDays,
        date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
        itinerary
      };
      
      const existingItineraries = JSON.parse(localStorage.getItem('savedItineraries') || '[]');
      
      const updatedItineraries = [savedItinerary, ...existingItineraries];
      
      localStorage.setItem('savedItineraries', JSON.stringify(updatedItineraries));
      
      toast({
        title: "Itinerary saved!",
        description: "Your travel plan has been saved successfully.",
      });
    } catch (error) {
      console.error('Error saving itinerary', error);
      toast({
        title: "Failed to save",
        description: "There was an error saving your itinerary. Please try again.",
        variant: "destructive"
      });
    }
  };

  return (
    <section id="plan" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Create Your Perfect Itinerary</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Build your trip day-by-day with activities that match your interests. Select destinations,
            choose activities, and craft a personalized journey that's uniquely yours.
          </p>
        </div>

        <div className="bg-gray-50 rounded-xl p-6 mb-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <h3 className="text-xl font-medium mb-4">Destination</h3>
              <div className="relative">
                <Select value={destination} onValueChange={setDestination}>
                  <SelectTrigger className="w-full pl-10">
                    <SelectValue placeholder="Where do you want to go?" />
                  </SelectTrigger>
                  <SelectContent>
                    {destinations.map((dest) => (
                      <SelectItem key={dest.id} value={dest.id}>{dest.name}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <MapPin className="absolute left-3 top-2.5 text-gray-400 h-5 w-5" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-4">Trip Length</h3>
              <div className="flex items-center">
                <Button 
                  variant="outline" 
                  className="px-3"
                  onClick={() => setNumDays(prev => Math.max(1, prev - 1))}
                >
                  -
                </Button>
                <div className="flex items-center mx-4">
                  <Calendar className="h-5 w-5 text-travel-blue mr-2" />
                  <span className="font-medium">{numDays} {numDays === 1 ? 'Day' : 'Days'}</span>
                </div>
                <Button 
                  variant="outline" 
                  className="px-3"
                  onClick={() => setNumDays(prev => Math.min(14, prev + 1))}
                >
                  +
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card>
              <CardContent className="p-6">
                <Tabs defaultValue="day1" className="w-full">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-semibold">Plan Your Activities</h3>
                    <TabsList>
                      {Array.from({ length: numDays }, (_, i) => (
                        <TabsTrigger 
                          key={`day${i+1}`} 
                          value={`day${i+1}`}
                          onClick={() => setCurrentDay(i+1)}
                          className={currentDay === i+1 ? "bg-travel-blue text-white" : ""}
                        >
                          Day {i+1}
                        </TabsTrigger>
                      ))}
                    </TabsList>
                  </div>

                  {Array.from({ length: numDays }, (_, i) => (
                    <TabsContent key={`day${i+1}`} value={`day${i+1}`} className="mt-0">
                      <div className="flex items-center space-x-2 mb-6 overflow-x-auto pb-2">
                        {categories.map((category) => (
                          <Button 
                            key={category}
                            variant={selectedCategory === category ? "default" : "outline"}
                            className={selectedCategory === category 
                              ? "bg-travel-blue text-white" 
                              : "text-gray-600"
                            }
                            size="sm"
                            onClick={() => setSelectedCategory(category)}
                          >
                            {category}
                          </Button>
                        ))}
                      </div>

                      <div className="relative mb-6">
                        <Input 
                          placeholder="Search activities..." 
                          className="pl-10" 
                        />
                        <Search className="absolute left-3 top-2.5 text-gray-400 h-5 w-5" />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {filteredActivities.length > 0 ? (
                          filteredActivities.map((activity) => (
                            <ActivityCard 
                              key={activity.id}
                              {...activity}
                              onAdd={addActivityToDay}
                            />
                          ))
                        ) : (
                          <p className="col-span-2 text-center py-10 text-gray-500">
                            No activities available for this category in {destinations.find(d => d.id === destination)?.name}.
                          </p>
                        )}
                      </div>
                    </TabsContent>
                  ))}
                </Tabs>
              </CardContent>
            </Card>
          </div>

          <div>
            <div className="bg-white p-6 rounded-lg shadow-md sticky top-24">
              <h3 className="text-xl font-semibold mb-6 flex items-center">
                <span className="bg-travel-blue/10 p-2 rounded-full mr-3">
                  <Calendar className="h-5 w-5 text-travel-blue" />
                </span>
                Your Itinerary
              </h3>

              {itinerary.map((day) => (
                <DayPlanner 
                  key={day.day}
                  day={day.day}
                  activities={day.activities}
                  onRemoveActivity={removeActivityFromDay}
                />
              ))}

              <div className="mt-6 flex space-x-2">
                <Button 
                  className="w-full bg-travel-blue hover:bg-travel-blue/90 text-white flex items-center justify-center"
                  onClick={saveItinerary}
                >
                  <Save className="h-4 w-4 mr-2" />
                  Save Itinerary
                </Button>
                <Button 
                  variant="outline"
                  className="bg-transparent text-travel-blue border-travel-blue hover:bg-travel-blue/5"
                  asChild
                >
                  <a href="/saved-itineraries">View Saved</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TripCreator;
