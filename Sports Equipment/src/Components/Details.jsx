import React from "react";
import { FaTrophy, FaUsers, FaShieldAlt } from "react-icons/fa";

const Details = () => {
  return (
    <div className="bg-gray-100 py-16 px-4 md:px-20">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-gray-800">About EquiSports</h2>
        <p className="text-gray-600 mt-4 text-lg">
          EquiSports is your ultimate destination for top-quality sports equipment. 
          We aim to empower athletes with premium gear, ensuring performance and safety on every field.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-10">
        {/* Mission Card */}
        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <FaShieldAlt className="text-4xl text-purple-600 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-gray-800">Our Mission</h3>
          <p className="text-gray-600 mt-2">
            To provide athletes of all levels with premium sports equipment that enhances performance and ensures safety.
          </p>
        </div>

        {/* Vision Card */}
        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <FaTrophy className="text-4xl text-yellow-500 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-gray-800">Our Vision</h3>
          <p className="text-gray-600 mt-2">
            To become the global leader in sports gear, promoting health, fitness, and a passion for sports worldwide.
          </p>
        </div>

        {/* Community Card */}
        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <FaUsers className="text-4xl text-blue-500 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-gray-800">Our Community</h3>
          <p className="text-gray-600 mt-2">
            EquiSports thrives on its passionate community of athletes and sports enthusiasts, driving innovation together.
          </p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-16">
        <h3 className="text-2xl font-bold text-gray-800">
          Ready to Elevate Your Game?
        </h3>
        <p className="text-gray-600 mt-2">
          Discover the best sports equipment and join the EquiSports family today.
        </p>
      </div>
    </div>
  );
};

export default Details;
