// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react"; // Optional but recommended
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About";
import Skills from "./components/Skills/Skills";
import Services from "./components/Services";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer";
import NotFound from "./pages/Error/NotFound";

function App() {
  return (
    <Router>
      <ThemeProvider>
        <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
          <Header />
          <Routes>
            <Route path="/" element={
              <>
                <main>
                  <Hero />
                  <About />
                  <Services />
                  <Skills />
                  <Projects />
                  <Contact />
                </main>
                <Footer />
              </>
            } />
            <Route path="*" element={<NotFound />} />
          </Routes>
          
          {/* Analytics and Speed Insight */}
          <Analytics />
          <SpeedInsights />
        </div>
      </ThemeProvider>
    </Router>
  );
}
export default App;