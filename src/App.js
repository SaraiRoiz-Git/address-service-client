
import './App.css';
import Inputs from './components/Inputs';
import styled from 'styled-components'

export default function App() {

  return (
    <Container>
      <Title>Address nearby</Title>
      <SubTitle>Please choose an address and number of people nearby:</SubTitle>
     <Inputs></Inputs>
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