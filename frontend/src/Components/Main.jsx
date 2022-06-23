import React, { useEffect } from 'react'
import TextField from '@mui/material/TextField'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import { CircularProgress, InputAdornment } from '@mui/material'
import './Main.css'
import Phone from './Phone';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from '../Actions/action';

const Main = () => {
    const { message, loading } = useSelector(state => state.phonereducer)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getContacts(""));
    }, [dispatch]);

    const searchChange = (e) => {
        dispatch(getContacts(e.target.value));
    }

    return (
        <div className="main">
            <TextField
                onChange={(e) =>searchChange(e)}
                style={{ "marginBottom": "2%" }}
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
            {loading === true ? (<CircularProgress color="success" />) : (
                message && message.length > 0 ? (
                    message.map((data) => <Phone key={data._id} id={data._id} first={data.first} last={data.last} number={data.number} />)
                ) : (<div>Nothing To show</div>)
            )}
        </div>
    )
}

export default Main