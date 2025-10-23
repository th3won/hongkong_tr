import React from 'react';
import type { Restaurant } from '../types';

interface RestaurantCardProps {
    restaurant: Restaurant;
}

// Fix: Replaced JSX.Element with React.ReactNode to resolve "Cannot find namespace 'JSX'" error.
const InfoRow: React.FC<{ icon: React.ReactNode; label: string; value: string }> = ({ icon, label, value }) => (
    <div className="flex items-start mt-4">
        <div className="flex-shrink-0 text-amber-400">{icon}</div>
        <div className="ml-3">
            <p className="text-sm font-semibold text-gray-400">{label}</p>
            <p className="text-md text-gray-200">{value}</p>
        </div>
    </div>
);

export const RestaurantCard: React.FC<RestaurantCardProps> = ({ restaurant }) => {
    return (
        <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 shadow-lg transform hover:scale-105 transition-transform duration-300 flex flex-col h-full">
            <h3 className="text-2xl font-bold text-amber-400">{restaurant.name}</h3>
            <p className="mt-3 text-gray-300 flex-grow">{restaurant.description}</p>
            <div className="mt-4 border-t border-gray-700 pt-4">
                <InfoRow 
                    icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" /></svg>}
                    label="요리 종류"
                    value={restaurant.cuisine}
                />
                <InfoRow 
                    icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>}
                    label="대표 메뉴"
                    value={restaurant.signatureDish}
                />
            </div>
        </div>
    );
};