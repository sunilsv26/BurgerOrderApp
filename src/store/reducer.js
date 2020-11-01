import * as actionTypes from './actions';

let initialState = {
    ingredients: {
        salad:0,
        meat:0,
        bacon:0,
        cheese:0,
    },
    totalPrice: 0,
    OrdeBtnDisabled: true,
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
         default:
            return state
    }
    

}

export default reducer