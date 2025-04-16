
import React from 'react';
import { Clock, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ActivityCardProps {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  duration: string;
  price: number;
  rating: number;
  category: string;
  onAdd: (id: number) => void;
}

const ActivityCard: React.FC<ActivityCardProps> = ({
  id,
  title,
  description,
  imageUrl,
  duration,
  price,
  rating,
  category,
  onAdd
}) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 flex flex-col h-full">
      <div className="h-40 overflow-hidden relative">
        <img 
          src={imageUrl} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
        />
        <div className="absolute top-2 right-2 bg-white/90 px-2 py-1 rounded text-xs font-medium">
          {category}
        </div>
      </div>
      
      <div className="p-4 flex-grow">
        <h3 className="font-medium text-gray-900 mb-1">{title}</h3>
        <p className="text-gray-500 text-sm mb-3 line-clamp-2">{description}</p>
        
        <div className="flex justify-between items-center mb-3">
          <div className="flex items-center text-sm text-gray-600">
            <Clock className="h-3 w-3 mr-1" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center">
            <Star className="h-3 w-3 text-yellow-500 mr-1" />
            <span className="text-sm font-medium">{rating}</span>
          </div>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="font-medium text-travel-blue">${price}</span>
          <Button 
            size="sm"
            variant="outline" 
            className="text-xs border-travel-teal text-travel-teal hover:bg-travel-teal hover:text-white"
            onClick={() => onAdd(id)}
          >
            Add to Day
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ActivityCard;
