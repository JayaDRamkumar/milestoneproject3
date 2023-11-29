import React from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function AppNavbar() {
  return (

    <Navbar bg="dark" variant="dark">
      <Navbar.Brand as={Link} to="/">LR LAKE HOLDING INC</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link as={Link} to="/">Home</Nav.Link>
        <Nav.Link as={Link} to="/">ApplyNowForm</Nav.Link>

      </Nav>
    
    </Navbar>
  )
}

export default AppNavbar