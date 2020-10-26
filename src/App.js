import React, { Component } from "react";
import Layout from "./Components/Layout/Layout";
import Checkout from "./Container/Checkout";
import "./App.css";
import BurgerBuilder from "./Container/BurgerBuilder";
import { BrowserRouter, Route,Redirect } from "react-router-dom";
import Orders from './Container/Orders'

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Layout>
            <Route path="/checkout"  component={Checkout} />
            <Route path="/burger" exact component={BurgerBuilder} />
            <Route path='/orders' component ={Orders} />
            <Redirect to='/burger'/>
           </Layout>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
