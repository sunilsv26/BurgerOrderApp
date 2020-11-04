import React, { Component } from "react";
import { BrowserRouter, Route,Redirect} from "react-router-dom";
import {createStore,applyMiddleware,compose,combineReducers} from 'redux';
import {Provider} from 'react-redux';
import  thunk from 'redux-thunk';
 
import Layout from "./Components/Layout/Layout";
import Checkout from "./Container/Checkout";
import "./App.css";
import BurgerBuilder from "./Container/BurgerBuilder";
import BurgerBuilderreducer from './store/reducers/reducer';
import OrderReducer from './store//reducers/order';
import Orders from './Container/Orders';
import Auth from './Container/Auth'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers (
  {
    burgerBuilder:BurgerBuilderreducer,
    order:OrderReducer,
  }
)

const store = createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)))

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
            <Route path='/auth' component={Auth} />
            <Redirect to='/burger'/>
           </Layout>
        </BrowserRouter>
        </Provider>
      </div>
    );
  }
}

export default App;
