
import React from 'react';
import { RestaurantCard } from './RestaurantCard';
import type { Restaurant } from '../types';

interface RestaurantListProps {
    restaurants: Restaurant[];
}

export const RestaurantList: React.FC<RestaurantListProps> = ({ restaurants }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {restaurants.map((restaurant, index) => (
                <RestaurantCard key={index} restaurant={restaurant} />
            ))}
        </div>
    );
};
