import React, { Component } from 'react';
import Map from '../containers/Map';
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
                <button className="button" onClick={this.props.onAddBook}>Add book!</button>
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
              <input type='text' ref={(input) => this.ISBN = input} placeholder="please enter the ISBN of the book" />
              <input type='submit' />
            </form>
            <div className="search-results">
              {
                (this.props.ISBN === "") ?
                  <div>
                    {
                      Object.keys(this.props.records).map((ISBN, idx) => {
                        return <div key={idx}>
                          <div>ISBN:{this.props.records[ISBN].ISBN}</div>
                          <div>name:{this.props.records[ISBN].name}</div>
                          <div>latitude:{this.props.records[ISBN].latitude}</div>
                          <div>longitude:{this.props.records[ISBN].longitude}</div>
                          <div>category:{this.props.records[ISBN].category}</div>
                          =========================================================================
                        </div>
                      })
                    }
                  </div>
                  :
                  (this.props.bookInfo !== null && this.props.bookInfo.hasOwnProperty('ISBN')) ?
                    <div>
                      <div>ISBN:{this.props.bookInfo.ISBN}</div>
                      <div>name:{this.props.bookInfo.name}</div>
                      <div>latitude:{this.props.bookInfo.latitude}</div>
                      <div>longitude:{this.props.bookInfo.longitude}</div>
                      <div>category:{this.props.bookInfo.category}</div>
                      =========================================================================
                </div>
                : (this.props.bookInfo !== null && this.props.bookInfo.hasOwnProperty('notfound')) ?
                      <div>{this.props.bookInfo.notfound} </div>
                :<div></div>
              }
            </div>
          </div>
        );
      case ("addBook"):
        return (
          <div className="App">
            <h1>Add Book!</h1>
            <Map />
            <form onSubmit={this.handleNewBook.bind(this)}>
              <input type='text' ref={(name) => this.name = name} placeholder = "name of the book"/>
              <input type='text' ref={(ISBN) => this.ISBN = ISBN} placeholder = "book ISBN" />
              <input type='text' ref={(category) => this.category = category} placeholder = "category " />
              <input type='text' ref={(latitude) => this.latitude = latitude} placeholder = "latitude" />
              <input type='text' ref={(longitude) => this.longitude = longitude} placeholder = "longitude" />
              <input type='submit' />
            </form>
          </div>
        );
      case ('SuccessfullAdd'):
        return(
          <div className="App">
            <h1>Successfully Added</h1>
            <div className="main">
              <div className="sub-main">
                <button className="button" onClick={this.props.backHome}>Back home</button>
              </div>
            </div>
          </div>

        )
      default:
        return (
          <div className="App"> unhandled situation occured </div>
        )
    }
  }
  handleNewISBN(event) {
    event.preventDefault();
    const bookISBN = this.ISBN.value;
    this.props.findByISBN(bookISBN);
  }

  handleNewBook(event) {
    event.preventDefault();
    const ISBN = this.ISBN.value;
    const newBook = {
      ISBN: this.ISBN.value,
		  name: this.name.value,  
		  latitude: this.latitude.value,
		  longitude: this.longitude.value,
		  category: this.category.value
    }
    this.props.addBook(newBook);
  }
}




export default App;
