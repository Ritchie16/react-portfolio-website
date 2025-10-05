// src/App.jsx
import React from "react";
import { ThemeProvider } from "./contexts/ThemeContext";
import Header from "./components/Header/Header";
// import Hero from "./components/Hero/Hero";
// import About from "./components/About/About";
// import Skills from "./components/Skills/Skills";
// import Projects from "./components/Projects/Projects";
// import Contact from "./components/Contact/Contact";
// import Footer from "./components/Footer/Footer";

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen min-w-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Header />
        <main className="pt-16">
          {" "}
          {/* Add padding-top to account for fixed header */}
          {/* Add some temporary content to test */}
          <div className="mx-auto px-6 py-20">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white text-center">
              Welcome to My Portfolio
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 text-center mt-4">
              Content coming soon...
            </p>
          </div>
          {/* <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact /> */}
        </main>
        {/* <Footer /> */}
      </div>
    </ThemeProvider>
  );
}

export default App;
