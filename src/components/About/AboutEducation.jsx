import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";

const AboutEducation = () => {
  const education = [
    {
      degree: "Bachelor of Science in Infomation and Communication Technology",
      institution: "Mzuzu University",
      year: "2023 - 2027 (Expected)",
    },
    {
      certificate: "Malawi School Certificate of Education (MSCE)",
      institution: "Emfeni CDSS",
      year: "2018 - 2022",
    },
  ];

  return (
    <>
      <div className="h-56 md:h-100 w-[80%] md:w-full flex flex-col items-start   bg-gray-100 dark:bg-gray-800  rounded-xl shadow-md hover:shadow-lg hover:scale-102 transition-transform duration-300">
        {/*Education and wisdom Heart */}
        <h4 className="w-full h-8 md:h-14 text-md lg:text-lg xl:text-xl flex items-center  justify-center gap-2 font-bold text-primary-600 dark:text-white">
          <span>
            {" "}
            <FaGraduationCap />{" "}
          </span>{" "}
          Education
        </h4>

        {/*Education entiries of what am doing/i did and school/year attended */}
        <div className="flex flex-col items-center gap-y-2 md:gap-y-5 h-full w-full    ">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className=" w-[90%]  rounded-xl  transition-all duration-300"
            >
              <h4 className="text-md md:text-xl font-semibold text-gray-900 dark:text-white">
                {edu.degree || edu.certificate}
              </h4>
              <p className="text-gray-600 dark:text-gray-300">
                {edu.institution || ""}
              </p>
              <p className="text-gray-500 dark:text-gray-400 mt-1">
                Year: {edu.year}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AboutEducation;
