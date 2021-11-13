import React from 'react';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import paymentlogo from './../../../images/bank-logo.webp';

const Footer = () => {
    return (
        <div style={{backgroundColor: 'black', paddingTop: "20px"}}>

            {/* footer */}
            <Grid container spacing={2}>
                <Grid style={{color: 'white', paddingTop: '50px', paddingBottom: '50px'}} item xs={12} sm={4}>
                    <Typography variant="overline" display="block" gutterBottom>
                        About Us
                    </Typography>
                    <Typography style={{ alignItems: "left"}} variant="subtitle2" gutterBottom component="div">
                        About Us <br/>
                        Order Tracking
                    </Typography>
                </Grid>
                <Grid style={{color: 'white', paddingTop: '50px', paddingBottom: '50px'}} item xs={12} sm={4}>
                    <Typography variant="overline" display="block" gutterBottom>
                        Customer Service
                    </Typography>
                    <Typography style={{ alignItems: "left"}} variant="subtitle2" gutterBottom component="div">
                        Terms & Conditions <br/>
                        Return Policy <br/>
                        Privacy Policy <br/>
                        Cookie Policy
                    </Typography>
                </Grid>
                <Grid style={{color: 'white', paddingTop: '50px', paddingBottom: '50px'}} item xs={12} sm={4}>
                    <Typography variant="overline" display="block" gutterBottom>
                        Get In Touch
                    </Typography>
                    <Typography style={{ alignItems: "left"}} variant="subtitle2" gutterBottom component="div">
                        House#20, Road# 02, Sector#11, Uttara, Dhaka-1230.
                    </Typography>
                    <Typography style={{ alignItems: "left"}} variant="h6" gutterBottom component="div">
                        info@smartwatchworld.com
                    </Typography>
                </Grid>
            </Grid>
            {/* Copyright */}
            <Grid container spacing={2}>
                <Grid style={{color: 'white', paddingTop: '20px'}} item xs={12} sm={12}>
                    <Typography variant="overline" display="block" gutterBottom>
                        <img src={paymentlogo} alt=""/><br/>
                        Copyright@ 2021. Smart Watch World. All rights reserved.
                    </Typography>
                    
                </Grid>
                
            </Grid>
        </div>
    );

};

export default Footer;