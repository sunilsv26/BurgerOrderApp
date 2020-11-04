import  * as actionTypes from '../actions/actionsTypes';


let initialState={
    loading:true,
    error:null,
    userId:null,
    tokenId:null,
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
            error:action.error
        }
        default:
            return state
    }
}

export default reducer