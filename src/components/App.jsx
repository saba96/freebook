import React, { Component } from 'react';
import Map from '../containers/Map';
import './App.css';
import Navigator from './Navigator';

let props = { ISBN: null };

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigator />
        <Map />
      </div>
    );
  }
}

export default App;
