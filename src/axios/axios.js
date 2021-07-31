import axios from 'axios';
import { URL } from "../constants";

axios.defaults.baseURL = URL;

export const getNearbyAddress = async (callbackSuccess, callbackFailur, address, number) => {

    axios.get('/nearby-address-list', { params: { address: address, number: number }, headers: { 'Content-Type': 'application/json' } })
        .then(response => {
            callbackSuccess(response);
        })
        .catch(response => {
            callbackFailur(response);
        });
};




