"use client";

import Link from "next/link";
import incidentData from "./incidentData.js";

export default function IncidentGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {Object.entries(incidentData).map(([index, item]) => (
        <Link href={`/situations/${item.id}`} key={index}>
          <div
            className="
            bg-white/10 backdrop-blur-lg border border-white/20 
            p-6 rounded-2xl cursor-pointer
            transition-all duration-300
            hover:scale-[1.04] hover:shadow-xl
            hover:bg-white/20 hover:-translate-y-1
          "
          >
            <h2 className="text-2xl font-semibold mb-2">{item.title}</h2>
            <p className="text-sm opacity-80">{item.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
