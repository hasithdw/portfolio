import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: '', message: '' });

    emailjs.sendForm(
      'service_fz3s6mf',
      'template_4pt1gnx',
      form.current,
      'LsfjqpSshenCq2f47'
    )
      .then((result) => {
        setSubmitStatus({
          type: 'success',
          message: 'Message sent successfully! I will get back to you soon.'
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      })
      .catch((error) => {
        setSubmitStatus({
          type: 'error',
          message: 'Failed to send message. Please try again later.'
        });
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Contact Me</h2>
          <div className="mt-4 h-1 w-20 bg-primary dark:bg-blue-400 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-4">
              <FaEnvelope className="text-primary dark:text-blue-400 text-xl" />
              <p className="text-gray-600 dark:text-gray-300">hasith2001dulanjana@gmail.com</p>
            </div>
            <div className="flex items-center space-x-4">
              <FaPhone className="text-primary dark:text-blue-400 text-xl" />
              <p className="text-gray-600 dark:text-gray-300">+94 77 440 6113</p>
            </div>
            <div className="flex items-center space-x-4">
              <FaMapMarkerAlt className="text-primary dark:text-blue-400 text-xl" />
              <p className="text-gray-600 dark:text-gray-300">Yakalla, Megodawewa, Sri Lanka</p>
            </div>
            <div className="flex items-center space-x-4">
              <FaLinkedin className="text-primary dark:text-blue-400 text-xl" />
              <a 
                href="https://www.linkedin.com/in/hasith-dulanjana-b472941a6/" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-blue-400 transition-colors"
              >
                Hasith Dulanjana
              </a>
            </div>
          </motion.div>

          <motion.form
            ref={form}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:border-primary dark:focus:border-blue-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                required
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:border-primary dark:focus:border-blue-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                required
              />
            </div>
            <div>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:border-primary dark:focus:border-blue-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                required
              />
            </div>
            <div>
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:border-primary dark:focus:border-blue-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                required
              ></textarea>
            </div>

            {submitStatus.message && (
              <div className={`p-3 rounded-lg ${
                submitStatus.type === 'success' 
                  ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400' 
                  : 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400'
              }`}>
                {submitStatus.message}
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full px-6 py-3 bg-primary dark:bg-blue-500 text-white rounded-lg transition-colors
                ${isSubmitting 
                  ? 'opacity-70 cursor-not-allowed' 
                  : 'hover:bg-secondary dark:hover:bg-blue-600'}`}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact; 