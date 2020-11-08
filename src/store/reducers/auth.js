import  * as actionTypes from '../actions/actionsTypes';


let initialState={
    loading:false,
    error:null,
    userId:null,
    tokenId:null,
    authRedirectPath:'/burger',
}

export  const reducer = (state=initialState,action)=>{
    switch(action.type){
        case actionTypes.AUTH_START:return{
            ...state,
            loading:true,
            error:null,
        }

        case actionTypes.AUTH_SUCCESS:return{
            ...state,
            loading:false,
            error:null,
            userId:action.userId,
            tokenId:action.tokenId
        }
        case actionTypes.AUTH_FAIL:return{
            ...state,
            error:action.error,
            loading:false,
        }

        case actionTypes.AUTH_LOGOUT:return{
            ...state,
            userId:null,
            tokenId:null,
        }

        case actionTypes.AUTH_REDIRECT_PATH:return{
            ...state,
            authRedirectPath:action.path
        }
        default:
            return state
    }
}

export default reducer