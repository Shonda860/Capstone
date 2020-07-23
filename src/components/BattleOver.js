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
      

    
    

    console.log("look", artistA.votes)
    console.log ("total A", totalA)
    // console.log ("propsA", this.state.mode)
    // console.log ("modeA",modeVoteKeys[mode])
    const artistAModeVotes = getModeVotes(this.props.mode, artistA.votes)
    const artistBModeVotes = getModeVotes(this.props.mode, artistB.votes)
  
      return (
        <div style={{marginLeft: "40px"}}>
          <Box display="flex" style={{marginLeft: "40px"}} >
            <Box className="black" borderRadius={16} {...defaultProps}>
              <h1 className="title" style={{marginLeft: "40px"}}>Battle Over</h1>
            
              
              <div class="row" style={{marginLeft: "60px"}}>
              <div class="col s4">
               <p>{artistA.name}</p> 
                  <span>{Object.entries(artistAModeVotes).map(([key,value]) => { totalA += value
        return (  <p>{key} : {value.toString()}</p>)})}
                <span>{totalA}</span>
                
                </span>
              </div><div class="col s4" style={{marginLeft: "50px"}}> <p>{artistB.name}</p>  <span>{Object.entries(artistBModeVotes).map(([key,value]) => { totalB += value
                return (  <p>{key} : {value.toString()}</p>)})}
                        <span>{totalB}</span>
                        
                        </span>
             </div><span><h3 className="title red-text" style={{marginLeft: "40px"}}>Winner<span className="red-text">{artistA.name}</span></h3></span></div> 
        </Box>
        </Box>
      
      
      </div>
      ) 
  }

}
 
export default BattleOver;

