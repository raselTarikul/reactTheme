/**
 * Auth Actions
 * Auth Action With Google, Facebook, Twitter and Github
 */
import firebase from 'firebase';
import { NotificationManager } from 'react-notifications';
import {
    LOGIN_USER,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAILURE,
    LOGOUT_USER,
    SIGNUP_USER,
    SIGNUP_USER_SUCCESS,
    SIGNUP_USER_FAILURE
} from 'Actions/types';


/**
 * Redux Action To Sigin User need to modify for network call
 */

 export const signIn = (user, history) => (dispatch) => {
    dispatch({ type: LOGIN_USER });
    localStorage.setItem("user_id", "user-id");
    dispatch({ type: LOGIN_USER_SUCCESS, payload: localStorage.getItem('user_id') });
    history.push('/');
    NotificationManager.success('User Login Successfully!');
 }


/**
 * Redux Action To Sigin User With Firebase
 */
export const signinUserInFirebase = (user, history) => (dispatch) => {
    dispatch({ type: LOGIN_USER });
    firebase.auth()
        .signInWithEmailAndPassword(user.email, user.password)
        .then((user) => {
            localStorage.setItem("user_id", "user-id");
            dispatch({ type: LOGIN_USER_SUCCESS, payload: localStorage.getItem('user_id') });
            history.push('/');
            NotificationManager.success('User Login Successfully!');
        })
        .catch((error) => {
            dispatch({ type: LOGIN_USER_FAILURE });
            NotificationManager.error(error.message);
        });
}

/**
 * Redux Action To Signout User From  Firebase
 */
export const logoutUserFromFirebase = () => (dispatch) => {
    dispatch({ type: LOGOUT_USER });
    localStorage.removeItem('user_id');
    NotificationManager.success('User Logout Successfully');
}



