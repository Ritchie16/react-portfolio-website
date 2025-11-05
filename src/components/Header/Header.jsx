// src/components/Header/Header.jsx
import React, { useState, useEffect } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";
import ThemeToggleButton from "../ThemeToggle/ThemeToggle";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = ["home", "about", "skills", "projects", "contact"];

      // Find the section currently in view so that we can highlight it in the nav
      //.find used to search through an array and return the first element that matches a condition you define.
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          //Tells us where that section is on the screen — its distance from the top, bottom, etc.
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      //so current is the matched element
      if (current) setActiveSection(current);
    };

    //add the event listener to the screen - executes the function always on scroll
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll function
  const handleSmoothScroll = (href, event) => {
    //this helps to prevent the default behavior of the anchor tag, which is to jump directly to the section without any animation.
    //By calling event.preventDefault(), we stop that default jump and instead implement our own smooth scrolling behavior.
    //So, when a user clicks on a navigation link, they experience a smooth transition to the target section rather than an abrupt jump.
    //This enhances the user experience by providing a visually appealing and less jarring navigation effect.
    //In summary, event.preventDefault() is used here to enable smooth scrolling by preventing the default jump-to-section behavior of anchor tags.
    event.preventDefault();

    // Extract the target ID from the href (removing the '#' character)
    const targetId = href.replace("#", "");
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      setActiveSection(targetId);
      //this is used because when a user clicks on a navigation link in the mobile menu, we want the menu to close automatically after the click.
      //If we don't close the menu, it would remain open, potentially obstructing the view of the content the user just navigated to.
      //By calling setIsMenuOpen(false), we ensure that the mobile menu closes after a navigation link is clicked, providing a cleaner and more user-friendly experience.
      setIsMenuOpen(false);
    }
  };

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
      //event.target gives us the specific element that was clicked.
      //The closest("nav") method checks if the clicked element is inside a <nav> element.
      //If the clicked element is not inside a <nav> (i.e., closest("nav") returns null), and the menu is currently open (isMenuOpen is true),
      //then we close the menu by setting isMenuOpen to false.
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300  ${
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
            className="w-20 md:w-30 text-center text-lg md:text-2xl font-bold bg-gradient-to-r from-primary-600 to-blue-300 dark:from-primary-500 dark:to-blue-300 bg-clip-text text-transparent cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            RITCHIE
          </Motion.a>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center gap-10">
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
                className={`transition-colors duration-300 font-medium text-md px-2 py-2 rounded-md cursor-pointer ${
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
              className="ml-2 w-12 pr-5"
            >
              <ThemeToggleButton />
            </Motion.div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center justify-between gap-x-3 w-15">
            <ThemeToggleButton />
            <Motion.button
              onClick={(e) => {
                e.stopPropagation();
                setIsMenuOpen(!isMenuOpen);
              }}
              className="rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
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

            <div className="w-7">
              {/* This empty div is to help with spacing and alignment of the menu button */}
            </div>
          </div>
        </div>

        {/**Mobile Navigation
         * the main role of this code is to display a mobile-friendly navigation menu that appears
         * when a user clicks on a menu button (often represented by a hamburger icon) on smaller screens.
         */}
        <AnimatePresence>
          {isMenuOpen && (
            <Motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden border-t border-gray-200 dark:border-gray-700 mt-2"
            >
              <div className="py-3 space-y-1">
                {navItems.map((item, index) => (
                  <Motion.a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`block py-3 px-6 transition-all duration-200 font-medium text-base border-l-4 cursor-pointer ${
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
