import React from "react";
import { NavLink } from "react-router-dom";

const Offer = () => {
  const offers = [
    {
      id: 1,
      title: "Winter Sports Discount",
      description: "Get up to 30% off on all winter sports equipment.",
      image: "https://i.ibb.co.com/Pg98b7H/offer-if.jpg",
    },
    {
      id: 2,
      title: "Buy One Get One Free",
      description: "BOGO offer on selected fitness gear!",
      image: "https://i.ibb.co.com/j5864FG/offer221-8672-8debadd2e913-1024.jpg",
    },
    {
      id: 3,
      title: "Exclusive Member Deals",
      description: "Members get an extra 20% off on all categories.",
      image: "https://i.ibb.co.com/wwCBvvX/44t-club-sale-banner-23-2150336881.jpg",
    },
  ];

  return (
    <div className="my-10 px-4">
      <h2 className="text-3xl font-bold text-center mb-6">Special Offers</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {offers.map((offer) => (
          <div
            key={offer.id}
            className="card bg-base-100 shadow-lg rounded-lg overflow-hidden border border-gray-200"
          >
            <img
              src={offer.image}
              alt={offer.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{offer.title}</h3>
              <p className="text-gray-600 mb-4">{offer.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Offer;
