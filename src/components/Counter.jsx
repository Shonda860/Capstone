import React, { Component } from 'react';


class Counter extends Component {
    state = {
      count: 0
      // tags: ['Fire', 'Like', 'OK', 'Dislike', 'Wack']
    };

   handleIncrement = () => {
     this.setState({ count: this.state.count + 1 });

   }
    

  render() { 
    console.log("props", this.props)
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