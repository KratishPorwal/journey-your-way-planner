
import { ReactNode } from 'react';

export interface Activity {
  name: string;
  icon: ReactNode;
  time: string;
}

export interface ItineraryDay {
  day: number;
  title: string;
  activities: Activity[];
}

export interface Destination {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  activities: number;
  rating: number;
  itinerary: ItineraryDay[];
}

export interface ImageLoadStatus {
  [key: number]: {
    loaded: boolean;
    error: boolean;
  };
}
