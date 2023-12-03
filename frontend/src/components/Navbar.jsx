import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function AppNavbar() {
  return (
    <Navbar className="navbar-custom" variant="dark">
      <Navbar.Brand className="mr-auto" as={Link} to="/">LR LAKE HOLDING INC</Navbar.Brand>
      <Nav>
        <Nav.Link as={Link} to="/">Home</Nav.Link>
        <span className="mr-10"></span> {/* Add a span with margin for spacing */}
        <Nav.Link as={Link} to="/myapplications">My Applications</Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default AppNavbar;
