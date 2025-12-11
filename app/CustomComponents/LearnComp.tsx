"use client";
import React, { useState } from "react";
import { ChevronLeft, Sparkles, Lightbulb, Target } from "lucide-react";
import { useRouter } from "next/navigation";

const LearnComp = () => {
  const [topic, setTopic] = useState("");
  const [difficulty, setDifficulty] = useState("medium");
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
          className="p-2.5 bg-white rounded-full shadow-sm text-gray-600 cursor-pointer"
        >
          <ChevronLeft size={24} />
        </button>
        <span className="text-gray-500 font-semibold text-base">Back</span>
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
                className={`px-5 py-3 rounded-full text-base font-semibold transition-all ${
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
        <div className="mb-9">
          <p className="text-emerald-600 text-xs font-bold uppercase tracking-wider mb-2">
            Step 2
          </p>
          <h2 className="text-xl font-bold text-gray-800 mb-5">
            Pick a challenge level
          </h2>

          <div className="space-y-4">
            {/* Easy */}
            <div
              onClick={() => setDifficulty("easy")}
              className={`p-5 rounded-2xl border-2 cursor-pointer transition-all ${
                difficulty === "easy"
                  ? "border-emerald-500 bg-emerald-50 shadow-md"
                  : "border-gray-200 bg-white"
              }`}
            >
              <div className="flex justify-between items-start mb-2">
                <h3
                  className={`text-xl font-bold ${difficulty === "easy" ? "text-emerald-700" : "text-gray-700"}`}
                >
                  Easy
                </h3>
                <Lightbulb
                  size={28}
                  className={
                    difficulty === "easy"
                      ? "text-emerald-500"
                      : "text-emerald-400"
                  }
                />
              </div>
              <p className="text-gray-600 text-base">
                Short sentences & gentle vocabulary.
              </p>
            </div>

            {/* Medium */}
            <div
              onClick={() => setDifficulty("medium")}
              className={`p-5 rounded-2xl border-2 cursor-pointer transition-all relative overflow-hidden ${
                difficulty === "medium"
                  ? "border-emerald-500 shadow-lg"
                  : "border-gray-200 bg-white"
              }`}
            >
              {difficulty === "medium" && (
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-50 to-transparent opacity-70" />
              )}
              <div className="relative flex justify-between items-start mb-2">
                <h3
                  className={`text-xl font-bold ${difficulty === "medium" ? "text-emerald-700" : "text-amber-600"}`}
                >
                  Medium
                </h3>
                <Sparkles size={28} className="text-amber-500" />
              </div>
              <p className="text-gray-600 text-base relative">
                Everyday situations with detail.
              </p>

              {difficulty === "medium" && (
                <span className="absolute top-4 right-4 bg-emerald-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow">
                  Selected
                </span>
              )}
            </div>

            {/* Hard */}
            <div
              onClick={() => setDifficulty("hard")}
              className={`p-5 rounded-2xl border-2 cursor-pointer transition-all ${
                difficulty === "hard"
                  ? "border-emerald-500 bg-emerald-50 shadow-md"
                  : "border-gray-200 bg-white"
              }`}
            >
              <div className="flex justify-between items-start mb-2">
                <h3
                  className={`text-xl font-bold ${difficulty === "hard" ? "text-emerald-700" : "text-purple-600"}`}
                >
                  Hard
                </h3>
                <Target size={28} className="text-purple-500" />
              </div>
              <p className="text-gray-600 text-base">
                Longer thinking and tricky choices.
              </p>
            </div>
          </div>
        </div>

        {/* What You'll Get Box */}
        <div className="bg-emerald-600 rounded-2xl p-6 text-white mb-8 shadow-xl shadow-emerald-300/30">
          <h3 className="text-2xl font-bold mb-2">
            Friendly quiz with instant feedback
          </h3>
          <p className="text-emerald-100 text-xs font-bold uppercase tracking-wider mb-4">
            What you'll get
          </p>
          <ul className="space-y-3 text-base text-emerald-50">
            <li className="flex gap-3 items-start">
              <span className="mt-1.5 text-lg">•</span>
              <span>Bite-sized explanations for every answer.</span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="mt-1.5 text-lg">•</span>
              <span>Tone automatically matches the learner profile.</span>
            </li>
          </ul>
        </div>

        {/* Generate Quiz Button */}
        <button
          disabled={topic.length === 0}
          className={`w-full py-5 rounded-2xl font-bold text-xl shadow-xl transition-all ${
            topic.length > 0
              ? "bg-emerald-600 text-white hover:bg-emerald-700 active:scale-98 shadow-emerald-300"
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
