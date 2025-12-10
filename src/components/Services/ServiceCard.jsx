import React from "react";
import { motion as Motion } from "framer-motion";

const ServiceCard = ({ service, index }) => {
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.9,
      rotateX: -5
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration: 0.8,
        delay: index * 0.15
      }
    },
    hover: {
      y: -8,
      scale: 1.02,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25
      }
    }
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        delay: 0.3 + index * 0.15,
        duration: 0.5
      }
    }
  };

  return (
    <Motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, margin: "-50px" }}
      className="relative! group! h-full! "
    >
      {/* Card Container with Professional Polish */}
      <div className=" h-full! flex! flex-col! bg-white/80 dark:bg-dark-500  rounded-2xl! shadow-xl! hover:shadow-2xl! transition-all! duration-500! border! border-gray-100 dark:border-white/20 overflow-hidden!">
        
        {/* Premium Top Accent */}
        {/* <div className="h-0.5 bg-gradient-to-r from-primary-500 via-primary-600 opacity-20"></div> */}
        
        {/* Service Title - Sophisticated Design */}
        <div className="px-8! pt-8! pb-6! text-center! border-b! border-gray-100/50! dark:border-gray-700/50! bg-gradient-to-b! from-white/50! to-transparent! dark:from-gray-800/50!">
          <Motion.div
            variants={contentVariants}
            className="relative! inline-block!"
          >
                        
            <h3 className="relative! text-2xl! font-bold! text-gray-900! dark:text-white! tracking-tight! leading-tight!">
              {service.title}
            </h3>
          </Motion.div>
          
    
        </div>

        {/* Card Content - Premium Layout */}
        <div className="flex-1! p-8!">
          {/* Service Description - Elegant Typography */}
          <Motion.div
            variants={contentVariants}
            className="mb-8!"
          >
            <p className="text-gray-600! dark:text-gray-300! text-base! leading-relaxed! tracking-wide! font-light! text-justify!">
              {service.description}
            </p>
          </Motion.div>

          {/* Key Features - Professional List */}
          {service.features && (
            <Motion.div
              variants={contentVariants}
              className="space-y-4!"
            >
              <div className="flex! items-center! gap-3! mb-4!">
                <div className="h-px! flex-1! bg-gradient-to-r! from-gray-300/50! dark:from-gray-600/50! to-transparent!"></div>
                <h4 className="text-sm! font-semibold! tracking-wider! uppercase! text-gray-500! dark:text-gray-400!">
                  Key Features
                </h4>
                <div className="h-px! flex-1! bg-gradient-to-l! from-gray-300/50! dark:from-gray-600/50! to-transparent!"></div>
              </div>
              
              <ul className="space-y-3!">
                {service.features.map((feature, idx) => (
                  <Motion.li
                    key={idx}
                   
                    viewport={{ once: true }}
                    className="flex! items-start! gap-3! group/item!"
                  >
                    {/* Premium Bullet Point */}
                    <div className="relative! flex-shrink-0! mt-1.5!">
                      <div className="absolute! inset-0! bg-primary-500/20! rounded-full! group-hover/item:bg-primary-500/40! transition-colors! duration-300!"></div>
                      <div className="relative! w-2! h-2! bg-gradient-to-br! from-primary-500! to-primary-600! rounded-full!"></div>
                    </div>
                    
                    {/* Feature Text */}
                    <span className="text-sm! text-gray-700! dark:text-gray-300! leading-relaxed! tracking-wide!">
                      {feature}
                    </span>
                  </Motion.li>
                ))}
              </ul>
            </Motion.div>
          )}
        </div>

        {/* Premium Bottom Accent */}
        <div className="px-8! py-6! border-t! border-gray-100/50! dark:border-gray-700/50! bg-gradient-to-t! from-white/30! to-transparent! dark:from-gray-800/30!">
          <div className="text-center!">
            <span className="inline-flex! items-center! gap-2! text-xs! font-medium! tracking-wide! text-gray-500! dark:text-gray-400! uppercase!">
              <span className="w-1! h-1! bg-gradient-to-r! from-primary-500! to-primary-500! rounded-full! animate-pulse!"></span>
              Expert Service
              <span className="w-1! h-1! bg-gradient-to-r! from-primary-500! to-primary-500! rounded-full! animate-pulse! delay-300!"></span>
            </span>
          </div>
        </div>

        {/* Premium Hover Effects */}
        <div className="absolute! inset-0! rounded-2xl! border-2! border-transparent! group-hover:border-primary-400/20! dark:group-hover:border-primary-500/20! pointer-events-none! transition-all! duration-500!"></div>
      </div>

      {/* Floating Shadow Effect */}
      <div className="absolute! -bottom-2! left-4! right-4! h-4! bg-gradient-to-t! from-gray-900/10! to-transparent! blur-md! opacity-0! group-hover:opacity-100! transition-opacity! duration-500! -z-10! rounded-b-2xl!"></div>
    </Motion.div>
  );
};

export default ServiceCard;