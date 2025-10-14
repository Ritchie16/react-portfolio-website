import React from "react";
import { motion } from "framer-motion";
import HeroText from "./HeroText";
import HeroImage from "./HeroImage";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delayChildren: 0.3, staggerChildren: 0.2 },
    },
  };

  return (
    <section
      id="home"
      className=" min-h-screen flex items-center justify-center  bg-gradient-to-br from-blue-50 via-white to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900/60"
    >
      {/** Using motion.div to animate the entire hero section */}
      {/** Applying container variants for staggered child animations */}
      {/** Flexbox layout to arrange text and image side by side on large screens and stacked on smaller screens */}
      {/** Gap between items for spacing */}
      {/** Padding for overall spacing */}
      {/** Responsive design with flex-col on small screens and flex-row on large screens */}
      {/** Centering items vertically and horizontally */}  
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className=" min-w-screen flex flex-col lg:flex-row items-center justify-between gap-12"
      >
        <div className="h-10 md:h-12 lg:h-14">
          {/**adding a height to fill app space covered by the Header */}
        </div>

        {/*text with buttons */}
        <HeroText />

        {/**image with social links */}
        <HeroImage />
      </motion.div>
    </section>
  );
};

export default Hero;
