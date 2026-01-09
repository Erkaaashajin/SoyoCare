"use client";
import Link from "next/link";
import { useTheme } from "app/Providers/themeContext.js";
import BlurText from "@/components/BlurText";

export default function Setgelzui() {
  const { theme, setTheme, isEnglish, setIsEnglish } = useTheme();

  const scrollToContact = () => {
    const section = document.getElementById("contact");
    section?.scrollIntoView({ behavior: "smooth" });
  };
  const handleAnimationComplete = () => {
    console.log("Animation completed!");
  };
  return (
    <main
      className={`relative min-h-screen flex flex-col transition duration-[700ms]  ${
        theme
          ? "bg-gradient-to-br from-black via-gray-700 via-gray-300 to-gray-100 text-white"
          : "bg-gradient-to-br from-teal-300 to-[#1e3cfa] text-white"
      }`}
    >
      <nav className="flex justify-between items-center px-10 ">
        <div className="flex items-center space-x-2">
          <Link href="/">
            <img
              src="/image/newest.png"
              alt="SoyoCare Logo"
              className="w-50 h-50"
            />
          </Link>
        </div>

        <ul className="flex items-center space-x-10 text-xl font-bold uppercase">
          <Link href={"/"}>
            <li className="hover:text-blue-300 cursor-pointer">Home</li>
          </Link>


          <Link href="/setgelzui">
            <li className="hover:text-blue-300 cursor-pointer">PSYCHOLOGY</li>
          </Link>

          <li>
            <Link
              href="/HomePage"
              className={`px-6 py-2 rounded-full cursor-pointer transition ${
                theme
                  ? "text-white backdrop-blur-xl border border-white/20 bg-radial-[at_70%_75%] from-teal-100/20 via-teal-300/20 to-teal-400"
                  : "bg-radial-[at_50%_75%] from-teal-200 via-teal-300 to-teal-400 border border-white/70 hover:text-teal-400 hover:bg-black text-black "
              }`}
            >
              LEARN
            </Link>
          </li>

          <li>
            <button
              className={`border-2 rounded-[12px]`}
              onClick={() => {
                setTheme(!theme);
              }}
            >
              <img
                src={` ${theme ? "/image/sun.png" : "/image/moon.png"} `}
                className={`w-[50px] h-[50px] rounded-[10px]
                    ${theme ? "bg-gray-800" : "bg-white"}`}
              />
            </button>
          </li>
        </ul>
      </nav>
      {/* 1-р хэсэг */}
      <section
        className="h-screen bg-cover bg-center flex flex-col items-center justify-center space-y-10 text-center"
        style={{ backgroundImage: "url('backround/copy.jpg')" }}
      >
        <h1 className="text-4xl md:text-6xl font-bold text-white tracking-wider">
          NEWS AND INFORMATION?
        </h1>
        <Link
          href="/news"
          className={`transition px-10 py-4 rounded-full font-semibold 
            ${
              theme
                ? "text-white backdrop-blur-xl border border-white/20 bg-radial-[at_70%_75%] from-violet-400/20 via-violet-300/20 to-purple-600"
                : "bg-gradient-to-r from-violet-500 to-purple-400 shadow-md hover:opacity-90 transition"
            }
            `}
        >
          CONTINUE →
        </Link>
      </section>

      {/* 2-р хэсэг */}

      <section
        className="h-screen bg-cover bg-center flex flex-col items-center justify-center space-y-8 text-center"
        style={{ backgroundImage: "url('backround/uuu.jpg')" }}
      >
        <h2 className=" text-3xl md:text-5xl italic text-white font-semibold">
          PSYCHOLOGY ADVICE
        </h2>
        <p className=" text-sm text-white tracking-widest uppercase">
          SOYO MEDICAL TECT
        </p>
        <Link
          href="/test"
          className={`transition px-10 py-4 rounded-full font-semibold 
            ${
              theme
                ? "text-white backdrop-blur-xl border border-white/20 bg-radial-[at_70%_75%] from-violet-400/20 via-violet-300/20 to-purple-600"
                : "bg-gradient-to-r from-violet-500 to-purple-400 shadow-md hover:opacity-90 transition"
            }
            `}
        >
          GET ADVICE
        </Link>
      </section>
    </main>
  );
}
