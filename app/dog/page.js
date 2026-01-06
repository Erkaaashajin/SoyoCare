"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Jiggy() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [count, setCount] = useState(0);
  const [timeLeft, setTimeLeft] = useState(20); // 20 секунд тоглоом
  const [isPlaying, setIsPlaying] = useState(false);

  // Мол гарч ирэх таймер
  useEffect(() => {
    if (!isPlaying) return;

    const timer = setInterval(() => {
      const rand = Math.floor(Math.random() * 20);
      setActiveIndex(rand);

      setTimeout(() => setActiveIndex(null), 1000);
    }, 2000);

    return () => clearInterval(timer);
  }, [isPlaying]);

  // Тоглоомын хугацаа буурах
  useEffect(() => {
    if (!isPlaying) return;

    if (timeLeft <= 0) {
      setIsPlaying(false);
      setActiveIndex(null);
      return;
    }

    const interval = setInterval(() => {
      setTimeLeft((t) => t - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [isPlaying, timeLeft]);

  // 20 нүх
  const holes = Array.from({ length: 9 });

  const startGame = () => {
    setCount(0);
    setTimeLeft(20);
    setIsPlaying(true);
  };

  return (
    <div className="pt-[40px] text-center">
      <h1 className="text-3xl font-bold mb-4">Whack-A-Dog 🌭</h1>

      {/* Товч */}
      {!isPlaying && (
        <button
          onClick={startGame}
          className="px-6 py-3 bg-green-600 text-white rounded-lg mb-4"
        >
          Start Game
        </button>
      )}

      {/* Оноо + цаг */}
      {isPlaying && (
        <div className="text-xl mb-4">
          <p>⏳ Time: {timeLeft}</p>
          <p>🔥 Score: {count}</p>
        </div>
      )}

      {/* Дууссан үед */}
      {!isPlaying && timeLeft === 0 && (
        <div className="text-2xl font-bold text-red-600 mb-4">
          🎉 Game Over: {count}
        </div>
      )}

      {/* Нүхнүүд */}
      <div className="grid grid-cols-3 gap-8 justify-center w-full max-w-[700px] mx-auto mt-4 gap-[50px] pt-20">
        {holes.map((_, i) => (
          <div key={i} className="relative flex justify-center">
            {/* Mole */}
            <div
              onClick={() => {
                if (activeIndex === i && isPlaying) {
                  setCount((c) => c + 1);
                  setActiveIndex(null);
                }
              }}
              className={`w-[30px] bg-amber-600 h-[49px] rounded-t-full absolute transition-all duration-300 cursor-pointer
              ${
                activeIndex === i
                  ? "opacity-100 -translate-y-6"
                  : "opacity-0 translate-y-2 pointer-events-none"
              }
            `}
            ></div>

            {/* Hole */}
            <div className="w-[100px] h-[25px] bg-stone-500 rounded-[40px] flex justify-center pt-[5px]">
              <div className="w-[40px] h-[20px] bg-neutral-600 rounded-[200px]"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
