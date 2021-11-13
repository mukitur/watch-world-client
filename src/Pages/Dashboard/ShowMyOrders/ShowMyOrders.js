import { Alert, Button, Card, CardContent, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';

const ShowMyOrders = ({odrs}) => {
    const [success, setSuccess] = useState(false);
    const {orderName, email, phone, address}= odrs;
    const handleDeleteUser = id => {
        const proceed = window.confirm('Are you sure? Do you want to delete the order?')
       if(proceed){
            const url = `https://sleepy-plains-06608.herokuapp.com/orders/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res=>res.json())
            .then(data=>{
                if(data.deletedCount>0){
                    setSuccess(true);
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
                {
                    success && <Alert severity="success">Successfully Deleted the Order!</Alert>
                }
        </Grid>
        </>
    );
};

export default ShowMyOrders;