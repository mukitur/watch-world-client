import { Button, Card, CardContent, CardMedia, Grid, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
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

    //purchase order part start
    const initialOrderInfo = {productName: '', description: '', price: '', image: '' }
    const [orderInfo, setOrderInfo] = useState(initialOrderInfo);

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...orderInfo };
        newInfo[field] = value;
        console.log(newInfo)
        setOrderInfo(newInfo);

    }
    const handleProductSubmit = e => {
         alert('submitting');
        //const products = {...setOrderInfo};
        //console.log(products)
        /* fetch('http://localhost:8000/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(products)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            
        })
        */
        //Collect Data
        //Send data to server
        e.preventDefault();
    }

    return (
        <>  
            <Navigation></Navigation>
            <Typography style={{marginTop:'15px'}} variant="h2" component="div" gutterBottom>
                Shop Now
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Typography variant="h5" component="div" gutterBottom>
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

                    <form onSubmit={handleProductSubmit}>
                        <TextField
                            sx={{ width: '60%', m: 1 }}
                            id="outlined-size-small"
                            name="productName"
                            onBlur={handleOnBlur}
                            defaultValue="Product Name"
                            size="small"
                        /><br/>
                        <TextField
                            sx={{ width: '60%', m: 1 }}
                            id="outlined-size-small"
                            name="description"
                            onBlur={handleOnBlur}
                            defaultValue="Product Description"
                            size="small"
                        /><br/>
                        <TextField
                            sx={{ width: '60%', m: 1 }}
                            id="outlined-size-small"
                            name="price"
                            onBlur={handleOnBlur}
                            defaultValue="Product Price"
                            size="small"
                        /><br/>
                        <TextField
                            sx={{ width: '60%', m: 1 }}
                            id="outlined-size-small"
                            name="image"
                            onBlur={handleOnBlur}
                            defaultValue="Upload Image"
                            size="small"
                        />
                        <br/>
                        <Button type="submit" variant="contained">Purchase</Button>
                    </form>
                </Grid>
            </Grid>
        </>
    );
};

export default Shops;