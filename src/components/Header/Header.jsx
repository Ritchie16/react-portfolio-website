// src/components/Header/Header.jsx
import React, { useState, useEffect } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import ThemeToggleButton from "../ThemeToggle/ThemeToggle";
import { LiaLaptopCodeSolid } from "react-icons/lia";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  
  // Add these hooks
  const navigate = useNavigate();
  const location = useLocation();

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Only update active section if we're on home page
      if (location.pathname === "/") {
        const sections = ["home", "about", "services", "skills", "projects", "contact"];
        const current = sections.find((section) => {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            return rect.top <= 100 && rect.bottom >= 100;
          }
          return false;
        });

        if (current) setActiveSection(current);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  // Updated smooth scroll function
  const handleSmoothScroll = (href, event) => {
    event.preventDefault();
    
    // Extract the target ID from the href (removing the '#' character)
    const targetId = href.replace("#", "");
    
    // If we're not on the home page, navigate to home page first
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: targetId } });
    } else {
      // We're already on home page, scroll to section
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
        setActiveSection(targetId);
        setIsMenuOpen(false);
      }
    }
  };

  // Handle scroll to section after navigation
  useEffect(() => {
    if (location.state?.scrollTo) {
      const targetId = location.state.scrollTo;
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        setTimeout(() => {
          targetElement.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
          setActiveSection(targetId);
          
          // Clear the state to prevent repeated scrolling on refresh
          window.history.replaceState({}, document.title);
        }, 100); // Small delay to ensure DOM is ready
      }
    }
  }, [location.state]);

  const navItems = [
    { name: "Home", href: "#home", id: "home" },
    { name: "About", href: "#about", id: "about" },
    { name: "Services", href: "#services", id: "services" },
    { name: "Skills", href: "#skills", id: "skills" },
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  const handleNavClick = (event, href) => {
    handleSmoothScroll(href, event);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest("nav")) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isMenuOpen]);

  return (
    <Motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0   z-50 transition-all duration-300  w-full ${
        isScrolled
          ? "bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg border-b border-gray-200/50 dark:border-gray-700/50 shadow-lg"
          : "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200/30 dark:border-gray-700/30"
      }`}
    >
      <nav className="px-4 sm:px-6 lg:px-8 ">
        <div className="flex items-center justify-between py-4 min-h-10 md:min-h-12 lg:min-h-14">
          {/* Logo/Brand */}
          <Motion.a
            href="#home"
            onClick={(e) => handleSmoothScroll("#home", e)}
            className="flex items-center justify-between md:justify-center gap-x-2 w-20 md:w-40 text-center text-lg md:text-2xl font-bold bg-gradient-to-r from-primary-600 to-primary-300 dark:from-primary-500 dark:to-primary-300 bg-clip-text text-transparent cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            RITCHIE
          </Motion.a>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center gap-7">
            {navItems.map((item) => (
              <Motion.a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`relative transition-colors duration-300 font-medium text-lg px-4 py-2 group cursor-pointer ${
                  activeSection === item.id
                    ? "text-primary-600 dark:text-primary-400"
                    : "text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
                }`}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0 }}
              >
                {item.name}
                <span
                  className={`absolute bottom-0.5 left-0 right-0 h-0.5 bg-primary-600 dark:bg-primary-400 transition-transform duration-300 ${
                    activeSection === item.id
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  }`}
                ></span>
              </Motion.a>
            ))}

            <Motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
              className="ml-4 w-12 pr-5"
            >
              <ThemeToggleButton />
            </Motion.div>
          </div>

          {/* Large Tablet Navigation */}
          <div className="hidden lg:flex xl:hidden items-center gap-6">
            {navItems.map((item) => (
              <Motion.a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`relative transition-colors duration-300 font-medium text-md px-3 py-2 group cursor-pointer ${
                  activeSection === item.id
                    ? "text-primary-600 dark:text-primary-400"
                    : "text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
                }`}
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.name}
                <span
                  className={`absolute bottom-0.5 left-0 right-0 h-0.5 bg-primary-600 dark:bg-primary-400 transition-transform duration-300 ${
                    activeSection === item.id
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  }`}
                ></span>
              </Motion.a>
            ))}
            <Motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="ml-2 w-12 pr-5"
            >
              <ThemeToggleButton />
            </Motion.div>
          </div>

          {/* Small Tablet Navigation */}
          <div className="hidden md:flex lg:hidden items-center gap-4">
            {navItems.map((item) => (
              <Motion.a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`transition-colors duration-300 font-medium text-md px-2! py-2! rounded-md cursor-pointer ${
                  activeSection === item.id
                    ? "text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/30"
                    : "text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-100/50 dark:hover:bg-gray-800/50"
                }`}
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.name}
              </Motion.a>
            ))}
            <Motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="ml-2! w-12 pr-5!"
            >
              <ThemeToggleButton />
            </Motion.div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center justify-center gap-x-3 w-25 ">
            <ThemeToggleButton />
            <Motion.button
              onClick={(e) => {
                e.stopPropagation();
                setIsMenuOpen(!isMenuOpen);
              }}
              className=" rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200 "
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </Motion.button>

          
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <Motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden border-t border-gray-200 dark:border-gray-700 mt-2!"
            >
              <div className="py-3 space-y-1">
                {navItems.map((item, index) => (
                  <Motion.a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`block py-3! px-6! transition-all duration-200 font-medium text-base border-l-4 cursor-pointer ${
                      activeSection === item.id
                        ? "text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/30 border-primary-600 dark:border-primary-400"
                        : "text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-50 dark:hover:bg-gray-800 border-transparent hover:border-primary-600 dark:hover:border-primary-400"
                    }`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 8 }}
                  >
                    {item.name}
                  </Motion.a>
                ))}
              </div>
            </Motion.div>
          )}
        </AnimatePresence>
      </nav>
    </Motion.header>
  );
};

export default Header;