// import { motion } from "framer-motion";
// import ThemeToggleButton from "../ThemeToggle/ThemeToggle";

// const DesktopHeader = () => {
//   return (
//     <>
//       {/* Desktop Navigation */}
//       <div className="hidden xl:flex items-center gap-10">
//         {navItems.map((item, index) => (
//           <motion.a
//             key={item.name}
//             href={item.href}
//             onClick={(e) => handleNavClick(e, item.href)}
//             className={`relative transition-colors duration-300 font-medium text-lg px-4 py-2 group cursor-pointer ${
//               activeSection === item.id
//                 ? "text-primary-600 dark:text-primary-400"
//                 : "text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
//             }`}
//             whileHover={{ y: -2 }}
//             whileTap={{ scale: 0.95 }}
//             initial={{ opacity: 0, y: -10 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0 }}
//           >
//             {item.name}
//             <span
//               className={`absolute bottom-0.5 left-0 right-0 h-0.5 bg-primary-600 dark:bg-primary-400 transition-transform duration-300 ${
//                 activeSection === item.id
//                   ? "scale-x-100"
//                   : "scale-x-0 group-hover:scale-x-100"
//               }`}
//             ></span>
//           </motion.a>
//         ))}

//         <motion.div
//           initial={{ opacity: 0, scale: 0 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ delay: 0.6 }}
//           className="ml-4 w-12 pr-5"
//         >
//           <ThemeToggleButton />
//         </motion.div>
//       </div>
//     </>
//   );
// };

// export default DesktopHeader;
