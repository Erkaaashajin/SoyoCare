"use client";
import Link from "next/link";
import { useTheme } from "app/Providers/themeContext.js";
import IncidentGrid from "../components/IncidentGrid";

export default function HomePage() {
  const { theme, setTheme, isEnglish, setIsEnglish } = useTheme();

  return (
    <main className="min-h-screen bg-gradient-to-br from-teal-300 to-[#1e3cfa] text-white">
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

      <div className="p-8 relative -top-[40px] ">
        <div className="ml-[30px]">
          {" "}
          <h1 className="text-4xl font-bold mb-6">Medical Emergency Library</h1>
          <p className="opacity-80 mb-10 max-w-xl">
            Browse common medical emergency situations. Click a card to learn
            more about each incident.
          </p>
        </div>
        <div>
          <IncidentGrid />
        </div>
      </div>
    </main>
  );
}
