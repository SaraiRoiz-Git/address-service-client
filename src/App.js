
import './App.css';
import { useEffect, useState } from 'react';
import { getAllAddress } from './axios/axios';
import { useDispatch } from 'react-redux';
import * as action from "./redux/actions/actions";
import AutoCompleate from './components/Inputs';
import AddressTable from './components/AddressTable';
import styled from 'styled-components'

export default function App() {

  const dispatch = useDispatch()

  const callbackSuccess = response => {
    if (response) {
      // console.log("response.data",response.data)
      dispatch(action.onEnter(response.data));
    }
  }

  const callbackFailur = (response) => {
    alert(Error,response)
  };
  useEffect(() => {
    // getAllAddress(callbackSuccess, callbackFailur)

  }, [])
  return (
    <Container>
      <Title>Address nearby</Title>
      <SubTitle>Please choose an address and number of people nearby:</SubTitle> 
        <AutoCompleate></AutoCompleate>
        <AddressTable></AddressTable>
  
    </Container>

  );
}



const Container = styled.div`
margin: auto;
width: 60vw;
`
const Title = styled.h1`
font-weight: 300;
`
const SubTitle = styled.h3`
font-weight: 300;
`