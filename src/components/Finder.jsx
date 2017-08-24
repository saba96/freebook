import React, { Component } from 'react';
import './App.css';
import classnames from 'classnames';
import { Navbar, Nav, NavItem, NavLink, InputGroup, InputGroupAddon, Input, Button, CardDeck, Card, CardBlock, CardTitle } from 'reactstrap';

class Finder extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

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
        <Navbar color="faded" light>
          <Nav tabs>
            <NavItem>
              <NavLink
                className={classnames({ active: this.state.activeTab === '1' })}
                onClick={() => { this.toggle('1'); }}
              >
                find by isbn
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: this.state.activeTab === '2' })}
                onClick={() => { this.toggle('2'); }}
              >
                find by location
              </NavLink>
            </NavItem>
          </Nav>
        </Navbar>
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
