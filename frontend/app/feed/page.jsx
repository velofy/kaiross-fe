"use client";

import { useMemo } from "react";
import Card from "../../components/Card";
import { posts } from "../../styles/mockData";

function timeAgo(ts) {
  const diffMs = Date.now() - new Date(ts).getTime();
  const mins = Math.floor(diffMs / 60000);
  if (mins < 1) return "just now";
  if (mins < 60) return `${mins}m`;
  const hours = Math.floor(mins / 60);
  if (hours < 24) return `${hours}h`;
  const days = Math.floor(hours / 24);
  return `${days}d`;
}

export default function FeedPage() {
  const items = useMemo(() => posts, []);

  return (
    <section className="space-y-4">
      <h1 className="text-2xl font-semibold">Your Feed</h1>
      {items.map((p) => (
        <Card
          key={p.id}
          variant="post"
          avatar={p.avatar}
          title={p.author}
          subtitle={timeAgo(p.timestamp)}
          content={p.content}
        />
      ))}
    </section>
  );
}