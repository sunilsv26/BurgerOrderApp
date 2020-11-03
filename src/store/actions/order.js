import * as actionTypes from './actionsTypes';
import axiosOrder from '../../axios-order'

const purchaseBurgerSuccess = (id,orderData)=>{
    return{
        type:actionTypes.PURCHASE_BURGER_SUCCESS,
        orderId:id,
        orderData:orderData,
    }
}

const purchaseBurgerFail = (error)=>{
    return{
        type:actionTypes.PURCAHSE__BURGER_FAIL,
        error:error,
    }
}

export const purchaseBurgerStart =(orderData)=>{
    return dispatch=>{
        axiosOrder
            .post("/orders.json", orderData)
            .then((response) => purchaseBurgerSuccess(response.data,orderData))
            .catch((error) => purchaseBurgerFail(error));
    }
}