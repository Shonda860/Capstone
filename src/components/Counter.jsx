import React, { Component } from 'react';
import callapp from "../api/callapp";

class Counter extends Component {
    state = {
      count: 0,
      // tags: ['Fire', 'Like', 'OK', 'Dislike', 'Wack']
      total: []
    };

   handleIncrement = () => {
    this.addVote() 
    this.setState({ count: this.state.count + 1 });
     this.props.increaseTotalCount(this.props.whichArtist)
     
   }
   async addVote(){
    const call = await callapp.post("/",{
        artist: this.props.artist,
        videoId: this.props.video.id.videoId,
        userName: "shonda",
        tagId: this.props.tag,
    },
      {headers:{'Content-Type': 'application/x-www-form-urlencoded'}
  })
      console.log(call)
   }

  render() { 
    console.log("props", this.props)
    // const {count} = this.props;

    // let totalCount = 0;

    // totalCount += this.state.count
    // console.log("Total" + totalCount)

    
    return (
      <div>
          <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm m-2">{this.props.tag}</button>
          <span style={{fontSize: '20px',
          fontWeight: "bold"}} className= {this.getBadgeClasses()}>{this.formatCount()}</span>
      </div>
  );
}

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

formatCount(){
  const {count} = this.state;
  return count === 0 ? "Zero" : count
}



}
export default Counter;