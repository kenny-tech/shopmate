import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header';

class App extends Component {
  render(){
    return (      
      <React.Fragment>
        <Header />
      </React.Fragment>
    );
  }
}

export default App;
