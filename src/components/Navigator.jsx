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

  render() {
    return (
      <div className="Navigator">
        <Navbar color="faded" light toggleable>
          <NavbarBrand>
            freebook
          </NavbarBrand>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="#" onClick={ this.onAddLinkClick }>add</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#" onClick={ this.onFindLinkClick }>find</NavLink>
            </NavItem>
          </Nav>
        </Navbar>
      </div>
    )
  }
}

export default Navigator;
