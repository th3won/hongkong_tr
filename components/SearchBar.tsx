
import React, { useState } from 'react';

interface SearchBarProps {
    onSearch: (location: string) => void;
    onGeolocate: () => void;
    isLoading: boolean;
}

export const SearchBar: React.FC<SearchBarProps> = ({ onSearch, onGeolocate, isLoading }) => {
    const [query, setQuery] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSearch(query);
    };

    return (
        <div className="max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="예: 침사추이, 빅토리아 피크, 홍콩 디즈니랜드"
                    className="flex-grow p-3 bg-gray-800 border-2 border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                    disabled={isLoading}
                />
                <div className="flex gap-2">
                    <button
                        type="button"
                        onClick={onGeolocate}
                        disabled={isLoading}
                        className="p-3 bg-gray-700 hover:bg-gray-600 disabled:bg-gray-800 disabled:cursor-not-allowed text-white rounded-lg transition-colors flex-shrink-0"
                        aria-label="Use current location"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                        </svg>
                    </button>
                    <button
                        type="submit"
                        disabled={isLoading || !query}
                        className="flex-grow sm:flex-grow-0 w-full p-3 bg-amber-500 hover:bg-amber-600 disabled:bg-amber-800 disabled:cursor-not-allowed text-gray-900 font-bold rounded-lg transition-colors"
                    >
                        {isLoading ? '검색 중...' : '맛집 찾기'}
                    </button>
                </div>
            </form>
        </div>
    );
};
