
import React, { useState, useCallback } from 'react';
import { Header } from './components/Header';
import { SearchBar } from './components/SearchBar';
import { RestaurantList } from './components/RestaurantList';
import { Loader } from './components/Loader';
import { ErrorMessage } from './components/ErrorMessage';
import { Welcome } from './components/Welcome';
import { fetchRestaurants } from './services/geminiService';
import type { Restaurant } from './types';

function App() {
    const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [hasSearched, setHasSearched] = useState(false);

    const handleSearch = useCallback(async (location: string) => {
        if (!location) return;

        setIsLoading(true);
        setError(null);
        setHasSearched(true);
        setRestaurants([]);

        try {
            const results = await fetchRestaurants(location);
            setRestaurants(results);
        } catch (err: unknown) {
            if (err instanceof Error) {
                setError(err.message);
            } else {
                setError("An unknown error occurred.");
            }
        } finally {
            setIsLoading(false);
        }
    }, []);

    const handleGeolocationSearch = useCallback(() => {
        setIsLoading(true);
        setError(null);
        setHasSearched(true);
        setRestaurants([]);

        if (!navigator.geolocation) {
            setError("Geolocation is not supported by your browser.");
            setIsLoading(false);
            return;
        }

        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                handleSearch(`latitude ${latitude}, longitude ${longitude}`);
            },
            () => {
                setError("Unable to retrieve your location. Please enable location services and try again.");
                setIsLoading(false);
            }
        );
    }, [handleSearch]);

    const renderContent = () => {
        if (isLoading) {
            return <Loader />;
        }
        if (error) {
            return <ErrorMessage message={error} />;
        }
        if (hasSearched && restaurants.length > 0) {
            return <RestaurantList restaurants={restaurants} />;
        }
        if (hasSearched && restaurants.length === 0) {
            return <p className="text-center text-gray-400 mt-8">No results found. Try a different location.</p>;
        }
        return <Welcome />;
    };

    return (
        <div className="min-h-screen bg-gray-900 text-white font-sans">
            <main className="container mx-auto px-4 py-8">
                <Header />
                <SearchBar onSearch={handleSearch} onGeolocate={handleGeolocationSearch} isLoading={isLoading} />
                <div className="mt-8">
                    {renderContent()}
                </div>
            </main>
        </div>
    );
}

export default App;
