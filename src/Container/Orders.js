import React, { Component } from "react";
import Order from "../Components/Burger/OrderSummary/Order/Order";
import  {connect} from 'react-redux';
import * as actions from '../store/actions/index';
import axiosOrder from '../axios-order'
import withErrorHandler from '../Components/hoc/withErrorHandler/withErrorHandler'


class Orders extends Component {
  state ={
    orders:[],
    loading:true,
  }
  componentDidMount(){
    this.props.onFetch(this.props.token)
    console.log(this.props.token);
    
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
    token:state.auth.tokenId,
  }
}

const mapDispatchToProps=dispatch=>{
  return{
    onFetch:(token)=>dispatch(actions.fetchOrder(token)),
  }
}

export default connect(mapStateToProps,mapDispatchToProps) (withErrorHandler(Orders,axiosOrder));
