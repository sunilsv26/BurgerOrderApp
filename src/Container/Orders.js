import React, { Component } from "react";
import Order from "../Components/Burger/OrderSummary/Order/Order";
import  {connect} from 'react-redux';
import * as actions from '../store/actions/index'


class Orders extends Component {
  state ={
    orders:[],
    loading:true,
  }
  componentDidMount(){
    this.props.onFetch()
    
  }
  render() {
    let myOrders = <div>Loading</div>

    if(this.props.orders){
      console.log(this.props.orders);
      myOrders = <div style={{marginTop:'55px'}}>
      {this.props.orders.map((el,i)=>
      <Order key={Math.random()} 
      ingredients={el.ingredients} 
      price={el.totalPrice} />)}
    </div>
    }
    return (
      myOrders
    );
  }
}

const mapStateToProps = state=>{
  return{
    orders:state.order.orders,
  }
}

const mapDispatchToProps=dispatch=>{
  return{
    onFetch:()=>dispatch(actions.fetchOrder()),
  }
}

export default connect(mapStateToProps,mapDispatchToProps) (Orders);
