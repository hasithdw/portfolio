import React from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 bg-gradient-to-br from-white via-gray-50 to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 dark:bg-blue-500/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/5 dark:bg-blue-400/5 rounded-full blur-3xl"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="text-gray-600 dark:text-gray-300 font-medium"
              >
                Hello, <span className="text-primary dark:text-blue-400">I'm</span>
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="text-5xl md:text-7xl font-bold"
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-blue-600 to-blue-500 dark:from-blue-400 dark:via-blue-300 dark:to-blue-200">
                  Hasith Dulanjana
                </span>
              </motion.h1>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-medium"
              >
                Undergraduate | B.I.C.T.
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.5 }}
                className="text-gray-600 dark:text-gray-300 text-lg max-w-lg leading-relaxed"
              >
                Passionate about web development and creating innovative solutions that make a difference.
              </motion.p>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="px-8 py-4 bg-gradient-to-r from-primary to-blue-600 dark:from-blue-500 dark:to-blue-400 text-white rounded-lg 
                         hover:shadow-lg hover:shadow-primary/20 dark:hover:shadow-blue-500/20 transform hover:-translate-y-1 transition-all duration-300 cursor-pointer"
              >
                Get in Touch
              </Link>
              <a
                href="https://drive.google.com/file/d/1-aEhvmP5kbIcy6-d0g-GLSSFFlf6S-qQ/view?usp=sharing"
                className="px-8 py-4 border-2 border-primary dark:border-blue-400 text-primary dark:text-blue-400 rounded-lg
                         hover:bg-primary/5 dark:hover:bg-blue-400/5 transform hover:-translate-y-1 transition-all duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download CV
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3, duration: 0.5 }}
              className="flex gap-4 pt-4"
            >
              <a
                href="https://github.com/hasithdw"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-blue-400 transition-colors"
              >
                <FaGithub className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/hasith-dulanjana-b472941a6/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-blue-400 transition-colors"
              >
                <FaLinkedin className="w-6 h-6" />
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative w-80 h-80 mx-auto">
              {/* Animated background elements */}
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 bg-gradient-to-r from-primary/20 to-blue-500/20 dark:from-blue-400/20 dark:to-blue-300/20 rounded-full 
                          blur-2xl"
              ></motion.div>
              
              {/* Image container with modern border effect */}
              <div className="absolute inset-0 p-2">
                <div className="w-full h-full rounded-2xl overflow-hidden border-4 border-white dark:border-gray-700 shadow-2xl
                              transform hover:scale-105 transition-transform duration-300 relative">
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-blue-500/10 dark:from-blue-400/10 dark:to-blue-300/10"></div>
                  <img
                    src={process.env.PUBLIC_URL + '/resources/hasith.jpeg'}
                    alt="Hasith Dulanjana"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>

              {/* Floating decorative elements */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, -5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -top-4 -right-4 w-20 h-20 bg-blue-100 dark:bg-blue-900/50 rounded-lg -rotate-12 z-[-1]"
              />
              <motion.div
                animate={{
                  y: [0, 10, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -bottom-4 -left-4 w-12 h-12 bg-primary/20 dark:bg-blue-400/20 rounded-lg rotate-12 z-[-1]"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 