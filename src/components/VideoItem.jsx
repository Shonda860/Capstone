import React from "react";
import { Grid, Paper, Typography } from "@material-ui/core";
import Typed from "react-typed";

export default ({ video, onVideoSelect }) => {
  return (
    <div>
       <h3><Typed style={{marginLeft: "90px"}} className="select-text" strings={["Select A Video"]} typeSpeed={30} loop/></h3>

    <Grid item xs={8}>
      <Paper style={{ display: "flex", alignItems: "center", cursor: "pointer" }} onClick={() => onVideoSelect(video)} >
        <img  alt="thumbnail" src={video.snippet.thumbnails.medium.url} />
       <Typography variant="subtitle1">
         <b>{video.snippet.title}</b>
     </Typography>
      </Paper>
    </Grid>
    </div>
  );
}
