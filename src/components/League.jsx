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
        <span style={{float: 'right'}}>
          <a href={"/league#" + name} style={{marginRight: "30px"}}className="btn-small red " onClick={clickHandler}>{name}</a>
        </span> 
      </React.Fragment>
    
      ) 
}

export default League;