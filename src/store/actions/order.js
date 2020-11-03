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


export const purchaseBurgerStart = ()=>{
    return{
        type:actionTypes.PURCHASE_BURGER_START,
    }
}

export const purchaseBurger =(orderData)=>{
    return dispatch=>{
        dispatch(purchaseBurgerStart())
        axiosOrder
            .post("/orders.json", orderData)
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

export const fetchOrderFail = (error)=>{
    return{
        type:actionTypes.PURCAHSE__BURGER_FAIL,
        error:error,
    }
}

export const  fetchOrder=()=>{
    return dispatch=>{
        axiosOrder.get('/orders.json')
    .then(res=>{
      let resData = [];
      for (let key in res.data){
        resData.push({...res.data[key],id:key})
      }
      dispatch(fetchOrderSuccess(resData))
    }).catch(err=>fetchOrderFail)
    }
}