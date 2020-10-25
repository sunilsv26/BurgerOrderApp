import React, { Component } from "react";
import Layout from "./Components/Layout/Layout";
import Checkout from "./Container/Checkout";
import "./App.css";
import { BrowserRouter, Route ,Redirect} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Route path="/checkout" exact component={Checkout} />
          <Route path="/burger" exact component={Layout} />
          <Route path="/" exact component={Layout} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
