import * as actionTypes from './actionsTypes';
import axiosOrder from '../../axios-order'


export const  purchaseBurgerInit =()=>{
    return{
        type:actionTypes.PURCAHSE__BURGER_INIT,
    }
}

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


export const purchaseBurgerStart = ()=>{
    return{
        type:actionTypes.PURCHASE_BURGER_START,
    }
}

export const purchaseBurger =(token,orderData)=>{
    return dispatch=>{
        dispatch(purchaseBurgerStart())
        axiosOrder
            .post("/orders.json?auth=" +token, orderData)
            .then((response) =>purchaseBurgerSuccess(response.data.name,orderData))
            .catch((error) => purchaseBurgerFail(error));
    }
}

export const fetchOrderStart = ()=>{
    return{
        type:actionTypes.FETCH_ORDER_START,
    }
}

export const fetchOrderSuccess=(order)=>{
    return{
        type:actionTypes.FETCH_ORDER_SUCESS,
        order:order,
    }
}

export const fetchOrderFail = ()=>{
    return{
        type:actionTypes.PURCAHSE__BURGER_FAIL,
    }
}

export const  fetchOrder=(token)=>{
    return dispatch=>{
        axiosOrder.get('/orders.json?auth=' + token)
    .then(res=>{
      let resData = [];
      for (let key in res.data){
        resData.push({...res.data[key],id:key})
      }
      dispatch(fetchOrderSuccess(resData))
    })
    .catch((err)=>{dispatch(fetchOrderFail(err))})
    }
}