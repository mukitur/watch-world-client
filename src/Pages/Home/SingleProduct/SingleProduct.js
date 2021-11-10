import { Button, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';

const SingleProduct = ({product}) => {
    const {productName, description, image, price} =product;
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
                        {description}
                    </Typography>
                </CardContent>
            </Card>
            <Button variant="contained">Shop Now</Button>
        </Grid>
    );
};

export default SingleProduct;