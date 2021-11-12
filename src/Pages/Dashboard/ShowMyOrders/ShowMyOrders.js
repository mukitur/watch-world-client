import { Button, Card, CardContent, Grid, Typography } from '@mui/material';
import React from 'react';

const ShowMyOrders = ({odrs}) => {
    const {orderName, email, phone, address}= odrs;
    const handleDeleteUser = id => {
        const proceed = window.confirm('Are you sure? Do you want to delete the order?')
       if(proceed){
            const url = `http://localhost:8000/orders/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res=>res.json())
            .then(data=>{
                if(data.deletedCount>0){
                    alert('Deleted Order Successfully')
                    /* const remainingOrder = usersOd.filter(user => user._id !== id);
                    console.log(remainingOrder);
                    setUsersOd(remainingOrder) */
                }
            })
       }
    }
    return (
        <>
            <Grid item xs={4} sm={4} md={4}>
            <Card sx={{ minWidth: 275, border: 1, boxShadow: 2 }}>
                <CardContent>
                    <Typography variant="subtitle1" component="div">
                        User Name: {orderName}
                    </Typography>
                    <Typography variant="subtitle1" component="div">
                        Email: {email}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Phone: {phone}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Address: {address}
                    </Typography>
                </CardContent>
                <Button onClick={()=>handleDeleteUser(odrs._id)}>Delete Order</Button>
            </Card>
        </Grid>
        </>
    );
};

export default ShowMyOrders;