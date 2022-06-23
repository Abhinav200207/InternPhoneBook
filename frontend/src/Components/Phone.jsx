import React from 'react'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Button } from '@mui/material';
import './Phone.css'
import { useDispatch } from 'react-redux';
import { deleteContacts, getContacts } from '../Actions/action';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

export default function Phone({ id, first, last, number }) {
    const dispatch = useDispatch()
    const deleteContact = (id) => {
        dispatch(deleteContacts(id));
        dispatch(getContacts(""));
    }

    return (
        <div className="phone">
            <div style={{ "paddingLeft": "3%" }}>
                <div>{first} {last}</div>
                <div><LocalPhoneIcon style={{"width":"4%","height":"4%"}}/> {number}</div>
            </div>
            <Button onClick={() => deleteContact(id)} className="button" style={{ "marginRight": "3%", "backgroundColor": "rgba(254, 7, 77, 0.79)" }}>
                <DeleteOutlineIcon style={{ "color": "white" }} />
            </Button>
        </div>
    )
}
