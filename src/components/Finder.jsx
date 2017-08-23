import React, { Component } from 'react';
import './App.css';
import { InputGroup, InputGroupAddon, Input, Button, CardDeck, Card, CardBlock, CardTitle } from 'reactstrap';

class Finder extends Component {

  generateResults = () => {
    if(this.props.foundBooks === null)
      return;
    if(this.props.foundBooks.length === 0)
      return <div>no books found :(</div>;

    return this.props.foundBooks.map((item, idx) => {
      return (
        <Card key={ idx }
          className="ResultCard"
          style={ { flex: "0 0 auto" } }>
          <CardBlock>
            <CardTitle>{ item.name }</CardTitle>
            <div>ISBN: { item.ISBN }</div>
            <div>latitude: { item.latitude }</div>
            <div>longitude: { item.longitude }</div>
            <div>category: { item.category }</div>
          </CardBlock>
        </Card>
      )
    });
  }

  render() {
    return (
      <div className="Finder">
        <InputGroup className="ISBN">
          <InputGroupAddon>ISBN</InputGroupAddon>
          <Input
            placeholder="978-0-123456-47-2"
            onInput={ this.props.onTextBoxChange }
          />
          <Button
            color="primary"
            onClick={ this.props.onSearchButtonClick }
          >search</Button>{' '}
        </InputGroup>

        <div className="Results">
          <CardDeck>
            { this.generateResults() }
          </CardDeck>
        </div>
      </div>
    )
  }
}

export default Finder;
