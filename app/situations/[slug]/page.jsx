"use client";

import incidentData from "@/app/components/incidentData";
import { useParams } from "next/navigation";
import Link from "next/link";

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

  return (
    <div className="relative min-h-screen flex flex-col bg-gradient-to-br from-teal-300 to-[#1e3cfa] text-white">
        <nav className="flex justify-between items-center px-10 relative ">
          <div className="flex items-center space-x-2">
            <Link href="/">
              <img
                src="/image/newest.png"
                alt="SoyoCare Logo"
                className="w-50 h-50"
              />
            </Link>
            <span className="font-semibold text-lg text-blue-100"></span>
          </div>

          <ul className="flex items-center space-x-10 text-xl font-semibold uppercase">
            <Link href="/">
              <li className="hover:text-blue-300 cursor-pointer">Home</li>
            </Link>
            <li className="hover:text-blue-300 cursor-pointer">Games</li>
            <li className="hover:text-blue-300 cursor-pointer">About Us</li>
            <li>
              <Link
                href="/HomePage"
                className="px-6 py-2 rounded-full bg-teal-400 hover:text-teal-400 hover:bg-black cursor-pointer transition text-black"
              >
                LEARN
              </Link>
            </li>
          </ul>
        </nav>
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-lg">
          <h1 className="text-4xl w-[550px] font-bold mb-4 bg-gradient-to-r from-teal-300 to-[#1e3cfa] bg-clip-text text-transparent">
            {incident.title}
          </h1>

          <p className="text-lg text-gray-700 leading-relaxed italic underline font-bold underline-offset-2 bg-gradient-to-r from-teal-500 to-[#1e3cfa] w-[700px] bg-clip-text text-transparent">
            {incident.description}
          </p>
          <p className="text-lg text-gray-700 leading-relaxed indent-4 w-[700px] bg-gradient-to-r from-teal-500 to-[#1e3cfa] w-[700px] bg-clip-text text-transparent ">
            {incident.treatment}
          </p>
          <img src={incident.src} className="w-200 h-160 relative top-[30px]" />
        </div>
    </div>
  );
}
