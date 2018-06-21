import axios from 'axios';
import {
    FETCH_ACCOUNTS_BEGIN,
    FETCH_ACCOUNTS_SUCCESS,
    FETCH_ACCOUNTS_FAILURE
} from './types';


  export const getAccounst = () => (dispatch) => {
    dispatch({ type: FETCH_ACCOUNTS_BEGIN });
    axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(function (response) {
            dispatch({ type: FETCH_ACCOUNTS_SUCCESS  , payload: response.data });
        })
        .catch(function (error) {
            dispatch({ type: FETCH_ACCOUNTS_FAILURE });
    });

 }