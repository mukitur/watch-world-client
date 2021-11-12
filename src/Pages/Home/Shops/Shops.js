import { Alert, Button, Card, CardContent, CardMedia, Grid, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import Navigation from '../../Shared/Navigation/Navigation';

const Shops = ({product}) => {
    const [shops, setShops] = useState({});
    const [success, setSuccess] = useState(false);

    const {id} = useParams();
    const {user}= useAuth();
    //const {productName, description, image, price, id} = product;
    useEffect( ()=>{
        fetch(`http://localhost:8000/shopping/${id}`)
        .then(res=>res.json())
        .then(data=>setShops(data))
    }, [id])

    //purchase order part start

    const initialOrderInfo = {orderName: user.displayName, email: user.email, phone: '', address: '' }
    const [orderInfo, setOrderInfo] = useState(initialOrderInfo);

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...orderInfo };
        newInfo[field] = value;
        console.log(newInfo)
        setOrderInfo(newInfo);

    }
    const handleOrdertSubmit = e => {
        const order = {...orderInfo};
        console.log(order) 
        fetch('http://localhost:8000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.insertedId){
                setSuccess(true);
            }
        })
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
                        Shipping Details
                    </Typography>

                    <form onSubmit={handleOrdertSubmit}>
                    <TextField
                            disabled
                            sx={{ width: '60%', m: 1 }}
                            id="outlined-size-small"
                            name="orderName"
                            onBlur={handleOnBlur}
                            defaultValue={user.displayName}
                            size="small"
                        /><br/>
                        <TextField
                            disabled
                            sx={{ width: '60%', m: 1 }}
                            id="outlined-size-small"
                            name="email"
                            onBlur={handleOnBlur}
                            defaultValue={user.email}
                            size="small"
                        /><br/>
                        <TextField
                            sx={{ width: '60%', m: 1 }}
                            id="outlined-size-small"
                            name="phone"
                            onBlur={handleOnBlur}
                            defaultValue="Phone Number"
                            size="small"
                        /><br/>
                        <TextField
                            sx={{ width: '60%', m: 1 }}
                            id="outlined-size-small"
                            name="address"
                            onBlur={handleOnBlur}
                            defaultValue="Shipping Address"
                            size="small"
                        />
                        <br/>
                        <Button type="submit" variant="contained">Order Now</Button>
                    </form>
                    {
                        success && <Alert severity="success">Thank you. Successfully placed your Order!</Alert>
                    }
                </Grid>
            </Grid>
        </>
    );
};

export default Shops;