import { useMemo, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Message, users } from "@/data/mockData";

const ChatPanel = ({
  conversationWithId,
  initialMessages,
}: {
  conversationWithId: string;
  initialMessages: Message[];
}) => {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [text, setText] = useState("");

  const other = useMemo(() => users.find((u) => u.id === conversationWithId), [conversationWithId]);

  const onSend = () => {
    if (!text.trim()) return;
    const newMsg: Message = {
      id: Math.random().toString(36).slice(2),
      sender: "u1",
      receiver: conversationWithId,
      text,
      timestamp: new Date().toISOString(),
    };
    setMessages((prev) => [...prev, newMsg]);
    setText("");
  };

  return (
    <Card className="h-full shadow-elevated">
      <CardContent className="flex h-full flex-col p-0">
        <div className="border-b p-3">
          <p className="font-medium">Find People Using Kaiross AI</p>
        </div>
        <div className="flex-1 space-y-2 overflow-y-auto p-3">
          {messages.map((m) => (
            <div key={m.id} className={m.sender === "u1" ? "text-right" : "text-left"}>
              <span className="inline-block rounded-full bg-secondary px-3 py-1 text-sm">
                {m.text}
              </span>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-2 border-t p-3">
          <Input
            placeholder="Type a message"
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && onSend()}
          />
          <Button onClick={onSend}>Send</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ChatPanel;
