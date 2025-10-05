import { useState } from "react";
import ApplicantModal from "../components/ApplicantModal";
import { useNavigate } from "react-router-dom"; // assuming react-router-dom

export default function Apply() {
  const [isModalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#F9F6EF] flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-semibold text-gray-800 mb-8">
        Start Your Application
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl w-full">
        {/* Manual Form Card */}
        <div
          className="bg-white rounded-2xl shadow p-6 cursor-pointer hover:shadow-lg transition"
          onClick={() => navigate("/apply/form")}
        >
          <h2 className="text-xl font-medium text-gray-800 mb-2">
            Manual Application
          </h2>
          <p className="text-gray-600">
            Fill out our detailed form at your own pace.
          </p>
        </div>

        {/* AI Chat Card */}
        <div
          className="bg-white rounded-2xl shadow p-6 cursor-pointer hover:shadow-lg transition"
          onClick={() => setModalOpen(true)}
        >
          <h2 className="text-xl font-medium text-gray-800 mb-2">
            AI Application
          </h2>
          <p className="text-gray-600">
            Chat with our AI assistant and get a personalized application.
          </p>
        </div>
      </div>

      {isModalOpen && <ApplicantModal onClose={() => setModalOpen(false)} />}
    </div>
  );
}
