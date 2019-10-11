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
        <div className="container-fluid p-3">
          <div className="row">
            <div className="col-md-3">
              <Sidebar />
            </div>
            <div className="col-md-9 row">
              <Product />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
