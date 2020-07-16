import React, { Component } from 'react';
// import logo from "./log"
import {Link} from 'react-router-dom'
import 'materialize-css/dist/css/materialize.min.css'


class Nav extends Component {

  componentDidMount(){
    const M = window.M;
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.sidenav');
      var instances = M.Sidenav.init(elems, {});
    });
  }


render () {
   
return(
  <nav className="teal">
    <div className="nav-wrapper">
    <a href="#" data-target="slide-out" className="sidenav-trigger show-on-large"><i className="material-icons">menu</i></a>
      <a href="#" className="brand-logo">ENCORE</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><Link to="/League">Leagues</Link></li>
        <li><Link to="/Battleraplogy">Battleraplogy</Link></li>
        <li><Link to="/LyricsCard" >LyricsCard</Link></li>
        <li><Link to="/Signin" >Sign in</Link></li>
      </ul>
    </div>
    <ul id="slide-out" class="sidenav">
    <li><div class="user-view">
      <div className="background">
        <img src="images/office.jpg"/>
      </div>
      <a href="#user"><img className="circle" src="images/yuna.jpg"/></a>
      <a href="#name"><span className="white-text name">John Doe</span></a>
      <a href="#email"><span className="white-text email">jdandturk@gmail.com</span></a>
    </div></li>
    <li><a href="#!"><i className="material-icons">assignment_ind</i>Signed in as</a></li>
    <li><a href="#!">Vote History</a></li>
    <li><div className="divider"></div></li>
    <li><a className="subheader">Favorite Battles</a></li>
    <li><a className="waves-effect" href="#!">Battle Name#1</a></li>
    <li><a className="waves-effect" href="#!">Battle Name#2</a></li>
  </ul>
</nav>
    );
  }
  
};
export default Nav;