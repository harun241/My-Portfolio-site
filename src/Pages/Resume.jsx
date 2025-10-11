import React from 'react';

const Resume = () => {
  return (
    <div className="min-h-screen bg-gray-900 px-4 pt-24 pb-10 text-gray-200">
      <div className="max-w-4xl mx-auto">
        {/* Name & Contact */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-green-400 mb-2">Md Harun</h1>
          <p className="text-gray-300 mb-2">
            📍 Dhaka, Bangladesh | 📱 <a href="tel:+8801820903961" className="text-green-400 hover:underline">+8801820903961</a>
          </p>
          <p className="text-gray-300">
            💼 <a href="https://github.com/harun241" target="_blank" rel="noreferrer" className="text-blue-400 hover:underline">GitHub</a> | 
            🔗 <a href="https://www.linkedin.com/in/md-harun-or-rashid-409aaa363/" target="_blank" rel="noreferrer" className="text-blue-400 hover:underline">LinkedIn</a>
          </p>
        </div>

        {/* Career Objective */}
        <section className="mb-8 bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-xl transition duration-300">
          <h2 className="text-xl font-semibold text-green-400 mb-2">🎯 Career Objective</h2>
          <p>
            As a passionate MERN Stack Developer, I aim to build scalable and efficient full-stack web applications,
            combining user-friendly frontend interfaces with robust backend services. I love solving real-world problems
            through clean and maintainable code.
          </p>
        </section>

        {/* Skills */}
        <section className="mb-8 bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-xl transition duration-300">
          <h2 className="text-xl font-semibold text-green-400 mb-4">🧠 Skills</h2>
          <ul className="list-disc ml-6 grid grid-cols-2 md:grid-cols-3 gap-2 text-gray-300">
            <li>React.js</li>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>MongoDB</li>
            <li>Firebase</li>
            <li>Tailwind CSS</li>
            <li>Git & GitHub</li>
            <li>Next.js</li>
            <li>TypeScript</li>
          </ul>
        </section>

        {/* Projects */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-green-400 mb-4">📁 Projects</h2>
          <div className="space-y-4">
            <div className="bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300">
              <h3 className="font-semibold text-blue-400 mb-1">🌱 Gardening Community & Resource Hub</h3>
              <p><span className="font-medium text-green-400">Tech Stack:</span> React, Node.js, MongoDB, Firebase</p>
              <ul className="list-disc ml-6 text-gray-300 text-sm">
                <li>Authentication (Email/Password + Google)</li>
                <li>Tips CRUD with secure access control</li>
                <li>Review system & theme toggle</li>
              </ul>
            </div>

            <div className="bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300">
              <h3 className="font-semibold text-blue-400 mb-1">🏨 Hotel Booking Platform</h3>
              <p><span className="font-medium text-green-400">Tech Stack:</span> React, Express, MongoDB</p>
              <ul className="list-disc ml-6 text-gray-300 text-sm">
                <li>Room booking with availability check</li>
                <li>Give review for booked rooms only</li>
                <li>JWT-protected routes & admin filtering</li>
              </ul>
            </div>

            <div className="bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300">
              <h3 className="font-semibold text-blue-400 mb-1">👨‍💻 Portfolio Website</h3>
              <p><span className="font-medium text-green-400">Tech Stack:</span> React, Tailwind CSS, React Router</p>
              <ul className="list-disc ml-6 text-gray-300 text-sm">
                <li>Interactive layout with About, Resume, Services, Projects</li>
                <li>Responsive design with CTA and fixed navbar</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="mb-8 bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-xl transition duration-300">
          <h2 className="text-xl font-semibold text-green-400 mb-2">🎓 Education</h2>
          <p className="font-medium text-gray-100">B.Sc in Electrical & Electronic Engineering</p>
          <p className="text-gray-300">Begum Rokeya University, Rangpur, Bangladesh</p>
        </section>

        {/* Languages */}
        <section className="mb-8 bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-xl transition duration-300">
          <h2 className="text-xl font-semibold text-green-400 mb-2">💬 Languages</h2>
          <ul className="list-disc ml-6 text-gray-300">
            <li>Bangla – Native</li>
            <li>English – Professional</li>
          </ul>
        </section>

        {/* Interests */}
        <section className="bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-xl transition duration-300">
          <h2 className="text-xl font-semibold text-green-400 mb-2">🏏 Interests</h2>
          <p className="text-gray-300">When I’m not coding, I love to play cricket 🏏 and travel ✈️.</p>
        </section>
      </div>
    </div>
  );
};

export default Resume;
