import React from 'react';

const Skills = () => {
  return (
    <div className="my-20 bg-gray-800 py-10 px-4">
      <h1 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold text-green-600 mb-6">
        My Skills
      </h1>

      <h4 className=" text-lg sm:text-xl mb-4 text-center text-green-600">
        🛠️ Tech Stack
      </h4>

      <div className="flex flex-wrap justify-center gap-4">
        <img
          src="https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=white"
          alt="React"
        />
        <img
          src="https://img.shields.io/badge/Node.js-339933?style=flat&logo=node.js&logoColor=white"
          alt="Node.js"
        />
        <img
          src="https://img.shields.io/badge/Express.js-000000?style=flat&logo=express&logoColor=white"
          alt="Express.js"
        />
        <img
          src="https://img.shields.io/badge/MongoDB-47A248?style=flat&logo=mongodb&logoColor=white"
          alt="MongoDB"
        />
        <img
          src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black"
          alt="JavaScript"
        />
        <img
          src="https://img.shields.io/badge/Next.js-000000?style=flat&logo=next.js&logoColor=white"
          alt="Next.js"
        />
        <img
          src="https://img.shields.io/badge/Firebase-FFCA28?style=flat&logo=firebase&logoColor=white"
          alt="Firebase"
        />
      </div>
    </div>
  );
};

export default Skills;
