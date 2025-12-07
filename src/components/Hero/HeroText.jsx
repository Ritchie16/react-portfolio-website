import { motion as Motion } from "framer-motion";
import { FiArrowRight, FiDownload, FiCopy, FiCheck } from "react-icons/fi";
import HeroSocialLinks from "./HeroSocialLinks";


const HeroText = () => {
  const buttonSizes = "text-sm md:text-md ";

  //this is similar to as writing initial and animate props on motion.div
  //we can define multiple variants and use them on different motion elements
  //this is useful for complex animations with multiple elements
  //here we define variants for the entire text block
  //and for individual items like h1, p, and buttons
  //we can then use these variants on the respective motion elements
  //to create a staggered animation effect

  //variants for the entire text block
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <Motion.div
      variants={itemVariants}
      className=" lg:w-1/2 text-center lg:text-left flex flex-col items-center lg:items-start gap-6 "
    >
      {/** heading with gradient text on name */}
      <Motion.h1 className=" text-xl md:text-2xl lg:text-3xl xl:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
        Hi     
        , I'm{" "}
        <span className="bg-gradient-to-r from-primary-600 to-primary-400 dark:from-primary-700 dark:via-primary-300 dark:to-primary-400 bg-clip-text text-transparent">
          Richard Munthali
        </span>
        
        <span
          className=" animate-wave inline-block"
          style={{ transformOrigin: "70% 70%" }}
          aria-label="Waving hand emoji"
          role="img"
        >
          👋
        </span>
      </Motion.h1>

      {/**subheading with highlighted text  */}
      <Motion.p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-medium">
        Full Stack Developer &{" "}
        <span className="text-primary-600 dark:text-primary-400">
          UI/UX Enthusiast
        </span>
      </Motion.p>

      <Motion.p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl leading-relaxed">
        I create beautiful, responsive web applications using modern
        technologies. Passionate about clean code, user experience, and turning
        complex problems into simple, elegant solutions.
      </Motion.p>

      {/* === CTA Buttons === */}
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start">
        <a
          href="#contact"
          /**items center for centering vertically and justify-center for centering items horizontally */
          className={`h-10 w-1/1 md:w-40 lg:45 xl:w-50 ${buttonSizes}  bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105`}
        >
          <FiArrowRight />
          Get In Touch
        </a>

        <a
          href="#projects"
          className={`h-10 w-1/1 md:w-40 lg:45 xl:w-50 ${buttonSizes} border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-primary-600 hover:text-primary-600 px-6 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105`}
        >
          <FiArrowRight />
          See My Projects
        </a>

        <a
          href="/Richard_Munthali_CV.pdf"
          download
          className={`h-10 w-1/1 md:w-40 lg:45 xl:w-50 ${buttonSizes} border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white px-3 py-3  rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105`}
        >
          <FiDownload />
          Download CV
        </a>
      </div>
    </Motion.div>
  );
};

export default HeroText;
