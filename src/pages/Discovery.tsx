import { Helmet } from "react-helmet-async";
import UserCard from "@/components/UserCard";
import ChatPanel from "@/components/ChatPanel";
import { messages, users } from "@/data/mockData";

const Discovery = () => {
  const convoWith = users[1].id; // Maya as example
  const initial = messages.filter(
    (m) => (m.sender === "u1" && m.receiver === convoWith) || (m.sender === convoWith && m.receiver === "u1")
  );
  const origin = typeof window !== "undefined" ? window.location.origin : "";

  return (
    <>
      <Helmet>
        <title>Discover Kaiross</title>
        <meta name="description" content="Find new people to connect with and start playful conversations." />
        <link rel="canonical" href={origin + "/discovery"} />
        <meta property="og:title" content="Discover Kaiross" />
        <meta property="og:description" content="Find new people to connect with and start playful conversations." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={origin + "/discovery"} />
        <meta property="og:site_name" content="Kaiross" />
        <meta property="og:image" content={origin + "/favicon.png"} />
        <meta property="og:image:width" content="512" />
        <meta property="og:image:height" content="512" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Discover Kaiross" />
        <meta name="twitter:description" content="Find new people to connect with and start playful conversations." />
        <meta name="twitter:image" content={origin + "/favicon.png"} />
      </Helmet>
      <main className="container mx-auto grid grid-cols-1 gap-6 py-6 md:grid-cols-3">
        <header className="md:col-span-3">
          <h1 className="text-lg font-semibold">Discover People</h1>
        </header>
        <section className="md:col-span-2 space-y-3">
          {users.map((u) => (
            <UserCard key={u.id} user={u} />
          ))}
        </section>
        <aside className="md:col-span-1">
          <ChatPanel conversationWithId={convoWith} initialMessages={initial} />
        </aside>
      </main>
    </>
  );
};

export default Discovery;
