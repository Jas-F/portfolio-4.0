import React from 'react';
import './projects.css'; 
// import components from other packages
import {Navbar, Nav} from 'react-bootstrap';

function projects() {
  return (
    <div>
    <Navbar bg="primary" variant="dark">
    <Navbar.Brand href="home.js">Navbar</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="project.js">Projects</Nav.Link>
    </Nav>
    
  </Navbar>
  {/* add container displaying personall project  */}
  <Container>
  <Row>
      <Col sm={6}> <h1>Jasmine Franklin</h1>
      <h2 className="project-title">Team Profile Generator</h2>
        <a className="media" href="https://jas-f.github.io/team-profile-generator/">Deployed Link</a>
        <a className="media" href="https://github.com/Jas-F/team-profile-generator">Github Repo</a>
      </Col>
      <Col sm={6}>
        <img className="project-img" src='team.png' alt='project1'></img>
      </Col>
  </Row>

</Container>
</div>



  )
}

export default projects;
