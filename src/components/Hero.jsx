import React from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold">
                Hi, I'm{' '}
                <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">
                  Hasith Dulanjana
                </span>
              </h1>
              <h2 className="text-xl md:text-2xl text-gray-600 font-medium">
                Undergraduate | B.I.C.T.
              </h2>
              <p className="text-gray-600 text-lg max-w-lg">
                Passionate about web development and creating innovative solutions.
              </p>
            </div>
            
            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <a
                href="https://drive.google.com/file/d/1Ri9mdcwqlWYUdbDH6xXevQVjvbpsNLxH/view?usp=sharing"
                className="px-8 py-4 bg-gradient-to-r from-primary to-blue-600 text-white rounded-lg 
                         hover:shadow-lg hover:scale-105 transform transition-all duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download CV
              </a>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="px-8 py-4 border-2 border-primary text-primary rounded-lg
                         hover:bg-primary hover:text-white hover:shadow-lg 
                         transform transition-all duration-300 cursor-pointer"
              >
                Contact Me
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative w-80 h-80 mx-auto">
              {/* Background circles for visual effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-blue-500/20 rounded-full 
                            animate-pulse duration-3000"></div>
              <div className="absolute inset-4 bg-gradient-to-r from-primary/10 to-blue-500/10 rounded-full 
                            animate-pulse duration-2000 delay-100"></div>
              
              {/* Image container */}
              <div className="absolute inset-0 p-2">
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-white shadow-xl
                              transform hover:scale-105 transition-transform duration-300">
                  <img
                    src={process.env.PUBLIC_URL + '/resources/hasith.jpeg'}
                    alt="Hasith Dulanjana"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <motion.div
              className="absolute -top-4 -right-4 w-20 h-20 bg-blue-100 rounded-full z-[-1]"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.div
              className="absolute -bottom-4 -left-4 w-12 h-12 bg-primary/20 rounded-full z-[-1]"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 2, delay: 0.3, repeat: Infinity }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 