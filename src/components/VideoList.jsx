import React from "react";
import { Grid } from "@material-ui/core";
import '../App.css';
import './VideoList.css'
import Typed from "react-typed";

import VideoItem from "./VideoItem";

export default ({ videos, onVideoSelect }) => {
  const listOfVideos = videos.map(video => (
    <VideoItem
      onVideoSelect={onVideoSelect}
      key={video.id.videoId}
      video={video}
    />
  ));

  let header;
  if (listOfVideos.length === 0){
    header = ""
  }else {
    header =  <h3><Typed style={{marginLeft: "300px"}} className="select-text" strings={["Select A Video"]} typeSpeed={30} loop/></h3>
  }
  return (
    <React.Fragment>
    {header}
    <Grid container spacing={4} style={{marginLeft: "140px", marginTop: "80px"}}>
      {listOfVideos}
    </Grid>
    </React.Fragment>
  );
}