import { LOCATION, CONTACT_METHODS } from '../../constants/location';
import { FaMapMarkerAlt, FaWhatsappSquare, FaClock, FaEnvelope, FaLinkedin } from 'react-icons/fa';

const LocationCard = () => {
  return (
    <div className="bg-white/80 dark:bg-dark-500  rounded-xl! shadow-lg! p-6!">
      <div className="flex! items-center! gap-3! mb-6!">
        <div className="p-2! bg-primary-100! dark:bg-primary-900/30! rounded-lg!">
          <FaMapMarkerAlt className="w-6! h-6! text-primary-600! dark:text-primary-400!" />
        </div>
        <div>
          <h3 className="text-xl! font-bold! text-gray-900! dark:text-white!">
            Location & Availability
          </h3>
          <p className="text-sm! text-gray-600! dark:text-gray-400!">
            Based in {LOCATION.city}, {LOCATION.country} 🇲🇼
          </p>
        </div>
      </div>

      <div className="grid! md:grid-cols-2! gap-6!">
        {/* Primary Location */}
        <div className="space-y-4!">
          <div className="flex! items-center! gap-3!">
            <FaMapMarkerAlt className="w-5! h-5! text-gray-500! dark:text-gray-400!" />
            <div>
              <p className="font-medium! text-gray-900! dark:text-white!">
                {LOCATION.institution}
              </p>
              <p className="text-sm! text-gray-600! dark:text-gray-300!">
                {LOCATION.city}, {LOCATION.country}
              </p>
            </div>
          </div>

          <div className="flex! items-center! gap-3!">
            <FaClock className="w-5! h-5! text-gray-500! dark:text-gray-400!" />
            <div>
              <p className="font-medium! text-gray-900! dark:text-white!">
                Availability
              </p>
              <p className="text-sm! text-primary-600! dark:text-primary-400! font-medium!">
                {LOCATION.availability}
              </p>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="space-y-4!">
          <h4 className="font-semibold! text-gray-900! dark:text-white!">
            Preferred Contact Methods
          </h4>
          
          <div className="space-y-3!">
            <a 
              href={`mailto:${CONTACT_METHODS.email}`}
              className="flex! items-center! gap-3! p-3! rounded-lg! bg-gray-100! dark:bg-gray-800! hover:bg-gray-200! dark:hover:bg-gray-700! transition-colors!"
            >
              <FaEnvelope className="w-5! h-5! text-gray-500! dark:text-gray-400!" />
              <span className="text-gray-700! dark:text-gray-300!">
                {CONTACT_METHODS.email}
              </span>
            </a>

            <a 
              href={CONTACT_METHODS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex! items-center! gap-3! p-3! rounded-lg! bg-blue-50! dark:bg-blue-900/20! hover:bg-blue-100! dark:hover:bg-blue-900/30! transition-colors!"
            >
              <FaLinkedin className="w-5! h-5! text-blue-600! dark:text-blue-400!" />
              <span className="text-gray-700! dark:text-gray-300!">
                LinkedIn Profile
              </span>
            </a>

            <a 
              href={`https://wa.me/${CONTACT_METHODS.phone}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex! items-center! gap-3! p-3! rounded-lg! bg-primary-50! dark:bg-primary-900/20! hover:bg-primary-100! dark:hover:bg-primary-900/30! transition-colors!"
            >
              <FaWhatsappSquare className="w-5! h-5! text-[#25D366]! dark:text-primary-500!" />
              <span className="text-gray-700! dark:text-gray-300!">
                WhatsApp number
              </span>
            </a>

            {CONTACT_METHODS.github && (
              <a 
                href={CONTACT_METHODS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex! items-center! gap-3! p-3! rounded-lg! bg-gray-100! dark:bg-gray-800! hover:bg-gray-200! dark:hover:bg-gray-700! transition-colors!"
              >
                <svg className="w-5! h-5! text-gray-900! dark:text-gray-300!" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <span className="text-gray-700! dark:text-gray-300!">
                  GitHub Profile
                </span>
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Future Growth Note */}
      <div className="mt-6! pt-6! border-t! border-gray-200! dark:border-gray-700!">
        <p className="text-sm! text-gray-500! dark:text-gray-400!">
          Open to relocation opportunities and international collaborations upon graduation in 2027.
        </p>
      </div>
    </div>
  );
};

export default LocationCard;