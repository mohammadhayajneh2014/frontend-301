import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

export class Header extends Component {
    render() {
        return (
            <div>
                  <Navbar bg="dark" variant="dark">
   
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href='/Favorite'>Favorite</Nav.Link>
      {/* <Nav.Link href="#pricing">Pricing</Nav.Link> */}
    </Nav>
   
  </Navbar>
                
            </div>
        )
    }
}

export default Header;
