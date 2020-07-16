import React, { Component }  from 'react'
import './Header.css'
import YouTube from 'react-youtube'
import ReactPlayer from "react-player";
import crowd from './img/nicholas-green-nPz8akkUmDI-unsplash.jpg'
import OurModal from "./OurModal";

class Header extends Component {

  componentDidMount() {
    const M = window.M;
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.carousel');
      var instances = M.Carousel.init(elems, {});
    });
  }

  render() { 
    return (  <div className="carousel carousel-slider center">
    <div className="carousel-fixed-item center">
      <a className="btn waves-effect white grey-text darken-text-2">button</a>
    </div>
    <div className="carousel-item black white-text" href="#one!">
      <h2> B. Dot / Geechi Gotti vs A. Ward / Loso</h2>
      <p className="white-text">KOTD x #INVASION </p>
      <iframe width="350px" height="200px"src="//www.youtube.com/embed/Nq-APDNbdD8" frameborder="1" ></iframe>
    </div>
    <div className="carousel-item black white-text" href="#two!">
      <h2>Bangz vs Chef Trez</h2>
      <p className="white-text"> iBattleTV x #FREESTYLE BATTLE</p>
      <iframe width="350px" height="200px"src="//www.youtube.com/embed/HyWL6_er5n4" frameborder="1" ></iframe>
    </div>
    <div className="carousel-item black white-text" href="#three!">
      <h2>Conceited vs Charlie Clips</h2>
      <p className="white-text">KOTD x #BLACKOUT4</p>
      <iframe width="350px" height="200px"src="//www.youtube.com/embed/6o6c9lTG5_E" frameborder="1" ></iframe>
    </div>
    <div className="carousel-item black white-text" href="#four!">
      <h2>Charlie Clips / Goodz vs Hitman Holla / John John Da Don </h2>
      <p className="white-text">URLTV</p>
      <iframe width="350px" height="200px"src="//www.youtube.com/embed/WNFpyVhuMvg" frameborder="1" ></iframe>
      </div>
      <div className="carousel-item black white-text" href="#four!">
      <h2>WELCOME to ENCORE </h2>
      <p className="white-text"></p>
      <OurModal/>
      </div>
  </div>  
  );
  }
}
 
export default Header;

// <div className="carousel"><h1>Featured Videos:</h1>
//     <a className="carousel-item" href="#one!"><img src="https://i.ytimg.com/vi/t-Lg7p1Z1eo/hqdefault.jpg"/></a>
//     <a className="carousel-item" href="#two!"><img src="https://i.ytimg.com/vi/6o6c9lTG5_E/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBRVx9sxFiOm6b2R83mYgZ-K4TySw"/></a>
//     <a className="carousel-item" href="#three!"><img src="https://i.ytimg.com/vi/PRPqpDa7k4E/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLA4mYE7bFXJ3qYD_ZRWh4aXlq-8TA"/></a>
//     <a className="carousel-item" href="#four!"><img src="https://i.ytimg.com/vi/_PFpLKgDyTU/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCae1URVf0AzmJPeyNLnw9tV8c6NQ"/></a>
//     <a className="carousel-item" href="/watch?v=LCr-NSaOuWI&t=364s"><img src="https://i.ytimg.com/vi/1ldNF1DBBEg/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDgKBmUS_7dyfjvZERinodAiCVGRw"/></a>
//   </div>