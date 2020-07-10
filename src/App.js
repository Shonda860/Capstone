import React, { useState } from "react";
import { Grid, Button } from "@material-ui/core";
import './App.css';
// import styles from './mystyle.module.css'; 
import { SearchBar, VideoList, VideoDetail, League} from "./components";

import youtube from "./api/youtube";

export default () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [showList, setShowList] = useState(true)
 

  const [selectedLeague, setSelectedLeague] = useState(null);
  

  const onPlay =() => {
    setShowList(false) 
    console.log('inside onPlay')
  }
   
  return (
  
   

    <Grid style={{ justify: "center" }} container spacing={10}>
      <Grid item xs={11}>
        <Grid container spacing={10}>
          <Grid item xs={12}>
            <SearchBar onSubmit={handleSubmit} />  
            <League name="KOTD" getChannel={getChannel} id='UCIuFtIO8i_XqA8lM7q4B1FQ' setSelectedLeague={setSelectedLeague}/>
              <League name="URL"  getChannel={getChannel} id='UCIuFtIO8i_XqA8lM7q4B1FQ' setSelectedLeague={setSelectedLeague}/>
              <League name="PG" getChannel={getChannel} id='UCIuFtIO8i_XqA8lM7q4B1FQ' setSelectedLeague={setSelectedLeague}/>
              <League name="QUEEN OF THE RING" getChannel={getChannel} id='UCIuFtIO8i_XqA8lM7q4B1FQ' setSelectedLeague={setSelectedLeague}/>
              <League name="BULLPEN" getChannel={getChannel} id='UCIuFtIO8i_XqA8lM7q4B1FQ' setSelectedLeague={setSelectedLeague}/>
          </Grid>
          <Grid item xs={8}>
            <VideoDetail video={selectedVideo} onPlay={onPlay} />
          </Grid>
          <Grid item xs={4}>
              { showList && <VideoList 
           videos={videos} onVideoSelect={setSelectedVideo} />}
           
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );

  async function handleSubmit(searchTerm) {
    const { data: { items: videos } } = await youtube.get("search", {
      params: {
        part: "snippet",
        maxResults: 5,
        key: process.env.REACT_APP_API_KEY,
        q: searchTerm,
      }
    });
 
    setVideos(videos);
    setSelectedVideo(videos[0]);
  }

  async function getChannel(id) {
      try {const { data: { items: videos } } = await youtube.get("search", {
        params: {
          part: "snippet",
          channelId: id,
          key: process.env.REACT_APP_API_KEY,
        } 
      });
    setVideos(videos);} catch(err){
      console.log(err)
    }
  }
}

