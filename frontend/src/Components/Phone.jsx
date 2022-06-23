import React from 'react'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Button } from '@mui/material';
import './Phone.css'
import { useDispatch } from 'react-redux';
import { deleteContacts } from '../Actions/action';

export default function Phone({ id, first, last, number }) {
    const dispatch = useDispatch()
    const deleteContact = (id) => {
        dispatch(deleteContacts(id));
        window.location.reload(false);
    }

    return (
        <div className="phone">
            <div style={{ "paddingLeft": "3%" }}>
                <div>{first} {last}</div>
                <div>{number}</div>
            </div>
            <Button onClick={()=>deleteContact(id)} className="button" style={{ "marginRight": "3%", "backgroundColor": "rgba(254, 7, 77, 0.79)" }}>
                <DeleteOutlineIcon style={{ "color": "white" }} />
            </Button>
        </div>
    )
}
