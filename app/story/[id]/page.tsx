// app/story/[id]/page.tsx
"use client";

import { useState } from "react";
import { stories } from "@/app/data/stories";
import {
  ChevronLeft,
  MessageSquare,
  Play,
  Pause,
  SkipBack,
  SkipForward,
  ClipboardCheck,
  FileTextIcon,
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
      {/* PERFECT HEADER — matches your design 1:1 */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100">
        <div className="flex items-center justify-between px-4 py-4 safe-top">
          {/* Back Button */}
          <button
            onClick={() => router.back()}
            className="p-2 rounded-full hover:bg-gray-100 active:bg-gray-200 transition cursor-pointer"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>

          {/* Center Text */}
          <span className="absolute left-1/2 -translate-x-1/2 text-sm font-semibold text-gray-600 tracking-wider">
            NOW PLAYING
          </span>

          {/* Right Icons */}
          <div className="flex items-center gap-3">
            <button className="p-2 rounded-full hover:bg-gray-100 active:bg-gray-200 transition">
              <FileTextIcon className="w-5 h-5 text-slate-800" />
            </button>

            <button className="relative py-2 px-4 rounded-full hover:bg-gray-100 bg-green-600 transition">
              <ClipboardCheck className="w-5 h-5 text-white" />
              <span className="absolute -top-1 -right-1 w-5 h-5 text-sm bg-yellow-300 rounded-full border-2 border-white shadow-md font-bold">
                7
              </span>
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
              className="w-full aspect-square object-fit "
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
          <Button className="w-full max-w-md mx-auto bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-bold py-6 rounded-full text-lg shadow-2xl flex items-center justify-center gap-3 transition-all duration-300 cursor-pointer">
            <MessageSquare className="w-6 h-6" />
            Test Your Understanding
            <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-bold">
              7 Questions
            </span>
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
          <button className="p-3 rounded-full hover:bg-gray-100 transition cursor-pointer">
            <SkipBack className="w-8 h-8 text-gray-700" />
          </button>

          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="relative bg-gradient-to-br from-emerald-400 via-emerald-500 to-emerald-600 p-8 rounded-full shadow-2xl hover:shadow-emerald-500/50 active:scale-95 transition-all duration-300 group cursor-pointer"
          >
            <div className="absolute inset-0 rounded-full bg-white/20 blur-xl group-hover:blur-2xl transition "></div>
            {isPlaying ? (
              <Pause className="w-8 h-8 text-white" />
            ) : (
              <Play className="w-8 h-8 ml-1 text-white" />
            )}
          </button>

          <button className="p-3 rounded-full hover:bg-gray-100 transition cursor-pointer">
            <SkipForward className="w-8 h-8 text-gray-700" />
          </button>
        </div>
      </main>
    </div>
  );
}
