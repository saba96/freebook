import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavLink, NavbarBrand } from 'reactstrap';

class Navigator extends Component {

  render() {
    return (
      <div className="Navigator">
        <Navbar color="faded" light toggleable>
          <NavbarBrand>
            freebook
          </NavbarBrand>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="#">add</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">find</NavLink>
            </NavItem>
          </Nav>
        </Navbar>
      </div>
    )
  }

}

export default Navigator;
