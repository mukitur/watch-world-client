import { Alert, Button, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const Reviews = () => {
    const {user} = useAuth();
    const initialReviewInfo = {uName: user.displayName, email: user.email, review: ''}
    const [reviewInfo, setReviewInfo] = useState(initialReviewInfo);
    const [success, setSuccess] = useState(false);

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...reviewInfo };
        newInfo[field] = value;
        console.log(newInfo)
        setReviewInfo(newInfo);

    }
    const handleReviewSubmit = e => {
        const review = {...reviewInfo};
        //console.log(review) 
        fetch('https://sleepy-plains-06608.herokuapp.com/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
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
        <div>
            <Typography style={{marginTop:'15px'}} variant="h2" component="div" gutterBottom>
                Please Comment About Us
            </Typography>
            <form onSubmit={handleReviewSubmit}>
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
                    <br/>
                    {
                        success && <Alert severity="success"> Thank You. Successfully added your comments in our website!</Alert>
                    }
        </div>
    );
};

export default Reviews;