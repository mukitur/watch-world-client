import { Button, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ManageProductsDisplay from './ManageProductsDisplay';

const ManageProducts = () => {
    const [manageAdminProducts, setManageAdminProducts] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:8000/products')
            .then(res=>res.json())
            .then(data=>setManageAdminProducts(data))
    } ,[])

   
    return (
        <>
            <Typography variant="h2" gutterBottom component="div">
                Manage Products
            </Typography>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {
                    manageAdminProducts.map(pd=><ManageProductsDisplay
                        key={pd._id}
                        pd={pd}
                    ></ManageProductsDisplay>)
                }
            </Grid>
        </>
    );
};

export default ManageProducts;