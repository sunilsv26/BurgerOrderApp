import React, { Component } from "react";
import Order from "../Components/Burger/OrderSummary/Order/Order";
import axios from '../axios-order'

class Orders extends Component {
  state ={
    orders:[],
    loading:true,
  }
  componentDidMount(){
    axios.get('/orders.json')
    .then(res=>{
      let resData = [];
      for (let key in res.data){
        resData.push({...res.data[key],id:key})
      }
      this.setState({orders:resData,loading:false})
      console.log(resData);
    }).catch(err=>this.setState({loading:false}))
    
  }
  render() {
    return (
      <div style={{marginTop:'55px'}}>
        {this.state.orders.map((el,i)=>
        <Order key={Math.random()} 
        ingredients={el.ingredients} 
        price={el.totalPrice} />)}
      </div>
    );
  }
}

export default Orders
