import React, { Component } from 'react';

import './App.css';

import WeatherApp from './components/WeatherApp.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <WeatherApp />
      </div>
    );
  }
}

export default App;
