
import { Alert, Button, TextField, Typography } from '@mui/material';
//import { Box } from '@mui/system';
import React, {useState} from 'react';
//import useAuth from '../../../hooks/useAuth';

const AddProducts = () => {
    const [success, setSuccess] = useState(false);

    const initialInfo = {productName: '', description: '', price: '', image: '' }
    const [productInfo, setProductInfo] = useState(initialInfo);
    

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...productInfo };
        newInfo[field] = value;
        console.log(newInfo)
        setProductInfo(newInfo);

    }

    const handleProductSubmit = e => {
        // alert('submitting');
        const products = {...productInfo};
        console.log(products)
        fetch('https://sleepy-plains-06608.herokuapp.com/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(products)
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
            <Typography style={{marginTop:'15px'}} variant="h2" component="div" gutterBottom>
                Add a Product
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
            <Button type="submit" variant="contained">Add Products</Button>
        </form>
        <br/>
        {
            success && <Alert severity="success">Successfully Add Product in DataBase!</Alert>
        }
        </>
    );
};

export default AddProducts;