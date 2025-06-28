import React from 'react';

const Service = () => {
  return (
    <div className="h-70 bg-gray-800  my-30">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-green-600 mb-8">My Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Service Card 1 */}
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Web Development</h3>
            <p className="text-gray-600">Modern responsive web applications using React, Node.js, and MongoDB.</p>
          </div>

          {/* Service Card 2 */}
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">UI/UX Design</h3>
            <p className="text-gray-600">Intuitive and user-friendly interfaces with Tailwind and Figma designs.</p>
          </div>

          {/* Service Card 3 */}
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Full-Stack Projects</h3>
            <p className="text-gray-600">End-to-end solutions including backend API and database integration.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
