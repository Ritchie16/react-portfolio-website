import React from "react";
import { motion as Motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaWhatsappSquare, FaFacebook } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const HeroSocialLinks = () => {
  // Social media links data with brand colors
  const links = [
    { 
      icon: FaGithub, 
      href: "https://github.com/Ritchie16", 
      label: "GitHub", 
      color: "#333333" // GitHub black
    },
    {
      icon: FaLinkedin,
      href: "https://www.linkedin.com/in/richard-munthali-692880305/",
      label: "LinkedIn",
      color: "#0077B5" // LinkedIn blue
    },
    { 
      icon: FaWhatsappSquare, 
      href: "https://wa.me/265880120328", 
      label: "WhatsApp",
      color: "#25D366" // WhatsApp green
    },
    { 
      icon: FaFacebook, 
      href: "https://www.facebook.com/richard.munthali.779", 
      label: "Facebook",
      color: "#1877F2" // Facebook blue
    },
    {
      icon: MdEmail, 
      href: "mailto:richardmunthali016@gmail.com", 
      label: "Email",
      color: "#EA4335" // Gmail red
    },
  ];

  return (
    <div className="flex items-center justify-center gap-x-6 h-20">
      {links.map((link) => (
        <Motion.a
          key={link.label}
          href={link.href}
          aria-label={link.label}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center justify-center transition-all duration-300 rounded-full"
          whileHover={{ scale: 1.1, y: -3 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {/* Background circle that shows on hover */}
          <Motion.div
            className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"
            style={{ backgroundColor: link.color }}
            initial={false}
          />
          
          {/* Pulsing effect */}
          <Motion.div
            className="absolute inset-0 rounded-full border-2 opacity-0 group-hover:opacity-30"
            style={{ borderColor: link.color }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0, 0.3, 0]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "loop"
            }}
          />
          
          {/* Icon with color transition */}
          <link.icon 
            size={28} 
            className="relative z-10 text-gray-700 dark:text-gray-300 transition-all duration-300 group-hover:scale-110"
            style={{ 
              color: link.color,
              filter: "brightness(0.9) saturate(0.8)"
            }}
          />

          {/* Tooltip */}
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap">
            <div className="px-2! py-1! text-xs font-medium text-white rounded-md shadow-lg"
                 style={{ backgroundColor: link.color }}>
              {link.label}
            </div>
            <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 rotate-45"
                 style={{ backgroundColor: link.color }}></div>
          </div>
        </Motion.a>
      ))}
    </div>
  );
};

export default HeroSocialLinks;