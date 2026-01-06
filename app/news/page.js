"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function MedicalNewsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    { id: "all", name: "All", icon: "🏥", color: "bg-blue-500" },
    { id: "research", name: "Research", icon: "🔬", color: "bg-purple-500" },
    {
      id: "prevention",
      name: "Prevention",
      icon: "💊",
      color: "bg-green-500",
    },
    { id: "treatment", name: "Treatment", icon: "⚕️", color: "bg-red-500" },
    {
      id: "nutrition",
      name: "Nutrition",
      icon: "🥗",
      color: "bg-orange-500",
    },
    { id: "mental", name: "Mental health", icon: "🧠", color: "bg-pink-500" },
  ];

  const medicalNews = [
    {
      id: 1,
      category: "research",
      title: "New cancer treatment method discovered",
      description:
        "Scientists have developed a new way to kill cancer cells, and the results of the tests have been positive. This could save thousands of lives.",
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=500",
      date: "2025-11-13",
      author: "Dr. B.Bold",
      readTime: "5 min",
      severity: "high",
    },
    {
      id: 2,
      category: "prevention",
      title: "COVID-19 new vaccine",
      description:
        "The World Health Organization has approved a vaccine for the new strain of COVID-19 and has begun delivering it to the population.",
      image:
        "https://images.unsplash.com/photo-1584483766114-2cea6facdf57?w=500",
      date: "2025-11-12",
      author: "Dr. S.Saihan",
      readTime: "4 min",
      severity: "medium",
    },
    {
      id: 3,
      category: "nutrition",
      title: "Nutrition tips for winter",
      description:
        "Experts gave advice on how to improve your immune system and what foods to eat during the winter.",
      image:
        "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=500",
      date: "2025-11-11",
      author: "Nutrition expert D.Dulam",
      readTime: "6 min",
      severity: "low",
    },
    {
      id: 4,
      category: "mental",
      title: "10 Ways to Deal with Stress",
      description:
        "Psychologists share practical tips for reducing daily stress. This will help improve the quality of life.",
      image:
        "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=500",
      date: "2025-11-10",
      author: "Psychologist E.Enkhtuya",
      readTime: "7 min",
      severity: "medium",
    },
    {
      id: 5,
      category: "treatment",
      title: "A new treatment for heart disease",
      description:
        "Mongolian doctors are successfully performing heart surgeries using modern technology.",
      image:
        "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?w=500",
      date: "2025-11-09",
      author: "Heart surgeon Ts.Tsetseg",
      readTime: "8 min",
      severity: "high",
    },
    {
      id: 6,
      category: "research",
      title: "Artificial intelligence in hospitals",
      description:
        "AI technology is helping diagnose diseases and develop treatment plans. It is increasing outcomes by 40%.",
      image:
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=500",
      date: "2025-11-08",
      author: "Dr. G.Ganbold",
      readTime: "5 min",
      severity: "medium",
    },
    {
      id: 7,
      category: "prevention",
      title: "Flu prevention",
      description:
        "Medical advice on how to prevent the flu and how to treat it if you get it.",
      image:
        "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=500",
      date: "2025-11-07",
      author: "Dr. B.Bayr",
      readTime: "4 min",
      severity: "low",
    },
    {
      id: 8,
      category: "nutrition",
      title: "The benefits of Vitamin D",
      description:
        "Vitamin D deficiency increases in winter. Expert advice on how to compensate for it.",
      image:
        "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?w=500",
      date: "2025-11-06",
      author: "Dr. S.Sarnai",
      readTime: "5 min",
      severity: "medium",
    },
  ];

  const filteredNews = medicalNews.filter((article) => {
    const matchesCategory =
      selectedCategory === "all" || article.category === selectedCategory;
    const matchesSearch =
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getSeverityBadge = (severity) => {
    const badges = {
      high: { text: "Important", color: "bg-red-100 text-red-700" },
      medium: { text: "Interesting", color: "bg-yellow-100 text-yellow-700" },
      low: { text: "Information", color: "bg-blue-100 text-blue-700" },
    };
    return badges[severity];
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <header className=" bg-linear-to-bl from-teal-300 to-[#1e3cfa] text-white shadow-md sticky top-0 z-50">
        {" "}
        <Link href="/setgelzui">
          {" "}
          <div className="absolute top-[30px] left-[20px]">
            <img className="w-[30px] h-[30px]" src="/image/back.png" />
          </div>
        </Link>
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-white flex items-center gap-3">
                🏥 Medical News
              </h1>
              <p className="text-white mt-2">
                Recent news, and research in the medical world
              </p>
            </div>
            <div className="hidden md:flex items-center gap-2 bg-red-50 px-4 py-2 rounded-lg">
              <span className="text-2xl">📞</span>
              <div>
                <p className="text-xs text-gray-600">Emergency care</p>
                <p className="font-bold text-red-600">103</p>
              </div>
            </div>
          </div>

          {/* Search Bar */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search news..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full text-white px-5 py-3 pl-12 rounded-full border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors"
            />
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xl">
              🔍
            </span>
          </div>
        </div>
      </header>

      {/* Categories */}
      <div className=" bg-[#1e3cfa] text-white border-b sticky top-[168px] z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-5 py-2.5 rounded-full font-semibold whitespace-nowrap transition-all flex items-center gap-2 ${
                  selectedCategory === category.id
                    ? `${category.color} text-white shadow-lg scale-105`
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                <span>{category.icon}</span>
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Banner */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white rounded-xl p-4 shadow-sm text-center">
            <p className="text-3xl font-bold text-blue-600">8</p>
            <p className="text-sm text-gray-600 mt-1">Recent news</p>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-sm text-center">
            <p className="text-3xl font-bold text-green-600">24/7</p>
            <p className="text-sm text-gray-600 mt-1">Updated</p>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-sm text-center">
            <p className="text-3xl font-bold text-purple-600">100+</p>
            <p className="text-sm text-gray-600 mt-1">Experts</p>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-sm text-center">
            <p className="text-3xl font-bold text-orange-600">50K+</p>
            <p className="text-sm text-gray-600 mt-1">Readers</p>
          </div>
        </div>
      </div>

      {/* News Grid */}
      <main className="max-w-7xl mx-auto px-4 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredNews.map((article) => {
            const badge = getSeverityBadge(article.severity);
            return (
              <article
                key={article.id}
                className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden group cursor-pointer transform hover:-translate-y-1"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 flex gap-2">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${badge.color}`}
                    >
                      {badge.text}
                    </span>
                  </div>
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                    <span>⏱️</span>
                    {article.readTime}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-2xl">
                      {categories.find((c) => c.id === article.category)?.icon}
                    </span>
                    <span className="text-xs font-semibold text-gray-500 uppercase">
                      {categories.find((c) => c.id === article.category)?.name}
                    </span>
                  </div>

                  <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {article.title}
                  </h2>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {article.description}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-4 pb-4 border-b">
                    <span className="font-medium flex items-center gap-1">
                      👨‍⚕️ {article.author}
                    </span>
                    <span className="flex items-center gap-1">
                      📅 {article.date}
                    </span>
                  </div>

                  {/* Read More Button */}
                  <button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 rounded-xl font-semibold hover:from-blue-600 hover:to-blue-700 transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2">
                    <span>Read more</span>
                    <span>→</span>
                  </button>
                </div>
              </article>
            );
          })}
        </div>

        {/* No Results */}
        {filteredNews.length === 0 && (
          <div className="text-center py-16 bg-white rounded-2xl shadow-sm">
            <span className="text-6xl mb-4 block">🔍</span>
            <p className="text-gray-500 text-lg">
              There wasn't anything that matched your search
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("all");
              }}
              className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors"
            >
              See all
            </button>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-blue-900 to-blue-800 text-white mt-16">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">🏥 Contact</h3>
              <p className="text-blue-200 mb-2">📧 soyocare@mgmail.mn</p>
              <p className="text-blue-200 mb-2">📞 +976 9047-5522</p>
              <p className="text-blue-200">📍 Ulaanbaatar</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">⚡ Emergency</h3>
              <p className="text-blue-200 mb-2">🚑 Ambulance: 103</p>
              <p className="text-blue-200 mb-2">🔥 Fires: 101</p>
              <p className="text-blue-200">👮 Police: 102</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">ℹ️ Information</h3>
              <p className="text-blue-200 text-sm">
                Health information is taken from reliable sources and verified
                by professional doctors.
              </p>
            </div>
          </div>
          <div className="border-t border-blue-700 mt-8 pt-8 text-center">
            <p className="text-blue-300">
              © 2025 Health News. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
