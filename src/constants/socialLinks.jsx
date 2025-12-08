// src/constants/socialLinks.jsx

import { FaGithub, FaLinkedin, FaWhatsappSquare, FaFacebook } from "react-icons/fa";
import { MdEmail } from "react-icons/md";



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


  export default links;