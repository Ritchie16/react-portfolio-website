import { CERTIFICATIONS } from '../../constants/certifications';

const CertificationsCard = () => {
  const formatDate = (dateString) => {
  if (!dateString || dateString === "In Progress") return dateString;
  
  try {
    // Try to parse as Date
    const date = new Date(dateString);
    
    // If it's a valid date, format it nicely
    if (!isNaN(date.getTime())) {
      return date.toLocaleDateString(undefined, { year: 'numeric', month: 'long' });
    }
    
    // If not a standard date, just return the original string
    return dateString;
    
  } catch (error) {
    console.log(error);

    // If parsing fails, return original
    return dateString;
    
  }
};

  return (
    <div className="bg-white/80 dark:bg-dark-500 rounded-xl! shadow-lg! p-6! transition-all! duration-300! hover:shadow-xl!">
      <div className="flex! items-center! gap-3! mb-6!">
        <div className="p-2! bg-primary-100! dark:bg-primary-900/30! rounded-lg!">
          <svg className="w-6! h-6! text-primary-600! dark:text-primary-400!" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h3 className="text-xl! font-bold! text-gray-900! dark:text-gray-100!">
          Certifications & Achievements
        </h3>
      </div>

      <div className="space-y-6!">
        {CERTIFICATIONS.map((cert) => (
          <div 
            key={cert.id}
            className={`pb-6! ${!cert.date.includes('Progress') ? 'border-b! border-gray-200! dark:border-gray-700!' : ''}`}
          >
            <div className="flex! justify-between! items-start! mb-2!">
              <h4 className="font-semibold! text-gray-900! dark:text-gray-200!">
                {cert.name}
              </h4>
              <span className={`px-2! py-1! text-xs! rounded-full! ${
                cert.date.includes('Progress') 
                  ? 'bg-yellow-100! text-yellow-800! dark:bg-yellow-900/30! dark:text-yellow-300!'
                  : 'bg-green-100! text-green-800! dark:bg-green-900/30! dark:text-green-300!'
              }`}>
                {cert.date.includes('Progress') ? 'In Progress' : 'Completed'}
              </span>
            </div>

            <p className="text-gray-600! dark:text-gray-300! mb-3!">
              {cert.issuer} • {cert.date}
            </p>

            {cert.description && (
              <p className="text-sm! text-gray-500! dark:text-gray-400! mb-3!">
                {cert.description}
              </p>
            )}

            {cert.skills && cert.skills.length > 0 && (
              <div className="flex! flex-wrap! gap-2! mt-3!">
                {cert.skills.map((skill, index) => (
                  <span 
                    key={index}
                    className="px-2! py-1! text-xs! bg-gray-100! dark:bg-gray-700! text-gray-700! dark:text-gray-300! rounded!"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            )}

            
          </div>
        ))}
      </div>

      {/* Add future-oriented note */}
      {/* <div className="mt-6! pt-6! border-t! border-gray-200! dark:border-gray-700!">
        <p className="text-sm! text-gray-500! dark:text-gray-400! italic!">
          Actively pursuing additional certifications in software engineering and cloud technologies.
        </p>
      </div> */}
    </div>
  );
};

export default CertificationsCard;