import React from 'react';

const Education = () => {
  const educationData = [
    {
      degree: "Bachelor of Science in Electrical & Electronic Engineering",
      institution: "Begum Rokeya University,Rangpur,Bangladesh",
      year: "2022 - Present",
     
    },
    
  ];

  return (
    <div className=" mx-auto px-4 py-10 bg-gray-800">
      <h2 className="text-3xl font-bold text-center mb-20 text-green-600">Educational Qualification</h2>
      <div className="space-y-6">
        {educationData.map((edu, index) => (
          <div
            key={index}
            className="bg-gray-300 shadow-md rounded-xl p-6 border border-gray-200 hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold text-blue-600">{edu.degree}</h3>
            <p className="text-gray-700">{edu.institution}</p>
            <p className="text-gray-700">{edu.year}</p>
             <p className="text-gray-700">Expected Year OF Finishing- 2026</p>
           
           
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
