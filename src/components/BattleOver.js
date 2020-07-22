import React, {Component} from 'react';
import Box from '@material-ui/core/Box';
import './BattleOver.css'
class BattleOver extends Component {

  render() { 
    let obj = this.props.userVoteCount

    const artistA = obj[0]
    const artistB = obj[1]
    // const artistAVotes = artistA.votes
    const defaultProps = {
      bgcolor: 'background.paper',
      borderColor: 'text.primary',
      m: 1,
      border: 1,
      style: { width: '600px', height: '500px' },
    };
     
    const modeVoteKeys = {
      "Judge Mode": ['WordPlay', 'Punchline', 'Delivery', 'Lyrical', 'Aggression', 'Witty', 'Scheme' ],
     "Fan Mode": [String.fromCodePoint(0x1F525), String.fromCodePoint(0x1F44D), String.fromCodePoint(0x1F610), String.fromCodePoint(0x1F44E), String.fromCodePoint(0x1F636)],
    }
     const getModeVotes = (mode,votes) => {
        const allowed = modeVoteKeys[mode]
        const filtered = Object.keys(votes)
          .filter(key => allowed.includes(key))
          .reduce((obj, key) => {
            return {
              ...obj,
              [key]: votes[key]
            };
  }, {});
  return filtered;
     }
      let totalA = 0; 
      let totalB = 0;


    console.log("look", artistA)
    // console.log ("propsA", this.state.mode)
    // console.log ("modeA",modeVoteKeys[mode])
    const artistAModeVotes = getModeVotes(this.props.mode, artistA.votes)
    const artistBModeVotes = getModeVotes(this.props.mode, artistB.votes)
    console.log("votes", artistAModeVotes,artistBModeVotes)
    console.log("indv", artistA.votes,artistB.votes)
      return (<div style={{marginLeft: "40px"}}><Box display="flex" style={{marginLeft: "40px"}} ><Box className="black" borderRadius={16} {...defaultProps}><h1 className="title" >Battle Over</h1><span>{Object.entries(artistAModeVotes).map(([key,value]) => { totalA += value
       return (  <p>{key} : {value.toString()}</p>)})}<p>{totalA}</p></span><span>{Object.entries(artistBModeVotes).map(([key,value]) => { totalB += value
        return (  <p>{key} : {value.toString()}</p>)})}<p>{totalB}</p></span></Box></Box>
      
      
      </div>
      )
  }
}
 
export default BattleOver;


  // <div style={{marginLeft: "40px"}}>
      //   <Box display="flex" style={{marginLeft: "40px"}} >
      //   <Box className="black" borderRadius={16} {...defaultProps} ><h1 className="title" >Battle Over</h1><span><p></p><p>Votes</p>
      
      //    </span>
      //   </Box>
      //   </Box>
      //   </div> 
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