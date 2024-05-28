import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

function NavigationBar() {
  
  


  return (
    <Navbar bg="light" variant="light" expand="lg">
      
      
    <Navbar.Brand as={NavLink} exact to="/">
    <span className='ml-2'>
      <img
        src="https://www.svgrepo.com/show/434497/android.svg"
        width="30"
        height="30"
        className="d-inline-block align-top"
        alt="Android Logo"
      />
      </span>
     
      <span className='ml-2'>Logo</span>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link as={NavLink} exact to="/" className="text-dark">Home</Nav.Link>
        <Nav.Link as={NavLink} to="/about" className="text-dark">About</Nav.Link>
        <Nav.Link as={NavLink} to="/contact" className="text-dark">Contact</Nav.Link>
        <Nav.Link as={NavLink} to="/gallery" className="text-dark">Gallery</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  );
};


export default NavigationBar;
