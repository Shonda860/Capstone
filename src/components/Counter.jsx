import React, { Component } from 'react';
import callapp from "../api/callapp";

class Counter extends Component {
    state = {
      // tags: ['Fire', 'Like', 'OK', 'Dislike', 'Wack']
      total: [],
      count:0
    };
    
   handleIncrement = () => {
    this.addVote() 
    this.props.refresh()
    this.props.increaseTotalCount(this.props.whichArtist)
     
   }
  
  async addVote(){
    const call = await callapp.post('/',{
          artist: this.props.artist,
          videoId: this.props.video.id.videoId,
          userName: this.props.userName,
          tagId: this.props.tag,
          // headers:{'Content-Type': 'application/x-www-form-urlencoded'},   
      //  }
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
          <button onClick={this.handleIncrement} className="btn deep-orange btn-sm m-2" style={{marginTop: "10px"}}>{this.props.tag}</button>

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
  const count = this.props.count[this.props.tag];
  return !count ? "Zero" :count
  
}



}
export default Counter;

   // <button onClick={()=>this.props.onDelete(this.props.tag)} className="btn btn-danger btn-sm m-2">Delete</button>