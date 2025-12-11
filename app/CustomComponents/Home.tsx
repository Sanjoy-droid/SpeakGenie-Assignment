"use client";
import React, { useState } from "react";
import {
  Phone,
  Bot,
  Sparkles,
  ChevronRight,
  Home,
  PhoneCall,
  User,
  Trophy,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";
import { useRouter } from "next/navigation";
import DashboardCard from "./DashboardCard";
import { stories } from "@/app/data/stories";
import { humanPracticeRooms } from "@/app/data/humanPracticeRooms";
import { aiCharacters } from "@/app/data/aiCharacters";

const HomeScreen = () => {
  const [activeTab, setActiveTab] = useState("home");

  const router = useRouter();

  const mainActions = [
    {
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-blue-600"
        >
          <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"></path>
          <rect x="2" y="6" width="14" height="12" rx="2"></rect>
        </svg>
      ),
      label: "Video Learning",
      color: "bg-blue-100",
    },
    {
      image:
        "https://storage.googleapis.com/speakgenie-assets/images/Homescreen/tabs/peercall.webp",
      label: "Peer Calls",
      color: "bg-blue-100",
      badge: 2,
    },
    {
      image:
        "https://storage.googleapis.com/speakgenie-assets/images/Homescreen/tabs/stories.webp",
      label: "Stories",
      color: "bg-orange-100",
    },
    {
      image:
        "https://storage.googleapis.com/speakgenie-assets/images/Homescreen/tabs/AIcalls.webp",
      label: "AI Calls",
      color: "bg-pink-100",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white pb-20">
      <DashboardCard />

      {/* Main Action Icons */}
      <div className="px-6 py-6">
        <div className="grid grid-cols-4 gap-4">
          {mainActions.map((action, idx) => (
            <button
              key={idx}
              className="flex flex-col items-center gap-2 group cursor-pointer "
            >
              <div className="shadow-2xl rounded-full p-2">
                <div
                  className={`relative w-20 h-20 ${action.color} rounded-full flex items-center justify-center group-hover:scale-105 transition-transform `}
                >
                  {action.svg && action.svg}

                  {/* If action has image → render image */}
                  {action.image && (
                    <img
                      src={action.image}
                      alt={action.label}
                      className="w-10 h-10 object-contain"
                    />
                  )}
                </div>
              </div>
              <span
                className="text-sm font-semibold
                text-gray-800 text-center leading-tight"
              >
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

        <Carousel className="w-full  mx-auto">
          <CarouselContent className="-ml-4">
            {stories.map((story, index) => (
              <CarouselItem
                key={index}
                className="pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4"
              >
                <div className="flex-shrink-0 w-full">
                  <Link href={`/story/${index}`} className="block">
                    {" "}
                    {/* This makes it clickable */}
                    <div className="relative rounded-2xl overflow-hidden mb-2 h-64 md:h-72 lg:h-80 group cursor-pointer">
                      <img
                        src={story.image}
                        alt={story.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="absolute bottom-3 left-3 text-white">
                        <p className="text-lg font-bold">{story.title}</p>
                      </div>
                    </div>
                  </Link>
                  <p className="text-md font-bold text-gray-900 text-center leading-tight mt-2">
                    {story.title}
                  </p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-0 cursor-pointer hidden lg:flex" />
          <CarouselNext className="right-0 cursor-pointer hidden lg:flex" />
        </Carousel>
      </div>

      {/* Practice with Humans Section */}
      <div className="px-6 mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-gray-800 flex items-center gap-2">
            <Phone className="w-5 h-5 text-purple-500" />
            Practice with Humans
          </h2>
          <Button variant="ghost" size="sm" className="text-emerald-500">
            Show all <ChevronRight className="w-4 h-4 ml-1" />
          </Button>
        </div>

        <Carousel className="w-full  mx-auto">
          <CarouselContent className="-ml-4">
            {humanPracticeRooms.map((room, index) => (
              <CarouselItem
                key={index}
                className="pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4"
              >
                <div className="group cursor-pointer">
                  <div className="relative rounded-3xl overflow-hidden bg-white shadow-lg hover:shadow-xl transition-shadow">
                    <img
                      src={room.image}
                      alt={room.title}
                      className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
                    />

                    {room.badge && (
                      <div className="absolute top-3 right-3 bg-white/95 backdrop-blur px-3 py-1.5 rounded-full text-xs font-bold text-orange-600">
                        {room.badge}
                      </div>
                    )}

                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent pointer-events-none" />

                    <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                      <h3 className="text-lg font-bold mb-1">{room.title}</h3>
                      <p className="text-sm opacity-90 mb-4">
                        {room.description}
                      </p>
                      <Button className="w-full bg-white text-emerald-600 hover:bg-emerald-50 font-semibold rounded-full h-11 shadow-lg">
                        Join & Start Call
                      </Button>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="left-0 cursor-pointer hidden lg:flex" />
          <CarouselNext className="right-0 cursor-pointer hidden lg:flex" />
        </Carousel>
      </div>

      {/* Practice with AI Section */}
      <div className="px-6 mb-10">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-gray-800 flex items-center gap-2">
            <Bot className="w-5 h-5 text-purple-500" />
            Practice with AI
          </h2>
          <Button variant="ghost" size="sm" className="text-emerald-500">
            Show all <ChevronRight className="w-4 h-4 ml-1" />
          </Button>
        </div>

        <Carousel className="w-full  mx-auto">
          <CarouselContent className="-ml-4">
            {aiCharacters.map((character, index) => (
              <CarouselItem
                key={index}
                className="pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4"
              >
                <div className="p-2">
                  <Card
                    className={`${character.bgColor} border-0 rounded-3xl overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer`}
                  >
                    <CardContent className="p-6 flex flex-col items-center gap-4">
                      <div className="w-32 h-32 rounded-3xl overflow-hidden shadow-md">
                        <img
                          src={character.image}
                          alt={character.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <p className="text-base font-bold text-gray-800 text-center">
                        {character.name}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="left-0 cursor-pointer hidden lg:flex" />
          <CarouselNext className="right-0 cursor-pointer hidden lg:flex" />
        </Carousel>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-8 py-4">
        <div className="flex items-center justify-evenly mx-auto">
          <button
            onClick={() => setActiveTab("home")}
            className="flex flex-col items-center gap-1 px-6 py-2 rounded-lg cursor-pointer transition-colors group"
          >
            <Home
              className={`w-7 h-7 transition-all duration-200 ${
                activeTab === "home" ? "text-emerald-500" : "text-gray-500 "
              }`}
            />
            <span
              className={`text-sm font-bold transition-all duration-200 ${
                activeTab === "home" ? "text-emerald-500" : "text-gray-400 "
              }`}
            >
              Home
            </span>
          </button>
          <button
            onClick={() => {
              setActiveTab("learn");
              router.push("/learn");
            }}
            className="flex flex-col items-center gap-1.5 px-6 py-3 cursor-pointer"
          >
            <Trophy
              className={`w-7 h-7 ${activeTab === "learn" ? "text-emerald-500" : "text-gray-500"}`}
            />
            <span
              className={`text-sm font-bold ${activeTab === "learn" ? "text-emerald-500" : "text-gray-500"}`}
            >
              Learn
            </span>
          </button>

          <button
            onClick={() => setActiveTab("call")}
            className="flex flex-col items-center gap-1.5 px-6 py-3 cursor-pointer"
          >
            <PhoneCall
              className={`w-7 h-7 ${activeTab === "call" ? "text-emerald-500" : "text-gray-500"}`}
            />
            <span
              className={`text-sm font-bold ${activeTab === "call" ? "text-emerald-500" : "text-gray-500"}`}
            >
              Call
            </span>
          </button>

          <button
            onClick={() => setActiveTab("profile")}
            className="flex flex-col items-center gap-1.5 px-6 py-3 cursor-pointer"
          >
            <User
              className={`w-7 h-7 ${activeTab === "profile" ? "text-emerald-500" : "text-gray-500"}`}
            />
            <span
              className={`text-sm font-bold ${activeTab === "profile" ? "text-emerald-500" : "text-gray-500"}`}
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
