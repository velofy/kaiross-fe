export const users = [
  { id: 1, name: "Anish", avatar: "https://i.pravatar.cc/150?img=12" },
  { id: 2, name: "Maya", avatar: "https://i.pravatar.cc/150?img=47" },
  { id: 3, name: "Leo", avatar: "https://i.pravatar.cc/150?img=22" },
  { id: 4, name: "Zara", avatar: "https://i.pravatar.cc/150?img=5" },
  { id: 5, name: "Noah", avatar: "https://i.pravatar.cc/150?img=9" },
];

export const posts = [
  {
    id: 101,
    author: users[1].name,
    avatar: users[1].avatar,
    content: "Golden hour vibes hitting different today ✨",
    timestamp: new Date(Date.now() - 1000 * 60 * 5).toISOString(),
  },
  {
    id: 102,
    author: users[2].name,
    avatar: users[2].avatar,
    content: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=1600&auto=format&fit=crop",
    timestamp: new Date(Date.now() - 1000 * 60 * 40).toISOString(),
  },
  {
    id: 103,
    author: users[3].name,
    avatar: users[3].avatar,
    content: "Trying out a new espresso recipe ☕️ any tips?",
    timestamp: new Date(Date.now() - 1000 * 60 * 90).toISOString(),
  },
  {
    id: 104,
    author: users[4].name,
    avatar: users[4].avatar,
    content: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?q=80&w=1600&auto=format&fit=crop",
    timestamp: new Date(Date.now() - 1000 * 60 * 240).toISOString(),
  },
];

export const messages = [
  { id: 1, sender: "Anish", receiver: "Maya", text: "Hey Maya! How's your day?", timestamp: new Date(Date.now() - 1000 * 60 * 120).toISOString() },
  { id: 2, sender: "Maya", receiver: "Anish", text: "So good! Sunset is gorgeous.", timestamp: new Date(Date.now() - 1000 * 60 * 110).toISOString() },
  { id: 3, sender: "Anish", receiver: "Leo", text: "Want to try that cafe tomorrow?", timestamp: new Date(Date.now() - 1000 * 60 * 200).toISOString() },
  { id: 4, sender: "Leo", receiver: "Anish", text: "Yes! 10am works.", timestamp: new Date(Date.now() - 1000 * 60 * 195).toISOString() },
  { id: 5, sender: "Zara", receiver: "Anish", text: "Sent you the playlist.", timestamp: new Date(Date.now() - 1000 * 60 * 70).toISOString() },
];
