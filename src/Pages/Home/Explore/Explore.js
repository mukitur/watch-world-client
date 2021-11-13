import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import SingleProduct from '../SingleProduct/SingleProduct';
import Footer from '../../Shared/Footer/Footer';

const Explore = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:8000/products')
            .then(res=>res.json())
            .then(data=>setProducts(data))
    } ,[])
    return (
        <>
            <Navigation></Navigation>
            <Typography variant="h2" gutterBottom component="div">
                Explore All Products
            </Typography>
            <Typography variant="overline" display="block" gutterBottom>
                Total Products Found {products.length}
            </Typography>
            <Box style={{paddingLeft: '50px', paddingRight: '50px'}}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {
                    products.map(product=><SingleProduct
                        key={product._id}
                        product={product}
                    ></SingleProduct>)
                }
            </Grid>
            </Box>
            <Footer></Footer>
        </>
    );
};

export default Explore;