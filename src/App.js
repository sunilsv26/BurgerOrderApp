import React, { Component } from "react";
import { BrowserRouter, Route,Redirect } from "react-router-dom";
import {createStore} from 'redux';
import {Provider} from 'react-redux'
 
import Layout from "./Components/Layout/Layout";
import Checkout from "./Container/Checkout";
import "./App.css";
import BurgerBuilder from "./Container/BurgerBuilder";
import reducer from './store/reducer'
import Orders from './Container/Orders';

const store = createStore(reducer)

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store= {store}>
        <BrowserRouter>
          <Layout>
            <Route path="/checkout"  component={Checkout} />
            <Route path="/burger" exact component={BurgerBuilder} />
            <Route path='/orders' component ={Orders} />
            <Redirect to='/burger'/>
           </Layout>
        </BrowserRouter>
        </Provider>
      </div>
    );
  }
}

export default App;
