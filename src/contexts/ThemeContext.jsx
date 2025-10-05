// src/contexts/ThemeContext.jsx
import React, { createContext, useContext, useState, useEffect } from "react";

//the context get defined here
const ThemeContext = createContext();

//custom hook to use the theme context
export const useTheme = () => {
  //custom hook to use the theme context
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
};

//the provider component that will wrap the app and provide the theme context to its children
export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);

  //it will check for the saved theme in local storage or system preference on initial load or refresh
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    /**window.matchMedia is a browser API that checks device/display settings
     * window.mediaMatch returns a MediaQueryList object which has a property 'matches'
     * that returns true if the document matches the media query string
     */
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    //(!savedTheme && prefersDark) becomes true when there is no saved theme in local storage and system preference is dark
    //when savedTheme is null doing !savedTheme will make it true
    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setIsDark(true);

      //add to html element the class "dark" that will trigger dark mode styles in Tailwind CSS
      document.documentElement.classList.add("dark");
    }
  }, []);

  //event handler to toggle the theme and save the prefrence in local  storage
  const toggleTheme = () => {
    setIsDark((prev) => {
      const newTheme = !prev;

      if (newTheme) {
        //this will add the 'dark' class to the html element named 'documentElement' that is <html>
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }

      return newTheme; //return the updated theme value to true/false
    });
  };

  const value = {
    isDark,
    toggleTheme,
  };

  return (
    /**when ever we wrap components between ThemeProvider it will be returned between
     * ThemeContext.Provider and will have access to the value object
     */
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
