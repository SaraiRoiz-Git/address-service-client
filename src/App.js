
import './App.css';
import { useEffect } from 'react';
import { getAllAddress } from './axios/axios';
import { useDispatch } from 'react-redux';
import * as action from "./redux/actions/actions";
import { useState } from 'react';
import AutoCompleate from './components/AutoCompleate';

function App() {

  const dispatch = useDispatch()
  const [modal, setModal] = useState(false)
  const [errors, setErrors] = useState("")

  const callbackSuccess = response => {
    if (response) {
        dispatch(action.onEnter(response.data));
    }
}

const callbackFailur = (response) => {
    setErrors(response.response.data.message);
    setModal(true);
};
  useEffect(() => {
    getAllAddress(callbackSuccess, callbackFailur)
    
  }, [])
  return (
    <div className="App">
      <AutoCompleate></AutoCompleate>
    </div>
  );
}

export default App;
