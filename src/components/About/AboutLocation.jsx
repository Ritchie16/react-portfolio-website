import { TiLocation } from "react-icons/ti";
import { motion } from "framer-motion";

const AboutLocation = () => {
  return (
    <div className="relative flex items-center h-10 md:h-20 justify-between gap-x-4 ">
      {/* relative to add some top spacing*/}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="md:h-15 w-[80%] md:w-full relative  md:top-8  flex flex-col items-center justify-start "
      >
        {/* Location Icon at the bottom */}
        <div className="hidden md:flex items-center  justify-center md:w-full  md:h-10 text-sm lg:text-md   gap-2 font-bold text-primary-600 dark:text-white">
          <TiLocation />
          Location
        </div>
    

        {/* Location entries */}
        <div className="hidden md:flex w-full  ">
          <p className="text-gray-700 text-sm flex   w-full dark:text-gray-300">
            Mzuzu University, Mzuzu City, Malawi.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutLocation;
