import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function AppNavbar() {
  return (
    <Navbar className="navbar-custom" variant="dark">
      <Navbar.Brand className="mr-auto" as={Link} to="/">LR LAKE HOLDING INC</Navbar.Brand>
      <Nav>
        <Nav.Link as={Link} to="/" className="mr-2">Home</Nav.Link>
        {/* <Nav.Link as={Link} to="/apply-now">Apply Now</Nav.Link> */}
      </Nav>
    </Navbar>
  );
}

export default AppNavbar;
