// src/utils/emailService.js
const GOOGLE_SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL;

export const sendEmail = async (formData) => {
  return new Promise((resolve) => {
    console.log('Sending email via Google Script JSONP...', formData);
    
    const scriptId = 'google-script-jsonp-' + Date.now();
    const callbackName = 'googleScriptCallback_' + Date.now();
    
    // Clean up any old script
    const oldScript = document.getElementById(scriptId);
    if (oldScript) {
      document.body.removeChild(oldScript);
    }
    
    // Define the callback function
    window[callbackName] = (response) => {
      console.log('Google Script JSONP response:', response);
      
      // Clean up
      delete window[callbackName];
      const script = document.getElementById(scriptId);
      if (script && script.parentNode) {
        script.parentNode.removeChild(script);
      }
      
      if (response && response.success) {
        resolve({
          success: true,
          message: '✨ Email sent successfully! I\'ll respond within 24 hours.',
          data: response
        });
      } else {
        resolve({
          success: false,
          message: 'Failed to send via Google Script',
          error: response?.error
        });
      }
    };
    
    // Build URL with parameters
    const params = new URLSearchParams({
      callback: callbackName,
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
      timestamp: Date.now().toString(),
      format: 'jsonp'
    });
    
    const url = `${GOOGLE_SCRIPT_URL}?${params.toString()}`;
    
    // Create and append script tag
    const script = document.createElement('script');
    script.id = scriptId;
    script.src = url;
    
    script.onerror = () => {
      console.error('Google Script JSONP failed');
      // Clean up
      delete window[callbackName];
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
      
      // Fallback to Formspree
      sendViaFormspree(formData).then(resolve);
    };
    
    document.body.appendChild(script);
    
    // Timeout after 10 seconds
    setTimeout(() => {
      if (window[callbackName]) {
        console.log('Google Script JSONP timeout');
        delete window[callbackName];
        const timeoutScript = document.getElementById(scriptId);
        if (timeoutScript && timeoutScript.parentNode) {
          timeoutScript.parentNode.removeChild(timeoutScript);
        }
        
        // Fallback to Formspree
        sendViaFormspree(formData).then(resolve);
      }
    }, 10000);
  });
};

// Formspree fallback
const sendViaFormspree = async (formData) => {
  try {
    console.log('Trying Formspree fallback...');
    const response = await fetch('https://formspree.io/f/mzzbjqkb', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
        _replyto: formData.email,
        _subject: `Portfolio Contact: ${formData.subject}`,
        _format: 'json'
      }),
    });

    const data = await response.json();
    
    if (response.ok && !data.errors) {
      return {
        success: true,
        message: '✨ Message sent via Formspree! I\'ll respond within 24 hours.',
        service: 'formspree'
      };
    }
    
    throw new Error(data.error || 'Formspree error');
    
  } catch (error) {
    console.error('Formspree error:', error);
    
    // Create mailto fallback
    const mailtoBody = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMessage:%0D%0A${formData.message.replace(/\n/g, '%0D%0A')}`;
    const mailtoLink = `mailto:richardmunthali016@gmail.com?subject=${encodeURIComponent(`Portfolio Contact: ${formData.subject}`)}&body=${mailtoBody}`;
    
    return {
      success: false,
      message: `❌ All methods failed. Please <a href="${mailtoLink}" class="text-primary-600 dark:text-primary-400 underline">click here to email me directly</a>.`,
      mailtoLink: mailtoLink
    };
  }
};

// Email validation
export const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

// Form validation
export const validateFormData = (formData) => {
  const errors = {};
  
  if (!formData.name?.trim()) {
    errors.name = 'Name is required';
  } else if (formData.name.length < 2) {
    errors.name = 'Name must be at least 2 characters';
  }

  if (!formData.email?.trim()) {
    errors.email = 'Email is required';
  } else if (!validateEmail(formData.email)) {
    errors.email = 'Please enter a valid email address';
  }

  if (!formData.subject?.trim()) {
    errors.subject = 'Subject is required';
  } else if (formData.subject.length < 3) {
    errors.subject = 'Subject must be at least 3 characters';
  }

  if (!formData.message?.trim()) {
    errors.message = 'Message is required';
  } else if (formData.message.length < 10) {
    errors.message = 'Message must be at least 10 characters';
  }

  return errors;
};