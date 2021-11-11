import { Button, Card, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const SingleProduct = ({product}) => {
    const {productName, description, image, price, _id} =product;
    return (
        <Grid item xs={4} sm={4} md={4}>
            <Card sx={{ minWidth: 275, border: 0, boxShadow: 0 }}>
                <CardMedia
                    component="img"
                    style={{ width: '50%', height: '50%x', margin: '0 auto',padding:'5px' }}
                    image={image}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography variant="h5" component="div">
                        {productName}
                    </Typography>
                    <Typography variant="h6" component="div">
                        Price: BDT {price}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description.slice(0,100)}
                    </Typography>
                </CardContent>
            </Card>
            <Link to = {`/shopping/${_id}`} style={{ textDecoration: 'none', color: 'black' }}>
                <Button variant="contained">Shop Now</Button>
            </Link>
        </Grid>
    );
};

export default SingleProduct;