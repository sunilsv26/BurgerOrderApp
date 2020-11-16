import React, { Component } from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

import { connect } from "react-redux";

import Layout from "./Components/Layout/Layout";
import Checkout from "./Container/Checkout";
import "./App.css";
import BurgerBuilder from "./Container/BurgerBuilder";

import Orders from "./Container/Orders";
import Auth from "./Container/Auth";
import Logout from "./Components/Navigation/NavigationItems/NavigationItem/logout";
import * as actions from "./store/actions/index";


class App extends Component {
  componentDidMount() {
    this.props.onCheckLoginStatus();
  }
  render() {
    let routes = (
      <Switch>
        <Route path="/burger" exact component={BurgerBuilder} />
        <Route path="/auth" component={Auth} />
        <Redirect to="/burger" />
      </Switch>
    );

    if (this.props.isAuth) {
      routes = (
        <Switch>
          <Route path="/checkout" component={Checkout} />
          <Route path="/burger" exact component={BurgerBuilder} />
          <Route path="/orders" component={Orders} />
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

export default connect(mapStateToProps, mapDispathToProps)(App);
