import { cn } from "@/lib/utils";

export interface Message {
  id: string;
  text: string;
  sender: "user" | "ai";
  timestamp: Date;
}

interface ChatMessageProps {
  message: Message;
}

const ChatMessage = ({ message }: ChatMessageProps) => {
  const isUser = message.sender === "user";

  const formatTime = (date: Date) =>
    date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });

  return (
    <div
      className={cn(
        "flex flex-col mb-4 animate-fadeIn",
        isUser ? "items-end" : "items-start"
      )}
    >
      <div
        className={cn(
          "max-w-[75%] px-5 py-3 rounded-2xl shadow-sm text-sm leading-relaxed break-words whitespace-pre-wrap",
          isUser
            ? "bg-[#EEDDDC] text-gray-800 rounded-br-md"
            : "bg-[#F2EFE9] text-gray-700 rounded-bl-md"
        )}
      >
        {message.id === "typing" ? (
          <span className="italic text-gray-500">{message.text}</span>
        ) : (
          message.text
        )}
      </div>
      <span className="text-xs text-gray-400 mt-1 px-2">
        {formatTime(message.timestamp)}
      </span>
    </div>
  );
};

export default ChatMessage;
