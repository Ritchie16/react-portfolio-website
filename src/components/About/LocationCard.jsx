import { LOCATION, CONTACT_METHODS } from '../../constants/location';
import { FaMapMarkerAlt, FaWhatsappSquare, FaClock, FaEnvelope, FaLinkedin } from 'react-icons/fa';

const LocationCard = () => {
  return (
    <div className="bg-white/90! dark:bg-gray-800/90!  rounded-xl! shadow-xl! p-6! transition-all! duration-300! hover:shadow-2xl! border! border-gray-100/50! dark:border-gray-700/50!">
      <div className="flex! items-center! gap-3! mb-6!">
        <div className="p-2! bg-gradient-to-br! from-primary-500/10! to-blue-500/10! dark:from-primary-900/20! dark:to-blue-900/20! rounded-lg!">
          <FaMapMarkerAlt className="w-6! h-6! text-primary-600! dark:text-primary-400!" />
        </div>
        <div>
          <h3 className="text-xl! font-bold! text-gray-900! dark:text-gray-200! tracking-tight!">
            Location & Availability
          </h3>
          <p className="text-sm! text-gray-600! dark:text-gray-400! mt-1!">
            Based in {LOCATION.city}, {LOCATION.country} 🇲🇼
          </p>
        </div>
      </div>

      <div className="grid! md:grid-cols-2! gap-6!">
        {/* Primary Location */}
        <div className="space-y-4!">
          <div className="flex! items-center! gap-3! p-3! rounded-lg! bg-gray-50/50! dark:bg-gray-700/30! border! border-gray-100! dark:border-gray-600/30!">
            <FaMapMarkerAlt className="w-5! h-5! text-primary-600! dark:text-primary-400! flex-shrink-0!" />
            <div>
              <p className="font-semibold! text-gray-900! dark:text-gray-200! text-sm!">
                {LOCATION.institution}
              </p>
              <p className="text-sm! text-gray-600! dark:text-gray-400! mt-0.5!">
                {LOCATION.city}, {LOCATION.country}
              </p>
            </div>
          </div>

          <div className="flex! items-center! gap-3! p-3! rounded-lg! bg-gradient-to-r! from-primary-50/50! to-blue-50/50! dark:from-primary-900/10! dark:to-blue-900/10! border! border-primary-100/30! dark:border-primary-900/30!">
            <FaClock className="w-5! h-5! text-primary-600! dark:text-primary-400! flex-shrink-0!" />
            <div>
              <p className="font-semibold! text-gray-900! dark:text-gray-200! text-sm!">
                Availability
              </p>
              <p className="text-sm! text-primary-600! dark:text-primary-400! font-medium! mt-0.5!">
                {LOCATION.availability}
              </p>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="space-y-4!">
          <h4 className="font-semibold! text-gray-900! dark:text-gray-200! text-sm! tracking-wide!">
            Preferred Contact Methods
          </h4>
          
          <div className="space-y-3!">
            <a 
              href={`mailto:${CONTACT_METHODS.email}`}
              className="flex! items-center! gap-3! p-3! rounded-lg! bg-gradient-to-r! from-gray-50! to-gray-100/50! dark:from-gray-700/50! dark:to-gray-800/50! hover:from-gray-100! hover:to-gray-200/50! dark:hover:from-gray-600! dark:hover:to-gray-700/50! transition-all! duration-200! border! border-gray-100! dark:border-gray-600/30! group!"
            >
              <div className="p-2! bg-white! dark:bg-gray-800! rounded-md! group-hover:scale-110! transition-transform! duration-200!">
                <FaEnvelope className="w-4! h-4! text-gray-600! dark:text-gray-300!" />
              </div>
              <span className="text-gray-700! dark:text-gray-300! text-sm! font-medium! truncate!">
                {CONTACT_METHODS.email}
              </span>
            </a>

            <a 
              href={CONTACT_METHODS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex! items-center! gap-3! p-3! rounded-lg! bg-gradient-to-r! from-blue-50! to-blue-100/30! dark:from-blue-900/10! dark:to-blue-900/5! hover:from-blue-100! hover:to-blue-200/30! dark:hover:from-blue-800/20! dark:hover:to-blue-900/10! transition-all! duration-200! border! border-blue-100! dark:border-blue-900/30! group!"
            >
              <div className="p-2! bg-white! dark:bg-gray-800! rounded-md! group-hover:scale-110! transition-transform! duration-200!">
                <FaLinkedin className="w-4! h-4! text-blue-600! dark:text-blue-400!" />
              </div>
              <span className="text-gray-700! dark:text-gray-300! text-sm! font-medium!">
                LinkedIn Profile
              </span>
            </a>

            <a 
              href={`https://wa.me/${CONTACT_METHODS.phone}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex! items-center! gap-3! p-3! rounded-lg! bg-gradient-to-r! from-green-50! to-green-100/30! dark:from-green-900/10! dark:to-green-900/5! hover:from-green-100! hover:to-green-200/30! dark:hover:from-green-800/20! dark:hover:to-green-900/10! transition-all! duration-200! border! border-green-100! dark:border-green-900/30! group!"
            >
              <div className="p-2! bg-white! dark:bg-gray-800! rounded-md! group-hover:scale-110! transition-transform! duration-200!">
                <FaWhatsappSquare className="w-4! h-4! text-[#25D366]! dark:text-green-400!" />
              </div>
              <span className="text-gray-700! dark:text-gray-300! text-sm! font-medium!">
                WhatsApp number
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Future Growth Note */}
      {/* <div className="mt-6! pt-6! border-t! border-gray-200/50! dark:border-gray-700/50!">
        <p className="text-sm! text-gray-600! dark:text-gray-400! italic!">
          Open to relocation opportunities and international collaborations upon graduation in 2027.
        </p>
      </div> */}
    </div>
  );
};

export default LocationCard;