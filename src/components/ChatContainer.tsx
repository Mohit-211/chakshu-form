import { useState, useRef, useEffect } from "react";
import ChatHeader from "./ChatHeader";
import ChatMessage, { Message } from "./ChatMessage";
import ChatInput from "./ChatInput";
import { useToast } from "@/hooks/use-toast";

const API_BASE = import.meta.env.VITE_API_BASE_URL;

const ChatContainer = () => {
  const { toast } = useToast();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      text: "🌸 Welcome to Petal & Promise! I'm here to help you apply. Let's begin whenever you're ready.",
      sender: "ai",
      timestamp: new Date(),
    },
  ]);
  const [loading, setLoading] = useState(false);

  // 🔹 Load session info from localStorage
  const session = (() => {
    try {
      return JSON.parse(localStorage.getItem("pnpSession") || "null");
    } catch {
      return null;
    }
  })();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (text: string) => {
    if (!session) {
      toast({
        title: "No active session",
        description: "Please start a new application.",
        variant: "destructive",
      });
      return;
    }

    const userMessage: Message = {
      id: Date.now().toString(),
      text,
      sender: "user",
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);
    setLoading(true);

    try {
      const res = await fetch(
        `${API_BASE}/session/${session.sessionId}/message`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            token: session.token,
            message: text,
          }),
        }
      );

      if (!res.ok) throw new Error("API error");
      const data = await res.json();

      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: data.reply || "Something went wrong, please try again.",
        sender: "ai",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      console.error(error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleEndChat = async () => {
    if (session) {
      try {
        await fetch(`${API_BASE}/session/${session.sessionId}/end`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ token: session.token }),
        });
      } catch (err) {
        console.error("End chat failed:", err);
      }
    }

    localStorage.removeItem("pnpSession");
    toast({
      title: "Chat Ended",
      description: "✨ Thank you for chatting with Petal & Promise.",
    });
    window.location.href = "/"; // Redirect back to intro page
  };

  return (
    <div className="min-h-screen bg-[#F9F6EF] flex items-center justify-center p-4">
      <div className="w-full max-w-2xl h-[90vh] bg-white rounded-3xl shadow-lg flex flex-col overflow-hidden border border-gray-200">
        <ChatHeader onEndChat={handleEndChat} />

        <div className="flex-1 overflow-y-auto px-6 py-6 space-y-3 scrollbar-thin scrollbar-thumb-gray-300">
          {messages.map((message) => (
            <ChatMessage key={message.id} message={message} />
          ))}
          {loading && (
            <ChatMessage
              message={{
                id: "typing",
                text: "✍️ Assistant is typing...",
                sender: "ai",
                timestamp: new Date(),
              }}
            />
          )}
          <div ref={messagesEndRef} />
        </div>
        <ChatInput onSendMessage={handleSendMessage} disabled={loading} />
      </div>
    </div>
  );
};

export default ChatContainer;
