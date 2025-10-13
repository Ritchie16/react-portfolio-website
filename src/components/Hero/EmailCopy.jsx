import { useState } from "react";
import { motion } from "framer-motion";
import { FiCopy, FiCheck } from "react-icons/fi";

const EmailCopy = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    //navigator is a web API that provides access to the clipboard
    navigator.clipboard.writeText("richardmunthali016@gmail.com");
    setCopied(true);

    //reset copied state after 2 seconds
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col items-center gap-4 mt-4">
      <button
        onClick={copyEmail}
        className="flex items-center gap-2 text-gray-600 dark:text-gray-300 font-medium hover:text-primary-600 dark:hover:text-primary-400"
      >
        {copied ? (
          <>
            <FiCheck className="text-green-500" /> Copied!
          </>
        ) : (
          <>
            <FiCopy /> richardmunthali016@gmail.com
          </>
        )}
      </button>
    </div>
  );
};

export default EmailCopy;
