import { AccountBoxRounded, AddToPhotosOutlined } from '@mui/icons-material'
import { Button } from '@mui/material'
import React from 'react'
import './Header.css'

const Header = () => {
    return (
        <div>
            <div className="header">
                <AccountBoxRounded style={{"fontSize":"35px","paddingRight":"20px","fontStyle":"italic"}} /><div style={{"fontSize":"30px"}}>Phone Book App</div>
            </div>
            <div className='lower'>
                <div style={{"fontSize":"30px","fontWeight":"bold"}}>Contacts</div>
                <div>
                    <Button variant="contained" style={{"fontSize":"20px"}}>
                        <AddToPhotosOutlined /> Add Contacts
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Header