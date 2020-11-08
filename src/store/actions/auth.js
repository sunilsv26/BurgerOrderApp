import * as actionTypes from './actionsTypes';
import axios from 'axios';

export const authStart=()=>{
    return{
        type:actionTypes.AUTH_START,
    }
}

export const authSuccess=({tokenId,userId}={})=>{
    return{
        type:actionTypes.AUTH_SUCCESS,
        userId:userId,
        tokenId:tokenId,
    }
}

export const authFail =(error)=>{
    return{
        type:actionTypes.AUTH_FAIL,
        error:error,
    }
}

export const logout = ()=>{
    return{
        type:actionTypes.AUTH_LOGOUT,
    }
}


export const setAuthRediectPath = (path)=>{
    return{
        type:actionTypes.AUTH_REDIRECT_PATH,
        path:path,
    }
}
export const checklogout =(expirationTime)=>{
    console.log(expirationTime);
    return dispatch=>{
        setTimeout(()=>dispatch(logout()),expirationTime)
    }
}

export const  auth =(email,password,isSignUp)=>{
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
            const tokenId= resp.data.idToken;
            const userId= resp.data.localId;
            dispatch(authSuccess({tokenId,userId}));
            let expTime = resp.data.expiresIn
            expTime = parseInt(expTime,10);
            expTime = expTime*1000
            dispatch(checklogout(expTime));
            console.log(resp.data)})
        .catch(error=>{
            dispatch(authFail(error.response.data.error))
            console.log(error)})
    }
};


