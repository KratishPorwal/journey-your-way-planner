
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Bookmark, Calendar, Clock, MapPin, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

// Type definition for saved itinerary
interface SavedActivity {
  id: number;
  title: string;
  imageUrl: string;
  duration: string;
  price: number;
}

interface SavedDay {
  day: number;
  activities: SavedActivity[];
}

interface SavedItinerary {
  id: string;
  destination: string;
  days: number;
  date: string;
  itinerary: SavedDay[];
}

const SavedItineraries = () => {
  const [savedItineraries, setSavedItineraries] = useState<SavedItinerary[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    // Load saved itineraries from localStorage
    const loadSavedItineraries = () => {
      try {
        const saved = localStorage.getItem('savedItineraries');
        if (saved) {
          setSavedItineraries(JSON.parse(saved));
        }
      } catch (error) {
        console.error('Error loading saved itineraries', error);
      } finally {
        setLoading(false);
      }
    };

    loadSavedItineraries();
  }, []);

  const deleteItinerary = (id: string) => {
    const updatedItineraries = savedItineraries.filter(itinerary => itinerary.id !== id);
    setSavedItineraries(updatedItineraries);
    localStorage.setItem('savedItineraries', JSON.stringify(updatedItineraries));
    
    toast({
      title: "Itinerary deleted",
      description: "Your saved itinerary has been removed.",
    });
  };

  // Calculate total cost of activities in an itinerary
  const calculateTotalCost = (itinerary: SavedDay[]) => {
    return itinerary.reduce((total, day) => {
      return total + day.activities.reduce((dayTotal, activity) => dayTotal + activity.price, 0);
    }, 0);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="pt-24 pb-12 bg-gradient-to-r from-travel-blue/10 to-travel-teal/5">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-6">
            <Bookmark className="text-travel-blue w-8 h-8 mr-3" />
            <h1 className="text-4xl font-bold text-gray-800">Saved Itineraries</h1>
          </div>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            View and manage all your saved travel plans. Your personalized itineraries are stored
            here for easy access whenever you're ready to travel.
          </p>
        </div>
      </div>
      
      <div className="flex-grow py-12">
        <div className="container mx-auto px-4">
          {loading ? (
            <div className="flex justify-center items-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-travel-blue"></div>
            </div>
          ) : savedItineraries.length === 0 ? (
            <div className="text-center py-20">
              <div className="bg-gray-100 rounded-full p-4 w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <Bookmark className="h-10 w-10 text-gray-400" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">No saved itineraries yet</h3>
              <p className="text-gray-600 max-w-md mx-auto mb-8">
                You haven't saved any travel plans yet. Visit the Plan Trip page to create and save your perfect itinerary.
              </p>
              <Button asChild className="bg-travel-blue hover:bg-travel-blue/90">
                <a href="/plan">Create an Itinerary</a>
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-10">
              {savedItineraries.map((itinerary) => (
                <Card key={itinerary.id} className="border-2 border-travel-blue/10 hover:border-travel-blue/30 transition-colors">
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <div>
                      <CardTitle className="text-2xl font-bold">{itinerary.destination}</CardTitle>
                      <div className="flex items-center mt-1 space-x-2 text-gray-500">
                        <Calendar className="h-4 w-4" />
                        <span>{itinerary.date}</span>
                        <span>•</span>
                        <span>{itinerary.days} {itinerary.days === 1 ? 'Day' : 'Days'}</span>
                        <span>•</span>
                        <span>${calculateTotalCost(itinerary.itinerary)} total</span>
                      </div>
                    </div>
                    <Button 
                      variant="ghost" 
                      size="icon"
                      className="text-gray-400 hover:text-red-500"
                      onClick={() => deleteItinerary(itinerary.id)}
                    >
                      <Trash2 className="h-5 w-5" />
                    </Button>
                  </CardHeader>
                  <CardContent>
                    <Tabs defaultValue={`day-1-${itinerary.id}`} className="w-full mt-4">
                      <TabsList className="mb-4">
                        {itinerary.itinerary.map((day) => (
                          <TabsTrigger key={`day-${day.day}-${itinerary.id}`} value={`day-${day.day}-${itinerary.id}`}>
                            Day {day.day}
                          </TabsTrigger>
                        ))}
                      </TabsList>
                      
                      {itinerary.itinerary.map((day) => (
                        <TabsContent key={`content-day-${day.day}-${itinerary.id}`} value={`day-${day.day}-${itinerary.id}`}>
                          <Table>
                            <TableHeader>
                              <TableRow>
                                <TableHead>Activity</TableHead>
                                <TableHead>Duration</TableHead>
                                <TableHead>Price</TableHead>
                              </TableRow>
                            </TableHeader>
                            <TableBody>
                              {day.activities.length === 0 ? (
                                <TableRow>
                                  <TableCell colSpan={3} className="text-center py-8 text-gray-500">
                                    No activities planned for this day
                                  </TableCell>
                                </TableRow>
                              ) : (
                                day.activities.map((activity) => (
                                  <TableRow key={activity.id}>
                                    <TableCell>
                                      <div className="flex items-center space-x-3">
                                        <div className="h-10 w-10 rounded overflow-hidden flex-shrink-0">
                                          <img 
                                            src={activity.imageUrl} 
                                            alt={activity.title} 
                                            className="h-full w-full object-cover" 
                                          />
                                        </div>
                                        <div>{activity.title}</div>
                                      </div>
                                    </TableCell>
                                    <TableCell>
                                      <div className="flex items-center">
                                        <Clock className="h-3 w-3 mr-1 text-gray-400" />
                                        {activity.duration}
                                      </div>
                                    </TableCell>
                                    <TableCell>${activity.price}</TableCell>
                                  </TableRow>
                                ))
                              )}
                            </TableBody>
                          </Table>
                        </TabsContent>
                      ))}
                    </Tabs>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default SavedItineraries;
