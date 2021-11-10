
import { Button, TextField } from '@mui/material';
//import { Box } from '@mui/system';
import React, {useState} from 'react';
//import useAuth from '../../../hooks/useAuth';

const AddProducts = () => {
    //const {user} = useAuth();
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
        fetch('http://localhost:8000/products', {
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
       
        //Collect Data
        //Send data to server
        e.preventDefault();
    }

    return (
        
        <>
            <h2>Add Products</h2>
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
        </>
    
    );
};

export default AddProducts;