import React, { useContext, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Helmet } from "react-helmet";

const AddEquipment = () => {
  const { user } = useContext(AuthContext);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleAdd = (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    const form = event.target;

    const equipment = {
      photo: form.photo.value,
      name: form.name.value,
      category: form.category.value,
      description: form.description.value,
      price: parseFloat(form.price.value),
      rating: parseFloat(form.rating.value),
      customization: form.customization.value,
      processingTime: form.processingTime.value,
      stockStatus: parseInt(form.stockStatus.value),
      email: user.email,
    };

    fetch("https://server-jade-sigma.vercel.app/sport", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(equipment),
    })
      .then((res) => res.json())
      .then(() => {
        Swal.fire({
          title: "Success!",
          text: "Equipment added successfully!",
          icon: "success",
          confirmButtonText: "Cool",
        });
        form.reset();
      })
      .catch(() => {
        Swal.fire({
          title: "Error!",
          text: "Failed to add equipment. Please try again.",
          icon: "error",
          confirmButtonText: "OK",
        });
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <div className="md:w-3/4 mx-auto my-10 px-4">
      <Helmet>
        <title>Add Equipments || Sports</title>
        <meta name="description" content="Helmet application" />
      </Helmet>

      <div className="relative bg-opacity-30 backdrop-blur-lg bg-white border border-gray-200 rounded-lg shadow-lg p-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-800">
          Add Equipment
        </h2>
        <form onSubmit={handleAdd}>
          {/* Image URL and Name */}
          <div className="flex flex-col md:flex-row gap-6 mb-6">
            <div className="form-control w-full">
              <label className="label font-semibold text-gray-700">Image URL</label>
              <input
                type="url"
                name="photo"
                placeholder="Enter photo URL"
                className="input input-bordered w-full bg-opacity-30 bg-white border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="form-control w-full">
              <label className="label font-semibold text-gray-700">Item Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter item name"
                className="input input-bordered w-full bg-opacity-30 bg-white border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          </div>

          {/* Category and Description */}
          <div className="flex flex-col md:flex-row gap-6 mb-6">
            <div className="form-control w-full">
              <label className="label font-semibold text-gray-700">Category</label>
              <input
                type="text"
                name="category"
                placeholder="Enter category"
                className="input input-bordered w-full bg-opacity-30 bg-white border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="form-control w-full">
              <label className="label font-semibold text-gray-700">Description</label>
              <textarea
                name="description"
                placeholder="Enter description"
                className="textarea textarea-bordered w-full bg-opacity-30 bg-white border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
                required
              ></textarea>
            </div>
          </div>

          {/* Price and Rating */}
          <div className="flex flex-col md:flex-row gap-6 mb-6">
            <div className="form-control w-full">
              <label className="label font-semibold text-gray-700">Price ($)</label>
              <input
                type="number"
                name="price"
                placeholder="Enter price"
                className="input input-bordered w-full bg-opacity-30 bg-white border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
                step="0.01"
                required
              />
            </div>
            <div className="form-control w-full">
              <label className="label font-semibold text-gray-700">Rating (1-5)</label>
              <input
                type="number"
                name="rating"
                placeholder="Enter rating"
                className="input input-bordered w-full bg-opacity-30 bg-white border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
                min="1"
                max="5"
                required
              />
            </div>
          </div>

          {/* Customization and Processing Time */}
          <div className="flex flex-col md:flex-row gap-6 mb-6">
            <div className="form-control w-full">
              <label className="label font-semibold text-gray-700">Customization</label>
              <input
                type="text"
                name="customization"
                placeholder="E.g., bat with extra grip, hit paper"
                className="input input-bordered w-full bg-opacity-30 bg-white border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="form-control w-full">
              <label className="label font-semibold text-gray-700">Processing Time</label>
              <input
                type="text"
                name="processingTime"
                placeholder="E.g., 3-5 days"
                className="input input-bordered w-full bg-opacity-30 bg-white border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          </div>

          {/* Stock Status */}
          <div className="form-control mb-6">
            <label className="label font-semibold text-gray-700">Stock Status</label>
            <input
              type="number"
              name="stockStatus"
              placeholder="Enter available product quantity"
              className="input input-bordered w-full bg-opacity-30 bg-white border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className={`btn btn-block ${
              isSubmitting ? "bg-gray-400" : "bg-blue-500"
            } text-white font-semibold py-2 px-4 rounded-lg shadow hover:bg-blue-600 transition duration-300`}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Adding..." : "Add Equipment"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddEquipment;
