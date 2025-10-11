import React from 'react';
import { motion } from 'framer-motion';

const Service = () => {
  const services = [
    {
      title: "Web Development",
      description:
        "Modern responsive web applications using React, Node.js, and MongoDB.",
      color: "green",
    },
    {
      title: "UI/UX Design",
      description:
        "Intuitive and user-friendly interfaces with Tailwind CSS and Figma.",
      color: "blue",
    },
    {
      title: "Full-Stack Projects",
      description:
        "End-to-end solutions including backend APIs and database integration.",
      color: "purple",
    },
  ];

  return (
    <section className="bg-gray-900 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-green-400 mb-12">
          My Services
        </h2>

        {/* Grid layout for services */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              className="bg-gray-800 p-6 rounded-xl shadow-md cursor-pointer transition-transform transform hover:scale-105 hover:bg-gray-700 hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <h3
                className={`text-xl font-semibold mb-3 text-${service.color}-400`}
              >
                {service.title}
              </h3>
              <p className="text-gray-300">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
