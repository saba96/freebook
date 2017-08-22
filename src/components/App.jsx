import React, { Component } from 'react';
import Map from '../containers/Map';
import './App.css';
import Navigator from '../containers/Navigator';
import Control from '../containers/Control';

let props = { ISBN: null };

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
