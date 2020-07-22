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

  
  return (
    <Grid container spacing={4} style={{marginLeft: "140px", marginTop: "80px"}}>
      {listOfVideos}
    </Grid>
  );
}