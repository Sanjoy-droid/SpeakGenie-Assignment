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
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";

const HomeScreen = () => {
  const [activeTab, setActiveTab] = useState("home");

  const humanPracticeRooms = [
    {
      title: "Favorite Animals",
      description: "Talk about your favorite animals and pets",
      image:
        "https://images.unsplash.com/photo-1425082661705-1834bfd09dca?w=800&h=500&fit=crop",
      badge: "Be first!",
    },
    {
      title: "Dream Vacation",
      description: "Where would you go if money was no object?",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=500&fit=crop",
      badge: "Hot",
    },
    {
      title: "Superpower Choice",
      description: "If you could have any superpower, what would it be?",
      image:
        "https://images.unsplash.com/photo-1534809027769-b00d750a6bac?w=800&h=500&fit=crop",
    },
    {
      title: "Food Adventures",
      description: "Share your craziest food story or favorite dish",
      image:
        "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&h=500&fit=crop",
      badge: "10+ waiting",
    },
    {
      title: "Time Travel",
      description: "Past or future? Where are you going?",
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=500&fit=crop",
    },
    {
      title: "Ghost Stories",
      description: "Real or fake — tell your scariest experience",
      image:
        "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&h=500&fit=crop",
      badge: "Live now",
    },
  ];
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
      title: "The Less Traveled Road",
      image:
        "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=400&h=600&fit=crop",
    },
    {
      title: "Whispers of the Forest",
      image:
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=600&fit=crop",
    },
    {
      title: "The Moonlit Garden",
      image:
        "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?w=400&h=600&fit=crop",
    },
    {
      title: "A Star Named Hope",
      image:
        "https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?w=400&h=600&fit=crop",
    },
    {
      title: "The Old Lighthouse",
      image:
        "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=400&h=600&fit=crop",
    },
    {
      title: "Rainy Days & Warm Tea",
      image:
        "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=400&h=600&fit=crop",
    },
    {
      title: "The Secret Door",
      image:
        "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=400&h=600&fit=crop",
    },
    {
      title: "Dancing with Fireflies",
      image:
        "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?w=400&h=600&fit=crop",
    },
    {
      title: "The Boy and the Mountain",
      image:
        "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400&h=600&fit=crop",
    },
    {
      title: "Echoes of Tomorrow",
      image:
        "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&h=600&fit=crop",
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
        "https://images.unsplash.com/photo-1685360798969-395cf93b7d2d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZG9yYWVtb258ZW58MHx8MHx8fDA%3D",
      bgColor: "bg-blue-100",
    },
    {
      name: "Talk with Spider Man",
      image:
        "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3BpZGVybWFufGVufDB8fDB8fHww",
      bgColor: "bg-red-100",
    },
    {
      name: "Talk with Pikachu",
      image:
        "https://images.unsplash.com/photo-1605979399824-542335ee35d5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGlrYWNodXxlbnwwfHwwfHx8MA%3D%3D",
      bgColor: "bg-yellow-100",
    },
    {
      name: "Talk with Batman",
      image:
        "https://images.unsplash.com/photo-1588860939994-ce4f7a537f03?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJhdG1hbnxlbnwwfHwwfHx8MA%3D%3D",
      bgColor: "bg-purple-100",
    },
    {
      name: "Talk with Iron Man",
      image:
        "https://images.unsplash.com/photo-1636840438199-9125cd03c3b0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aXJvbiUyMG1hbnxlbnwwfHwwfHx8MA%3D%3D",
      bgColor: "bg-gray-100",
    },
    {
      name: "Talk with Minions",
      image:
        "https://images.unsplash.com/photo-1515041219749-89347f83291a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWluaW9uc3xlbnwwfHwwfHx8MA%3D%3D",
      bgColor: "bg-yellow-200",
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
              className="flex flex-col items-center gap-2 group cursor-pointer"
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
                    <div className="relative rounded-2xl overflow-hidden mb-2 aspect-[2/3] group cursor-pointer">
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
        <div className="flex items-center justify-between max-w-md mx-auto">
          <button
            onClick={() => setActiveTab("home")}
            className="flex flex-col items-center gap-1 group cursor-pointer"
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
            className="flex flex-col items-center gap-1 group cursor-pointer"
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
            className="flex flex-col items-center gap-1 group cursor-pointer"
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
            className="flex flex-col items-center gap-1 group cursor-pointer"
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
