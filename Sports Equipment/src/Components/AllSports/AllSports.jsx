import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { NavLink, useLoaderData } from "react-router-dom";

const AllSports = () => {
  const data = useLoaderData();
  const [sortedData, setSortedData] = useState(data);

  const handleSortbyPrice = () => {
    const sort = [...sortedData].sort((a, b) => a.price - b.price);
    setSortedData(sort);
  };

  return (
    <>
      <Helmet>
        <title>All Sports || Sports</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <div className="pl-4 my-8">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">All Sports</h1>
          <button onClick={handleSortbyPrice} className="btn btn-primary">
            Sort by Price
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {sortedData.length === 0 ? (
            <p>No Data Available</p>
          ) : (
            sortedData.map((item) => (
              <div
                key={item._id}
                className="card bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200"
              >
                <img
                  src={item.photo}
                  alt={item.name}
                  className="w-full h-40 object-cover bg-gray-300"
                />
                <div className="p-4">
                  <h2 className="text-lg font-bold mb-2">{item.name}</h2>
                  <p className="text-sm text-gray-600">Category: {item.category}</p>
                  <p className="text-sm text-gray-600">Rating: {item.rating}</p>
                  <p className="text-sm text-gray-600">
                    Stock Status: {item.stockStatus}
                  </p>
                  <p className="text-lg font-semibold mt-2">${item.price}</p>
                  <NavLink to={`/details/${item._id}`}>
                    <button className="btn btn-neutral mt-4 w-full">Details</button>
                  </NavLink>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default AllSports;
