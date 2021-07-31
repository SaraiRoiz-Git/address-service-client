import { Button, Table } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getNearbyAddress } from '../axios/axios';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';

export default function Inputs() {

    const [address, setAddress] = useState("")
    const [people, setPeople] = useState(3);
    const [nearbyAddress, setNearbyAddress] = useState([])

    const displayClosestPeople = () => {
        getNearbyAddress(callbackSuccess, callbackFailur, address, people)
    }

    const callbackSuccess = response => {
        if (response) {
            setNearbyAddress(response.data)
        }
    }

    const callbackFailur = (response) => {
        alert(Error, response)
    };

    const classes = useStyles();
    return (
        <div>
            <Container>
                <TextField id="outlined-basic" label="Add an address" variant="outlined" onChange={(e) => setAddress(e.target.value)} />
                <TextField type="number" id="outlined-basic" label="Add an address" variant="outlined" onChange={(e) => setPeople(e.target.value)} />

                <Btn>
                    <Button variant="contained" color="primary" onClick={displayClosestPeople}>
                        Submit
                    </Button>
                </Btn>
            </Container>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Name</StyledTableCell>
                            <StyledTableCell >Adderess</StyledTableCell>
                            <StyledTableCell align="right">Distance</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {nearbyAddress.map((row) => (
                            <StyledTableRow key={row.name}>
                                <StyledTableCell component="th" scope="row">
                                    {row.name}
                                </StyledTableCell>
                                <StyledTableCell >{row.address}</StyledTableCell>
                                <StyledTableCell align="right">{row.distanceText}</StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>

    )
}
const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

const useStyles = makeStyles({
    table: {
        minWidth: 300,
    },
});


const Container = styled.div`
display:flex;
align-items: center;
`
const Btn = styled.div`
`
