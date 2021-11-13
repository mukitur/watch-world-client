import { Grid } from '@mui/material';
import React from 'react';


const Banner = () => {
    const mainFeaturedPost = {
        title: 'Title of a longer featured blog post',
        description:
          "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
        image: 'https://source.unsplash.com/random',
        imageText: 'main image description',
        linkText: 'Continue reading…',
      };

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

export default Banner;