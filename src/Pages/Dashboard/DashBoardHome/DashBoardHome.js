import * as React from 'react';
import { Grid } from '@mui/material';
import MyOrders from '../MyOrders/MyOrders';
import Reviews from '../../Home/Reviews/Reviews';

const DashBoardHome = () => {
    return (
        <>
            <h2>Welcome to Dashboard!</h2>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12}>
                    <MyOrders></MyOrders>
                    <Reviews></Reviews>
                </Grid>
            </Grid>
        </>
    );
};

export default DashBoardHome;