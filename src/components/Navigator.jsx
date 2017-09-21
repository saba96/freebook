import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavLink, NavbarBrand } from 'reactstrap';

class Navigator extends Component {

  onAddLinkClick = (event) => {
    event.preventDefault();
    event.stopPropagation();

    this.props.onAddClick();
  }

  onFindLinkClick = (event) => {
    event.preventDefault();
    event.stopPropagation();

    this.props.onFindClick();
  }

  isActive(element) {
    return this.props.view === element ? true : false;
  }

  render() {
    return (
      <div className="Navigator">
        <Navbar color="faded" light toggleable>
          <NavbarBrand>
            freebook
          </NavbarBrand>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink
                href="#"
                active={ this.isActive('add') }
                onClick={ this.onAddLinkClick }>add</NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href="#"
                active={ this.isActive('find') }
                onClick={ this.onFindLinkClick }>find</NavLink>
            </NavItem>
          </Nav>
        </Navbar>
      </div>
    )
  }
}

export default Navigator;
