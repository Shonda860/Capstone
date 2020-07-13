import React, { useState } from "react";
import { Grid,Paper} from "@material-ui/core";
import './App.css';
// import styles from './mystyle.module.css'; 
import { Counters,LyricsCard,SearchBar,VideoList, VideoDetail, League,Home,Nav, Battleraplogy} from "./components";
import {
  Switch,
  Route,
} from "react-router-dom";
import youtube from "./api/youtube";


export default () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [showList, setShowList] = useState(true)
  const [showLyrics, setShowLyrics] = useState(false)
 

  // const [selectedLeague, setSelectedLeague] = useState(null);
  

  const onPlay =() => {
    setShowList(false) 
    // console.log('inside onPlay')
    setShowLyrics(true) 
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
            <div><img src="//yt3.ggpht.com/a/AATXAJyk1L5-eHwsfx6H0LCD9cA-UFQQ1ftcXOHA_nfdtA=s176-c-k-c0x00ffffff-no-rj-mo"/><img src="//yt3.ggpht.com/a/AATXAJyk0_56ZQQc7LOvuDf86jN754DOZoblFSjdj_Wh=s176-c-k-c0x00ffffff-no-rj-mo"/><img src="//yt3.ggpht.com/a/AATXAJwfFbPNm_7FMgULpqFEhlVGnKO9Q4kdFazxbHS0hg=s176-c-k-c0x00ffffff-no-rj-mo"/><img src="//yt3.ggpht.com/a/AATXAJwfFbPNm_7FMgULpqFEhlVGnKO9Q4kdFazxbHS0hg=s176-c-k-c0x00ffffff-no-rj-mo"/><img src=""/><img src="//yt3.ggpht.com/a/AATXAJwfFbPNm_7FMgULpqFEhlVGnKO9Q4kdFazxbHS0hg=s176-c-k-c0x00ffffff-no-rj-mo"/><img src=""/></div>
            <div>
            <League name="KOTD" getChannel={getChannel} id='UCIuFtIO8i_XqA8lM7q4B1FQ' /> 
              <League name="URL"  getChannel={getChannel} id='UCflIAeM03JFL9ml03LwYF-g'/>
          <League name="UDUBB" getChannel={getChannel} id='UCIuFtIO8i_XqA8lM7q4B1FQ' />
          <League name="QUEEN OF THE RING" getChannel={getChannel} id='UCIuFtIO8i_XqA8lM7q4B1FQ' /> <League name="BULLPEN" getChannel={getChannel} id='UCY-ME2gHi5DvKw4iMnOIziA' /> </div> 
            </Grid>
            <Grid item xs={8}>
              <VideoDetail video={selectedVideo} onPlay={onPlay} />
            </Grid>
            <Grid item xs={4}>
                { showList && <VideoList 
            videos={videos} onVideoSelect={setSelectedVideo} />}{showLyrics && <Paper elevation={6} style={{ padding: "15px" }}><Counters video={selectedVideo}/></Paper>}
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


      
