import { Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ShowHomeReview from '../ShowHomeReview/ShowHomeReview';

const HomeReview = () => {
    const [allReviews, setAllReviews] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:8000/reviews')
            .then(res=>res.json())
            .then(data=>setAllReviews(data))
    } ,[])
    return (
        <div style={{marginBottom: '50px', padding: '50px'}}>
            <Typography  variant="h2" gutterBottom component="div">
                    User Review
            </Typography>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {
                    allReviews.map(sreview=><ShowHomeReview
                        key={sreview._id}
                        sreview={sreview}
                    ></ShowHomeReview>)
                }
            </Grid>
        </div>
    );
};

export default HomeReview;