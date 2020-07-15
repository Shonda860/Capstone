import React, { Component } from 'react';
import Counter from "./Counter";
import VideoDetail from "./VideoDetail";
import PropTypes from 'prop-types';
import callapp from "../api/callapp";
// import { Button } from 'react-bootstrap/';
// import 'bootstrap/dist/css/bootstrap.min.css';
class Counters extends Component {
    constructor(props){
      super(props)

      this.increaseTotalCount = this.increaseTotalCount.bind(this)
    }
  state = {
    artists: this.getArtist(),
    tags: [String.fromCodePoint(0x1F525), String.fromCodePoint(0x1F44D), String.fromCodePoint(0x1F610), String.fromCodePoint(0x1F44E), String.fromCodePoint(0x1F636)],
    totalCountA: 0,
    totalCountB: 0,
    isBattleOver: false,
   };
    
   async getVoteCount(artist){

     const call = await callapp.get("/",{
        params: {
          artist: artist,
          videoId: this.props.video.id.videoId
        }
      })
        console.log(call)
   }

  
 
    getArtist() {  
      // regex
    let pattern = /([a-zA-Z\s]*)\svs\s([a-zA-Z\s]*)/
    const title = this.props.video.snippet.title
    let result = pattern[Symbol.match](title)
    this.getVoteCount(result[1])
    return [result[1],result[2]]

    // console.log(result,title)
   }
    
    increaseTotalCount(artistName){
      if (artistName === "A"){
        this.setState({totalCountA: this.state.totalCountA + 1})
      } else {this.setState({totalCountB: this.state.totalCountB + 1})}
      // this.state.totalCount += 1
      console.log(this.state.totalCount)
    } ;

     loadSideBar() {
      if (this.state.isBattleOver){

      }else {
  
      }
    } 


   
  render() { 
      
    return ( 
      <div> 
       <p>Fan Mode</p>
      
      
        <h3>Artist:{this.state.artists[0]}</h3>  
          { this.state.tags.map(tag => <Counter artist={this.state.artists[0]} video={this.props.video}tag={tag} increaseTotalCount={this.increaseTotalCount} whichArtist={"A"}/>)}
          <p>Total<span className="badge m-2 badge-" style={{fontSize: '20px', 
          fontWeight: "bold"}}>{this.state.totalCountA}</span></p> 
        <h3>Artist:{this.state.artists[1]}</h3>
        { this.state.tags.map(tag => <Counter artist={this.state.artists[1]} tag={tag} video={this.props.video} increaseTotalCount={this.increaseTotalCount} whichArtist={"B"}/>)}
        <p>Total<span className="badge m-2 badge-" style={{fontSize: '20px', 
          fontWeight: "bold"}}>{this.state.totalCountB}</span></p> 
       
      </div>
    );
  }
}
 
export default Counters;