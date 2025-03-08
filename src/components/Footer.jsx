import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dark dark:bg-gray-900 py-8 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-4">
          <div className="flex space-x-4">
            <a
              href="https://github.com/hasithdw"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-primary dark:hover:text-blue-400 transition-colors"
            >
              <FaGithub className="text-2xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/hasith-dulanjana-b472941a6/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-primary dark:hover:text-blue-400 transition-colors"
            >
              <FaLinkedin className="text-2xl" />
            </a>
          </div>
          <p className="text-gray-400 dark:text-gray-500 text-sm">
            © {new Date().getFullYear()} Hasith Dulanjana. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 