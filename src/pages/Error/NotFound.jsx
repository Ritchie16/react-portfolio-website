// src/components/Error/NotFound.jsx
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  const handleGoBack = () => window.history.back();
  const handleGoHome = () => navigate('/');
  const handleNavigateToSection = (section) => navigate(`/#${section}`);

  const quickLinks = [
    { id: 'about', label: 'About', color: 'bg-emerald-50 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300' },
    { id: 'projects', label: 'Projects', color: 'bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300' },
    { id: 'contact', label: 'Contact', color: 'bg-emerald-50 dark:bg-emerald-800/40 text-emerald-700 dark:text-emerald-300' },
  ];

  return (
    <div className="min-h-screen! bg-white/80! dark:bg-gray-900! flex! items-center! justify-center! p-6!">
      <div className="max-w-md! w-full!">
        {/* Minimalist Header */}
        <div className="text-center! mb-12! mt-10!">
          <div className="inline-block! px-4! py-1! mb-6! bg-gray-100! dark:bg-gray-800! rounded-full! text-sm! text-gray-600! dark:text-gray-400! font-mono!">
            404 • Not Found
          </div>
          <h1 className="text-4xl! md:text-5xl! font-light! text-gray-900! dark:text-white! mb-3! tracking-tight!">
            Page missing
          </h1>
          <p className="text-gray-500! dark:text-gray-400! font-light!">
            This page doesn't exist or has been moved
          </p>
        </div>

        {/* Primary Actions */}
        <div className="space-y-3! mb-10!">
          <button
            onClick={handleGoHome}
            className="w-full! py-3! bg-gray-700! dark:bg-white/80! text-white! dark:text-primary-900! font-medium! rounded-lg! hover:bg-primary-900! dark:hover:bg-gray-100! transition-colors! duration-200! text-sm! tracking-wide!"
          >
            Return to homepage
          </button>
          <button
            onClick={handleGoBack}
            className="w-full! py-3! border! border-gray-300! dark:border-gray-700! text-gray-700! dark:text-gray-300! font-medium! rounded-lg! hover:border-gray-400! dark:hover:border-gray-600! transition-colors! duration-200! text-sm!"
          >
            Go back
          </button>
        </div>

        {/* Quick Links */}
        <div className="mb-12!">
          <p className="text-gray-500! dark:text-gray-400! text-sm! mb-4! text-center!">
            Or jump to a section
          </p>
          <div className="grid! grid-cols-3! gap-2!">
            {quickLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavigateToSection(link.id)}
                className={`py-2.5! rounded-lg! font-medium! text-sm! transition-all! duration-200! hover:scale-[1.02]! active:scale-[0.98]! ${link.color}`}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>

        {/* Domain Info - Subtle Footer */}
        <div className="text-center! pt-8! border-t! border-gray-100! dark:border-gray-800!">
          <p className="text-xs! text-gray-400! dark:text-gray-500! font-mono! tracking-wider!">
            richardmunthali.vercel.app
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;