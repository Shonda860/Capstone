import React, { useCallback } from "react";
import YouTube from 'react-youtube'
import { Paper, Typography } from "@material-ui/core";
import { VideoItem } from "./VideoItem";

  const League = ({name,setSelectedLeague,id, getChannel}) => {
      function clickHandler(){
        setSelectedLeague(id)
        getChannel(id)
      }

    return <button onClick={clickHandler}>{name}</button>
   
}
export default League;