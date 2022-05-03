import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const NavigationBar = () => {
  return (
    <Navbar className="nav" variant="dark" sticky="top">
      <Nav className="me-auto">
        <Nav.Link href="/">Home</Nav.Link>
      </Nav>
    </Navbar>
  )
};

export default NavigationBar;
