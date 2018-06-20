import axios from 'axios';
import {
    FETCH_ACCOUNTS_BEGIN,
    FETCH_ACCOUNTS_SUCCESS,
    FETCH_ACCOUNTS_FAILURE
} from './types';


export const fetchAccountsBegin = () => ({
    type: FETCH_ACCOUNTS_BEGIN
  });
  
  export const fetchAccountsSuccess = accounts => ({
    type: FETCH_ACCOUNTS_SUCCESS,
    payload: { accounts }
  });
  
  export const fetchAccountsError = error => ({
    type: FETCH_ACCOUNTS_FAILURE,
    payload: { error }
  });

  export const getAccounst = () => (dispatch) => {
    dispatch({ type: FETCH_ACCOUNTS_BEGIN });
    axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(function (response) {
            console.log(response);
            dispatch({ type: FETCH_ACCOUNTS_SUCCESS  , payload: response.data });
            NotificationManager.success('User Login Successfully!');
        })
        .catch(function (error) {
            console.log(error);
    });

 }