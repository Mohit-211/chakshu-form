import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  onClose: () => void;
}

export default function ApplicantModal({ onClose }: Props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async () => {
    if (!name || !email || !phone) return alert("All fields are required");
    setLoading(true);

    try {
      const res = await fetch(
        "https://api.petalandpromise.in/api/session/start",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email, phone }),
        }
      );

      const data = await res.json();
      if (data.sessionId && data.token) {
        // Save session for Chat.tsx
        localStorage.setItem("pnpSession", JSON.stringify(data));
        navigate("/chat");
      }
    } catch (err) {
      console.error(err);
      alert("Failed to start session");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-md p-6 relative">
        <button
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
          onClick={onClose}
        >
          ✕
        </button>

        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Start Your AI Application
        </h2>

        <div className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full border rounded-lg p-3"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full border rounded-lg p-3"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full border rounded-lg p-3"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        <button
          className="mt-6 w-full bg-red-600 text-white rounded-lg py-3 hover:bg-red-700 transition disabled:bg-gray-400"
          onClick={handleSubmit}
          disabled={loading}
        >
          {loading ? "Starting..." : "Start Chat"}
        </button>
      </div>
    </div>
  );
}
