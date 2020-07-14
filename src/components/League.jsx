import React from "react";
import 'materialize-css/dist/css/materialize.min.css'
// import YouTube from 'react-youtube'
// import { Paper, Typography } from "@material-ui/core";
// import { VideoItem } from "./VideoItem";

  const League = ({name,id, getChannel}) => {
      const clickHandler =()=>{
        // setSelectedLeague(id)
        getChannel(id)  
        
      }
      
     
    return (
      <React.Fragment>
        <span>
          <button onClick={clickHandler}>{name}</button>
        </span> 
      </React.Fragment>
    
      ) 
}

export default League;