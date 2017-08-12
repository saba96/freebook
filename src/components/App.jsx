import React, { Component } from 'react';
import Map from '../containers/Map';
//import BookInfo from './BookInfo'
import './App.css';

let props = { ISBN: null };

class App extends Component {
  render() {
    switch (this.props.view) {
      case ('Home'):
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
      case ('findBook'):
        return (
          <div className="App">
            <h1>Find Book!</h1>
            <Map />
            <form onSubmit={this.handleNewISBN.bind(this)}>
              <input type='text' ref={(input) => this.ISBN = input} />
              <input type='submit' />
            </form>
          </div>
        );
      default:
        return (
          <div className="App"> unhandled situation occured </div>
        )
    }
  }
  handleNewISBN(event){
    event.preventDefault();
    const bookISBN = this.ISBN.value;
    this.props.findByISBN(bookISBN);
  }
}




export default App;
