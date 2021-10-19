import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import './App.css';
import Landing from './pages/Landing'
import About from './pages/About'
import NavBar from './Components/navBar/index'
import Skills from './pages/Skills/index'
import Projects from './pages/Projects/index'
import Contact from './pages/Contact/index'

function App() {
  return (
    <div className='appContainer'>
        <Router>
          <Switch>
            <Route exact path="/" component={Landing} hideNavBar={true}/>
              <div>
                <NavBar/>
                <Route path="/about" component={About}/>
                <Route path="/skills" component={Skills}/>
                <Route path="/projects" component={Projects}/>
                <Route path="/contact" component={Contact}/>
              </div>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
