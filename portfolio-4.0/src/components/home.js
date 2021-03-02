import React from 'react';
import './home.css';
// import components from other packages
import {Navbar, Nav} from 'react-bootstrap'

// create navbar
function navbar() {
    return (
        <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="home.js">Navbar</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="project.js">Projects</Nav.Link>
        </Nav>
        
      </Navbar>
    
    )
}

export default navbar;
