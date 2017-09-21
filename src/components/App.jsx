import React, { Component } from 'react';
import './App.css';
import Map from '../containers/Map';
import Navigator from '../containers/Navigator';
import Control from '../containers/Control';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigator />
        <Map />
        <Control />
      </div>
    );
  }
}

export default App;
