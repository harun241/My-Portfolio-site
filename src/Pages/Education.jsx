import React from 'react';
import { motion } from 'framer-motion';

const Education = () => {
  const educationData = [
    {
      degree: "Bachelor of Science in Electrical & Electronic Engineering",
      institution: "Begum Rokeya University, Rangpur, Bangladesh",
      year: "2022 - Present",
      expected: "2026",
    },
    // You can add more education entries here
  ];

  return (
    <section className="bg-gray-900 py-16 px-4 md:px-8 lg:px-20">
      <h2 className="text-4xl font-bold text-center text-green-400 mb-16">
        🎓 Educational Qualification
      </h2>

      <div className="flex flex-col md:flex-row md:flex-wrap justify-center gap-8">
        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            className="bg-gradient-to-br from-gray-800 via-gray-700 to-gray-800 text-white rounded-2xl shadow-xl max-w-md p-6 border-l-8 border-green-400 hover:scale-105 hover:shadow-2xl transition-transform duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <h3 className="text-2xl font-semibold text-green-400 mb-2">{edu.degree}</h3>
            <p className="text-gray-300 mb-1">{edu.institution}</p>
            <p className="text-gray-400 mb-1">{edu.year}</p>
            <p className="text-gray-400">Expected Year of Completion: {edu.expected}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
