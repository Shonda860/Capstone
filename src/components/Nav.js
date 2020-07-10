import React, { Component } from 'react';
// import logo from "./log"
import {Link} from 'react-router-dom'
import 'materialize-css/dist/css/materialize.min.css'


class Nav extends Component {
  render () {
   
return(
  <nav>
  <div class="nav-wrapper">
    <a href="#" class="brand-logo">Encore</a>
    <ul id="nav-mobile" class="right hide-on-med-and-down">
     
      <li><Link to="/League">Leagues</Link></li>
      <li><Link to="/Battleraplogy">Battleraplogy</Link></li>
      <li><Link to="/Signin" >Sign in</Link></li>
    </ul>
  </div>
</nav>

      // <nav style={style}>
      //   <div className="our-story-header">
      //     <ul className="nav-links">
      //       <Link style={navStyle} to="/Battlerapogy"><li className="authLinks redButton">Battlerapogy</li></Link>
      //       <Link style={navStyle} to="/Leagues"><li className="authLinks redButton">Leagues</li></Link>
      //       <Link style={navStyle} to="/Sign in"><li className="authLinks redButton">Sign</li></Link>
      //       <Link style={navStyle} to="/SearchBar"><li className="authLinks redButton">Search</li></Link>
      //     </ul>
      //   </div>
      // </nav>
    );
  }
};
export default Nav;