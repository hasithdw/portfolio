import React from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaReact, FaDatabase, FaGitAlt, FaFigma } from 'react-icons/fa';

const Skills = () => {
  const technicalSkills = [
    { name: 'HTML', icon: FaHtml5, color: 'text-orange-500' },
    { name: 'CSS', icon: FaCss3Alt, color: 'text-blue-500' },
    { name: 'JavaScript', icon: FaJs, color: 'text-yellow-500' },
    { name: 'Node.js', icon: FaNodeJs, color: 'text-green-500' },
    { name: 'React.js', icon: FaReact, color: 'text-blue-400' },
    { name: 'SQL', icon: FaDatabase, color: 'text-purple-500' },
    { name: 'Git', icon: FaGitAlt, color: 'text-red-500' },
    { name: 'Figma', icon: FaFigma, color: 'text-pink-500' },
  ];

  const softSkills = [
    'Problem Solving',
    'Time Management',
    'Collaborative and Teamwork',
    'Critical Thinking',
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Skills</h2>
          <div className="mt-4 h-1 w-20 bg-primary dark:bg-blue-400 mx-auto"></div>
        </motion.div>

        <div className="space-y-12">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Technical Skills</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {technicalSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
                >
                  <skill.icon className={`w-12 h-12 ${skill.color} mx-auto mb-4`} />
                  <p className="text-center text-gray-700 dark:text-gray-300">{skill.name}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Soft Skills</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {softSkills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
                >
                  <p className="text-center text-gray-700 dark:text-gray-300">{skill}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills; 