import React from 'react';
import './home.css';
// import components from other packages
import {Navbar, Nav, Container, Row, Col} from 'react-bootstrap';
import {Link} from "react-router-dom";

// create navbar
function Home() {
    return (
        <div>
          {/* show project route using link */}
        <Navbar bg="primary" variant="dark">
        <Navbar.Brand>Navbar</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav><Link to="/projects">Projects</Link></Nav>
        </Nav>
        
      </Navbar>
{/* add container housing about me info*/}
      <Container>
          <Row>
              <Col sm={12}> <h1>Jasmine Franklin</h1>
              <h2 className="bio">Washington D.C. | jasminer.franklin@gmail.com | (301) 332-2313</h2>
              <p>My name is Jasmine Franklin, I am a developer seeking a position in financial technology. My background is in biological research and business. I possess a B.S in animal science and recently earned a certificate in full-stack web development from UC Berkeley Extension, with recently developed skills in Javascript, Python, and Node.js. I have worked on several research projects within the USDA, one of which resulted in a publication. I also possess experience in finance, economics, and HR. I have a passion for business, I am a problem solver, great communicator, and hardworking.</p>
              <h2>Follow my work</h2>
                <a className="media" href="https://www.linkedin.com/in/jasmine-franklin-8b08ba121">LinkedIn</a>
                <a className="media" href="https://github.com/Jas-F">Github</a>
                <a className="media" href="New Resume.pdf">Resume</a>
              </Col>
          </Row>
      </Container>
      </div>
    
    )
}

export default Home;
