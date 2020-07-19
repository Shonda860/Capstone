import React, { Component }  from 'react'
import './Carousel.css'
import YouTube from 'react-youtube'
import ReactPlayer from "react-player";
import crowd from './img/nicholas-green-nPz8akkUmDI-unsplash.jpg'
import OurModal from "./OurModal";
import Home from "./Home";

class Carousel extends Component {

  componentDidMount() {
    const M = window.M;
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.carousel');
      var instances = M.Carousel.init(elems, {fullWidth: true,indicators: true
      });
    });
  }

  render() { 
    return ( 
      <section> 
     <div className="carousel carousel-slider center"  >
    <div className="carousel-item header_text black-text" href="#one!">
      <h2> B. Dot / Geechi Gotti vs A. Ward / Loso</h2>
      <p className="black-text">KOTD x #INVASION </p>
      <iframe className="frame-border" width="400px" height="225px"src="//www.youtube.com/embed/Nq-APDNbdD8" frameborder="1" ></iframe>
    </div>
    <div className="carousel-item  header_text black-text" href="#two!">
      <h2>Bangz vs Chef Trez</h2>
      <p className="black-text"> iBattleTV x #FREESTYLE BATTLE</p>
      <iframe className="frame-border" width="400px" height="225px"src="//www.youtube.com/embed/HyWL6_er5n4" frameborder="1" ></iframe>
    </div>
    <div className="carousel-item header_text black-text" href="#three!">
      <h2>Conceited vs Charlie Clips</h2>
      <p className="black-text">KOTD x #BLACKOUT4</p>
      <iframe className="frame-border" width="400px" height="225px"src="//www.youtube.com/embed/6o6c9lTG5_E" frameborder="1" ></iframe>
    </div>
    <div className="carousel-item header_text black-text" href="#four!">
      <h2>Charlie Clips / Goodz vs Hitman Holla / John John Da Don </h2>
      <p className="black-text">URLTV</p>
      <iframe className="frame-border" width="400px" height="225px"src="//www.youtube.com/embed/WNFpyVhuMvg" frameborder="5" ></iframe>
      </div>  
    </div> 
    <Home/>
    </section>
  );
  }
}
 
export default Carousel;



// <div className="carousel-item  black-text" href="#four!">
// <h2>WELCOME to ENCORE </h2>
// <p className="black-text"></p>
// <OurModal/>
// </div>