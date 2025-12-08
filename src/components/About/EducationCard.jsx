import { EDUCATION, SECONDARY_EDUCATION, EDUCATION_LEVELS } from '../../constants/education';

const EducationCard = () => {
  const calculateProgress = () => {
    const levels = Object.keys(EDUCATION_LEVELS);
    const currentIndex = levels.findIndex(l => EDUCATION_LEVELS[l] === EDUCATION.level);
    return ((currentIndex + 1) / levels.length) * 100;
  };

  return (
    <div className="bg-white/80 dark:bg-dark-500  rounded-xl! shadow-lg! p-6! transition-all! duration-300! hover:shadow-xl!">
      <div className="flex! items-center! justify-between! mb-6!">
        <h3 className="text-xl! font-bold! text-gray-900! dark:text-white!">
          Academic Journey
        </h3>
        <span className="px-3! py-1! text-sm! font-medium! bg-primary-100! text-primary-700! dark:bg-primary-900/30! dark:text-primary-300! rounded-full!">
          {EDUCATION.level}
        </span>
      </div>

      {/* Progress Indicator */}
      <div className="mb-6!">
        <div className="flex! justify-between! text-sm! text-gray-600! dark:text-gray-400! mb-2!">
          <span>Progress</span>
          <span>{calculateProgress().toFixed(0)}%</span>
        </div>
        <div className="h-2! bg-gray-200! dark:bg-gray-700! rounded-full! overflow-hidden!">
          <div 
            className="h-full! bg-gradient-to-r! from-primary-500! to-primary-700! rounded-full! transition-all! duration-500!"
            style={{ width: `${calculateProgress()}%` }}
          />
        </div>
      </div>

      {/* Tertiary Education */}
      <div className="space-y-4!">
        <div className="pb-4! border-b! border-gray-200! dark:border-gray-700!">
          <h4 className="font-semibold! text-gray-900! dark:text-white! mb-1!">
            {EDUCATION.degree}
          </h4>
          <p className="text-gray-600! dark:text-gray-300!">
            {EDUCATION.institution} • {EDUCATION.years}
          </p>
          <div className="mt-2!">
            <span className="text-sm! text-gray-500! dark:text-gray-400!">
              Expected Graduation: {EDUCATION.expectedGraduation}
            </span>
          </div>


          {/* Relevant Coursework (Optional Expandable) */}
      <details className="mt-6!">
        <summary className="cursor-pointer! text-gray-700! dark:text-gray-300! hover:text-primary-600! dark:hover:text-primary-400! font-medium!">
          Relevant Coursework
        </summary>
        <div className="mt-3! flex! flex-wrap! gap-2!">
          {EDUCATION.relevantCoursework.map((course, index) => (
            <span 
              key={index}
              className="px-3! py-1! text-sm! bg-gray-100! dark:bg-gray-700! text-gray-700! dark:text-gray-300! rounded-full!"
            >
              {course}
            </span>
          ))}
        </div>
      </details>
        </div>

        

        {/* Secondary Education */}
        <div>
          <h4 className="font-semibold! text-gray-900! dark:text-white! mb-1!">
            {SECONDARY_EDUCATION.certificate}
          </h4>
          <p className="text-gray-600! dark:text-gray-300!">
            {SECONDARY_EDUCATION.institution} • {SECONDARY_EDUCATION.years}
          </p>
          {SECONDARY_EDUCATION.achievement && (
            <p className="mt-2! text-sm! text-primary-600! dark:text-primary-400!">
              {SECONDARY_EDUCATION.achievement}
            </p>
          )}
        </div>
      </div>

      
    </div>
  );
};

export default EducationCard;