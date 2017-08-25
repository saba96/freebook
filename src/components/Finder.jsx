import React, { Component } from 'react';
import './App.css';
import classnames from 'classnames';
import { Label, TabContent, TabPane, Navbar, Nav, NavItem, NavLink, InputGroup, InputGroupAddon, Input, Button, CardDeck, Card, CardBlock, CardTitle } from 'reactstrap';

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
            <NavItem>
              <NavLink
                className={classnames({ active: this.state.activeTab === '3' })}
                onClick={() => { this.toggle('3'); }}
              >
                find by title
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: this.state.activeTab === '3' })}
                onClick={() => { this.toggle('4'); }}
              >
                find by author
              </NavLink>
            </NavItem>
          </Nav>
        </Navbar>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
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
          </TabPane>
          <TabPane tabId="2">
            <Label>Center</Label>
            <InputGroup className="Center">
              <InputGroup>
                <InputGroupAddon>Latitude</InputGroupAddon>
                <Input
                  placeholder="0.0"
                  value={ this.props.latitudeFieldText }
                  onInput={ this.props.onLatTextBoxChange }
                />
              </InputGroup>
              <InputGroup>
                <InputGroupAddon>Longitude</InputGroupAddon>
                <Input
                  placeholder="0.0"
                  value={ this.props.longitudeFieldText }
                  onInput={ this.props.onLongitudeTextBoxChange }
                />
              </InputGroup>
              <InputGroup>
                <InputGroupAddon>Radius</InputGroupAddon>
                <Input
                  placeholder="100"
                  defaultValue={ 100 }
                  onInput={ this.props.onRadiusTextBoxChange }
                />
              </InputGroup>
              <Button
                color="primary"
                onClick={ this.props.onLocationSearchButtonClick }
              >search</Button>{' '}
            </InputGroup>
          </TabPane>
          <TabPane tabId="3">
            <InputGroup className="Title">
              <InputGroup>
                <InputGroupAddon>Title</InputGroupAddon>
                <Input
                  placeholder="Ender's Game"
                  onInput={ this.props.onTitleTextBoxChange }
                />
              </InputGroup>
              <Button
                color="primary"
                onClick={ this.props.onTitleSearchButtonClick }
              >search</Button>{' '}
            </InputGroup>
          </TabPane>
          <TabPane tabId="4">
            <InputGroup className="Author">
              <InputGroup>
                <InputGroupAddon>Author</InputGroupAddon>
                <Input
                  placeholder="Orson Scott Card"
                  onInput={ this.props.onAuthorTextBoxChange }
                />
              </InputGroup>
              <Button
                color="primary"
                onClick={ this.props.onAuthorSearchButtonClick }
              >search</Button>{' '}
            </InputGroup>
          </TabPane>
        </TabContent>
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
