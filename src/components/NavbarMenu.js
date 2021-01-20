import React from 'react';
import {Nav, Navbar} from "react-bootstrap";

const NavbarMenu = () => {
  return (
      <Navbar bg="light" expand="lg" style={{zIndex:100}}>
          <Navbar.Brand href="/">S-Pipes UI</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                  {/*<Nav.Link href="/">Home</Nav.Link>*/}
              </Nav>
          </Navbar.Collapse>
      </Navbar>
  );
};

export default NavbarMenu;
