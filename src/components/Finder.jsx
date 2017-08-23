import React, { Component } from 'react';
import { InputGroup, InputGroupAddon, Input, Button } from 'reactstrap';

class Finder extends Component {

  generateResults = () => {
    if(this.props.foundBooks === null)
      return;
    if(this.props.foundBooks.length === 0)
      return <div>no books found :(</div>;

    return this.props.foundBooks.map((item, idx) => {
      return (
        <div key={ idx }>
          <div>ISBN: { item.ISBN }</div>
          <div>name: { item.name }</div>
          <div>latitude: { item.latitude }</div>
          <div>longitude: { item.longitude }</div>
          <div>category: { item.category }</div>
          =========================================================================
        </div>
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
          { this.generateResults() }
        </div>
      </div>
    )
  }
}

export default Finder;
