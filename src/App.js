import React, { Component } from "react";
import Layout from "./Components/Layout/Layout";
import Checkout from "./Container/Checkout";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Layout />
          <Checkout />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
