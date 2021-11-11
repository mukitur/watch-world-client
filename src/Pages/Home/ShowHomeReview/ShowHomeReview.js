import { Card, CardContent, Grid, Typography } from '@mui/material';
import React from 'react';

const ShowHomeReview = ({sreview}) => {
    const {orderName, email, review} = sreview;
    return (
        <div>
            <Grid item xs={4} sm={4} md={4}>
            <Card sx={{ minWidth: 275, border: 0, boxShadow: 0 }}>
                <CardContent>
                    <Typography variant="h5" component="div">
                        {orderName}
                    </Typography>
                    <Typography variant="h6" component="div">
                         {email}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {review}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
        </div>
    );
};

export default ShowHomeReview;