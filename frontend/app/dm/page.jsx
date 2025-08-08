"use client";

import { useMemo, useState } from "react";
import Avatar from "../../components/Avatar";
import { users, messages } from "../../styles/mockData";

function uniqueConversations() {
  const partners = new Set();
  messages.forEach((m) => {
    if (m.sender === "Anish") partners.add(m.receiver);
    if (m.receiver === "Anish") partners.add(m.sender);
  });
  return Array.from(partners);
}

function threadWith(name) {
  return messages.filter(
    (m) => (m.sender === "Anish" && m.receiver === name) || (m.sender === name && m.receiver === "Anish")
  );
}

export default function DMPage() {
  const convos = useMemo(() => uniqueConversations(), []);
  const [active, setActive] = useState(convos[0] ?? null);
  const [input, setInput] = useState("");
  const [local, setLocal] = useState([]);

  const activeThread = [...threadWith(active), ...local.filter((m) => m.receiver === active || m.sender === active)];

  const partner = users.find((u) => u.name === active);

  const send = () => {
    if (!input.trim() || !active) return;
    setLocal((prev) => [
      ...prev,
      { id: Date.now(), sender: "Anish", receiver: active, text: input.trim(), timestamp: new Date().toISOString() }
    ]);
    setInput("");
  };

  return (
    <div className="grid grid-cols-12 gap-4">
      <aside className="col-span-4 xl:col-span-3 card p-3 h-[70vh] overflow-auto">
        <h2 className="text-lg font-medium mb-2">Conversations</h2>
        <div className="space-y-1">
          {convos.map((name) => {
            const u = users.find((x) => x.name === name);
            const isActive = name === active;
            return (
              <button
                key={name}
                onClick={() => setActive(name)}
                className={`w-full text-left flex items-center gap-3 rounded-xl px-2 py-2 hover:bg-white ${isActive ? "bg-white border border-amber-100" : ""}`}
              >
                <Avatar src={u?.avatar ?? ""} alt={name} size={36} />
                <div className="font-medium">{name}</div>
              </button>
            );
          })}
          {convos.length === 0 ? (
            <div className="text-sm text-gray-500">No conversations yet.</div>
          ) : null}
        </div>
      </aside>

      <section className="col-span-8 xl:col-span-9 card p-4 flex flex-col h-[70vh]">
        {active ? (
          <>
            <div className="flex items-center gap-3 border-b border-amber-100 pb-3">
              <Avatar src={partner?.avatar ?? ""} alt={active} size={40} />
              <div className="text-lg font-medium">{active}</div>
            </div>
            <div className="flex-1 mt-4 space-y-3 overflow-auto pr-2">
              {activeThread.map((m) => (
                <div key={m.id} className={`flex ${m.sender === "Anish" ? "justify-end" : "justify-start"}`}>
                  <div className={`rounded-2xl px-3 py-2 text-sm max-w-[70%] ${m.sender === "Anish" ? "bg-brand-primary" : "bg-white border border-amber-100"}`}>
                    <div className="text-gray-900">{m.text}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-3 flex items-center gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type a message"
                className="flex-1 rounded-xl border border-amber-200 bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-300"
              />
              <button className="btn btn-primary" onClick={send}>Send</button>
            </div>
          </>
        ) : (
          <div className="flex-1 grid place-items-center text-gray-500">Select a conversation</div>
        )}
      </section>
    </div>
  );
}
