// app/story/[id]/page.tsx
"use client";

import React, { useState } from "react";
import { stories } from "@/app/data/stories";
import {
  ChevronLeft,
  MessageSquare,
  Share2,
  Play,
  Pause,
  SkipBack,
  SkipForward,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useParams, useRouter } from "next/navigation";

export default function AudioStoryPlayer() {
  const { id } = useParams();
  const router = useRouter();

  const storyIndex = Number(id);
  const story = stories[storyIndex];

  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  if (!story) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-xl text-gray-600">Story not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white pb-20">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b">
        <div className="flex items-center justify-between px-4 py-3">
          <button
            onClick={() => router.back()}
            className="p-2 rounded-full hover:bg-gray-100 transition"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <span className="text-sm font-semibold text-gray-700">
            NOW PLAYING
          </span>
          <div className="flex gap-2">
            <button className="p-2 rounded-full hover:bg-gray-100">
              <MessageSquare className="w-5 h-5" />
            </button>
            <button className="p-2 rounded-full hover:bg-gray-100">
              <Share2 className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      <main className="px-6 pt-8 max-w-2xl mx-auto">
        {/* Artwork */}
        <div className="mx-auto w-full max-w-sm">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-8 border-white">
            <img
              src={story.image}
              alt={story.title}
              className="w-full aspect-square object-cover"
            />
          </div>
        </div>

        {/* Title */}
        <div className="mt-10 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            {story.title}
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-xl mx-auto leading-relaxed">
            A heartwarming story about friendship and courage that will touch
            your soul and inspire kindness.
          </p>
        </div>

        {/* Quiz Button */}
        <div className="mt-10">
          <Button className="w-full max-w-md mx-auto bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-6 rounded-2xl text-lg shadow-xl flex items-center justify-center gap-3">
            <MessageSquare className="w-6 h-6" />
            Test Your Understanding · 7 Questions
          </Button>
        </div>

        {/* Progress */}
        <div className="mt-12">
          <div className="flex justify-between text-sm text-gray-500 mb-3">
            <span>0:00</span>
            <span>2:18</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-emerald-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-8 mt-10">
          <button className="p-3 rounded-full hover:bg-gray-100 transition">
            <SkipBack className="w-8 h-8 text-gray-700" />
          </button>

          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="bg-emerald-500 text-white p-6 rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all"
          >
            {isPlaying ? (
              <Pause className="w-12 h-12" />
            ) : (
              <Play className="w-12 h-12 ml-1" />
            )}
          </button>

          <button className="p-3 rounded-full hover:bg-gray-100 transition">
            <SkipForward className="w-8 h-8 text-gray-700" />
          </button>
        </div>
      </main>
    </div>
  );
}
