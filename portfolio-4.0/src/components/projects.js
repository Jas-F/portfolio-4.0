import React from 'react';
import './projects.css'; 
// import components from other packages
import {Navbar, Nav} from 'react-bootstrap';

function projects() {
  return (
    <Navbar bg="primary" variant="dark">
    <Navbar.Brand href="home.js">Navbar</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="project.js">Projects</Nav.Link>
      <Nav.Link href="resume.js">Resume</Nav.Link>
    </Nav>
    
  </Navbar>
  

  )
}

export default projects;
