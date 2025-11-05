import { motion as Motion } from "framer-motion";

import { GrCertificate } from "react-icons/gr";

const AboutCertification = () => {
  const certificate = [
    {
      name: "Hackthon Challenge <CODE 4 IMPACT /> ",
      issuer: "MZUNI, UNILIA, UNDP",
      year: "1st-4 Sepetember 2025",
    },
  ];

  return (
    <div className="h-40 md:h-50 w-[90%] md:w-full   flex flex-col  items-center justify-start  bg-gray-100 dark:bg-gray-800  rounded-xl shadow-md hover:shadow-lg hover:scale-102 transition-transform duration-300">
      {/* Certificate Icon at the bottom */}
      <div className="w-full h-6 text-md lg:text-lg xl:text-xl  flex items-center  justify-center gap-2 font-bold text-primary-600 dark:text-white">
        <GrCertificate />
        Certificates
      </div>

      {/* Certificate entries */}
      <div className="flex flex-col items-center gap-y-2  w-full  ">
        {certificate.map((cert, index) => (
          <Motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            className=" w-[90%]  rounded-xl  transition-all duration-300"
          >
            <h4 className="text-md md:text-xl font-semibold text-gray-900 dark:text-white">
              {cert.name}
            </h4>
            <p className="text-gray-600 dark:text-gray-300">
              {cert.issuer || ""}
            </p>
            <p className="text-gray-500 dark:text-gray-400 mt-1">
              Year: {cert.year}
            </p>
          </Motion.div>
        ))}
      </div>
    </div>
  );
};

export default AboutCertification;
