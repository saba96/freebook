import React, { Component } from 'react';
import { InputGroup, InputGroupAddon, Input } from 'reactstrap';

class Finder extends Component {
  render() {
    return (
      <div className="Finder">
        <InputGroup className="ISBN">
          <InputGroupAddon>ISBN</InputGroupAddon>
          <Input
            placeholder="978-0-123456-47-2"
            onInput={ (event) => console.log(event.target.value) }
          />
        </InputGroup>
      </div>
    )
  }
}

export default Finder;
