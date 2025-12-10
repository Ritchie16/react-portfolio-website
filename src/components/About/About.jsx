import EducationCard from './EducationCard';
import CertificationsCard from './CertificationsCard';
import LocationCard from './LocationCard';
import { motion as Motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="min-h-screen! min-w-screen! w-full! py-20! overflow-hidden bg-gradient-to-b from-gray-100 to-gray-200   dark:from-dark-200 dark:to-dark-100">
      <div className="max-w-7xl! mx-auto! px-4! sm:px-6! lg:px-8!">
        {/* Section Header */}
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center! mb-16!"
        >
          <h2 className="text-3xl! md:text-4xl! font-bold! text-gray-900! dark:text-gray-200! mb-4!">
            Academic & Professional Profile
          </h2>
          <div className="w-32! h-1! bg-gradient-to-r! from-primary-500! to-primary-700! mx-auto! rounded-full!" />
          <p className="mt-6! text-lg! text-gray-600! dark:text-gray-400! max-w-3xl! mx-auto!">
            Currently pursuing a Bachelor's in ICT at Mzuzu University while actively engaging in 
            professional development through certifications and practical projects.
          </p>
        </Motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8!">
          {/* Education & Certifications */}
          <div className="space-y-8!">
            <Motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
            >
              <EducationCard />
            </Motion.div>

            <Motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              <CertificationsCard />
            </Motion.div>
          </div>

          {/* Location & Additional Info */}
          <Motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="lg:sticky! lg:top-24! h-fit!"
          >
            <LocationCard />
          </Motion.div>
        </div>


      </div>
    </section>
  );
};

export default About;