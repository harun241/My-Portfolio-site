import React from 'react';

const Service = () => {
  return (
    <div className="bg-gray-800 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-green-500 mb-12">
          My Services
        </h2>

        {/* Grid layout for services */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Service Card 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Web Development</h3>
            <p className="text-gray-600">
              Modern responsive web applications using React, Node.js, and MongoDB.
            </p>
          </div>

          {/* Service Card 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">UI/UX Design</h3>
            <p className="text-gray-600">
              Intuitive and user-friendly interfaces with Tailwind CSS and Figma.
            </p>
          </div>

          {/* Service Card 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Full-Stack Projects</h3>
            <p className="text-gray-600">
              End-to-end solutions including backend APIs and database integration.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
