import React, { Component, Fragment } from "react";
import {connect} from 'react-redux'

import Burger from "../Components/Burger/Burger";
import BuildControls from "../Components/Burger/BuildControls/BuildControls";
import Modal from "../Components/UI/Modal/Modal";
import OrderSummary from "../Components/Burger/OrderSummary/OrderSummary";
import axiosOrder from "../axios-order";
import Spinner from "../Components/UI/Spinner/Spinner";
import withErrorHandler from "../Components/hoc/withErrorHandler/withErrorHandler";
import  * as actionCreater  from '../store/actions/index'



class BurgerBuilder extends Component {
  state = {
    purchasing: false,
    loading: false,
    error: false,
  };

  componentDidMount() {
     this.props.onFetchIngs();
  }

  

  purchaseHandler = () => {
    this.setState({ purchasing: true });
  };

  purchaseModalRemovehandler = () => {
    this.setState({ purchasing: false });
  };

  purchaseContinueHandler = () => {
    /* this.setState({ loading: true });
    const order = {
      name: "Sunil Sherikar",
      email: "sunilsv26@gmail.com",
      mobNumb: 7892069724,
      adress: {
        landmark: "Near Sri Laxmi temple",
        village: "Narayanpur",
        taluqa: "BasavaKalyan",
        dist: "bidar",
        state: "Karnataka",
        country: "India",
        pinCode: 585327,
      },
      ingredients: this.state.ingredients,
      purchaseValue: this.state.totalPrice,
    };
    axiosOrder
      .post("/orders.json", order)
      .then((response) => this.setState({ loading: false }))
      .catch((error) => this.setState({ loading: false }));
    this.purchaseModalRemovehandler(); */
    const queryParams =[];
    for(let ing in this.state.ingredients){
      queryParams.push(encodeURIComponent(ing)+ '='+encodeURIComponent(this.state.ingredients[ing]))
    }
    queryParams.push('totalPrice=' + this.state.totalPrice)
    const queryString =queryParams.join('&')
    this.props.history.push({
      pathname:'/checkout',
      search:'?'+queryString
    })
  };
  orderBtnstate(price) {
    return(
      price ===0 ? true:false
    )
  }

  render() {
    const disableInfo = {
      ...this.props.ings,
    };
    for (let key in disableInfo) {
      disableInfo[key] = disableInfo[key] <= 0;
    }

    let orderSummary = null;

    let burger = this.state.error ? <p>Unable to load Ingredients</p>:<Spinner/>;
    if (this.props.ings) {
      burger = (
        <Fragment>
          <Burger ingredients={this.props.ings} />
          <BuildControls
            addedIngredient={this.props.onIngAdd}
            removedIngredient={this.props.onIngRemove}
            disabled={disableInfo}
            price={this.props.price}
            OrderBtnDisabled={this.orderBtnstate(this.props.price)}
            ordered={this.purchaseHandler}
          />
          )
        </Fragment>
      );

      orderSummary = (
        <OrderSummary
          price={`$ ${this.props.price}`}
          ingredients={this.props.ings}
          purchaseCanceled={this.purchaseModalRemovehandler}
          purchaseContinued={this.purchaseContinueHandler}
        />
      );
    }

    if (this.state.loading) {
      orderSummary = <Spinner />;
    }
    return (
      <Fragment>
        <Modal
          show={this.state.purchasing}
          modalRemoved={this.purchaseModalRemovehandler}
        >
          {orderSummary}
        </Modal>
        {burger}
      </Fragment>
    );
  }
}

const mapStateToProps = state=>{
  return{
    ings:state.ingredients,
    price:state.totalPrice,
    error:state.error
  }
}

const mapDespatchToProps= dispatch=>{
  return{
    onIngAdd:(igName)=> dispatch(actionCreater.addIngredient(igName)),
    onIngRemove:(igName)=> dispatch(actionCreater.removeIngredient(igName)),
    onFetchIngs:()=>dispatch(actionCreater.fetchIngredients()),
  }
}

export default connect(mapStateToProps,mapDespatchToProps) (withErrorHandler(BurgerBuilder, axiosOrder));
