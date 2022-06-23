import React from 'react'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Button } from '@mui/material';
import './Phone.css'

export default function Phone() {
    return (
        <div className="phone">
            <div style={{"paddingLeft":"3%"}}>
                <div>Abhinav Kumar Maurya</div>
                <div>8130650889</div>
            </div>
            <Button className="button" style={{"marginRight":"3%","backgroundColor":"rgba(254, 7, 77, 0.79)"}}>
                <DeleteOutlineIcon style={{"color":"white"}}/>
            </Button>
        </div>
    )
}
