"use client";

import React, { useState } from "react";
import {
  ChevronLeft,
  Home,
  RotateCcw,
  Trophy,
  Star,
  CheckCircle,
  XCircle,
} from "lucide-react";

interface Choice {
  key: string;
  text: string;
}

interface Question {
  id: number;
  title: string;
  image: string;
  imageType: "emoji" | "url" | "placeholder";
  hints: string[];
  answer: string;
  choices: Choice[];
  region: string;
  description: string;
}

const GuessThePictureGame = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [answeredQuestions, setAnsweredQuestions] = useState(new Set<number>());
  const [gameStarted, setGameStarted] = useState(false);

  const questions: Question[] = [
    {
      id: 1,
      title: "Alat Musik Jawa Barat",
      image: "/images/Kendang.jpg",
      imageType: "url",
      hints: ["Alat musik perkusi tradisional", "Terbuat dari kayu dan kulit"],
      answer: "A",
      choices: [
        { key: "A", text: "Kendang" },
        { key: "B", text: "Angklung" },
        { key: "C", text: "Saron" },
        { key: "D", text: "Gong" },
        { key: "E", text: "Bonang" },
      ],
      region: "Jawa Barat",
      description:
        "Kendang adalah alat musik perkusi tradisional yang terbuat dari kayu dengan membran kulit di kedua sisinya.",
    },
    {
      id: 2,
      title: "Alat Musik Jawa Tengah",
      image: "/images/Saron.jpg",
      imageType: "url",
      hints: ["Instrumen metalofon", "Bagian dari gamelan"],
      answer: "C",
      choices: [
        { key: "A", text: "Kendang" },
        { key: "B", text: "Angklung" },
        { key: "C", text: "Saron" },
        { key: "D", text: "Gong" },
        { key: "E", text: "Bonang" },
      ],
      region: "Jawa Tengah",
      description:
        "Saron adalah salah satu instrumen dalam gamelan yang terbuat dari perunggu dan dimainkan dengan cara dipukul.",
    },
    {
      id: 3,
      title: "Alat Musik Bali",
      image: "/images/Gong.jpg",
      imageType: "url",
      hints: ["Berbentuk seperti piringan", "Dimainkan dengan dipukul"],
      answer: "D",
      choices: [
        { key: "A", text: "Kendang" },
        { key: "B", text: "Angklung" },
        { key: "C", text: "Saron" },
        { key: "D", text: "Gong" },
        { key: "E", text: "Bonang" },
      ],
      region: "Bali",
      description:
        "Gong adalah instrumen perkusi yang terbuat dari logam berbentuk piringan dengan tonjolan di tengahnya.",
    },
    {
      id: 4,
      title: "Alat Musik Sumatera",
      image: "/images/Hasapi.jpg",
      imageType: "url",
      hints: ["Alat musik petik", "Berasal dari Tapanuli"],
      answer: "A",
      choices: [
        { key: "A", text: "Hasapi" },
        { key: "B", text: "Saluang" },
        { key: "C", text: "Talempong" },
        { key: "D", text: "Gordang Sambilan" },
        { key: "E", text: "Serune Kalee" },
      ],
      region: "Sumatera Utara",
      description:
        "Hasapi adalah alat musik petik tradisional Batak yang menyerupai gitar dengan badan yang ramping.",
    },
    {
      id: 5,
      title: "Alat Musik Kalimantan",
      image: "/images/SerulingDayak.jpg",
      imageType: "url",
      hints: ["Alat musik tiup", "Terbuat dari bambu"],
      answer: "B",
      choices: [
        { key: "A", text: "Kledi" },
        { key: "B", text: "Seruling Dayak" },
        { key: "C", text: "Garantung" },
        { key: "D", text: "Jatung Utang" },
        { key: "E", text: "Sape" },
      ],
      region: "Kalimantan",
      description:
        "Seruling Dayak adalah alat musik tiup tradisional yang terbuat dari bambu dengan lubang-lubang nada.",
    },
    {
      id: 6,
      title: "Alat Musik Sulawesi",
      image: "/images/Gandrang.jpg",
      imageType: "url",
      hints: ["Alat musik perkusi", "Dimainkan dengan tangan"],
      answer: "C",
      choices: [
        { key: "A", text: "Kolintang" },
        { key: "B", text: "Keso-keso" },
        { key: "C", text: "Gandrang" },
        { key: "D", text: "Popondi" },
        { key: "E", text: "Pa'pompang" },
      ],
      region: "Sulawesi Selatan",
      description:
        "Gandrang adalah gendang tradisional Makassar yang dimainkan dalam upacara adat dan pertunjukan.",
    },
    {
      id: 7,
      title: "Alat Musik Papua",
      image: "/images/Tifa.jpg",
      imageType: "url",
      hints: ["Alat musik perkusi", "Berbentuk seperti gendang kecil"],
      answer: "A",
      choices: [
        { key: "A", text: "Tifa" },
        { key: "B", text: "Fu" },
        { key: "C", text: "Yospan" },
        { key: "D", text: "Pikon" },
        { key: "E", text: "Kalimba" },
      ],
      region: "Papua",
      description:
        "Tifa adalah alat musik perkusi khas Papua yang terbuat dari kayu dan kulit hewan, dimainkan dengan tangan.",
    },
    {
      id: 8,
      title: "Alat Musik Jawa",
      image: "/images/Bonang.jpg",
      imageType: "url",
      hints: ["Instrumen gamelan", "Berbentuk seperti pot"],
      answer: "E",
      choices: [
        { key: "A", text: "Kendang" },
        { key: "B", text: "Angklung" },
        { key: "C", text: "Saron" },
        { key: "D", text: "Gong" },
        { key: "E", text: "Bonang" },
      ],
      region: "Jawa",
      description:
        "Bonang adalah instrumen gamelan yang terdiri dari gong-gong kecil yang diatur dalam dua baris pada rak kayu.",
    },
  ];

  // Function to render image based on type
  const renderImage = (question: Question) => {
    return (
      <div className="relative">
        <img
          src={question.image}
          alt={question.title}
          className="w-full h-64 object-cover rounded-xl shadow-lg"
          onError={(e) => {
            const target = e.currentTarget;
            target.style.display = "none";
            const placeholder = target.nextElementSibling as HTMLElement;
            if (placeholder) {
              placeholder.style.display = "flex";
            }
          }}
        />
        <div
          className="w-full h-64 bg-gradient-to-br from-gray-300 to-gray-400 rounded-xl shadow-lg flex flex-col items-center justify-center text-gray-700"
          style={{ display: "none" }}
        >
          <div className="text-6xl mb-4">🎼</div>
          <div className="text-lg font-semibold text-center px-4">
            {question.title}
          </div>
          <div className="text-sm text-gray-600 mt-2">
            Gambar tidak tersedia
          </div>
        </div>
      </div>
    );
  };

  const handleChoiceClick = (selectedChoice: string) => {
    if (showResult) return;

    const currentQ = questions[currentQuestion];
    const isCorrect = selectedChoice === currentQ.answer;

    if (isCorrect) {
      setScore(score + 10);
      setFeedback("Benar! 🎉");
    } else {
      const correctAnswer = currentQ.choices.find(
        (choice: Choice) => choice.key === currentQ.answer
      );
      setFeedback(
        `Salah! Jawabannya adalah: ${currentQ.answer}. ${correctAnswer?.text}`
      );
    }

    setUserAnswer(selectedChoice);
    setAnsweredQuestions((prev) => new Set([...prev, currentQuestion]));
    setShowResult(true);

    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setUserAnswer("");
        setShowResult(false);
        setFeedback("");
      } else {
        setGameOver(true);
      }
    }, 2500);
  };

  const startGame = () => {
    setGameStarted(true);
  };

  const resetGame = () => {
    setCurrentQuestion(0);
    setUserAnswer("");
    setScore(0);
    setShowResult(false);
    setGameOver(false);
    setFeedback("");
    setAnsweredQuestions(new Set<number>());
    setGameStarted(false);
  };

  const goHome = () => {
    resetGame();
  };

  // Start Screen
  if (!gameStarted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-blue-400/10"></div>
          <div className="absolute -bottom-32 -right-32 w-80 h-80 rounded-full bg-blue-300/15"></div>
        </div>

        <div className="relative z-10 min-h-screen flex items-center justify-center p-6">
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 max-w-lg w-full text-center shadow-2xl">
            <div className="text-8xl mb-6">🎵</div>
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Tebak Alat Musik
            </h1>
            <p className="text-gray-600 text-lg mb-8">
              Uji pengetahuan Anda tentang alat musik tradisional Indonesia!
              <br />
              <strong>{questions.length} pertanyaan</strong> menanti Anda.
            </p>

            <div className="bg-blue-50 rounded-xl p-6 mb-8">
              <h3 className="font-bold text-blue-800 mb-4">Cara Bermain:</h3>
              <ul className="text-left text-blue-700 space-y-2">
                <li>• Lihat gambar alat musik yang ditampilkan</li>
                <li>• Baca petunjuk yang diberikan</li>
                <li>• Pilih jawaban yang tepat dari 5 pilihan</li>
                <li>• Dapatkan 10 poin untuk setiap jawaban benar</li>
              </ul>
            </div>

            <button
              onClick={startGame}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-xl text-xl transition-all duration-200"
            >
              Mulai Bermain
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Game Over Screen
  if (gameOver) {
    const percentage = Math.round((score / (questions.length * 10)) * 100);
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
              <p className="text-gray-600">
                dari {questions.length * 10} poin possible
              </p>
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

            <div className="bg-blue-50 rounded-xl p-4 mb-6">
              <p className="text-blue-800">
                {percentage >= 80
                  ? "Luar biasa! Anda sangat menguasai alat musik tradisional!"
                  : percentage >= 60
                  ? "Bagus! Pengetahuan Anda tentang alat musik cukup baik."
                  : percentage >= 40
                  ? "Tidak buruk! Masih ada ruang untuk belajar lebih banyak."
                  : "Jangan menyerah! Terus belajar tentang alat musik Indonesia."}
              </p>
            </div>

            <div className="space-y-3">
              <button
                onClick={() => {
                  setGameOver(false);
                  setCurrentQuestion(0);
                  setUserAnswer("");
                  setScore(0);
                  setShowResult(false);
                  setFeedback("");
                  setAnsweredQuestions(new Set<number>());
                }}
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

  const currentQ = questions[currentQuestion];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-blue-400/10"></div>
        <div className="absolute -bottom-32 -right-32 w-80 h-80 rounded-full bg-blue-300/15"></div>
        <div className="absolute top-1/3 -right-20 w-64 h-64 rounded-full bg-white/5"></div>
        <div className="absolute bottom-1/4 -left-16 w-48 h-48 rounded-full bg-blue-200/10"></div>
      </div>

      <div className="relative z-10 p-6">
        <div className="flex items-center justify-between max-w-4xl mx-auto">
          <div className="flex items-center space-x-4">
            <button
              onClick={resetGame}
              className="p-2 bg-white/20 hover:bg-white/30 rounded-full transition-all duration-200"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
              <span className="text-white font-medium text-sm">
                {currentQuestion + 1} / {questions.length}
              </span>
            </div>
          </div>

          <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-2">
            <span className="text-white font-bold">Score: {score}</span>
          </div>
        </div>
      </div>

      <div className="relative z-10 px-6 pb-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-8">
            Tebak Gambarnya
          </h1>

          <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-6 md:p-8 shadow-2xl">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="text-center">
                <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-8 mb-4 shadow-inner">
                  <div className="mb-4">{renderImage(currentQ)}</div>
                  <div className="w-full h-16 bg-gradient-to-r from-blue-200 to-purple-200 rounded-xl flex items-center justify-center">
                    <span className="text-lg font-bold text-gray-600">
                      {currentQ.region}
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                  {currentQ.title}
                </h2>

                <div className="space-y-2">
                  <h3 className="font-semibold text-gray-700">Petunjuk:</h3>
                  <ul className="space-y-1">
                    {currentQ.hints.map((hint, index) => (
                      <li
                        key={index}
                        className="flex items-center space-x-2 text-gray-600"
                      >
                        <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                        <span>{hint}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="font-semibold text-gray-700 mb-3">
                    Pilih jawaban yang benar:
                  </h3>
                  <div className="space-y-3">
                    {currentQ.choices.map((choice) => (
                      <button
                        key={choice.key}
                        onClick={() => handleChoiceClick(choice.key)}
                        disabled={showResult}
                        className={`w-full p-4 text-left border-2 rounded-xl transition-all duration-200 ${
                          showResult
                            ? choice.key === currentQ.answer
                              ? "bg-green-100 border-green-500 text-green-800"
                              : choice.key === userAnswer
                              ? "bg-red-100 border-red-500 text-red-800"
                              : "bg-gray-100 border-gray-300 text-gray-600"
                            : "bg-white border-gray-200 hover:border-blue-400 hover:bg-blue-50 text-gray-800"
                        } ${showResult ? "cursor-default" : "cursor-pointer"}`}
                      >
                        <div className="flex items-center space-x-3">
                          <div
                            className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                              showResult
                                ? choice.key === currentQ.answer
                                  ? "bg-green-500 text-white"
                                  : choice.key === userAnswer
                                  ? "bg-red-500 text-white"
                                  : "bg-gray-400 text-white"
                                : "bg-blue-500 text-white"
                            }`}
                          >
                            {choice.key}
                          </div>
                          <span className="font-medium">{choice.text}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {showResult && (
                  <div
                    className={`p-4 rounded-xl text-center font-semibold ${
                      feedback.includes("Benar")
                        ? "bg-green-100 text-green-800 border border-green-200"
                        : "bg-red-100 text-red-800 border border-red-200"
                    }`}
                  >
                    <div className="flex items-center justify-center space-x-2 mb-2">
                      {feedback.includes("Benar") ? (
                        <CheckCircle className="w-6 h-6 text-green-600" />
                      ) : (
                        <XCircle className="w-6 h-6 text-red-600" />
                      )}
                      <span className="text-lg">{feedback}</span>
                    </div>
                    {!feedback.includes("Benar") && (
                      <p className="text-sm mt-2 text-gray-600">
                        {currentQ.description}
                      </p>
                    )}
                  </div>
                )}
              </div>
            </div>

            <div className="mt-8">
              <div className="bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-500 rounded-full h-2 transition-all duration-500"
                  style={{
                    width: `${
                      ((currentQuestion + 1) / questions.length) * 100
                    }%`,
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuessThePictureGame;
