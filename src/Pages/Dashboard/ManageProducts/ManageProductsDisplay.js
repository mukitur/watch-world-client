import { Alert, Button, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';


const ManageProductsDisplay = ({pd}) => {
    const [success, setSuccess] = useState(false);
    const {productName, image, price} = pd;

    const handleDeleteProducts = id =>{
        const proceed = window.confirm('Are you sure? Do you want to delete the product?')
       if(proceed){
            const url = `http://localhost:8000/products/${id}`;
            fetch(url, {
                method: 'DELETE',
                headers: {
                    'content-type': 'application/json'
                }
            })
            .then(res=>res.json())
            .then(data=>{
                if(data.deletedCount){
                    console.log(data)
                    setSuccess(true);
                }
            })
       }   
    }

    return (
        <Grid item xs={4} sm={4} md={4}>
            <Card sx={{ minWidth: 275, border: 1, boxShadow: 3 }}>
                <CardMedia
                    component="img"
                    style={{ width: '50%', height: '50%x', margin: '0 auto',padding:'5px' }}
                    image={image}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography variant="body2" component="div">
                        {productName}
                    </Typography>
                    <Typography variant="body2" component="div">
                        Price: BDT {price}
                    </Typography>
                </CardContent>
                <Button onClick={()=>handleDeleteProducts(pd._id)}>Delete Products</Button>
            
            </Card>
            {
                success && <Alert severity="success">Successfully Delete Product from Database.</Alert>
            }
        </Grid>
    );
};

export default ManageProductsDisplay;