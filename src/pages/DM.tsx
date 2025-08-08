import { Helmet } from "react-helmet-async";
import { useMemo, useState } from "react";
import { messages, users } from "@/data/mockData";
import ChatPanel from "@/components/ChatPanel";

const DM = () => {
  const me = users[0];
  const conversationPartners = useMemo(() => {
    const set = new Set(
      messages.flatMap((m) => (m.sender === me.id ? [m.receiver] : m.receiver === me.id ? [m.sender] : []))
    );
    return users.filter((u) => set.has(u.id) && u.id !== me.id);
  }, [me.id]);

  const [selected, setSelected] = useState(conversationPartners[0]?.id ?? users[1].id);
  const thread = messages.filter(
    (m) => (m.sender === me.id && m.receiver === selected) || (m.sender === selected && m.receiver === me.id)
  );
  const origin = typeof window !== "undefined" ? window.location.origin : "";

  return (
    <>
      <Helmet>
        <title>Direct Messages Kaiross</title>
        <meta name="description" content="Chat with your connections in a clean, responsive layout." />
        <link rel="canonical" href={origin + "/dm"} />
        <meta property="og:title" content="Direct Messages Kaiross" />
        <meta property="og:description" content="Chat with your connections in a clean, responsive layout." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={origin + "/dm"} />
        <meta property="og:site_name" content="Kaiross" />
        <meta property="og:image" content={origin + "/favicon.png"} />
        <meta property="og:image:width" content="512" />
        <meta property="og:image:height" content="512" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Direct Messages Kaiross" />
        <meta name="twitter:description" content="Chat with your connections in a clean, responsive layout." />
        <meta name="twitter:image" content={origin + "/favicon.png"} />
      </Helmet>
      <main className="container mx-auto grid min-h-[calc(100vh-120px)] grid-cols-1 gap-4 py-6 md:grid-cols-3">
        <header className="md:col-span-3">
          <h1 className="text-lg font-semibold">Direct Messages</h1>
        </header>
        <aside className="space-y-2 md:col-span-1">
          <h2 className="px-2 text-sm font-medium text-muted-foreground">Conversations</h2>
          {conversationPartners.map((u) => (
            <button
              key={u.id}
              onClick={() => setSelected(u.id)}
              className={`flex w-full items-center gap-3 rounded-md border px-3 py-2 text-left hover:bg-accent ${
                selected === u.id ? "bg-accent" : ""
              }`}
            >
              <img src={u.avatar} alt="avatar" className="h-8 w-8 rounded-full object-cover" />
              <span className="font-medium">{u.name}</span>
            </button>
          ))}
        </aside>
        <section className="md:col-span-2">
          <ChatPanel conversationWithId={selected} initialMessages={thread} />
        </section>
      </main>
    </>
  );
};

export default DM;
