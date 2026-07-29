import React, { useEffect } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Index from "./routes/index";
import About from "./routes/about";
import Team from "./routes/team";
import Blog from "./routes/blog";
import Careers from "./routes/careers";
import Contact from "./routes/contact-us";
import Csr from "./routes/csr-impact";
import Disclaimer from "./routes/disclaimer";
import Esg from "./routes/esg-advisory";
import ServicePage from "./routes/services/$slug";
import KnowledgePage from "./routes/knowledge-bank/$slug";
import "./styles.css";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);
  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Team />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/csr-impact" element={<Csr />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
        <Route path="/esg-advisory" element={<Esg />} />
        <Route path="/knowledge-bank" element={<KnowledgePage />} />
        <Route path="/knowledge-bank/:slug" element={<KnowledgePage />} />
        <Route path="/services/:slug" element={<ServicePage />} />
      </Routes>
    </BrowserRouter>
  );
}

const el = document.getElementById("root");
if (el) {
  createRoot(el).render(<App />);
}
