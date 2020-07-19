import React, { useState } from "react";
import { Grid,Paper} from "@material-ui/core";
import 'react-aspect-ratio/aspect-ratio.css'
import './App.css';
import { Battleraplogy, Footer } from './components/layouts'
// import styles from './mystyle.module.css';
// import Terminology from "./terminology/index";
import { Counters,VideoList, VideoDetail, League,Nav,Signin,Carousel,Terminology } from "./components";
import {
  Switch,
  Route,
} from "react-router-dom";
import youtube from "./api/youtube";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { muscles } from "./store";

export default () => {
  // const [text, setText] = useState("Hi");
  // const [exercises, setExercises] = useState([]);
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [showList, setShowList] = useState(true)
  const [showLyrics, setShowLyrics] = useState(false)
 
  const onPlay =() => {
    setShowList(false) 
    // console.log('inside onPlay')
    setShowLyrics(true) 
  }
  
  async function getChannel(id) {
      try {const { data: { items: videos } } = await youtube.get("search", {
        params: {
          part: "snippet",
          channelId: id,

        } 
      });
    setVideos(videos);
   } 
    catch(err){
      console.log(err)
    }
  }

  return (
  
    <MuiThemeProvider>
    <React.Fragment>
    <Nav/> 
    <Switch>
    <Route exact path="/">
      <Carousel/>
    </Route>
    <Route exact path="/league">
        <Grid item xs={11}>
          <Grid container spacing={10}>
            <Grid item xs={8}>  
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
    
    <Footer muscles={muscles}/>
     </Route>
    <Route export path="/signin">
    <Signin/>
    </Route>
    </Switch>
    
    </React.Fragment>  
    </MuiThemeProvider>
  ); 
}
  // <Route export path="/battleraplogy">
    // <Battleraplogy/>
    // </Route>
    // <Route export path="/lyricscard">
    // <LyricsCard/>
    // </Route>
  
    // <SearchBar onSubmit={handleSubmit}/>
    // <div><img src="//yt3.ggpht.com/a/AATXAJyk1L5-eHwsfx6H0LCD9cA-UFQQ1ftcXOHA_nfdtA=s176-c-k-c0x00ffffff-no-rj-mo"/><img src="//yt3.ggpht.com/a/AATXAJyk0_56ZQQc7LOvuDf86jN754DOZoblFSjdj_Wh=s176-c-k-c0x00ffffff-no-rj-mo"/><img src="//yt3.ggpht.com/a/AATXAJwfFbPNm_7FMgULpqFEhlVGnKO9Q4kdFazxbHS0hg=s176-c-k-c0x00ffffff-no-rj-mo"/><img src="//yt3.ggpht.com/a/AATXAJwfFbPNm_7FMgULpqFEhlVGnKO9Q4kdFazxbHS0hg=s176-c-k-c0x00ffffff-no-rj-mo"/><img src=""/><img src="//yt3.ggpht.com/a/AATXAJwfFbPNm_7FMgULpqFEhlVGnKO9Q4kdFazxbHS0hg=s176-c-k-c0x00ffffff-no-rj-mo"/><img src=""/></div>

    // <h1>{text}</h1>
    // <button onClick={changeText}>Work</button>