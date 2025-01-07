import React, { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { NavLink } from "react-router-dom";
import Swal from "sweetalert2";
import Myequipmenthook from "../Hooks/Myequipmenthook";
import { Helmet } from "react-helmet";

const MyEquipment = () => {
  const [data] = Myequipmenthook();
  const [store, setStore] = useState([]);

  // Sync data from hook to state
  useEffect(() => {
    if (data) {
      setStore(data);
    }
  }, [data]);

  // Handle delete operation
  const handledelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://server-jade-sigma.vercel.app/delete/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
            const remaining = store.filter((data) => data._id !== _id);
            setStore(remaining);
          });
      }
    });
  };

  return (
    <div className="my-7 ">
      <Helmet>
        <title>My Equipments || Sports</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      {/* If no data is available */}
      {store?.length === 0 ? (
        <div className="text-center text-3xl ">
          <h2>No data available</h2>
          <NavLink to="/addEquipment">
            <button className="btn btn-neutral mt-4">Add Equipment</button>
          </NavLink>
        </div>
      ) : (
        <div className="overflow-x-auto ">
          <table className="table table-zebra w-full">
            {/* Table Head */}
            <thead>
              <tr>
                <th>No</th>
                <th>Item Name</th>
                <th>Category</th>
                <th>Price</th>
                <th>Rating</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
  {store.map((item, index) => (
    <tr key={item._id} className={index % 2 === 0 ? 'text-blacke dark:text-white' : 'text-gray-700 dark:text-gray-300'}>
      <td>{index + 1}</td>
      <td className="flex items-center gap-2">
        <img
          src={item.photo}
          alt={item.name || "Item"}
          className="w-12 h-12 rounded-full object-cover"
        />
        {item.name}
      </td>
      <td>{item.category}</td>
      <td>${item.price}</td>
      <td>{item.rating}</td>
      <td>
        <div className="flex gap-2">
          <NavLink to={`/update/${item._id}`}>
            <button className="btn btn-sm bg-cyan-400 text-white font-semibold">
              Edit
            </button>
          </NavLink>
          <button
            onClick={() => handledelete(item._id)}
            className="btn btn-sm bg-red-500 text-white"
          >
            <MdDelete />
          </button>
          <NavLink to={`/details/${item._id}`}>
            <button className="btn btn-sm btn-neutral">View</button>
          </NavLink>
        </div>
      </td>
    </tr>
  ))}
</tbody>

          </table>
        </div>
      )}
    </div>
  );
};

export default MyEquipment;
