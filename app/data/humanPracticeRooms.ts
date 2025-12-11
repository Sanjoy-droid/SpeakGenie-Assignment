export interface HumanPractice {
  title: string;
  description: string;
  image: string;
  badge?: string;
}

export const humanPracticeRooms: HumanPractice[] = [
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
