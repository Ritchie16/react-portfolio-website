import { motion as Motion } from "framer-motion";
import CombineEduCert from "./Edu+Cert";
import PassionAndStack from "./PassionAndStack";
import AboutLocation from "./AboutLocation";

const AboutMe = () => {
  return (
    <section
      id="about"
      className="flex flex-col items-center bg-gradient-to-br from-blue-50 via-white to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900/60 min-h-screen pt-15!"
    >
      {/** Container for the entire About Me section and its content has a relative to add top space*/}
      <div className=" flex flex-col justify-between items-center gap-8 w-full max-w-6xl">
        {/* Section Header */}
        <Motion.div
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
        </Motion.div>

        {/* Education and Certifications Component */}
        <div className="flex flex-col md:flex-row justify-between gap-y-5  ">
          <PassionAndStack />
          <CombineEduCert />
        </div>
      </div>

      <div className=" md:mt-80! lg:mt-8! lg:mb-6">
        <AboutLocation />
      </div>
    </section>
  );
};

export default AboutMe;
