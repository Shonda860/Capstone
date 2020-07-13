import React, { Component } from 'react';
import Counter from "./Counter";
import VideoDetail from "./VideoDetail";
import PropTypes from 'prop-types';
// import { Button } from 'react-bootstrap/';
// import 'bootstrap/dist/css/bootstrap.min.css';
class Counters extends Component {
  state = {
    artists: this.getArtist(),
    tags: [String.fromCodePoint(0x1F525), String.fromCodePoint(0x1F44D), String.fromCodePoint(0x1F610), String.fromCodePoint(0x1F44E), String.fromCodePoint(0x1F636)]
    // counters: [
      // {id: 1, value: 0, },
      // {id: 2, value: 0 },
      // {id: 3, value: 0 },
      // {id: 4, value: 0 },
      // {id: 5, value: 0 }
    // ]
   };
    
 
    getArtist() {  
      // regex
    let pattern = /([a-zA-Z\s]*)\svs\s([a-zA-Z\s]*)/
    const title = this.props.video.snippet.title
    let result = pattern[Symbol.match](title)
    return [result[1],result[2]]
    // console.log(result,title)
   }

   
  render() { 
    return ( 
      <div> 
        <h1>{this.state.artists[0]}</h1>  
          { this.state.tags.map(tag => <Counter artist={this.state.artists[0]} tag={tag}/>)}
        <h1>{this.state.artists[1]}</h1>
        { this.state.tags.map(tag => <Counter artist={this.state.artists[1]} tag={tag}/>)}
      
      </div>
    );
  }
}
 
export default Counters;