import * as actionTypes from '../actions/actionsTypes';

let initialState = {
    ingredients:null,
    totalPrice: 0,
    error:false,
}

const ING_PRICES = { meat: 2, cheese: 1, salad: 1, bacon: 0.5 };

const reducer = (state=initialState,action)=>{
    switch(action.type){
        case actionTypes.ADD_INGREDIENT:return{
           ...state,
           ingredients:{
               ...state.ingredients,
               [action.ingredientName] :state.ingredients[action.ingredientName] +1,
           },
           totalPrice:state.totalPrice + ING_PRICES[action.ingredientName],
        }
        case actionTypes.REMOVE_INGREDIENT:return{
            ...state,
            ingredients:{
                ...state.ingredients,
                [action.ingredientName] :state.ingredients[action.ingredientName] -1,
            },
            totalPrice:state.totalPrice - ING_PRICES[action.ingredientName],
         }
         case actionTypes.SET_INGREDIENTS:return{
             ...state,
             ingredients:action.ingredients,
             error:false,
         }

         case actionTypes.FETCH_INGREDIENTS_FAILED:return{
             ...state,
             error:true,
         }
         default:
            return state
    }
    

}

export default reducer