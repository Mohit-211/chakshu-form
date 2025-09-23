import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Intro from "./pages/Intro";
import Application from "./pages/Application";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/application" element={<Application />} />
          {/* Catch-all route */}
          <Route path="*" element={<Intro />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
