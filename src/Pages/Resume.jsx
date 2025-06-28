import React from 'react';

const Resume = () => {
  return (
    <div className="min-h-screen bg-white px-4 pt-24 pb-10 text-gray-800">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-green-600 mb-6">Md Harun</h1>
        <p className="text-center mb-2">
          📍 Dhaka, Bangladesh | 📧 <a href="mailto:harun@example.com" className="text-blue-600">harun@example.com</a> | 📱 +8801820903961
        </p>
        <p className="text-center mb-4">
          🌐 <a href="https://portfolio.com" target="_blank" rel="noreferrer" className="text-blue-600">portfolio.com</a> |
          💼 <a href="https://github.com/harun241" target="_blank" rel="noreferrer" className="text-blue-600">GitHub</a> |
          🔗 <a href="https://www.linkedin.com/in/md-harun-or-rashid-409aaa363/" target="_blank" rel="noreferrer" className="text-blue-600">LinkedIn</a>
        </p>

        {/* Career Objective */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">🎯 Career Objective</h2>
          <p>
            As a passionate MERN Stack Developer, I aim to build scalable and efficient full-stack web applications,
            combining user-friendly frontend interfaces with robust backend services. I love solving real-world problems
            through clean and maintainable code.
          </p>
        </section>

        {/* Skills */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">🧠 Skills</h2>
          <ul className="list-disc ml-6 grid grid-cols-2 md:grid-cols-3 gap-2">
            <li>React.js</li>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>MongoDB</li>
            <li>Firebase</li>
            <li>Tailwind CSS</li>
            <li>Git & GitHub</li>
          
          </ul>
        </section>

        {/* Projects */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">📁 Projects</h2>

          <div className="mb-4">
            <h3 className="font-semibold">🌱 Gardening Community & Resource Hub</h3>
            <p><span className="font-medium">Tech Stack:</span> React, Node.js, MongoDB, Firebase</p>
            <ul className="list-disc ml-6 text-sm">
              <li>Authentication (Email/Password + Google)</li>
              <li>Tips CRUD with secure access control</li>
              <li>Review system & theme toggle</li>
            </ul>
          </div>

          <div className="mb-4">
            <h3 className="font-semibold">🏨 Hotel Booking Platform</h3>
            <p><span className="font-medium">Tech Stack:</span> React, Express, MongoDB</p>
            <ul className="list-disc ml-6 text-sm">
              <li>Room booking with availability check</li>
              <li>Give review for booked rooms only</li>
              <li>JWT-protected routes & admin filtering</li>
            </ul>
          </div>

          <div className="mb-4">
            <h3 className="font-semibold">👨‍💻 Portfolio Website</h3>
            <p><span className="font-medium">Tech Stack:</span> React, Tailwind CSS, React Router</p>
            <ul className="list-disc ml-6 text-sm">
              <li>Interactive layout with About, Resume, Services, Projects</li>
              <li>Responsive design with CTA and fixed navbar</li>
            </ul>
          </div>
        </section>

        {/* Education */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">🎓 Education</h2>
          <p className="font-medium">B.Sc in Electrical & Electronic Engineering</p>
          <p>Begum Rokeya University,Rangpur,Bangladesh</p>
          
        </section>

        {/* Achievements */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">🏆 Achievements</h2>
          <ul className="list-disc ml-6">
            <li>1st Place – Portfolio Design Challenge (University)</li>
            <li>Completed 20+ Frontend,full-stack Practice-Project with auth, CRUD, and UI libraries</li>
          </ul>
        </section>

        {/* Languages */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">💬 Languages</h2>
          <ul className="list-disc ml-6">
            <li>Bangla – Native</li>
            <li>English – Professional</li>
          </ul>
        </section>

        {/* Interests */}
        <section>
          <h2 className="text-xl font-semibold mb-2">🏏 Interests</h2>
          <p>When I’m not coding, I love to play cricket 🏏 and travel ✈️.</p>
        </section>
      </div>
    </div>
  );
};

export default Resume;
