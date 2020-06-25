import React,{Component} from 'react';
import {Link} from "react-router-dom";
import './css/navBar.css';

class NavBar extends Component {
  render() {
    return (
        <header className="toolbar">
          <nav className="toolbar_navigation">
            <div />
            <div className="toolbar_logo">
              <Link to='/'>
              Project Hub
              </Link>
            </div>
            <div className="spacer" />
            <div className="toolbar_navigation-items">
              <ul>
                <li>
                  <Link to='/login'>
                  Login
                  </Link>
                </li>
                <li>
                  <Link to='/signup'>
                    SignUp
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </header>

      );
  }
}

export default NavBar;