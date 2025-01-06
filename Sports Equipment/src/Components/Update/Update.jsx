import React, { useContext } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Update = () => {
    const data = useLoaderData()
    const navigate = useNavigate()
    const {user} = useContext(AuthContext)
    const {_id,photo, customization,email,stockStatus,processingTime,rating,price,description,category,name} = data
 

    const handleUpdate = (event)=>{
        event.preventDefault();
        const form = event.target;
        const equipment = {
            photo: form.photo.value,
            name: form.name.value,
            category: form.category.value,
            description: form.description.value,
            price: form.price.value,
            rating: form.rating.value,
            customization: form.customization.value,
            processingTime: form.processingTime.value,
            stockStatus: form.stockStatus.value,
            email:email
        };

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Update it!"
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://server-jade-sigma.vercel.app/sports/${_id}`,{
                    method:'PATCH',
                    headers:{
                        "content-type" : 'application/json'
                    },
                    body:JSON.stringify(equipment)
                })
                .then(res=> res.json())
                .then(data => {
                  
                        if(data.modifiedCount > 0 ){
                            Swal.fire({
                                title: "Sucess!",
                                text: "Your file has been deleted.",
                                icon: "success"
                             });
                        }
                        navigate('/myEquipment')
                })
            }
          });
    }
    return (
        <div className="md:w-3/4 mx-auto my-5">
        <div className="bg-slate-200 p-5">
            <h2 className="md:text-5xl text-2xl font-extrabold text-center mb-3">
                Update Equipment
            </h2>
            <p className="text-lg text-center mb-3">
                Information to update a change equipment item.
            </p>
            <form onSubmit={handleUpdate}>
                {/* Row 1: Photo and Item Name */}
                <div className="flex flex-col md:flex-row gap-4 mb-4">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Image (Photo URL)</span>
                        </label>
                        <input
                            type="url"
                            name="photo"
                            defaultValue={photo}
                            placeholder="Enter photo URL"
                            className="input input-bordered w-full"
                            required
                        />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Item Name</span>
                        </label>
                        <input
                            type="text"
                            name="name"
                            defaultValue={name}
                            placeholder="Enter item name"
                            className="input input-bordered w-full"
                            required
                        />
                    </div>
                </div>

                {/* Row 2: Category and Description */}
                <div className="flex flex-col md:flex-row gap-4 mb-4">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Category Name</span>
                        </label>
                        <input
                            type="text"
                            name="category"
                            defaultValue={category}
                            placeholder="Enter category name"
                            className="input input-bordered w-full"
                            required
                        />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <textarea
                            name="description"
                            placeholder="Enter description"
                            defaultValue={description}
                            className="textarea textarea-bordered w-full"
                            required
                        ></textarea>
                    </div>
                </div>

                {/* Row 3: Price and Rating */}
                <div className="flex flex-col md:flex-row gap-4 mb-4">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input
                            type="number"
                            name="price"
                            defaultValue={price}
                            placeholder="Enter price"
                            className="input input-bordered w-full"
                            required
                        />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <input
                            type="number"
                            name="rating"
                            defaultValue={rating}
                            placeholder="Enter rating (1-5)"
                            className="input input-bordered w-full"
                            min="1"
                            max="5"
                            required
                        />
                    </div>
                </div>

                {/* Row 4: Customization and Processing Time */}
                <div className="flex flex-col md:flex-row gap-4 mb-4">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Customization</span>
                        </label>
                        <input
                            type="text"
                            defaultValue={customization}
                            name="customization"
                            placeholder="E.g., bat with extra grip, hit paper"
                            className="input input-bordered w-full"
                        />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Processing Time</span>
                        </label>
                        <input
                            type="text"
                            defaultValue={processingTime}
                            name="processingTime"
                            placeholder="E.g., 3-5 days"
                            className="input input-bordered w-full"
                            required
                        />
                    </div>
                </div>

                {/* Row 5: Stock Status */}
                <div className="form-control mb-4">
                    <label className="label">
                        <span className="label-text">Stock Status</span>
                    </label>
                    <input
                        type="number"
                        name="stockStatus"
                        defaultValue={stockStatus}
                        placeholder="Enter available product quantity"
                        className="input input-bordered w-full"
                        required
                    />
                </div>
                {/* email */}
                <div className="form-control mb-4">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input
                        disabled
                        type="text"
                        name="email"
                        defaultValue={email}
                        className="input input-bordered w-full"
                        required
                    />
                </div>
                {/* Submit Button */}
                <button
                    type="submit"
                    className="btn btn-block bg-gray-300"
                >
                    Update Equipment
                </button>
            </form>
        </div>
    </div>
    );
};

export default Update;