# portfolio-4.0
Build a react based portfolio
<br>
===========
![Image](3.0.png)

<br>

## Pin 6 Projects

```
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
```
<br>

## Switch Between 2 pages

```
   <Router>
        <Switch>
      <Route exact path="/">
      <Home />
      </Route>
      {/* add router that requires exact path to projects */}
      <Route exact path= "/projects">
        <Projects/>
```
<br>

## Have Navbar on all pages

```
  <Navbar bg="primary" variant="dark">
        <Navbar.Brand>Navbar</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav><Link to="/projects">Projects</Link></Nav>
        </Nav>
```

<br>

## Built With

* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
* [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [Bootstrap](https://getbootstrap.com/)

## Deployed Link

* [See Live Site](https://jas-f.github.io/portfolio-4.0/)

## License

This project is licensed under the MIT License 

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## Prerequisites

Git hub,
Git lab,
Git bash,
Visual studio,
Google chrome,
Bootstrap,
JavaScript,
JQuery

## Authors

**Jasmine Franklin C: 301-332-2313 E: jasminer.franklin@gmail** 

- [Link to Portfolio Site](https://jas-f.github.io/portfolio-3.0/)
- [Link to Github](https://github.com/)
- [Link to LinkedIn](https://www.linkedin.com/in/jasmine-franklin-8b08ba121)

<p>&copy; UC Berkeley Extension Bootcamp.</p>