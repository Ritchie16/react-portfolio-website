import React from "react";
import { motion as Motion } from "framer-motion";
import ServiceCard from "./ServiceCard";
import { services } from "../../constants/services";

const Services = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section
      id="services"
      className="mb-10! flex flex-col  gap-y-6 bg-gray-50 dark:bg-gray-900 min-h-screen w-full  "
    >
      {/* Section Header */}
      <Motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mt-14!"
      >
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 ">
          My Services
        </h2>
      </Motion.div>

      {/**A container to make some space outside the whole container wrapper so that they dont the margins */}
      <div className="flex  justify-center w-full   ">
        {/* A container for all services*/}
        <Motion.div
          variants={containerVariants}
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-x-6 gap-y-10 md:gap-x-10  lg:gap-x-14 w-full px-4 sm:px-6 "
        >
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </Motion.div>
      </div>
    </section>
  );
};

export default Services;
