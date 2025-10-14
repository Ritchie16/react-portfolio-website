import AboutMyStack from "./AboutMyStack";
import AboutPassion from "./AboutPassion";
import { motion } from "framer-motion";

const PassionAndStack = () => {
    const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delayChildren: 0.3, staggerChildren: 0.2 },
    },
  };

  return (
    <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col w-full md:max-w-1/2 items-center justify-between gap-y-2 md:gap-x-5"
          >
            <AboutPassion />
            <AboutMyStack />
          </motion.div>

  );

}

export default PassionAndStack;