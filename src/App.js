import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Product from './components/Product';

class App extends Component {
  render(){
    return (      
      <React.Fragment>
        <Header />
        <Sidebar />
        <Product />
      </React.Fragment>
    );
  }
}

export default App;
