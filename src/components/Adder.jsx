import React, { Component } from 'react';
import { Button, Form, Label, Input, InputGroup, InputGroupAddon } from 'reactstrap';

class Adder extends Component {

  onSubmitButtonClick = (event) => {
    event.preventDefault();
    event.stopPropagation();

    console.log(this.props);
  }

  render() {
    return (
      <div className="Adder">
        <Form>
          <Label>Book</Label>
          <InputGroup>
            <InputGroup className="adderControls">
              <InputGroupAddon>Title</InputGroupAddon>
              <Input
                id="adderTitle"
                placeholder="Count of Monte Cristo, The"
                onInput={ this.props.onTitleTextBoxChange }
              />
            </InputGroup>
          </InputGroup>
          <InputGroup>
            <InputGroup className="adderControls">
              <InputGroupAddon>ISBN</InputGroupAddon>
              <Input
                id="adderISBN"
                placeholder="978-0-123456-47-2"
                onInput={ this.props.onISBNTextBoxChange }
              />
            </InputGroup>
            <InputGroup className="adderControls">
              <InputGroupAddon>Genre</InputGroupAddon>
              <Input
                id="adderGenre"
                placeholder="Mystery"
                onInput={ this.props.onGenreTextBoxChange }
              />
            </InputGroup>
          </InputGroup>
          <Label>Location</Label>
          <InputGroup>
            <InputGroup className="adderControls">
              <InputGroupAddon>Latitude</InputGroupAddon>
              <Input
                id="adderLat"
                placeholder="30.0"
                onInput={ this.props.onLatTextBoxChange }
              />
            </InputGroup>
            <InputGroup className="adderControls">
              <InputGroupAddon>Longitude</InputGroupAddon>
              <Input
                id="adderLng"
                placeholder="30.0"
                onInput={ this.props.onLngTextBoxChange }
              />
            </InputGroup>
          </InputGroup>
          <Button
            onClick={ this.onSubmitButtonClick }
          >Submit</Button>
        </Form>
      </div>
    )
  }
}

export default Adder;
