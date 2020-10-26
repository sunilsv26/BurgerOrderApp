import React, { Component } from "react";
import Order from "../Components/Burger/OrderSummary/Order/Order";
import axios from '../axios-order'

class Orders extends Component {
  state ={
    orders:[],
    loading:true,
  }
  componentDidMount(){
    axios.get('/orders.jason')
    .then(res=>{
      let resData = [];
      for (let key in res.data){
        resData.push({...resData[key],id:key})
      }
      this.setState({orders:resData,loading:false})
    }).catch(err=>this.setState({loading:false}))
  }
  render() {
    return (
      <div style={{marginTop:'55px'}}>
        <Order />
        <Order />
      </div>
    );
  }
}

export default Orders
