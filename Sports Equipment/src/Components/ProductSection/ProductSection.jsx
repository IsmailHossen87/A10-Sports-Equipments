import React, { useEffect, useState } from "react";
import { Bounce, Fade, Zoom } from "react-awesome-reveal";
import { NavLink } from "react-router-dom";
import { FaShoppingCart, FaSearch } from "react-icons/fa";

const ProductSection = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("https://server-jade-sigma.vercel.app/sports6")
      .then((res) => res.json())
      .then((data) => {
        setCart(data);
      });
  }, []);

  return (
    <div className="p-6">
      <div className="text-center mb-8">
        <h2 className="text-4xl my-2 font-extrabold">Explore Our Products</h2>
        <p className="text-lg ">High-quality sports equipment for every athlete</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cart?.map((data) => (
          <Fade key={data._id} delay={300}>
            <div className="border border-gray-200 shadow-lg rounded-lg overflow-hidden bg-white hover:shadow-xl transition duration-300">
              <Zoom>
                <div className="relative group">
                  <img
                    className="h-56 w-5/6 mx-auto rounded-[15px] object-cover transform group-hover:scale-105 transition duration-300"
                    src={data.photo}
                    alt={data.name}
                  />
                  <div className="absolute top-2 right-2 p-2 rounded-full bg-gray-100 text-gray-800 group-hover:bg-gray-200 transition duration-300">
                    <FaShoppingCart className="text-xl" />
                  </div>
                </div>
              </Zoom>
              <div className="p-5 space-y-3">
                <Bounce direction="bottom" delay={300}>
                  <h2 className="text-lg font-bold text-gray-800">
                    Item Name:{" "}
                    <span className="font-medium text-gray-600">{data.name}</span>
                  </h2>
                </Bounce>
                <p className="text-lg font-semibold text-gray-800">
                  Price:{" "}
                  <span className="font-medium text-gray-600">${data.price}</span>
                </p>
              </div>
              <div className="flex justify-between items-center p-4 bg-gray-50 border-t border-gray-200">
                <NavLink to={`/details/${data._id}`} className="flex items-center">
                  <button className="btn btn-neutral flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition duration-300">
                    <FaSearch className="text-lg" /> View Details
                  </button>
                </NavLink>
              </div>
            </div>
          </Fade>
        ))}
      </div>
    </div>
  );
};

export default ProductSection;
