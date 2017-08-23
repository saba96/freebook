import React, { Component } from 'react';
import { InputGroup, InputGroupAddon, Input, Button } from 'reactstrap';

class Finder extends Component {
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
          >search</Button>{' '}
        </InputGroup>

        <div className="Results">
          { this.props.findFieldText }
        </div>
      </div>
    )
  }
}

export default Finder;
