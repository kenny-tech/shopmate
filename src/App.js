import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Product from './components/Product';
import Details from './components/Details';

class App extends Component {
  render(){
    return (      
      <React.Fragment>
        <Header />
        <Sidebar />
        <Switch>
          <Route exact path="/" component={Product}></Route>
          <Route path="/details" component={Details}></Route>
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
