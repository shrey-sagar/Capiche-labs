"use client";

import { useState } from "react";
import { Send, Loader2 } from "lucide-react";

type Message = {
  role: "user" | "assistant";
  content: string;
};

export default function ChatWindow() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "👋 Hello! I'm Capiche AI. Ask me anything about our services, projects, or technology.",
    },
  ]);

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim() || loading) return;

    const userMessage = input.trim();

    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        content: userMessage,
      },
    ]);

    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: userMessage,
        }),
      });

      if (!res.ok) {
        throw new Error("Request failed");
      }

      const data = await res.json();

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            data.reply || "Sorry, I couldn't generate a response.",
        },
      ]);
    } catch (error) {
      console.error(error);

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "❌ Sorry, something went wrong. Please try again.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
<div className="chatbot-container flex h-[600px] w-[380px] flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#0B1120]/95 shadow-2xl backdrop-blur-2xl">      {/* Header */}
      <div className="border-b border-white/10 p-5">
        <h2 className="text-xl font-bold text-white">
          Capiche AI
        </h2>

        <p className="text-sm text-slate-400">
          Online 
        </p>
      </div>

{/* Messages */}
<div
  className="flex-1 overflow-y-auto overscroll-contain p-5"
  style={{
    WebkitOverflowScrolling: "touch",
  }}
  onWheel={(e) => {
    // Prevent the page from scrolling while the cursor is over the chat
    e.stopPropagation();
  }}
>
  <div className="space-y-4">
    {messages.map((msg, index) => (
      <div
        key={index}
        className={`max-w-[85%] whitespace-pre-wrap rounded-2xl px-4 py-3 ${
          msg.role === "user"
            ? "ml-auto bg-cyan-500 text-white"
            : "bg-slate-800 text-slate-200"
        }`}
      >
        {msg.content}
      </div>
    ))}

    {loading && (
      <div className="flex max-w-[85%] items-center gap-2 rounded-2xl bg-slate-800 px-4 py-3 text-slate-300">
        <Loader2 className="h-4 w-4 animate-spin" />
        Capiche AI is thinking...
      </div>
    )}
  </div>
</div>

      {/* Input */}
      <div className="border-t border-white/10 p-4">
        <div className="flex gap-2">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                sendMessage();
              }
            }}
            placeholder="Ask anything..."
            disabled={loading}
            className="flex-1 rounded-xl border border-white/10 bg-[#101827] px-4 py-3 text-white outline-none placeholder:text-slate-500 disabled:opacity-60"
          />

          <button
            onClick={sendMessage}
            disabled={loading}
            className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500 text-white transition hover:bg-cyan-400 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? (
              <Loader2 className="h-5 w-5 animate-spin" />
            ) : (
              <Send size={18} />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}