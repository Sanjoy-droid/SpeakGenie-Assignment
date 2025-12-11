"use client";
import React, { useState } from "react";
import { ChevronLeft, Sparkles, Lightbulb, Target } from "lucide-react";
import { useRouter } from "next/navigation";

const LearnComp = () => {
  const [topic, setTopic] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const router = useRouter();

  const predefinedTopics = [
    "My Best Friend",
    "Cricket Basics",
    "Solar System",
    "Healthy Habits", // fixed: removed empty ","
    "Animals & Birds",
    "School Picnic",
  ];

  const handleTopicClick = (t: string) => {
    setTopic(t);
  };

  return (
    <div className="bg-gray-50 min-h-screen pb-32 font-sans">
      {/* Header */}
      <div className="p-4 flex items-center gap-3">
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 px-5 py-3 bg-white rounded-full shadow-md hover:shadow-lg active:scale-95 transition-all duration-200 cursor-pointer"
        >
          <ChevronLeft className="w-5 h-5 text-emerald-600" />
          <span className="text-emerald-600 font-semibold text-base">Back</span>
        </button>
      </div>
      {/* ↑ Header closed properly */}

      <div className="px-5">
        {/* Intro Card */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 mb-7">
          <p className="text-emerald-500 text-xs font-bold tracking-wider uppercase mb-2">
            Learn Tab
          </p>
          <h1 className="text-3xl font-bold text-gray-900 mb-3 leading-tight">
            Craft a custom quiz
          </h1>
          <p className="text-gray-600 text-base mb-5 leading-relaxed">
            Pick a topic, choose difficulty, and we will build four fun
            questions instantly.
          </p>

          <div className="flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-700 text-sm px-4 py-2 rounded-full font-semibold">
              <Sparkles size={14} className="fill-current" />
              AI Powered
            </span>
            <span className="bg-gray-100 text-gray-700 text-sm px-4 py-2 rounded-full font-medium">
              4 Questions
            </span>
            <span className="bg-gray-100 text-gray-700 text-sm px-4 py-2 rounded-full font-medium">
              Instant play
            </span>
          </div>
        </div>

        {/* STEP 1: Choose a Topic */}
        <div className="mb-9">
          <p className="text-emerald-600 text-xs font-bold uppercase tracking-wider mb-2">
            Step 1
          </p>
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            Choose a topic
          </h2>

          <div className="relative mb-5">
            <input
              type="text"
              placeholder='e.g. "My school day" or "Planets in space"'
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              maxLength={60}
              className="w-full bg-gray-100 rounded-xl py-4 px-5 text-base text-gray-800 placeholder-gray-500 focus:ring-4 focus:ring-emerald-300 focus:bg-white transition-all outline-none"
            />
            <span className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 text-sm">
              {topic.length}/60
            </span>
          </div>

          <div className="flex flex-wrap gap-3">
            {predefinedTopics.map((item) => (
              <button
                key={item}
                onClick={() => handleTopicClick(item)}
                className={`px-5 py-3 rounded-full text-base font-semibold transition-all cursor-pointer ${
                  topic === item
                    ? "bg-emerald-600 text-white shadow-lg"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* STEP 2: Challenge Level */}
        <div className="mb-9 ">
          <p className="text-emerald-600 text-xs font-bold uppercase tracking-wider mb-2">
            Step 2
          </p>
          <h2 className="text-xl font-bold text-gray-800 mb-5">
            Pick a challenge level
          </h2>

          <div className="space-y-4">
            {/* Easy */}
            <button
              onClick={() => setDifficulty("easy")}
              className={`relative w-full p-6 rounded-3xl border-2 text-left transition-all duration-300 overflow-hidden cursor-pointer ${
                difficulty === "easy"
                  ? "border-emerald-500 bg-emerald-50 shadow-lg"
                  : "border-gray-200 bg-white hover:border-gray-300"
              }`}
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold text-emerald-700 mb-2 flex items-center gap-2">
                    Easy
                    <Lightbulb className="w-7 h-7 text-emerald-500" />
                  </h3>
                  <p className="text-gray-600">
                    Short sentences & gentle vocabulary.
                  </p>
                </div>
              </div>

              {/* Selected Badge */}
              {difficulty === "easy" && (
                <span className="absolute top-4 right-4 bg-emerald-600 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg">
                  Selected
                </span>
              )}
            </button>

            {/* Medium */}
            <button
              onClick={() => setDifficulty("medium")}
              className={`relative w-full p-6 rounded-3xl border-2 text-left transition-all duration-300 overflow-hidden cursor-pointer ${
                difficulty === "medium"
                  ? "border-orange-500 bg-orange-50 shadow-lg"
                  : "border-gray-200 bg-white hover:border-gray-300"
              }`}
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold text-orange-700 mb-2 flex items-center gap-2">
                    Medium
                    <Sparkles className="w-7 h-7 text-orange-500" />
                  </h3>
                  <p className="text-gray-600">
                    Everyday situations with detail.
                  </p>
                </div>
              </div>

              {difficulty === "medium" && (
                <span className="absolute top-4 right-4 bg-orange-600 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg">
                  Selected
                </span>
              )}
            </button>

            {/* Hard */}
            <button
              onClick={() => setDifficulty("hard")}
              className={`relative w-full p-6 rounded-3xl border-2 text-left transition-all duration-300 overflow-hidden cursor-pointer ${
                difficulty === "hard"
                  ? "border-purple-500 bg-purple-50 shadow-lg"
                  : "border-gray-200 bg-white hover:border-gray-300"
              }`}
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold text-purple-700 mb-2 flex items-center gap-2">
                    Hard
                    <Target className="w-7 h-7 text-purple-500" />
                  </h3>
                  <p className="text-gray-600">
                    Longer thinking and tricky choices.
                  </p>
                </div>
              </div>

              {difficulty === "hard" && (
                <span className="absolute top-4 right-4 bg-purple-600 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg">
                  Selected
                </span>
              )}
            </button>
          </div>
        </div>
        {/* WHAT YOU'LL GET — PERFECT MATCH */}
        <div className="bg-emerald-500 rounded-3xl p-6 text-white shadow-2xl shadow-emerald-600/40 mb-10">
          {/* Uppercase label */}
          <p className="text-emerald-100 text-xs font-bold uppercase tracking-widest mb-2">
            What you'll get
          </p>

          {/* Big title */}
          <h3 className="text-2xl md:text-3xl font-bold leading-tight mb-6">
            Friendly quiz with instant feedback
          </h3>

          {/* Bullet list with proper green dots */}
          <ul className="space-y-4 text-white text-lg">
            <li className="flex gap-4 items-start">
              <span className="w-2 h-2 bg-white rounded-full mt-2.5 flex-shrink-0" />
              <span>Bite-sized explanations for every answer.</span>
            </li>
            <li className="flex gap-4 items-start">
              <span className="w-2 h-2 bg-white rounded-full mt-2.5 flex-shrink-0" />
              <span>Tone automatically matches the learner profile.</span>
            </li>
            <li className="flex gap-4 items-start">
              <span className="w-2 h-2 bg-white rounded-full mt-2.5 flex-shrink-0" />
              <span>Ready-to-play quiz inside the Learn tab.</span>
            </li>
          </ul>
        </div>

        {/* Generate Quiz Button */}
        <button
          disabled={topic.length === 0}
          className={`w-full py-5 rounded-2xl font-bold text-xl shadow-xl transition-all  ${
            topic.length > 0 && difficulty.length > 0
              ? "bg-emerald-600 text-white hover:bg-emerald-700 active:scale-98 shadow-emerald-300 cursor-pointer"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
        >
          Generate Quiz
        </button>
      </div>
    </div>
  );
};

export default LearnComp;
