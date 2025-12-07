import React from "react";
import { motion as Motion} from "framer-motion";
import HeroSocialLinks from "./HeroSocialLinks";
import EmailCopy from "./EmailCopy";

const HeroImage = () => (
  <Motion.div
    initial={{ opacity: 0, scale: 0.6 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8, delay: 0.5 }}
    //
    className="lg:w-1/2 flex flex-col items-center gap-y-5"
  >
    {/**the relative class plays a role in positioning the floating shapes */}
    <div className="relative">
      {/** Profile image with gradient border*/}
      <div className="relative w-64 h-64 md:w-70 md:h-70 lg:w-80 lg:h-80 bg-gradient-to-br from-primary-400 via-primary-500 to-primary-700 rounded-full overflow-hidden border-8 border-white dark:border-gray-800 shadow-2xl">
        {/**profile image that fits the border with it's aspect ratio */}
        <img
          src="/profile_pic.jpeg"
          alt="Profile picture"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Floating shapes that uses absolute with relative div above*/}
      <Motion.div
        className="absolute -top-2 right-2 w-10 h-10 md:w-15 md:h-15 bg-primary-200 rounded-full opacity-20"
        animate={{ y: [0, -10, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      <Motion.div
        className="absolute -bottom-4 -left-4 w-8 h-8 md:w-16 md:h-16 bg-primary-300 rounded-full opacity-20"
        animate={{ y: [0, 10, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

       <Motion.div
        className="absolute right-4 bottom-4 w-8 h-8 md:w-10 md:h-10 bg-gray-400 rounded-full opacity-20"
        animate={{ y: [0, 10, 0], rotate: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

    </div>

    {/* Social links under image */}
    <div className="md:flex justify-center ">
      <HeroSocialLinks />
    </div>
    {/* Email copy component */}
    <div className="relative bottom-3">
      <EmailCopy />
    </div>
  </Motion.div>
);

export default HeroImage;
