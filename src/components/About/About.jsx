import { motion } from "framer-motion";
import CombineEduCert from "./Edu+Cert";
import PassionAndStack from "./PassionAndStack";
import AboutLocation from "./AboutLocation";

const AboutMe = () => {
  
  return (
    <section
      id="about"
      className="bg-gradient-to-br from-blue-50 via-white to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900/60 min-h-screen min-w-screen"
    >
      {/** Container for the entire About Me section and its content has a relative to add top space*/}
      <div className="min-w-screen  flex flex-col  justify-between items-center gap-y-0 md:gap-y-2 relative top-0 md:top-14 ">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold bg-gradient-to-b from-primary-600 to-gray-400 dark:from-primary-500 dark:to-blue-300 bg-clip-text text-transparent ">
            About <span className="text-primary-700">Me</span>
          </h2>
          <div className="w-44 h-[2px] bg-gray-900/60 dark:bg-white/80 mx-auto"></div>
        </motion.div>

        {/* Education and Certifications Component */}
        <div className="flex flex-col md:flex-row justify-between gap-y-2 md:gap-x-5">
          <PassionAndStack />
        <CombineEduCert />
        </div>
        
        <AboutLocation />
      </div>
    </section>
  );
};

export default AboutMe;
