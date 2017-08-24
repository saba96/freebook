import React, { Component } from 'react';
import { Form, Label, Input, InputGroup, InputGroupAddon } from 'reactstrap';

class Adder extends Component {
  render() {
    return (
      <div className="Adder">
        <Form>
          <Label>Book</Label>
          <InputGroup>
            <InputGroup className="adderControls">
              <InputGroupAddon>Title</InputGroupAddon>
              <Input id="adderTitle" placeholder="Count of Monte Cristo, The"/>
            </InputGroup>
          </InputGroup>
          <InputGroup>
            <InputGroup className="adderControls">
              <InputGroupAddon>ISBN</InputGroupAddon>
              <Input id="adderISBN" placeholder="978-0-123456-47-2"/>
            </InputGroup>
            <InputGroup className="adderControls">
              <InputGroupAddon>Genre</InputGroupAddon>
              <Input id="adderGenre" placeholder="Mystery"/>
            </InputGroup>
          </InputGroup>
          <Label>Location</Label>
          <InputGroup>
            <InputGroup className="adderControls">
              <InputGroupAddon>Latitude</InputGroupAddon>
              <Input id="adderLat" placeholder="30.0"/>
            </InputGroup>
            <InputGroup className="adderControls">
              <InputGroupAddon>Longitude</InputGroupAddon>
              <Input id="adderLng" placeholder="30.0"/>
            </InputGroup>
          </InputGroup>
        </Form>
      </div>
    )
  }
}

export default Adder;
