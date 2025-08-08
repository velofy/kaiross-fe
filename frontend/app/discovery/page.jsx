"use client";

import { useMemo, useState } from "react";
import Card from "../../components/Card";
import Avatar from "../../components/Avatar";
import { users, messages } from "../../styles/mockData";

function filterThread(withName) {
  return messages.filter(
    (m) => (m.sender === "Anish" && m.receiver === withName) || (m.sender === withName && m.receiver === "Anish")
  );
}

export default function DiscoveryPage() {
  const people = useMemo(() => users.slice(1), []); // exclude current user "Anish"
  const [connectedIds, setConnectedIds] = useState([]);
  const [selected, setSelected] = useState(people[0]?.name ?? null);

  const onConnect = (id) => {
    setConnectedIds((prev) => (prev.includes(id) ? prev : [...prev, id]));
  };

  const thread = selected ? filterThread(selected) : [];

  return (
    <div className="grid lg:grid-cols-2 gap-6 items-start">
      <section className="space-y-3">
        <h1 className="text-2xl font-semibold">Discover People</h1>
        {people.map((u) => (
          <Card
            key={u.id}
            variant="user"
            avatar={u.avatar}
            title={u.name}
            subtitle={connectedIds.includes(u.id) ? "Connected" : "Suggested"}
            primaryLabel={connectedIds.includes(u.id) ? "Connected" : "Connect"}
            onPrimary={() => onConnect(u.id)}
          />
        ))}
      </section>

      <section className="card p-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-medium">Chat</h2>
          <select
            className="rounded-xl border border-amber-200 bg-white px-3 py-2"
            value={selected ?? ""}
            onChange={(e) => setSelected(e.target.value)}
          >
            {people.map((u) => (
              <option key={u.id} value={u.name}>{u.name}</option>
            ))}
          </select>
        </div>
        <div className="mt-4 space-y-3 max-h-[420px] overflow-auto pr-2">
          {thread.map((m) => (
            <div key={m.id} className={`flex ${m.sender === "Anish" ? "justify-end" : "justify-start"}`}>
              <div className={`rounded-2xl px-3 py-2 text-sm ${m.sender === "Anish" ? "bg-brand-primary" : "bg-white border border-amber-100"}`}>
                <div className="text-gray-900">{m.text}</div>
              </div>
            </div>
          ))}
          {thread.length === 0 ? (
            <div className="text-sm text-gray-500">No messages yet. Say hi! 👋</div>
          ) : null}
        </div>
      </section>
    </div>
  );
}
