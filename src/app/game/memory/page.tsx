"use client";

import React, { useState, useEffect } from "react";

interface CardType {
  id: number;
  image: string;
  name: string;
  uniqueId: number;
}

const MemoryGame: React.FC = () => {
  const [cards, setCards] = useState<CardType[]>([]);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [matchedCards, setMatchedCards] = useState<number[]>([]);
  const [points, setPoints] = useState<number>(0); // Mulai dari 0
  const [gameStarted, setGameStarted] = useState<boolean>(false);

  // Card data - Indonesian cultural items
  const cardImages = [
    { id: 1, image: "🏛️", name: "Traditional House" },
    { id: 2, image: "🥋", name: "Traditional Clothing" },
    { id: 3, image: "🎭", name: "Traditional Mask" },
    { id: 4, image: "🎵", name: "Traditional Music" },
    { id: 5, image: "🍜", name: "Traditional Food" },
    { id: 6, image: "⚱️", name: "Traditional Craft" },
    { id: 7, image: "🗡️", name: "Traditional Weapon" },
    { id: 8, image: "💃", name: "Traditional Dance" },
    { id: 9, image: "🎨", name: "Traditional Art" },
  ];

  // Initialize game
  useEffect(() => {
    initializeGame();
  }, []);

  const initializeGame = () => {
    // Take first 9 cards and duplicate them
    const gameCards = cardImages.slice(0, 9);
    const duplicatedCards = [...gameCards, ...gameCards];

    // Shuffle cards and add uniqueId
    const shuffled = duplicatedCards
      .map((card) => ({ ...card, uniqueId: Math.random() }))
      .sort(() => Math.random() - 0.5);

    setCards(shuffled);
    setMatchedCards([]);
    setFlippedCards([]);
    setPoints(0); // Reset point ke 0
    setGameStarted(true);
  };

  const handleCardClick = (cardIndex: number) => {
    if (flippedCards.length === 2) return;
    if (flippedCards.includes(cardIndex)) return;
    if (matchedCards.includes(cardIndex)) return;

    const newFlippedCards = [...flippedCards, cardIndex];
    setFlippedCards(newFlippedCards);

    if (newFlippedCards.length === 2) {
      const [first, second] = newFlippedCards;
      if (
        cards[first] &&
        cards[second] &&
        cards[first].id === cards[second].id
      ) {
        // Match found - tambah point
        setTimeout(() => {
          setMatchedCards((prev) => [...prev, first, second]);
          setFlippedCards([]);
          setPoints((prev) => prev + 1); // +1 point untuk setiap match
        }, 1000);
      } else {
        // No match - point tetap
        setTimeout(() => {
          setFlippedCards([]);
          // Point tidak berkurang, hanya tidak bertambah
        }, 1000);
      }
    }
  };

  const isCardFlipped = (index: number) => {
    return flippedCards.includes(index) || matchedCards.includes(index);
  };

  // Total pairs that can be matched (should be 9)
  const totalPairs = cardImages.length;
  const isGameComplete =
    matchedCards.length === cards.length && cards.length > 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-blue-400/10"></div>
        <div className="absolute -bottom-32 -right-32 w-80 h-80 rounded-full bg-blue-300/15"></div>
        <div className="absolute top-1/3 -right-20 w-64 h-64 rounded-full bg-white/5"></div>
        <div className="absolute bottom-1/4 -left-16 w-48 h-48 rounded-full bg-blue-200/10"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 px-6 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Title and Points */}
          <div className="text-center mb-8">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Card Memory
            </h1>
            <div className="inline-block bg-white/10 backdrop-blur-md rounded-full px-6 py-2 border border-white/20">
              <span className="text-white text-xl font-semibold">
                Point: {points} / {totalPairs}
              </span>
            </div>
          </div>

          {/* Game Board */}
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-2xl">
            <div className="grid grid-cols-6 gap-4">
              {cards.map((card, index) => (
                <div
                  key={card.uniqueId}
                  onClick={() => handleCardClick(index)}
                  className={`
                    aspect-square rounded-2xl cursor-pointer transition-all duration-300 transform
                    ${
                      matchedCards.includes(index)
                        ? "bg-[#FF9B00] border-4 border-white/50"
                        : isCardFlipped(index)
                        ? "bg-white border-4 border-white/50 scale-105"
                        : "bg-white hover:bg-white/90 border-4 border-white/30 hover:scale-105"
                    }
                    shadow-lg flex items-center justify-center
                  `}
                >
                  {isCardFlipped(index) ? (
                    <div className="text-center">
                      <div className="text-4xl mb-2">{card.image}</div>
                      <div className="text-xs font-medium text-gray-700 px-2">
                        {card.name}
                      </div>
                    </div>
                  ) : (
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                      <div className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center">
                        <div className="w-4 h-4 bg-blue-200 rounded-full"></div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Game Status */}
            <div className="mt-8 text-center">
              {isGameComplete && (
                <div className="text-center">
                  <h2 className="text-3xl font-bold text-white mb-4">
                    🎉 Congratulations!
                  </h2>
                  <p className="text-white/80 text-lg mb-4">
                    You completed the game with {points} out of {totalPairs}{" "}
                    matches!
                  </p>
                  <p className="text-white/70 text-base mb-4">
                    Score: {Math.round((points / totalPairs) * 100)}%
                  </p>
                  <button
                    onClick={initializeGame}
                    className="bg-[#FF9B00] text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-[#FF9B00]/90 transition-colors"
                  >
                    Play Again
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Instructions */}
          <div className="mt-8 text-center">
            <p className="text-white/70 text-lg">
              Match pairs of Indonesian cultural items to earn points!
            </p>
            <p className="text-white/60 text-base mt-2">
              Find all {totalPairs} pairs to complete the game
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemoryGame;
