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
  const handledelete =(_id)=>{
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
        fetch(`https://server-jade-sigma.vercel.app/delete/${_id}`,{
            method:'DELETE'
        })
        .then(res=> res.json())
        .then(data => {
            if(data.deletedCount > 0){
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                  });
            }
            const remaining = store.filter(data => data._id !== _id);
            setStore(remaining);
        })
        }
      });
}

  return (
    <div className="my-7 !text-black">
      <Helmet>
      <title>My Equipments || Sports</title>
      <meta name="description" content="Helmet application" />
      </Helmet>
      {/* If no data is available */}
      {store?.length === 0 ? (
        <div className="text-center text-3xl text-gray-500">
          <h2>No data available</h2>
          <NavLink to="/addEquipment">
            <button className="btn btn-neutral mt-4">Add Equipment</button>
          </NavLink>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3  gap-4">
          {store.map((card) => (
            <div key={card._id} className="card bg-base-100 shadow-xl">
              <figure>
                <img
                  className="h-[200px] w-full lg:w-4/5 mx-auto p-2 rounded-[15px]"
                  src={card.photo}
                  alt={card.name || "Item"}
                />
              </figure>
              <div className="card-body">
              <p > <span className="font-semibold text-xl"> Item Name : </span>  {card.name}</p>
                <h2 >Category: {card.category}</h2>   
                <p>Price: {card.price}</p>
                <p>Rating: {card.rating}</p>
                <div className="flex justify-between items-center">
                  <div className="flex gap-3">
                   <NavLink to={`/update/${card._id}`}> <button className="btn join-item bg-cyan-400 text-white font-semibold">Edit</button></NavLink>
                    <button
                      onClick={() => handledelete(card._id)}
                      className="btn join-item bg-red-500 text-white text-xl"
                    >
                      <MdDelete />
                    </button>
                  </div>
                  <div>
                    <NavLink to={`/details/${card._id}`}>
                      <button className="btn btn-neutral mt-2 ">View Details</button>
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyEquipment;
