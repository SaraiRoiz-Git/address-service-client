import axios from 'axios';
import { URL } from "../constants";

axios.defaults.baseURL = URL;

export const getAllAddress = async (callbackSuccess, callbackFailur) => {
    axios.get('/address-list')
        .then(response => {
            callbackSuccess(response.data)
        })
        .catch(response => {

            callbackFailur(response);
        });
};

export const postFastRiderTikets = async (callbackSuccess, callbackFailur, address, number) => {

    axios.get('/nearby-address-list', {address: address, number: number })
        .then(response => {
            callbackSuccess(response);
        })
        .catch(response => {
            callbackFailur(response);
        });
};





