import avatar1 from "@/assets/avatar-1.jpg";
import avatar2 from "@/assets/avatar-2.jpg";
import avatar3 from "@/assets/avatar-3.jpg";
import avatar4 from "@/assets/avatar-4.jpg";
import post1 from "@/assets/post-1.jpg";
import post2 from "@/assets/post-2.jpg";
import post3 from "@/assets/post-3.jpg";

export type Post = {
  id: string;
  author: string;
  avatar: string;
  content: { type: "text" | "image"; value: string };
  timestamp: string; // ISO
};

export type User = {
  id: string;
  name: string;
  avatar: string;
};

export type Message = {
  id: string;
  sender: string; // user id
  receiver: string; // user id
  text: string;
  timestamp: string; // ISO
};

export const users: User[] = [
  { id: "u1", name: "Anish", avatar: avatar1 },
  { id: "u2", name: "Maya", avatar: avatar2 },
  { id: "u3", name: "Leo", avatar: avatar3 },
  { id: "u4", name: "Sofia", avatar: avatar4 },
];

export const posts: Post[] = [
  {
    id: "p1",
    author: users[1].name,
    avatar: users[1].avatar,
    content: { type: "image", value: post1 },
    timestamp: new Date(Date.now() - 1000 * 60 * 45).toISOString(),
  },
  {
    id: "p2",
    author: users[2].name,
    avatar: users[2].avatar,
    content: { type: "text", value: "Golden hour walks > everything." },
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 3).toISOString(),
  },
  {
    id: "p3",
    author: users[3].name,
    avatar: users[3].avatar,
    content: { type: "image", value: post2 },
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 5).toISOString(),
  },
  {
    id: "p4",
    author: users[0].name,
    avatar: users[0].avatar,
    content: { type: "image", value: post3 },
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 9).toISOString(),
  },
];

export const messages: Message[] = [
  { id: "m1", sender: "u1", receiver: "u2", text: "Find me a good person to talk to", timestamp: new Date(Date.now() - 1000 * 60 * 55).toISOString() },
  { id: "m2", sender: "u2", receiver: "u1", text: "I found one for you", timestamp: new Date(Date.now() - 1000 * 60 * 50).toISOString() },
  { id: "m3", sender: "u3", receiver: "u1", text: "Loved your last post!", timestamp: new Date(Date.now() - 1000 * 60 * 150).toISOString() },
  { id: "m4", sender: "u1", receiver: "u3", text: "Thanks!", timestamp: new Date(Date.now() - 1000 * 60 * 140).toISOString() },
  { id: "m5", sender: "u1", receiver: "u2", text: "Thanks!", timestamp: new Date(Date.now() - 1000 * 60 * 140).toISOString() },
  { id: "m6", sender: "u2", receiver: "u1", text: "Thanks!", timestamp: new Date(Date.now() - 1000 * 60 * 140).toISOString() },
  { id: "m7", sender: "u3", receiver: "u1", text: "Thanks!", timestamp: new Date(Date.now() - 1000 * 60 * 140).toISOString() },
  { id: "m8", sender: "u1", receiver: "u3", text: "Thanks!", timestamp: new Date(Date.now() - 1000 * 60 * 140).toISOString() },
];

export const MOCK_CREDENTIALS = {
  email: "anish@harvard.edu",
  password: "anishfyi",
};
