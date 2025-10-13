import React from "react";
import { motion } from "framer-motion";
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
    <div className="flex items-center justify-center gap-x-4 h-22">
      {links.map((link, index) => (
        <motion.a
          key={link.label}
          href={link.href}
          aria-label={link.label}
          className="text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300 p-3 hover:bg-white dark:hover:bg-gray-800 rounded-xl hover:shadow-lg"
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 + index * 0.1 }}
        >
          <link.icon size={24} />
        </motion.a>
      ))}
    </div>
  );
};

export default HeroSocialLinks;
