import { Flower } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ChatHeaderProps {
  onEndChat?: () => void;
}

const ChatHeader = ({ onEndChat }: ChatHeaderProps) => {
  return (
    <header className="flex items-center justify-between px-6 py-4 border-b bg-[#F9F6EF] shadow-sm">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-200 to-pink-100 flex items-center justify-center">
          <Flower className="w-5 h-5 text-pink-600" strokeWidth={1.5} />
        </div>
        <h1 className="text-lg font-medium tracking-wide text-gray-800">
          Petal & Promise Assistant
        </h1>
      </div>

      <Button
        variant="ghost"
        onClick={onEndChat}
        className="text-sm text-gray-500 hover:text-red-600 hover:bg-red-50 transition-colors"
      >
        End Chat
      </Button>
    </header>
  );
};

export default ChatHeader;
