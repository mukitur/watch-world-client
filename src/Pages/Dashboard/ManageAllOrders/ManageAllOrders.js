import React, { useEffect, useState } from 'react';

const ManageAllOrders = () => {
    const [manageAllOrder, setManageAllOrder] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:8000/orders')
            .then(res=>res.json())
            .then(data=>setManageAllOrder(data))
    } ,[])
    return (
        <div>
            <h2>Manage All Orders {manageAllOrder.length}</h2>
        </div>
    );
};

export default ManageAllOrders;