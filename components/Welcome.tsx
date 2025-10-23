
import React from 'react';

export const Welcome: React.FC = () => {
    return (
        <div className="text-center max-w-2xl mx-auto py-10">
            <div className="text-6xl mb-4">🇭🇰</div>
            <h2 className="text-3xl font-bold text-gray-100">홍콩 미식 여행을 시작하세요!</h2>
            <p className="mt-4 text-gray-400">
                가고 싶은 장소나 랜드마크를 입력하거나, 현재 위치를 사용하여 주변 최고의 맛집 추천을 받아보세요.
                AI가 당신의 완벽한 식사를 찾아드립니다.
            </p>
            <div className="mt-8 bg-gray-800/50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-200">검색 예시:</h3>
                <ul className="mt-2 text-gray-400 space-y-1">
                    <li>"란타우 섬"</li>
                    <li>"몽콕 야시장 근처"</li>
                    <li>"소호 거리"</li>
                </ul>
            </div>
        </div>
    );
};
