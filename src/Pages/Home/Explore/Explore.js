import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import SingleProduct from '../SingleProduct/SingleProduct';

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
            <h2>Total Products {products.length}</h2>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {
                    products.map(product=><SingleProduct
                        key={product._id}
                        product={product}
                    ></SingleProduct>)
                }
            </Grid>
        </>
    );
};

export default Explore;