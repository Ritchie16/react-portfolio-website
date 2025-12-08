// src/App.jsx
import React from "react";
import { ThemeProvider } from "./contexts/ThemeContext";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About";
import Skills from "./components/Skills/Skills";
import Services from "./components/Services";
import Projects from "./components/Projects/Projects";
// import Contact from "./components/Contact/Contact";

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Header />
        <main>
          <Hero />
          <About />

          {/*
          
          <Contact />
          */}

          <Services />
          <Skills />
          <Projects />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
