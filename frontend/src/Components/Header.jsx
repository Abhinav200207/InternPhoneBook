import { AccountBoxRounded, AddToPhotosOutlined } from '@mui/icons-material'
import { Button } from '@mui/material'
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import React from 'react'
import './Header.css'
import { useDispatch } from 'react-redux';
import { createContact, getContacts } from '../Actions/action';

const Header = () => {
    const [open, setOpen] = React.useState(false);
    const [first, setFirst] = React.useState('');
    const dispatch = useDispatch();
    const [last, setLast] = React.useState('');
    const [number, setNumber] = React.useState('');

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setOpen(false);
        dispatch(createContact(first, last, number));
        dispatch(getContacts(""));
    }

    return (
        <div>
            <div className="header">
                <AccountBoxRounded style={{ "fontSize": "35px", "paddingRight": "20px", "fontStyle": "italic" }} /><div style={{ "fontSize": "30px" }}>Phone Book App</div>
            </div>
            <div className='lower'>
                <div style={{ "fontSize": "30px", "fontWeight": "bold" }}>Contacts</div>
                <div>
                    <Button onClick={handleClickOpen} variant="contained" style={{ "fontSize": "20px" }}>
                        <AddToPhotosOutlined /> Add Contacts
                    </Button>
                </div>
            </div>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Required Information</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Please enter first name, last name and phone number
                    </DialogContentText>
                    <TextField
                        autoFocus
                        onChange={(e) => setFirst(e.target.value)}
                        margin="dense"
                        id="name"
                        label="First Name"
                        type="text"
                        fullWidth
                        required
                        variant="standard"
                    />
                    <TextField
                        autoFocus
                        onChange={(e) => setLast(e.target.value)}
                        margin="dense"
                        id="name"
                        required
                        label="Last Name"
                        type="text"
                        fullWidth
                        variant="standard"
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        required={true}
                        onChange={(e) => setNumber(e.target.value)}
                        label="Enter Number"
                        type="text"
                        fullWidth
                        variant="standard"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleSubmit}>Submit</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default Header