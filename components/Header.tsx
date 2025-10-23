
import React from 'react';

export const Header: React.FC = () => {
    return (
        <header className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-red-500 mb-2">
                홍콩 맛집 탐험가 🍜
            </h1>
            <p className="text-lg text-gray-300">
                AI와 함께 홍콩의 숨겨진 맛집을 찾아보세요
            </p>
        </header>
    );
};
