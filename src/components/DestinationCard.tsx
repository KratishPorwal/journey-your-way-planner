
import React from 'react';
import { Button } from '@/components/ui/button';
import { MapPin } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { type Destination, type ItineraryDay } from '@/types/destination';

interface DestinationCardProps {
  destination: Destination;
  showItineraries: boolean;
  onImageLoad: (id: number, name: string) => void;
  onImageError: (id: number, name: string, error: any) => void;
}

const DestinationCard: React.FC<DestinationCardProps> = ({
  destination,
  showItineraries,
  onImageLoad,
  onImageError
}) => {
  console.log(`Rendering destination card for: ${destination.name} with image: ${destination.imageUrl}`);
  
  return (
    <div 
      className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
    >
      <div className="h-48 overflow-hidden">
        <img 
          src={destination.imageUrl} 
          alt={destination.name} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          onLoad={() => onImageLoad(destination.id, destination.name)}
          onError={(e) => onImageError(destination.id, destination.name, e)}
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
        
        {showItineraries && <ItineraryTabs itinerary={destination.itinerary} />}
        
        <Button 
          variant="outline" 
          className="w-full border-travel-blue text-travel-blue hover:bg-travel-blue hover:text-white"
        >
          Explore
        </Button>
      </div>
    </div>
  );
};

export default DestinationCard;

// Separate component for itinerary tabs
interface ItineraryTabsProps {
  itinerary: ItineraryDay[];
}

const ItineraryTabs: React.FC<ItineraryTabsProps> = ({ itinerary }) => {
  return (
    <Tabs defaultValue="day1" className="mt-4 mb-6">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="day1">Day 1</TabsTrigger>
        <TabsTrigger value="day2">Day 2</TabsTrigger>
        <TabsTrigger value="day3">Day 3</TabsTrigger>
      </TabsList>
      {itinerary.map((day, index) => (
        <TabsContent key={`day${index+1}`} value={`day${index+1}`} className="mt-2">
          <ItineraryDay day={day} />
        </TabsContent>
      ))}
    </Tabs>
  );
};

// Separate component for a single day's itinerary
interface ItineraryDayProps {
  day: ItineraryDay;
}

const ItineraryDay: React.FC<ItineraryDayProps> = ({ day }) => {
  return (
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
  );
};
