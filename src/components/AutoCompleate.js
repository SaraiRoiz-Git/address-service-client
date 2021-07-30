import { TextField } from '@material-ui/core'
import { Autocomplete } from '@material-ui/lab'
import Button from '@material-ui/core/Button';
import { useDispatch, useSelector } from "react-redux";
import React from 'react'

export default function AutoCompleate() {

    const dispach = useDispatch()
    const autoCompleteOptions = useSelector(state => state.locationOptions);

    function onInputSelected(event, newValue) {
        if (newValue) {
        }
    }

    function onInputChange(event) {

    }
    return (
        <div>
            <Autocomplete
                className='search-bar'
                id="combo-box-demo"
                options={autoCompleteOptions ? autoCompleteOptions : []}
                getOptionLabel={(option) => `${option.LocalizedName}, ${option.Country.LocalizedName}`}
                onChange={(event, newValue) => onInputSelected(event, newValue)}
                renderInput={(params) => <TextField {...params} label="Search" variant="outlined" onChange={onInputChange} />}
            />
            <Button variant="contained" color="primary" onClick={() => { alert('clicked') }}>
                Submit
            </Button>
        </div>
    )
}

