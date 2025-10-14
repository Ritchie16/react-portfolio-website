import AboutEducation from "./AboutEducation";
import { motion } from "framer-motion";
import AboutCertification from "./AboutCertifications";

const CombineEduCert = () => {
  return (
    <div >
<div className="flex flex-col md:flex-row items-center md:items-start justify-center  md:justify-between  gap-y-3 md:gap-x-5   w-full">
      <AboutEducation />
      <AboutCertification />
    </div>
    </div>

    
  );
};

export default CombineEduCert;
