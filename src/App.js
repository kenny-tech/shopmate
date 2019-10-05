import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header';
import Sidebar from './components/Sidebar';

class App extends Component {
  render(){
    return (      
      <React.Fragment>
        <Header />
        <Sidebar />
      </React.Fragment>
    );
  }
}

export default App;
