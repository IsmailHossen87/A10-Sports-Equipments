import React from "react";
import { Bounce, Fade, Zoom, Slide } from "react-awesome-reveal";
import {
  FaShoppingCart,
  FaTag,
  FaStar,
  FaBoxOpen,
  FaClock,
  FaListAlt,
} from "react-icons/fa";
import { useLoaderData } from "react-router-dom";

const ViewDetails = () => {
  const data = useLoaderData();
  const {
    photo,
    stockStatus,
    processingTime,
    rating,
    price,
    description,
    category,
    name,
  } = data;

  return (
    <div className="max-w-4xl mx-auto my-10 p-6 bg-gradient-to-r from-purple-50 to-indigo-50 shadow-xl rounded-lg border border-gray-200">
      <div className="md:flex items-center gap-6">
        {/* Image Section */}
        <Zoom>
          <div className="flex justify-center ">
            <img
              className="h-64 w-full max-w-xs rounded-xl shadow-md object-cover"
              src={photo}
              alt={name}
            />
          </div>
        </Zoom>

        {/* Details Section */}
        <Fade delay={300}>
          <div className=" space-y-4 mt-6 md:mt-0">
            {/* Name */}
            <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
              <FaListAlt className="text-purple-600" />
              <span>Name:</span> {name}
            </h2>

            {/* Category */}
            <p className="text-gray-700 flex items-center gap-2">
              <FaTag className="text-indigo-600" />
              <span className="font-semibold">Category:</span> {category}
            </p>

            {/* Processing Time */}
            <p className="text-gray-700 flex items-center gap-2">
              <FaClock className="text-blue-600" />
              <span className="font-semibold">Processing Time:</span>{" "}
              {processingTime}
            </p>

            {/* Stock Status */}
            <p className="text-gray-700 flex items-center gap-2">
              <FaBoxOpen className="text-green-600" />
              <span className="font-semibold">Stock Status:</span> {stockStatus}
            </p>

            {/* Description */}
            <p className="text-gray-700 flex  gap-2">
              <FaTag className="text-pink-600" />
              <span className="font-semibold">Description:</span> {description}
            </p>

            {/* Price */}
            <p className="text-gray-700 flex items-center gap-2">
              <FaTag className="text-yellow-600" />
              <span className="font-semibold">Price:</span> ${price}
            </p>

            {/* Rating */}
            <p className="text-gray-700 flex items-center gap-2">
              <FaStar className="text-orange-500" />
              <span className="font-semibold">Rating:</span> {rating}
            </p>

            {/* Add to Cart Button */}
            <div className="flex">
              <button className="flex items-center gap-2 px-6 py-2 bg-purple-600 text-white rounded-full shadow-md hover:bg-purple-700 transition duration-300">
                <FaShoppingCart className="text-lg" />
                <span>Add to Cart</span>
              </button>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default ViewDetails;
