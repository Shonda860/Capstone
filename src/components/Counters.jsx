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

      this.setTotalCount = this.setTotalCount.bind(this)
    }
  state = {
    artists: this.getArtist(),
    tags: [String.fromCodePoint(0x1F525), String.fromCodePoint(0x1F44D), String.fromCodePoint(0x1F610), String.fromCodePoint(0x1F44E), String.fromCodePoint(0x1F636)],
    totalCountA: 0,
    totalCountB: 0,
    isBattleOver: false,
    voteCountA: {},
    voteCountB: {} 
   };

 componentDidMount() {
     this.getVoteCount()
  
  }
   
   getVoteCount =() =>{
    const artists = this.getArtist()
     callapp.get("/",{
        params: {
          artist: artists[0],
          videoId: this.props.video.id.videoId
        }
      }).then((call) => {
        this.setState({voteCountA: call.data})
        this.setTotalCount("A")
     
      })
      callapp.get("/",{
        params: {
          artist: artists[1],
          videoId: this.props.video.id.videoId
        }
      }).then((call) => {
        this.setState({voteCountB: call.data})
        this.setTotalCount("B")
      })   
   }

 
    getArtist() {  
      // regex
    let pattern = /([a-zA-Z\s]*)\svs\s([a-zA-Z\s]*)/
    const title = this.props.video.snippet.title
    let result = pattern[Symbol.match](title)
    
    return [result[1],result[2]]

    // console.log(result,title)
   }
    
    setTotalCount(artistName){
      let total = 0
      
      if (artistName === "A"){
        Object.values(this.state.voteCountA).forEach(value => { total += value})
        this.setState({totalCountA:total})
      } else {
        Object.values(this.state.voteCountB).forEach(value => { total += value})}
        this.setState({totalCountB:total})
    }

    

    handleDelete = () => {
     console.log("Event Handler Called")
       
     }
   
  render() { 
      
    return ( 
      <div> 
       <p>Fan Mode</p>
      
        <h3>Artist:{this.state.artists[0]}</h3>  
        { this.state.tags.map(tag => <Counter artist={this.state.artists[0]} video={this.props.video} onDelete={this.handleDelete} tag={tag} refresh={this.getVoteCount} count={this.state.voteCountA} increaseTotalCount={this.setTotalCount} whichArtist={"A"}/>)}
          <p>Total<span className="badge m-2 badge-" style={{fontSize: '20px', 
          fontWeight: "bold"}}>{this.state.totalCountA}</span></p> 

        <h3>Artist:{this.state.artists[1]}</h3>
        { this.state.tags.map(tag => <Counter artist={this.state.artists[1]} count={this.state.voteCountB} refresh={this.getVoteCount} tag={tag} video={this.props.video} increaseTotalCount={this.setTotalCount} whichArtist={"B"}/>)}
        <p>Total<span className="badge m-2 badge-" style={{fontSize: '20px', 
          fontWeight: "bold"}}>{this.state.totalCountB}</span></p> 
       
      </div>
    );
  }
}
 
export default Counters;

// String.fromCodePoint(0x1F525), String.fromCodePoint(0x1F44D), String.fromCodePoint(0x1F610), String.fromCodePoint(0x1F44E), String.fromCodePoint(0x1F636)