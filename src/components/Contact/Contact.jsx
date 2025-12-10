// src/components/Contact/Contact.jsx
import React from 'react';
import { motion as Motion } from 'framer-motion';
import ContactForm from './ContactForm';

const Contact = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="contact" className="min-w-screen w-full relative py-24! px-4! sm:px-6! lg:px-8! overflow-hidden  bg-gradient-to-b from-gray-100 to-gray-200   dark:from-dark-200 dark:to-dark-100">
    
      
      <Motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-7xl mx-auto"
      >
        {/* Section Header */}
        <Motion.div variants={itemVariants} className="text-center mb-10!">
          
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2!">
            Let's <span className="bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent">Connect</span>
          </h2>

          <div className="inline-flex items-center gap-2 px-4! py-2! bg-primary-50 dark:bg-primary-900/20 rounded-full">
            <span className="text-primary-600 dark:text-primary-400 font-medium text-sm">
              Get In Touch
            </span>
          </div>
        </Motion.div>

        {/* Contact Form */}
        <Motion.div variants={itemVariants}>
          <ContactForm />
        </Motion.div>

        {/* Stats/CTA Footer
        <Motion.div
          variants={itemVariants}
          className="mt-20! pt-10! border-t border-gray-200 dark:border-gray-700/50"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-8!">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2!">
                Ready to start your project?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Let's turn your ideas into reality
              </p>
            </div>
            
            <div className="flex items-center gap-6!">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">24h</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Avg. Response</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">100%</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Response Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">∞</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Enthusiasm</div>
              </div>
            </div>
          </div>
        </Motion.div> */}
      </Motion.div>
    </section>
  );
};

export default Contact;