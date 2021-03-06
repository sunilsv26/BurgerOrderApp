import React, { Component } from "react";
import Order from "../Components/Burger/OrderSummary/Order/Order";
import  {connect} from 'react-redux';
import * as actions from '../store/actions/index';
import axiosOrder from '../axios-order'
import withErrorHandler from '../Components/hoc/withErrorHandler/withErrorHandler';
import Spinner from '../Components/UI/Spinner/Spinner'


class Orders extends Component {
  state ={
    orders:[],
    loading:true,
  }
  componentDidMount(){
      this.props.onFetch();
      this.setState({orders:this.props.orders})
    
  }
  
  render() {
    let myOrders = <Spinner />
    if(this.props.orders){
      myOrders = <div style={{marginTop:'65px'}}>
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
    token:state.auth.tokenId!==null,
  }
}

const mapDispatchToProps=dispatch=>{
  return{
    onFetch:()=>dispatch(actions.fetchOrder()),
  }
}

export default connect(mapStateToProps,mapDispatchToProps) (withErrorHandler(Orders,axiosOrder));
