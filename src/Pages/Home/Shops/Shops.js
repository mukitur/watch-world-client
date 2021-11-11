import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';

const Shops = ({product}) => {
    const [shops, setShops] = useState({});
    const {id} = useParams();
    //const {productName, description, image, price, id} = product;
    useEffect( ()=>{
        fetch(`http://localhost:8000/shopping/${id}`)
        .then(res=>res.json())
        .then(data=>setShops(data))
    }, [])

    return (
        <>  
            <Navigation></Navigation>
            <Typography style={{marginTop:'15px'}} variant="h2" component="div" gutterBottom>
                Shop Now
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Typography variant="h4" component="div" gutterBottom>
                    Purchase {shops.productName}
                    </Typography>
                    <Card sx={{ minWidth: 275, border: 0, boxShadow: 0 }}>
                        <CardMedia
                            component="img"
                            style={{ width: '50%', height: '50%x', margin: '0 auto',padding:'5px' }}
                            image={shops.image}
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography variant="h5" component="div">
                                {shops.productName}
                            </Typography>
                            <Typography variant="h6" component="div">
                                Price: BDT {shops.price}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {shops.description}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography variant="h5" gutterBottom component="div">
                        Please fillup the form below to complete the order.
                    </Typography>
                </Grid>
            </Grid>
        </>
    );
};

export default Shops;