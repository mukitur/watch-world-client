import * as React from 'react';
import { Grid } from '@mui/material';


const DashBoardHome = () => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} sm={5}>
                Home Page 1st Part
            </Grid>

            <Grid item xs={12} sm={7}>
                Home Page 2nd Part       
            </Grid>
        </Grid>
    );
};

export default DashBoardHome;