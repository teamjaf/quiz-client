import React from 'react';
import { Button, TextField } from '@mui/material';  

export default function Login(){
    return(
        <form novalidate autocomplete="off">
            <TextField 
                label="Email"
                name="email"
                variant="outlined">            
            </TextField> 
            <TextField 
                label="Name"
                name="name"
                variant="outlined">            
            </TextField> 
            <Button
                type="submit"
                variant="contained"
                size="large">Start
            </Button>
        </form>
    )
}