// src/components/Contact/ContactForm.jsx
import React, { useState, useEffect } from 'react';
import { motion as Motion } from 'framer-motion';
import { FiSend, FiCheck, FiUser, FiMail, FiMessageSquare, FiAlertCircle, FiClock } from 'react-icons/fi';
import { FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';
import { sendEmail, validateFormData } from '../../utils/emailService';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ 
    success: null, 
    message: '',
    type: '' 
  });
  const [errors, setErrors] = useState({});
  const [charCount, setCharCount] = useState(0);

  useEffect(() => {
    setCharCount(formData.message.length);
  }, [formData.message]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form
    const validationErrors = validateFormData(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      
      // Focus on first error field
      const firstError = Object.keys(validationErrors)[0];
      document.querySelector(`[name="${firstError}"]`)?.focus();
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    try {
      const result = await sendEmail(formData);
      
      if (result.success) {
        setSubmitStatus({
          success: true,
          message: '✨ Your message has been sent successfully! I\'ll respond within 24 hours.',
          type: 'success'
        });
        
        // Reset form
        setFormData({ name: '', email: '', subject: '', message: '' });
        setCharCount(0);
        
        // Auto-hide success message after 8 seconds
        setTimeout(() => {
          setSubmitStatus({ success: null, message: '', type: '' });
        }, 8000);
      } else {
        setSubmitStatus({
          success: false,
          message: '❌ Failed to send message. Please try again or contact me directly.',
          type: 'error'
        });
      }
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: '❌ An unexpected error occurred. Please try again later.',
        type: 'error'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    {
      icon: <FiMail className="w-5 h-5" />,
      label: "Email Directly",
      value: "richardmunthali016@gmail.com",
      href: "mailto:richardmunthali016@gmail.com",
      color: "bg-primary-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-50/10",
      action: "copy"
    },
    {
      icon: <FaLinkedin className="w-5 h-5" />,
      label: "LinkedIn",
      value: "Richard Munthali",
      href: "https://linkedin.com/in/richard-munthali-692880305",
      color: "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-900/30",
      action: "link"
    },
    {
      icon: <FaWhatsapp className="w-5 h-5" />,
      label: "WhatsApp",
      value: "+265 880 120 328",
      href: "https://wa.me/265880120328",
      color: "bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 hover:bg-green-100 dark:hover:bg-green-900/30",
      action: "link"
    },
    {
      icon: <FaGithub className="w-5 h-5" />,
      label: "GitHub",
      value: "Ritchie16",
      href: "https://github.com/Ritchie16",
      color: "bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700",
      action: "link"
    }
  ];

  const inputVariants = {
    focus: { scale: 1.01 },
    blur: { scale: 1 }
  };

  return (
    <div className="max-w-6xl mx-auto px-4! sm:px-6! lg:px-8!">
      <div className="grid lg:grid-cols-2 gap-12! lg:gap-16!">
        {/* Left Column: Contact Information */}
        <Motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8!"
        >
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4!">
              Let's Build Something <span className="text-primary-600 dark:text-primary-400">Amazing</span> Together
            </h2>
            
            
            <div className="p-6! bg-gradient-to-br from-primary-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 rounded-xl border border-primary-100 dark:border-primary-900/30">
              <div className="flex items-center gap-3 mb-4!">
                <FiClock className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  Response Time
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                I typically respond within <span className="font-semibold text-primary-600 dark:text-primary-400">24 hours</span> during weekdays. 
                For urgent matters, consider reaching out via WhatsApp.
              </p>
            </div>
          </div>

          {/* Contact Methods */}
          <div className="space-y-2!">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4!">
              Alternative Contact Methods
            </h3>
            
            {contactMethods.map((method, index) => (
              <Motion.a
                key={index}
                href={method.href}
                target={method.action === "link" ? "_blank" : "_self"}
                rel="noopener noreferrer"
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.98 }}
                className={`flex items-center justify-between px-5! py-2! mb-2! rounded-xl transition-all duration-300 ${method.color} border border-transparent hover:border-current/20`}
              >
                <div className="flex items-center gap-4!">
                  <div className="p-0! rounded-lg bg-white/50 dark:bg-gray-800/50">
                    {method.icon}
                  </div>
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white">
                      {method.label}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {method.value}
                    </div>
                  </div>
                </div>
                
                  <span className="text-sm opacity-60">↗</span>
              
              </Motion.a>
            ))}
          </div>

          {/* Location Info */}
          <div className="p-4! bg-gray-50 dark:bg-gray-800 rounded-xl">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-3!">
              📍 Based in Malawi
            </h4>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Currently studying ICT at Mzuzu University. Open to remote opportunities 
              and international collaborations.
            </p>
          </div>
        </Motion.div>

        {/* Right Column: Contact Form */}
        <Motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          {/* Form Card */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8! md:p-10! border border-gray-100 dark:border-gray-700/50">
            {/* Success/Error Message */}
            {submitStatus.success !== null && (
              <Motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`mb-6! p-4! rounded-xl ${
                  submitStatus.type === 'success' 
                    ? 'bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800/30' 
                    : 'bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800/30'
                }`}
              >
                <div className="flex items-start gap-3!">
                  {submitStatus.type === 'success' ? (
                    <FiCheck className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5" />
                  ) : (
                    <FiAlertCircle className="w-5 h-5 text-red-600 dark:text-red-400 mt-0.5" />
                  )}
                  <p className={`text-sm ${
                    submitStatus.type === 'success' 
                      ? 'text-green-700 dark:text-green-400' 
                      : 'text-red-700 dark:text-red-400'
                  }`}>
                    {submitStatus.message}
                  </p>
                </div>
              </Motion.div>
            )}

            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2!">
              Send me a message
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-8!">
              Fill out the form below and I'll get back to you as soon as possible.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6!">
              {/* Name Field */}
              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-2!">
                  <FiUser className="w-4 h-4" />
                  Your Name
                </label>
                <Motion.input
                  whileFocus="focus"
                  whileHover={{ scale: 1.01 }}
                  variants={inputVariants}
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className={`w-full px-4! py-2! rounded-xl border ${
                    errors.name 
                      ? 'border-red-300 dark:border-red-700 bg-red-50/50 dark:bg-red-900/10' 
                      : 'border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700/50'
                  } focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 focus:border-transparent transition-all duration-300 text-gray-900 dark:text-white`}
                  disabled={isSubmitting}
                />
                {errors.name && (
                  <p className="mt-2! text-sm text-red-600 dark:text-red-400 flex items-center gap-1">
                    <FiAlertCircle className="w-4 h-4" /> {errors.name}
                  </p>
                )}
              </div>

              {/* Email Field */}
              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-2!">
                  <FiMail className="w-4 h-4" />
                  Email Address
                </label>
                <Motion.input
                  whileFocus="focus"
                  whileHover={{ scale: 1.01 }}
                  variants={inputVariants}
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className={`w-full px-4! py-2! rounded-xl border ${
                    errors.email 
                      ? 'border-red-300 dark:border-red-700 bg-red-50/50 dark:bg-red-900/10' 
                      : 'border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700/50'
                  } focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 focus:border-transparent transition-all duration-300 text-gray-900 dark:text-white`}
                  disabled={isSubmitting}
                />
                {errors.email && (
                  <p className="mt-2! text-sm text-red-600 dark:text-red-400 flex items-center gap-1">
                    <FiAlertCircle className="w-4 h-4" /> {errors.email}
                  </p>
                )}
              </div>

              {/* Subject Field */}
              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-2!">
                  <FiMessageSquare className="w-4 h-4" />
                  Subject
                </label>
                <Motion.input
                  whileFocus="focus"
                  whileHover={{ scale: 1.01 }}
                  variants={inputVariants}
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project Inquiry / Collaboration"
                  className={`w-full px-4! py-2! rounded-xl border ${
                    errors.subject 
                      ? 'border-red-300 dark:border-red-700 bg-red-50/50 dark:bg-red-900/10' 
                      : 'border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700/50'
                  } focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 focus:border-transparent transition-all duration-300 text-gray-900 dark:text-white`}
                  disabled={isSubmitting}
                />
                {errors.subject && (
                  <p className="mt-2! text-sm text-red-600 dark:text-red-400 flex items-center gap-1">
                    <FiAlertCircle className="w-4 h-4" /> {errors.subject}
                  </p>
                )}
              </div>

              {/* Message Field */}
              <div>
                <div className="flex justify-between items-center mb-2!">
                  <label className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                    <FiMessageSquare className="w-4 h-4" />
                    Message
                  </label>
                  <span className={`text-xs ${
                    charCount < 10 
                      ? ' text-gray-700 dark:text-white' 
                      : charCount > 500 
                        ? 'text-yellow-500' 
                        : 'text-gray-500 dark:text-gray-400'
                  }`}>
                    {charCount}/500
                  </span>
                </div>
                <Motion.textarea
                  whileFocus="focus"
                  whileHover={{ scale: 1.01 }}
                  variants={inputVariants}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Tell me about your project, timeline, and what you're looking to achieve..."
                  className={`w-full px-4! py-3! rounded-xl border resize-none ${
                    errors.message 
                      ? 'border-red-300 dark:border-red-700 bg-red-50/50 dark:bg-red-900/10' 
                      : 'border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700/50'
                  } focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 focus:border-transparent transition-all duration-300 text-gray-900 dark:text-white`}
                  disabled={isSubmitting}
                />
                {errors.message && (
                  <p className="mt-2! text-sm text-red-600 dark:text-red-400 flex items-center gap-1">
                    <FiAlertCircle className="w-4 h-4" /> {errors.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <Motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-3! px-6! rounded-xl font-semibold text-white transition-all duration-300 flex items-center justify-center gap-3 ${
                  isSubmitting
                    ? 'bg-gray-400 dark:bg-gray-600 cursor-not-allowed'
                    : 'bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-700 hover:to-primary-600 shadow-lg hover:shadow-xl'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <FiSend className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </Motion.button>

              {/* Privacy Note */}
              <p className="text-xs text-gray-500 dark:text-gray-400 text-center mt-4!">
                Your information is secure and will only be used to respond to your inquiry.
                I never share personal data with third parties.
              </p>
            </form>
          </div>
        </Motion.div>
      </div>
    </div>
  );
};

export default ContactForm;