import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header';
import Product from './components/Product';
import Details from './components/Details';
import Default from './components/Default';
import UpdateProfile from './components/UpdateProfile';

class App extends Component {
  render(){
    return (      
      <React.Fragment>
        <Header />
        <Switch>
          <Route exact path="/" component={Product}></Route>
          <Route path="/details" component={Details}></Route>
          <Route component={Default}></Route>
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
