import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <h1 className="text-6xl mb-4">Github Finder</h1>
      <p className="mb-4 text-2xl font-light">
        A React app to search GitHub profiles and see profile details
      </p>
      <p className="text-lg text-gray-400">
        Version <span className="text-white">1.0.0</span>
      </p>
    </>
    // <div className="flex flex-col justify-center items-center align-center">
    //     <h2 className="text-xl font-bold">This is a Github Account Finder App</h2>
    //     <p className="font-bold text-green-600">Version : 1.0.0</p>
    //     <Link to="/" className="text-blue-600">Back to Home</Link>
    // </div>
  );
};

export default About;
