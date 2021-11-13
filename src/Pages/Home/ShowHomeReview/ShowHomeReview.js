import { Card, CardContent, Grid, Typography } from '@mui/material';
import React from 'react';

const ShowHomeReview = ({sreview}) => {
    const {uName, review} = sreview;
    const [value, setValue] = React.useState(3);
    return (
        <>  
            <Grid item xs={12} md={4}>
            <Card sx={{ minWidth: 275, border: 0, boxShadow: 2 }}>
                <CardContent>
                    <Typography variant="h5" component="div">
                        {uName}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {review}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
        </>
    );
};

export default ShowHomeReview;