import { Helmet } from "react-helmet-async";
import PostCard from "@/components/PostCard";
import { posts } from "@/data/mockData";

const Feed = () => {
  return (
    <>
      <Helmet>
        <title>Feed Kaiross</title>
        <meta name="description" content="See posts from connected users in a warm, playful feed." />
        <link rel="canonical" href={window.location.origin + "/feed"} />
      </Helmet>
      <main className="container mx-auto py-6 md:max-w-2xl">
        <header className="mb-4">
          <h1 className="text-lg font-semibold">Kaiross Feed</h1>
        </header>
        <div className="grid grid-cols-1 gap-4">
          {posts.map((p) => (
            <PostCard key={p.id} post={p} />
          ))}
        </div>
      </main>
    </>
  );
};

export default Feed;
