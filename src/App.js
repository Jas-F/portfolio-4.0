// remove portfolio folder to deploy
import './App.css';
import{Route, Router} from "react-router-dom";
import Projects from "./components/projects";
// import Projects from './components/projects';
import Home from './components/home.js';


function App() {
  return (
    <div className="App">
      <Router>
      <Route path="/">
      <Home />
      </Route>
      {/* add router that requires exact path to projects */}
      <Route exact path= "/projects">
        <Projects/>
      </Route>
      </Router>
    
    </div>
  );
}

export default App;
