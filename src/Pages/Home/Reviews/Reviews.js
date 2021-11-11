import { Button, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const Reviews = () => {
    const {user} = useAuth();
    const initialReviewInfo = {orderName: user.displayName, email: user.email, phone: ''}
    const [reviewInfo, setReviewInfo] = useState(initialReviewInfo);

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...reviewInfo };
        newInfo[field] = value;
        console.log(newInfo)
        setReviewInfo(newInfo);

    }
    const handleOrdertSubmit = e => {
        e.preventDefault();
    }

    return (
        <div>
            <Typography style={{marginTop:'15px'}} variant="h2" component="div" gutterBottom>
                Please Comment About Our Products
            </Typography>
            <form onSubmit={handleOrdertSubmit}>
                    <TextField
                            disabled
                            sx={{ width: '60%', m: 1 }}
                            id="outlined-size-small"
                            name="uName"
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
                            name="review"
                            onBlur={handleOnBlur}
                            defaultValue="Your Comments"
                            size="large"
                        /><br/>
                        <Button type="submit" variant="contained">Submit Review</Button>
                    </form>
        </div>
    );
};

export default Reviews;