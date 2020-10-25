import React, { Component } from 'react';
import Layout from './Components/Layout/Layout';
import Checkout from './Container/Checkout'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout />
        <Checkout />
      </div>
    );
  }
}

export default App;
