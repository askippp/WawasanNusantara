"use client";

import React, { useState, useEffect } from "react";
import {
  ChevronLeft,
  Home,
  RotateCcw,
  Trophy,
  Star,
  Clock,
  Brain,
} from "lucide-react";

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
  const [matchAnimation, setMatchAnimation] = useState<number[]>([]);
  const [score, setScore] = useState<number>(0);
  const [gameStarted, setGameStarted] = useState<boolean>(false);
  const [gameOver, setGameOver] = useState<boolean>(false);
  const [timeLeft, setTimeLeft] = useState<number>(120);
  const [totalTime, setTotalTime] = useState<number>(120);
  const [moves, setMoves] = useState<number>(0);

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

  // Timer effect
  useEffect(() => {
    if (gameStarted && timeLeft > 0 && !gameOver) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && !gameOver) {
      setGameOver(true);
    }
  }, [timeLeft, gameStarted, gameOver]);

  // Initialize game
  const initializeGame = () => {
    const gameCards = cardImages.slice(0, 9);
    const duplicatedCards = [...gameCards, ...gameCards];

    const shuffled = duplicatedCards
      .map((card) => ({ ...card, uniqueId: Math.random() }))
      .sort(() => Math.random() - 0.5);

    setCards(shuffled);
    setMatchedCards([]);
    setFlippedCards([]);
    setMatchAnimation([]);
    setScore(0);
    setMoves(0);
    setTimeLeft(120);
    setGameOver(false);
  };

  const startGame = () => {
    initializeGame();
    setGameStarted(true);
  };

  const handleCardClick = (cardIndex: number) => {
    if (flippedCards.length === 2) return;
    if (flippedCards.includes(cardIndex)) return;
    if (matchedCards.includes(cardIndex)) return;

    const newFlippedCards = [...flippedCards, cardIndex];
    setFlippedCards(newFlippedCards);

    if (newFlippedCards.length === 2) {
      setMoves(moves + 1);
      const [first, second] = newFlippedCards;

      if (
        cards[first] &&
        cards[second] &&
        cards[first].id === cards[second].id
      ) {
        // Match found - show animation
        setMatchAnimation([first, second]);

        setTimeout(() => {
          const newMatchedCards = [...matchedCards, first, second];
          setMatchedCards(newMatchedCards);
          setFlippedCards([]);
          setMatchAnimation([]);

          const basePoints = 100;
          const timeBonus = Math.floor(timeLeft / 2);
          const movePenalty = Math.max(0, moves - 10);
          const points = basePoints + timeBonus - movePenalty;

          const newScore = score + Math.max(points, 50);
          setScore(newScore);

          if (newMatchedCards.length === cards.length) {
            setTimeout(() => {
              setGameOver(true);
            }, 500);
          }
        }, 1000);
      } else {
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
    setGameStarted(false);
    initializeGame();
  };

  const goHome = () => {
    setGameStarted(false);
    setGameOver(false);
    initializeGame();
  };

  // Calculate performance metrics
  const totalPairs = cardImages.length;
  const matchedPairs = matchedCards.length / 2;
  const progress = (matchedPairs / totalPairs) * 100;
  const timeUsed = totalTime - timeLeft;
  const efficiency = moves > 0 ? Math.round((matchedPairs / moves) * 100) : 0;

  // Start Screen
  if (!gameStarted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-blue-400/10"></div>
          <div className="absolute -bottom-32 -right-32 w-80 h-80 rounded-full bg-blue-300/15"></div>
        </div>

        <div className="relative z-10 min-h-screen flex items-center justify-center p-4 md:p-6">
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl md:rounded-3xl p-6 md:p-8 max-w-lg w-full text-center shadow-2xl mx-2">
            <Brain className="w-12 h-12 md:w-16 md:h-16 text-blue-600 mx-auto mb-4 md:mb-6" />
            <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-3 md:mb-4">
              Game Memori Kartu
            </h1>
            <p className="text-gray-600 text-base md:text-lg mb-6 md:mb-8 leading-relaxed">
              Asah memori Anda dengan mencocokkan kartu budaya Indonesia!
              <br />
              <strong>{totalPairs} pasangan</strong> menanti Anda.
            </p>

            <div className="bg-blue-50 rounded-xl p-4 md:p-6 mb-6 md:mb-8">
              <h3 className="font-bold text-blue-800 mb-3 md:mb-4 text-sm md:text-base">
                Aturan Permainan:
              </h3>
              <ul className="text-left text-blue-700 space-y-1.5 md:space-y-2 text-sm md:text-base">
                <li>• Cocokkan semua pasangan kartu budaya Indonesia</li>
                <li>• Waktu: 2 menit untuk menyelesaikan permainan</li>
                <li>• Skor: 100 poin dasar + bonus waktu - penalti gerakan</li>
                <li>• Semakin cepat dan efisien, semakin tinggi skor!</li>
              </ul>
            </div>

            <div className="grid grid-cols-3 gap-3 md:gap-4 mb-6 md:mb-8 text-center">
              <div className="bg-white rounded-lg md:rounded-xl p-3 md:p-4">
                <div className="text-xl md:text-2xl font-bold text-blue-600">
                  {totalPairs}
                </div>
                <div className="text-xs md:text-sm text-gray-600">Pasangan</div>
              </div>
              <div className="bg-white rounded-lg md:rounded-xl p-3 md:p-4">
                <div className="text-xl md:text-2xl font-bold text-blue-600">
                  2:00
                </div>
                <div className="text-xs md:text-sm text-gray-600">Waktu</div>
              </div>
              <div className="bg-white rounded-lg md:rounded-xl p-3 md:p-4">
                <div className="text-xl md:text-2xl font-bold text-blue-600">
                  Max
                </div>
                <div className="text-xs md:text-sm text-gray-600">Skor</div>
              </div>
            </div>

            <button
              onClick={startGame}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 md:py-4 px-6 md:px-8 rounded-xl text-lg md:text-xl transition-all duration-200"
            >
              Mulai Permainan
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Game Over Screen
  if (gameOver) {
    const maxScore = totalPairs * 150;
    const percentage = Math.round((score / maxScore) * 100);

    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-blue-400/10"></div>
          <div className="absolute -bottom-32 -right-32 w-80 h-80 rounded-full bg-blue-300/15"></div>
        </div>

        <div className="relative z-10 min-h-screen flex items-center justify-center p-4 md:p-6">
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl md:rounded-3xl p-6 md:p-8 max-w-md w-full text-center shadow-2xl mx-2">
            <div className="mb-4 md:mb-6">
              <Trophy className="w-12 h-12 md:w-16 md:h-16 text-yellow-500 mx-auto mb-3 md:mb-4" />
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                {matchedPairs === totalPairs ? "Selamat!" : "Game Selesai!"}
              </h2>
              <div className="text-4xl md:text-6xl font-bold text-blue-600 mb-2">
                {score}
              </div>
              <p className="text-gray-600 text-sm md:text-base">Skor Total</p>

              <div className="mt-3 md:mt-4">
                <div className="flex items-center justify-center space-x-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 md:w-6 md:h-6 ${
                        i < Math.floor(percentage / 20)
                          ? "text-yellow-400 fill-current"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <p className="text-base md:text-lg font-semibold text-gray-700">
                  {percentage}% Performa!
                </p>
              </div>
            </div>

            <div className="bg-blue-50 rounded-xl p-3 md:p-4 mb-4 md:mb-6 space-y-2 text-sm md:text-base">
              <div className="flex justify-between text-blue-800">
                <span>Pasangan Ditemukan:</span>
                <span className="font-bold">
                  {matchedPairs}/{totalPairs}
                </span>
              </div>
              <div className="flex justify-between text-blue-800">
                <span>Waktu Digunakan:</span>
                <span className="font-bold">
                  {Math.floor(timeUsed / 60)}:
                  {String(timeUsed % 60).padStart(2, "0")}
                </span>
              </div>
              <div className="flex justify-between text-blue-800">
                <span>Total Gerakan:</span>
                <span className="font-bold">{moves}</span>
              </div>
              <div className="flex justify-between text-blue-800">
                <span>Efisiensi:</span>
                <span className="font-bold">{efficiency}%</span>
              </div>
            </div>

            <div className="space-y-3">
              <button
                onClick={startGame}
                className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-xl transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <RotateCcw className="w-4 h-4 md:w-5 md:h-5" />
                <span className="text-sm md:text-base">Main Lagi</span>
              </button>

              <button
                onClick={goHome}
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-xl transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <Home className="w-4 h-4 md:w-5 md:h-5" />
                <span className="text-sm md:text-base">Kembali ke Menu</span>
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

      {/* Header */}
      <div className="relative z-10 p-4 md:p-6">
        <div className="max-w-4xl mx-auto">
          {/* Mobile Header - Stacked Layout */}
          <div className="md:hidden">
            {/* Top Row - Back button and Progress */}
            <div className="flex items-center justify-between mb-3">
              <button
                onClick={goHome}
                className="p-2 bg-white/20 hover:bg-white/30 rounded-full transition-all duration-200"
              >
                <ChevronLeft className="w-5 h-5 text-white" />
              </button>
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-3 py-1.5">
                <span className="text-white font-medium text-sm">
                  {matchedPairs} / {totalPairs} Pasangan
                </span>
              </div>
            </div>

            {/* Bottom Row - Timer and Score */}
            <div className="flex items-center justify-center space-x-3">
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-1.5 flex items-center space-x-1.5">
                <Clock className="w-4 h-4 text-white" />
                <span
                  className={`text-white font-bold text-sm ${
                    timeLeft <= 30 ? "text-yellow-200" : ""
                  } ${timeLeft <= 10 ? "text-red-200" : ""}`}
                >
                  {Math.floor(timeLeft / 60)}:
                  {String(timeLeft % 60).padStart(2, "0")}
                </span>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-1.5">
                <span className="text-white font-bold text-sm">
                  Skor: {score}
                </span>
              </div>
            </div>
          </div>

          {/* Desktop Header - Original Layout */}
          <div className="hidden md:flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button
                onClick={goHome}
                className="p-2 bg-white/20 hover:bg-white/30 rounded-full transition-all duration-200"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                <span className="text-white font-medium text-sm">
                  {matchedPairs} / {totalPairs} Pasangan
                </span>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 flex items-center space-x-2">
                <Clock className="w-5 h-5 text-white" />
                <span
                  className={`text-white font-bold ${
                    timeLeft <= 30 ? "text-yellow-200" : ""
                  } ${timeLeft <= 10 ? "text-red-200" : ""}`}
                >
                  {Math.floor(timeLeft / 60)}:
                  {String(timeLeft % 60).padStart(2, "0")}
                </span>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-2">
                <span className="text-white font-bold">Skor: {score}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 px-4 md:px-6 py-2 md:py-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-6 md:mb-8 px-4">
            Game Memori Kartu
          </h1>

          <div className="bg-white/95 backdrop-blur-sm rounded-2xl md:rounded-3xl p-4 md:p-6 lg:p-8 shadow-2xl mx-2 md:mx-0">
            <div className="flex items-center justify-between mb-4 md:mb-6 text-xs md:text-sm text-gray-600">
              <div>
                Gerakan:{" "}
                <span className="font-bold text-blue-600">{moves}</span>
              </div>
              <div>
                Efisiensi:{" "}
                <span className="font-bold text-blue-600">{efficiency}%</span>
              </div>
            </div>

            {/* Game Grid - Responsive columns */}
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2 md:gap-4 mb-6 md:mb-8">
              {cards.map((card, index) => (
                <div
                  key={card.uniqueId}
                  onClick={() => handleCardClick(index)}
                  className={`
                    aspect-square rounded-lg md:rounded-2xl cursor-pointer transition-all duration-300 transform relative
                    ${
                      matchedCards.includes(index)
                        ? "bg-green-400 border-2 md:border-4 border-green-300 shadow-lg shadow-green-200"
                        : matchAnimation.includes(index)
                        ? "bg-yellow-300 border-2 md:border-4 border-yellow-400 scale-105 animate-pulse"
                        : isCardFlipped(index)
                        ? "bg-white border-2 md:border-4 border-blue-400 scale-105"
                        : "bg-white hover:bg-white/90 border-2 md:border-4 border-white/30 hover:scale-105"
                    }
                    shadow-lg flex items-center justify-center
                  `}
                >
                  {/* Sparkle effect for matched cards */}
                  {matchedCards.includes(index) && (
                    <div className="absolute -top-1 -right-1">
                      <div className="w-4 h-4 md:w-6 md:h-6 text-yellow-400 animate-bounce text-sm md:text-xl">
                        ✨
                      </div>
                    </div>
                  )}

                  {/* Match animation sparkles */}
                  {matchAnimation.includes(index) && (
                    <>
                      <div className="absolute -top-2 -left-2">
                        <div className="w-3 h-3 md:w-4 md:h-4 text-yellow-500 animate-ping">
                          ⭐
                        </div>
                      </div>
                      <div className="absolute -bottom-2 -right-2">
                        <div className="w-3 h-3 md:w-4 md:h-4 text-yellow-500 animate-ping">
                          ⭐
                        </div>
                      </div>
                    </>
                  )}

                  {isCardFlipped(index) ? (
                    <div className="text-center p-1 md:p-2">
                      <div
                        className={`text-lg md:text-4xl mb-1 md:mb-2 ${
                          matchAnimation.includes(index) ? "animate-bounce" : ""
                        }`}
                      >
                        {card.image}
                      </div>
                      <div className="text-xs md:text-xs font-medium text-gray-700 px-1 md:px-2 leading-tight">
                        {card.name}
                      </div>
                    </div>
                  ) : (
                    <div className="w-6 h-6 md:w-12 md:h-12 bg-blue-600 rounded-full flex items-center justify-center">
                      <div className="w-4 h-4 md:w-8 md:h-8 bg-blue-400 rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 md:w-4 md:h-4 bg-blue-200 rounded-full"></div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-6 md:mt-8">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs md:text-sm font-medium text-gray-600">
                  Progress
                </span>
                <span className="text-xs md:text-sm font-medium text-blue-600">
                  {Math.round(progress)}%
                </span>
              </div>
              <div className="bg-gray-200 rounded-full h-2 md:h-3">
                <div
                  className="bg-blue-500 rounded-full h-2 md:h-3 transition-all duration-500"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>
          </div>

          <div className="mt-6 md:mt-8 text-center px-4">
            <p className="text-white/70 text-sm md:text-lg leading-relaxed">
              Cocokkan pasangan budaya Indonesia untuk mendapatkan poin!
            </p>
            <p className="text-white/60 text-xs md:text-base mt-2">
              Semakin cepat dan efisien, semakin tinggi skor Anda
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemoryGame;
