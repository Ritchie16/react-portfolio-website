import React from "react";
import { motion as Motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaWhatsappSquare, FaFacebook } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const HeroSocialLinks = () => {
  // Social media links data
  const links = [
    { icon: FaGithub, href: "https://github.com/Ritchie16", label: "GitHub" },
    {
      icon: FaLinkedin,
      href: "https://www.linkedin.com/in/richard-munthali-692880305/",
      label: "LinkedIn",
    },
    { icon: FaWhatsappSquare, href: "https://wa.me/265880120328", label: "WhatsApp" },
    { icon: FaFacebook, href: "https://www.facebook.com/richard.munthali.779", label: "Facebook" },
    {icon: MdEmail, href: "richardmunthali016@gmail.com", label: "Email" },
  ];

  return (
    <div className="flex items-center justify-center gap-x-4 h-20">
      {links.map((link) => (
        <Motion.a
          key={link.label}
          href={link.href}
          aria-label={link.label}
          className="h-10 w-10 bg-blue-900/80 group-hover:bg-gray-200 dark:bg-blue-900/80 flex items-center justify-center transition-colors duration-300 rounded-full hover:shadow-lg group"
          whileHover={{ scale: 1, y: -2 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
         
           <link.icon size={25} className="text-white/95 dark:text-white/95 group-hover:text-primary-200 dark:group-hover:text-primary-200" />
        
        </Motion.a>
      ))}
    </div>
  );
};

export default HeroSocialLinks;
