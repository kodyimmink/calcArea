import React, { Component } from 'react';
import AreaCalculator from './components/AreaCalculator';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Area of Polygons</h1>
        <AreaCalculator />
      </div>
    );
  }
}

export default App;
