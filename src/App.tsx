import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Intro from "./pages/Intro";
import Application from "./pages/Application";
import Chat from "./pages/Chat";
import Apply from "./pages/Apply";

function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const hideLayout = location.pathname.startsWith("/chat");

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      {!hideLayout && <Navbar />}
      <main className="flex-1">{children}</main>
      {!hideLayout && <Footer />}
    </div>
  );
}

function App() {
  return (
    <LayoutWrapper>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/application" element={<Application />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/apply" element={<Apply />} />
        {/* Catch-all route */}
        <Route path="*" element={<Intro />} />
      </Routes>
    </LayoutWrapper>
  );
}

export default App;
