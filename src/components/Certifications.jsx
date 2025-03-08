import React from 'react';
import { motion } from 'framer-motion';
import { FaAws } from 'react-icons/fa';

const Certifications = () => {
  const certifications = [
    {
      title: 'AWS Cloud Practitioner Essentials',
      organization: 'Amazon Web Services (AWS)',
      icon: FaAws,
    },
    {
      title: 'AWS Cloud Practitioner Essentials',
      organization: 'Amazon Web Services (AWS)',
      icon: FaAws,
    },
    
  ];

  return (
    <section id="certifications" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Certifications</h2>
          <div className="mt-4 h-1 w-20 bg-primary dark:bg-blue-400 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 transition-colors duration-200"
            >
              <div className="flex items-center space-x-4">
                <cert.icon className="text-[#FF9900] text-4xl" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{cert.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{cert.organization}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications; 