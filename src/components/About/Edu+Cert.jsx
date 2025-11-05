import AboutEducation from "./AboutEducation";
import { motion as Motion } from "framer-motion";
import AboutCertification from "./AboutCertifications";

const CombineEduCert = () => {
  return (
    <div className="w-full flex justify-center">
<div className="flex flex-col md:flex-row items-center md:items-start justify-center  md:justify-between  gap-y-5 md:gap-x-3  w-full md:w-[98%] ">
      <AboutEducation />
      <AboutCertification />
    </div>
    </div>

    
  );
};

export default CombineEduCert;
