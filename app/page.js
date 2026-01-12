"use client";
import Link from "next/link";
import { useTheme } from "./Providers/themeContext";
import BlurText from "@/components/BlurText";

export default function Home() {
  const { theme, setTheme, isEnglish, setIsEnglish } = useTheme();
  const handleAnimationComplete = () => {
    console.log("Animation completed!");
  };


  const scrollToContact = () => {
    const section = document.getElementById("contact");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className={`relative h-[100vh] flex flex-col transition  ${
        theme
          ? "bg-gradient-to-br from-black via-gray-700 via-gray-300 to-gray-100 text-white"
          : "bg-gradient-to-br from-teal-300 to-[#1e3cfa] text-white"
      }`}
    >
      <div>
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
            {/* HOME → Scroll to Contact */}
            <Link href="/">
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
                  src={` ${
                    theme ? "/image/actualsun.png" : "/image/realmoon.png"
                  } `}
                  className={`w-[50px] h-[50px] rounded-[10px]
                    ${
                      theme ? "" : "bg-gradient-br from-teal-300 to-[#1e3cfa]"
                    }`}
                />
              </button>
            </li>
          </ul>
        </nav>

        {/* HERO SECTION */}
        <div className="flex flex-col text-left mt-7 ml-[70px]">
          <BlurText
            text="Learn Life-Saving Skills"
            delay={150}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="text-6xl font-extrabold leading-tight max-w-3x"
          />
          <BlurText
            text="Master medical emergencies"
            delay={180}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="text-6xl text-blue-700 font-extrabold leading-tight max-w-3x"
          />
          <BlurText
            text="with step-by-step guides"
            delay={150}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="text-6xl font-extrabold leading-tight max-w-3x"
          />
          <BlurText
            text="when seconds matter most"
            delay={180}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="text-6xl font-extrabold leading-tight max-w-3x"
          />
          <BlurText
            text="Be prepared. Save lives."
            delay={100}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="text-lg mt-6 max-w-xl text-grey-700 underline underline-offset-3 opacity-80"
          />
          <div className="mt-10 flex gap-4">
            <Link
              href="/HomePage"
              className={`px-8 py-3 rounded-full font-bold transition ${
                theme
                  ? "text-white backdrop-blur-xl border border-white/20 bg-radial-[at_50%_75%] from-blue-400/20 via-blue-500/20 to-blue-700"
                  : "bg-radial-[at_50%_75%] from-blue-600 via-blue-700 via-blue-800 to-blue-900 border border-white/70 hover:bg-white hover:text-blue-900"
              }`}
            >
                START LEARNING NOW
            </Link>

            <button
              onClick={scrollToContact}
              className={`px-8 py-3 rounded-full font-bold transition ${
                theme
                  ? "text-white backdrop-blur-xl border border-white/20 bg-radial-[at_50%_75%] from-teal-100/20 via-teal-300/20 to-teal-400 cursor-pointer"
                  : "bg-radial-[at_50%_75%] from-teal-200 via-teal-300 to-teal-400 border border-white/70 text-black cursor-pointer hover:bg-black hover:text-teal-400"
              }`}
            >
              LEARN MORE
            </button>
          </div>
        </div>

        {/* WAVE */}
        <div className="relative top-[6px] left-0 w-full overflow-hidden leading-none">
          <svg
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-[150px]"
          >
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,240 C240,200 480,160 720,180 C960,200 1200,260 1440,240 L1440,320 L0,320 Z"
            ></path>
          </svg>
        </div>
      </div>

      {/* CONTACT SECTION */}
      <div className="h-[500px] relative top-[60px]">
        <div className="flex flex-col gap-[5px] ">
          <div className="h-[2px] w-full bg-[#d1d0cf]"></div>
          <div className="h-[2px] w-full bg-[#d1d0cf]"></div>
        </div>

        {/* 👇 ID ADDED HERE */}
        <div id="contact" className="h-[400px] w-full bg-white">
          <div className="max-w-7xl mx-auto px-4 py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl text-gray-900 font-bold mb-4">
                  🏥 Contact
                </h3>
                <p className="text-gray-500 mb-2">📧 soyocare@mgmail.mn</p>
                <p className="text-gray-500 mb-2">📞 +976 9047-5522</p>
                <p className="text-gray-500">📍 Ulaanbaatar</p>
              </div>

              <div>
                <h3 className="text-xl text-gray-900 font-bold mb-4">
                  ⚡ Emergency
                </h3>
                <p className="text-gray-500 mb-2">🚑 Ambulance: 103</p>
                <p className="text-gray-500 mb-2">🔥 Fires: 101</p>
                <p className="text-gray-500">👮 Police: 102</p>
              </div>

              <div>
                <h3 className="text-xl text-gray-900 font-bold mb-4">
                  ℹ️ Information
                </h3>
                <p className="text-gray-500 text-sm">
                  Health information is taken from reliable sources and verified
                  by professional doctors.
                </p>
              </div>
            </div>

            <div className="border-t border-[#d1d0cf] mt-8 pt-8 text-center">
              <p className="text-gray-500">
                © 2025 Health News. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
