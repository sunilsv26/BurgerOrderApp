import React, { Component } from "react";
import Layout from "./Components/Layout/Layout";
import Checkout from "./Container/Checkout";
import "./App.css";
import BurgerBuilder from "./Container/BurgerBuilder";
import { BrowserRouter, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Layout>
            <Route path="/checkout" exact component={Checkout} />
            <Route path="/burger" exact component={BurgerBuilder} />
          </Layout>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
