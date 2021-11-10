import { Alert, Button, TextField } from '@mui/material';
import React, {useState} from 'react';
import useAuth from '../../../hooks/useAuth';

const MakeAdmin = () => {
    const {user} = useAuth();
    const initialInfo = { userName: user.displayName, email: user.email, phone: '' }
    const [peoductInfo, setPeoductInfo] = useState(initialInfo);
    

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...peoductInfo };
        newInfo[field] = value;
        setPeoductInfo(newInfo);
    }
    const handleBookingSubmit = e => {
        Alert('submitting')
        //Collect Data
        //Send data to server
        e.preventDefault();
    }

    return (
       <>
       <h2>Create Admin</h2>
        <form onSubmit={handleBookingSubmit}>
            <TextField
                sx={{ width: '70%', m: 1 }}
                id="outlined-size-small"
                name="email"
                onBlur={handleOnBlur}
                defaultValue={user.email}
                size="small"
            />
            <br/>
            <Button type="submit" variant="contained">Make Admin</Button>
        </form>
       </>
    );
};

export default MakeAdmin;