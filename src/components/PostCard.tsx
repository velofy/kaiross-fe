import { memo } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Post } from "@/data/mockData";

function timeAgo(iso: string) {
  const diff = Date.now() - new Date(iso).getTime();
  const hours = Math.round(diff / (1000 * 60 * 60));
  if (hours < 1) return "just now";
  return `${hours}h ago`;
}

const PostCard = ({ post }: { post: Post }) => {
  return (
    <Card className="overflow-hidden border-border/70 shadow-elevated">
      <CardContent className="p-4">
        <div className="mb-3 flex items-center gap-3">
          <Avatar>
            <AvatarImage src={post.avatar} alt={`${post.author} avatar`} width={40} height={40} />
            <AvatarFallback>{post.author[0]}</AvatarFallback>
          </Avatar>
          <div className="leading-tight">
            <p className="font-medium">{post.author}</p>
            <p className="text-xs text-muted-foreground">{timeAgo(post.timestamp)}</p>
          </div>
        </div>
        {post.content.type === "text" ? (
          <p className="text-base leading-relaxed">{post.content.value}</p>
        ) : (
          <img
            src={post.content.value}
            alt={`Post by ${post.author}`}
            className="aspect-[11/8] w-full rounded-md object-cover"
            loading="lazy"
            decoding="async"
          />
        )}
      </CardContent>
    </Card>
  );
};

export default memo(PostCard);
