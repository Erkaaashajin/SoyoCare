"use client";
import { useEffect, useState } from "react";

export default function Jiggy() {
  const [activeMoles, setActiveMoles] = useState([]); // 5 молын array
  const [count, setCount] = useState(0);
  const [timeLeft, setTimeLeft] = useState(20);
  const [isPlaying, setIsPlaying] = useState(false);

  const HOLES_COUNT = 20;
  const MOLES_COUNT = 5;

  // ▶ 5 молыг random гаргах
  useEffect(() => {
    if (!isPlaying) return;

    const timer = setInterval(() => {
      const newMoles = new Set();

      while (newMoles.size < MOLES_COUNT) {
        newMoles.add(Math.floor(Math.random() * HOLES_COUNT));
      }

      setActiveMoles([...newMoles]);

      setTimeout(() => {
        setActiveMoles([]);
      }, 1000);
    }, 2000);

    return () => clearInterval(timer);
  }, [isPlaying]);

  // ▶ цаг тоолуур
  useEffect(() => {
    if (!isPlaying) return;

    if (timeLeft <= 0) {
      setIsPlaying(false);
      setActiveMoles([]);
      return;
    }

    const interval = setInterval(() => {
      setTimeLeft((t) => t - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [isPlaying, timeLeft]);

  const holes = Array.from({ length: HOLES_COUNT });

  const startGame = () => {
    setCount(0);
    setTimeLeft(20);
    setIsPlaying(true);
  };

  return (
    <div className="pt-[40px] text-center">
      <h1 className="text-3xl font-bold mb-4">Whack-A-Dog 🌭</h1>

      {!isPlaying && (
        <button
          onClick={startGame}
          className="px-6 py-3 bg-green-600 text-white rounded-lg mb-4"
        >
          Start Game
        </button>
      )}

      {isPlaying && (
        <div className="text-xl mb-4">
          <p>⏳ Time: {timeLeft}</p>
          <p>🔥 Score: {count}</p>
        </div>
      )}

      {!isPlaying && timeLeft === 0 && (
        <div className="text-2xl font-bold text-red-600 mb-4">
          🎉 Game Over: {count}
        </div>
      )}

      {/* Нүхнүүд */}
      <div className="grid grid-cols-5 gap-8 justify-center w-full max-w-[700px] mx-auto mt-4 gap-[50px] pt-20">
        {holes.map((_, i) => (
          <div key={i} className="relative flex justify-center">
            {/* Mole */}
            <div
              onClick={() => {
                if (activeMoles.includes(i) && isPlaying) {
                  setCount((c) => c + 1);

                  // дарсан молыг list-ээс хасах
                  setActiveMoles((m) => m.filter((id) => id !== i));
                }
              }}
              className={`w-[30px] bg-amber-600 h-[49px] rounded-t-full absolute transition-all duration-300 cursor-pointer
                ${
                  activeMoles.includes(i)
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
