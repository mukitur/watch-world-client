import { Card, CardContent, Grid, Typography } from '@mui/material';
import React from 'react';

const ShowAllManageOrder = ({odr}) => {
    const {orderName, email, phone, address}= odr;
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
            </Card>
        </Grid>
        </>
    );
};

export default ShowAllManageOrder;