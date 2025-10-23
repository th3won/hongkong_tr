
import React from 'react';

export const Loader: React.FC = () => {
    return (
        <div className="flex justify-center items-center py-12">
            <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-amber-500"></div>
            <p className="ml-4 text-lg text-gray-300">AI가 최고의 맛집을 찾고 있습니다...</p>
        </div>
    );
};
