import React, { Component } from 'react';
import './App.css';
import { Calculator } from './components/Calculator/Calculator'

class App extends Component {
  render() {
    return (
      <div>
        {/* <h1>This is a Test</h1> */}
        <Calculator />
      </div>
    );
  }
}

export default App;
