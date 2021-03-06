import { Button, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SingleProduct from '../SingleProduct/SingleProduct';

const Products = () => {
    const [allProducts, setAllProducts] = useState([]);
    useEffect(()=>{
        fetch('https://sleepy-plains-06608.herokuapp.com/products/home')
            .then(res=>res.json())
            .then(data=>setAllProducts(data))
    } ,[])
    return (
        <div style={{marginTop: '10px', paddingLeft: '50px', paddingRight: '50px'}}>
            <Typography variant="h2" gutterBottom component="div">
                Our Collections
            </Typography>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {
                    allProducts.map(product=><SingleProduct
                        key={product._id}
                        product={product}
                    ></SingleProduct>)
                }
            </Grid>
            <br/>
            <Link to ="/explore" style={{ textDecoration: 'none', color: 'black', paddingBottom: '15px' }}><Button variant="outlined">Explore All Products</Button></Link>
        </div>
    );
};

export default Products;