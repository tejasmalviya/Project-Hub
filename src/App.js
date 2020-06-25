import React from 'react';
import './App.css';
import {BrowserRouter as Router,Route} from 'react-router-dom';

import NavBar from './components/navBar';
import Login from './components/login';
import SignUp from './components/signup';
import Home from './components/homePage';

function App() {
  return (
      <Router>
          <div className="App">
              <NavBar/>
              <Route path="/" exact component={Home}/>
              <Route path="/login" component={Login}/>
              <Route path="/signup" component={SignUp}/>
          </div>
      </Router>

  )
}

export default App;
