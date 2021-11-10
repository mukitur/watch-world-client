
import { Alert, Button, TextField, Typography } from '@mui/material';
//import { Box } from '@mui/system';
import React, {useState} from 'react';
//import useAuth from '../../../hooks/useAuth';

const AddProducts = () => {
    //const {user} = useAuth();
    const initialInfo = {productName: '', description: '', price: '', image: '' }
    const [peoductInfo, setPeoductInfo] = useState(initialInfo);
    

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...peoductInfo };
        newInfo[field] = value;
        console.log(newInfo)
        setPeoductInfo(newInfo);

    }

    const handleBookingSubmit = e => {
        alert('submitting');
        //Collect Data
        //Send data to server
        e.preventDefault();
    }

    return (
        
        <>
            <h2>Add Products</h2>
            <form onSubmit={handleBookingSubmit}>
            <TextField
                sx={{ width: '60%', m: 1 }}
                id="outlined-size-small"
                name="productName"
                defaultValue='Product Name'
                size="small"
            />
            <br/>
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