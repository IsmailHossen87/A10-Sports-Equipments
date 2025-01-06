import React, { useEffect, useState } from 'react';
import { data } from 'react-router-dom';

const CategoriesHook = () => {
    const [data,setData] = useState()
    // console.log(data)
    useEffect(()=>{
      fetch('https://server-jade-sigma.vercel.app/sportsAll')
      .then(res => res.json())
      .then(data =>{
        setData(data)
      })
    },[data])
    return [data]
};
export default CategoriesHook;