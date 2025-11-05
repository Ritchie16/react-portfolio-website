import AboutMyStack from "./AboutMyStack";
// import AboutPassion from "./AboutPassion";
import { motion as Motion } from "framer-motion";

const PassionAndStack = () => {
    const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delayChildren: 0.3, staggerChildren: 0.2 },
    },
  };

  return (
    <Motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col w-full md:max-w-1/2 items-center justify-between gap-y-5 md:gap-x-5"
          >
            {/* <AboutPassion /> */}
            <AboutMyStack />
          </Motion.div>

  );

}

export default PassionAndStack;