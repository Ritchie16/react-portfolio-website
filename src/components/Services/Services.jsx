import React from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";
import ServiceCard from "./ServiceCard";
import { services } from "../../constants/services";

const Services = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const titleVariants = {
    hidden: { 
      opacity: 0, 
      y: 40,
      scale: 0.95 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.8
      }
    }
  };



  return (
    <AnimatePresence>
      <section
        id="services"
        className="relative py-24! px-4! sm:px-6! lg:px-8! min-h-screen! w-full! overflow-hidden! bg-gradient-to-b from-gray-50 to-gray-200   dark:from-dark-200 dark:to-dark-100"
      >
        {/* Sophisticated Background */}
        <div className="absolute! inset-0!  -z-10!"></div>
        
        {/* Subtle Grid Pattern */}
        <div className="absolute! inset-0! opacity-5! dark:opacity-10! bg-grid-gray-900/[0.04]! dark:bg-grid-gray-100/[0.05]! -z-5! bg-[size:20px_20px]!"></div>
        
        {/* Gradient Accents */}
        <div className="absolute! -top-40! -left-40! w-80! h-80! bg-primary-500/5! rounded-full! blur-3xl! -z-5!"></div>
        <div className="absolute! -bottom-40! -right-40! w-80! h-80! bg-blue-500/5! rounded-full! blur-3xl! -z-5!"></div>

        <div className="max-w-7xl! mx-auto!">
          {/* Section Header - Professional Edition */}
          <div className="text-center! mb-20!">
            <Motion.div
              variants={titleVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              className="relative! inline-block! mb-6!"
            >
            
              
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4!">
            My <span className="bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent">Services</span>
          </h2>
            </Motion.div>


          </div>

          {/* Services Grid - Enhanced */}
          <Motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="relative!"
          >
          
            <div className="grid! grid-cols-1! md:grid-cols-2! lg:grid-cols-3! gap-8! lg:gap-10! px-4! sm:px-6!">
              {services.map((service, index) => (
                <div 
                  key={service.id} 
                  className="relative!"
                  style={{
                    animationDelay: `${index * 100}ms`
                  }}
                >
                  {/* Card Glow Effect */}
                  <div className="absolute! -inset-0.5! bg-gradient-to-r! from-primary-500/10! to-blue-500/10! rounded-2xl! blur! opacity-0! group-hover:opacity-100! transition-opacity! duration-500! -z-10!"></div>
                  
                  <ServiceCard 
                    service={service} 
                    index={index}
                  />
                </div>
              ))}
            </div>
          </Motion.div>

        </div>
      </section>
    </AnimatePresence>
  );
};

export default Services;