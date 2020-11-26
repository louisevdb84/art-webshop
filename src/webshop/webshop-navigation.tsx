import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import './webshop-navigation.scss';

class Navigation extends Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
        <Navbar.Brand>The Art Webshop</Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            {/* <Nav.Link href="/">Website</Nav.Link> */}
          </Nav>
          <Nav.Link className="customLink" href="/art-webshop">
            Website
          </Nav.Link>
          <Nav.Link className="customLink" href="/art-webshop/register">
            Register
          </Nav.Link>
          <Nav.Link className="customLink" href="/art-webshop/signin">
            Sign In
          </Nav.Link>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Navigation;
