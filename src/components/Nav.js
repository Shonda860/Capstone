import React, { Component } from 'react';
// import logo from "./log"
import {Link} from 'react-router-dom'
import 'materialize-css/dist/css/materialize.min.css'
import Image from './img/crowd_silhouette.png'
import './Nav.css';
import Signin from "./Signin";



class Nav extends Component {
  constructor(props){
    super(props)}
  componentDidMount(){
    const M = window.M;
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.sidenav');
      var instances = M.Sidenav.init(elems, {});
    });
  }

render () {
 
  
return(
  <nav className= "black" >
    <div className="nav-wrapper ">
    <a href="#" data-target="slide-out" className="sidenav-trigger show-on-large"><i className="material-icons">menu</i></a>
      <a href="/" className="brand-logo logo red-text">ENCORE</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
         <li><Link to="/voting" >Voting</Link></li>
         <li><Link to="/league">Leagues</Link></li>
        <li><Link to="/battlerapology">Battlerapology</Link></li>
       
       <li><Link to="/Signin" > <Signin usernameCallback={this.props.usernameCallback}/></Link></li>
      </ul>
    </div>
</nav>
    );
  }
  
};
export default Nav;