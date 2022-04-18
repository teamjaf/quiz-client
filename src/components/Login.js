import React from 'react';
import { Box, Button, Card, CardContent, TextField } from '@mui/material';  
import Center from './Center';

export default function Login(){
    return(

        <Center>

            <Card sx={{
            width: '400px',

        }}>
            <CardContent>
            <Box sx={{
            '& .MuiTextField-root':{
                margin: 1,
                width: '90%',
            }
        }}>
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
                size="large"
                sx={{ width: '90%' }}
                >Start
            </Button>     
        </form>
            </Box>
            </CardContent>
            </Card>
            
        </Center>

        

      
    )
}