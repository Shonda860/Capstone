import React, {Component} from 'react';
import Box from '@material-ui/core/Box';
import './BattleOver.css'
class BattleOver extends Component {

  render() { 
    let obj = this.props.userVoteCount

    const artistA = obj[0]
    // const artistAVotes = artistA.votes
    const defaultProps = {
      bgcolor: 'background.paper',
      borderColor: 'text.primary',
      m: 1,
      border: 1,
      style: { width: '600px', height: '500px' },
    };
     
   
    console.log("look", artistA)
    return (
      {Object.entries(artistA.votes).map(([key,value]) => {
        <div>{key} : {value.toString()}</div>
     })}
      // <div style={{marginLeft: "40px"}}>
      //   <Box display="flex" style={{marginLeft: "40px"}} >
      //   <Box className="black" borderRadius={16} {...defaultProps} ><h1 className="title" >Battle Over</h1><span><p></p><p>Votes</p>
      
      //    </span>
      //   </Box>
      //   </Box>
      //   </div> 
       );
  }
}
 
export default BattleOver;

// `${this.props.userVoteCount}`

// look 
// {TAY ROC: {…}, "BAD NEWZ hosted by John John Da Don ": {…}}
// "BAD NEWZ hosted by John John Da Don ":
// Aggresion: 1
// Delivery: 1
// Lyrical: 1
// Punchline: 1
// Witty: 2
// 👍: 9
// 👎: 7
// 🔥: 3
// 😐: 2
// 😶: 3
// __proto__: Object

// look 
// {TAY ROC: {…}, "BAD NEWZ hosted by John John Da Don ": {…}}
// "BAD NEWZ hosted by John John Da Don ":
// Aggresion: 1
// Delivery: 1
// Lyrical: 1
// Punchline: 1
// Witty: 2
// 👍: 9
// 👎: 7
// 🔥: 3
// 😐: 2
// 😶: 3
// __proto__: Object