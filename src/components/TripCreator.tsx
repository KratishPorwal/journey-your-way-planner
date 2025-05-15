
import React, { useState } from 'react';
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

// Sample activity data
const activities = [
  {
    id: 1,
    title: 'Guided Rainforest Hike',
    description: 'Explore the lush rainforest with an expert guide who will show you hidden spots and local wildlife.',
    imageUrl: 'https://images.unsplash.com/photo-1501555088652-021faa106b9b?q=80&w=2073',
    duration: '3 hours',
    price: 45,
    rating: 4.8,
    category: 'Adventure'
  },
  {
    id: 2,
    title: 'Beach Sunset Yoga',
    description: 'Relax with sunset yoga on the beach, perfect for all skill levels with amazing ocean views.',
    imageUrl: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=2070',
    duration: '1 hour',
    price: 25,
    rating: 4.6,
    category: 'Wellness'
  },
  {
    id: 3,
    title: 'Local Food Tour',
    description: 'Taste authentic local cuisine as you explore markets and restaurants with a culinary expert.',
    imageUrl: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070',
    duration: '4 hours',
    price: 65,
    rating: 4.9,
    category: 'Food & Drink'
  },
  {
    id: 4,
    title: 'Kayaking Adventure',
    description: 'Paddle through crystal clear waters and explore hidden coves along the coastline.',
    imageUrl: 'https://images.unsplash.com/photo-1544551763962-0c623066013b?q=80&w=2070',
    duration: '2 hours',
    price: 40,
    rating: 4.7,
    category: 'Water Sports'
  },
  {
    id: 5,
    title: 'Cultural Museum Visit',
    description: 'Discover the rich history and traditions of the region through interactive exhibits.',
    imageUrl: 'https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?q=80&w=2070',
    duration: '2 hours',
    price: 20,
    rating: 4.5,
    category: 'Culture'
  },
  {
    id: 6,
    title: 'Cycling City Tour',
    description: 'Explore the city on a bicycle with stops at major landmarks and hidden gems.',
    imageUrl: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=2070',
    duration: '3 hours',
    price: 35,
    rating: 4.6,
    category: 'Sightseeing'
  }
];

const categories = ['All', 'Adventure', 'Wellness', 'Food & Drink', 'Water Sports', 'Culture', 'Sightseeing'];

const TripCreator = () => {
  const [numDays, setNumDays] = useState<number>(3);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [itinerary, setItinerary] = useState<{ day: number; activities: typeof activities }[]>([]);
  const [currentDay, setCurrentDay] = useState<number>(1);
  const [destination, setDestination] = useState<string>("bali");
  const { toast } = useToast();
  
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
                        {filteredActivities.map((activity) => (
                          <ActivityCard 
                            key={activity.id}
                            {...activity}
                            onAdd={addActivityToDay}
                          />
                        ))}
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
