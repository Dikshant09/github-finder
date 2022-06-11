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
      <Link to="/" className="mt-4 btn btn-outline">Go Back to Home</Link>
    </>
  );
};

export default About;
