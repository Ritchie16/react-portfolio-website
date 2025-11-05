import React from "react";
import { motion as Motion } from "framer-motion";

const ServiceCard = ({ service, index }) => {
  return (
    /** Centering each service card **/
      <Motion.div
        initial={{ opacity: 0.8 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        viewport={{ once: true }}
        className="flex flex-col gap-y-0 h-120 lg:h-100 max-w-xs lg:max-w-md bg-white/70 dark:bg-gray-800 rounded-xl  shadow-lg hover:shadow-xl transition-transform duration-300 border border-gray-100 dark:border-gray-700 hover:scale-102"
      >
        {/** Service Title  **/}
        <h3 className="text-center flex justify-center items-center text-xl font-bold text-gray-900 dark:text-white h-14 ">
          {service.title}
        </h3>

        {/** Service Description **/}
        <p className="w-[90%] relative left-4 right-2 text-justify  text-gray-600 dark:text-gray-300 leading-relaxed  ">
          {service.description}
        </p>

        {service.features && (
          <div className=" w-[90%] relative top-3 left-4 right-2">
            <h4 className="font-semibold text-gray-900 dark:text-white ">
              Key Features:
            </h4>
            <ul className="grid grid-cols-1 gap-2">
              {service.features.map((feature, idx) => (
                <li
                  key={idx}
                  className="flex gap-x-3 items-center text-sm text-gray-600 dark:text-gray-300"
                >
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        )}
      </Motion.div>
  );
};

export default ServiceCard;
