import * as actionTypes from '../actions/actionsTypes';

let initialState = {
    orders:[],
    loading:false,
    purchased:false,
}

const reducer =(state=initialState,action)=>{
    switch(action.type){
        case actionTypes.PURCHASE_BURGER_START:return{
            ...state,
            loading:true,
        }
        
        case actionTypes.PURCHASE_BURGER_SUCCESS:
            const newOrder = {
              ...action.orderData,
              id:action.orderId,
            }
        return{
            ...state,
            loading:false,
            orders :state.orders.concat(newOrder),
            purchased:true,
        }

        case actionTypes.PURCAHSE__BURGER_FAIL:
        return{
            ...state,
            loading:false,
            purchased:true,
        }

        case actionTypes.FETCH_ORDER_START:
            return{
                ...state,
                loading:true,
            }
        case actionTypes.FETCH_ORDER_SUCESS:
            return{
                ...state,
                orders:state.orders.concat(action.order),
                loading:false,
            }
        case actionTypes.FETCH_ORDER_FAIL:
            return{
                ...state,
                loading:false,
                error:action.error,
            }
        default:
            return state
    }
}

export default reducer;