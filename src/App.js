import React, { Component } from "react";
import { BrowserRouter, Route,Redirect} from "react-router-dom";

import {connect}  from 'react-redux'
 
import Layout from "./Components/Layout/Layout";
import Checkout from "./Container/Checkout";
import "./App.css";
import BurgerBuilder from "./Container/BurgerBuilder";

import Orders from './Container/Orders';
import Auth from './Container/Auth';
import Logout from './Components/Navigation/NavigationItems/NavigationItem/logout';
import * as actions from './store/actions/index'


class App extends Component {

  componentDidMount(){
    this.props.onCheckLoginStatus()
  }
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Layout>
            <Route path="/checkout"  component={Checkout} />
            <Route path="/burger" exact component={BurgerBuilder} />
            <Route path='/orders' component ={Orders} />
            <Route path='/auth' component={Auth} />
            <Route path ='/logout' component={Logout} />
            <Redirect to='/burger'/>
           </Layout>
        </BrowserRouter>
      </div>

    );
  }
}

 const mapDispathToProps=dispatch=>{
  return{
    onCheckLoginStatus:()=> dispatch(actions.checkAuthState())
  }
}

export default connect(null,mapDispathToProps) (App);
