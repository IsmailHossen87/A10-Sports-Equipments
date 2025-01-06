import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { NavLink, useLoaderData } from "react-router-dom";

const AllSports = () => {
  const data = useLoaderData();
  const [sortedData,setSortedData] = useState(data)
  const handleSortbyPrice = ()=>{
    const sort = [...sortedData].sort((a,b)=> a.price - b.price)
    setSortedData(sort)
  }
  return (
    <>
    <Helmet>
      <title>All Sports || Sports</title>
      <meta name="description" content="Helmet application" />
      </Helmet>
      <div className="pl-4 my-8">
          <div className="overflow-x-auto">
            <div><button onClick={handleSortbyPrice} className="btn  btn-primary">Sort by Price</button></div>
            <table className="table table-zebra">
              {/* head */}
              <thead>
                <tr>
                  <th>No</th>
                  <th>Name</th>
                  <th>Category</th>
                  <th>Rating</th>
                  <th>StockStatus</th>
                  <th>Price</th>
                  <th>Details</th>
                </tr>
              </thead>
             {
                sortedData.length === 0? <p>No Data Available</p> : sortedData?.map((tab,index) =>
                    <tbody >
                    <tr>
                      <th>{index + 1}</th>
                      <td className="flex items-center gap-2 ">
                        <div className="w-[40px] "><img className="bg-gray-300 p-1 rounded-full " src={tab.photo} alt="" /></div>
                        {tab.name}</td>
                      <td>{tab.category}  </td>
                      <td>{tab.rating}  </td>
                      
                      <td>{tab.stockStatus}</td>
                      <td>{tab.price}</td>
                      <td><NavLink to={`/details/${tab._id}`}><button className="btn btn-neutral">Details</button></NavLink></td>
                    </tr>
                  </tbody>
                )
                
             }
            </table>
          </div>
      </div>
    </>
  );
};

export default AllSports;
