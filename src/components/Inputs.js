import { Button } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import { useState } from 'react';
import styled from 'styled-components';
import { getNearbyAddress } from '../axios/axios';

export default function AutoCompleate() {

    const [address, setAddress] = useState("")
    const [people, setPeople] = useState(3);
    const [nearbyAdress, setNearbyAdress] = useState([])

    const displayClosestPeople = () => {
        getNearbyAddress(callbackSuccess, callbackFailur, address, people)
    }

    const callbackSuccess = response => {
        if (response) {
            console.log("data response", response)
            setAddress(response)
        }
    }

    const callbackFailur = (response) => {
        console.log("Error",response)
        //alert(Error, response)
    };

    return (
        <Container>
            <TextField id="outlined-basic" label="Add an address" variant="outlined" onChange={(e) => setAddress(e.target.value)} />
            <TextField type="number" id="outlined-basic" label="Add an address" variant="outlined" onChange={(e) => setPeople(e.target.value)} />

            <Btn>
                <Button variant="contained" color="primary" onClick={displayClosestPeople }>
                    Submit
                </Button>
            </Btn>

        </Container>
    )
}

const Container = styled.div`
display:flex;
align-items: center;
`
const Btn = styled.div`
`
