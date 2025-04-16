
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, MapPin, Trash2 } from 'lucide-react';

interface DayActivity {
  id: number;
  title: string;
  imageUrl: string;
  duration: string;
  price: number;
}

interface DayPlannerProps {
  day: number;
  activities: DayActivity[];
  onRemoveActivity: (activityId: number) => void;
}

const DayPlanner: React.FC<DayPlannerProps> = ({ day, activities, onRemoveActivity }) => {
  const totalCost = activities.reduce((sum, activity) => sum + activity.price, 0);
  
  return (
    <Card className="mb-6 border-2 border-travel-blue/10 hover:border-travel-blue/30 transition-colors">
      <CardContent className="p-6">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            <Calendar className="h-5 w-5 text-travel-blue mr-2" />
            <h3 className="text-lg font-semibold">Day {day}</h3>
          </div>
          <div className="text-sm text-gray-500">
            Total: <span className="font-medium text-travel-blue">${totalCost}</span>
          </div>
        </div>

        {activities.length === 0 ? (
          <div className="bg-gray-50 rounded-lg p-6 text-center">
            <p className="text-gray-500">No activities added yet. Explore options below.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {activities.map((activity) => (
              <div 
                key={activity.id}
                className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <div className="h-12 w-12 rounded overflow-hidden flex-shrink-0 mr-3">
                  <img 
                    src={activity.imageUrl} 
                    alt={activity.title} 
                    className="h-full w-full object-cover" 
                  />
                </div>
                <div className="flex-grow">
                  <h4 className="font-medium text-gray-900">{activity.title}</h4>
                  <div className="flex items-center text-xs text-gray-500">
                    <Clock className="h-3 w-3 mr-1" />
                    <span>{activity.duration}</span>
                    <span className="mx-2">•</span>
                    <span>${activity.price}</span>
                  </div>
                </div>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="text-gray-400 hover:text-red-500"
                  onClick={() => onRemoveActivity(activity.id)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default DayPlanner;
