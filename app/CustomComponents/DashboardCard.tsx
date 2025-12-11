import React from "react";
import { Moon, Sparkles, MoreHorizontal, Heart } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";

export default function DashboardCard() {
  return (
    <>
      {/* User Dashboard Card */}
      <div className="bg-emerald-400 pt-12 pb-8 px-6 rounded-b-[32px]">
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-pink-300 flex items-center justify-center overflow-hidden">
              <img
                src="https://storage.googleapis.com/speakgenie-assets/images/Profile/boy_default.png"
                alt="User"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-emerald-100 text-md flex items-center gap-2">
                Good Night
              </p>
              <h1 className="text-white text-3xl font-bold">Lorenzo</h1>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
              <Moon className="w-4 h-4 text-white" />
            </button>
            <div className="bg-white/20 px-2.5 py-1 rounded-full flex items-center gap-1.5">
              <span className="text-orange-400">💎</span>
              <span className="text-white font-bold text-sm">30</span>
            </div>
            <div className="bg-orange-500 text-white border-0 font-semibold px-3.5 py-1.5 rounded-full">
              <span className="text-white font-bold text-xs tracking-wide">
                PRO
              </span>
            </div>
          </div>
        </div>

        {/* XP Progress Card – EXACT layout as your latest screenshot */}
        <div className="bg-white/12 backdrop-blur-xl rounded-3xl px-6 py-5 border border-white/10">
          {/* SINGLE ROW – Everything perfectly aligned in one straight line */}
          <div className="flex items-center justify-between">
            {/* Left: L1 Circle */}
            <div className="w-14 h-14 rounded-full bg-white/25 flex items-center justify-center flex-shrink-0">
              <span className="text-white text-xl font-bold">L1</span>
            </div>

            {/* Center: XP PROGRESS text + Progress bar directly below */}
            <div className="flex-1 mx-5 flex flex-col items-start gap-1.5">
              <p className="text-white text-base font-bold tracking-wider">
                XP PROGRESS <span className="text-white/40">•</span>
              </p>

              {/* Progress bar – thin, white, exactly 1% filled */}
              <div className="w-full h-1.5 bg-white/20 rounded-full overflow-hidden">
                <div className="h-full w-[33%] bg-white rounded-full"></div>
              </div>

              <p className="text-white text-xs font-medium">42/100 XP</p>
            </div>

            {/* Right side – perfectly aligned in one line */}
            <div className="flex items-center gap-4">
              <div className="text-right">
                <p className="text-white text-sm font-medium">Next: L4</p>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 bg-white/20 rounded-2xl flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <span className="text-white text-xl font-bold">242 XP</span>

                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 bg-white/40 rounded-full flex-shrink-0" />
                  <span className="w-2 h-2 bg-white/40 rounded-full flex-shrink-0" />
                  <span className="w-2 h-2 bg-white/40 rounded-full flex-shrink-0" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
