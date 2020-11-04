import * as actionTypes from './actionsTypes';
import axios from 'axios';

export const authStart=()=>{
    return{
        type:actionTypes.AUTH_START,
    }
}

export const authSuccess=(authData)=>{
    return{
        type:actionTypes.AUTH_SUCCESS,
        authData:authData,
    }
}

export const authFail =(error)=>{
    return{
        type:actionTypes.AUTH_FAIL,
        error:error,
    }
}

export const auth =(email,password,isSignUp)=>{
    return dispatch=>{
        dispatch(authStart());
        const authData ={
            email:email,
            password:password,
            returnSecureToken:true
        }
        let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCyLTNW-Frpc6vO-0BsedP-g9sRSseCnek'
        if(!isSignUp){
            url='https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCyLTNW-Frpc6vO-0BsedP-g9sRSseCnek'
        }
        axios.post(url,authData)
        .then(resp=>{
            dispatch(authSuccess(authData))
            console.log(resp.data);})
        .catch(err=>{
            dispatch(authFail(err))
            console.log(err)})
    }
};

