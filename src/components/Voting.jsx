import React from "react";
import 'materialize-css/dist/css/materialize.min.css'
// import YouTube from 'react-youtube'
// import { Paper, Typography } from "@material-ui/core";
// import { VideoItem } from "./VideoItem";

  const Voting = ({name,id, getChannel}) => {
      const clickHandler =()=>{
        // setSelectedLeague(id)
        getChannel(id)  
        
    }

    return (
      <React.Fragment>
<<<<<<< HEAD:src/components/League.jsx
        <span style={{float: 'right'}}>
          <a href={"/league#" + name} style={{marginRight: "30px"}}className="btn-small red " onClick={clickHandler}>{name}</a>
=======
        <span style={{float:"right", marginTop:"50px"}}>
          <a href={"/voting#" + name} className="btn-small deep-orange" style={{ marginLeft: '10px'}} onClick={clickHandler}>{name}</a>
>>>>>>> local:src/components/Voting.jsx
        </span> 
      </React.Fragment>
    
      ) 
}

export default Voting;