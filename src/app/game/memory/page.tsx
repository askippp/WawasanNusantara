"use client";

import React, { useState, useEffect } from "react";
import { ChevronLeft, Home, RotateCcw, Trophy, Star } from "lucide-react";

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
  const [score, setScore] = useState<number>(0);
  const [gameStarted, setGameStarted] = useState<boolean>(false);
  const [gameOver, setGameOver] = useState<boolean>(false);

  // Card data - Indonesian cultural items
  const cardImages = [
    { id: 1, image: "🏛️", name: "Rumah Adat" },
    { id: 2, image: "🥋", name: "Pakaian Adat" },
    { id: 3, image: "🎭", name: "Topeng Tradisional" },
    { id: 4, image: "🎵", name: "Musik Tradisional" },
    { id: 5, image: "🍜", name: "Makanan Tradisional" },
    { id: 6, image: "⚱️", name: "Kerajinan Tradisional" },
    { id: 7, image: "🗡️", name: "Senjata Tradisional" },
    { id: 8, image: "💃", name: "Tarian Tradisional" },
    { id: 9, image: "🎨", name: "Seni Tradisional" },
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
    setScore(0);
    setGameStarted(true);
    setGameOver(false);
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
          const newMatchedCards = [...matchedCards, first, second];
          setMatchedCards(newMatchedCards);
          setFlippedCards([]);
          const newScore = score + 10;
          setScore(newScore);

          // Check if game is complete - langsung ke hasil
          if (newMatchedCards.length === cards.length) {
            setTimeout(() => {
              setGameOver(true);
            }, 500);
          }
        }, 1000);
      } else {
        // No match - point tetap
        setTimeout(() => {
          setFlippedCards([]);
        }, 1000);
      }
    }
  };

  const isCardFlipped = (index: number) => {
    return flippedCards.includes(index) || matchedCards.includes(index);
  };

  const resetGame = () => {
    initializeGame();
  };

  const goHome = () => {
    resetGame();
  };

  // Total pairs and calculations
  const totalPairs = cardImages.length;
  const maxScore = totalPairs * 10;
  const percentage = Math.round((score / maxScore) * 100);

  if (gameOver) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-blue-400/10"></div>
          <div className="absolute -bottom-32 -right-32 w-80 h-80 rounded-full bg-blue-300/15"></div>
        </div>

        <div className="relative z-10 min-h-screen flex items-center justify-center p-6">
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 max-w-md w-full text-center shadow-2xl">
            <div className="mb-6">
              <Trophy className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-800 mb-2">
                Game Selesai!
              </h2>
              <div className="text-6xl font-bold text-blue-600 mb-2">
                {score}
              </div>
              <p className="text-gray-600">dari {maxScore} poin maksimal</p>
              <div className="mt-4">
                <div className="flex items-center justify-center space-x-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-6 h-6 ${
                        i < Math.floor(percentage / 20)
                          ? "text-yellow-400 fill-current"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <p className="text-lg font-semibold text-gray-700">
                  {percentage}% Benar!
                </p>
              </div>
            </div>

            <div className="space-y-3">
              <button
                onClick={resetGame}
                className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-xl transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <RotateCcw className="w-5 h-5" />
                <span>Main Lagi</span>
              </button>

              <button
                onClick={goHome}
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-xl transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <Home className="w-5 h-5" />
                <span>Kembali ke Menu</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-blue-400/10"></div>
        <div className="absolute -bottom-32 -right-32 w-80 h-80 rounded-full bg-blue-300/15"></div>
        <div className="absolute top-1/3 -right-20 w-64 h-64 rounded-full bg-white/5"></div>
        <div className="absolute bottom-1/4 -left-16 w-48 h-48 rounded-full bg-blue-200/10"></div>
      </div>

      <div className="relative z-10 px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-8">
            <br></br>
            Game Memori Kartu
          </h1>

          <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-6 md:p-8 shadow-2xl">
            <div className="grid grid-cols-6 gap-4 mb-8">
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

            <div className="mt-8">
              <div className="bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-500 rounded-full h-2 transition-all duration-500"
                  style={{
                    width: `${(matchedCards.length / cards.length) * 100}%`,
                  }}
                ></div>
              </div>
            </div>
          </div>

          {/* Instructions */}
          <div className="mt-8 text-center">
            <p className="text-white/70 text-lg">
              Cocokkan pasangan budaya Indonesia untuk mendapatkan poin!
            </p>
            <p className="text-white/60 text-base mt-2">
              Temukan semua {totalPairs} pasangan untuk menyelesaikan permainan
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemoryGame;
  