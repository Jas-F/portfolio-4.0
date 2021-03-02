// remove portfolio folder to deploy
import './App.css';
// 
import{BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Projects from "./components/projects";
// import Projects from './components/projects';
import Home from './components/home.js';


function App() {
  return (
    <div className="App">
      {/* router that initializes routes */}
      <Router>
        <Switch>
      <Route exact path="/">
      <Home />
      </Route>
      {/* add router that requires exact path to projects */}
      <Route exact path= "/projects">
        <Projects/>
      </Route>
      </Switch>
      </Router>
    
    </div>
  );
}

export default App;
