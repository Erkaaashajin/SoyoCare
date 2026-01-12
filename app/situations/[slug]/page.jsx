"use client";

import incidentData from "@/app/components/incidentData";
import { useParams } from "next/navigation";
import Link from "next/link";
import { useTheme } from "app/Providers/themeContext.js";

export default function IncidentPage() {
  const params = useParams();
  const slug = params.slug;

  const incident = incidentData.find((item) => item.id === slug);

  console.log("slug:", slug);
  console.log("incident:", incident);

  if (!incident) {
    return (
      <div className="p-10 text-red-500 text-center">
        No incident found for: {slug}
      </div>
    );
  }
    const { theme, setTheme, isEnglish, setIsEnglish } = useTheme();

  return (
    <div
      className={`relative min-h-screen flex flex-col transition ${
        theme
          ? "bg-gradient-to-br from-black via-gray-700 via-gray-300 to-gray-100 text-white min-h-screen"
          : "bg-gradient-to-br from-teal-300 to-[#1e3cfa] text-white min-h-screen"
      } `}
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
      <div className={`max-w-3xl mx-auto  p-8 rounded-2xl shadow-lg ${theme ? "bg-gray-200" : "bg-white"}`}>
        <h1 className={`text-4xl w-[550px] font-bold mb-4 ${theme ? "text-gray-700" : "bg-gradient-to-r from-teal-300 to-[#1e3cfa] bg-clip-text text-transparent"}`}>
          {incident.title}
        </h1>

        <p className={`text-lg text-gray-700 leading-relaxed italic underline font-bold underline-offset-2 ${ theme ? "text-gray-700" : "bg-gradient-to-r from-teal-500 to-[#1e3cfa] w-[700px] bg-clip-text text-transparent"}`}>
          {incident.description}
        </p>
        <p className={`text-lg text-gray-700 leading-relaxed indent-4 w-[700px] ${theme ? "text-gray-700" : "bg-gradient-to-r from-teal-500 to-[#1e3cfa] w-[700px] bg-clip-text text-transparent" }`}>
          {incident.treatment}
        </p>
        <img src={incident.src} className="w-200 h-160 relative top-[30px]" />
      </div>
    </div>
  );
}
