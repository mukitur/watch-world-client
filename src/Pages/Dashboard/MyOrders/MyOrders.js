import { Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import ShowMyOrders from '../ShowMyOrders/ShowMyOrders';

const MyOrders = () => {
    const [myAllOrders, setMyAllOrders] = useState([]);
    const {user} =useAuth();
    useEffect(()=>{
        fetch('https://nameless-crag-53038.herokuapp.com/orders')
            .then(res=>res.json())
            .then(data=>setMyAllOrders(data))
    } ,[])

    //filter only my orders
    const getMyOrders = myAllOrders.filter(od=>od.email === user?.email)

    return (
        <div>
            <Typography variant="h2" component="div" gutterBottom>
                My Order Details
            </Typography>
            <Typography variant="h5" component="div" gutterBottom>
                Total Orders {getMyOrders.length}
            </Typography>
            
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {
                    getMyOrders.map(odrs=><ShowMyOrders
                        key={odrs._id}
                        odrs={odrs}
                    ></ShowMyOrders>)
                }
            </Grid>
        </div>
    );
};

export default MyOrders;