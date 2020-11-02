import * as actionTypes from './actionsTypes';
import axiosOrder from '../../axios-order'
export const addIngredient = (name)=>{
    return{
        type:actionTypes.ADD_INGREDIENT,
        ingredientName:name,
    }
}


export const removeIngredient = (name)=>{
    return{
        type:actionTypes.REMOVE_INGREDIENT,
        ingredientName:name,
    }
}

const setIngredients = (ingredients)=>{
    return{
        type:actionTypes.SET_INGREDIENTS,
        ingredients:ingredients
    }
}

const fetchIngredientsFailed =()=>{
    return{
        type:actionTypes.FETCH_INGREDIENTS_FAILED
    }
}

export const fetchIngredients =()=>{
    return dispatch=>{
        axiosOrder
        .get("/ingredients.json")
        .then((response) =>{ dispatch(setIngredients(response.data))} )
        .catch((err) => {dispatch(fetchIngredientsFailed())});
    }
}