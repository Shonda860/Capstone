import React, { Component } from 'react';
import JudgeCounter from "./JudgeCounter";
// import VideoDetail from "./VideoDetail";
// import PropTypes from 'prop-types';
import callapp from "../api/callapp";
// import { Button } from 'react-bootstrap/';
// import 'bootstrap/dist/css/bootstrap.min.css';
class JudgeCounters extends Component {
    constructor(props){
      super(props)

      this.setTotalCount = this.setTotalCount.bind(this)
    }
  state = {
    artists: this.getArtist(),
    tags: ['WordPlay', 'Punchline', 'Delivery', 'Lyrical', 'Aggresion', 'Witty', 'Scheme'],
    totalCountA: 0,
    totalCountB: 0,
    isBattleOver: false,
    voteCountA: {},
    voteCountB: {}   ,
   
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

     loadSideBar() {
      if (this.state.isBattleOver){

      }else {
  
      }
    } 

   
  render() { 
      
    return ( 
      <div> 
       <p>Judge Mode</p>
      
        <p>Artist:{this.state.artists[0]}</p>  
        { this.state.tags.map(tag => <JudgeCounter userName={this.props.userName} artist={this.state.artists[0]} video={this.props.video} tag={tag} refresh={this.getVoteCount} count={this.state.voteCountA} increaseTotalCount={this.setTotalCount} whichArtist={"A"}/>)}
          <p>Total<span className="badge m-2 badge-" style={{fontSize: '20px', 
          fontWeight: "bold"}}>{this.state.totalCountA}</span></p> 

        <p>Artist:{this.state.artists[1]}</p>
        { this.state.tags.map(tag => <JudgeCounter userName={this.props.userName} artist={this.state.artists[1]} count={this.state.voteCountB} refresh={this.getVoteCount} tag={tag} video={this.props.video} increaseTotalCount={this.setTotalCount} whichArtist={"B"}/>)}
        <p>Total<span className="badge m-2 badge-" style={{fontSize: '20px', 
          fontWeight: "bold"}}>{this.state.totalCountB}</span></p> 
       
      </div>
    );
  }
}
 
export default JudgeCounters;

// String.fromCodePoint(0x1F525), String.fromCodePoint(0x1F44D), String.fromCodePoint(0x1F610), String.fromCodePoint(0x1F44E), String.fromCodePoint(0x1F636)