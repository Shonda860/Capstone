import React, { useState } from "react";
import { Grid} from "@material-ui/core";
import './App.css';
// import styles from './mystyle.module.css'; 
import {  LyricsCard,SearchBar,VideoList, VideoDetail, League,Home,Nav, Battleraplogy} from "./components";
import {
  Switch,
  Route,
} from "react-router-dom";
import youtube from "./api/youtube";


export default () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [showList, setShowList] = useState(true)
 

  // const [selectedLeague, setSelectedLeague] = useState(null);
  

  const onPlay =() => {
    setShowList(false) 
    // console.log('inside onPlay')
  }

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
    setVideos(videos);
    setSelectedVideo(videos[0]);} 
    catch(err){
      // console.log(err)
    }
  }
 
  return (
    <React.Fragment>
    <Nav/> 
    <Switch>
    <Route exact path="/">
      <Home/>
    </Route>
    <Route exact path="/league">
        <Grid item xs={11}>
          <Grid container spacing={10}>
            <Grid item xs={12}>   
       
           
            <League name="KOTD" getChannel={getChannel} id='UCIuFtIO8i_XqA8lM7q4B1FQ' /> 
              <League name="URL"  getChannel={getChannel} id='UCIuFtIO8i_XqA8lM7q4B1FQ' />
          <League name="PG" getChannel={getChannel} id='UCIuFtIO8i_XqA8lM7q4B1FQ' />
          <League name="QUEEN OF THE RING" getChannel={getChannel} id='UCIuFtIO8i_XqA8lM7q4B1FQ' /> <League name="BULLPEN" getChannel={getChannel} id='UCIuFtIO8i_XqA8lM7q4B1FQ' /> 
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
     
    </Route>
    <Route export path="/battleraplogy">
    <Battleraplogy/>
    </Route>
    <Route export path="/lyricscard">
    <LyricsCard/>
    </Route>
    
    </Switch>

    </React.Fragment>
  ); 
}


      
