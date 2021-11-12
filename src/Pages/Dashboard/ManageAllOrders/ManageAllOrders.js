import { Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ShowAllManageOrder from '../ShowAllManageOrder/ShowAllManageOrder';

const ManageAllOrders = () => {
    const [manageAllOrder, setManageAllOrder] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:8000/orders')
            .then(res=>res.json())
            .then(data=>setManageAllOrder(data))
    } ,[])
    return (
        <div>
            <Typography variant="h2" component="div" gutterBottom>
                Manage All Orders
            </Typography>
            <Typography variant="h5" component="div" gutterBottom>
                Total Orders {manageAllOrder.length}
            </Typography>
            
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {
                    manageAllOrder.map(odr=><ShowAllManageOrder
                        key={odr._id}
                        odr={odr}
                    ></ShowAllManageOrder>)
                }
            </Grid>
        </div>
    );
};

export default ManageAllOrders;