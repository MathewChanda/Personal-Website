import React from 'react'
import Contact from "./Components/Contact"; 
import Resume from './Components/Resume'
import Footer from "./Components/Footer"
import Home from "./Components/Home"
import Projects from './Components/Projects';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import './App.css';


class App extends React.Component {

  constructor(){
    super()
  }

  render(){
    return (
     <div>
       <Router>
          <Switch>

            <Route exact path="/"> 
              <Redirect to="/home"/>
            </Route>

            <Route path="/home">
              <Home/>
            </Route>
            <Route path="/Contact">
              <Contact/>
            </Route>

            <Route path="/resume">
              <Resume/>
            </Route>

            <Route path="/Projects">
              <Projects/>
            </Route>

            <Route path="*">
              <Redirect to="/home"/>
            </Route>  
          </Switch>
      </Router>
      <Footer/>
     </div>
    )
  }
}

export default App;
