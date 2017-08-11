import React, { Component } from 'react';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>freeBook</h1>
        <div className="main">
          <div className="sub-main">
            <button className="button" onClick={this.props.onFindBook}>Find Book!</button>
          </div>
          <div className="sub-main">
            <button className="button">Add book!</button>
          </div>
          <div className="sub-main">
            <button className="button">About us</button>
          </div>
        </div>
        <p>bulit with love by <a href="https://www.linkedin.com/in/saba-ahmadi-4a7557127/"> Saba</a></p>
      </div>
    );
  }
}

export default App;
