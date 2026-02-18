import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./pages/Home";
import CaseStudy from "./pages/CaseStudy";
import ScrollToTop from "./ScrollToTop";

function App() {
  const location = useLocation();

  return (
    <div className="bg-[#0f172a] text-white min-h-screen">
      <ScrollToTop />

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/projects/:slug" element={<CaseStudy />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
