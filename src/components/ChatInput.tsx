import { useState } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  disabled?: boolean; // disable while AI is typing
}

const ChatInput = ({ onSendMessage, disabled = false }: ChatInputProps) => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      onSendMessage(message.trim());
      setMessage("");
    }
  };

  return (
    <footer className="sticky bottom-0 bg-[#F9F6EF] border-t border-gray-200 px-4 py-3 shadow-inner">
      <form onSubmit={handleSubmit} className="flex items-center gap-3">
        <Input
          type="text"
          aria-label="Chat message"
          placeholder="Type your message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          disabled={disabled}
          className="flex-1 rounded-full border border-gray-300 bg-white px-5 py-3 text-sm focus-visible:ring-1 focus-visible:ring-pink-500 focus:outline-none disabled:bg-gray-100"
        />
        <Button
          type="submit"
          size="icon"
          aria-label="Send message"
          className="rounded-full w-11 h-11 bg-pink-600 hover:bg-pink-700 shadow-md transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={!message.trim() || disabled}
        >
          <Send className="w-4 h-4 text-white" />
        </Button>
      </form>
    </footer>
  );
};

export default ChatInput;
