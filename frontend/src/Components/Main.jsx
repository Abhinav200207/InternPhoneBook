import React from 'react'
import TextField from '@mui/material/TextField'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import { InputAdornment } from '@mui/material'
import './Main.css'
import Phone from './Phone';

const Main = () => {
    return (
        <div className="main">
            <TextField
                style={{"marginBottom":"2%"}}
                fullWidth
                id="filled-textarea"
                label="Search Contacts"
                placeholder="Search By Name or Number"
                multiline
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchRoundedIcon />
                        </InputAdornment>
                    ),
                }}
                variant="filled"
            />
            <Phone />
            <Phone />
            <Phone />
            <Phone />
            <Phone />
            <Phone />
            <Phone />
            <Phone />
            <Phone />
        </div>
    )
}

export default Main