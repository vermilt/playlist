import React, { useState } from 'react';
import './SearchBar.css';
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';

export default function SearchBar(params) {
    return (
        <form>  
            <TextField id="outlined-basic" label="Find a song" variant="outlined" />
            <Button variant="contained">Search</Button>
        </form> 
        );
    };