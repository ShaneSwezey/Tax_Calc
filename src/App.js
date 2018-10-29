import React, { Component } from 'react';
import './App.css';

import Header from './components/header/Header';
import About from './components/about/About';
import Calculator from './components/calculator/Calculator';
import Results from './components/results/Results';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <About />
        <hr></hr>
        <Calculator />
        <hr></hr>
        <Results />
      </div>
    );
  }
}

export default App;
