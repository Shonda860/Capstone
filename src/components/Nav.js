import React, { Component } from 'react';
// import logo from "./log"
import {Link} from 'react-router-dom'


    const navStyle ={
      color: 'white'
    }

class Nav extends Component {
  render () {
    const style = {
      margin: 0,
      top: 0,
      right: 60,
   bottom:20,
      left: 'auto',
      position: 'fixed',
  };
return(

      <nav style={style}>
        <div className="our-story-header">
          <ul className="nav-links">
            <Link style={navStyle} to="/Battlerapogy"><li className="authLinks redButton">Battlerapogy</li></Link>
            <Link style={navStyle} to="/Leagues"><li className="authLinks redButton">Leagues</li></Link>
            <Link style={navStyle} to="/Sign in"><li className="authLinks redButton">Sign</li></Link>
            <Link style={navStyle} to="/SearchBar"><li className="authLinks redButton">Search</li></Link>
          </ul>
        </div>
      </nav>
    );
  }
};
export default Nav;