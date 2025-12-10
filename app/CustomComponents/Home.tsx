"use client";
import React, { useState } from "react";
import {
  Video,
  Phone,
  BookOpen,
  Bot,
  Sparkles,
  ChevronRight,
  MoreHorizontal,
  Moon,
  Heart,
  Home,
  GraduationCap,
  PhoneCall,
  User,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const HomeScreen = () => {
  const [activeTab, setActiveTab] = useState("home");

  const stories = [
    {
      title: "Choosing the Right Path",
      image:
        "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=400&h=600&fit=crop",
    },
    {
      title: "The Fountain and the Mayor",
      image:
        "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=400&h=600&fit=crop",
    },
    {
      title: "The Less Sap",
      image:
        "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=400&h=600&fit=crop",
    },
  ];

  const mainActions = [
    { icon: Video, label: "Video Learning", color: "bg-blue-100" },
    { icon: Phone, label: "Peer Calls", color: "bg-red-100", badge: 2 },
    { icon: BookOpen, label: "Stories", color: "bg-orange-100" },
    { icon: Bot, label: "AI Calls", color: "bg-pink-100" },
  ];

  const aiCharacters = [
    {
      name: "Talk with Doraemon",
      image:
        "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=200&h=200&fit=crop",
      bgColor: "bg-blue-100",
    },
    {
      name: "Talk with Spider Man",
      image:
        "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=200&h=200&fit=crop",
      bgColor: "bg-red-100",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white pb-20">
      {/* User Dashboard Card */}
      <div className="bg-emerald-400 pt-12 pb-8 px-6 rounded-b-[32px]">
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-pink-300 flex items-center justify-center overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop"
                alt="User"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-emerald-100 text-sm flex items-center gap-2">
                <Moon className="w-4 h-4" />
                Good Night
              </p>
              <h1 className="text-white text-2xl font-bold">Lorenzo</h1>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Badge
              variant="secondary"
              className="bg-white/20 text-white border-0 flex items-center gap-1"
            >
              <Heart className="w-4 h-4 fill-current" />
              30
            </Badge>
            <Badge className="bg-orange-500 text-white border-0 font-semibold">
              PRO
            </Badge>
          </div>
        </div>

        {/* XP Progress Section */}
        <Card className="bg-emerald-500 border-0 shadow-lg">
          <CardContent className="p-5">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-400 flex items-center justify-center text-white font-semibold">
                  L3
                </div>
                <div>
                  <p className="text-white text-sm font-semibold flex items-center gap-1">
                    XP PROGRESS
                    <Sparkles className="w-3 h-3" />
                  </p>
                  <p className="text-emerald-100 text-xs">42/100 XP</p>
                </div>
              </div>
              <p className="text-emerald-100 text-xs">Next: L4</p>
            </div>

            <div className="bg-emerald-400 rounded-full h-2 mb-4 overflow-hidden">
              <div className="bg-white h-full w-[42%] rounded-full"></div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-white" />
                <span className="text-white font-semibold">242 XP</span>
              </div>
              <MoreHorizontal className="w-5 h-5 text-white" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Action Icons */}
      <div className="px-6 py-6">
        <div className="grid grid-cols-4 gap-4">
          {mainActions.map((action, idx) => (
            <button
              key={idx}
              className="flex flex-col items-center gap-2 group"
            >
              <div
                className={`relative w-16 h-16 ${action.color} rounded-2xl flex items-center justify-center group-hover:scale-105 transition-transform`}
              >
                <action.icon className="w-7 h-7 text-gray-700" />
                {action.badge && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                    {action.badge}
                  </span>
                )}
              </div>
              <span className="text-xs text-gray-600 text-center leading-tight">
                {action.label}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Audio Stories Section */}
      <div className="px-6 mb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-gray-800 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-emerald-500" />
            Audio Stories
          </h2>
          <Button
            variant="ghost"
            size="sm"
            className="text-emerald-500 hover:text-emerald-600 hover:bg-emerald-50"
          >
            Show all
            <ChevronRight className="w-4 h-4 ml-1" />
          </Button>
        </div>

        <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
          {stories.map((story, idx) => (
            <div key={idx} className="flex-shrink-0 w-32">
              <div className="relative rounded-2xl overflow-hidden mb-2 aspect-[2/3] group cursor-pointer">
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <p className="text-xs text-gray-700 text-center leading-tight">
                {story.title}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Practice with Humans Section */}
      <div className="px-6 mb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-gray-800 flex items-center gap-2">
            <Phone className="w-5 h-5 text-purple-500" />
            Practice with Humans
          </h2>
          <Button
            variant="ghost"
            size="sm"
            className="text-emerald-500 hover:text-emerald-600 hover:bg-emerald-50"
          >
            Show all
            <ChevronRight className="w-4 h-4 ml-1" />
          </Button>
        </div>

        <Card className="border-2 border-emerald-200 overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
          <div className="relative h-40">
            <img
              src="https://images.unsplash.com/photo-1425082661705-1834bfd09dca?w=600&h=300&fit=crop"
              alt="Favorite Animals"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold">
              Be first!
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <div className="absolute bottom-3 left-3">
              <h3 className="text-white font-bold mb-1">Favorite Animals</h3>
              <p className="text-white/90 text-xs">
                Talk about your favorite animals and pets
              </p>
            </div>
          </div>
          <CardContent className="p-4">
            <Button className="w-full bg-emerald-400 hover:bg-emerald-500 text-white rounded-full">
              Join & Start Call
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Practice with AI Section */}
      <div className="px-6 mb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-gray-800 flex items-center gap-2">
            <Bot className="w-5 h-5 text-purple-500" />
            Practice with AI
          </h2>
          <Button
            variant="ghost"
            size="sm"
            className="text-emerald-500 hover:text-emerald-600 hover:bg-emerald-50"
          >
            Show all
            <ChevronRight className="w-4 h-4 ml-1" />
          </Button>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {aiCharacters.map((character, idx) => (
            <Card
              key={idx}
              className={`${character.bgColor} border-0 hover:shadow-lg transition-shadow cursor-pointer`}
            >
              <CardContent className="p-4 flex flex-col items-center">
                <div className="w-24 h-24 rounded-2xl overflow-hidden mb-3">
                  <img
                    src={character.image}
                    alt={character.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-sm font-semibold text-gray-800 text-center">
                  {character.name}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-8 py-4">
        <div className="flex items-center justify-between max-w-md mx-auto">
          <button
            onClick={() => setActiveTab("home")}
            className="flex flex-col items-center gap-1 group"
          >
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                activeTab === "home" ? "bg-emerald-500" : "bg-transparent"
              }`}
            >
              <Home
                className={`w-5 h-5 ${
                  activeTab === "home" ? "text-white" : "text-gray-400"
                }`}
              />
            </div>
            <span
              className={`text-xs ${
                activeTab === "home"
                  ? "text-emerald-500 font-semibold"
                  : "text-gray-400"
              }`}
            >
              Home
            </span>
          </button>

          <button
            onClick={() => setActiveTab("learn")}
            className="flex flex-col items-center gap-1 group"
          >
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                activeTab === "learn" ? "bg-emerald-500" : "bg-transparent"
              }`}
            >
              <GraduationCap
                className={`w-5 h-5 ${
                  activeTab === "learn" ? "text-white" : "text-gray-400"
                }`}
              />
            </div>
            <span
              className={`text-xs ${
                activeTab === "learn"
                  ? "text-emerald-500 font-semibold"
                  : "text-gray-400"
              }`}
            >
              Learn
            </span>
          </button>

          <button
            onClick={() => setActiveTab("call")}
            className="flex flex-col items-center gap-1 group"
          >
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                activeTab === "call" ? "bg-emerald-500" : "bg-transparent"
              }`}
            >
              <PhoneCall
                className={`w-5 h-5 ${
                  activeTab === "call" ? "text-white" : "text-gray-400"
                }`}
              />
            </div>
            <span
              className={`text-xs ${
                activeTab === "call"
                  ? "text-emerald-500 font-semibold"
                  : "text-gray-400"
              }`}
            >
              Call
            </span>
          </button>

          <button
            onClick={() => setActiveTab("profile")}
            className="flex flex-col items-center gap-1 group"
          >
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                activeTab === "profile" ? "bg-emerald-500" : "bg-transparent"
              }`}
            >
              <User
                className={`w-5 h-5 ${
                  activeTab === "profile" ? "text-white" : "text-gray-400"
                }`}
              />
            </div>
            <span
              className={`text-xs ${
                activeTab === "profile"
                  ? "text-emerald-500 font-semibold"
                  : "text-gray-400"
              }`}
            >
              Profile
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
