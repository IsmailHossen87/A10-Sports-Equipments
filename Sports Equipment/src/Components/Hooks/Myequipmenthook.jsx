import { useContext, useEffect, useState } from 'react';

import { AuthContext } from '../AuthProvider/AuthProvider';

const Myequipmenthook = () => {
    const {user} = useContext(AuthContext)
    const [data,setData] = useState([])
    console.log(data)
    useEffect(()=>{
        fetch(`https://server-jade-sigma.vercel.app/cart?email=${user?.email}`)
        .then(res =>res.json())
        .then(data=>{
            setData(data)
        })
    },[user?.email])
    return [data]
};

export default Myequipmenthook;