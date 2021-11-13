import { Button, TextField, Typography } from '@mui/material';
import React from 'react';

const SubscribeUs = () => {
    return (
        <div style={{padding: '50px', backgroundColor: "#f8f8f8"}}>
            <Typography variant="h3" gutterBottom component="div">
                Subscribe our Newsletter
            </Typography>
            <Typography variant="overline" gutterBottom component="div">
                Please subscribe for latest product, news and stay updated.
            </Typography>
            <form>
                        <TextField
                            sx={{ width: '40%', m: 1 }}
                            
                            label="Email"
                            type="email"
                            variant="standard"
                            size="small"
                        /><br/>
                        <Button type="submit" variant="contained">Subscribe</Button>
                    </form>
        </div>
    );
};

export default SubscribeUs;