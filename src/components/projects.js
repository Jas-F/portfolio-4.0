import React from 'react';
import './projects.css'; 
// import profile images
import portfolioSite from "../Assets/3.0.png";
import book from "../Assets/booklist.png";
import generator from "../Assets/generator.png";
import live from "../Assets/live.png";
import resp from "../Assets/responsive.png";
import team from "../Assets/team.png";

// import components from other packages
import {Navbar, Nav, Container, Row, Col} from 'react-bootstrap';
import {Link} from "react-router-dom";

function Projects() {
  return (
    <div>
    <Navbar bg="dark" variant="dark">
    <Navbar.Brand><Link to="/">Navbar</Link></Navbar.Brand>
    <Nav className="mr-auto">
      {/* reroute back to project */}
      <Nav.Link><Link to="/projects">Projects</Link></Nav.Link>
    </Nav>
    
  </Navbar>
  {/* add container displaying personal project  */}
  <Container>
  <Row>
      <Col sm={6}> 
      <h2 className="project-title">Team Profile Generator</h2>
        <a className="media" href="https://jas-f.github.io/team-profile-generator/" target="_blank">Deployed Link</a>
        <a className="media" href="https://github.com/Jas-F/team-profile-generator" target="_blank">Github Repo</a>
      </Col>
      <Col sm={6}>
        <img className="project-img" src={team} alt='project1'></img>
      </Col>
  </Row>
  <Row>
      <Col sm={6}> 
      <h2 className="project-title">Portfolio 3.0</h2>
        <a className="media" href="https://jas-f.github.io/portfolio-3.0/" target="_blank">Deployed Link</a>
        <a className="media" href="https://github.com/Jas-F/portfolio-3.0" target="_blank">Github Repo</a>
      </Col>
      <Col sm={6}>
        <img className="project-img" src={portfolioSite} alt='project1'></img>
      </Col>
  </Row>
  <Row>
      <Col sm={6}> 
      <h2 className="project-title">Responsive Portfolio</h2>
        <a className="media" href="https://jas-f.github.io/responsive-portfolio/" target="_blank">Deployed Link</a>
        <a className="media" href="https://github.com/Jas-F/responsive-portfolio" target="_blank">Github Repo</a>
      </Col>
      <Col sm={6}>
        <img className="project-img" src={resp} alt='project1'></img>
      </Col>
  </Row>
  <Row>
      <Col sm={6}> 
      <h2 className="project-title">Password Generator</h2>
        <a className="media" href="https://jas-f.github.io/team-profile-generator/" target="_blank">Deployed Link</a>
        <a className="media" href="https://github.com/Jas-F/team-profile-generator" target="_blank">Github Repo</a>
      </Col>
      <Col sm={6}>
        <img className="project-img" src={generator} alt='project1'></img>
      </Col>
  </Row>
  <Row>
      <Col sm={6}> 
      <h2 className="project-title">My Book List</h2>
        <a className="media" href="https://my-book-list1.herokuapp.com/" target="_blank">Deployed Link</a>
        <a className="media" href="https://github.com/Jas-F/my-book-list" target="_blank">Github Repo</a>
      </Col>
      <Col sm={6}>
        <img className="project-img" src={book} alt='project1'></img>
      </Col>
  </Row>
  <Row>
      <Col sm={6}> 
      <h2 className="project-title">Third Party Scheduler</h2>
        <a className="media" href="https://jas-f.github.io/third-party-api-scheduler/" target="_blank">Deployed Link</a>
        <a className="media" href="https://github.com/Jas-F/third-party-api-scheduler" target="_blank">Github Repo</a>
      </Col>
      <Col sm={6}>
        <img className="project-img" src={live} alt='project1'></img>
      </Col>
  </Row>

</Container>
</div>



  )
}

export default Projects;
