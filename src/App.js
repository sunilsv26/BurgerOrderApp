import React, {useEffect } from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

import { connect } from "react-redux";

import Layout from "./Components/Layout/Layout";

import "./App.css";
import BurgerBuilder from "./Container/BurgerBuilder";
import Auth from "./Container/Auth";
import Logout from "./Components/Navigation/NavigationItems/NavigationItem/logout";
import * as actions from "./store/actions/index";
import asyncComponent from './Components/hoc/asyncComponent'

const lazyOrders = asyncComponent(()=>{
  return import ("./Container/Orders")
})

const lazyCheckout = asyncComponent(()=>{
  return import ( "./Container/Checkout")
})

const  app =props=> {
  useEffect(()=>{
    props.onCheckLoginStatus()
  },[])
  /* componentDidMount() {
    this.props.onCheckLoginStatus();
  } */
    let routes = (
      <Switch>
        <Route path="/burger" exact component={BurgerBuilder} />
        <Route path="/auth" component={Auth} />
        <Redirect to="/burger" />
      </Switch>
    );

    if (props.isAuth) {
      routes = (
        <Switch>
          <Route path="/checkout" component={lazyCheckout} />
          <Route path="/burger" exact component={BurgerBuilder} />
          <Route path="/orders" component={lazyOrders} />
          <Route path="/auth" component={Auth} />
          <Route path="/logout" component={Logout} />
          <Redirect to="/burger" />
        </Switch>
      );
    }
    return (
      <div className="App">
        <BrowserRouter>
          <Layout>
           {routes}
          </Layout>
        </BrowserRouter>
      </div>
    );
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.tokenId !== null,
  };
};

const mapDispathToProps = (dispatch) => {
  return {
    onCheckLoginStatus: () => dispatch(actions.checkAuthState()),
  };
};

export default connect(mapStateToProps, mapDispathToProps)(app);
