import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import NavBar from './components/navBar';
import SignUp from './components/signup';
import LoginForm from './container/LoginForm';
import HomePage from './container/HomePage';

function App() {
    return (
        <Router>
            <div className="App">
                <NavBar />
                <Route path="/" exact component={HomePage} />
                <Route path="/login" component={LoginForm} />
                <Route path="/signup" component={SignUp} />
            </div>
        </Router>

    )
}

export default App;
