import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">About Me</h2>
          <div className="mt-4 h-1 w-20 bg-primary dark:bg-blue-400 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              I am an undergraduate student pursuing a Bachelor of Information and Communication Technology (B.I.C.T.) with a specialization in Software Technology. I am passionate about web development and eager to learn, grow, and contribute to innovative projects.
            </p>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Education</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-primary dark:border-blue-400 pl-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white">Bachelor of Information and Communication Technology (Honors)</h4>
                  <p className="text-gray-600 dark:text-gray-300">Faculty of Technology, University of Sri Jayewardenepura</p>
                  <p className="text-gray-600 dark:text-gray-300">Current GPA: 3/4.0</p>
                  <p className="text-gray-600 dark:text-gray-300">Specialization in Software Technology</p>
                </div>
                <div className="border-l-4 border-primary dark:border-blue-400 pl-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white">G.C.E. Advanced Level (Engineering Technology)</h4>
                  <p className="text-gray-600 dark:text-gray-300">Z-Score: 3.808 over 4.0</p>
                  <p className="text-gray-600 dark:text-gray-300">All-Island 2nd Rank</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Languages</h3>
              <div className="space-y-2">
                <div>
                  <p className="text-gray-700 dark:text-gray-300">Sinhala</p>
                  <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                    <div className="bg-primary dark:bg-blue-400 h-2 rounded-full" style={{ width: '100%' }}></div>
                  </div>
                </div>
                <div>
                  <p className="text-gray-700 dark:text-gray-300">English</p>
                  <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                    <div className="bg-primary dark:bg-blue-400 h-2 rounded-full" style={{ width: '65%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 