"use client";

import React, { useState, useEffect } from "react";
import {
  ChevronLeft,
  Home,
  RotateCcw,
  Trophy,
  Star,
  CheckCircle,
  XCircle,
  Clock,
  BookOpen,
} from "lucide-react";

interface Choice {
  key: string;
  text: string;
}

interface Question {
  id: number;
  category: string;
  question: string;
  choices: Choice[];
  answer: string;
  explanation: string;
  difficulty: "easy" | "medium" | "hard";
}

const IndonesianCultureQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [timeLeft, setTimeLeft] = useState(30);
  const [gameStarted, setGameStarted] = useState(false);

  const questions: Question[] = [
    {
      id: 1,
      category: "Budaya & Tradisi",
      question:
        "Apa nama upacara adat pernikahan tradisional Jawa yang dilakukan sebelum akad nikah?",
      choices: [
        { key: "A", text: "Siraman" },
        { key: "B", text: "Midodareni" },
        { key: "C", text: "Panggih" },
        { key: "D", text: "Sungkeman" },
      ],
      answer: "B",
      explanation:
        "Midodareni adalah upacara adat Jawa yang dilakukan sehari sebelum pernikahan, dimana calon pengantin wanita dipercantik dan didoakan agar menjadi istri yang baik.",
      difficulty: "medium",
    },
    {
      id: 2,
      category: "Kuliner Tradisional",
      question:
        "Makanan khas Sumatera Barat yang terbuat dari daging sapi yang dimasak dalam santan dengan bumbu rempah-rempah hingga kering adalah?",
      choices: [
        { key: "A", text: "Gudeg" },
        { key: "B", text: "Rendang" },
        { key: "C", text: "Soto Betawi" },
        { key: "D", text: "Rawon" },
      ],
      answer: "B",
      explanation:
        "Rendang adalah masakan daging khas Minangkabau yang dimasak dalam waktu lama dengan santan dan bumbu rempah hingga kuahnya mengering dan berwarna coklat tua.",
      difficulty: "easy",
    },
    {
      id: 3,
      category: "Rumah Adat",
      question:
        "Rumah adat dengan atap berbentuk tanduk kerbau yang berasal dari Sumatera Barat disebut?",
      choices: [
        { key: "A", text: "Rumah Joglo" },
        { key: "B", text: "Rumah Gadang" },
        { key: "C", text: "Rumah Honai" },
        { key: "D", text: "Rumah Panggung" },
      ],
      answer: "B",
      explanation:
        "Rumah Gadang adalah rumah adat Minangkabau dengan ciri khas atap berbentuk tanduk kerbau (gonjong) yang melengkung ke atas.",
      difficulty: "easy",
    },
    {
      id: 4,
      category: "Pakaian Adat",
      question:
        "Pakaian adat wanita Bali yang terdiri dari kemben, sabuk, dan selendang disebut?",
      choices: [
        { key: "A", text: "Kebaya Encim" },
        { key: "B", text: "Baju Kurung" },
        { key: "C", text: "Payas Agung" },
        { key: "D", text: "Ulos" },
      ],
      answer: "C",
      explanation:
        "Payas Agung adalah pakaian adat perempuan Bali yang dikenakan dalam upacara keagamaan, terdiri dari kemben, sabuk prada, dan selendang.",
      difficulty: "hard",
    },
    {
      id: 5,
      category: "Tarian Tradisional",
      question: "Tari Saman berasal dari daerah mana di Indonesia?",
      choices: [
        { key: "A", text: "Jawa Tengah" },
        { key: "B", text: "Sumatera Utara" },
        { key: "C", text: "Aceh" },
        { key: "D", text: "Kalimantan Timur" },
      ],
      answer: "C",
      explanation:
        "Tari Saman adalah tarian tradisional dari Aceh yang dibawakan oleh puluhan penari pria dengan gerakan yang sangat cepat dan kompak.",
      difficulty: "medium",
    },
    {
      id: 6,
      category: "Bahasa Daerah",
      question: "Dalam bahasa Jawa, kata 'mangga' berarti?",
      choices: [
        { key: "A", text: "Buah mangga" },
        { key: "B", text: "Silakan/mari" },
        { key: "C", text: "Pergi" },
        { key: "D", text: "Makan" },
      ],
      answer: "B",
      explanation:
        "'Mangga' dalam bahasa Jawa halus berarti 'silakan' atau 'mari', digunakan untuk mengundang atau mempersilakan seseorang.",
      difficulty: "medium",
    },
    {
      id: 7,
      category: "Sejarah & Kebudayaan",
      question: "Candi Borobudur dibangun pada masa kerajaan apa?",
      choices: [
        { key: "A", text: "Kerajaan Majapahit" },
        { key: "B", text: "Kerajaan Sriwijaya" },
        { key: "C", text: "Kerajaan Syailendra" },
        { key: "D", text: "Kerajaan Mataram" },
      ],
      answer: "C",
      explanation:
        "Candi Borobudur dibangun pada abad ke-8 dan ke-9 Masehi pada masa Dinasti Syailendra yang menguasai Jawa Tengah.",
      difficulty: "hard",
    },
    {
      id: 8,
      category: "Kesenian Tradisional",
      question:
        "Wayang kulit adalah seni pertunjukan tradisional yang berasal dari daerah?",
      choices: [
        { key: "A", text: "Jawa" },
        { key: "B", text: "Sunda" },
        { key: "C", text: "Bali" },
        { key: "D", text: "Semua jawaban benar" },
      ],
      answer: "D",
      explanation:
        "Wayang kulit ditemukan di berbagai daerah di Indonesia seperti Jawa, Sunda, dan Bali, masing-masing dengan ciri khas dan cerita yang berbeda.",
      difficulty: "medium",
    },
  ];

  // Timer effect
  useEffect(() => {
    if (gameStarted && timeLeft > 0 && !showResult && !gameOver) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && !showResult) {
      handleTimeUp();
    }
  }, [timeLeft, gameStarted, showResult, gameOver]);

  const handleTimeUp = () => {
    const currentQ = questions[currentQuestion];
    const correctAnswer = currentQ.choices.find(
      (choice) => choice.key === currentQ.answer
    );

    setFeedback(
      `Waktu habis! Jawabannya adalah: ${currentQ.answer}. ${correctAnswer?.text}`
    );
    setUserAnswer("");
    setShowResult(true);

    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setUserAnswer("");
        setShowResult(false);
        setFeedback("");
        setTimeLeft(30);
      } else {
        setGameOver(true);
      }
    }, 3000);
  };

  const handleChoiceClick = (selectedChoice: string) => {
    if (showResult) return;

    const currentQ = questions[currentQuestion];
    const isCorrect = selectedChoice === currentQ.answer;

    if (isCorrect) {
      const timeBonus = Math.floor(timeLeft / 5);
      const difficultyMultiplier =
        currentQ.difficulty === "easy"
          ? 1
          : currentQ.difficulty === "medium"
          ? 1.5
          : 2;
      const points = Math.floor((10 + timeBonus) * difficultyMultiplier);

      setScore(score + points);
      setFeedback(`Benar! 🎉 (+${points} poin)`);
    } else {
      const correctAnswer = currentQ.choices.find(
        (choice) => choice.key === currentQ.answer
      );
      setFeedback(
        `Salah! Jawabannya adalah: ${currentQ.answer}. ${correctAnswer?.text}`
      );
    }

    setUserAnswer(selectedChoice);
    setShowResult(true);

    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setUserAnswer("");
        setShowResult(false);
        setFeedback("");
        setTimeLeft(30);
      } else {
        setGameOver(true);
      }
    }, 3000);
  };

  const startGame = () => {
    setGameStarted(true);
    setTimeLeft(30);
  };

  const resetGame = () => {
    setCurrentQuestion(0);
    setUserAnswer("");
    setScore(0);
    setShowResult(false);
    setGameOver(false);
    setFeedback("");
    setTimeLeft(30);
    setGameStarted(false);
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "easy":
        return "bg-green-100 text-green-800 border-green-200";
      case "medium":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "hard":
        return "bg-red-100 text-red-800 border-red-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  // Start Screen
  if (!gameStarted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-500 via-amber-600 to-amber-700 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-amber-400/10"></div>
          <div className="absolute -bottom-32 -right-32 w-80 h-80 rounded-full bg-amber-300/15"></div>
        </div>

        <div className="relative z-10 min-h-screen flex items-center justify-center p-6">
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 max-w-lg w-full text-center shadow-2xl">
            <BookOpen className="w-16 h-16 text-amber-600 mx-auto mb-6" />
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Quiz Budaya Indonesia
            </h1>
            <p className="text-gray-600 text-lg mb-8">
              Uji pengetahuan Anda tentang kekayaan budaya Indonesia!
              <br />
              <strong>{questions.length} pertanyaan</strong> menanti Anda.
            </p>

            <div className="bg-amber-50 rounded-xl p-6 mb-8">
              <h3 className="font-bold text-amber-800 mb-4">
                Aturan Permainan:
              </h3>
              <ul className="text-left text-amber-700 space-y-2">
                <li>• Setiap pertanyaan memiliki waktu 30 detik</li>
                <li>• Poin berdasarkan tingkat kesulitan dan sisa waktu</li>
                <li>
                  • Easy: 10-16 poin, Medium: 15-24 poin, Hard: 20-32 poin
                </li>
                <li>• Jawab dengan cepat untuk bonus poin!</li>
              </ul>
            </div>

            <button
              onClick={startGame}
              className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-4 px-8 rounded-xl text-xl transition-all duration-200"
            >
              Mulai Quiz
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Game Over Screen
  if (gameOver) {
    const maxScore = questions.reduce((total, q) => {
      const multiplier =
        q.difficulty === "easy" ? 1 : q.difficulty === "medium" ? 1.5 : 2;
      return total + Math.floor((10 + 5) * multiplier);
    }, 0);

    const percentage = Math.round((score / maxScore) * 100);

    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-500 via-amber-600 to-amber-700 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-amber-400/10"></div>
          <div className="absolute -bottom-32 -right-32 w-80 h-80 rounded-full bg-amber-300/15"></div>
        </div>

        <div className="relative z-10 min-h-screen flex items-center justify-center p-6">
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 max-w-md w-full text-center shadow-2xl">
            <Trophy className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              Quiz Selesai!
            </h2>

            <div className="text-6xl font-bold text-amber-600 mb-2">
              {score}
            </div>
            <p className="text-gray-600 mb-4">dari {maxScore} poin maksimal</p>

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
            <p className="text-lg font-semibold text-gray-700 mb-6">
              {percentage}% Benar!
            </p>

            <div className="bg-amber-50 rounded-xl p-4 mb-6">
              <p className="text-amber-800">
                {percentage >= 80
                  ? "Luar biasa! Anda sangat menguasai budaya Indonesia!"
                  : percentage >= 60
                  ? "Bagus! Pengetahuan budaya Anda cukup baik."
                  : percentage >= 40
                  ? "Tidak buruk! Masih ada ruang untuk belajar lebih banyak."
                  : "Jangan menyerah! Terus belajar tentang budaya Indonesia."}
              </p>
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
                onClick={resetGame}
                className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-6 rounded-xl transition-all duration-200 flex items-center justify-center space-x-2"
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
    <div className="min-h-screen bg-gradient-to-br from-amber-500 via-amber-600 to-amber-700 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-amber-400/10"></div>
        <div className="absolute -bottom-32 -right-32 w-80 h-80 rounded-full bg-amber-300/15"></div>
        <div className="absolute top-1/3 -right-20 w-64 h-64 rounded-full bg-white/5"></div>
        <div className="absolute bottom-1/4 -left-16 w-48 h-48 rounded-full bg-amber-200/10"></div>
      </div>

      {/* Header */}
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

          <div className="flex items-center space-x-4">
            <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 flex items-center space-x-2">
              <Clock className="w-5 h-5 text-white" />
              <span
                className={`text-white font-bold ${
                  timeLeft <= 10 ? "text-red-200" : ""
                }`}
              >
                {timeLeft}s
              </span>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-2">
              <span className="text-white font-bold">Score: {score}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 px-6 pb-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-8">
            Quiz Budaya Indonesia
          </h1>

          <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-6 md:p-8 shadow-2xl">
            {/* Question Header */}
            <div className="flex items-center justify-between mb-6">
              <div
                className={`px-4 py-2 rounded-full text-sm font-semibold border ${getDifficultyColor(
                  currentQ.difficulty
                )}`}
              >
                {currentQ.difficulty === "easy"
                  ? "Mudah"
                  : currentQ.difficulty === "medium"
                  ? "Sedang"
                  : "Sulit"}
              </div>
              <div className="px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-medium">
                {currentQ.category}
              </div>
            </div>

            {/* Question */}
            <div className="mb-8">
              <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
                {currentQ.question}
              </h2>
            </div>

            {/* Choices */}
            <div className="space-y-4 mb-6">
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
                      : "bg-white border-gray-200 hover:border-amber-400 hover:bg-amber-50 text-gray-800"
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
                          : "bg-amber-500 text-white"
                      }`}
                    >
                      {choice.key}
                    </div>
                    <span className="font-medium">{choice.text}</span>
                  </div>
                </button>
              ))}
            </div>

            {/* Feedback */}
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
                <p className="text-sm mt-2 text-gray-600">
                  {currentQ.explanation}
                </p>
              </div>
            )}

            {/* Progress Bar */}
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

export default IndonesianCultureQuiz;
