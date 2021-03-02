import React from 'react';
import './projects.css'; 
// import components from other packages
import {Navbar, Nav, Container, Row, Col} from 'react-bootstrap';
import {Link} from "react-router-dom";

function Projects() {
  return (
    <div>
    <Navbar bg="primary" variant="dark">
    <Navbar.Brand><Link to="/">Navbar</Link></Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link>Projects</Nav.Link>
    </Nav>
    
  </Navbar>
  {/* add container displaying personal project  */}
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
  <Row>
      <Col sm={6}> <h1>Jasmine Franklin</h1>
      <h2 className="project-title">Portfolio 3.0</h2>
        <a className="media" href="https://jas-f.github.io/portfolio-3.0/">Deployed Link</a>
        <a className="media" href="https://github.com/Jas-F/portfolio-3.0">Github Repo</a>
      </Col>
      <Col sm={6}>
        <img className="project-img" src='team.png' alt='project1'></img>
      </Col>
  </Row>
  <Row>
      <Col sm={6}> <h1>Jasmine Franklin</h1>
      <h2 className="project-title">Responsive Portfolio</h2>
        <a className="media" href="https://jas-f.github.io/responsive-portfolio/">Deployed Link</a>
        <a className="media" href="https://github.com/Jas-F/responsive-portfolio">Github Repo</a>
      </Col>
      <Col sm={6}>
        <img className="project-img" src='team.png' alt='project1'></img>
      </Col>
  </Row>
  <Row>
      <Col sm={6}> <h1>Jasmine Franklin</h1>
      <h2 className="project-title">Password Generator</h2>
        <a className="media" href="https://jas-f.github.io/team-profile-generator/">Deployed Link</a>
        <a className="media" href="https://github.com/Jas-F/team-profile-generator">Github Repo</a>
      </Col>
      <Col sm={6}>
        <img className="project-img" src='team.png' alt='project1'></img>
      </Col>
  </Row>
  <Row>
      <Col sm={6}> <h1>Jasmine Franklin</h1>
      <h2 className="project-title">My Book List</h2>
        <a className="media" href="https://my-book-list1.herokuapp.com/">Deployed Link</a>
        <a className="media" href="https://github.com/Jas-F/my-book-list">Github Repo</a>
      </Col>
      <Col sm={6}>
        <img className="project-img" src='team.png' alt='project1'></img>
      </Col>
  </Row>
  <Row>
      <Col sm={6}> <h1>Jasmine Franklin</h1>
      <h2 className="project-title">Third Party Scheduler</h2>
        <a className="media" href="https://jas-f.github.io/third-party-api-scheduler/">Deployed Link</a>
        <a className="media" href="https://github.com/Jas-F/third-party-api-scheduler">Github Repo</a>
      </Col>
      <Col sm={6}>
        <img className="project-img" src='team.png' alt='project1'></img>
      </Col>
  </Row>

</Container>
</div>



  )
}

export default Projects;
